import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] flex justify-between items-center py-4 px-6 md:px-8 backdrop-blur-xl rounded-full border z-50 animate-slide-down transition-all duration-500 ${scrolled ? 'bg-bg-secondary/90 border-accent-1/20 shadow-[0_8px_32px_rgba(59,130,246,0.12)]' : 'bg-bg-secondary/60 border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.06)]'}`}>
      <div className="font-extrabold text-2xl bg-gradient-to-br from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent tracking-tighter">
        hens.
      </div>
      
      {/* Desktop Menu & Controls */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8 list-none m-0 p-0">
          {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-text-secondary font-semibold no-underline transition-all duration-300 hover:text-accent-1 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-1 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-[1px] h-6 bg-glass-border"></div>
        <button 
          onClick={toggleTheme} 
          className="text-text-secondary hover:text-accent-1 transition-all duration-300 focus:outline-none hover:rotate-180 cursor-pointer"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="flex items-center gap-4 md:hidden">
        <button 
          onClick={toggleTheme} 
          className="text-text-secondary hover:text-accent-1 transition-all duration-300 focus:outline-none hover:rotate-180 cursor-pointer"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button 
          className="text-text-primary focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[120%] left-0 w-full bg-bg-primary/95 backdrop-blur-xl border border-glass-border rounded-2xl p-6 flex flex-col gap-6 shadow-[0_12px_40px_rgba(59,130,246,0.12)] md:hidden animate-fade-in-up origin-top">
          {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-text-secondary font-semibold text-lg no-underline transition-all duration-300 hover:text-accent-1 hover:translate-x-2"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
