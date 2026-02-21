'use client';
import { useState, useEffect, FormEvent } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { submitForm } from '@/lib/submitForm';

interface ContactFormProps {
  variant?: 'default' | 'dark';
  onClose?: () => void;
}

export default function ContactForm({ variant = 'default', onClose }: ContactFormProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [task, setTask] = useState('');
  const [website, setWebsite] = useState('');
  const [utm, setUtm] = useState({ utm_source: '', utm_medium: '', utm_campaign: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setUtm({
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
      });
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!name || name.trim().length < 2) {
      newErrors.name = 'Введите имя (минимум 2 символа)';
    }
    if (!contact || !contact.trim().match(/^(\+?[\d\s\-()]{7,}|@[\w\d_]{3,})$/)) {
      newErrors.contact = 'Введите телефон или @telegram';
    }
    if (task && task.length > 500) {
      newErrors.task = 'Максимум 500 символов';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      const ok = await submitForm({
        name: name.trim(),
        contact: contact.trim(),
        task: task.trim() || undefined,
        website,
        ...utm,
      });

      if (ok) {
        setStatus('success');
        // @ts-expect-error Yandex.Metrika global
        window.ym?.('[COUNTER_ID]', 'reachGoal', 'form_submit');
        setTimeout(() => {
          setStatus('idle');
          setName('');
          setContact('');
          setTask('');
        }, 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isDark = variant === 'dark';
  const isDisabled = status === 'loading' || status === 'success';

  const inputClasses = (hasError: boolean) =>
    `w-full px-5 py-3.5 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 text-[15px] ${
      hasError ? 'border-red-400 focus:ring-red-300/50' : isDark ? 'border-white/15 focus:ring-white/30 focus:border-white/30' : 'border-brand-border focus:ring-brand-accent/30 focus:border-brand-accent'
    } ${isDark ? 'bg-white/8 text-white placeholder-white/50' : 'bg-brand-light/50 text-brand-primary placeholder-brand-muted'} disabled:opacity-50`;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="absolute opacity-0 h-0 w-0 pointer-events-none"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <input
          type="text"
          placeholder="Как вас зовут?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isDisabled}
          className={inputClasses(!!errors.name)}
        />
        {errors.name && <p className="mt-1.5 text-sm text-red-400">{errors.name}</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Телефон или @telegram"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          disabled={isDisabled}
          className={inputClasses(!!errors.contact)}
        />
        {errors.contact && <p className="mt-1.5 text-sm text-red-400">{errors.contact}</p>}
      </div>

      <div>
        <textarea
          placeholder="Расскажите коротко о задаче"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          disabled={isDisabled}
          rows={3}
          className={`${inputClasses(!!errors.task)} resize-none`}
        />
        {errors.task && <p className="mt-1.5 text-sm text-red-400">{errors.task}</p>}
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full min-h-[56px] rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
          status === 'success'
            ? 'bg-brand-success text-white shadow-lg shadow-brand-success/25'
            : isDark
              ? 'bg-white text-brand-accent hover:bg-gray-50 shadow-xl shadow-black/15'
              : 'btn-glow bg-gradient-to-r from-brand-accent to-brand-purple text-white shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:-translate-y-0.5'
        } disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none`}
      >
        {status === 'loading' && <Loader2 size={20} className="animate-spin" />}
        {status === 'success' && <CheckCircle size={20} />}
        {status === 'loading'
          ? 'Отправляем...'
          : status === 'success'
            ? 'Спасибо! Мы свяжемся в течение 24 часов'
            : status === 'error'
              ? 'Ошибка. Попробуйте снова'
              : 'Получить бесплатный аудит процессов'}
      </button>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className={`w-full py-2 text-sm ${isDark ? 'text-white/50 hover:text-white' : 'text-brand-muted hover:text-brand-primary'} transition-colors`}
        >
          Закрыть
        </button>
      )}
    </form>
  );
}
