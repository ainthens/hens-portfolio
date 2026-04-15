import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center items-center text-center min-h-screen relative z-1 pt-24 pb-12 px-6 overflow-hidden">
      <h2 className="text-xl md:text-2xl text-accent-1 font-semibold mb-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Hello, I am
      </h2>
      <h1 className="text-[clamp(3.5rem,5vw,6.5rem)] font-extrabold leading-tight mb-4 opacity-0 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.3s' }}>
        John Hensley Santos  <br />
        <span className="text-[clamp(2.5rem,6vw,4.5rem)] bg-linear-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent opacity-90 block mt-2 bg-size-[200%_auto] animate-shimmer">
          (hens)
        </span>
      </h1>
      <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-text-secondary max-w-175 mt-6 mb-12 opacity-0 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.5s' }}>
        Frontend Developer focused on responsive interfaces, accessible UI, and polished web experiences.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <a
          href="#projects"
          className="group py-4 px-10 text-lg font-semibold text-white bg-linear-to-r from-accent-1 to-accent-2 border-none rounded-full transition-all duration-400 shadow-[0_10px_30px_-10px_var(--color-accent-1)] hover:-translate-y-1.5 hover:scale-105 hover:shadow-[0_20px_40px_-10px_var(--color-accent-1)] relative overflow-hidden"
        >
          <span className="relative z-10">View My Work</span>
          <div className="absolute inset-0 bg-linear-to-r from-accent-2 to-accent-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
        </a>
        <a
          href="#contact"
          className="py-4 px-10 text-lg font-semibold text-text-primary bg-bg-secondary border border-glass-border rounded-full transition-all duration-400 hover:border-accent-1/30 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(59,130,246,0.1)]"
        >
          Contact Me
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-accent-1/40 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
