interface SkillTagProps {
  skill: string;
  isActive: boolean;
  onClick: () => void;
}

export const SkillTag = ({ skill, isActive, onClick }: SkillTagProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
        isActive
          ? 'bg-primary text-primary-foreground card-glow scale-105'
          : 'bg-secondary text-secondary-foreground hover:bg-accent hover:scale-105'
      }`}
    >
      {skill}
    </button>
  );
};
