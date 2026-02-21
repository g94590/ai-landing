'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Услуги', id: 'solutions' },
  { label: 'Как работаем', id: 'process' },
  { label: 'Гарантии', id: 'guarantees' },
  { label: 'Цены', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsVisible(currentY < lastScrollY || currentY < 100);
      setScrolled(currentY > 10);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${scrolled ? 'glass' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between">
          {/* TODO: replace [НАЗВАНИЕ] */}
          <button onClick={() => scrollTo('hero')} className="text-xl font-bold tracking-tight">
            <span className="gradient-text">[НАЗВАНИЕ]</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-accent after:to-brand-purple after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('cta')}
              className="btn-glow bg-gradient-to-r from-brand-accent to-brand-purple text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:-translate-y-0.5"
            >
              Бесплатный аудит
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-primary"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-brand-primary/50 backdrop-blur-sm" />
        <nav
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-8 pt-24 flex flex-col gap-6 transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-lg font-medium text-brand-primary hover:text-brand-accent transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('cta')}
            className="mt-4 bg-gradient-to-r from-brand-accent to-brand-purple text-white px-6 py-3.5 rounded-xl text-base font-semibold text-center shadow-lg shadow-brand-accent/25"
          >
            Бесплатный аудит
          </button>
        </nav>
      </div>
    </>
  );
}
