# Developer Guide - Portfolio Website

This guide will help you add and modify content on your portfolio website. All changes are made by editing specific files in the project.

## Table of Contents
- [Adding/Editing Work Experience](#addingediting-work-experience)
- [Adding/Editing Projects](#addingediting-projects)
- [Adding/Editing Research](#addingediting-research)
- [Adding/Editing Education/Courses](#addingediting-educationcourses)
- [Adding/Editing Skills](#addingediting-skills)
- [Updating Personal Information](#updating-personal-information)
- [Managing Profile Filtering](#managing-profile-filtering)
- [Viewing Visitor Data](#viewing-visitor-data)
- [Customizing Design](#customizing-design)

---

## Adding/Editing Work Experience

**File:** `src/data/portfolio.ts`

**Location:** Find the `experiences` array (around line 70)

### To Add a New Experience:
```typescript
{
  id: 'exp-unique-id',  // Use a unique ID
  title: 'Your Job Title',
  company: 'Company Name',
  period: 'Start Date – End Date',
  description: [
    'First bullet point about your work',
    'Second bullet point',
    'Third bullet point',
    // Add as many bullet points as needed
  ],
  tags: ['Python', 'JavaScript', 'SQL'],  // Technologies/skills used
  type: 'work',  // Always 'work' for experience
  profiles: ['data-analyst', 'software-engineer', 'ml-ai']  // Which profiles should see this
}
```

### Profile Options:
- `'data-analyst'` - Shows in Data Analyst view
- `'software-engineer'` - Shows in Software Engineer view
- `'ml-ai'` - Shows in ML/AI Engineer view

You can include multiple profiles if the experience is relevant to more than one.

### Example:
```typescript
{
  id: 'exp-example',
  title: 'Senior Data Analyst',
  company: 'Tech Corp',
  period: 'Jan 2024 – Present',
  description: [
    'Analyzed user behavior data to improve product recommendations',
    'Built dashboards using Tableau and Python'
  ],
  tags: ['Python', 'Tableau', 'SQL', 'Data Analytics'],
  type: 'work',
  profiles: ['data-analyst']
}
```

---

## Adding/Editing Projects

**File:** `src/data/portfolio.ts`

**Location:** Find the `projects` array (around line 101)

### To Add a New Project:
```typescript
{
  id: 'proj-unique-id',  // Use a unique ID
  title: 'Project Name',
  company: 'Personal Project' or 'Academic Project' or 'Company Name',
  period: 'Year or Date Range',
  description: [
    'Description of what the project does',
    'Key features or achievements',
    'Technologies and methodologies used'
  ],
  tags: ['React', 'Node.js', 'MongoDB'],  // Technologies used
  type: 'project',  // Use 'project' for personal/academic projects
  profiles: ['software-engineer']  // Target profiles
}
```

### Example:
```typescript
{
  id: 'proj-weather-app',
  title: 'Real-time Weather Dashboard',
  company: 'Personal Project',
  period: '2024',
  description: [
    'Built a responsive weather app using React and OpenWeather API',
    'Implemented geolocation and 7-day forecast features',
    'Deployed on Vercel with 99.9% uptime'
  ],
  tags: ['React', 'JavaScript', 'API Integration', 'Vercel'],
  type: 'project',
  profiles: ['software-engineer']
}
```

---

## Adding/Editing Research

**File:** `src/data/portfolio.ts`

**Location:** Same `projects` array, but use `type: 'research'`

### To Add Research:
```typescript
{
  id: 'proj-research-unique-id',
  title: 'Research Paper/Project Title',
  company: 'Institution or Lab Name',
  period: 'Date Range',
  description: [
    'Research problem and objectives',
    'Methodology and approach',
    'Key findings or results',
    'Impact or applications'
  ],
  tags: ['Machine Learning', 'Python', 'Research'],
  type: 'research',  // Use 'research' type
  profiles: ['ml-ai', 'data-analyst']
}
```

### Example:
```typescript
{
  id: 'proj-sentiment-analysis',
  title: 'Sentiment Analysis on Social Media Posts',
  company: 'Virginia Tech',
  period: '2024',
  description: [
    'Developed BERT-based model for sentiment classification',
    'Achieved 92% accuracy on Twitter dataset',
    'Published findings in student research conference'
  ],
  tags: ['NLP', 'BERT', 'Python', 'Machine Learning'],
  type: 'research',
  profiles: ['ml-ai', 'data-analyst']
}
```

---

## Adding/Editing Education/Courses

**File:** `src/data/portfolio.ts`

**Location:** Find the `courses` array (around line 148)

### To Add a Course:
```typescript
{
  id: 'course-unique-id',
  name: 'Course Name',
  institution: 'University or Platform',
  blogLink: 'https://link-to-blog-post.com',  // Optional
  projectLink: 'https://github.com/yourproject',  // Optional
  status: 'published' or 'upcoming' or 'placeholder'
}
```

### Status Options:
- `'published'` - Course with published blog/project
- `'upcoming'` - Course planned but not completed
- `'placeholder'` - Course completed, blog/project pending

### Example:
```typescript
{
  id: 'course-deep-learning',
  name: 'Deep Learning Specialization',
  institution: 'Coursera',
  blogLink: 'https://medium.com/@ishika/deep-learning-insights',
  projectLink: 'https://github.com/ishika/dl-projects',
  status: 'published'
}
```

---

## Adding/Editing Skills

**File:** `src/data/portfolio.ts`

**Location:** Find the `skills` array (around line 25)

### To Add a New Skill:
```typescript
{ name: 'Skill Name', category: 'category-type' }
```

### Category Options:
- `'language'` - Programming languages (Python, Java, etc.)
- `'framework'` - Frameworks and libraries (React, Django, etc.)
- `'database'` - Databases (PostgreSQL, MongoDB, etc.)
- `'cloud'` - Cloud platforms (AWS, GCP, etc.)
- `'tool'` - Tools and utilities (Git, Docker, etc.)
- `'ml'` - ML/AI technologies (TensorFlow, NLP, etc.)

### Example:
```typescript
{ name: 'Rust', category: 'language' },
{ name: 'GraphQL', category: 'framework' },
{ name: 'Snowflake', category: 'database' }
```

**Important:** After adding a skill to the `skills` array, you can use it in the `tags` field of your experiences, projects, or research.

---

## Updating Personal Information

### Updating Name and Hero Section
**File:** `src/components/Hero.tsx`

**Lines to change:**
- Line 20: Update your name
- Line 21: Update your title/role
- Line 24-25: Update your bio/tagline
- Line 30-34: Update university and contact info

### Updating Footer
**File:** `src/pages/Portfolio.tsx`

**Line:** Around line 207
```typescript
<p className="text-sm">
  © 2025 Your Name. Built with React, TypeScript, and Tailwind CSS.
</p>
```

### Adding Social Links
**File:** `src/components/Navigation.tsx`

Look for the social icons section and update the `href` attributes with your links:
- GitHub: Update the GitHub link
- LinkedIn: Update the LinkedIn link
- Email: Update the email address

---

## Managing Profile Filtering

### Understanding Profile System

The portfolio has 3 profile views:
1. **Data Analyst** - Shows data-focused work
2. **Software Engineer** - Shows development work
3. **ML/AI Engineer** - Shows ML/AI work

Each experience/project/research item has a `profiles` array that determines which views it appears in.

### Example Scenarios:

**Show only to Software Engineers:**
```typescript
profiles: ['software-engineer']
```

**Show to Data Analysts and ML/AI Engineers:**
```typescript
profiles: ['data-analyst', 'ml-ai']
```

**Show to everyone:**
```typescript
profiles: ['data-analyst', 'software-engineer', 'ml-ai']
```

---

## Viewing Visitor Data

Visitor information (name, email, LinkedIn) is stored in your database.

### To Access Visitor Data:

1. **Via Backend Dashboard:**
   - You can query the database directly to see visitor information
   - The data is stored in the `visitor_info` table

2. **Table Structure:**
   - `id` - Unique identifier
   - `name` - Visitor's name
   - `email` - Visitor's email
   - `linkedin_profile` - Visitor's LinkedIn URL (if provided)
   - `visited_at` - Timestamp of visit
   - `selected_profile` - Which profile they selected

3. **Export Data:**
   You can export this data as CSV for analysis or CRM integration.

---

## Customizing Design

### Colors and Theme
**File:** `src/index.css`

The design uses a Netflix-inspired dark theme. You can customize colors by changing the CSS variables:

```css
:root {
  --background: 0 0% 8%;        /* Main background color */
  --foreground: 0 0% 95%;       /* Text color */
  --primary: 0 100% 45%;        /* Netflix red - primary color */
  --primary-glow: 0 100% 55%;   /* Lighter red for hover */
  /* ... more colors */
}
```

**Color Format:** HSL (Hue, Saturation, Lightness)

### Typography
**File:** `src/index.css` (line 65)

Change the font family:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Your Font', sans-serif;
```

---

## GitHub Integration

### Adding GitHub Links to Projects

In your project descriptions, you can add GitHub links:

```typescript
{
  id: 'proj-example',
  title: 'My Project',
  company: 'Personal Project',
  period: '2024',
  description: [
    'Project description',
    'GitHub: https://github.com/yourusername/project-name'
  ],
  tags: ['React'],
  type: 'project',
  profiles: ['software-engineer']
}
```

Or create a dedicated `githubLink` field by modifying the `Experience` interface in `src/data/portfolio.ts`.

---

## Tips and Best Practices

1. **Unique IDs:** Always use unique IDs for each item (exp-, proj-, course-)
2. **Consistent Formatting:** Keep date formats consistent (e.g., "Jan 2024 – Present")
3. **Relevant Tags:** Only add tags that are actually used in the work/project
4. **Profile Assignment:** Think carefully about which profiles should see each item
5. **Descriptive Bullets:** Use action verbs and quantify achievements where possible
6. **Keep it Updated:** Regularly update your portfolio as you gain new experiences

---

## Common Tasks Quick Reference

| Task | File | Section |
|------|------|---------|
| Add work experience | `src/data/portfolio.ts` | `experiences` array |
| Add personal project | `src/data/portfolio.ts` | `projects` array (type: 'project') |
| Add research | `src/data/portfolio.ts` | `projects` array (type: 'research') |
| Add course | `src/data/portfolio.ts` | `courses` array |
| Add skill | `src/data/portfolio.ts` | `skills` array |
| Update name | `src/components/Hero.tsx` | Line 20 |
| Update bio | `src/components/Hero.tsx` | Lines 24-25 |
| Change colors | `src/index.css` | `:root` section |

---

## Need Help?

- Check the existing entries in `src/data/portfolio.ts` for examples
- All data follows the same structure - copy an existing entry and modify it
- Make sure to save files after editing
- The website updates automatically when you save changes

---

**Remember:** After making changes, test the website to ensure everything displays correctly across all three profile views (Data Analyst, Software Engineer, ML/AI).
