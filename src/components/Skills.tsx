
import React, { useEffect, useRef } from "react";

const Skills = () => {
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
    
    const animatedElements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const skillCategories = [
    {
      title: "CAD Design",
      skills: [
        { name: "SOLIDWORKS", level: 90 },
        { name: "DraftSight", level: 95 },
        { name: "PowerCADD", level: 85 },
        { name: "AutoCAD Inventor", level: 80 },
        { name: "2D & 3D Drawing", level: 90 }
      ]
    },
    {
      title: "Manufacturing",
      skills: [
        { name: "Injection Molding", level: 85 },
        { name: "CNC Mill", level: 80 },
        { name: "Laser Beam", level: 75 },
        { name: "Quality Control", level: 85 },
        { name: "Process Planning", level: 80 }
      ]
    },
    {
      title: "Professional",
      skills: [
        { name: "Project Management", level: 75 },
        { name: "Technical Documentation", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Leadership", level: 75 },
        { name: "French (Native)", level: 100 }
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-24 bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            Specialized tools, technologies, and professional capabilities that define my engineering approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="p-6 rounded-xl border-glow bg-white animate-on-scroll opacity-0"
              style={{ animationDelay: `${0.2 * categoryIndex}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000 ease-out"
                        style={{ 
                          width: "0%", 
                          transitionDelay: `${0.1 * skillIndex + 0.5}s`
                        }}
                        ref={el => {
                          if (el) {
                            setTimeout(() => {
                              el.style.width = `${skill.level}%`;
                            }, 100);
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technology badges */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-center animate-on-scroll opacity-0">
            Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "SOLIDWORKS", "DraftSight", "PowerCADD", "AutoCAD", "Inventor",
              "CNC Mill", "Injection Molding", "Laser Processing",
              "LIGHTCELL-150", "Quality Management", "Project Management",
              "PLC Programming", "HMI Systems", "Process Control", "Database Design"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium animate-on-scroll opacity-0 hover-transform"
                style={{ animationDelay: `${0.05 * index + 0.8}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
