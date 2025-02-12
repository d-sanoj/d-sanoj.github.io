
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-left">{`<blog/>`}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Future of Web Development",
              description: "Exploring upcoming trends and technologies in web development",
              date: "March 15, 2024",
            },
            {
              title: "Building Modern UIs",
              description: "Best practices for creating engaging user interfaces",
              date: "March 10, 2024",
            },
            {
              title: "State Management Evolution",
              description: "From Redux to React Query: The evolution of state management",
              date: "March 5, 2024",
            },
            {
              title: "TypeScript Best Practices",
              description: "Writing better TypeScript code for your projects",
              date: "March 1, 2024",
            },
            {
              title: "The Art of Clean Code",
              description: "Principles and practices for maintaining clean codebases",
              date: "February 25, 2024",
            },
            {
              title: "Performance Optimization",
              description: "Techniques for optimizing React applications",
              date: "February 20, 2024",
            },
          ].map((post, index) => (
            <Card key={index} className="p-6 bg-background/50 backdrop-blur-sm border border-foreground/10 hover:border-foreground/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-muted mb-2">{post.date}</p>
              <p className="text-muted mb-4">{post.description}</p>
              <Button variant="outline" size="sm">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
