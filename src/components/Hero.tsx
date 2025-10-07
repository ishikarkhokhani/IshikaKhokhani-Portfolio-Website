import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-foreground">Ishika Khokhani</span>
            <span className="block text-gradient mt-2">Data & Software Engineer</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Building intelligent systems with Python, Machine Learning, and Cloud Technologies
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Virginia Tech</span> • MS in Computer Science
            </div>
            <div className="hidden sm:block text-muted-foreground">|</div>
            <div className="text-sm text-muted-foreground">
              Arlington, VA • <a href="mailto:ishikarkhokhani@gmail.com" className="text-primary hover:underline">ishikarkhokhani@gmail.com</a>
            </div>
          </div>

          <button
            onClick={scrollToExperience}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary-glow transition-all duration-300 font-semibold text-lg card-glow"
          >
            Explore My Work
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};
