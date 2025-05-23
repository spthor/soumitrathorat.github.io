
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Soumitra Thorat. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;