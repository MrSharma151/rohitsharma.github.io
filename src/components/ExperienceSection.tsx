import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Analyst II (Azure DevOps Engineer)',
    company: 'DXC Technology',
    location: 'Chennai',
    period: 'September 2024 - Present',
    current: true,
    description: 'Actively drive and contribute to a high-priority Azure Cloud Migration project for a global enterprise client.',
    highlights: [
      'Implemented and maintained CI/CD pipelines using Azure DevOps and YAML templates',
      'Engineered deployment workflows and configured segregated cloud environments',
      'Managed diverse Azure cloud environments (App Service, Azure Functions, VMs)',
      'Enhanced pipeline processes for operational efficiency',
      'Accelerated client migration roadmap with continuous delivery practices',
    ],
  },
  {
    title: 'Web Developer (Freelance)',
    company: 'Self-employed',
    location: 'Ghaziabad',
    period: 'August 2023 - March 2024',
    current: false,
    description: 'Delivered custom web applications for clients in diverse sectors including real estate, optical, and retail.',
    highlights: [
      'Executed end-to-end full-stack development with React.js and Node.js/Express.js',
      'Integrated secure REST APIs and developed complex application logic',
      'Maintained professional development standards with Git and GitHub',
      'Collaborated with senior freelancer on project delivery',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'GreenBhumi',
    location: 'India',
    period: 'September 2022 - December 2022',
    current: false,
    description: "Contributed to GreenBhumi's critical ERP Hire Module.",
    highlights: [
      'Built and refined application pages using PHP, MySQL, HTML, CSS, JavaScript',
      'Implemented complex backend form workflows',
      'Integrated PHPMailer library for automated email communication',
      'Resolved production issues and enhanced existing functionality',
    ],
  },
  {
    title: 'Apprentice Web Developer',
    company: 'Internshala',
    location: 'Gurugram',
    period: 'June 2022 - August 2022',
    current: false,
    description: 'Developed the PGLife full-stack web application for PG accommodation booking.',
    highlights: [
      'Handled entire development cycle from UI to database integration',
      'Full-stack web application development',
      'Practical implementation of development skills',
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:1px_40px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              // Career Path
            </span>
            <h2 className="section-title mt-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 w-4 h-4 rounded-full border-2 ${
                  exp.current ? 'bg-primary border-primary animate-pulse-glow' : 'bg-background border-border'
                } ${index % 2 === 0 ? 'left-0 md:left-1/2 md:-translate-x-1/2' : 'left-0 md:left-1/2 md:-translate-x-1/2'}`} />

                {/* Content Card */}
                <div className={`card-glass p-6 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  {/* Header */}
                  <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded text-xs font-mono bg-accent/20 text-accent">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
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

                  <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className={`flex items-start gap-2 text-sm ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
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
