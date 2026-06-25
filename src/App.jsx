import './App.css'
import { useState } from 'react'

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

const skills = [
  { name: 'Kubernetes', level: 'expert', color: 'var(--blue)' },
  { name: 'Docker', level: 'expert', color: 'var(--blue)' },
  { name: 'Terraform', level: 'expert', color: 'var(--purple)' },
  { name: 'AWS', level: 'expert', color: 'var(--orange)' },
  { name: 'Linux', level: 'expert', color: 'var(--yellow)' },
  { name: 'CI/CD', level: 'expert', color: 'var(--accent)' },
  { name: 'Prometheus', level: 'advanced', color: 'var(--orange)' },
  { name: 'Grafana', level: 'advanced', color: 'var(--blue)' },
  { name: 'GitHub Actions', level: 'advanced', color: 'var(--text-dim)' },
  { name: 'Helm', level: 'advanced', color: 'var(--blue)' },
  { name: 'ArgoCD', level: 'advanced', color: 'var(--accent)' },
  { name: 'Python', level: 'advanced', color: 'var(--yellow)' },
  { name: 'GCP', level: 'advanced', color: 'var(--blue)' },
  { name: 'Ansible', level: 'advanced', color: 'var(--red)' },
  { name: 'Istio', level: 'intermediate', color: 'var(--blue)' },
  { name: 'Elasticsearch', level: 'intermediate', color: 'var(--accent)' },
  { name: 'Go', level: 'intermediate', color: 'var(--blue)' },
  { name: 'Azure', level: 'intermediate', color: 'var(--blue)' },
]

const experiences = [
  {
    role: 'Senior Site Reliability Engineer',
    period: '2022 — Present',
    highlights: [
      'Reduced p99 latency by 40% through Kubernetes resource optimization and HPA tuning across 200+ microservices',
      'Designed and implemented GitOps workflow with ArgoCD, reducing deployment time from 45min to 4min',
      'Built observability stack (Prometheus + Grafana + Loki) serving 50TB/day with 99.99% uptime',
      'Chaos engineering pipeline reducing incident response time by 60%',
    ],
  },
  {
    role: 'Support Engineer',
    period: '2019 — 2020',
    highlights: [
      'Migrated 150+ services from EC2 to EKS with zero downtime, saving $120K/year in infrastructure costs',
      'Automated Terraform module registry serving 15 platform teams, reducing infra provisioning from 2 weeks to 2 hours',
      'Implemented centralized logging and alerting with ELK + ElastAlert, achieving 15min MTTR',
    ],
  },
  {
    role: 'Support Engineer',
    period: '2018 — 2019',
    highlights: [
      'Built internal developer platform (IDP) with Backstage, serving 8 squads with self-service infra',
      'Reduced cloud spend 35% via right-sizing, reserved instances, and spot instance strategy',
      'Designed multi-region disaster recovery plan achieving RTO < 1hr and RPO < 5min',
    ],
  },
]

const projects = [
  {
    title: 'Kubernetes Cost Optimizer',
    desc: 'Open-source tool that analyzes cluster resource utilization and recommends right-sizing, spot instances, and RI purchases. 500+ GitHub stars.',
    tags: ['Go', 'Kubernetes', 'Prometheus', 'Terraform'],
    url: 'https://github.com/pkalab/k8s-cost-optimizer',
  },
  {
    title: 'GitOps Pipeline Template',
    desc: 'Reusable GitHub Actions + ArgoCD pipeline template with integrated security scanning, drift detection, and Slack notifications.',
    tags: ['GitHub Actions', 'ArgoCD', 'Helm', 'Kubernetes'],
    url: 'https://github.com/pkalab/gitops-pipeline-template',
  },
  {
    title: 'Incident Response Bot',
    desc: 'Slack bot for automated incident response — creates war rooms, runs diagnostic playbooks, and posts postmortems. Used by 3 teams internally.',
    tags: ['Python', 'Slack API', 'AWS Lambda', 'Terraform'],
    url: 'https://github.com/pkalab/incident-bot',
  },
  {
    title: 'Infrastructure as Code Library',
    desc: 'Comprehensive Terraform module collection for AWS EKS, RDS, ElastiCache, and networking with compliance controls built in.',
    tags: ['Terraform', 'AWS', 'Vault', 'Consul'],
    url: 'https://github.com/pkalab/iac-library',
  },
]

function App() {
  const [activeNav, setActiveNav] = useState('About')
  const [expandedExp, setExpandedExp] = useState(0)

  const scrollTo = (id) => {
    setActiveNav(id)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <nav className="nav">
        <span className="nav-brand">~/portfolio</span>
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-link ${activeNav === item ? 'active' : ''}`}
              onClick={() => scrollTo(item)}
            >
              {item.toLowerCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="section hero-section">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for opportunities
        </div>
        <h1 className="hero-title">
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-name">Polina</span>
        </h1>
        <p className="hero-subtitle">
          <span className="typing-prefix">$</span> Site Reliability Engineer{' '}
          <span className="hero-sep">/</span> DevOps{' '}
          <span className="hero-sep">/</span> Platform Engineer
        </p>
        <p className="hero-desc">
          I design, build, and operate reliable infrastructure at scale.
          6+ years of experience managing production systems, reducing costs,
          and enabling developer velocity through automation and platform engineering.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('Contact')}>
            Contact Me
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('Projects')}>
            View Projects
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">99.99%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="stat">
            <span className="stat-value">200+</span>
            <span className="stat-label">Microservices</span>
          </div>
          <div className="stat">
            <span className="stat-value">40%</span>
            <span className="stat-label">Cost Reduction</span>
          </div>
          <div className="stat">
            <span className="stat-value">15min</span>
            <span className="stat-label">MTTR</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2 className="section-title">
          <span className="section-tag">##</span> Skills
        </h2>
        <p className="section-desc">Technologies and tools I work with daily</p>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className="skill-card" style={{ '--skill-color': s.color }}>
              <span className="skill-level-dot" />
              <span className="skill-name">{s.name}</span>
              <span className="skill-level">{s.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2 className="section-title">
          <span className="section-tag">##</span> Experience
        </h2>
        <p className="section-desc">Places I've built and operated production systems</p>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-card ${expandedExp === i ? 'expanded' : ''}`}
              onClick={() => setExpandedExp(expandedExp === i ? -1 : i)}
            >
              <div className="exp-header">
                <div className="exp-marker" />
                <div className="exp-info">
                  <h3 className="exp-role">{exp.role}</h3>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <div className="exp-body">
                <ul className="exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">
          <span className="section-tag">##</span> Projects
        </h2>
        <p className="section-desc">Open-source and internal tools I've built</p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <a key={i} className="project-card" href={p.url} target="_blank" rel="noreferrer">
              <div className="project-folder-icon">&#x1F4C1;</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">
          <span className="section-tag">##</span> Contact
        </h2>
        <p className="section-desc">Let's build reliable systems together</p>
        <div className="contact-cards">
          <a href="mailto:polikala64@gmail.com" className="contact-card">
            <span className="contact-icon">&#x2709;</span>
            <span className="contact-label">Email</span>
            <span className="contact-value">polikala64@gmail.com</span>
          </a>
          <a href="https://github.com/pkalab" className="contact-card" target="_blank" rel="noreferrer">
            <span className="contact-icon">&#xE000;</span>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/pkalab</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>Built with React + Vite &middot; &copy; {new Date().getFullYear()} Polina</p>
        <p className="footer-sub">
          <span className="footer-prompt">$</span> echo " deployed via GitHub Pages"</p>
      </footer>
    </div>
  )
}

export default App
