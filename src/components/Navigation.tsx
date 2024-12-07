import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Anagata IT
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 ${
                isActive("/")
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 ${
                isActive("/about")
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors duration-200 ${
                isActive("/services")
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={`transition-colors duration-200 ${
                isActive("/blog")
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;