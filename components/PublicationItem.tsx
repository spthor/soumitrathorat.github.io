
import React from 'react';
import type { Publication } from '../types';

interface PublicationItemProps {
  publication: Publication;
}

const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const PdfIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);


const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  return (
    <div className="p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-sky-700 mb-1">{publication.title}</h3>
      {publication.authors && (
        <p className="text-sm text-slate-600 italic mb-1">{publication.authors}</p>
      )}
      <p className="text-sm text-slate-500 mb-2">
        <span className="font-medium">{publication.type}</span> at {publication.venue}, {publication.year}
      </p>
      {publication.abstract && (
         <p className="text-sm text-slate-600 mb-3">{publication.abstract}</p>
      )}
      <div className="flex space-x-4">
        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-sky-600 hover:text-sky-700 hover:underline"
          >
            <LinkIcon className="mr-1.5 h-4 w-4" />
            View Details
          </a>
        )}
        {publication.pdfLink && (
          <a
            href={publication.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-sky-600 hover:text-sky-700 hover:underline"
          >
            <PdfIcon className="mr-1.5 h-4 w-4" />
            Download PDF
          </a>
        )}
      </div>
    </div>
  );
};

export default PublicationItem;