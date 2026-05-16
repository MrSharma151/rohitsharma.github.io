import { Cloud, GitBranch, Server, Zap } from 'lucide-react';

const highlights = [
{
icon: Cloud,
title: 'Multi-Cloud Platforms',
description: 'Hands-on experience across Azure, AWS, and GCP environments with scalable cloud-native infrastructure',
},
{
icon: GitBranch,
title: 'CI/CD & GitOps',
description: 'Automated deployment workflows using Jenkins, GitHub Actions, GitLab CI/CD, ArgoCD, and Azure DevOps',
},
{
icon: Server,
title: 'Infrastructure as Code',
description: 'Terraform-driven infrastructure provisioning with reproducible and version-controlled environments',
},
{
icon: Zap,
title: 'Kubernetes & Containers',
description: 'Production-grade container orchestration using Kubernetes, Docker, AKS, and cloud-native DevOps practices',
},
];

export const AboutSection = () => {
return ( <section id="about" className="py-24 md:py-32 relative"> <div className="container mx-auto px-4 md:px-6"> <div className="max-w-6xl mx-auto">
{/* Section Header */} <div className="text-center mb-16"> <span className="font-mono text-primary text-sm tracking-wider uppercase">
// About Me </span> <h2 className="section-title mt-4">
Building Scalable <span className="text-gradient">Cloud Platforms</span> </h2> </div>


      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* About Text */}
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a <span className="text-foreground font-medium">DevOps Engineer</span> focused on building
            scalable, automated, and reliable cloud-native infrastructure and delivery platforms across startup
            and enterprise environments.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently working at <span className="text-primary font-medium">SpatialChat</span>, managing
            cloud infrastructure, Kubernetes workloads, CI/CD automation, observability, and production
            operations for scalable real-time applications.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Previously at <span className="text-primary font-medium">DXC Technology</span>, I worked on
            enterprise cloud modernization initiatives involving containerized deployments, Infrastructure
            as Code, multi-environment release automation, and cloud-native DevOps workflows.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            My experience includes working with 
            <span className="text-primary"> Kubernetes</span>, 
            <span className="text-accent"> Docker</span>, 
            <span className="text-primary"> Terraform</span>, 
            <span className="text-accent"> Linux</span>, 
            <span className="text-primary"> Jenkins</span>, and 
            <span className="text-accent"> multi-cloud platforms</span> including Azure, AWS, and GCP,
            with focus on infrastructure automation, deployment reliability, and scalable production systems.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            With a strong application engineering background, I design 
            <span className="text-accent"> developer-friendly DevOps workflows</span> and understand application
            behavior end-to-end. My core interests include 
            <span className="text-primary"> Kubernetes platforms</span>, 
            <span className="text-accent"> Infrastructure as Code</span>, 
            <span className="text-primary"> GitOps</span>, and 
            <span className="text-accent"> scalable cloud automation</span>.
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
