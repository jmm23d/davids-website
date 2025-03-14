import React, { useEffect, useRef } from "react";
import { Cpu, Ruler, Cog, Trophy } from "lucide-react";

const About = () => {
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

  return (
    <section id="about" className="py-24 bg-background" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Manufacturing Engineering specialist with expertise in CAD design,
            injection molding, and quality control processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-lg mb-6 animate-on-scroll opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              I'm a Computer Aided Design Technician with hands-on experience in
              manufacturing engineering. My approach combines technical
              precision with innovative problem-solving to create effective
              engineering solutions.
            </p>
            <p
              className="text-lg mb-6 animate-on-scroll opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              With a Bachelor's degree in Manufacturing Engineering Technology
              from Tarleton State University, I've developed a strong foundation
              in engineering principles, CAD design, and quality management
              processes.
            </p>
            <p
              className="text-lg animate-on-scroll opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              I currently work at Fresnel Technologies where I create precise 2D
              & 3D part drawings for production staff and operate molding and
              milling machines for acrylic and polycarbonate materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Cpu className="w-10 h-10 text-primary mb-4" />,
                title: "CAD Design",
                description:
                  "Expert in creating precise 2D & 3D technical drawings using modern CAD software",
                delay: "0.4s",
              },
              {
                icon: <Cog className="w-10 h-10 text-primary mb-4" />,
                title: "Injection Molding",
                description:
                  "Experienced with molding and milling techniques for acrylic and polycarbonate materials",
                delay: "0.5s",
              },
              {
                icon: <Ruler className="w-10 h-10 text-primary mb-4" />,
                title: "Technical Drawing",
                description:
                  "Skilled in producing custom drawings for polymer optical parts to exact specifications",
                delay: "0.6s",
              },
              {
                icon: <Trophy className="w-10 h-10 text-primary mb-4" />,
                title: "Quality Control",
                description:
                  "Expertise in evaluating and improving quality control processes in manufacturing",
                delay: "0.7s",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border-glow bg-card text-card-foreground animate-on-scroll opacity-0 hover-transform"
                style={{ animationDelay: item.delay }}
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
