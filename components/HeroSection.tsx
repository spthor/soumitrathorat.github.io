
import React from 'react';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-600 to-indigo-700 text-white pattern-bg">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <style>{`
        .pattern-bg {
          background-image: radial-gradient(circle at top right, rgba(120, 120, 255, 0.05) 0%, transparent 50%),
                            radial-gradient(circle at bottom left, rgba(120, 255, 120, 0.05) 0%, transparent 40%);
        }
      `}</style>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <img 
          src="https://via.placeholder.com/150/CBD5E1/475569?text=ST" // Placeholder image
          alt="Soumitra Thorat" 
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
          Soumitra Thorat
        </h1>
        <p className="text-xl sm:text-2xl text-sky-200 mb-6 font-medium">
          Qualitative Researcher
        </p>
        <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-slate-100">
          Skilled in ethnographic and interaction analysis, with expertise in studying how users navigate complex systems in digitally mediated environments. Experienced in unpacking the social and organizational contexts of technology use and translating data into design-relevant insights that challenge surface-level metrics. Based in Washington, DC, USA.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#experience"
            className="inline-block bg-white text-sky-700 hover:bg-slate-100 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md w-full sm:w-auto"
          >
            View My Experience
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-sky-700 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md w-full sm:w-auto"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;