
import React from 'react';
import type { ExperienceEntry } from '../types';

interface ExperienceCardProps {
  experience: ExperienceEntry;
}

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-1 text-sky-700">{experience.role}</h3>
        <div className="mb-1 flex items-center text-sm text-slate-500">
          <BriefcaseIcon className="mr-2 h-4 w-4 flex-shrink-0" />
          <span>{experience.organization}</span>
        </div>
        <div className="mb-3 flex items-center text-xs text-slate-400">
          <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
          <span>{experience.duration}</span>
        </div>
        
        <ul className="list-disc list-outside pl-5 text-slate-600 text-sm space-y-1 mb-4 flex-grow">
          {experience.descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        
        {experience.tags && experience.tags.length > 0 && (
          <div className="mt-auto pt-3 border-t border-slate-200">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;