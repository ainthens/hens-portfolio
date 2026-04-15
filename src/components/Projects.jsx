import React from 'react';
import { ExternalLink } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import adlaonSnapshot from '../assets/adlaon-optical-snapshot.png';
import zennestSnapshot from '../assets/zennest-snapshot.png';
import shatteredSnapshot from '../assets/shattred-realm-snapshot.png';

const TechLogo = ({ name }) => (
  <span className="px-3 py-1.5 bg-accent-1/10 border border-accent-1/30 rounded-full text-xs font-semibold text-accent-1 hover:bg-accent-1/20 hover:border-accent-1/50 transition-colors duration-300">
    {name}
  </span>
);

const ProjectCard = ({ title, description, techs, githubUrl, liveUrl, snapshot, year }) => (
  <div className="group glass-card overflow-hidden flex flex-col h-full rounded-2xl! relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(99,102,241,0.55)]">
    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent-1/30 transition-colors duration-500"></div>

    <div className="relative aspect-1896/863 bg-linear-to-br from-accent-1/5 via-accent-2/5 to-accent-3/5 overflow-hidden border-b border-glass-border">
      {/* Animated background circles */}
      <div className="absolute w-44 h-44 rounded-full bg-accent-1/10 -top-12 -right-10 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute w-36 h-36 rounded-full bg-accent-2/10 -bottom-12 -left-10 group-hover:scale-150 transition-transform duration-700 delay-100"></div>

      {/* Project Snapshot Image */}
      {snapshot && (
        <>
          <img
            src={snapshot}
            alt={title}
            className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 z-20 bg-linear-to-t from-bg-primary/80 via-bg-primary/15 to-transparent"></div>
        </>
      )}

      <div className="absolute bottom-4 left-4 z-30">
        <span className="text-xs font-semibold tracking-wide text-white/90 bg-bg-primary/50 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2">
          {year && <span className="font-extrabold text-accent-2">{year}</span>}
          <span className="text-white/70">•</span>
          <span>Featured Project</span>
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-baseline justify-between gap-3 mb-3">
        <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-1 transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-text-secondary leading-relaxed mb-6 flex-1 text-sm">{description}</p>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {techs.map((tech) => (
          <TechLogo key={tech} name={tech} />
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 flex justify-center items-center gap-2 text-sm font-semibold text-white bg-linear-to-r from-accent-1 to-accent-2 rounded-xl transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.55)] hover:-translate-y-0.5"
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 flex justify-center items-center gap-2 text-sm font-semibold text-text-primary bg-bg-primary border border-glass-border rounded-xl transition-all duration-300 hover:border-accent-1/30 hover:bg-accent-1/5 hover:-translate-y-0.5"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
          >
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.3 1.08 2.86.82.09-.64.35-1.08.63-1.33-2.22-.26-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.28.1-2.67 0 0 .83-.27 2.72 1.02a9.42 9.42 0 0 1 4.96 0c1.88-1.29 2.71-1.02 2.71-1.02.54 1.39.2 2.42.1 2.67.64.7 1.02 1.59 1.02 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const headerRef = useReveal(0.15);
  const gridRef = useReveal(0.1);

  const allProjects = [
    {
      title: "Adlaon Optical",
      description: "A comprehensive desktop web application designed for eyewear retail and appointment management. Streamlines optical checkup scheduling, frames inventory tracking, and customer profile management to enhance the overall customer experience in optical shops.",
      techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "#",
      snapshot: adlaonSnapshot,
      year: 2025
    },
    {
      title: "Zennest",
      description: "An advanced full-stack web application for discovering and booking accommodations anywhere. Available seamlessly on both desktop and mobile platforms, featuring real-time availability, secure payment processing, and an intuitive booking experience inspired by modern hospitality platforms.",
      techs: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveUrl: "https://zennest.vercel.app/",
      githubUrl: "https://github.com/ainthens/zennest-new",
      snapshot: zennestSnapshot,
      year: 2025
    },
    {
      title: "Shattered Realm",
      description: "An immersive single-page website showcasing a fantasy game universe. Features engaging storytelling of distinctive characters, intricate gameplay mechanics, and captivating world-building with stunning visual design that brings the game's rich mythology to life.",
      techs: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://shattered-realm.vercel.app/",
      githubUrl: "https://github.com/ainthens/shattered-realm",
      snapshot: shatteredSnapshot,
      year: 2026
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-300 mx-auto min-h-[80vh] relative z-10 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-72 w-[min(52rem,88vw)] rounded-full bg-linear-to-r from-accent-1/8 via-accent-2/10 to-accent-3/8 blur-3xl"></div>
      <div ref={headerRef} className="mb-16 text-center reveal">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 bg-linear-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent inline-block">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-accent-1 to-accent-2 mx-auto rounded-full"></div>
        <p className="mt-6 text-text-secondary max-w-3xl mx-auto text-base sm:text-lg">
          A showcase of production-ready work focused on real user needs, polished interfaces, and responsive performance.
        </p>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
        {allProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
