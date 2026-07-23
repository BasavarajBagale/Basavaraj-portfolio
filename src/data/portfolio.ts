export interface Project {
  id: string;
  title: string;
  category: 'cloud' | 'devops';
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Enterprise Banking Cloud Migration',
    category: 'cloud',
    description: 'Migrated enterprise banking applications from on-premises infrastructure to AWS cloud with zero data loss.',
    longDescription:
      'Supported the migration of critical enterprise banking applications from on-premises infrastructure to AWS. Provisioned and managed AWS services including EC2, VPC, S3, IAM, RDS, ELB, and Auto Scaling Groups. Automated infrastructure deployment using Terraform and configuration management using Ansible. Developed CI/CD pipelines with Jenkins for automated application deployments. Containerized applications using Docker and deployed workloads on Kubernetes (EKS). Implemented cloud security controls using IAM roles, policies, and security groups to ensure compliance and data protection.',
    tags: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'Kubernetes (EKS)', 'Linux'],
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=900',
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    id: 'p2',
    title: 'Retail E-Commerce DevOps Automation',
    category: 'devops',
    description: 'Built CI/CD pipelines and automated cloud infrastructure for a large-scale retail e-commerce platform.',
    longDescription:
      'Managed cloud infrastructure and deployment pipelines for a large-scale retail e-commerce platform. Built and maintained CI/CD pipelines using Jenkins and GitHub for continuous integration and delivery. Automated infrastructure provisioning using Terraform to reduce manual deployment efforts significantly. Deployed and managed Docker containers on Kubernetes clusters for scalable microservices. Configured AWS services including EC2, S3, IAM, RDS, CloudFront, and Load Balancers. Implemented monitoring and logging solutions using AWS CloudWatch to ensure system availability and performance.',
    tags: ['AWS', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'GitHub'],
    image: 'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=900',
    link: '#',
    repo: '#',
    featured: true,
  },
];

export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud Platforms (AWS)',
    icon: 'Cloud',
    skills: [
      { name: 'EC2, VPC, S3 & CloudFront', level: 90 },
      { name: 'IAM & Security Groups', level: 88 },
      { name: 'RDS & MySQL', level: 85 },
      { name: 'CloudWatch & ELB', level: 85 },
      { name: 'Auto Scaling & High Availability', level: 84 },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    icon: 'GitBranch',
    skills: [
      { name: 'Jenkins', level: 88 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Maven & Nexus', level: 82 },
      { name: 'CI/CD & Build/Release Mgmt', level: 85 },
      { name: 'Agile, Scrum & SDLC', level: 86 },
    ],
  },
  {
    category: 'Containers & IaC',
    icon: 'Server',
    skills: [
      { name: 'Docker', level: 87 },
      { name: 'Kubernetes (EKS)', level: 83 },
      { name: 'Terraform', level: 86 },
      { name: 'Ansible', level: 82 },
    ],
  },
  {
    category: 'Languages & Systems',
    icon: 'Wrench',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Shell Scripting (Bash)', level: 85 },
      { name: 'Linux (Ubuntu, CentOS)', level: 87 },
      { name: 'AWS CLI', level: 88 },
    ],
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Cloud Engineer',
    company: 'Capgemini — Pune, Maharashtra',
    period: 'Oct 2023 — Present',
    description: 'Designing, deploying, automating, and managing AWS cloud infrastructure for enterprise clients.',
    achievements: [
      'Provisioned and managed AWS resources including EC2, VPC, S3, IAM, RDS, ELB, and Auto Scaling',
      'Implemented CI/CD pipelines using Jenkins, Git, and Maven to automate build, testing, and deployment',
      'Containerized applications using Docker and managed deployments through Kubernetes (EKS)',
      'Automated infrastructure provisioning and configuration management using Terraform and Ansible',
      'Monitored cloud infrastructure using AWS CloudWatch, ensuring system availability and performance',
      'Implemented IAM roles, policies, and security best practices for secure cloud access management',
      'Supported production environments, performed troubleshooting, and resolved infrastructure issues',
      'Participated in release management, deployment planning, and environment provisioning activities',
    ],
  },
];

export interface EducationItem {
  degree: string;
  field: string;
  institute: string;
  university: string;
  year: string;
  percentage: string;
}

export const education: EducationItem[] = [
  {
    degree: 'MCA',
    field: 'Master of Computer Applications',
    institute: 'IICMR College, Nigdi, Pune',
    university: 'Savitribai Phule Pune University',
    year: '2023',
    percentage: '66.18%',
  },
  {
    degree: 'BCS',
    field: 'Bachelor of Computer Science',
    institute: 'DHB Soni College, Solapur',
    university: 'Solapur University',
    year: '2021',
    percentage: '66.14%',
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '2.5+', label: 'Years Experience' },
  { value: '15+', label: 'AWS Services' },
  { value: '2', label: 'Enterprise Projects' },
  { value: '99.9%', label: 'Uptime Maintained' },
];

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
