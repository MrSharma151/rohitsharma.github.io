import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-200" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Terminal-style greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient glow-text">Rohit Sharma</span>
          </h1>

          {/* Title */}
          <div className="animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Azure DevOps Engineer
            </h2>
            <p className="font-mono text-lg md:text-xl text-muted-foreground">
              <span className="text-primary">Cloud</span>
              <span className="mx-3 text-border">•</span>
              <span className="text-accent">CI/CD</span>
              <span className="mx-3 text-border">•</span>
              <span className="text-azure">Kubernetes</span>
              <span className="mx-3 text-border">•</span>
              <span className="text-docker">Automation</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Building robust cloud infrastructure and streamlining deployments at scale. 
            Specializing in Azure, Infrastructure as Code, and cloud-native solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono glow-border"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:border-primary hover:text-primary"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-4 animate-fade-in-up animation-delay-500">
            <a
              href="https://github.com/MrSharma151"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-sharma-b320121a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rhs.rohitsharma@gmail.com"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};
