import { Clock, BarChart3, Bot, Banknote } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const painPoints = [
  {
    icon: Clock,
    title: 'Вы — главное узкое место',
    text: 'Сами отвечаете клиентам, сами контролируете задачи, сами пишете контент. На стратегию и рост не остаётся времени.',
    gradient: 'from-blue-500/10 to-purple-500/5',
  },
  {
    icon: BarChart3,
    title: 'Хаос в данных и процессах',
    text: 'Информация разбросана по чатам, таблицам и заметкам. Нет единой системы, задачи теряются.',
    gradient: 'from-purple-500/10 to-blue-500/5',
  },
  {
    icon: Bot,
    title: 'AI пугает, а не помогает',
    text: 'Слышали про ChatGPT, пробовали — но не поняли, как встроить это в реальную работу бизнеса.',
    gradient: 'from-indigo-500/10 to-violet-500/5',
  },
  {
    icon: Banknote,
    title: 'Деньги уходят на рутину',
    text: 'Нанимаете людей на задачи, которые машина сделает быстрее, точнее и дешевле.',
    gradient: 'from-violet-500/10 to-blue-500/5',
  },
];

export default function PainPoints() {
  return (
    <section id="pain" className="bg-brand-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-primary text-center heading-accent">
            Знакомо?
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {painPoints.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="card-premium p-6 md:p-7 h-full group">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={28} className="text-brand-accent" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">{item.title}</h3>
                <p className="text-brand-muted leading-relaxed text-[15px]">{item.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <p className="mt-14 text-center text-brand-muted italic max-w-3xl mx-auto leading-relaxed text-[17px]">
            Если хотя бы один пункт про вас — мы можем это исправить. Без найма новых людей. Без миллионных бюджетов. С помощью{' '}
            <span className="text-brand-primary font-semibold not-italic">AI-автоматизации</span>, заточенной под ваш бизнес.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
