import { CheckCircle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const solutions = [
  {
    emoji: '🤖',
    title: 'AI-сотрудники',
    description: 'Умные помощники, которые работают 24/7 — в Telegram, на сайте, в вашей CRM. Общаются с клиентами, создают контент, управляют задачами. Обучены на ваших данных и говорят вашим голосом.',
    features: [
      'Чат-боты с естественным диалогом и памятью',
      'AI-копирайтер в вашем стиле',
      'Персональный ассистент для задач',
      'Автоматические ответы и напоминания',
    ],
    result: 'вы освобождаете 5-10 часов в неделю',
  },
  {
    emoji: '⚙️',
    title: 'Автоматизация процессов',
    description: 'Связываем ваши разрозненные инструменты в единую систему. Данные не теряются, задачи не забываются, отчёты формируются сами.',
    features: [
      'Автоматические workflows',
      'Единая база данных',
      'Интеграция систем через API',
      'Уведомления и алерты',
    ],
    result: 'снижение ошибок, прозрачность, экономия',
  },
  {
    emoji: '🚀',
    title: 'Запуск и поддержка',
    description: 'Разворачиваем всё на вашем сервере, пишем документацию, обучаем команду. После сдачи вы не зависите от нас — но мы всегда рядом.',
    features: [
      'Настройка серверов под ключ',
      'Документация на русском',
      'Обучение команды',
      'Техподдержка и развитие',
    ],
    result: 'стабильная система, которую вы контролируете',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-16 md:py-24 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-accent/3 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-brand-primary heading-accent">Что мы делаем</h2>
            <p className="mt-6 text-brand-muted text-lg">
              Три направления, которые закрывают 90% задач автоматизации
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div className="card-premium p-6 md:p-8 h-full flex flex-col group">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">{item.title}</h3>
                <p className="text-brand-muted leading-relaxed mb-6 text-[15px]">{item.description}</p>

                <div className="mb-6 flex-1">
                  <p className="text-sm font-semibold text-brand-primary mb-3 uppercase tracking-wide">Что входит:</p>
                  <ul className="space-y-2.5">
                    {item.features.map((feature, j) => (
                      <li key={j} className="text-sm text-brand-muted flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-brand-accent mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-5 border-t border-brand-border/60">
                  <p className="text-brand-success font-bold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-success" />
                    Результат: {item.result}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
