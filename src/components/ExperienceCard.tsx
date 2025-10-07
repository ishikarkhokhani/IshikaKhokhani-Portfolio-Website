import { Building2, Calendar } from 'lucide-react';
import { Experience } from '../data/portfolio';
import { SkillTag } from './SkillTag';

interface ExperienceCardProps {
  experience: Experience;
  activeSkills: Set<string>;
  onSkillClick: (skill: string) => void;
}

export const ExperienceCard = ({ experience, activeSkills, onSkillClick }: ExperienceCardProps) => {
  return (
    <div className="group bg-card rounded-lg p-6 card-glow hover:scale-[1.02] transition-all duration-300 flex-shrink-0 w-full sm:w-[400px] md:w-[450px]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
            {experience.title}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">{experience.company}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{experience.period}</span>
          </div>
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
        {experience.tags.map((tag) => (
          <SkillTag
            key={tag}
            skill={tag}
            isActive={activeSkills.has(tag)}
            onClick={() => onSkillClick(tag)}
          />
        ))}
      </div>
    </div>
  );
};
