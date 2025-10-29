import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Code, Database, Brain } from 'lucide-react';

export type ProfileType = 'data-analyst' | 'software-engineer' | 'ml-ai';

const profiles = [
  {
    id: 'data-analyst' as ProfileType,
    name: 'Data Analyst',
    icon: Database,
    description: 'Analytics, visualization, and data-driven insights',
    color: 'from-blue-500 to-cyan-500',
  },
  // {
  //   id: 'software-engineer' as ProfileType,
  //   name: 'Software Engineer',
  //   icon: Code,
  //   description: 'Full-stack development and system design',
  //   color: 'from-purple-500 to-pink-500',
  // },
  {
    id: 'ml-ai' as ProfileType,
    name: 'ML/AI Engineer',
    icon: Brain,
    description: 'Machine learning and artificial intelligence',
    color: 'from-orange-500 to-red-500',
  },
];

export default function ProfileSelection() {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    // Check if user has submitted info
    const hasSubmitted = sessionStorage.getItem('visitor_submitted');
    if (!hasSubmitted) {
      navigate('/');
    }
  }, [navigate]);

  const handleProfileSelect = (profileId: ProfileType) => {
    setSelectedProfile(profileId);
    // Store selected profile in localStorage
    localStorage.setItem('selected_profile', profileId);
    
    // Navigate to main portfolio with a small delay for animation
    setTimeout(() => {
      navigate('/Index');
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Pick a Profile!
          </h1>
          <p className="text-xl text-muted-foreground">
            Select a profile to see relevant experience and projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 animate-scale-in max-w-4xl mx-auto">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <button
                key={profile.id}
                onClick={() => handleProfileSelect(profile.id)}
                className={`group relative bg-card rounded-lg p-8 card-glow hover:scale-105 transition-all duration-300 w-full sm:w-3/4 md:w-2/5 ${
                  selectedProfile === profile.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${profile.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {profile.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
