
import React, { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
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
  
  const experienceData = [
    {
      type: "work",
      title: "Computer Aided Design Technician",
      company: "Fresnel Technologies",
      location: "Fort Worth, Texas",
      period: "May 2024 - Present",
      description: [
        "Create 2D & 3D part drawings to communicate specifications to production staff",
        "Operate molding and milling machines for acrylic and polycarbonate",
        "Design 2D drawings for ordering steel rule dies for cutting polymer optics",
        "Produce custom drawings for polymer optical parts per customer requirements",
        "Program laser machine beam toolpaths using Coherent LIGHTCELL-150 software"
      ]
    },
    {
      type: "work",
      title: "Production",
      company: "FedEx Supply Chain",
      location: "Fort Worth, Texas",
      period: "May 2023 - Jan 2024",
      description: [
        "Monitor production and run reports",
        "Record orders on computer systems",
        "Perform maintenance operations and maintain safe environment",
        "Manage inventory"
      ]
    },
    {
      type: "education",
      title: "Bachelor's in Manufacturing Engineering Technology",
      company: "Tarleton State University",
      location: "",
      period: "Jan 2022",
      description: [
        "Focused on quality control process evaluation and improvement",
        "Developed skills in CAD, manufacturing processes, and engineering principles"
      ]
    },
    {
      type: "education",
      title: "Associate's degree, CompTIA A+, Network+",
      company: "Tarrant County College",
      location: "",
      period: "2019",
      description: [
        "Technical certification in IT fundamentals"
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-24 bg-secondary/50" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle mx-auto">
            Professional journey and academic background that shaped my expertise in manufacturing engineering
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <div 
              key={index} 
              className="timeline-item animate-on-scroll opacity-0" 
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="timeline-dot flex items-center justify-center">
                {item.type === "work" ? (
                  <Briefcase className="w-2 h-2 text-white" />
                ) : (
                  <GraduationCap className="w-2 h-2 text-white" />
                )}
              </div>
              
              <div className="mb-1 flex items-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {item.type === "work" ? "Work" : "Education"}
                </span>
                <div className="flex items-center text-sm text-muted-foreground ml-2">
                  <Calendar className="w-3 h-3 mr-1" />
                  {item.period}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-primary font-medium mb-3">{item.company} {item.location && `• ${item.location}`}</p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-1">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
