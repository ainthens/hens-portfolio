import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function Education() {
  const headerRef = useReveal(0.15);
  const item1Ref = useReveal(0.15);
  const item2Ref = useReveal(0.15);

  return (
    <section id="education" className="py-24 px-6 max-w-[1200px] mx-auto min-h-[80vh] flex flex-col justify-center relative z-10 w-full">
      <div ref={headerRef} className="mb-16 text-center reveal">
        <p className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-2">
          What I have studied so far
        </p>
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent inline-block">
          Education.
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-1 to-accent-2 mx-auto rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto w-full">
        {/* Center Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[3px] bg-gradient-to-b from-accent-1 via-accent-2 to-accent-3 hidden md:block rounded-full opacity-40"></div>

        {/* Item 1: University (Left side) */}
        <div ref={item1Ref} className="relative flex flex-col md:flex-row items-center justify-between mb-16 w-full group reveal">
          {/* Card */}
          <div className="w-full md:w-[45%] md:pr-8 mb-6 md:mb-0 shrink-0">
            <div className="glass-card p-6 relative inline-block w-full text-left">
              {/* Arrow pointer for desktop */}
              <div className="hidden md:block absolute top-[calc(50%-10px)] -right-[11px] w-5 h-5 bg-bg-secondary border-t border-r border-glass-border rotate-45 transform backdrop-blur-sm group-hover:border-t-accent-1/40 group-hover:border-r-accent-1/40 transition duration-300"></div>
              
              <h3 className="text-2xl font-bold mb-1">Bulacan State University - Bustos Campus</h3>
              <p className="text-sm font-semibold text-accent-1 mb-4">Bustos, Bulacan</p>
              
              <ul className="list-disc pl-5 md:pl-0 md:list-none space-y-1 text-sm text-text-primary">
                <li>Bachelor of Science in Information Technology</li>
              </ul>
            </div>
          </div>
          
          {/* Center Icon */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-bg-primary border-4 border-accent-1 text-accent-1 z-10 hidden md:flex shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <GraduationCap size={24} />
          </div>

          {/* Date (Right side) */}
          <div className="w-full md:w-[45%] md:pl-8 text-center md:text-left text-sm font-bold text-text-secondary">
            2023 - Present
          </div>
        </div>

        {/* Item 2: High School (Right side) */}
        <div ref={item2Ref} className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-8 w-full group reveal">
          {/* Card */}
          <div className="w-full md:w-[45%] md:pl-8 mb-6 md:mb-0 shrink-0">
            <div className="glass-card p-6 relative inline-block w-full text-left">
              {/* Arrow pointer for desktop */}
              <div className="hidden md:block absolute top-[calc(50%-10px)] -left-[11px] w-5 h-5 bg-bg-secondary border-b border-l border-glass-border rotate-45 transform backdrop-blur-sm group-hover:border-b-accent-2/40 group-hover:border-l-accent-2/40 transition duration-300"></div>
              
              <h3 className="text-2xl font-bold mb-1">Cambaog National High School</h3>
              <p className="text-sm font-semibold text-accent-2 mb-4">Bustos, Bulacan</p>
              
              <ul className="list-disc pl-5 space-y-1 text-sm text-text-primary">
                <li>With Honors</li>
              </ul>
            </div>
          </div>
          
          {/* Center Icon */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-bg-primary border-4 border-accent-2 text-accent-2 z-10 hidden md:flex shadow-[0_0_20px_rgba(129,140,248,0.25)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(129,140,248,0.4)]">
            <BookOpen size={20} />
          </div>

          {/* Date (Left side) */}
          <div className="w-full md:w-[45%] md:pr-8 text-center md:text-right text-sm font-bold text-text-secondary">
            2017 - 2023
          </div>
        </div>
      </div>
    </section>
  );
}
