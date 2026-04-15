import React from 'react';
import { User, Code2, GraduationCap } from 'lucide-react';
import normalPortrait from '../assets/image-normal-state.png';
import hoverPortrait from '../assets/image-hovered-state.png';
import useReveal from '../hooks/useReveal';

export default function About() {
  const sectionRef = useReveal(0.1);
  const cardsRef = useReveal(0.1);

  return (
    <section id="about" className="py-24 px-6 max-w-300 mx-auto min-h-[80vh] flex flex-col justify-center relative z-10 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-72 w-[min(52rem,88vw)] rounded-full bg-linear-to-r from-accent-1/8 via-accent-2/10 to-accent-3/8 blur-3xl"></div>
      <div ref={sectionRef} className="reveal">
        <div className="mb-16 text-center">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 bg-linear-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-accent-1 to-accent-2 mx-auto rounded-full"></div>
          <p className="mt-6 text-text-secondary max-w-3xl mx-auto text-base sm:text-lg">
            I build frontend interfaces that feel clean, responsive, and purposeful from first impression to final interaction.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Side: Picture */}
          <div className="w-full md:w-[40%] flex justify-center">
            <div className="relative w-full max-w-87.5 aspect-4/5 group">
              <div className="absolute inset-0 bg-linear-to-br from-accent-1 to-accent-3 opacity-20 rounded-3xl rotate-3 scale-105 transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-30"></div>
              <div className="absolute inset-0 bg-bg-secondary rounded-3xl -rotate-3 scale-105 transition-all duration-700 border border-glass-border backdrop-blur-sm group-hover:-rotate-6 shadow-xl group-hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25)]"></div>
              <div className="relative w-full h-full rounded-3xl border border-glass-border shadow-2xl z-10 overflow-hidden">
                <img
                  src={normalPortrait}
                  alt="John Hensley Santos portrait"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ease-out opacity-100 group-hover:opacity-0"
                />
                <img
                  src={hoverPortrait}
                  alt="John Hensley Santos portrait with glasses"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Text & Cards */}
          <div className="w-full md:w-[60%] flex flex-col gap-10">
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Hi, I'm <strong className="text-text-primary">John Hensley Santos</strong>, but you can call me <strong className="text-accent-1">hens</strong>. I am an IT student focused on frontend development and modern web UI.
              </p>
              <p>
                My work centers on responsive layouts, smooth interactions, and maintainable component systems. I enjoy turning ideas into polished interfaces that are fast, usable, and visually consistent.
              </p>
              <p>
                Whether I am refining a landing page, creating reusable UI pieces, or aligning design with code, I am always improving my craft as a frontend developer.
              </p>
            </div>

          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children reveal">
            <div className="glass-card p-6 group">
              <div className="w-12 h-12 rounded-xl bg-accent-1/10 flex items-center justify-center mb-4 group-hover:bg-accent-1/20 transition-colors duration-300">
                <Code2 className="text-accent-1" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend UI</h3>
              <p className="text-sm text-text-secondary">Focused on responsive layouts, component-driven design, and accessible client-side experiences.</p>
            </div>
            
            <div className="glass-card p-6 group">
              <div className="w-12 h-12 rounded-xl bg-accent-2/10 flex items-center justify-center mb-4 group-hover:bg-accent-2/20 transition-colors duration-300">
                <GraduationCap className="text-accent-2" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Design Aware</h3>
              <p className="text-sm text-text-secondary">Comfortable translating visuals from design tools into consistent, production-ready UI.</p>
            </div>
            
            <div className="glass-card p-6 sm:col-span-2 group">
              <div className="w-12 h-12 rounded-xl bg-accent-3/10 flex items-center justify-center mb-4 group-hover:bg-accent-3/20 transition-colors duration-300">
                <User className="text-accent-3" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
              <p className="text-sm text-text-secondary">Dedicated to crafting maintainable logic, smooth interactions, and beautiful user interfaces.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
