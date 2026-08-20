import React, { useState, useEffect } from 'react';
import { Terminal, ArrowLeft, ExternalLink, Zap, Shield, Cpu, Flame, Layers, Award, HelpCircle, CheckCircle2, ChevronDown, ChevronUp, Clock, Menu, X } from 'lucide-react';

export default function NoLimitHackathonPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeNavSection, setActiveNavSection] = useState('');
  const [isScrolledToAbout, setIsScrolledToAbout] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'about', label: '_ABOUT' },
    { id: 'stages', label: '_STAGES' },
    { id: 'rules', label: '_RULES' },
    { id: 'criteria', label: '_CRITERIA' },
    { id: 'faq', label: '_FAQ' }
  ];

  useEffect(() => {
    const sectionIds = ['about', 'stages', 'rules', 'criteria', 'faq'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNavSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsScrolledToAbout(true);
        } else {
          setIsScrolledToAbout(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveNavSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Header height clearance
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleRegisterClick = () => {
    window.open('https://unstop.com', '_blank', 'noopener,noreferrer');
  };

  const handleBackToMain = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Who is eligible to participate?",
      a: "Open to all students (undergraduate & postgraduate) and early-career developers. Participants must form teams of 2 to 4 members before Round 1."
    },
    {
      q: "Can I use AI coding tools or agents?",
      a: "YES! AI & agent usage is fully allowed and encouraged. Use LLMs, coding agents (Cursor, Antigravity, Claude, ChatGPT), no-code tools, or any automation you want — how you leverage your resources is part of what's being judged."
    },
    {
      q: "Is live deployment mandatory?",
      a: "No. Deployment is not mandatory. But you will get bonus points if your solution is live on a public domain and does it function reliably without crashing under real-world testing."
    },
    {
      q: "Is solo participation allowed?",
      a: "Yes. Solo participation is permitted for this mission. A team can consist of min 1 member and max 4 members."
    }
  ];

  return (
    <div className="bg-[#000000] text-[#dae6d2] min-h-screen font-mono relative overflow-x-hidden selection:bg-[#00ff41] selection:text-black">
      
      {/* Global Fixed Background Image visible everywhere on scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/images/Hackathonbg.png" 
          alt="Website Background" 
          className="w-full h-full object-cover object-center fixed inset-0"
        />
      </div>

      {/* Cyberpunk Top Navbar */}
      <nav className="fixed top-0 w-full z-40 flex justify-between items-center px-3 sm:px-8 h-16 bg-transparent border-b border-transparent text-xs sm:text-sm uppercase">
        
        {/* Left Brand Title - Clickable on Mobile to Open Sidebar */}
        <div className="flex items-center gap-2 sm:gap-3 max-w-[65%] sm:max-w-none">
          <button
            onClick={handleBackToMain}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#0a0a0a] text-[#00ff41] border border-[#3b4b37] hover:border-[#00ff41] transition-all text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0"
            title="Return to HackWithUs Homepage"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline-block">MAIN_SITE</span>
          </button>
          
          <span className="hidden sm:inline-block text-[#3b4b37]">|</span>

          <div 
            onClick={() => setIsSidebarOpen(true)}
            className="font-extrabold text-[#FFDE00] tracking-wider text-xs sm:text-base flex items-center gap-1.5 truncate cursor-pointer hover:opacity-80 transition-opacity"
            title="Click to open menu"
          >
            <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFDE00] shrink-0" />
            <span className="truncate">HackWithUs</span>
            <Menu className="w-4 h-4 text-[#00ff41] ml-0.5 md:hidden shrink-0" />
          </div>
        </div>

        {/* Center Nav Links: Default Green, Hover/Active Yellow */}
        <div className="hidden md:flex gap-3 items-center text-xs font-medium tracking-wider">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-2.5 py-1 transition-all duration-200 uppercase font-bold border ${
                activeNavSection === item.id
                  ? 'text-[#FFDE00] bg-[#1a1a1a] border-[#FFDE00]/60 shadow-[0_0_8px_rgba(255,222,0,0.4)]'
                  : 'text-[#00ff41] border-transparent hover:text-[#FFDE00] hover:bg-[#1a1a1a] hover:border-[#FFDE00]/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right CTA Button */}
        <button
          onClick={handleRegisterClick}
          className="bg-[#00ff41] text-black px-3 sm:px-6 py-1.5 sm:py-2 font-extrabold text-[11px] sm:text-sm uppercase hover:bg-white hover:text-black border border-transparent hover:border-[#00ff41] transition-all duration-200 shadow-[0_0_12px_rgba(0,255,65,0.4)] shrink-0"
        >
          &gt;_ REGISTER
        </button>
      </nav>

      {/* Mobile Cyberpunk Sidebar Drawer */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:hidden flex justify-end transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div 
            className="w-4/5 max-w-xs bg-[#0a0a0a] border-l border-[#00ff41]/50 h-full p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(0,255,65,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Sidebar Header */}
              <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4 mb-6">
                <div className="font-extrabold text-[#FFDE00] tracking-wider text-sm flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FFDE00]" />
                  <span>HackWithUs</span>
                </div>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-[#b9ccb2] hover:text-[#00ff41] p-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Section Links */}
              <div className="flex flex-col gap-2.5">
                <div className="text-[10px] font-mono text-[#3b4b37] uppercase tracking-widest mb-1">// NAVIGATION</div>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`text-left px-3.5 py-2.5 font-bold uppercase text-xs tracking-wider border transition-all ${
                      activeNavSection === item.id
                        ? 'text-[#FFDE00] bg-[#1a1a1a] border-[#FFDE00]/60 shadow-[0_0_8px_rgba(255,222,0,0.3)]'
                        : 'text-[#00ff41] border-transparent hover:border-[#00ff41]/40 hover:bg-[#1a1a1a]/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar Bottom Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-[#1a1a1a]">
              <button
                onClick={() => {
                  handleBackToMain();
                  setIsSidebarOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-[#1a1a1a] text-[#00ff41] border border-[#00ff41]/40 font-mono text-xs font-bold uppercase hover:bg-[#00ff41] hover:text-black transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                MAIN_SITE
              </button>
              
              <button
                onClick={() => {
                  handleRegisterClick();
                  setIsSidebarOpen(false);
                }}
                className="w-full px-3 py-3 bg-[#00ff41] text-black font-extrabold text-xs uppercase shadow-[0_0_12px_rgba(0,255,65,0.4)] hover:bg-white transition-all"
              >
                &gt;_ REGISTER ON UNSTOP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <main className="pt-14 sm:pt-16 pb-16 px-3 sm:px-8 max-w-[1280px] mx-auto space-y-10 sm:space-y-16 relative z-10">

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-4 bg-transparent relative overflow-hidden py-7 px-5">
          
          <div className="flex-1 space-y-6 z-10">
            <div className="relative flex flex-col items-center justify-center text-center w-full py-1">
              <div className="relative z-10 flex flex-col items-center">
                
                {/* Native Responsive Hero Container */}
                <div className="flex flex-col items-center w-full">
                  <div className="relative z-30 mb-[-1.8rem] xs:mb-[-2.2rem] sm:mb-[-2.5rem] md:mb-[-3.2rem] animate-hero-down delay-100">
                    <span className="text-[#ffb000] text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-[85px] italic font-normal" style={{ fontFamily: "'Brittany Signature', 'Brittany', cursive", WebkitTextStroke: '0.5px rgb(0, 0, 0)' }}>
                      Hackathon
                    </span>
                  </div>
                  <div className="relative z-20 animate-hero-up delay-200">
                    <h1 className="text-6xl xs:text-7xl sm:text-7xl md:text-8xl lg:text-[130px] font-bold tracking-wider text-[#00bf63] leading-none" style={{ fontFamily: "'Impact', 'Charcoal', sans-serif" }}>
                      NO LIMITS.
                    </h1>
                  </div>
                  <div className="-mt-2 sm:-mt-3 md:-mt-3 relative z-20 animate-hero-up delay-350">
                    <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[95px] font-bold tracking-[0.05em] leading-none text-black" style={{ WebkitTextStroke: '0.1px rgb(218, 230, 210)', fontFamily: "'Anton', sans-serif" }}>
                      ZERO//CONSTRAINTS
                    </h2>
                  </div>
                  <div className="-mt-6 xs:-mt-8 sm:-mt-10 md:-mt-12 relative z-15 select-none pointer-events-none animate-hero-up delay-500">
                    <span className="text-7xl xs:text-8xl sm:text-8xl md:text-[130px] lg:text-[150px] font-bold leading-none block" style={{ fontFamily: "'Anton', sans-serif", backgroundImage: 'linear-gradient(180deg, #02bf61 0%, rgba(2, 191, 97, 0.325) 67.5%, rgba(0, 57, 29, 0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
                      1.0
                    </span>
                  </div>

                  {/* Register Button & Scroll Down Indicator */}
                  <div className="-mt-7 xs:-mt-8 sm:-mt-9 md:-mt-10 z-30 relative flex flex-col items-center gap-3 animate-hero-up delay-650">
                    <button 
                      onClick={handleRegisterClick}
                      className="bg-transparent text-[#00ff41] px-6 xs:px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 font-mono text-sm sm:text-base md:text-lg leading-none font-bold uppercase hover:bg-[#00ff41] hover:text-[#000000] border border-[#00ff41] transition-all duration-300 shadow-[0_0_12px_rgba(0,255,65,0.4)]"
                    >
                      &gt;_ REGISTER ON UNSTOP
                    </button>

                    {/* Animated Scroll Down Indicator */}
                    <div 
                      onClick={() => scrollToSection('about')}
                      className="mt-2 flex flex-col items-center justify-center gap-1 cursor-pointer group text-[#00ff41]"
                    >
                      <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce text-[#00ff41] stroke-[2.5]" />
                      <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#b9ccb2] group-hover:text-[#00ff41] transition-colors">
                        Scroll down for more info
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION WITH BIDIRECTIONAL SCROLL TRANSITION */}
        <section 
          id="about" 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-8 sm:py-16 transition-all duration-700 overflow-hidden"
        >
          {/* Left Column: Hero Elements (NO LIMITS, ZERO//CONSTRAINTS, 1.0, Register Button) sliding down & scaled down into Left */}
          <div 
            className={`col-span-1 lg:col-span-5 flex flex-col items-start justify-center transition-all duration-700 transform ${
              isScrolledToAbout 
                ? 'translate-x-0 translate-y-0 opacity-100' 
                : 'opacity-0 translate-y-6 lg:-translate-x-16 lg:-translate-y-12 pointer-events-none'
            }`}
          >
            <div className="flex flex-col items-start text-left w-full space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-[#00bf63] leading-none" style={{ fontFamily: "'Impact', 'Charcoal', sans-serif" }}>
                NO LIMITS.
              </h1>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.05em] leading-none text-black -mt-1" style={{ WebkitTextStroke: '0.5px rgb(218, 230, 210)', fontFamily: "'Anton', sans-serif" }}>
                ZERO//CONSTRAINTS
              </h2>
              <span className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-none block -mt-3" style={{ fontFamily: "'Anton', sans-serif", backgroundImage: 'linear-gradient(180deg, #02bf61 0%, rgba(2, 191, 97, 0.325) 67.5%, rgba(0, 57, 29, 0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
                1.0
              </span>

              <div className="pt-3 sm:pt-4">
                <button 
                  onClick={handleRegisterClick}
                  className="bg-transparent text-[#00ff41] px-4 sm:px-8 py-2 sm:py-3.5 font-mono text-xs sm:text-sm leading-none font-bold uppercase hover:bg-[#00ff41] hover:text-[#000000] border border-[#00ff41] transition-all duration-300 shadow-[0_0_12px_rgba(0,255,65,0.4)]"
                >
                  &gt;_ REGISTER ON UNSTOP
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: "Hackathon" Heading & About Paragraphs sliding down into place */}
          <div className="col-span-1 lg:col-span-7 space-y-4 flex flex-col justify-center">
            {/* "Hackathon" Title sliding down to right heading */}
            <div 
              className={`transition-all duration-700 transform ${
                isScrolledToAbout 
                  ? 'translate-x-0 translate-y-0 opacity-100' 
                  : 'opacity-0 translate-y-6 lg:translate-x-16 lg:-translate-y-12'
              }`}
            >
              <span className="text-[#ffb000] text-3xl sm:text-6xl lg:text-7xl italic font-normal block leading-none" style={{ fontFamily: "'Brittany Signature', 'Brittany', cursive" }}>
                About the Hackathon
              </span>
            </div>

            {/* About Paragraphs sliding down below "Hackathon" */}
            <div 
              className={`text-xs sm:text-base text-[#b9ccb2] space-y-3.5 sm:space-y-4 leading-relaxed transition-all duration-700 delay-150 transform ${
                isScrolledToAbout 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
            >
              <p className="text-white font-bold">&gt; The paradigm has shifted. Tools are no longer the bottleneck; imagination is.</p>
              <p>&gt; This is a build-and-ship event where the only constraint is the deadline. We are stripping away the traditional rules of engagement. You are encouraged to use every asset at your disposal: AI models, coding agents, automated pipelines, and pre-built frameworks.</p>
              <p className="text-[#00ff41] font-semibold">&gt; Stop coding from scratch. Start architecting impact. If you can dream it, prompt it, and deploy it, it belongs here.</p>
            </div>
          </div>
        </section>

        {/* THE ROUNDS SECTION */}
        <section className="space-y-6 sm:space-y-8" id="stages">
          <div className="pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00ff41] uppercase">_THE_ROUNDS</h2>
          </div>

          <div className="relative space-y-8 py-8">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -top-0 font-mono text-[#00ff41] text-xs tracking-widest leading-none" style={{ textShadow: '0 0 8px rgba(0, 255, 65, 0.6)' }}>START</div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -bottom-4 font-mono text-[#00ff41] text-xs tracking-widest leading-none" style={{ textShadow: '0 0 8px rgba(0, 255, 65, 0.6)' }}>END</div>
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#00ff41]/30 shadow-[0_0_8px_rgba(0,255,65,0.2)]"></div>

            {/* Phase 01 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 group">
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00ff41] border border-black shadow-[0_0_12px_rgba(0,255,65,0.4)] z-10"></div>
              <div className="flex-1 md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
                <div className="font-mono text-[#00ff41] opacity-50 mb-1 text-xs">[COORD: 40.7128° N]</div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase">[PHASE_01] QUALIFIER</h3>
                <div className="text-[#00ff41] font-mono text-xs font-bold mt-1">STATUS: COMPLETED // T-MINUS: 00:00</div>
              </div>
              <div className="flex-1 pl-12 md:pl-12 w-full">
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-4 sm:p-5 hover:border-[#00ff41] transition-colors">
                  <div className="font-mono text-[#00ff41] font-bold text-xs sm:text-sm mb-2">DURATION: 02_HOURS</div>
                  <p className="text-xs sm:text-sm text-[#b9ccb2] leading-relaxed">Rapid problem-solving and logic assessment. Prove your baseline capability before accessing the mainframe.</p>
                  <div className="mt-3 font-mono text-[#3b4b37] text-[11px]">0x4A 0x6F 0x69 0x6E 0x5F 0x55 0x73</div>
                </div>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-6 md:gap-8 group">
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00ff41] border border-black shadow-[0_0_12px_rgba(0,255,65,0.4)] z-10"></div>
              <div className="flex-1 md:text-left pl-12 md:pl-12">
                <div className="font-mono text-[#00ff41] opacity-50 mb-1 text-xs">[COORD: 74.0060° W]</div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase">[PHASE_02] CONCEPT</h3>
                <div className="text-[#00ff41] font-mono text-xs font-bold mt-1">STATUS: ACTIVE // T-MINUS: 24:00</div>
              </div>
              <div className="flex-1 pr-0 md:pr-12 pl-12 md:pl-0 w-full">
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-4 sm:p-5 hover:border-[#00ff41] transition-colors">
                  <div className="font-mono text-[#00ff41] font-bold text-xs sm:text-sm mb-2">DURATION: 24_HOURS</div>
                  <p className="text-xs sm:text-sm text-[#b9ccb2] leading-relaxed">Ideation, architecture design, and initial prototyping. Define the scope and assemble the tech stack.</p>
                  <div className="mt-3 font-mono text-[#3b4b37] text-[11px]">0x53 0x79 0x73 0x74 0x65 0x6D 0x5F 0x4F 0x4B</div>
                </div>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 group">
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00ff41] border border-black shadow-[0_0_12px_rgba(0,255,65,0.4)] z-10"></div>
              <div className="flex-1 md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
                <div className="font-mono text-[#00ff41] opacity-50 mb-1 text-xs">[COORD: 51.5074° N]</div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase">[PHASE_03] FINAL DEPLOY</h3>
                <div className="text-[#00ff41] font-mono text-xs font-bold mt-1">STATUS: PENDING // T-MINUS: 15:00</div>
              </div>
              <div className="flex-1 pl-12 md:pl-12 w-full">
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-4 sm:p-5 hover:border-[#00ff41] transition-colors">
                  <div className="font-mono text-[#00ff41] font-bold text-xs sm:text-sm mb-2">DURATION: 12-15_HOURS</div>
                  <p className="text-xs sm:text-sm text-[#b9ccb2] leading-relaxed">Execution and live deployment. The code must run. The product must ship. No excuses.</p>
                  <div className="mt-3 font-mono text-[#3b4b37] text-[11px]">0x44 0x65 0x70 0x6C 0x6F 0x79 0x5F 0x4E 0x6F 0x77</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* VISUAL INTERLUDE BANNER */}
        <section className="my-8 sm:my-12 bg-[#0a0a0a] relative overflow-hidden flex flex-col md:flex-row items-stretch">
          <div className="flex-1 p-5 sm:p-12 flex flex-col justify-center">
            <h2 className="text-lg sm:text-4xl font-extrabold text-white leading-tight uppercase">
              NOT EVERYONE<br />HAS GUTS TO<br />
              <span className="text-[#00ff41] bg-[#1a1a1a] px-2.5 sm:px-3 py-1 inline-block mt-2 sm:mt-3 border border-[#00ff41]/40 text-xs sm:text-2xl">
                REVERSE THE ROLE.
              </span>
            </h2>
            <p className="text-xs text-[#b9ccb2] mt-3 sm:mt-4 max-w-md leading-relaxed">
              Leverage modern AI agents, prompt engineering, and rapid deployment platforms to flip traditional software bottlenecks upside down.
            </p>
          </div>
          <div className="flex-1 relative w-full h-[180px] sm:h-[300px] md:h-auto min-h-[180px] sm:min-h-[300px] bg-[#050505] overflow-hidden">
            <img 
              src="/images/AI_guts.png" 
              alt="Cyberpunk Matrix Grid Visual" 
              className="w-full h-full object-contain md:object-cover grayscale-0 transition-all duration-500"
            />
          </div>
        </section>

        {/* RULES & SPECS SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-10" id="rules">
          <div className="col-span-1 md:col-span-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00ff41] uppercase tracking-tight">
              _RULES_&_SPECS
            </h2>
          </div>
          <div className="col-span-1 md:col-span-8">
            <ul className="space-y-3.5 sm:space-y-5 text-xs sm:text-base text-[#b9ccb2]">
              <li className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 bg-[#0a0a0a] border border-[#1a1a1a]">
                <span className="text-[#00ff41] font-bold text-base sm:text-lg shrink-0">[01]</span>
                <div>
                  <strong className="text-white block uppercase mb-0.5">Team Structure & Size</strong>
                  <span>Teams of 1 to 4 members. Solo participation is permitted. All members must register before Round 1.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 bg-[#0a0a0a] border border-[#1a1a1a]">
                <span className="text-[#00ff41] font-bold text-base sm:text-lg shrink-0">[02]</span>
                <div>
                  <strong className="text-white block uppercase mb-0.5">Registration Fee</strong>
                  <span>Registration fee is ₹200 per Team. If your team has 4 members, then each member has to pay ₹50. Payment will be done by the Team Leader.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 bg-[#0a0a0a] border border-[#1a1a1a]">
                <span className="text-[#00ff41] font-bold text-base sm:text-lg shrink-0">[03]</span>
                <div>
                  <strong className="text-white block uppercase mb-0.5">Zero Tool Restrictions</strong>
                  <span>Use LLMs, AI coding agents (Cursor, ChatGPT, Claude), open-source libraries, or no-code tools — how you use your resources is evaluated.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 bg-[#0a0a0a] border border-[#1a1a1a]">
                <span className="text-[#00ff41] font-bold text-base sm:text-lg shrink-0">[04]</span>
                <div>
                  <strong className="text-white block uppercase mb-0.5">Original Work During Event</strong>
                  <span>Core problem solving must happen live during the sprint window. Pre-built templates/boilerplates are allowed, but the main application logic must be built live.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* JUDGING CRITERIA SECTION */}
        <section className="space-y-6 sm:space-y-8 py-8 sm:py-10" id="criteria">
          <div className="pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00ff41] uppercase">_JUDGING_CRITERIA</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            <div className="border border-[#1a1a1a] p-4 sm:p-6 bg-[#0a0a0a] hover:border-[#00ff41] transition-colors">
              <div className="flex items-center gap-2.5 mb-2.5 text-[#00ff41]">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase">LIVE DEPLOYMENT</h3>
              </div>
              <p className="text-xs text-[#b9ccb2] leading-relaxed">
                Live deployment is not mandatory But you will get bonus points if your solution is live on a public domain and does it function reliably without crashing under real-world testing.
              </p>
            </div>

            <div className="border border-[#1a1a1a] p-4 sm:p-6 bg-[#0a0a0a] hover:border-[#00ff41] transition-colors">
              <div className="flex items-center gap-2.5 mb-2.5 text-[#00ff41]">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase">RESOURCEFULNESS</h3>
              </div>
              <p className="text-xs text-[#b9ccb2] leading-relaxed">
                How effectively were modern tools, APIs, and AI models leveraged to accelerate development and bypass traditional constraints?
              </p>
            </div>

            <div className="border border-[#1a1a1a] p-4 sm:p-6 bg-[#0a0a0a] hover:border-[#00ff41] transition-colors">
              <div className="flex items-center gap-2.5 mb-2.5 text-[#00ff41]">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase">PROBLEM FIT</h3>
              </div>
              <p className="text-xs text-[#b9ccb2] leading-relaxed">
                Does the built solution accurately and elegantly solve the specific problem statement given in the round?
              </p>
            </div>

            <div className="border border-[#1a1a1a] p-4 sm:p-6 bg-[#0a0a0a] hover:border-[#00ff41] transition-colors">
              <div className="flex items-center gap-2.5 mb-2.5 text-[#00ff41]">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase">INNOVATION & SHIFT</h3>
              </div>
              <p className="text-xs text-[#b9ccb2] leading-relaxed">
                Originality of approach. Did the team synthesize existing tools in a novel, paradigm-shifting way?
              </p>
            </div>

          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <section className="space-y-6 sm:space-y-8 py-8 sm:py-10" id="faq">
          <div className="pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00ff41] uppercase">_SYSTEM_FAQ</h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="p-3.5 sm:p-4 flex items-center justify-between font-bold text-xs sm:text-sm text-white hover:text-[#00ff41] transition-colors gap-3">
                  <span className="flex items-center gap-2.5">
                    <span className="text-[#00ff41] font-mono shrink-0">[Q_{idx + 1}]</span>
                    <span className="leading-snug">{faq.q}</span>
                  </span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#00ff41] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#b9ccb2] shrink-0" />}
                </div>

                {openFaq === idx && (
                  <div className="p-3.5 sm:p-4 pt-0 text-xs text-[#b9ccb2] leading-relaxed bg-[#000000]">
                    &gt; {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM REGISTER CTA BANNER */}
        <section className="p-6 sm:p-12 bg-[#0a0a0a] border border-[#00ff41]/50 text-center space-y-5 sm:space-y-6 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-[#00ff41] uppercase leading-tight">
            &gt;_ READY TO BUILD & SHIP?
          </h2>
          <p className="text-xs sm:text-sm text-[#b9ccb2] max-w-xl mx-auto font-semibold leading-relaxed">
            Registration is live on Unstop. Assemble your team of 1-4 hackers and lock in your slot before deadline.
          </p>
          <div className="pt-2">
            <button
              onClick={handleRegisterClick}
              className="bg-[#00ff41] text-black px-6 sm:px-10 py-4 sm:py-5 font-extrabold text-xs sm:text-base uppercase hover:bg-white border border-[#00ff41] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,65,0.6)] inline-flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-center"
            >
              &gt;_ REGISTER ON UNSTOP NOW
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>
        </section>

      </main>

      {/* TERMINAL FOOTER */}
      <footer className="w-full py-6 sm:py-8 px-4 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#000000] border-t border-[#1a1a1a] text-[10px] sm:text-xs uppercase font-mono">
        <div className="text-[#00ff41] font-bold text-center md:text-left">
          [C] 2026 ZERO_CONSTRAINTS // TERMINAL_ACCESS_ONLY
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center text-[#b9ccb2]">
          <button onClick={handleBackToMain} className="hover:text-[#00ff41] underline">HACKWITHUS_HOME</button>
          <span className="text-[#3b4b37]">|</span>
          <a href="https://unstop.com" target="_blank" rel="noreferrer" className="hover:text-[#00ff41] underline">UNSTOP_PORTAL</a>
          <span className="text-[#3b4b37]">|</span>
          <span className="text-[#00ff41]">STATUS: ONLINE</span>
        </div>
      </footer>

    </div>
  );
}
