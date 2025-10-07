-- Create visitor_info table to store website visitor details
CREATE TABLE public.visitor_info (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  linkedin_profile TEXT,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  selected_profile TEXT CHECK (selected_profile IN ('data-analyst', 'software-engineer', 'ml-ai'))
);

-- Enable Row Level Security
ALTER TABLE public.visitor_info ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert visitor info (public form)
CREATE POLICY "Anyone can submit visitor info" 
ON public.visitor_info 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading (only you can view via backend)
CREATE POLICY "No public access to visitor info" 
ON public.visitor_info 
FOR SELECT 
USING (false);

-- Create index for efficient queries
CREATE INDEX idx_visitor_info_email ON public.visitor_info(email);
CREATE INDEX idx_visitor_info_visited_at ON public.visitor_info(visited_at DESC);