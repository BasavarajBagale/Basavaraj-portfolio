import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, X } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { projects, type Project } from '@/data/portfolio';

const filters = [
  { key: 'all', label: 'All Work' },
  { key: 'cloud', label: 'Cloud' },
  { key: 'devops', label: 'DevOps' },
] as const;

export function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-700/10 rounded-full blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent-400 font-mono text-sm tracking-widest uppercase">03 — Work</span>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl mt-3 tracking-tight">
            Project experience
          </h2>
          <p className="mt-5 text-slate-400 text-lg">
            Enterprise cloud and DevOps projects I have contributed to. Click any project for details.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                filter === f.key
                  ? 'bg-accent-500 text-ink-950'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <button
                onClick={() => setSelected(p)}
                className="group relative w-full text-left rounded-2xl overflow-hidden glass glass-hover h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/30 to-transparent" />
                  {p.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-slate-300 text-xs font-medium capitalize">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-semibold text-white text-xl group-hover:text-accent-300 transition-colors">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="text-slate-500 group-hover:text-accent-300 group-hover:rotate-45 transition-all shrink-0" size={20} />
                  </div>
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-ink-700/60 text-slate-400 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center p-4 bg-ink-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto glass rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 grid place-items-center w-9 h-9 rounded-full bg-ink-900/80 text-slate-400 hover:text-white hover:bg-ink-700 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-800 to-transparent" />
        </div>
        <div className="p-7">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-accent-500/10 text-accent-300 text-xs font-medium capitalize">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold">
                Featured
              </span>
            )}
          </div>
          <h3 className="font-display font-bold text-white text-2xl">{project.title}</h3>
          <p className="mt-4 text-slate-300 leading-relaxed">{project.longDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-ink-700/60 text-slate-300 text-sm font-mono">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7 flex gap-3">
            {project.link && (
              <a
                href={project.link}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-500 text-ink-950 font-semibold text-sm hover:bg-accent-400 transition-colors"
              >
                <ExternalLink size={16} /> View Details
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-white font-semibold text-sm"
              >
                <Github size={16} /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
