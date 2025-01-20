import { Link, useLocation } from "react-router-dom";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-primary transform transition-all duration-300 hover:scale-110 hover:-rotate-2"
          >
            <div className="flex items-center">
              <img
                src={logoLight}
                alt="Anagata IT"
                className="h-10 w-auto transform transition-all duration-300 hover:scale-110 dark:hidden"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <img
                src={logoDark}
                alt="Anagata IT"
                className="hidden h-10 w-auto transform transition-all duration-300 hover:scale-110 dark:block"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden">Anagata IT</span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-8 perspective-1000">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/blog", label: "Blog" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl
                  ${
                    isActive(item.path)
                      ? "text-primary font-semibold bg-primary/10 shadow-primary/20 shadow-lg"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }
                  before:absolute before:inset-0 before:bg-primary/5 before:rounded-lg before:scale-x-0 hover:before:scale-x-100
                  before:transition-transform before:duration-300 before:-z-10
                  after:absolute after:inset-0 after:border-2 after:border-primary/20 after:rounded-lg after:scale-105 after:opacity-0
                  hover:after:scale-100 hover:after:opacity-100 after:transition-all after:duration-300 after:-z-10
                `}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;