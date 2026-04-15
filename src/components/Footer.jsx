import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-12 bg-bg-primary border-t border-glass-border relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 text-center text-text-secondary text-sm">
        <p>&copy; {new Date().getFullYear()} <span className="bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent font-semibold">hens</span>. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-60">Designed and built by John Hensley Santos.</p>
      </div>
    </footer>
  );
}
