
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-left">{`<projects/>`}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Project One",
              description: "A revolutionary app that transforms ideas into reality",
              github: "#",
              demo: "#",
            },
            {
              title: "Project Two",
              description: "Innovative solution for modern problems",
              github: "#",
              demo: "#",
            },
            {
              title: "Project Three",
              description: "Cutting-edge technology meets simplicity",
              github: "#",
              demo: "#",
            },
            {
              title: "Project Four",
              description: "Next-generation development tools",
              github: "#",
              demo: "#",
            },
            {
              title: "Project Five",
              description: "Advanced AI solutions for everyday problems",
              github: "#",
              demo: "#",
            },
            {
              title: "Project Six",
              description: "Revolutionary blockchain technology",
              github: "#",
              demo: "#",
            },
          ].map((project, index) => (
            <Card key={index} className="p-6 bg-background/50 backdrop-blur-sm border border-foreground/10 hover:border-foreground/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
