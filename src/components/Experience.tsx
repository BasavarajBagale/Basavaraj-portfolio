import { Briefcase, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-accent-700/10 rounded-full blur-[120px]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-400 font-mono text-sm tracking-widest uppercase">04 — Experience</span>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl mt-3 tracking-tight">
            Professional experience
          </h2>
          <p className="mt-5 text-slate-400 text-lg">
            Enterprise cloud engineering and DevOps work at Capgemini.
          </p>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/60 via-accent-700/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role + exp.company} delay={i * 120}>
                <div className="relative pl-14 sm:pl-16">
                  {/* Node */}
                  <div className="absolute left-0 top-1 grid place-items-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-ink-800 border border-accent-500/30 text-accent-300">
                    <Briefcase size={18} />
                  </div>

                  <div className="glass glass-hover rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display font-semibold text-white text-lg">{exp.role}</h3>
                      <span className="text-accent-400 font-mono text-sm">{exp.period}</span>
                    </div>
                    <p className="text-accent-300 font-medium text-sm mt-0.5">{exp.company}</p>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">{exp.description}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check className="text-accent-400 mt-0.5 shrink-0" size={16} />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
