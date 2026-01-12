import { Github, Linkedin, Mail, Globe, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'MrSharma151',
    href: 'https://github.com/MrSharma151',
    color: 'hover:text-foreground',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'rohit-sharma',
    href: 'https://www.linkedin.com/in/rohit-sharma-b320121a3/',
    color: 'hover:text-azure',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'rhs.rohitsharma@gmail.com',
    href: 'mailto:rhs.rohitsharma@gmail.com',
    color: 'hover:text-primary',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'rohitsharma.org',
    href: 'https://rohitsharma.org',
    color: 'hover:text-accent',
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              // Get In Touch
            </span>
            <h2 className="section-title mt-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="section-subtitle mt-4 max-w-xl mx-auto">
              Open to exploring opportunities in DevOps Engineering, Cloud Engineering, and Platform Engineering.
            </p>
          </div>

          {/* Terminal-style Contact Card */}
          <div className="card-glass p-6 md:p-8 max-w-2xl mx-auto">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 pb-4 border-b border-border mb-6">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-accent/70" />
              </div>
              <span className="font-mono text-sm text-muted-foreground ml-2">contact.sh</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-accent">$</span>
                <span>cat contact_info.txt</span>
              </div>

              <div className="pl-4 space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-3 text-muted-foreground transition-colors ${link.color} group`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="text-foreground/70">{link.label}:</span>
                    <span className="underline underline-offset-4 decoration-border group-hover:decoration-current transition-colors">
                      {link.value}
                    </span>
                  </a>
                ))}

                <div className="flex items-center gap-3 text-muted-foreground pt-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-foreground/70">Location:</span>
                  <span>Ghaziabad, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mt-6 pt-4 border-t border-border">
                <span className="text-accent">$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono glow-border"
              asChild
            >
              <a href="mailto:rhs.rohitsharma@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
