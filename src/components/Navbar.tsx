import { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { navItems } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds = navItems.map((n) => n.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNav(href: string) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-ink-950/80 backdrop-blur-xl border-b border-white/5' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 text-ink-950 group-hover:scale-110 transition-transform">
            <Code2 size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display font-bold text-white text-lg tracking-tight">
            Basavaraj S. Bagale
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNav(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive ? 'text-accent-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <button
            onClick={() => handleNav('#contact')}
            className="px-5 py-2.5 rounded-lg bg-accent-500/10 border border-accent-500/30 text-accent-300 text-sm font-semibold hover:bg-accent-500 hover:text-ink-950 transition-all"
          >
            Let's Talk
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden mt-3 mx-4 glass rounded-xl p-4 animate-fade-in">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNav(item.href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
