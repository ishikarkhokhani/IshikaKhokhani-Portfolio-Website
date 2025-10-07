import { X } from 'lucide-react';
import { skills } from '../data/portfolio';
import { SkillTag } from './SkillTag';

interface SkillsFilterProps {
  activeSkills: Set<string>;
  onSkillToggle: (skill: string) => void;
  onClearAll: () => void;
}

export const SkillsFilter = ({ activeSkills, onSkillToggle, onClearAll }: SkillsFilterProps) => {
  if (activeSkills.size === 0) return null;

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4 px-4 sm:px-6 lg:px-8 animate-slide-in">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">
            Filtering by: <span className="text-primary">{activeSkills.size} skill{activeSkills.size > 1 ? 's' : ''}</span>
          </h3>
          <button
            onClick={onClearAll}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Clear all
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {Array.from(activeSkills).map((skill) => (
            <SkillTag
              key={skill}
              skill={skill}
              isActive={true}
              onClick={() => onSkillToggle(skill)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
