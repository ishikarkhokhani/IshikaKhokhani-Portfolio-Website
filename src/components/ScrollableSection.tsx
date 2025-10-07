import { ReactNode } from 'react';

interface ScrollableSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const ScrollableSection = ({ id, title, subtitle, children }: ScrollableSectionProps) => {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {children}
            </div>
          </div>
          
          {/* Fade edges for scroll hint */}
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
