import { ArrowDown } from 'lucide-react';
import { ProfileType } from '../pages/ProfileSelection';

interface HeroProps {
  selectedProfile: ProfileType | null;
}

const profileData = {
  'data-analyst': {
    title: "Data Analyst",
    subtitle: "Deriving insights from data to drive business decisions.",
    gradient: "from-blue-500/10 via-background to-background",
  },
  'software-engineer': {
    title: "Software Engineer",
    subtitle: "Building robust and scalable software solutions.",
    gradient: "from-purple-500/10 via-background to-background",
  },
  'ml-ai': {
    title: "ML/AI Engineer",
    subtitle: "Developing intelligent systems with machine learning and AI.",
    gradient: "from-orange-500/10 via-background to-background",
  },
};

export const Hero = ({ selectedProfile }: HeroProps) => {
  const content = selectedProfile ? profileData[selectedProfile] : null;

  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!content) {
    return null; // Or a loading spinner
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${content.gradient}`} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-foreground">Ishika Khokhani</span>
            <span className="block text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">{content.title}</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Virginia Tech</span> • MEng in Computer Science
            </div>
            <div className="hidden sm:block text-muted-foreground">|</div>
            <div className="text-sm text-muted-foreground">
              Virginia, United States • <a href="mailto:ishikarkhokhani@gmail.com" className="text-primary hover:underline">ishikarkhokhani@gmail.com</a>
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
