import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navigation = [
    { name: "Программа", href: "#what-awaits" },
    { name: "Для кого", href: "#features" },
    { name: "Структура обучения", href: "#course-structure" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass/70 backdrop-blur-md border-b border-glass-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/cfc79ad7-a059-4cab-a04c-293a54663f7c.png" 
              alt="Analyst 3.0 Logo" 
              className="w-14 h-12 rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              {t('header.title')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
                {...(item.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.name}
              </a>
            ))}
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-glass/95 backdrop-blur-md border-b border-glass-border animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  {...(item.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;