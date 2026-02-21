'use client';
import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="hero" className="pt-20 md:pt-24 relative overflow-hidden">
      {/* Background gradient decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-accent/6 via-brand-purple/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-brand-purple/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 min-h-[90vh] flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center w-full py-12">
          {/* Left column — text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/5 border border-brand-accent/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-success" />
              <span className="text-sm font-medium text-brand-accent">AI-автоматизация для бизнеса</span>
            </div>
            <h1 className="text-3xl md:text-[52px] font-bold leading-tight md:leading-[1.15] text-brand-primary">
              Внедрим AI в ваш бизнес —{' '}
              <span className="gradient-text">чтобы рутина исчезла</span>, а вы занялись ростом
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-brand-muted max-w-xl">
              Создаём AI-ассистентов, автоматизируем процессы и связываем ваши системы в единое целое. Первый результат — через 2 недели.
            </p>
            <div className="mt-8">
              {showForm ? (
                <ContactForm onClose={() => setShowForm(false)} />
              ) : (
                <>
                  <button
                    onClick={() => setShowForm(true)}
                    className="btn-glow bg-gradient-to-r from-brand-accent to-brand-purple text-white px-8 py-4 rounded-xl text-lg font-semibold uppercase tracking-wide transition-all duration-300 shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:-translate-y-1 min-h-[56px]"
                  >
                    Получить бесплатный аудит процессов
                  </button>
                  <p className="mt-3 text-sm text-brand-muted">
                    30 минут. Покажем, где вы теряете время и деньги. Без обязательств.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Right column — AI Business Process Mind Map */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] bg-gradient-to-br from-brand-accent/15 via-brand-purple/10 to-brand-accent/5 rounded-full blur-3xl animate-glow" />
            </div>

            <svg width="560" height="560" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <defs>
                <linearGradient id="lineGradAB" x1="280" y1="280" x2="280" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4361EE" /><stop offset="1" stopColor="#7209B7" />
                </linearGradient>
                <linearGradient id="lineGradH" x1="280" y1="280" x2="280" y2="480" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4361EE" /><stop offset="1" stopColor="#10B981" />
                </linearGradient>
                <linearGradient id="centerGrad" x1="230" y1="230" x2="330" y2="330" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4361EE" /><stop offset="1" stopColor="#7209B7" />
                </linearGradient>
                <filter id="glow6" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="glow3" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="cardShadow" x="-10%" y="-10%" width="130%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0F0F1A" floodOpacity="0.12" />
                </filter>
              </defs>

              {/* ===== СОЕДИНИТЕЛЬНЫЕ ЛИНИИ (от центра к нодам) ===== */}
              {/* AI → CRM (верх-лево) */}
              <line x1="265" y1="260" x2="120" y2="115" stroke="url(#lineGradAB)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse-line" opacity="0.6" />
              {/* AI → Telegram (верх) */}
              <line x1="280" y1="250" x2="280" y2="95" stroke="url(#lineGradAB)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse-line-delay-1" opacity="0.6" />
              {/* AI → Аналитика (верх-право) */}
              <line x1="295" y1="260" x2="440" y2="115" stroke="url(#lineGradAB)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse-line-delay-2" opacity="0.6" />
              {/* AI → Email (лево) */}
              <line x1="250" y1="280" x2="95" y2="280" stroke="#4361EE" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse-line-delay-3" opacity="0.5" />
              {/* AI → База данных (право) */}
              <line x1="310" y1="280" x2="465" y2="280" stroke="#7209B7" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse-line" opacity="0.5" />
              {/* AI → Документы (низ-лево) */}
              <line x1="265" y1="300" x2="120" y2="445" stroke="url(#lineGradH)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse-line-delay-1" opacity="0.6" />
              {/* AI → Бот (низ) */}
              <line x1="280" y1="310" x2="280" y2="465" stroke="url(#lineGradH)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse-line-delay-2" opacity="0.6" />
              {/* AI → Задачи (низ-право) */}
              <line x1="295" y1="300" x2="440" y2="445" stroke="url(#lineGradH)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse-line-delay-3" opacity="0.6" />

              {/* ===== Вторичные связи между нодами (тонкие) ===== */}
              <line x1="120" y1="130" x2="280" y2="95" stroke="#4361EE" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />
              <line x1="280" y1="95" x2="440" y2="130" stroke="#7209B7" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />
              <line x1="120" y1="430" x2="280" y2="465" stroke="#10B981" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />
              <line x1="280" y1="465" x2="440" y2="430" stroke="#10B981" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />
              <line x1="80" y1="280" x2="120" y2="130" stroke="#4361EE" strokeWidth="1" strokeDasharray="3 5" opacity="0.15" />
              <line x1="480" y1="280" x2="440" y2="130" stroke="#7209B7" strokeWidth="1" strokeDasharray="3 5" opacity="0.15" />

              {/* ===== Декор: точки на пересечениях ===== */}
              <circle cx="195" cy="195" r="3" fill="#4361EE" opacity="0.3" className="animate-pulse-line" />
              <circle cx="365" cy="195" r="3" fill="#7209B7" opacity="0.3" className="animate-pulse-line-delay-1" />
              <circle cx="195" cy="365" r="3" fill="#10B981" opacity="0.3" className="animate-pulse-line-delay-2" />
              <circle cx="365" cy="365" r="3" fill="#F59E0B" opacity="0.3" className="animate-pulse-line-delay-3" />

              {/* ===== ЦЕНТРАЛЬНЫЙ НОД — AI ===== */}
              <g filter="url(#glow6)">
                <circle cx="280" cy="280" r="52" fill="url(#centerGrad)" />
              </g>
              <circle cx="280" cy="280" r="52" stroke="white" strokeWidth="1" opacity="0.15" fill="none" />
              {/* Внутреннее кольцо */}
              <circle cx="280" cy="280" r="40" stroke="white" strokeWidth="0.5" opacity="0.2" fill="none" />
              {/* Текст AI */}
              <text x="280" y="275" textAnchor="middle" fill="white" fontWeight="700" fontSize="28" fontFamily="Inter, sans-serif">AI</text>
              <text x="280" y="298" textAnchor="middle" fill="white" fontWeight="400" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.7">движок</text>
              {/* Орбита */}
              <circle cx="280" cy="280" r="65" stroke="#4361EE" strokeWidth="1" strokeDasharray="2 6" opacity="0.2" className="animate-pulse-line" fill="none" />

              {/* ===== НОД 1: CRM (верх-лево) ===== */}
              <g filter="url(#cardShadow)">
                <rect x="68" y="72" width="104" height="72" rx="16" fill="white" />
                <rect x="68" y="72" width="104" height="72" rx="16" stroke="#D0D5DD" strokeWidth="1" fill="none" opacity="0.6" />
              </g>
              {/* Иконка CRM */}
              <rect x="82" y="84" width="28" height="28" rx="8" fill="#4361EE" opacity="0.1" />
              <circle cx="92" cy="94" r="4" fill="none" stroke="#4361EE" strokeWidth="1.5" />
              <circle cx="100" cy="102" r="3" fill="none" stroke="#4361EE" strokeWidth="1.5" />
              <line x1="95" y1="97" x2="98" y2="100" stroke="#4361EE" strokeWidth="1.5" />
              <text x="82" y="129" fill="#0F0F1A" fontWeight="600" fontSize="12" fontFamily="Inter, sans-serif">CRM</text>

              {/* ===== НОД 2: Telegram (верх-центр) ===== */}
              <g filter="url(#cardShadow)">
                <rect x="228" y="48" width="104" height="72" rx="16" fill="white" />
                <rect x="228" y="48" width="104" height="72" rx="16" stroke="#D0D5DD" strokeWidth="1" fill="none" opacity="0.6" />
              </g>
              {/* Иконка самолётик */}
              <rect x="242" y="60" width="28" height="28" rx="8" fill="#7209B7" opacity="0.1" />
              <path d="M250 78 L262 72 L256 78 L258 83Z" fill="#7209B7" opacity="0.7" />
              <text x="242" y="105" fill="#0F0F1A" fontWeight="600" fontSize="12" fontFamily="Inter, sans-serif">Telegram</text>

              {/* ===== НОД 3: Аналитика (верх-право) ===== */}
              <g filter="url(#cardShadow)">
                <rect x="388" y="72" width="104" height="72" rx="16" fill="white" />
                <rect x="388" y="72" width="104" height="72" rx="16" stroke="#D0D5DD" strokeWidth="1" fill="none" opacity="0.6" />
              </g>
              {/* Иконка — столбчатый график */}
              <rect x="402" y="84" width="28" height="28" rx="8" fill="#F59E0B" opacity="0.1" />
              <rect x="407" y="100" width="4" height="8" rx="1" fill="#F59E0B" opacity="0.7" />
              <rect x="413" y="96" width="4" height="12" rx="1" fill="#F59E0B" opacity="0.7" />
              <rect x="419" y="92" width="4" height="16" rx="1" fill="#F59E0B" opacity="0.7" />
              <text x="402" y="129" fill="#0F0F1A" fontWeight="600" fontSize="12" fontFamily="Inter, sans-serif">Аналитика</text>

              {/* ===== НОД 4: Email / Рассылки (лево) ===== */}
              <g filter="url(#cardShadow)">
                <rect x="18" y="244" width="104" height="72" rx="16" fill="white" />
                <rect x="18" y="244" width="104" height="72" rx="16" stroke="#D0D5DD" strokeWidth="1" fill="none" opacity="0.6" />
              </g>
              {/* Иконка — конверт */}
              <rect x="32" y="256" width="28" height="28" rx="8" fill="#4361EE" opacity="0.1" />
              <rect x="38" y="264" width="16" height="12" rx="2" fill="none" stroke="#4361EE" strokeWidth="1.5" />
              <path d="M38 264 L46 272 L54 264" fill="none" stroke="#4361EE" strokeWidth="1.5" />
              <text x="32" y="301" fill="#0F0F1A" fontWeight="600" fontSize="12" fontFamily="Inter, sans-serif">Рассылки</text>

              {/* ===== НОД 5: База данных (право) ===== */}
              <g filter="url(#cardShadow)">
                <rect x="438" y="244" width="104" height="72" rx="16" fill="white" />
                <rect x="438" y="244" width="104" height="72" rx="16" stroke="#D0D5DD" strokeWidth="1" fill="none" opacity="0.6" />
              </g>
              {/* Иконка — цилиндр базы */}
              <rect x="452" y="256" width="28" height="28" rx="8" fill="#7209B7" opacity="0.1" />
              <ellipse cx="466" cy="264" rx="8" ry="3" fill="none" stroke="#7209B7" strokeWidth="1.5" />
              <line x1="458" y1="264" x2="458" y2="278" stroke="#7209B7" strokeWidth="1.5" />
              <line x1="474" y1="264" x2="474" y2="278" stroke="#7209B7" strokeWidth="1.5" />
              <ellipse cx="466" cy="278" rx="8" ry="3" fill="none" stroke="#7209B7" strokeWidth="1.5" />
              <text x="452" y="301" fill="#0F0F1A" fontWeight="600" fontSize="11" fontFamily="Inter, sans-serif">Данные</text>

              {/* ===== НОД 6: Документы (низ-лево) ===== */}
              <g filter="url(#cardShadow)">
                <rect x="68" y="416" width="104" height="72" rx="16" fill="white" />
                <rect x="68" y="416" width="104" height="72" rx="16" stroke="#D0D5DD" strokeWidth="1" fill="none" opacity="0.6" />
              </g>
              {/* Иконка — файл */}
              <rect x="82" y="428" width="28" height="28" rx="8" fill="#10B981" opacity="0.1" />
              <rect x="89" y="434" width="12" height="16" rx="2" fill="none" stroke="#10B981" strokeWidth="1.5" />
              <path d="M95 434 L101 440" stroke="#10B981" strokeWidth="1.5" />
              <line x1="91" y1="441" x2="99" y2="441" stroke="#10B981" strokeWidth="1" opacity="0.5" />
              <line x1="91" y1="444" x2="97" y2="444" stroke="#10B981" strokeWidth="1" opacity="0.5" />
              <text x="82" y="473" fill="#0F0F1A" fontWeight="600" fontSize="11" fontFamily="Inter, sans-serif">Документы</text>

              {/* ===== НОД 7: Чат-бот (низ-центр) ===== */}
              <g filter="url(#cardShadow)">
                <rect x="228" y="440" width="104" height="72" rx="16" fill="white" />
                <rect x="228" y="440" width="104" height="72" rx="16" stroke="#D0D5DD" strokeWidth="1" fill="none" opacity="0.6" />
              </g>
              {/* Иконка — чат пузырь */}
              <rect x="242" y="452" width="28" height="28" rx="8" fill="#4361EE" opacity="0.1" />
              <rect x="248" y="458" width="16" height="11" rx="4" fill="none" stroke="#4361EE" strokeWidth="1.5" />
              <path d="M252 469 L250 474 L256 469" fill="#4361EE" opacity="0.5" />
              <circle cx="254" cy="463" r="1.2" fill="#4361EE" opacity="0.6" />
              <circle cx="258" cy="463" r="1.2" fill="#4361EE" opacity="0.6" />
              <circle cx="262" cy="463" r="1.2" fill="#4361EE" opacity="0.6" />
              <text x="242" y="497" fill="#0F0F1A" fontWeight="600" fontSize="12" fontFamily="Inter, sans-serif">Чат-бот</text>

              {/* ===== НОД 8: Задачи (низ-право) ===== */}
              <g filter="url(#cardShadow)">
                <rect x="388" y="416" width="104" height="72" rx="16" fill="white" />
                <rect x="388" y="416" width="104" height="72" rx="16" stroke="#D0D5DD" strokeWidth="1" fill="none" opacity="0.6" />
              </g>
              {/* Иконка — галочки в списке */}
              <rect x="402" y="428" width="28" height="28" rx="8" fill="#F59E0B" opacity="0.1" />
              <path d="M408 440 L412 444 L418 436" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="421" y1="440" x2="425" y2="440" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              <path d="M408 448 L412 452 L418 444" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
              <line x1="421" y1="448" x2="425" y2="448" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
              <text x="402" y="473" fill="#0F0F1A" fontWeight="600" fontSize="12" fontFamily="Inter, sans-serif">Задачи</text>

              {/* ===== Бегущие точки-данные по линиям (плавные, медленные) ===== */}
              <circle r="3" fill="#4361EE" opacity="0.7" filter="url(#glow3)">
                <animateMotion dur="6s" repeatCount="indefinite" path="M120 115 L265 260" />
              </circle>
              <circle r="3" fill="#7209B7" opacity="0.7" filter="url(#glow3)">
                <animateMotion dur="7s" repeatCount="indefinite" path="M280 95 L280 250" begin="1s" />
              </circle>
              <circle r="3" fill="#4361EE" opacity="0.7" filter="url(#glow3)">
                <animateMotion dur="6.5s" repeatCount="indefinite" path="M280 310 L280 465" begin="2s" />
              </circle>
              <circle r="3" fill="#7209B7" opacity="0.7" filter="url(#glow3)">
                <animateMotion dur="8s" repeatCount="indefinite" path="M310 280 L465 280" begin="0.5s" />
              </circle>
              <circle r="3" fill="#F59E0B" opacity="0.7" filter="url(#glow3)">
                <animateMotion dur="7s" repeatCount="indefinite" path="M295 300 L440 445" begin="3s" />
              </circle>
              <circle r="3" fill="#10B981" opacity="0.7" filter="url(#glow3)">
                <animateMotion dur="7.5s" repeatCount="indefinite" path="M265 300 L120 445" begin="1.5s" />
              </circle>
              <circle r="3" fill="#F59E0B" opacity="0.7" filter="url(#glow3)">
                <animateMotion dur="6.8s" repeatCount="indefinite" path="M440 115 L295 260" begin="2.5s" />
              </circle>
              <circle r="3" fill="#4361EE" opacity="0.7" filter="url(#glow3)">
                <animateMotion dur="8.5s" repeatCount="indefinite" path="M95 280 L250 280" begin="4s" />
              </circle>

              {/* ===== Декоративные мелкие точки — фон ===== */}
              <circle cx="40" cy="180" r="1.5" fill="#4361EE" opacity="0.15" />
              <circle cx="520" cy="180" r="1.5" fill="#7209B7" opacity="0.15" />
              <circle cx="40" cy="380" r="1.5" fill="#10B981" opacity="0.15" />
              <circle cx="520" cy="380" r="1.5" fill="#F59E0B" opacity="0.15" />
              <circle cx="160" cy="40" r="1.5" fill="#4361EE" opacity="0.1" />
              <circle cx="400" cy="40" r="1.5" fill="#7209B7" opacity="0.1" />
              <circle cx="160" cy="520" r="1.5" fill="#10B981" opacity="0.1" />
              <circle cx="400" cy="520" r="1.5" fill="#F59E0B" opacity="0.1" />

              {/* Декоративные кольца */}
              <circle cx="280" cy="280" r="160" stroke="#4361EE" strokeWidth="0.5" opacity="0.06" fill="none" />
              <circle cx="280" cy="280" r="220" stroke="#7209B7" strokeWidth="0.5" opacity="0.04" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Social proof bar */}
      <div className="relative z-10 bg-gradient-to-r from-brand-light via-white to-brand-light py-6 border-y border-brand-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-brand-muted">
          {/* TODO: replace [X] with actual number */}
          <span className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">[X]</span>
            <span>проектов реализовано</span>
          </span>
          <span className="hidden sm:inline text-brand-border">|</span>
          <span className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">1-2</span>
            <span>недели до прототипа</span>
          </span>
          <span className="hidden sm:inline text-brand-border">|</span>
          <span className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">30</span>
            <span>дней поддержки бесплатно</span>
          </span>
        </div>
      </div>
    </section>
  );
}
