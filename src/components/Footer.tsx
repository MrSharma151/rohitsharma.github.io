import { Terminal, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Footer Row */}
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            
            {/* Logo — Left on desktop */}
            <div className="flex items-center gap-2 md:absolute md:left-0">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-foreground">
                Rohit Sharma · DevOps Engineer
              </span>
            </div>

            {/* Copyright — Perfect Center */}
            <div className="text-sm text-muted-foreground text-center">
              © {currentYear} Rohit Sharma. All rights reserved.
            </div>

            {/* Social Links — Right on desktop */}
            <div className="flex items-center gap-4 md:absolute md:right-0">
              <a
                href="https://github.com/MrSharma151"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-sharma-b320121a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground">
              Professional portfolio focused on DevOps engineering, cloud platforms, and Kubernetes-based delivery systems.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
