import { ArrowUp, Code2, Heart } from 'lucide-react';
import { navItems } from '@/data/portfolio';

export function Footer() {
  function handleNav(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <button onClick={toTop} className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 text-ink-950">
                <Code2 size={18} strokeWidth={2.5} />
              </span>
              <span className="font-display font-bold text-white text-lg">Basavaraj S. Bagale</span>
            </button>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Cloud Engineer & DevOps Practitioner building scalable, reliable AWS infrastructure.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-slate-500 hover:text-accent-300 text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-white font-semibold text-sm mb-4">Let's Connect</h4>
            <p className="text-slate-500 text-sm mb-4">
              Open for new opportunities and collaborations.
            </p>
            <button
              onClick={() => handleNav('#contact')}
              className="px-5 py-2.5 rounded-lg bg-accent-500/10 border border-accent-500/30 text-accent-300 text-sm font-semibold hover:bg-accent-500 hover:text-ink-950 transition-all"
            >
              Start a conversation
            </button>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Built with <Heart className="text-accent-500" size={14} /> by Basavaraj S. Bagale
          </p>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Basavaraj S. Bagale. All rights reserved.
          </p>
          <button
            onClick={toTop}
            className="grid place-items-center w-10 h-10 rounded-xl glass glass-hover text-slate-400 hover:text-accent-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
