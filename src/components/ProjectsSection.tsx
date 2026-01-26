import { ExternalLink, Github, Cloud, Container, GitBranch, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Framely – Mega DevOps AKS Project',
    description:
      'A production-style, end-to-end DevOps and GitOps implementation that re-architects an existing application into a Kubernetes-first delivery model on Azure.',
    type: 'DevOps • AKS • GitOps',
    techStack: [
      'Azure Kubernetes Service (AKS)',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Jenkins',
      'Argo CD',
      'Kustomize',
      'Prometheus',
      'Grafana',
    ],
    features: [
      'Clear separation of CI, CD, and infrastructure responsibilities',
      'Jenkins-based CI with image build and GitOps updates',
      'GitOps-driven deployments using Argo CD',
      'Environment promotion via Git (stage → prod)',
      'Local validation using Docker Compose and KIND',
    ],
    links: {
      github: 'https://github.com/MrSharma151/framely-mega-devops-aks',
    },
    icon: Container,
    gradient: 'from-docker/20 to-kubernetes/20',
  },
  {
    title: 'Framely – Optical E-commerce Platform',
    description:
      'A full-stack optical e-commerce platform deployed using Azure PaaS services, serving as the baseline implementation before Kubernetes re-architecture.',
    type: 'Azure PaaS',
    techStack: [
      'ASP.NET Core',
      'Next.js',
      'Azure App Service',
      'Azure SQL',
      'Azure Static Web Apps',
      'Blob Storage',
      'GitHub Actions',
    ],
    features: [
      'Customer storefront and admin dashboard',
      'Automated CI/CD using GitHub Actions',
      'Secure API backend and cloud-native services',
    ],
    links: {
      storefront: 'https://orange-wave-06841fe00.1.azurestaticapps.net/',
      admin: 'https://gentle-glacier-044690e00.1.azurestaticapps.net/',
      github: 'https://github.com/MrSharma151/Framely',
    },
    icon: Cloud,
    gradient: 'from-azure/20 to-primary/20',
  },
];

const architectureHighlights = [
  {
    title: 'CI Pipelines',
    description:
      'Automated build and validation pipelines using Jenkins and GitHub-based workflows.',
    icon: GitBranch,
  },
  {
    title: 'Infrastructure as Code',
    description:
      'Terraform-driven provisioning of Azure infrastructure and Kubernetes platforms.',
    icon: Layers,
  },
  {
    title: 'GitOps Delivery',
    description:
      'Git as the single source of truth with Argo CD reconciling Kubernetes state.',
    icon: Github,
  },
  {
    title: 'Kubernetes Platform',
    description:
      'Containerized workloads deployed and managed on Azure Kubernetes Service (AKS).',
    icon: Container,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              // Featured Work
            </span>
            <h2 className="section-title mt-4">
              Projects & <span className="text-gradient">Architecture</span>
            </h2>
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">
              Real-world DevOps, cloud, and Kubernetes implementations
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-8 mb-20">
            {projects.map((project) => (
              <div
                key={project.title}
                className="card-glass p-6 md:p-8 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}
                      >
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-bold text-foreground">
                            {project.title}
                          </h3>
                          <span className="px-2 py-0.5 rounded text-xs font-mono bg-primary/20 text-primary">
                            {project.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-2">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="pl-16 space-y-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="pl-16 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex lg:flex-col gap-3 lg:justify-center">
                    {project.links.storefront && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 lg:flex-none"
                        asChild
                      >
                        <a
                          href={project.links.storefront}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 lg:flex-none border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Highlights */}
          <div className="text-center mb-12">
            <span className="font-mono text-accent text-sm tracking-wider uppercase">
              // DevOps Focus
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-mono mt-4">
              Architecture & Workflows
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {architectureHighlights.map((item) => (
              <div
                key={item.title}
                className="card-glass p-5 text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
