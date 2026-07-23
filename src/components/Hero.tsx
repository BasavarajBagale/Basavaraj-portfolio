import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { stats } from '@/data/portfolio';

function scrollToNext() {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
}

const socials = [
  { icon: Mail, href: 'mailto:basavarajb3270@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+918830812644', label: 'Phone' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Hero() {
  const typed = useTypewriter();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-700/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/50 to-ink-950" />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-slate-300">Open to new opportunities</span>
          </div>

          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight animate-fade-up">
            Basavaraj S. Bagale
          </h1>

          <div className="h-9 mt-4 flex items-center justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <span className="font-display text-xl sm:text-2xl lg:text-3xl text-slate-300">
              {typed}
              <span className="text-accent-400 animate-blink">|</span>
            </span>
          </div>

          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Cloud Engineer with 2.5+ years of experience designing, deploying, and automating
            AWS infrastructure. I build CI/CD pipelines, containerized workloads, and scalable
            cloud solutions for enterprise environments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-400 to-accent-600 text-ink-950 font-semibold hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-xl glass glass-hover text-white font-semibold"
            >
              Get in Touch
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid place-items-center w-11 h-11 rounded-xl glass glass-hover text-slate-300 hover:text-accent-300"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Code card */}
        <div className="lg:col-span-5 hidden lg:block animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/30 to-accent-700/30 rounded-2xl blur-xl animate-glow" />
            <div className="relative glass rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-ink-900/60">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-slate-500 font-mono">engineer.tf</span>
              </div>
              <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto"><code><span className="text-violet-400">resource</span> <span className="text-sky-300">"cloud_engineer"</span> <span className="text-sky-300">"basavaraj"</span> {'{'}
<span className="text-emerald-300">  name</span>      <span className="text-slate-400">=</span> <span className="text-amber-300">"Basavaraj S. Bagale"</span>
<span className="text-emerald-300">  role</span>      <span className="text-slate-400">=</span> <span className="text-amber-300">"Cloud Engineer"</span>
<span className="text-emerald-300">  cloud</span>     <span className="text-slate-400">=</span> [<span className="text-amber-300">"AWS"</span>]
<span className="text-emerald-300">  services</span>  <span className="text-slate-400">=</span> [<span className="text-amber-300">"EC2"</span>, <span className="text-amber-300">"VPC"</span>, <span className="text-amber-300">"S3"</span>, <span className="text-amber-300">"RDS"</span>]
<span className="text-emerald-300">  iac</span>       <span className="text-slate-400">=</span> [<span className="text-amber-300">"Terraform"</span>, <span className="text-amber-300">"Ansible"</span>]
<span className="text-emerald-300">  cicd</span>      <span className="text-slate-400">=</span> [<span className="text-amber-300">"Jenkins"</span>, <span className="text-amber-300">"Git"</span>]
<span className="text-emerald-300">  k8s</span>       <span className="text-slate-400">=</span> <span className="text-amber-300">"EKS"</span>
<span className="text-emerald-300">  available</span> <span className="text-slate-400">=</span> <span className="text-orange-300">true</span>
{'}'}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-ink-950/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {stats.map((s) => (
            <div key={s.label} className="py-5 px-4 text-center">
              <div className="font-display font-bold text-2xl sm:text-3xl text-gradient">{s.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent-300 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
