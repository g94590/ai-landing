'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface FAQItem {
  q: string;
  a: string;
}

const faqItems: FAQItem[] = [
  {
    q: 'Я не разбираюсь в технологиях. Смогу ли я этим управлять?',
    a: 'Именно для этого мы создаём подробную документацию и обучаем вашу команду. Большинство наших клиентов — не технические специалисты. Всё управление происходит через простые интерфейсы: Telegram, Notion, привычные вам инструменты.',
  },
  {
    q: 'Сколько стоит проект?',
    a: 'Зависит от задач. Мы начинаем с бесплатного аудита, после которого вы получаете точную оценку. Стартовые проекты — от 50 000 ₽. Мы всегда предлагаем решение, которое помещается в ваш бюджет.',
  },
  {
    q: 'Как быстро я увижу результат?',
    a: 'Первый рабочий прототип — через 1-2 недели. Это не презентация, а работающее решение, которое можно тестировать. Полный запуск — обычно 3-6 недель.',
  },
  {
    q: 'А что, если мне не понравится результат?',
    a: 'Мы показываем промежуточные результаты на каждом этапе. Вы видите, что получается, и вносите правки до финализации. Плюс — месяц бесплатной поддержки после сдачи.',
  },
  {
    q: 'Не окажусь ли я привязан к вам?',
    a: 'Нет. Вы получаете исходный код, документацию и полный доступ к серверу. Любой разработчик сможет продолжить работу.',
  },
  {
    q: 'У меня маленький бизнес. Мне это нужно?',
    a: 'AI-автоматизация особенно эффективна для малого бизнеса. Когда ресурсов мало, каждый час на счету. Мы начинаем с малого и масштабируем по мере роста.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
    // @ts-expect-error Yandex.Metrika global
    window.ym?.('[COUNTER_ID]', 'reachGoal', 'faq_open');
  };

  return (
    <section id="faq" className="bg-brand-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-primary text-center heading-accent">
            Частые вопросы
          </h2>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto mt-14 space-y-3">
          {faqItems.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 50}>
              <div
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === i
                    ? 'bg-white border-brand-accent/20 shadow-lg shadow-brand-accent/5'
                    : 'bg-white/60 border-brand-border/50 hover:bg-white hover:border-brand-border'
                }`}
              >
                <button
                  onClick={() => handleToggle(i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left text-base md:text-[17px] font-semibold text-brand-primary hover:text-brand-accent transition-colors gap-4"
                >
                  {item.q}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand-muted transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180 text-brand-accent' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-brand-muted leading-relaxed text-[15px]">{item.a}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
