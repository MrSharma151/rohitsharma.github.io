import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
{
title: 'DevOps Engineer',
company: 'SpatialChat',
location: 'Remote',
period: 'April 2026 – Present',
current: true,
description:
'Managing cloud infrastructure, Kubernetes workloads, CI/CD automation, observability, and production operations for scalable real-time applications.',


highlights: [
  'Working across Kubernetes, Docker, Terraform, Linux, and multi-cloud infrastructure environments',
  'Building and maintaining CI/CD pipelines and deployment automation workflows for production systems',
  'Managing monitoring, logging, and observability tooling to improve platform visibility and reliability',
  'Collaborating with engineering teams to troubleshoot production issues and optimize cloud operations',
],


},

{
title: 'Analyst II – DevOps Engineer',
company: 'DXC Technology',
location: 'Chennai, India',
period: 'September 2024 – April 2026',
current: false,
description:
'Worked on enterprise cloud modernization initiatives involving cloud-hosted and containerized application platforms across Azure, AWS, and cloud-native DevOps environments.',


highlights: [
  'Designed and maintained CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI/CD, and Azure DevOps',
  'Managed Docker and Kubernetes (AKS) workloads and automated infrastructure provisioning using Terraform',
  'Worked with cloud networking, virtual machines, and application services for scalable deployments',
  'Collaborated with development and cloud teams to improve deployment reliability and release efficiency',
],


},

{
title: 'Web Developer (Freelance)',
company: 'Self-employed',
location: 'Remote',
period: 'August 2023 – March 2024',
current: false,
description:
'Developed custom web applications for multiple clients, handling end-to-end development, API integration, and deployment workflows.',


highlights: [
  'Built frontend applications using React.js and backend services using Node.js / Express.js with MySQL',
  'Designed REST APIs and implemented structured Git/GitHub workflows for collaboration and version control',
  'Supported deployment and testing workflows across development and production environments',
],

},
];

export const ExperienceSection = () => {
return ( <section id="experience" className="py-24 md:py-32 relative bg-secondary/20">

  <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:1px_40px]" />

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="max-w-4xl mx-auto">

      <div className="text-center mb-16">
        <span className="font-mono text-primary text-sm tracking-wider uppercase">
          // Career Path
        </span>

        <h2 className="section-title mt-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
      </div>

      <div className="relative">

        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className={`relative mb-12 last:mb-0 ${
              index % 2 === 0
                ? 'md:pr-[50%] md:text-right'
                : 'md:pl-[50%] md:ml-auto'
            }`}
          >

            {/* Dot */}
            <div
              className={`absolute top-0 w-4 h-4 rounded-full border-2 ${
                exp.current
                  ? 'bg-primary border-primary animate-pulse-glow'
                  : 'bg-background border-border'
              } left-0 md:left-1/2 md:-translate-x-1/2`}
            />

            {/* Card */}
            <div
              className={`card-glass p-6 ml-8 md:ml-0 group transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}
            >

              {/* Header */}
              <div
                className={`flex flex-col gap-2 mb-4 ${
                  index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                }`}
              >

                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.title}
                  </h3>

                  {exp.current && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono bg-accent/20 text-accent">
                      Current
                    </span>
                  )}
                </div>

                <div
                  className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>

              </div>

              {/* Description */}
              <p
                className={`text-muted-foreground mb-4 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {exp.description}
              </p>

              {/* Highlights */}
              <ul
                className={`space-y-2 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className={`flex items-start gap-2 text-sm ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />

                    <span className="text-muted-foreground">
                      {highlight}
                    </span>

                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}

      </div>

    </div>
  </div>
</section>

);
};
