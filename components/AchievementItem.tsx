
import React from 'react';
import type { Achievement } from '../types';

interface AchievementItemProps {
  achievement: Achievement;
}

const AwardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} className="text-amber-500 h-6 w-6 mr-3 flex-shrink-0">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 22 12 17 17 22 15.79 13.88"></polyline>
  </svg>
);

const AchievementItem: React.FC<AchievementItemProps> = ({ achievement }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start">
      <AwardIcon />
      <div>
        <h3 className="text-lg font-semibold text-sky-700 mb-0.5">{achievement.title}</h3>
        <p className="text-sm text-slate-600">
          {achievement.details} 
          {achievement.year && <span className="text-slate-500"> ({achievement.year})</span>}
        </p>
      </div>
    </div>
  );
};

export default AchievementItem;