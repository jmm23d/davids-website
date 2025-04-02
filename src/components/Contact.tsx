import React, { useEffect, useRef } from "react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert(
      "This is a demo. In a real implementation, this would send your message."
    );
  };

  return (
    <section id="contact" className="py-24 bg-background" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">Get In Touch</h2>
          <p className="section-subtitle mx-auto text-muted-foreground">
            Interested in collaborating or have questions about my work? Feel
            free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="animate-on-scroll opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-foreground">
                    Email
                  </h4>
                  <a
                    href="mailto:ngomadavid261@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ngomadavid261@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-foreground">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/david-ngoma-70b09117b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/david-ngoma
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-foreground">
                    Location
                  </h4>
                  <a
                    href="https://www.google.com/maps/place/Fort+Worth,+TX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors relative"
                    aria-label="View Fort Worth, Texas on Google Maps"
                    title="Click to view on Google Maps"
                  >
                    <span>Fort Worth, Texas, United States</span>
                    <MapPin className="w-4 h-4 group-hover:scale-110 transition-all duration-200 group-hover:text-primary" />
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="animate-on-scroll opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium shadow-lg hover:bg-primary/90 transition-all"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
