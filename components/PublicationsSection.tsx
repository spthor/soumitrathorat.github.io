
import React from 'react';
import type { Publication } from '../types';
import PublicationItem from './PublicationItem';

interface PublicationsSectionProps {
  id: string;
  publications: Publication[];
}

const PublicationsSection: React.FC<PublicationsSectionProps> = ({ id, publications }) => {
  return (
    <section id={id} className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-800" style={{fontFamily: "'Playfair Display', serif"}}>
          Publications & Presentations
        </h2>
        {publications.length > 0 ? (
          <div className="space-y-8">
            {publications.map((publication) => (
              <PublicationItem key={publication.id} publication={publication} />
            ))}
          </div>
        ) : (
           <p className="text-center text-slate-600">No publications or presentations to display at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;