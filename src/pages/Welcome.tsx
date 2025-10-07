import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const visitorSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  linkedin_profile: z.string().trim().url("Invalid LinkedIn URL").optional().or(z.literal('')),
});

export default function Welcome() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin_profile: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = visitorSchema.parse(formData);
      
      setIsSubmitting(true);

      // Insert visitor info
      const { error } = await supabase
        .from('visitor_info')
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          linkedin_profile: validatedData.linkedin_profile || null,
        }]);

      if (error) throw error;

      // Store in session storage that user has submitted info
      sessionStorage.setItem('visitor_submitted', 'true');
      
      // Navigate to profile selection
      navigate('/select-profile');
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit information. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 sm:p-12 card-glow animate-scale-in">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome
            </h1>
            <p className="text-muted-foreground">
              Please share your details to explore the portfolio
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 bg-input border-border text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 bg-input border-border text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            <div>
              <Input
                type="url"
                placeholder="LinkedIn Profile (Optional)"
                value={formData.linkedin_profile}
                onChange={(e) => setFormData({ ...formData, linkedin_profile: e.target.value })}
                className="h-12 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Continue'}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Your information helps me understand my audience better
          </p>
        </div>
      </div>
    </div>
  );
}
