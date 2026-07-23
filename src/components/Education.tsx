import { GraduationCap, Award } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-accent-500/10 rounded-full blur-[120px]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-400 font-mono text-sm tracking-widest uppercase">05 — Education</span>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl mt-3 tracking-tight">
            Academic background
          </h2>
          <p className="mt-5 text-slate-400 text-lg">
            My foundation in computer science and applications.
          </p>
        </Reveal>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <Reveal key={edu.degree + edu.institute} delay={i * 120}>
              <div className="glass glass-hover rounded-2xl p-7 flex flex-col sm:flex-row gap-6 items-start">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400/20 to-accent-600/20 border border-accent-500/20 text-accent-300 shrink-0">
                  <GraduationCap size={26} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display font-bold text-white text-xl">{edu.degree}</h3>
                    <span className="text-accent-400 font-mono text-sm">{edu.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-0.5">{edu.field}</p>
                  <p className="text-slate-300 text-sm mt-3">{edu.institute}</p>
                  <p className="text-slate-500 text-sm mt-1">{edu.university}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-500/10 text-accent-300 text-sm font-medium">
                    <Award size={15} />
                    Scored {edu.percentage}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
