export interface SkillTag {
  name: string;
  category: 'language' | 'framework' | 'database' | 'cloud' | 'tool' | 'ml';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
  type: 'work' | 'project' | 'research';
}

export interface Course {
  id: string;
  name: string;
  institution: string;
  blogLink?: string;
  projectLink?: string;
  status: 'published' | 'upcoming' | 'placeholder';
}

export const skills: SkillTag[] = [
  // Programming & Scripting
  { name: 'Python', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Bash', category: 'language' },
  { name: 'Dart', category: 'language' },
  
  // Frameworks & Libraries
  { name: 'React', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'Express.js', category: 'framework' },
  { name: 'Flutter', category: 'framework' },
  { name: 'TensorFlow', category: 'ml' },
  { name: 'Keras', category: 'ml' },
  { name: 'scikit-learn', category: 'ml' },
  { name: 'BERT', category: 'ml' },
  { name: 'NLP', category: 'ml' },
  { name: 'Pandas', category: 'tool' },
  { name: 'NumPy', category: 'tool' },
  
  // Databases
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Firebase', category: 'database' },
  { name: 'BigQuery', category: 'database' },
  
  // Cloud & DevOps
  { name: 'AWS', category: 'cloud' },
  { name: 'GCP', category: 'cloud' },
  { name: 'Heroku', category: 'cloud' },
  { name: 'Vercel', category: 'cloud' },
  { name: 'Git', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  
  // BI & Visualization
  { name: 'Tableau', category: 'tool' },
  { name: 'Power BI', category: 'tool' },
  { name: 'D3.js', category: 'framework' },
];

export const experiences: Experience[] = [
  {
    id: 'exp-soul9',
    title: 'Co-Founder & Data Engineer',
    company: 'Soul9',
    period: 'April 2022 – June 2024',
    description: [
      'Used Python and SQL to analyze 1,000+ weekly inventory transactions to identify demand patterns and pricing gaps, increasing the monthly revenue by 18% through smarter restocking and pricing strategies.',
      'Built time-series forecasting models using scikit-learn that predicted inventory needs with 95% accuracy, cutting down extra stock by 20% and improving stock rotation efficiency.',
      'Set up automated ETL workflows between Firebase and PostgreSQL using cron jobs, reducing manual entry by 40%, allowing real-time inventory visibility for warehouse teams.',
      'Deployed RESTful APIs to sync inventory data with internal dashboards, improving update speed by 30% and reducing delays in operations reporting.'
    ],
    tags: ['Python', 'SQL', 'scikit-learn', 'Firebase', 'PostgreSQL', 'REST APIs'],
    type: 'work'
  },
  {
    id: 'exp-nirvana',
    title: 'Software Engineering Intern → Part-time SWE',
    company: 'Nirvana',
    period: 'May 2021 – July 2024',
    description: [
      'Built a real-time inventory management system using HTML, JavaScript, and Python to track material flow across departments.',
      'Integrated barcode scanning for material traceability, reducing inventory errors and improving restocking speed by 15%.',
      'Deployed solution with operations team across departments, increasing workflow visibility and boosting process efficiency by 20%.',
      'Implemented data logging features (scans, timestamps, stock status) to support analytics and identify bottlenecks in supply flow.'
    ],
    tags: ['Python', 'JavaScript', 'HTML', 'Data Analytics'],
    type: 'work'
  }
];

export const projects: Experience[] = [
  {
    id: 'proj-drone',
    title: 'Drone Detection and Mitigation – Capstone Project with U.S. Secret Service',
    company: 'Virginia Tech',
    period: 'Ongoing',
    description: [
      'Prototyping a system to detect, track, and mitigate unauthorized drones in restricted airspace, supporting U.S. Secret Service research on national security threats.',
      'Designing multi-sensor detection pipelines (RF, radar, acoustic, optical, AI/ML), improving early detection accuracy in simulated test cases.',
      'Testing non-kinetic mitigation strategies (GPS spoofing, safe landing), reducing risks of collateral interference compared to baseline mitigation methods.',
      'Collaborating in a 5-member graduate team, applying software engineering, data engineering, and AI/ML techniques to deliver a working prototype aligned with real-world constraints.'
    ],
    tags: ['Python', 'AI/ML', 'Data Engineering', 'Research', 'Security'],
    type: 'research'
  },
  {
    id: 'proj-intent',
    title: 'Intent Classification for Banking Queries',
    company: 'Academic Project',
    period: '2024',
    description: [
      'Designed and deployed a multi-model NLP pipeline using the BANKING77 dataset to improve intent classification, increasing support automation accuracy by up to 6% across models.',
      'Developed and implemented hybrid approaches (three models): TF-IDF + Logistic Regression (84%), fine-tuned BERT (82%), and a hybrid Word2Vec + USE model (86%) to capture both word and sentence-level semantics.',
      'Extracted and incorporated TF-IDF, POS, and NER features to improve model interpretability and precision.',
      'Implemented standardized training, validation, and evaluation pipelines using scikit-learn and spaCy to ensure consistent model benchmarking across all experiments.',
      'Performed error and intent overlap analysis using confusion matrices and exploratory techniques, reducing misclassification in similar queries by 10%.'
    ],
    tags: ['Python', 'NLP', 'BERT', 'TensorFlow', 'scikit-learn', 'Machine Learning'],
    type: 'project'
  },
  {
    id: 'proj-buyme',
    title: 'Buy-Me Shopping App',
    company: 'Personal Project',
    period: '2023',
    description: [
      'Developed a cross-platform shopping app in Flutter (Dart) with secure login, real-time product sync, and persistent cart features backed by Firebase, compatible across Android and iOS.',
      'Designed responsive UIs with Material Design and built backend logic for filtering, cart, and checkout.',
      'Used Firebase Analytics to analyze drop-off patterns and improve cart flow, reducing abandonment by 25%.',
      'Used Provider for state management to implement session persistence, error capture, and network failure handling.',
      'Led feature planning and testing sprints in a 4-member Agile team, validating features across devices with Git and emulator testing.'
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile Development', 'UI/UX'],
    type: 'project'
  }
];

export const courses: Course[] = [
  // Virginia Tech - Graduate
  {
    id: 'course-cloud',
    name: 'Cloud Computing',
    institution: 'Virginia Tech',
    status: 'placeholder'
  },
  {
    id: 'course-se',
    name: 'Software Engineering',
    institution: 'Virginia Tech',
    status: 'placeholder'
  },
  {
    id: 'course-dsa',
    name: 'Data Structures & Algorithms',
    institution: 'Virginia Tech',
    status: 'placeholder'
  },
  {
    id: 'course-web',
    name: 'Web & Mobile Development (React, Java, TypeScript)',
    institution: 'Virginia Tech',
    status: 'placeholder'
  },
  {
    id: 'course-ml',
    name: 'Machine Learning',
    institution: 'Virginia Tech',
    status: 'placeholder'
  },
  {
    id: 'course-ai',
    name: 'Artificial Intelligence',
    institution: 'Virginia Tech',
    status: 'placeholder'
  },
  {
    id: 'course-nlp',
    name: 'Natural Language Processing',
    institution: 'Virginia Tech',
    status: 'placeholder'
  },
  {
    id: 'course-netsec',
    name: 'Network Security',
    institution: 'Virginia Tech',
    blogLink: 'https://medium.com/@yourusername/network-security-insights',
    status: 'published'
  }
];
