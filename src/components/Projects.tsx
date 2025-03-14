import React, { useEffect, useRef } from "react";
import { Sparkles, ExternalLink } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "Welding Table Design",
      description:
        "Designed and researched a sustainable welding table for saddle legs used in vessels for Parker Hannifin, focusing on durability and functionality.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      tags: ["CAD Design", "Welding", "Sustainability", "Industrial Design"],
      link: "#",
    },
    {
      title: "Wing-Box Construction",
      description:
        "Collaborated on the design and construction of a wing-box using advanced composite materials, contributing as a key member of the lower skin team to ensure precision and performance.",
      image:
        "https://images.unsplash.com/photo-1544724569-5f702431d06c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      tags: [
        "Composite Materials",
        "Aeronautics",
        "Team Collaboration",
        "Precision Engineering",
      ],
      link: "#",
    },
    {
      title: "Quality Control Improvement",
      description:
        "Evaluated existing quality control processes and implemented improvements, resulting in reduced defects and enhanced production efficiency.",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      tags: [
        "Quality Management",
        "Process Optimization",
        "Manufacturing",
        "Documentation",
      ],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/50" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Showcase of engineering projects demonstrating technical skills and
            problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-card text-card-foreground border-glow animate-on-scroll opacity-0 hover-transform card-hover"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center text-foreground">
                  <Sparkles className="w-5 h-5 text-primary mr-2" />
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
