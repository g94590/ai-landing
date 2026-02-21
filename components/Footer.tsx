'use client';

const navLinks = [
  { label: 'Услуги', id: 'solutions' },
  { label: 'Как работаем', id: 'process' },
  { label: 'Гарантии', id: 'guarantees' },
  { label: 'Цены', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-brand-primary text-white py-14 md:py-20 relative overflow-hidden">
      {/* Subtle gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo + description */}
          <div>
            <p className="text-xl font-bold mb-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">AI Business Systems</p>
            <p className="text-white/40 text-xs mb-3">Интеллектуальные системы автоматизации вашего бизнеса</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold mb-4 text-xs uppercase tracking-widest text-white/30">Навигация</p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-white/60 hover:text-white transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <p className="font-semibold mb-4 text-xs uppercase tracking-widest text-white/30">Контакты</p>
            {/* TODO: replace @[handle] and [email] */}
            <div className="space-y-3 text-sm text-white/60">
              <p>
                Telegram:{' '}
                <a href="https://t.me/[handle]" className="text-white/90 hover:text-brand-accent-light transition-colors">
                  @[handle]
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:[email]" className="text-white/90 hover:text-brand-accent-light transition-colors">
                  [email]
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-8 border-t border-white/8 text-center text-sm text-white/30">
          <p>&copy; 2026 AI Business Systems. Все права защищены. Политика конфиденциальности.</p>
        </div>
      </div>
    </footer>
  );
}
