import { type FormEvent, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'basavarajb3270@gmail.com', href: 'mailto:basavarajb3270@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 96891 07375', href: 'tel:+919689107375' },
  { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: null },
];

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Tell me a bit more (10+ chars)';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  const fieldClass = (err?: string) =>
    `w-full px-4 py-3 rounded-xl bg-ink-900/60 border text-slate-200 placeholder:text-slate-600 outline-none transition-colors ${
      err ? 'border-red-500/50' : 'border-white/10 focus:border-accent-500/50'
    }`;

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-700/10 rounded-full blur-[120px]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-400 font-mono text-sm tracking-widest uppercase">06 — Contact</span>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl mt-3 tracking-tight">
            Let's connect
          </h2>
          <p className="mt-5 text-slate-400 text-lg">
            Open to cloud engineering roles, DevOps opportunities, and collaboration. My inbox is always open.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-7">
              <h3 className="font-display font-semibold text-white text-xl mb-5">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="grid place-items-center w-11 h-11 rounded-xl bg-accent-500/10 text-accent-300 shrink-0">
                      <c.icon size={18} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-white text-sm hover:text-accent-300 transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <div className="text-white text-sm">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="text-slate-500 text-xs mb-3">Find me online</div>
                <div className="flex gap-3">
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
            </div>

            <div className="glass rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-white font-semibold text-sm">Currently available</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open to full-time Cloud Engineer and DevOps roles. Typical response time is under 24 hours.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldClass(errors.name)}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldClass(errors.email)}
                    placeholder="jane@company.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className={`${fieldClass(errors.message)} resize-none`}
                  placeholder="Tell me about the role or project..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-400 to-accent-600 text-ink-950 font-semibold hover:shadow-lg hover:shadow-accent-500/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' && (
                  <>
                    <span className="w-4 h-4 border-2 border-ink-950/30 border-t-ink-950 rounded-full animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <Check size={18} /> Message sent!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
                {status === 'error' && <>Something went wrong — try again</>}
              </button>

              {status === 'sent' && (
                <p className="text-emerald-400 text-sm text-center">
                  Thanks for reaching out! I will get back to you soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
