import { Cloud, GitBranch, Server, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    description: 'Azure-based cloud environments with familiarity in AWS and cloud-agnostic DevOps practices',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & GitOps',
    description: 'Automated CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI, and Azure DevOps',
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Terraform-based, version-controlled, and reproducible infrastructure deployments',
  },
  {
    icon: Zap,
    title: 'Kubernetes & Containers',
    description: 'Docker and Kubernetes (AKS) for scalable, cloud-native application delivery',
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
                I am a <span className="text-foreground font-medium">DevOps Engineer</span> with ~2 years of experience
                working across <span className="text-primary font-medium">cloud platforms</span>, focused on building
                reliable CI/CD pipelines, containerized deployments, and automated cloud-native delivery systems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary font-medium">DXC Technology</span>, I work on enterprise cloud
                modernization initiatives, migrating legacy applications to cloud-hosted and containerized
                environments using <span className="text-accent">Azure</span> and cloud-agnostic DevOps practices
                with familiarity in <span className="text-accent">AWS</span>. I design and maintain CI/CD pipelines,
                manage Kubernetes workloads, and automate infrastructure using Terraform.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My experience includes working with 
                <span className="text-primary"> Kubernetes</span>, 
                <span className="text-accent"> Docker</span>, 
                <span className="text-primary"> Terraform</span>, 
                <span className="text-accent"> Linux</span>, and 
                <span className="text-primary"> Git</span>, with focus on building scalable, reliable, and repeatable
                deployment workflows across development, testing, and production environments.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong application engineering background, I design 
                <span className="text-accent"> developer-friendly DevOps workflows</span> and understand application
                behavior end-to-end. My core interests include 
                <span className="text-primary"> Infrastructure as Code</span>, 
                <span className="text-azure"> Kubernetes platforms</span>, and 
                <span className="text-accent"> GitOps-driven delivery models</span>.
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