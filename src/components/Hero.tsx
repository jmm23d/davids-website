import React from "react";
import { ChevronDown } from "lucide-react";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col relative overflow-hidden">
      {/* 3D background */}
      <ThreeScene />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div
              className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              Manufacturing Engineering
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-in opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              David <span className="text-gradient">Ngoma</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              CAD Technician and Manufacturing Specialist with expertise in 2D &
              3D design, injection molding, and engineering technology
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium shadow-lg hover:shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-secondary text-foreground rounded-md font-medium hover:bg-secondary/80 transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center items-center z-20">
        <a href="#about" className="group flex flex-col items-center">
          <span className="text-sm font-medium mb-2 text-muted-foreground group-hover:text-primary transition-colors">
            Scroll Down
          </span>
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
