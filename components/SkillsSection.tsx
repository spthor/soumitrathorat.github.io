
import React from 'react';
import type { SkillCategory } from '../types';

interface SkillsSectionProps {
  id: string;
  skillCategories: SkillCategory[];
}

const ChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a4 4 0 0 0 0 5.08L8 12a4 4 0 0 1 0 8l-4.38 3.46a4 4 0 0 0 0 5.08L8 22a4 4 0 0 1 8 0l4.38-3.46a4 4 0 0 0 0-5.08L16 12a4 4 0 0 1 0-8l4.38-3.46a4 4 0 0 0 0-5.08z"/>
        <path d="M12 2v20"/>
    </svg>
);


const SkillsSection: React.FC<SkillsSectionProps> = ({ id, skillCategories }) => {
  return (
    <section id={id} className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-800" style={{fontFamily: "'Playfair Display', serif"}}>
          Skills & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-sky-700 mb-4 flex items-center">
                <ChipIcon className="mr-2 h-5 w-5 text-sky-600" />
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-slate-600 bg-sky-100 px-3 py-1.5 rounded-md">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;