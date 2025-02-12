
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { title } = useParams();
  
  // This is a simple implementation. In a real app, you'd fetch the post data based on the title
  const getBlogContent = (postTitle: string) => {
    const posts = {
      "the-future-of-web-development": {
        title: "The Future of Web Development",
        date: "March 15, 2024",
        content: "Web development is rapidly evolving with new technologies and frameworks emerging every day. The future promises even more exciting developments in areas like AI integration, WebAssembly, and edge computing.",
      },
      "building-modern-uis": {
        title: "Building Modern UIs",
        date: "March 10, 2024",
        content: "Modern UI development requires a deep understanding of user experience, performance optimization, and accessibility. This post explores the best practices for creating engaging user interfaces.",
      },
      "state-management-evolution": {
        title: "State Management Evolution",
        date: "March 5, 2024",
        content: "The evolution of state management in React applications has been fascinating. From Redux to React Query, we've seen significant improvements in how we handle application state.",
      },
      "typescript-best-practices": {
        title: "TypeScript Best Practices",
        date: "March 1, 2024",
        content: "TypeScript has become an essential tool for modern web development. This post covers the best practices for writing clean and maintainable TypeScript code.",
      },
      "the-art-of-clean-code": {
        title: "The Art of Clean Code",
        date: "February 25, 2024",
        content: "Writing clean code is an art that requires practice and understanding of fundamental principles. This post explores how to maintain clean and maintainable codebases.",
      },
      "performance-optimization": {
        title: "Performance Optimization",
        date: "February 20, 2024",
        content: "Performance optimization is crucial for modern web applications. Learn about the latest techniques for optimizing React applications for better user experience.",
      },
    };
    
    const slug = postTitle.toLowerCase().replace(/\s+/g, '-');
    return posts[slug as keyof typeof posts];
  };

  const post = getBlogContent(title || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-black py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Post not found</h1>
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </Button>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted mb-8">{post.date}</p>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
