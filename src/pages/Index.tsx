
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const Index = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Ctrlpaste.", "Create.", "Connect."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter"
        >
          {texts[currentTextIndex]}
        </motion.h1>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
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
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Get in Touch</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Input
                placeholder="Your Name"
                className="bg-background/50 border-foreground/10 focus:border-foreground/20"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-background/50 border-foreground/10 focus:border-foreground/20"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="bg-background/50 border-foreground/10 focus:border-foreground/20 min-h-[150px]"
              />
            </div>
            <Button className="w-full group">
              Send Message
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
