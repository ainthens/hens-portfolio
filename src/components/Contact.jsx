import { Mail, Globe, Send } from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const headerRef = useReveal(0.15);
  const formRef = useReveal(0.1);
  const linksRef = useReveal(0.1);

  return (
    <section id="contact" className="py-24 px-6 max-w-300 mx-auto min-h-[80vh] flex flex-col justify-center relative z-10 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-72 w-[min(52rem,88vw)] rounded-full bg-linear-to-r from-accent-1/8 via-accent-2/10 to-accent-3/8 blur-3xl"></div>

      <div ref={headerRef} className="mb-16 text-center reveal">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-4 bg-linear-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent inline-block">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-accent-1 to-accent-2 mx-auto rounded-full"></div>
        <p className="mt-6 text-text-secondary max-w-3xl mx-auto text-base sm:text-lg">
          I’m open to frontend work, collaborations, and interesting ideas. Send a message or reach me through any of the links below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div ref={formRef} className="glass-card p-8 sm:p-10 rounded-3xl! reveal transform-none! hover:translate-y-0!">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-text-primary">Send a message</h3>
              <p className="mt-2 text-text-secondary">
                I usually reply fastest to email, but any channel below works.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-text-secondary">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-bg-primary/70 text-text-primary px-4 py-3 rounded-xl border border-glass-border outline-none focus:border-accent-1 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] transition-all duration-300 backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-text-secondary">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-bg-primary/70 text-text-primary px-4 py-3 rounded-xl border border-glass-border outline-none focus:border-accent-1 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] transition-all duration-300 backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-text-secondary">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full bg-bg-primary/70 text-text-primary px-4 py-3 rounded-xl border border-glass-border outline-none focus:border-accent-1 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project, timeline, or idea..."
                ></textarea>
              </div>

              <button
                type="button"
                className="group mt-2 py-4 px-8 text-lg font-semibold text-white bg-linear-to-r from-accent-1 via-accent-2 to-accent-3 border-none rounded-xl cursor-pointer transition-all duration-400 shadow-[0_10px_30px_-10px_var(--color-accent-1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_var(--color-accent-1)] flex justify-center items-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <Send size={18} className="relative z-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-accent-2 to-accent-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </button>
            </form>
          </div>
        </div>

        <div ref={linksRef} className="reveal flex flex-col gap-6">
          <div className="glass-card p-8 rounded-3xl! h-full">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-text-primary">Connect with me</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Prefer a direct link? Reach me here.
                </p>
              </div>

              <ul className="grid gap-4">
                <li>
                  <a href="mailto:hensley.santos9@gmail.com" className="group flex items-center gap-4 rounded-2xl border border-glass-border bg-bg-primary/40 px-4 py-4 text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-1/30 hover:text-accent-1 hover:shadow-[0_18px_40px_-26px_rgba(59,130,246,0.5)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-1/10 text-accent-1 ring-1 ring-accent-1/15 transition-all duration-300 group-hover:bg-accent-1/15 group-hover:scale-105">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-secondary">Email</p>
                      <p className="truncate text-base font-medium text-text-primary group-hover:text-accent-1">hensley.santos9@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ainthens/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-glass-border bg-bg-primary/40 px-4 py-4 text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-2/30 hover:text-accent-2 hover:shadow-[0_18px_40px_-26px_rgba(129,140,248,0.5)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-2/10 text-accent-2 ring-1 ring-accent-2/15 transition-all duration-300 group-hover:bg-accent-2/15 group-hover:scale-105">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.3 1.08 2.86.82.09-.64.35-1.08.63-1.33-2.22-.26-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.28.1-2.67 0 0 .83-.27 2.72 1.02a9.42 9.42 0 0 1 4.96 0c1.88-1.29 2.71-1.02 2.71-1.02.54 1.39.2 2.42.1 2.67.64.7 1.02 1.59 1.02 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-secondary">GitHub</p>
                      <p className="truncate text-base font-medium text-text-primary group-hover:text-accent-2">github.com/ainthens</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/hensley.santos9" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-glass-border bg-bg-primary/40 px-4 py-4 text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-3/30 hover:text-accent-3 hover:shadow-[0_18px_40px_-26px_rgba(6,182,212,0.5)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-3/10 text-accent-3 ring-1 ring-accent-3/15 transition-all duration-300 group-hover:bg-accent-3/15 group-hover:scale-105">
                      <Globe size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-secondary">Facebook</p>
                      <p className="truncate text-base font-medium text-text-primary group-hover:text-accent-3">facebook.com/hensley.santos9</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/hensleysantos" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-glass-border bg-bg-primary/40 px-4 py-4 text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f472b6]/30 hover:text-[#f472b6] hover:shadow-[0_18px_40px_-26px_rgba(244,114,182,0.45)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f472b6]/10 text-[#f472b6] ring-1 ring-[#f472b6]/15 transition-all duration-300 group-hover:bg-[#f472b6]/15 group-hover:scale-105">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-secondary">Instagram</p>
                      <p className="truncate text-base font-medium text-text-primary group-hover:text-[#f472b6]">instagram.com/hensleysantos</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
