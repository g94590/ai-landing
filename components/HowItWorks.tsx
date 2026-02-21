import AnimateOnScroll from './AnimateOnScroll';

const steps = [
  {
    number: 1,
    title: 'Бесплатный аудит',
    desc: 'Созваниваемся на 30 минут. Разбираем ваши процессы, находим точки автоматизации, считаем потенциальную экономию.',
  },
  {
    number: 2,
    title: 'Архитектура и план',
    desc: 'Проектируем решение, согласовываем бюджет и сроки. Вы точно знаете, что получите и когда.',
  },
  {
    number: 3,
    title: 'Разработка и запуск',
    desc: 'Создаём прототип за 1-2 недели. Показываем промежуточные результаты. Запускаем на вашем сервере.',
  },
  {
    number: 4,
    title: 'Обучение и поддержка',
    desc: 'Передаём документацию, обучаем команду. Месяц бесплатной поддержки. Далее — по необходимости.',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="bg-brand-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-primary text-center heading-accent">
            От заявки до результата — 4 шага
          </h2>
        </AnimateOnScroll>

        {/* Desktop timeline */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative mt-16">
          {/* Connecting line with gradient */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-accent via-brand-purple to-brand-accent opacity-30" />
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 150}>
              <div className="relative text-center px-6">
                <div className="step-badge w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto relative z-10">
                  {step.number}
                </div>
                <h3 className="mt-5 font-bold text-lg text-brand-primary">{step.title}</h3>
                <p className="mt-2 text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative pl-20 mt-14">
          <div className="absolute left-[26px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent to-brand-purple opacity-30" />
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 100}>
              <div className="relative pb-10 last:pb-0">
                <div className="absolute -left-[46px] step-badge w-10 h-10 rounded-full text-white text-lg font-bold flex items-center justify-center z-10">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-primary">{step.title}</h3>
                  <p className="mt-1 text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
