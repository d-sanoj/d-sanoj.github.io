
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Github, ExternalLink, Mail } from "lucide-react";

const Index = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Ctrlpaste.", "Create.", "Connect."];
  const { scrollY } = useScroll();

  // Create opacity transforms for each section
  const section1Opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const section2Opacity = useTransform(scrollY, [300, 500, 1000, 1200], [0, 1, 1, 0]);
  const section3Opacity = useTransform(scrollY, [1000, 1200], [0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity: section1Opacity }}
        className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center bg-black"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-[12rem] font-bold tracking-tighter"
        >
          {texts[currentTextIndex]}
        </motion.h1>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        style={{ opacity: section2Opacity }}
        className="fixed top-0 left-0 w-full min-h-screen py-20 px-4 md:px-8 bg-[#1A1A1A]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{`<projects/>`}</h2>
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
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        style={{ opacity: section3Opacity }}
        className="fixed top-0 left-0 w-full min-h-screen py-20 px-4 md:px-8 bg-black"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">{`<Contact />`}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h3>
            <p className="text-xl text-muted mb-8">
              Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@ctrlpaste.com" className="flex items-center text-xl hover:text-accent transition-colors">
                <Mail className="w-6 h-6 mr-3" />
                hello@ctrlpaste.com
              </a>
              <a href="https://github.com/ctrlpaste" target="_blank" rel="noopener noreferrer" className="flex items-center text-xl hover:text-accent transition-colors">
                <Github className="w-6 h-6 mr-3" />
                @ctrlpaste
              </a>
            </div>
          </div>
          <div className="bg-[#111111] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <Input
                placeholder="Your Name"
                className="bg-background/50 border-foreground/10 focus:border-foreground/20"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-background/50 border-foreground/10 focus:border-foreground/20"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-background/50 border-foreground/10 focus:border-foreground/20 min-h-[150px]"
              />
              <Button className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Spacer div to enable scrolling */}
      <div style={{ height: "300vh" }} />
    </div>
  );
};

export default Index;
