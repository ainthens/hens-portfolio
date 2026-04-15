import React from 'react';
import useReveal from '../hooks/useReveal';
import figmaLogo from '../assets/figma-logo.png';
import canvaLogo from '../assets/canva-logo.png';
import adobeAfterEffectsLogo from '../assets/adobe-after-effects-logo.png';
import alightMotionLogo from '../assets/alight-motion-logo.png';
import ibisPaintLogo from '../assets/ibis-paint-logo.png';

const skillsData = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
];

const creativeTools = [
  { name: 'Figma', icon: figmaLogo },
  { name: 'Canva', icon: canvaLogo },
  { name: 'Adobe After Effects', icon: adobeAfterEffectsLogo },
  { name: 'Alight Motion', icon: alightMotionLogo },
  { name: 'IbisPaintX', icon: ibisPaintLogo },
];

export default function Skills() {
  const headerRef = useReveal(0.15);
  const gridRef = useReveal(0.1);
  const designRef = useReveal(0.1);

  return (
    <section id="skills" className="py-24 px-6 max-w-300 mx-auto min-h-[80vh] flex flex-col justify-center relative z-10 w-full">
      <div ref={headerRef} className="mb-16 text-center reveal">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 bg-linear-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent inline-block">
          My Skills
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-accent-1 to-accent-2 mx-auto rounded-full"></div>
        <p className="mt-6 text-text-secondary max-w-2xl mx-auto text-lg">
          A frontend-focused stack for building responsive interfaces, plus the design apps I use to create and refine visuals.
        </p>
      </div>

      <div className="mb-16">
        <div className="mb-6 text-center">
          <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-text-secondary">Frontend & Development</h3>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto w-full stagger-children reveal">
          {skillsData.map((skill) => (
            <div key={skill.name} className="glass-card flex flex-col items-center justify-center p-6 group cursor-default">
              <div className="w-16 h-16 mb-4 flex items-center justify-center relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-accent-1 opacity-0 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                  onError={(e) => {
                    if (skill.name === 'MySQL') e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg';
                    else if (skill.name === 'Tailwind CSS') e.target.src = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg';
                  }}
                />
              </div>
              <h3 className="text-text-primary font-bold text-center group-hover:text-accent-1 transition-colors duration-300">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-text-secondary">Creativity Software Tools</h3>
        <p className="mt-3 text-sm text-text-secondary">
          These badges now use the local app icons from the assets folder.
        </p>
      </div>
      <div ref={designRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto w-full stagger-children reveal">
        {creativeTools.map((tool) => (
          <div key={tool.name} className="glass-card flex flex-col items-center justify-center p-6 group cursor-default">
            <div className="w-16 h-16 mb-4 flex items-center justify-center relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-accent-2 opacity-0 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-full h-full object-contain relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-500 rounded-2xl"
              />
            </div>
            <h3 className="text-text-primary font-bold text-center group-hover:text-accent-2 transition-colors duration-300">{tool.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
