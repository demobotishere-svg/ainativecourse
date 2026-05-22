'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const revealsRef = useRef<HTMLDivElement>(null);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Spotlight Effect for Cards
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll('.card');
      for (const card of Array.from(cards)) {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    });

    const reveals = document.querySelectorAll('.reveal, .underline-orange');
    reveals.forEach(el => observer.observe(el));

    // Initial load animation for hero
    setTimeout(() => {
      const heroReveals = document.querySelectorAll('.hero-reveal');
      heroReveals.forEach(el => el.classList.add('active'));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const faqs = [
    {q: "I'm non-technical. Will I keep up?", a: "Yes. The course is built around thinking, not coding. If you can write a clear email, you can do this."},
    {q: "Won't this be outdated in six months?", a: "The tools will. The way of thinking won't. We deliberately spend most of the time on judgement, decomposition, and evaluation."},
    {q: "How is this different from a YouTube playlist?", a: "It probably isn't, in raw information. The difference is: a small live cohort, your real work as the material, and someone who answers your specific Monday-morning question."},
    {q: "Is there a job/certificate at the end?", a: "No. There is a working chatbot, two agent designs, a clearer head, and a method you can keep using. If you need a certificate, this isn't it."},
    {q: "What if I miss a weekend?", a: "Recordings are yours for life, but the cohort matters. If you'll miss more than one weekend, take the next batch."},
    {q: "Will you try to upsell me later?", a: "No. This is a single ₹5,000 purchase. There is no ₹30,000 \"mastery\" tier. There never will be."}
  ];

  const testimonials = [
    { quote: "I stopped collecting AI tools. I now actually use three of them, deeply. That alone was worth it.", author: "Aanya R.", title: "Brand marketer, FMCG" },
    { quote: "I'm a lawyer. I assumed this wasn't for me. It was the most for me. We rebuilt my contract review process in a weekend.", author: "S. Mehta", title: "Corporate lawyer" },
    { quote: "The 10-task audit broke my brain in the best way. Four of my ten weren't even worth doing — AI or not.", author: "Karthik V.", title: "Operations lead" },
    { quote: "First course in years where I didn't feel sold to at the end. Just… taught.", author: "Priya N.", title: "Product manager" },
    { quote: "Built a small chatbot for my clinic intake. Saves my receptionist an hour every morning.", author: "Dr. Anand", title: "Dentist, solo practice" },
    { quote: "I launched a paid newsletter the month after. Not life-changing money — but it pays for itself, and it kept going.", author: "Riya S.", title: "HR consultant" },
    { quote: "I was terrified of the word 'agent'. Now I've designed two for my sales workflow and one is actually live.", author: "Vikram T.", title: "B2B sales" },
    { quote: "Came in expecting prompts. Left with a way of thinking. Different thing entirely.", author: "Meera", title: "School principal" }
  ];

  return (
    <main className={styles.main} ref={revealsRef}>
      {/* Navigation */}
      <nav className={`${styles.navbar} reveal active`}>
        <div className={styles.navContainer}>
          <a href="#hero" style={{fontWeight: 900, fontSize: '1.75rem', letterSpacing: '-0.05em', color: 'var(--text-primary)', textDecoration: 'none', cursor: 'pointer'}}>
            Clarity.
          </a>
          <div className={styles.navLinks}>
            <a href="#outcomes" className="btn-text">Outcomes</a>
            <a href="#curriculum" className="btn-text">Curriculum</a>
            <a href="#instructor" className="btn-text">Instructor</a>
            <a href="#faq" className="btn-text">FAQ</a>
            <a href="#enroll" className="btn btn-teal" style={{marginLeft: '1rem'}}>Enrol</a>
          </div>
          <div className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={styles.hamburgerLine} style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
            <div className={styles.hamburgerLine} style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
            <div className={styles.hamburgerLine} style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
          </div>
        </div>
        {isMenuOpen && (
          <div className={styles.mobileNav}>
             <a href="#outcomes" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Outcomes</a>
             <a href="#curriculum" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Curriculum</a>
             <a href="#instructor" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Instructor</a>
             <a href="#faq" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>FAQ</a>
             <a href="#enroll" className="btn btn-teal" style={{marginTop: '1rem'}} onClick={() => setIsMenuOpen(false)}>Enrol — ₹5,000</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className="container">
          <div className={styles.twoColumnHero}>
            <div className={styles.heroLeft}>
              <h1 className={`${styles.heroTitle} reveal hero-reveal`}>
                From <span className="underline-orange">clutter</span> to <span className="highlight-orange">clarity</span> with AI.
              </h1>
              <p className={`${styles.heroDescription} reveal hero-reveal delay-100`}>
                A 20-hour weekend course, over one month, on how to actually think with AI at work — not which tool to download next. For working professionals who feel quietly behind, and aren't fooled by the hype.
              </p>
              
              <div className={`${styles.heroActions} reveal hero-reveal delay-200`}>
                <a href="#enroll" className="btn btn-teal" style={{fontSize: '1.25rem', padding: '1.2rem 2.5rem', width: '100%'}}>
                  Reserve a seat — ₹5,000
                </a>
                <a href="#audit" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1.2rem 2.5rem', width: '100%', display: 'block', textAlign: 'center'}}>
                  Try the free 10-task audit
                </a>
              </div>
              <div className={`${styles.guaranteeChecks} reveal hero-reveal delay-300`} style={{marginTop: '1.5rem'}}>
                <span>Live cohort</span>
                <span>•</span>
                <span>No ₹30k upsell</span>
                <span>•</span>
                <span>Refund after week 1</span>
              </div>
            </div>
            <div className={`${styles.heroRight} reveal hero-reveal delay-200`}>
              <div className={styles.heroImageWrapper}>
                <img src="/images/hero_workspace.png" alt="Calm workspace for learning AI" className={styles.heroImage} />
                <div className={`${styles.floatingBadge} ${styles.floatingBadge1}`}>
                  <span className="text-teal" style={{fontSize: '1.5rem'}}>✓</span> 12,000+ Enrolled
                </div>
                <div className={`${styles.floatingBadge} ${styles.floatingBadge2}`}>
                  <span className="text-orange" style={{fontSize: '1.5rem'}}>✦</span> Top 5% Tools
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={`${styles.statsGrid} reveal`}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>20</div>
              <div className={styles.statLabel}>hours, live</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>weekends</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>₹5,000</div>
              <div className={styles.statLabel}>one-time purchase</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>0</div>
              <div className={styles.statLabel}>upsells</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="outcomes" className="section section-white">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={`reveal delay-100 ${styles.imageCol}`}>
              <img src="/images/clutter_resolved.png" alt="AI Clutter resolving to structured lines" className={styles.contentImage} />
            </div>
            <div className={`reveal delay-200`}>
              <div className="badge-outline" style={{marginBottom: '1.5rem', marginLeft: 0}}>Industry insight</div>
              <h2 className="sectionTitle" style={{fontSize: '2.5rem', textAlign: 'left'}}>The problem is not access to AI. <br/><span className="text-orange">It is knowing what work belongs to it.</span></h2>
              <div className={styles.statHighlight}>
                <span className={styles.bigStat}>71%</span>
                <p>of knowledge workers say AI tools made their week more chaotic, not less.</p>
                <small>Microsoft Work Trend Index, 2024 (paraphrased)</small>
              </div>
              <div className={styles.statHighlight}>
                <span className={styles.bigStat}>4–7</span>
                <p>out of 10 real weekly tasks are usually AI-leverageable after you separate task from decision.</p>
                <small>From the course audit framework</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Changes */}
      <section className="section" ref={cardsRef}>
        <div className="container">
          <div className={styles.twoColumn}>
            <div>
              <div className="reveal" style={{marginBottom: '3rem'}}>
                <div className="badge-outline" style={{marginBottom: '1rem', marginLeft: 0}}>What changes</div>
                <h2 className="sectionTitle" style={{textAlign: 'left', marginBottom: '1.5rem'}}>Stop collecting tools. <span className="underline-orange">Start operating with clarity.</span></h2>
                <p className="paragraph" style={{textAlign: 'left'}}>You are not behind on AI. You are behind on noise filtering. This course gives you a repeatable way to decide what AI should do, what you should keep, and what is not worth doing at all.</p>
              </div>
              
              <div className={styles.stackedCards}>
                <div className="card reveal delay-100">
                  <div className="card-number">01</div>
                  <p className={styles.cardDesc} style={{marginTop: '1.5rem'}}>You've bookmarked 40 AI tools. You've tried three of them. You used ChatGPT to write an email last Tuesday and felt vaguely guilty about it.</p>
                </div>
                <div className="card reveal delay-200">
                  <div className="card-number">02</div>
                  <p className={styles.cardDesc} style={{marginTop: '1.5rem'}}>Your LinkedIn feed says everyone is shipping AI agents. Your manager keeps saying "leverage AI." Nobody can tell you, concretely, what that means for your job.</p>
                </div>
                <div className="card reveal delay-300">
                  <div className="card-number">03</div>
                  <p className={styles.cardDesc} style={{marginTop: '1.5rem'}}>And every workshop you find is either a ₹9 funnel into a ₹30,000 upsell, or a generic "ChatGPT prompts you must know" listicle.</p>
                </div>
              </div>
            </div>
            <div className={`reveal delay-300 ${styles.imageCol}`}>
              <img src="/images/what_changes.png" alt="Glowing compass representing clarity" className={styles.contentImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="section section-white">
        <div className="container">
          <div className={`${styles.centerHeader} reveal`}>
            <div className="badge-outline" style={{marginBottom: '1rem'}}>Who it is for</div>
            <h2 className="sectionTitle">Any domain. <span className="highlight-orange">Zero code required.</span></h2>
            <p className="paragraph">This isn't a developer course in disguise. If you read briefs, write documents, talk to customers, plan things, or make decisions for a living — you qualify.</p>
            <p className="paragraph" style={{fontWeight: 600}}>The only prerequisite: you can write a clear email and you have a real job with real problems.</p>
          </div>
          <div className={`${styles.pillGrid} reveal delay-100`}>
            {[
              "Marketing & brand", "Sales & BD", "HR & recruiting", "Operations",
              "Finance & accounting", "Legal & compliance", "Product & design", "Consulting",
              "Teachers & trainers", "Doctors & clinicians", "Founders & solopreneurs",
              "Students & career-switchers", "Writers & creators", "Real estate & retail"
            ].map((role, i) => (
              <div key={i} className={styles.rolePill}>{role}</div>
            ))}
            <div className={`${styles.rolePill} ${styles.rolePillAccent}`}>Anyone with a laptop job</div>
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section id="audit" className="section" ref={cardsRef}>
        <div className="container">
          <div className={`${styles.centerHeader} reveal`}>
            <div className="badge-outline" style={{marginBottom: '1rem'}}>Free before you decide</div>
            <h2 className="sectionTitle">The <span className="text-orange">10-task audit</span>.</h2>
            <p className="paragraph">A framework from the course. Yours, whether you enrol or not. If this alone changes how you think about your Monday, the rest of the course will too.</p>
          </div>
          
          <div className={styles.listContainer}>
            {[
              { num: '1', title: 'List 10 things you actually did at work last week.', desc: 'Not your job description. The real 10.' },
              { num: '2', title: 'Mark each: judgement, generation, lookup, or coordination.', desc: 'Most knowledge work is one of these four.' },
              { num: '3', title: 'For each, ask: would I trust a smart intern with this?', desc: 'If yes, an AI agent can probably do a first pass.' },
              { num: '4', title: 'Separate the task from the decision.', desc: 'AI does the task. You keep the decision. This is the whole game.' },
              { num: '5', title: 'Count how many of the 10 are now AI-leverageable.', desc: 'For most professionals, it\'s 4–7. Not 10. Not 0.' }
            ].map((step, index) => (
              <div key={index} className={`card ${styles.listCard} reveal delay-${Math.min((index + 1) * 100, 500)}`}>
                <div className={styles.listNum}>{step.num}</div>
                <div>
                  <h3 className={styles.cardTitleSmall}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section section-white">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className="reveal">
              <div className="badge-outline" style={{marginBottom: '1rem', marginLeft: 0}}>Curriculum</div>
              <h2 className="sectionTitle" style={{textAlign: 'left'}}>No tool lists. No prompt hacks. <span className="underline-orange">A way of thinking.</span></h2>
              <p className="paragraph" style={{textAlign: 'left'}}>What we actually do, weekend by weekend. You leave with one chatbot live, two agents designed.</p>
              
              <div className={styles.curriculumTimeline}>
                 <div className={styles.timelineItem}>
                   <h4>Weekend 01: AI-native thinking</h4>
                   <p>What changes when generation is free. The four kinds of knowledge work and which ones move. The 10-task audit, done on your real job.</p>
                 </div>
                 <div className={styles.timelineItem}>
                   <h4>Weekend 02: Designing your own agents</h4>
                   <p>The logic behind agents — not the framework du jour. Inputs, tools, memory, guardrails. You'll design two agents for your own role on paper, then build one.</p>
                 </div>
                 <div className={styles.timelineItem}>
                   <h4>Weekend 03: Chatbots that ship</h4>
                   <p>A deployable chatbot end-to-end. Knowledge base, retrieval, handoff to a human, basic evals. You'll leave with one running on a URL you own.</p>
                 </div>
                 <div className={styles.timelineItem}>
                   <h4>Weekend 04: Judgement & what stays human</h4>
                   <p>Where AI is wrong confidently. Building a personal review loop. What to never automate. How to keep getting better as the tools change under you.</p>
                 </div>
              </div>
            </div>
            <div className={`reveal delay-200 ${styles.imageCol}`}>
              <img src="/images/chatbot_laptop.png" alt="Laptop with chatbot and sticky notes" className={styles.contentImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Day Job */}
      <section className="section" ref={cardsRef}>
        <div className="container">
           <div className={styles.twoColumn} style={{alignItems: 'center'}}>
             <div className="reveal">
                <div className="badge-outline" style={{marginBottom: '1rem', marginLeft: 0}}>Side Income</div>
                <h2 className="sectionTitle" style={{textAlign: 'left'}}>Beyond your <span className="highlight-orange" style={{padding: '0 10px', marginTop: '10px'}}>day job</span></h2>
                <p className="paragraph" style={{textAlign: 'left'}}>
                  The same thinking builds you a second income. Once you can see what AI can absorb, the obvious next question is: what could it earn for you on the side?
                </p>
             </div>
             <div className={styles.imageCol}>
               <img src="/images/beyond_job.png" alt="Passive income desk setup" className={styles.contentImage} />
             </div>
           </div>
           
           <div className={styles.emotionalGrid} style={{marginTop: '4rem'}}>
             <div className="card">
               <h3 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-teal)'}}>Passive-ish income, honestly framed</h3>
               <p className={styles.cardDesc}>Productised micro-services, AI-assisted freelancing, small SaaS, niche newsletters, paid notion templates, lead-gen sites.</p>
             </div>
             <div className="card">
               <h3 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-teal)'}}>Content, without becoming an influencer</h3>
               <p className={styles.cardDesc}>AI-assisted writing, repurposing one idea into ten formats, a weekly publishing rhythm you can actually keep.</p>
             </div>
             <div className="card">
               <h3 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-teal)'}}>Automations that pay you back</h3>
               <p className={styles.cardDesc}>Replace 3–5 hours of weekly drudgery with agents you wire up once. The time you save is the first dividend.</p>
             </div>
             <div className="card">
               <h3 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-teal)'}}>Distribution that doesn't depend on luck</h3>
               <p className={styles.cardDesc}>Reach without dancing on camera: SEO with AI, cold outreach that's actually personalised, communities, and small-audience economics.</p>
             </div>
           </div>
           
           <p className="paragraph" style={{textAlign: 'center', fontStyle: 'italic', maxWidth: '800px', margin: '4rem auto 0 auto'}}>
             To be clear: nobody quits their job because of a weekend course. The goal is one small thing that actually ships — and a method you can keep using long after the cohort ends.
           </p>
        </div>
      </section>

      {/* The Honest Answer */}
      <section className="section section-white">
        <div className="container">
          <div className={`${styles.centerHeader} reveal`}>
            <div className="badge-outline" style={{marginBottom: '1rem'}}>The honest answer</div>
            <h2 className="sectionTitle">Why people actually buy this.</h2>
            <p className="paragraph">Two kinds of reasons. Both real. One you can put on a spreadsheet, one you feel in your chest at 11pm on a Sunday.</p>
          </div>

          <div className={styles.twoColumn} style={{marginBottom: '4rem'}}>
            <div className={`reveal delay-100 ${styles.imageCol}`}>
               <img src="/images/honest_answer.png" alt="Relieved professional feeling ahead of the curve" className={styles.contentImage} />
            </div>
            <div className={styles.emotionalGrid}>
              <div className={`${styles.emotionalCard} reveal delay-200`}>
                <h4 className="text-orange">Relief</h4>
                <p>From a specific, quiet anxiety. Being passed by juniors. Going blank when leadership asks about AI strategy.</p>
              </div>
              <div className={`${styles.emotionalCard} reveal delay-300`}>
                <h4 className="text-orange">Identity</h4>
                <p>Becoming the person who understands it. The colleague people come to. The manager who can evaluate vendor claims.</p>
              </div>
              <div className={`${styles.emotionalCard} reveal delay-400`}>
                <h4 className="text-orange">Control</h4>
                <p>From passive recipient to active operator. Moving from drowning in AI noise to having a structured, deliberate relationship with it.</p>
              </div>
              <div className={`${styles.emotionalCard} reveal delay-500`}>
                <h4 className="text-orange">Position</h4>
                <p>From feeling behind to feeling ahead. Right now most of your peers feel behind. After this, you don't.</p>
              </div>
            </div>
          </div>
          
          <div className={`${styles.rationalBox} reveal`}>
            <h3 className={styles.cardTitleMedium} style={{color: '#fff', fontSize: '2rem'}}>The rational case</h3>
            <p style={{color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1.15rem'}}>
              90 minutes a day back. Payback in 7 working days. A professional who saves 90 minutes a day from better AI use recovers roughly 390 hours a year. On a ₹15L salary, that's about ₹750 an hour. The course pays for itself in seven working days.
            </p>
            <div className={styles.rationalStats}>
              <div><strong>90 min</strong><br/>a day, recovered</div>
              <div><strong>390 hrs</strong><br/>a year, compounded</div>
              <div><strong>7 days</strong><br/>to break even</div>
            </div>
            <p style={{color: 'rgba(255,255,255,0.6)', marginTop: '2rem', fontStyle: 'italic', fontSize: '1rem'}}>The rational case is airtight. Almost nobody buys on the rational case alone.</p>
          </div>
          
          <div className="reveal" style={{textAlign: 'center', marginTop: '5rem'}}>
            <h3 style={{fontSize: '1.75rem', fontWeight: 600, maxWidth: '800px', margin: '0 auto'}}>"₹5,000 to stop feeling behind and start feeling in control — taught by someone who actually knows."</h3>
            <p className="text-secondary" style={{marginTop: '1rem'}}>Everything else on this page is detail.</p>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="section">
        <div className="container">
          <div className={styles.twoColumn}>
            <div className={`reveal ${styles.imageCol}`}>
              <img src="/images/instructor_portrait.png" alt="Instructor Profile" className={styles.contentImage} style={{borderRadius: '500px 500px 20px 20px'}} />
            </div>
            <div className="reveal delay-100">
              <div className="badge-outline" style={{marginBottom: '1rem', marginLeft: 0}}>About the instructor</div>
              <h2 className="sectionTitle" style={{textAlign: 'left'}}>An engineer who actually ships AI — <span className="underline-orange">not a course-selling influencer.</span></h2>
              <p className="paragraph" style={{textAlign: 'left'}}>I've spent the last few years building agents, retrieval systems, and chatbots that real teams use in production. Before that, years of regular software and product work — so I know what it looks like to sit in a meeting and quietly wonder how much of this could be automated.</p>
              <p className="paragraph" style={{textAlign: 'left'}}>I teach this because every working professional in my life — doctors, lawyers, marketers, founders, friends in HR — kept asking me the same questions, and the honest answers weren't anywhere on the internet.</p>
              
              <div className={styles.statsGrid} style={{marginTop: '3rem', display: 'flex', flexWrap: 'wrap', textAlign: 'left', gap: '3rem'}}>
                <div>
                  <div className={styles.statNumber} style={{fontSize: '2.5rem', color: 'var(--accent-teal)', background: 'none', WebkitTextFillColor: 'initial', whiteSpace: 'nowrap'}}>6+ yrs</div>
                  <div className={styles.statLabel} style={{color: 'var(--text-secondary)'}}>building software</div>
                </div>
                <div>
                  <div className={styles.statNumber} style={{fontSize: '2.5rem', color: 'var(--accent-teal)', background: 'none', WebkitTextFillColor: 'initial', whiteSpace: 'nowrap'}}>Production</div>
                  <div className={styles.statLabel} style={{color: 'var(--text-secondary)'}}>AI agents & RAG</div>
                </div>
                <div>
                  <div className={styles.statNumber} style={{fontSize: '2.5rem', color: 'var(--accent-teal)', background: 'none', WebkitTextFillColor: 'initial', whiteSpace: 'nowrap'}}>No upsell</div>
                  <div className={styles.statLabel} style={{color: 'var(--text-secondary)'}}>one course, one price</div>
                </div>
              </div>
              <p className="text-secondary" style={{fontSize: '0.9rem', marginTop: '2rem', fontStyle: 'italic'}}>Full background, links, and prior work shared on enrolment — verify, don't just trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fit Check */}
      <section className="section section-white">
        <div className="container">
          <div className={`${styles.centerHeader} reveal`}>
            <h2 className="sectionTitle">Fit check. <span className="text-orange">This is for some people. Not everyone.</span></h2>
          </div>
          <div className={styles.fitGrid}>
            <div className={`card reveal delay-100 ${styles.fitCardGreen}`}>
              <h3>It's for you if</h3>
              <ul>
                <li>You have a real job and 4–8 hours a weekend.</li>
                <li>You're suspicious of AI hype but worried about being left out.</li>
                <li>You'd rather understand the logic than memorise prompts.</li>
                <li>You want to ship one real thing in your own workflow.</li>
              </ul>
            </div>
            <div className={`card reveal delay-200 ${styles.fitCardRed}`}>
              <h3>Skip it if</h3>
              <ul>
                <li>You want a list of 100 tools and shortcuts. There are free ones.</li>
                <li>You're an ML engineer. This isn't deep technical training.</li>
                <li>You expect a certificate that gets you hired. It won't.</li>
                <li>You can't commit to four weekends. The cohort needs you present.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className={`${styles.centerHeader} reveal`}>
            <div className="badge-outline" style={{marginBottom: '1rem'}}>Testimonials</div>
            <h2 className="sectionTitle">What people say afterwards.</h2>
            <p className="paragraph">From earlier cohorts & 1:1 sessions. Lightly edited for length.</p>
          </div>
          
          <div className={`${styles.masonryGrid} reveal delay-100`}>
            {testimonials.map((test, i) => (
              <div key={i} className={styles.testimonialCard}>
                <p className={styles.quote}>"{test.quote}"</p>
                <div className={styles.authorBox}>
                  <div className={styles.authorAvatar}>{test.author.charAt(0)}</div>
                  <div>
                    <div className={styles.authorName}>{test.author}</div>
                    <div className={styles.authorTitle}>{test.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section section-white">
        <div className="container">
          <div className={`${styles.centerHeader} reveal`}>
            <h2 className="sectionTitle">FAQ</h2>
            <p className="paragraph">Questions worth asking before you spend ₹5,000.</p>
          </div>
          
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={`reveal delay-${(index % 3 + 1) * 100}`}>
                <div 
                  className={`${styles.faqItem} ${activeFaq === index ? styles.faqActive : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className={styles.faqHeader}>
                    <h4>{faq.q}</h4>
                    <span className={styles.faqIcon}>{activeFaq === index ? '−' : '+'}</span>
                  </div>
                  <div className={styles.faqBodyWrapper}>
                    <div className={styles.faqBodyInner}>
                      <p style={{padding: '0 2rem 2rem 2rem', margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6}}>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="reveal" style={{textAlign: 'center', marginTop: '4rem', padding: '3rem', background: '#fffcf5', border: '1px solid rgba(196,95,14,0.2)', borderRadius: '16px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>What this course won't do. <span className="text-orange">Transparent by design.</span></h3>
            <p className="text-secondary" style={{maxWidth: '700px', margin: '0 auto', marginBottom: '1rem'}}>It won't make you an ML engineer. It won't teach you to fine-tune models or read papers. It won't hand you a magic prompt. Anyone selling one is selling you a feeling, not a skill. It won't replace the part where you sit with a real problem at your real job and think.</p>
            <p style={{fontWeight: 600}}>If that's a dealbreaker, I'd rather you know now than on day one.</p>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="enroll" className="section" style={{backgroundColor: '#fffcf5'}}>
        <div className="container">
          <div className={`${styles.ctaBox} reveal`}>
            <div className={styles.ctaGlow}></div>
            <h2 className="sectionTitle" style={{fontSize: '3.5rem', marginBottom: '1rem', position: 'relative', zIndex: 2}}>One price. One time. <br/><span className="text-orange">No upsell at the end.</span></h2>
            <div className={styles.priceTag} style={{position: 'relative', zIndex: 2}}>₹5,000</div>
            
            <div className={styles.includesList} style={{position: 'relative', zIndex: 2}}>
              <h4>What's included</h4>
              <ul>
                <li>20 hours of live teaching, across 4 weekends</li>
                <li>The 10-task audit, applied to your real job</li>
                <li>One deployed chatbot you own</li>
                <li>Two agent designs for your role</li>
                <li>Lifetime access to recordings & materials</li>
                <li>A small cohort — questions actually get answered</li>
              </ul>
            </div>

            <div className={styles.heroActions} style={{justifyContent: 'center', marginTop: '3rem', position: 'relative', zIndex: 2}}>
              <a href="#" className="btn btn-teal" style={{fontSize: '1.4rem', padding: '1.2rem 4rem', boxShadow: '0 10px 30px rgba(2, 122, 136, 0.3)'}}>Reserve my seat</a>
              <span className="text-secondary" style={{fontSize: '0.9rem', marginTop: '1rem', display: 'block'}}>No card charged until the cohort is confirmed.</span>
            </div>
            
            <div className={styles.guaranteeBox} style={{position: 'relative', zIndex: 2}}>
              <h4>The promise</h4>
              <p>
                Attend the first weekend. If you don't feel meaningfully clearer about how AI fits into your work, email me before weekend two — I refund the full ₹5,000. No form, no "exit survey", no friction. You keep the recordings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <h2 style={{color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem'}}>A year from now, will you wish you'd started?</h2>
          <p style={{color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.1rem'}}>Not because of urgency. Because considered things tend to compound. Four weekends now; a different relationship with your work for the rest of it.</p>
          <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '4rem', flexWrap: 'wrap'}}>
            <a href="#enroll" className="btn" style={{backgroundColor: 'white', color: 'var(--accent-teal)', fontSize: '1.2rem'}}>Reserve my seat — ₹5,000</a>
            <a href="#audit" className="btn btn-outline-white" style={{fontSize: '1.2rem'}}>Try the free audit again</a>
          </div>
          <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem'}}>
            Clarity. One course. One price. One promise. Email anytime.<br/>
            © 2026 AI-Native Thinking.
          </p>
        </div>
      </footer>
    </main>
  );
}
