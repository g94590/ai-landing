'use client';
import { useState } from 'react';
import ContactForm from './ContactForm';

export default function FinalCTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="cta" className="relative overflow-hidden py-16 md:py-28">
      {/* Gradient background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent via-[#5544CC] to-brand-purple" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)' }} />
      {/* Large decorative blur */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center text-white relative z-10">
        <h2 className="text-2xl md:text-[44px] font-bold leading-tight mb-6">
          Готовы узнать, сколько времени вы можете вернуть?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed opacity-85 mb-10 max-w-2xl mx-auto">
          Запишитесь на бесплатный 30-минутный аудит. Мы покажем конкретные точки автоматизации в вашем бизнесе и посчитаем потенциальную экономию.
        </p>

        {showForm ? (
          <ContactForm variant="dark" onClose={() => setShowForm(false)} />
        ) : (
          <>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-brand-accent hover:bg-gray-50 px-10 py-5 rounded-xl text-lg font-semibold uppercase tracking-wide transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-1 min-h-[56px]"
            >
              Записаться на бесплатный аудит
            </button>
            {/* TODO: replace [X] with actual number */}
            <p className="mt-5 text-sm opacity-60">
              Осталось [X] мест на этой неделе
            </p>
          </>
        )}
      </div>
    </section>
  );
}
