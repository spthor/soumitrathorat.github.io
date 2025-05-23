
import React from 'react';

interface ContactSectionProps {
  id: string;
}

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIconFull: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);


const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const email = "soumitrathorat@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/soumitrathorat-placeholder/"; // UPDATE THIS
  const githubUrl = "https://github.com/sthorat-placeholder"; // UPDATE THIS if applicable

  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-800 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Get In Touch</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
          I'm open to discussing research collaborations, speaking engagements, or other opportunities. Please feel free to reach out.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
          <a 
            href={`mailto:${email}`} 
            className="flex items-center text-lg hover:text-sky-400 transition-colors duration-300"
          >
            <MailIcon className="mr-3 h-7 w-7"/>
            {email}
          </a>
        </div>

        <div className="flex justify-center space-x-8">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">
            <LinkedinIcon className="h-8 w-8" />
          </a>
          {/* Add GitHub icon if URL is not a placeholder or user wants to show it */}
          {githubUrl !== "https://github.com/sthorat-placeholder" && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">
              <GithubIconFull className="h-8 w-8" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;