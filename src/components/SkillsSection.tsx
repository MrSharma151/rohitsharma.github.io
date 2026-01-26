import { Cloud, GitBranch, Container, Activity, Code2, Database, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud & Azure',
    icon: Cloud,
    color: 'text-azure',
    bgColor: 'bg-azure/10',
    skills: [
      'Microsoft Azure',
      'Azure Kubernetes Service (AKS)',
      'Azure App Service',
      'Azure Functions',
      'Azure Virtual Machines',
      'Azure SQL',
      'Blob Storage',
      'Azure Networking',
    ],
  },
  {
    title: 'DevOps & CI/CD',
    icon: GitBranch,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: [
      'CI/CD Automation',
      'Jenkins',
      'GitHub Actions',
      'GitLab',
      'Azure DevOps (Pipelines)',
      'Git',
      'GitOps',
      'Environment Promotion',
    ],
  },
  {
    title: 'Containers & Kubernetes',
    icon: Container,
    color: 'text-docker',
    bgColor: 'bg-docker/10',
    skills: [
      'Docker',
      'Kubernetes',
      'Azure Kubernetes Service (AKS)',
      'Container Registry (ACR)',
      'Helm',
      'Kustomize',
      'Ingress (NGINX)',
    ],
  },
  {
    title: 'Monitoring & Observability',
    icon: Activity,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    skills: [
      'Prometheus',
      'Grafana',
      'Azure Monitor',
      'Log Analytics',
      'Application Insights',
      'Alerting & Dashboards',
    ],
  },
  {
    title: 'Infrastructure & Automation',
    icon: Server,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: [
      'Terraform (IaC)',
      'Ansible',
      'Linux',
      'Bash / Shell Scripting',
      'Secrets Management',
      'RBAC',
    ],
  },
  {
    title: 'Application Background',
    icon: Code2,
    color: 'text-foreground',
    bgColor: 'bg-secondary',
    skills: [
      'ASP.NET Core',
      'Next.js',
      'React.js',
      'Node.js',
      'REST APIs',
      'SQL Server',
      'MySQL',
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              // Tech Stack
            </span>
            <h2 className="section-title mt-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">
              Tools and technologies used to build, deploy, and operate cloud-native platforms
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="card-glass p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning */}
          <div className="mt-12 card-glass p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm mb-4">
              <span className="text-accent">$</span>
              <span>learning --current</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 pl-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">AKS production-grade deployments</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">Advanced Terraform modules & patterns</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">GitOps workflows with Argo CD</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">Cloud-native monitoring & reliability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
