import React from "react";
import { Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <a
              href="#"
              className="text-2xl font-bold text-gradient inline-block mb-4"
            >
              David<span className="text-primary ml-1">Ngoma</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Manufacturing Engineering Technology professional specializing in
              CAD design and polymer optics production.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/david-ngoma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:david.ngoma@example.com"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Experience", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SOLIDWORKS",
                "DraftSight",
                "PowerCADD",
                "AutoCAD",
                "Injection Molding",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-background/40 text-foreground rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            &copy; {currentYear} David Ngoma. All rights reserved.
          </p>
          <p className="text-sm flex items-center text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary mx-1" /> using
            React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
