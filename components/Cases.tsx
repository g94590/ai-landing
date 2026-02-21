'use client';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface CaseItem {
  niche: string;
  task: string;
  solution: string;
  result: string;
  timeline: string;
}

// TODO: replace with real case studies
const cases: CaseItem[] = [
  {
    niche: 'Онлайн-школа, 15 сотрудников',
    task: 'Тратили 20 часов в неделю на ответы в чатах',
    solution: 'AI-бот для поддержки + автоматические воронки',
    result: 'Сэкономили 18 часов/нед, конверсия +35%',
    timeline: 'Реализация: 3 недели',
  },
  {
    niche: 'Интернет-магазин, 8 сотрудников',
    task: 'Менеджеры вручную обрабатывали каждый заказ',
    solution: 'Автоматизация обработки заказов + интеграция CRM',
    result: 'Скорость обработки x3, ошибки -90%',
    timeline: 'Реализация: 2 недели',
  },
  {
    niche: 'Консалтинговое агентство, 5 человек',
    task: 'Руководитель тратил 3 часа/день на рутинные отчёты',
    solution: 'AI-ассистент для генерации отчётов + дашборд',
    result: 'Экономия 15 часов/нед, рост выручки на 20%',
    timeline: 'Реализация: 4 недели',
  },
];

export default function Cases() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const cardWidth = slider.children[0]?.clientWidth || 1;
      const gap = 24;
      setActiveIndex(Math.round(scrollLeft / (cardWidth + gap)));
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cardWidth = slider.children[0]?.clientWidth || 0;
    const gap = 24;
    slider.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
  };

  return (
    <section id="cases" className="bg-brand-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-primary text-center heading-accent">
            Результаты наших клиентов
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div ref={sliderRef} className="cases-slider pb-4 mt-14">
            {cases.map((item, i) => (
              <div key={i} className="case-card card-premium p-6 md:p-8 shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-xs font-medium text-brand-accent bg-brand-accent/8 px-3 py-1.5 rounded-full border border-brand-accent/15">
                    Типовой сценарий
                  </span>
                  <span className="text-xs text-brand-muted">{item.timeline}</span>
                </div>
                <p className="text-sm font-bold text-brand-primary mb-4">{item.niche}</p>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-lg bg-red-50/60">
                    <p className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-1">Проблема</p>
                    <p className="text-brand-primary text-[15px]">{item.task}</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight size={16} className="text-brand-muted" />
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50/60">
                    <p className="text-xs font-semibold text-brand-accent uppercase tracking-wide mb-1">Решение</p>
                    <p className="text-brand-primary text-[15px]">{item.solution}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-brand-success/8 to-brand-success/4 border border-brand-success/15">
                  <p className="text-xl font-bold text-brand-success">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-gradient-to-r from-brand-accent to-brand-purple w-8' : 'bg-brand-border w-2.5'
              }`}
              aria-label={`Кейс ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
