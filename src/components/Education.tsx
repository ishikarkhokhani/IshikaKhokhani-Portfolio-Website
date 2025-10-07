import { GraduationCap, BookOpen, ExternalLink } from 'lucide-react';
import { courses } from '../data/portfolio';

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Education</h2>
        </div>

        {/* Degrees */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card rounded-lg p-6 card-glow hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Masters in Computer Science & Applications
                </h3>
                <p className="text-muted-foreground font-medium">Virginia Tech</p>
                <p className="text-sm text-muted-foreground">August 2024 – Present • GPA: 3.54</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 card-glow hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Bachelors in Computer Science
                </h3>
                <p className="text-muted-foreground font-medium">University of Mumbai</p>
                <p className="text-sm text-muted-foreground">January 2021 - May 2024 • GPA: 3.56</p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Coursework & Insights
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-card rounded-lg p-5 card-glow hover:scale-[1.02] transition-all duration-300 group"
              >
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-gradient transition-all">
                  {course.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">{course.institution}</p>
                
                {course.status === 'published' && course.blogLink && (
                  <a
                    href={course.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
                  >
                    Read Blog
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                
                {course.status === 'placeholder' && (
                  <span className="text-sm text-muted-foreground italic">
                    Blog coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
