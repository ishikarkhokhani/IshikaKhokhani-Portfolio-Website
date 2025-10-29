import { useState, useEffect } from 'react';
import { Github, Link, Linkedin, Mail, Menu, X } from 'lucide-react';
import { SiMedium } from 'react-icons/si';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
          >
            IK</button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('experience')} className="nav-link">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('research')} className="nav-link">
              Research
            </button>
            <button onClick={() => scrollToSection('education')} className="nav-link">
              Education
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/ishikarkhokhani"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="http://www.linkedin.com/in/ishikakhokhani/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* NEW: Dedicated Medium Link */}
            <a
                href="https://medium.com/@ishikarkhokhani"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Medium"
              >
                <SiMedium size={23} />
              </a>
            <a
              href="mailto:ishikarkhokhani@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">
                Projects
              </button>
              <button onClick={() => scrollToSection('research')} className="mobile-nav-link">
                Research
              </button>
              <button onClick={() => scrollToSection('education')} className="mobile-nav-link">
                Education
              </button>
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github className="w-5 h-5" />
                </a>
                <a href="http://www.linkedin.com/in/ishikakhokhani/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:ishikarkhokhani@gmail.com" className="social-icon">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .nav-link {
          @apply text-foreground hover:text-primary transition-colors text-sm font-medium;
        }
        .mobile-nav-link {
          @apply text-foreground hover:text-primary transition-colors text-base font-medium text-left;
        }
        .social-icon {
          @apply text-foreground hover:text-primary transition-colors;
        }
      `}</style>
    </nav>
  );
};
