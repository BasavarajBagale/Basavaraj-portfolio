import { Cloud, Server, Wrench, GitBranch, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { skillGroups } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = { Cloud, Server, Wrench, GitBranch };

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-slate-300">{name}</span>
        <span className="text-accent-400 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-ink-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-600 transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-400 font-mono text-sm tracking-widest uppercase">02 — Skills</span>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl mt-3 tracking-tight">
            Core technical skills
          </h2>
          <p className="mt-5 text-slate-400 text-lg">
            A cloud and DevOps skill set honed across enterprise production environments.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] ?? Cloud;
            return (
              <Reveal key={group.category} delay={gi * 120}>
                <div className="glass glass-hover rounded-2xl p-7 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-400/20 to-accent-600/20 border border-accent-500/20 text-accent-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-semibold text-white text-xl">{group.category}</h3>
                  </div>
                  <div className="space-y-5">
                    {group.skills.map((s, si) => (
                      <SkillBar key={s.name} name={s.name} level={s.level} delay={si * 100} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Tech marquee */}
        <Reveal delay={200} className="mt-14">
          <div className="glass rounded-2xl py-5 overflow-hidden">
            <div className="flex gap-8 animate-shimmer whitespace-nowrap" style={{ animationDuration: '30s' }}>
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex gap-8 items-center text-slate-500 font-display font-semibold text-lg shrink-0">
                  {['AWS', 'EC2', 'VPC', 'S3', 'IAM', 'RDS', 'MySQL', 'Docker', 'Kubernetes', 'EKS', 'Terraform', 'Ansible', 'Jenkins', 'Maven', 'CloudWatch', 'CloudFront', 'Linux', 'Python', 'Java', 'Bash', 'Agile'].map((tech) => (
                    <span key={tech} className="hover:text-accent-300 transition-colors">{tech}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
