'use client';
import AnimateOnScroll from './AnimateOnScroll';

const tiers = [
  {
    name: 'Аудит и консультация',
    description: 'Разовая встреча или серия сессий. Получаете чёткий план автоматизации с оценкой ROI.',
    price: 'от 15 000 ₽',
    cta: 'Записаться',
    highlighted: false,
  },
  {
    name: 'Проект под ключ',
    description: 'Фиксированная стоимость, чёткие сроки, всё включено: от проектирования до обучения команды.',
    price: 'от 50 000 ₽',
    cta: 'Обсудить проект',
    highlighted: true,
    badge: 'Популярный',
  },
  {
    name: 'Поддержка и развитие',
    description: 'Ежемесячный ретейнер. Доработки, консультации, новый функционал по мере роста бизнеса.',
    price: 'от 30 000 ₽/мес',
    cta: 'Узнать подробнее',
    highlighted: false,
  },
];

export default function Pricing() {
  const scrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="pricing" className="bg-white py-16 md:py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-brand-purple/3 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-primary text-center heading-accent">
            Выберите формат работы
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
          {tiers.map((tier, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div
                className={`relative rounded-2xl p-6 md:p-8 flex flex-col h-full transition-all duration-400 ${
                  tier.highlighted
                    ? 'bg-gradient-to-b from-white to-brand-accent/3 border-2 border-brand-accent shadow-2xl shadow-brand-accent/10 lg:scale-105 order-first lg:order-none'
                    : 'card-premium'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-accent to-brand-purple text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-brand-accent/25">
                    {tier.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold text-brand-primary mb-3">{tier.name}</h3>
                <p className="text-brand-muted leading-relaxed mb-6 flex-1 text-[15px]">{tier.description}</p>

                {/* TODO: replace prices with actual values */}
                <p className="text-4xl font-bold gradient-text mb-6">{tier.price}</p>

                <button
                  onClick={scrollToCta}
                  className={`w-full min-h-[56px] rounded-xl text-lg font-semibold transition-all duration-300 cursor-pointer ${
                    tier.highlighted
                      ? 'btn-glow bg-gradient-to-r from-brand-accent to-brand-purple text-white shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:-translate-y-1'
                      : 'border-2 border-brand-accent/30 text-brand-accent hover:border-brand-accent hover:bg-brand-accent hover:text-white hover:shadow-lg hover:shadow-brand-accent/15'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
