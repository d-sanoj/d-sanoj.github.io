
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const getTitle = () => {
    if (path === "/") return "";
    if (path === "/projects") return "Projects";
    if (path === "/blog") return "Blog";
    if (path.startsWith("/blog/")) return "Blog Post";
    return "";
  };

  return path === "/" ? null : (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg z-50 border-b border-foreground/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold hover:text-accent transition-colors">
          Ctrlpaste
        </Link>
        <span className="absolute left-1/2 -translate-x-1/2 text-lg font-medium">
          {getTitle()}
        </span>
      </div>
    </header>
  );
};

export default Header;
