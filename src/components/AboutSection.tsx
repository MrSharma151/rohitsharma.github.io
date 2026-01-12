import { Cloud, GitBranch, Server, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Enterprise-scale Azure cloud migrations and modernization',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description: 'Automated deployment workflows with Azure DevOps & YAML',
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Terraform, ARM templates, and reproducible infrastructure',
  },
  {
    icon: Zap,
    title: 'Containerization',
    description: 'Docker, Kubernetes, and AKS for cloud-native deployments',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              // About Me
            </span>
            <h2 className="section-title mt-4">
              Building the <span className="text-gradient">Future</span> of Infrastructure
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am an <span className="text-foreground font-medium">Azure Cloud & DevOps Engineer</span> specializing 
                in cloud migration, CI/CD automation, and deployment workflows using Azure DevOps.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary font-medium">DXC Technology</span>, I contribute to a large-scale 
                enterprise modernization program where I build and maintain CI/CD pipelines for legacy-to-cloud 
                migration, create automated deployment workflows with reusable YAML templates, and manage 
                segregated Azure cloud environments.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My career began in full-stack engineering, which helps me design DevOps workflows that align 
                well with developer needs and modern delivery practices. I focus heavily on 
                <span className="text-accent"> cloud automation</span>, 
                <span className="text-primary"> Infrastructure as Code</span>, and 
                <span className="text-azure"> cloud-native observability</span>.
              </p>

              {/* Terminal-style certification */}
              <div className="card-glass p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <span className="text-accent">$</span>
                  <span>certifications --list</span>
                </div>
                <div className="pl-4 text-foreground">
                  ✓ Microsoft Certified: Azure Fundamentals (AZ-900)
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="card-glass p-6 group hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
