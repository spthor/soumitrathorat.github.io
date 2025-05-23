
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection'; // Renamed
import PublicationsSection from './components/PublicationsSection';
import AchievementsSection from './components/AchievementsSection'; // New
import SkillsSection from './components/SkillsSection'; // New
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import type { ExperienceEntry, Publication, NavLink, Achievement, SkillCategory } from './types';

const App: React.FC = () => {
  const experienceData: ExperienceEntry[] = [
    {
      id: 'exp1',
      role: 'PhD Researcher',
      organization: "King's College London, UK",
      duration: '2021 - Present',
      descriptionPoints: [
        'Conducted multi-site ethnographic research and video analysis on technology integration in public education.',
        'Designed and executed qualitative research (1:1, group interviews, observations, video/conversation analysis).',
        'Used NVivo and MAXQDA for systematic data coding and analysis (45+ interviews, 200+ observation hours).',
        'Generated actionable insights on digital education reform, highlighting policy-implementation tensions.',
        'Delivered findings via academic publications, seminars, stakeholder presentations, and synthesized briefs.',
      ],
      tags: ['Ethnography', 'Video Analysis', 'Qualitative Data Analysis', 'NVivo', 'MAXQDA', 'Education Technology'],
    },
    {
      id: 'exp2',
      role: 'Graduate Teaching Assistant',
      organization: "King's College London, UK",
      duration: '2021 - 2025',
      descriptionPoints: [
        'Supported 200+ undergraduates at King’s Business School through seminars, tutorials, and 1:1 supervision.',
        'Designed and delivered writing workshops focusing on analytical reasoning, argument structure, and audience-centered communication.',
        'Taught introductory and advanced linguistics courses (language & technology, sociolinguistics, discourse analysis).',
        'Created inclusive learning environments supporting diverse needs and cross-functional communication strategies.',
      ],
      tags: ['Teaching', 'Academic Support', 'Curriculum Design', 'Linguistics', 'Communication'],
    },
    {
      id: 'exp3',
      role: 'Graduate Research Assistant',
      organization: 'George Washington University',
      duration: '2020 - 2021',
      descriptionPoints: [
        'Conducted NSF-funded qualitative research on adaptation of embodied rituals to virtual platforms (Zoom, FaceTime).',
        'Designed and implemented mixed-methods data collection (semi-structured interviews, video analysis, archival research, participant observation).',
        'Managed transcription and MAXQDA data coding for 30+ focus groups and 20 1:1 interviews.',
        'Executed project’s digital outreach strategy (blog content, visual assets, research updates).',
      ],
      tags: ['Qualitative Research', 'Mixed-Methods', 'User Practice', 'MAXQDA', 'Digital Outreach'],
    },
     {
      id: 'exp4',
      role: 'Graduate Teaching Assistant',
      organization: 'George Washington University',
      duration: '2020 - 2020',
      descriptionPoints: [
        'Graded assignments, providing detailed feedback to support writing development and critical engagement.',
        'Reviewed and adapted lesson plans for student-centered learning and dynamic classrooms.',
        'Led in-class discussions for up to 40 students, fostering inclusive dialogue.',
      ],
      tags: ['Teaching', 'Grading', 'Student Engagement', 'Pedagogy'],
    },
    {
      id: 'exp5',
      role: 'Research Assistant',
      organization: 'Knox College',
      duration: '2018 - 2019',
      descriptionPoints: [
        "Designed and executed a mixed methods project on media literacy programs and 'fake news'.",
        'Implemented ethnographic tools for studying politics of disinformation and news literacy (website observations, online lesson observations).',
      ],
      tags: ['Mixed-Methods', 'Media Literacy', 'Disinformation', 'Ethnography'],
    },
    {
      id: 'exp6',
      role: 'Research Consultant',
      organization: 'University of Massachusetts, Department of Sociology',
      duration: '2018 - 2019',
      descriptionPoints: [
        'Conducted 155+ hours of participant observation at community events for Galesburg On Track initiative.',
        'Analyzed national data sets on rural poverty and economic development, supplemented by archival research.',
        'Designed and facilitated focus groups and multi-stakeholder interviews.',
        'Synthesized fieldwork and qualitative data into a peer-reviewed publication.',
      ],
      tags: ['Participant Observation', 'Community-Based Research', 'Rural Sociology', 'Data Analysis'],
    },
  ];

  const publicationsData: Publication[] = [
    {
      id: 'pub1',
      title: 'Designing the In-Between: Embodied Cursor Work & Interface Co-ordination by Student Assistants in Tech-Mediated Classroom',
      venue: 'LSE',
      year: 2024,
      type: 'Paper Presentation',
      link: '#', // Add actual link
    },
    {
      id: 'pub2',
      title: 'Practice to Policy: A real time investigation of Math Classes in Computer Supported Classrooms',
      venue: 'LSE',
      year: 2024,
      type: 'Research Presentation',
      link: '#', // Add actual link
    },
    {
      id: 'pub3',
      title: 'Interactive Technologies in IRE Sequences: A video-based study of computer supported classrooms in India',
      venue: 'ASA',
      year: 2024,
      type: 'Paper Presentation',
      link: '#', // Add actual link
    },
    {
      id: 'pub4',
      title: 'The Stories We Tell: Colorblind Racism, Classblindness, and Narrative Framing in the Rural Midwest',
      venue: 'Rural Sociology',
      year: 2022,
      type: 'Journal Paper',
      link: '#', // Add actual link
    },
  ];

  const achievementsData: Achievement[] = [
    {
      id: 'ach1',
      title: "King's Business School Doctoral Research Studentship",
      details: "Graduate Research Award",
      year: "2021-2026",
    },
    {
      id: 'ach2',
      title: "The Research Prize in Public Interest Communications, University of Florida",
      details: "Award Recipient",
      year: 2023,
    },
    {
      id: 'ach3',
      title: "Society for the Study of Social Problems, Poverty, Class, & Inequality Division Outstanding Paper Award",
      details: "Co-Winner",
      year: 2023,
    },
    {
      id: 'ach4',
      title: "Howell Atwood Award for Outstanding Achievement in Anthropology and Sociology",
      details: "Undergraduate Thesis Award",
      year: 2018,
    },
  ];
  
  const skillsData: SkillCategory[] = [
    {
      id: 'skillCat1',
      name: 'Qualitative & Design Research',
      skills: [
        'Qualitative Research', 'Design Research', 'Workshop Facilitation', 
        'Participatory Design', 'Storytelling', 'Conversation Analysis', 
        'Video Data Analysis', 'User Journey Mapping', 'Ethnography', 'Interaction Analysis'
      ],
    },
    {
      id: 'skillCat2',
      name: 'Technical Tools & Platforms',
      skills: [
        'NVivo', 'MAXQDA', 'Dedoose', 'Figma', 'GitHub', 
        'Dscout', 'Tableau', 'Mural', 'Miro', 'Adobe XD', 'Remesh'
      ],
    },
     {
      id: 'skillCat3',
      name: 'Communication & Pedagogy',
      skills: [
        'Academic Writing', 'Presentation Design', 'Stakeholder Communication', 
        'Curriculum Development', 'Inclusive Teaching', 'Public Speaking'
      ],
    },
  ];

  const navLinks: NavLink[] = [
    { label: 'Home', href: '#home' }, // Hero section acts as Home/About
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={navLinks} />
      <main className="flex-grow">
        <HeroSection id="home" />
        <ExperienceSection id="experience" experienceEntries={experienceData} />
        <PublicationsSection id="publications" publications={publicationsData} />
        <AchievementsSection id="achievements" achievements={achievementsData} />
        <SkillsSection id="skills" skillCategories={skillsData} />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;