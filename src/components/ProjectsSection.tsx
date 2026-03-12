import {
ExternalLink,
Github,
Cloud,
Container,
GitBranch,
Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
{
title: "Framely – Kubernetes GitOps DevOps Platform (AKS)",
description:
"Designed and implemented a production-style DevOps platform that re-architects a legacy-style application into a Kubernetes-first, GitOps-driven cloud delivery system using Azure Kubernetes Service (AKS).",
type: "Platform Engineering • GitOps • Kubernetes • Cloud Modernization",
techStack: [
"Azure Kubernetes Service (AKS)",
"Docker",
"Terraform",
"Jenkins",
"Argo CD",
"Kustomize",
"Prometheus",
"Grafana",
"Azure Log Analytics",
],
features: [
"Designed CI/CD separation model using Jenkins for CI and Argo CD for GitOps-based CD",
"Implemented GitOps workflow with Git as the single source of truth for deployments",
"Provisioned Azure infrastructure using modular Terraform Infrastructure as Code",
"Configured multi-environment Kubernetes deployments with Git-driven promotion strategy",
"Integrated observability stack using Prometheus, Grafana, and Azure Log Analytics",
"Deployed containerized workloads on AKS with production-style architecture",
],
links: {
github: "https://github.com/MrSharma151/framely-mega-devops-aks",
},
icon: Container,
gradient: "from-docker/20 to-kubernetes/20",
},

{
title: "Framely – Cloud PaaS Application Platform (Azure)",
description:
"Cloud-hosted full-stack application platform deployed using Azure PaaS services, representing the baseline architecture before Kubernetes re-platforming.",
type: "Cloud Platform • Azure • CI/CD",
techStack: [
"ASP.NET Core",
"Next.js",
"Azure App Service",
"Azure SQL",
"Azure Static Web Apps",
"Azure Blob Storage",
"GitHub Actions",
],
features: [
"Built full-stack optical e-commerce application with API backend and frontend UI",
"Configured CI/CD pipelines using GitHub Actions for automated deployment",
"Integrated managed Azure services for database, storage, and hosting",
"Implemented secure API communication with managed cloud services",
"Used this architecture as baseline before Kubernetes-based modernization",
],
links: {
storefront: "https://orange-wave-06841fe00.1.azurestaticapps.net/",
github: "https://github.com/MrSharma151/Framely",
},
icon: Cloud,
gradient: "from-azure/20 to-primary/20",
},
];

const architectureHighlights = [
{
title: "CI Pipelines",
description:
"Automated build, validation, and artifact workflows using Jenkins and Git-based pipelines aligned with enterprise CI practices.",
icon: GitBranch,
},
{
title: "Infrastructure as Code",
description:
"Terraform-driven provisioning of Azure cloud infrastructure and Kubernetes platform resources.",
icon: Layers,
},
{
title: "GitOps Delivery",
description:
"Git as the control plane with Argo CD continuously reconciling desired and actual cluster state.",
icon: Github,
},
{
title: "Kubernetes Platform",
description:
"Containerized workloads deployed on AKS using production-style namespace, ingress, and environment isolation.",
icon: Container,
},
];

export const ProjectsSection = () => {
return ( <section id="projects" className="py-24 md:py-32 relative"> <div className="container mx-auto px-4 md:px-6"> <div className="max-w-6xl mx-auto"> <div className="text-center mb-16"> <span className="font-mono text-primary text-sm tracking-wider uppercase">
// Featured Work </span> <h2 className="section-title mt-4">
Projects & <span className="text-gradient">Architecture</span> </h2> <p className="section-subtitle mt-4 max-w-2xl mx-auto">
Real-world DevOps platforms, cloud infrastructure, and
Kubernetes-based delivery systems </p> </div>

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

      {/* Video */}
      <div className="text-center mb-12">
        <div className="max-w-5xl mx-auto mb-20">
          <div className="card-glass p-6 md:p-8">
            <div className="text-center mb-6">
              <span className="font-mono text-primary text-sm tracking-wider uppercase">
                // Project Walkthrough
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-4">
                Framely AKS DevOps Platform
              </h3>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
                Walkthrough demonstrating CI/CD, GitOps, Terraform, and AKS
                deployment workflow.
              </p>
            </div>

            <div className="relative w-full overflow-hidden rounded-lg aspect-video">
              <iframe
                src="https://www.youtube.com/embed/UNNiRSG4tmo"
                title="Framely AKS GitOps Project Walkthrough"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>

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
