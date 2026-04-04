"use client";

import { useState, useEffect } from "react";

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.477 0-.945.04-1.4.112zm13.432 6.093c-.215-.07-2.755-.826-5.454-.386 1.297 3.552 1.826 6.57 1.947 7.18.73-.67 1.376-1.438 1.915-2.286.54-.847.96-1.773 1.183-2.753.018-.077.03-.154.044-.23-.17-.055-.338-.113-.507-.173l-.128-.332z"/>
    </svg>
  );
}

function SocialButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-[#f5f5f5] border border-black/6 flex items-center justify-center text-[#252525] hover:bg-[#e8e8e8] transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "backdrop-blur-[24px] bg-white/60" : "bg-transparent"}`} aria-label="Main navigation">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-4 md:px-12 xl:px-16 py-6">
          <div className="w-12 h-12 rounded-[8px] bg-[rgba(49,141,217,0.2)] shrink-0" aria-label="Logo" />

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#0072d0] text-[16px] font-medium tracking-[-0.48px] bg-[rgba(49,141,217,0.2)] px-[16px] py-[8px] rounded-[32px] transition-colors">Home</a>
            <a href="#" className="text-[#252525] text-[16px] font-medium tracking-[-0.48px] px-[16px] py-[8px] rounded-[32px] hover:text-[#0072d0] hover:bg-[rgba(49,141,217,0.1)] transition-colors">Resume</a>
          </div>

          <a href="#contact" className="hidden md:flex items-center gap-2 bg-[#0072d0] text-white text-[16px] font-medium tracking-[-0.48px] px-4 py-3 rounded-[32px] hover:bg-[#0064b6] transition-colors">
            Contact
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <button
            className="md:hidden w-12 h-12 flex items-center justify-center text-[#252525] shrink-0"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="menu-slide-in fixed inset-0 z-[100] bg-white flex flex-col md:hidden">
          <div className="px-4 py-6 flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-[8px] bg-[rgba(49,141,217,0.2)] shrink-0" />
              <button
                className="w-12 h-12 flex items-center justify-center text-[#252525]"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <a href="#" className="text-[#0072d0] text-[16px] font-medium tracking-[-0.48px] leading-[0.95] bg-[rgba(49,141,217,0.2)] px-[16px] py-[8px] rounded-[32px] w-fit" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#" className="text-[#252525] text-[16px] font-medium tracking-[-0.48px] leading-[0.95]" onClick={() => setMenuOpen(false)}>Resume</a>
            </div>

            <a href="#contact" className="flex items-center gap-2 bg-[#0072d0] text-white text-[16px] font-medium tracking-[-0.48px] px-4 py-3 rounded-[32px] w-fit hover:bg-[#0064b6] transition-colors" onClick={() => setMenuOpen(false)}>
              Contact
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <div className="flex gap-6 items-center">
              <SocialButton href="#"><LinkedInIcon /></SocialButton>
              <SocialButton href="#"><XIcon /></SocialButton>
              <SocialButton href="#"><DribbbleIcon /></SocialButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
