import { Cloud, GitBranch, Server, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Cloud,
    title: 'Azure Cloud Platforms',
    description: 'Enterprise-scale cloud migration and modernization on Microsoft Azure',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & GitOps',
    description: 'Automated delivery pipelines and Git-driven deployment workflows',
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Terraform-based, reproducible, and version-controlled infrastructure',
  },
  {
    icon: Zap,
    title: 'Kubernetes & Containers',
    description: 'Docker and AKS for scalable, cloud-native application delivery',
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
              Designing Reliable <span className="text-gradient">Cloud Platforms</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-foreground font-medium">DevOps Engineer</span> working on 
                <span className="text-primary font-medium"> Azure cloud platforms</span>, focused on 
                building reliable CI/CD pipelines, containerized deployments, and cloud-native delivery systems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary font-medium">DXC Technology</span>, I support large-scale 
                enterprise cloud migration initiatives by automating build and deployment workflows, 
                managing multi-environment releases, and enabling consistent delivery across Azure services 
                and Kubernetes (AKS).
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I bring a strong application engineering background, which helps me design 
                <span className="text-accent"> developer-friendly DevOps workflows</span> and understand 
                application behavior end-to-end. My core interests include 
                <span className="text-primary"> Infrastructure as Code</span>, 
                <span className="text-azure"> Kubernetes platforms</span>, and 
                <span className="text-accent"> GitOps-driven delivery</span>.
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
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
