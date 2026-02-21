import { CheckCircle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const guarantees = [
  {
    title: 'Рабочий прототип за 1-2 недели',
    desc: 'Не ждёте месяцами — видите первый результат быстро.',
  },
  {
    title: 'Полная документация на русском',
    desc: 'Инструкции, видео-гайды, база знаний — всё понятно без разработчика.',
  },
  {
    title: 'Месяц бесплатной поддержки',
    desc: 'После сдачи проекта мы рядом: исправим баги, ответим на вопросы.',
  },
  {
    title: 'Исходный код — ваш',
    desc: 'Вы получаете полный доступ к системе и серверу. Никакой привязки к нам.',
  },
  {
    title: 'Обучение вашей команды',
    desc: 'Не просто сдаём и уходим — убеждаемся, что вы можете управлять решением сами.',
  },
];

export default function Guarantees() {
  return (
    <section id="guarantees" className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-primary text-center heading-accent">
            Работаем так, чтобы вам было спокойно
          </h2>
        </AnimateOnScroll>

        <div className="space-y-5 mt-14">
          {guarantees.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="flex gap-4 items-start p-5 rounded-xl hover:bg-brand-light/80 transition-colors duration-300 group">
                <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-brand-success/10 flex items-center justify-center group-hover:bg-brand-success/20 transition-colors">
                  <CheckCircle size={20} className="text-brand-success" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary text-[17px]">{item.title}</h3>
                  <p className="text-brand-muted mt-1 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
