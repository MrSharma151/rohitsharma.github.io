import { Cloud, GitBranch, Container, Activity, Code2, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud & Azure',
    icon: Cloud,
    color: 'text-azure',
    bgColor: 'bg-azure/10',
    skills: [
      'Microsoft Azure',
      'Azure DevOps',
      'App Service',
      'Azure Functions',
      'Azure SQL',
      'Blob Storage',
      'Static Web Apps',
      'Application Insights',
    ],
  },
  {
    title: 'DevOps & CI/CD',
    icon: GitBranch,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: [
      'Azure Pipelines',
      'YAML Templates',
      'GitHub Actions',
      'Terraform',
      'ARM Templates',
      'Git',
      'Infrastructure as Code',
      'Release Management',
    ],
  },
  {
    title: 'Containers & Orchestration',
    icon: Container,
    color: 'text-docker',
    bgColor: 'bg-docker/10',
    skills: [
      'Docker',
      'Kubernetes',
      'Azure AKS',
      'Container Registry',
      'Helm Charts',
      'Pod Management',
      'Service Mesh',
      'GitOps',
    ],
  },
  {
    title: 'Monitoring & Observability',
    icon: Activity,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    skills: [
      'Grafana',
      'Prometheus',
      'Application Insights',
      'Azure Monitor',
      'Log Analytics',
      'Alerting',
      'Dashboards',
      'APM',
    ],
  },
  {
    title: 'Development Stack',
    icon: Code2,
    color: 'text-foreground',
    bgColor: 'bg-secondary',
    skills: [
      'ASP.NET Core',
      'React.js',
      'Node.js',
      'TypeScript',
      'REST APIs',
      'Next.js',
      'Express.js',
    ],
  },
  {
    title: 'Databases & OS',
    icon: Database,
    color: 'text-muted-foreground',
    bgColor: 'bg-muted/50',
    skills: [
      'SQL Server',
      'MySQL',
      'Linux',
      'Bash',
      'PowerShell',
      'Shell Scripting',
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
              A comprehensive toolkit for building, deploying, and managing cloud infrastructure
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="card-glass p-6 group hover:border-primary/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills Tags */}
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
                <span className="text-foreground">Kubernetes production deployments</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">Terraform modules & IaC best practices</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">Azure DevOps pipeline templating</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground">Cloud-native monitoring & alerts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
