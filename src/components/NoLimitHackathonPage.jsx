import React, { useState, useEffect } from 'react';
import { Terminal, ArrowLeft, ExternalLink, Zap, Shield, Cpu, Flame, Layers, Award, HelpCircle, CheckCircle2, ChevronDown, ChevronUp, Clock } from 'lucide-react';

export default function NoLimitHackathonPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeNavSection, setActiveNavSection] = useState('');

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
      a: "Yes. Deployment is mandatory. Every final round submission must include a live, publicly accessible URL link (Vercel, Netlify, Cloudflare, Railway, etc.), not just source code."
    },
    {
      q: "Is solo participation allowed?",
      a: "No. Solo participation is not permitted for this mission. Teams must consist of 2 to 4 members before Round 1 starts."
    }
  ];

  return (
    <div className="bg-[#000000] text-[#dae6d2] min-h-screen font-mono relative overflow-x-hidden selection:bg-[#00ff41] selection:text-black">
      
      {/* Terminal Scanline Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-15"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4))',
          backgroundSize: '100% 4px'
        }}
      ></div>

      {/* Cyberpunk Top Navbar */}
      <nav className="fixed top-0 w-full z-40 flex justify-between items-center px-3 sm:px-8 h-16 backdrop-blur-md bg-[#000000]/90 border-b border-[#1a1a1a] shadow-[0_0_12px_rgba(0,255,65,0.2)] text-xs sm:text-sm uppercase">
        
        {/* Left Brand Title */}
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

          <div className="font-extrabold text-[#00ff41] tracking-tighter text-xs sm:text-base flex items-center gap-1.5 truncate">
            <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00ff41] shrink-0" />
            <span className="truncate">NO LIMITS zero//constraints</span>
          </div>
        </div>

        {/* Center Nav Links with Active Green Highlight */}
        <div className="hidden md:flex gap-3 items-center text-xs font-medium tracking-wider">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-2.5 py-1 transition-all duration-200 uppercase font-bold border ${
                activeNavSection === item.id
                  ? 'text-[#00ff41] bg-[#1a1a1a] border-[#00ff41]/60 shadow-[0_0_8px_rgba(0,255,65,0.4)]'
                  : 'text-[#b9ccb2] border-transparent hover:text-[#00ff41] hover:bg-[#1a1a1a]'
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

      {/* Main Content Container */}
      <main className="pt-20 sm:pt-24 pb-16 px-3 sm:px-8 max-w-[1280px] mx-auto space-y-12 sm:space-y-16">

        {/* HERO SECTION */}
        <section className="min-h-[60vh] flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-[#1a1a1a] p-4 sm:p-6 lg:p-8 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#00ff41] opacity-70"></div>
          
          {/* Left Text Block */}
          <div className="flex-1 space-y-4 sm:space-y-5 z-10 w-full">
            
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#1a1a1a] border border-[#00ff41]/50 text-[#00ff41] text-[10px] sm:text-xs font-bold uppercase tracking-widest max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-ping shrink-0"></span>
              <span className="truncate">STATUS: ARENA_ACTIVE // UNSTOP REGISTRATIONS OPEN</span>
            </div>

            <h1 
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#00ff41] tracking-tight uppercase leading-[1.15] break-words"
              style={{ textShadow: '0 0 10px rgba(0, 255, 65, 0.4)' }}
            >
              &gt;_ NO LIMITS<br />
              <span className="text-white">zero//constraints</span>
            </h1>

            <p className="text-sm sm:text-lg text-[#b9ccb2] font-semibold">
              [ A NO-LIMITS BUILD-AND-SHIP HACKATHON ]
            </p>

            <p className="text-xs sm:text-sm text-[#dae6d2]/80 leading-relaxed max-w-xl font-normal">
              Test how far you can push an idea — from a blank repo to a live, deployed product — under real time pressure. No restrictions on tools, frameworks, or AI agents.
            </p>

            {/* Metrics Telemetry Grid - Clean Vertical Dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 pt-2 border-y border-[#3b4b37]/40 sm:border-y-0 py-2.5 sm:py-0">
              <div className="pr-3 sm:pr-4 border-r border-[#3b4b37] pb-2 sm:pb-0">
                <span className="text-[9px] sm:text-[10px] text-[#b9ccb2] uppercase block font-bold tracking-wider">PRIZE_POOL</span>
                <span className="text-sm sm:text-base font-extrabold text-[#00ff41]">₹20,000</span>
              </div>
              <div className="pl-3 sm:pl-4 pr-0 sm:pr-4 sm:border-r border-[#3b4b37] pb-2 sm:pb-0">
                <span className="text-[9px] sm:text-[10px] text-[#b9ccb2] uppercase block font-bold tracking-wider">TEAM_SIZE</span>
                <span className="text-sm sm:text-base font-extrabold text-white">2 - 4 DEVS</span>
              </div>
              <div className="pt-2 sm:pt-0 pr-3 sm:pr-4 sm:pl-4 border-r border-[#3b4b37]">
                <span className="text-[9px] sm:text-[10px] text-[#b9ccb2] uppercase block font-bold tracking-wider">REG. FEE</span>
                <span className="text-sm sm:text-base font-extrabold text-white">₹200 per Team</span>
              </div>
              <div className="pt-2 sm:pt-0 pl-3 sm:pl-4">
                <span className="text-[9px] sm:text-[10px] text-[#b9ccb2] uppercase block font-bold tracking-wider">MODE</span>
                <span className="text-sm sm:text-base font-extrabold text-[#00ff41]">100% ONLINE</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={handleRegisterClick}
                className="bg-[#00ff41] text-black px-5 sm:px-6 py-3 font-extrabold text-xs sm:text-sm uppercase hover:bg-white hover:text-black border border-[#00ff41] transition-all duration-300 shadow-[0_0_12px_rgba(0,255,65,0.3)] flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                &gt;_ REGISTER ON UNSTOP
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>

              <a
                href="#stages"
                className="bg-[#1a1a1a] text-white px-5 sm:px-6 py-3 font-bold text-xs sm:text-sm uppercase hover:border-[#00ff41] hover:text-[#00ff41] border border-[#3b4b37] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-center"
              >
                EXPLORE_ROUNDS
              </a>
            </div>

          </div>

          {/* Right Futuristic Art Visual - Fixed Dimension Responsive Container on Mobile */}
          <div className="w-full max-w-[340px] sm:max-w-md lg:w-auto shrink-0 mx-auto lg:mx-0 relative overflow-hidden p-1">
            <div className="border border-[#3b4b37] bg-[#000000] p-2 sm:p-2.5 relative z-10 shadow-2xl w-full">
              <div className="w-full h-[220px] sm:h-[280px] relative overflow-hidden border border-[#1a1a1a] bg-[#050505]">
                <img 
                  src="/images/Hero_Page.png" 
                  alt="Zero Constraints Hackathon Cyberpunk Illustration" 
                  className="w-full h-full object-contain sm:object-cover transition-all duration-700"
                />
              </div>
              <div className="p-2 bg-[#0a0a0a] border-t border-[#1a1a1a] flex justify-between items-center text-[10px] text-[#b9ccb2]">
                <span className="truncate">CORE_SYSTEM: RESOURCEFUL_INTELLIGENCE</span>
                <span className="text-[#00ff41] font-bold shrink-0 ml-2">[VERIFIED]</span>
              </div>
            </div>
          </div>

        </section>

        {/* ABOUT SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-10 border-t border-[#1a1a1a]" id="about">
          <div className="col-span-1 md:col-span-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00ff41] uppercase tracking-tight">
              _REMOVE<br />ALL_LIMITS
            </h2>
          </div>
          <div className="col-span-1 md:col-span-8 text-xs sm:text-base text-[#b9ccb2] space-y-3 sm:space-y-4 leading-relaxed">
            <p className="text-white font-bold">&gt; The paradigm has shifted. Tools are no longer the bottleneck; imagination is.</p>
            <p>&gt; This is a build-and-ship event where the only constraint is the deadline. We are stripping away the traditional rules of engagement. You are encouraged to use every asset at your disposal: AI models, coding agents, automated pipelines, and pre-built frameworks.</p>
            <p className="text-[#00ff41] font-semibold">&gt; Stop coding from scratch. Start architecting impact. If you can dream it, prompt it, and deploy it, it belongs here.</p>
          </div>
        </section>

        {/* THE ROUNDS SECTION */}
        <section className="space-y-6 sm:space-y-8" id="stages">
          <div className="border-b border-[#1a1a1a] pb-4">
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
        <section className="my-10 sm:my-12 border border-[#1a1a1a] bg-[#0a0a0a] relative overflow-hidden flex flex-col md:flex-row items-stretch">
          <div className="flex-1 p-6 sm:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#1a1a1a]">
            <h2 className="text-xl sm:text-4xl font-extrabold text-white leading-tight uppercase">
              NOT EVERYONE<br />HAS GUTS TO<br />
              <span className="text-[#00ff41] bg-[#1a1a1a] px-2.5 sm:px-3 py-1 inline-block mt-2 sm:mt-3 border border-[#00ff41]/40">
                REVERSE THE ROLE.
              </span>
            </h2>
            <p className="text-xs text-[#b9ccb2] mt-3 sm:mt-4 max-w-md leading-relaxed">
              Leverage modern AI agents, prompt engineering, and rapid deployment platforms to flip traditional software bottlenecks upside down.
            </p>
          </div>
          <div className="flex-1 relative w-full h-[220px] sm:h-[300px] md:h-auto min-h-[220px] sm:min-h-[300px] bg-[#050505] overflow-hidden">
            <img 
              src="/images/AI_guts.png" 
              alt="Cyberpunk Matrix Grid Visual" 
              className="w-full h-full object-contain md:object-cover grayscale-0 transition-all duration-500"
            />
          </div>
        </section>

        {/* RULES & SPECS SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-10 border-t border-[#1a1a1a]" id="rules">
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
                  <span>Teams of 2 to 4 members. Solo participation is not permitted. All members must register before Round 1.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 bg-[#0a0a0a] border border-[#1a1a1a]">
                <span className="text-[#00ff41] font-bold text-base sm:text-lg shrink-0">[02]</span>
                <div>
                  <strong className="text-white block uppercase mb-0.5">Zero Tool Restrictions</strong>
                  <span>Use LLMs, AI coding agents (Cursor, ChatGPT, Claude), open-source libraries, or no-code tools — how you use your resources is evaluated.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 bg-[#0a0a0a] border border-[#1a1a1a]">
                <span className="text-[#00ff41] font-bold text-base sm:text-lg shrink-0">[03]</span>
                <div>
                  <strong className="text-white block uppercase mb-0.5">Mandatory Live Deployment</strong>
                  <span>Every round's final submission must include a live, accessible web URL. Localhost demos or slide decks will be disqualified.</span>
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
        <section className="space-y-6 sm:space-y-8 py-8 sm:py-10 border-t border-[#1a1a1a]" id="criteria">
          <div className="border-b border-[#1a1a1a] pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00ff41] uppercase">_JUDGING_CRITERIA</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            <div className="border border-[#1a1a1a] p-4 sm:p-6 bg-[#0a0a0a] hover:border-[#00ff41] transition-colors">
              <div className="flex items-center gap-2.5 mb-2.5 text-[#00ff41]">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-white uppercase">LIVE DEPLOYMENT</h3>
              </div>
              <p className="text-xs text-[#b9ccb2] leading-relaxed">
                Is the solution live on a public domain? Does it function reliably without crashing under real-world testing?
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
        <section className="space-y-6 sm:space-y-8 py-8 sm:py-10 border-t border-[#1a1a1a]" id="faq">
          <div className="border-b border-[#1a1a1a] pb-4">
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
                  <div className="p-3.5 sm:p-4 pt-0 text-xs text-[#b9ccb2] leading-relaxed border-t border-[#1a1a1a]/50 bg-[#000000]">
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
            Registration is live on Unstop. Assemble your team of 2-4 hackers and lock in your slot before deadline.
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
