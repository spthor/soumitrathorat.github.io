
import React from 'react';
import type { ExperienceEntry } from '../types';
import ExperienceCard from './ExperienceCard';

interface ExperienceSectionProps {
  id: string;
  experienceEntries: ExperienceEntry[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id, experienceEntries }) => {
  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-800" style={{fontFamily: "'Playfair Display', serif"}}>
          Experience
        </h2>
        {experienceEntries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {experienceEntries.map((entry) => (
              <ExperienceCard key={entry.id} experience={entry} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-600">No experience to display at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;