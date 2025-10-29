import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ScrollableSection } from '../components/ScrollableSection';
import { ExperienceCard } from '../components/ExperienceCard';
import { Education } from '../components/Education';
import { SkillsFilter } from '../components/SkillsFilter';
import { experiences, projects } from '../data/portfolio';
import { ProfileType } from './ProfileSelection';

const profileSubtitles = {
  'data-analyst': {
    experience: "Analyzing data and building dashboards to drive insights.",
    projects: "End-to-end projects in data analytics and visualization.",
    research: "Exploring new methods in data analysis and interpretation.",
  },
  'software-engineer': {
    experience: "Developing full-stack applications and scalable systems.",
    projects: "Building and deploying software solutions for various platforms.",
    research: "Investigating new software architectures and development paradigms.",
  },
  'ml-ai': {
    experience: "Creating intelligent systems with machine learning and AI.",
    projects: "Implementing ML models and AI-driven features.",
    research: "Advancing the state-of-the-art in machine learning and AI.",
  },
};

const Index = () => {
  const navigate = useNavigate();
  const [activeSkills, setActiveSkills] = useState<Set<string>>(new Set());
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    const profile = localStorage.getItem('selected_profile') as ProfileType;
    if (profile) {
      setSelectedProfile(profile);
    } else {
      // If no profile is selected, redirect back to the selection page
      navigate('/');
    }
  }, [navigate]);

  const handleSkillToggle = (skill: string) => {
    setActiveSkills((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(skill)) {
        newSet.delete(skill);
      } else {
        newSet.add(skill);
      }
      return newSet;
    });
  };

  const handleClearAll = () => {
    setActiveSkills(new Set());
  };

  // Filter items based on selected profile and active skills
  const filteredExperiences = useMemo(() => {
    let filtered = experiences;
    if (selectedProfile) {
      filtered = filtered.filter(exp => exp.profiles.includes(selectedProfile));
    }
    if (activeSkills.size > 0) {
      filtered = filtered.filter(exp => 
        exp.tags.some(tag => activeSkills.has(tag))
      );
    }
    return filtered;
  }, [selectedProfile, activeSkills]);

  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(p => p.type === 'project');
    if (selectedProfile) {
      filtered = filtered.filter(proj => proj.profiles.includes(selectedProfile));
    }
    if (activeSkills.size > 0) {
      filtered = filtered.filter(proj =>
        proj.tags.some(tag => activeSkills.has(tag))
      );
    }
    return filtered;
  }, [selectedProfile, activeSkills]);

  const filteredResearch = useMemo(() => {
    let filtered = projects.filter(p => p.type === 'research');
    if (selectedProfile) {
      filtered = filtered.filter(proj => proj.profiles.includes(selectedProfile));
    }
    if (activeSkills.size > 0) {
      filtered = filtered.filter(proj =>
        proj.tags.some(tag => activeSkills.has(tag))
      );
    }
    return filtered;
  }, [selectedProfile, activeSkills]);

  if (!selectedProfile) {
    // Render nothing or a loading indicator while redirecting
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SkillsFilter
        activeSkills={activeSkills}
        onSkillToggle={handleSkillToggle}
        onClearAll={handleClearAll}
      />
      
      <Hero selectedProfile={selectedProfile} />

      {/* Work Experience */}
      <ScrollableSection
        id="experience"
        title="Work Experience"
        subtitle={selectedProfile ? profileSubtitles[selectedProfile].experience : ""}
      >
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              activeSkills={activeSkills}
              onSkillClick={handleSkillToggle}
            />
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No experiences match the selected skills. Try different filters.
          </div>
        )}
      </ScrollableSection>

      {/* Projects */}
      <ScrollableSection
        id="projects"
        title="Projects"
        subtitle={selectedProfile ? profileSubtitles[selectedProfile].projects : ""}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj) => (
            <ExperienceCard
              key={proj.id}
              experience={proj}
              activeSkills={activeSkills}
              onSkillClick={handleSkillToggle}
            />
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No projects match the selected skills. Try different filters.
          </div>
        )}
      </ScrollableSection>

      {/* Research */}
      <ScrollableSection
        id="research"
        title="Research"
        subtitle={selectedProfile ? profileSubtitles[selectedProfile].research : ""}
      >
        {filteredResearch.length > 0 ? (
          filteredResearch.map((research) => (
            <ExperienceCard
              key={research.id}
              experience={research}
              activeSkills={activeSkills}
              onSkillClick={handleSkillToggle}
            />
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No research matches the selected skills. Try different filters.
          </div>
        )}
      </ScrollableSection>

      {/* Education */}
      <Education />

      {/* Footer */}
      <footer className="bg-secondary/30 py-8 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 Ishika Khokhani. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
