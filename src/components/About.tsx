import { Cloud, Zap, ShieldCheck, Activity } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const traits = [
  { icon: Cloud, title: 'AWS Native', text: 'Hands-on with EC2, VPC, S3, IAM, RDS, ELB, CloudFront, Auto Scaling, and CloudWatch.' },
  { icon: Zap, title: 'Automation First', text: 'Terraform and Ansible to provision and configure — no manual infrastructure.' },
  { icon: ShieldCheck, title: 'Security Minded', text: 'IAM roles, policies, security groups, and least-privilege access on every deployment.' },
  { icon: Activity, title: 'Production Ready', text: 'Monitoring with CloudWatch, high availability, and fast troubleshooting under pressure.' },
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-700/10 rounded-full blur-[100px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-400 font-mono text-sm tracking-widest uppercase">01 — About</span>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl mt-3 tracking-tight">
            Building reliable cloud infrastructure
          </h2>
          <p className="mt-5 text-slate-400 text-lg">
            I am a Cloud Engineer who automates, secures, and scales AWS environments for enterprise teams.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent-500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cloud data center infrastructure"
                  className="w-full h-[460px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                  <p className="text-white font-display font-semibold text-lg">
                    Based in Pune, Maharashtra, India
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    Cloud Engineer at Capgemini — supporting enterprise AWS environments
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <p className="text-slate-300 text-lg leading-relaxed">
                I am a <span className="text-accent-300 font-semibold">Cloud Engineer</span> with
                2.5+ years of experience designing, deploying, automating, and managing cloud
                infrastructure on AWS. I specialize in building scalable, highly available solutions
                using services like EC2, VPC, S3, IAM, RDS, CloudWatch, Auto Scaling, and ELB.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-slate-400 leading-relaxed">
                My day-to-day involves implementing CI/CD pipelines with Jenkins, containerizing
                applications with Docker, orchestrating workloads on Kubernetes (EKS), and
                provisioning infrastructure with Terraform and Ansible. I bring strong Linux
                administration, Shell and Python scripting, and cloud security best practices
                to every project.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-slate-400 leading-relaxed">
                I work within Agile teams to deliver enterprise-grade cloud solutions — from
                banking migrations to e-commerce platforms — always focused on automation,
                reliability, and security.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {traits.map((t, i) => (
                <Reveal key={t.title} delay={300 + i * 80}>
                  <div className="glass glass-hover rounded-2xl p-5 h-full">
                    <div className="grid place-items-center w-10 h-10 rounded-xl bg-accent-500/10 text-accent-300 mb-3">
                      <t.icon size={18} />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{t.title}</h3>
                    <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
