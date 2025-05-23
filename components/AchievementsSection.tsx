
import React from 'react';
import type { Achievement } from '../types';
import AchievementItem from './AchievementItem';

interface AchievementsSectionProps {
  id: string;
  achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ id, achievements }) => {
  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-800" style={{fontFamily: "'Playfair Display', serif"}}>
          Achievements & Awards
        </h2>
        {achievements.length > 0 ? (
          <div className="space-y-8">
            {achievements.map((achievement) => (
              <AchievementItem key={achievement.id} achievement={achievement} />
            ))}
          </div>
        ) : (
           <p className="text-center text-slate-600">No achievements to display at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default AchievementsSection;