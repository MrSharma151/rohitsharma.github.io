import { Terminal, Github, Linkedin, Globe } from "lucide-react";

export const Footer = () => {
const currentYear = new Date().getFullYear();

return ( <footer className="py-12 border-t border-border"> <div className="container mx-auto px-4 md:px-6"> <div className="max-w-6xl mx-auto">

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />

          <span className="font-mono font-bold text-sm">
            <span className="text-primary">rohit</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-foreground">platform</span>
          </span>
        </a>

        {/* Copyright */}
        <div className="text-sm text-muted-foreground text-center">
          © {currentYear} Rohit Sharma. Built with cloud-native passion ☁️
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">

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
            className="text-muted-foreground hover:text-azure transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://rohitsharma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Portfolio"
          >
            <Globe className="w-5 h-5" />
          </a>

        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-8">
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
          DevOps Engineer at SpatialChat focused on Kubernetes platforms,
          cloud infrastructure, CI/CD automation, Infrastructure as Code,
          observability, and scalable production systems across Azure, AWS, and GCP.
        </p>
      </div>

    </div>
  </div>
</footer>

);
};
