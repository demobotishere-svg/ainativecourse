'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import LeadCaptureForm from '../components/LeadCaptureForm';

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
            <a href="#matrix-cta" className="btn btn-teal" style={{marginLeft: '1rem'}}>Enrol</a>
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
             <a href="#matrix-cta" className="btn btn-teal" style={{marginTop: '1rem'}} onClick={() => setIsMenuOpen(false)}>Enrol — ₹5,000</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className="container">
          <div className={styles.twoColumnHero}>
            <div className={styles.heroLeft}>
              <h1 className={`${styles.heroTitle} reveal hero-reveal`}>
                From AI <span className="underline-orange">clutter</span> to AI <span className="highlight-orange">clarity</span>.
              </h1>
              <p className={`${styles.heroDescription} reveal hero-reveal delay-100`}>
                <span style={{
                  display: 'inline-block',
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                  color: 'var(--text-primary)',
                  margin: '1.2rem 0',
                  lineHeight: '1.4'
                }}>
                  AI is not your enemy. Don't fight it. <span style={{
                    background: 'linear-gradient(120deg, var(--accent-teal), var(--accent-orange))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900
                  }}>Boss it.</span>
                </span>
              </p>
              
              <div className="reveal hero-reveal delay-200" style={{ marginTop: '1.5rem' }}>
                <LeadCaptureForm />
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



      {/* The Problem */}
      <section id="outcomes" className="section">
        <div className="container">
          <div className={`${styles.centerHeader} reveal`}>
            <div className="badge-outline" style={{marginBottom: '1.5rem'}}>Industry insight</div>
            <h2 className="sectionTitle" style={{fontSize: '3rem'}}>The new math: <br/><span className="text-orange">1 Person + AI = Total Powerhouse</span></h2>
          </div>
          
          <div className={`${styles.mathSection} reveal delay-100`}>
            <div>
              <h3 className={styles.mathBlockTitle}>The Exhausting Loop (You Now)</h3>
              <div className={styles.youNowBox}>
                <div className={styles.youNowFlow}>
                  <div className={styles.youNowStep}>
                    <div className={styles.stepIcon}>01</div>
                    <p>Ask ChatGPT a question</p>
                  </div>
                  <div className={styles.stepArrow}></div>
                  <div className={styles.youNowStep}>
                    <div className={styles.stepIcon}>02</div>
                    <p>Copy generated text</p>
                  </div>
                  <div className={styles.stepArrow}></div>
                  <div className={styles.youNowStep}>
                    <div className={styles.stepIcon}>03</div>
                    <p>Paste into email / doc</p>
                  </div>
                  <div className={styles.stepArrow}></div>
                  <div className={styles.youNowStep} style={{opacity: 0.8}}>
                    <div className={styles.stepIcon} style={{background: '#fee2e2', color: '#dc2626', borderColor: '#fca5a5'}}>04</div>
                    <p>Back to the manual grind</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={styles.mathBlockTitle}>The AI-Native System (What You Become)</h3>
              <div className={styles.becomeCardsGrid}>
                {/* Card 1 */}
                <div className={styles.transformationCard}>
                  <div className={styles.manualSide}>
                    <span className={styles.sideLabel}>Old Way</span>
                    <p className={styles.becomeStrike}>Typing meeting summaries</p>
                  </div>
                  <div className={styles.transformationArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                  <div className={styles.aiSide}>
                    <span className={styles.sideLabelHighlight}>AI-Native System</span>
                    <p className={styles.becomeResult}>System joins the call, transcribes, extracts action items, logs tasks to your project board.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className={styles.transformationCard}>
                  <div className={styles.manualSide}>
                    <span className={styles.sideLabel}>Old Way</span>
                    <p className={styles.becomeStrike}>Digging for data</p>
                  </div>
                  <div className={styles.transformationArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                  <div className={styles.aiSide}>
                    <span className={styles.sideLabelHighlight}>AI-Native System</span>
                    <p className={styles.becomeResult}>System reads requests, pulls files from your database, hands you a pre-drafted response.</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className={styles.transformationCard}>
                  <div className={styles.manualSide}>
                    <span className={styles.sideLabel}>Old Way</span>
                    <p className={styles.becomeStrike}>Manual scheduling</p>
                  </div>
                  <div className={styles.transformationArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                  <div className={styles.aiSide}>
                    <span className={styles.sideLabelHighlight}>AI-Native System</span>
                    <p className={styles.becomeResult}>System cross-references calendars, qualifies requests, books deep-work blocks — zero back-and-forth.</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.mathConclusionBox}>
                <p className={styles.mathConclusionText}>
                  <strong>AI-Native Design Thinking:</strong> stop manually executing repetitive tasks. Start designing systems that execute them for you. No code required.
                </p>
              </div>
            </div>
          </div>
          
          <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
            <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
              Unlock the Blueprint & Preview Video
            </a>
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
      <section className="section">
        <div className="container">
          <div className={`${styles.centerHeader} reveal`}>
            <div className="badge-outline" style={{marginBottom: '1rem'}}>Who it is for</div>
            <h2 className="sectionTitle">Any domain. <span className="highlight-orange">Zero code required.</span></h2>
            <p className="paragraph">This isn't a developer course in disguise. If you read briefs, write documents, talk to customers, plan things, or make decisions for a living — you qualify.</p>
            <p className="paragraph" style={{fontWeight: 600}}>The only prerequisite: you can write a clear email and you have a real job with real problems.</p>
          </div>
          <div className={`${styles.roleGrid} reveal delay-100`}>
            {[
              {
                id: '01',
                role: 'Marketing & Brand',
                desc: 'Pipelines ingest briefs, auto-generate mood boards, and format assets for multiple platforms instantly.'
              },
              {
                id: '02',
                role: 'Sales & BD',
                desc: 'Automate prospect qualification and calendar booking. Only talk to buyers ready to close.'
              },
              {
                id: '03',
                role: 'HR & Recruiting',
                desc: 'Automate candidate screening, interview scheduling, and end-to-end employee onboarding.'
              },
              {
                id: '04',
                role: 'Operations & Logistics',
                desc: 'Extract data from unstructured emails, update inventory sheets, and generate daily reports.'
              },
              {
                id: '05',
                role: 'Finance & Accounting',
                desc: 'Ingest hundreds of PDF invoices, reconcile against bank statements, and draft ledger entries.'
              },
              {
                id: '06',
                role: 'Product & Design',
                desc: 'Generate PRDs from meeting notes, map requirement docs, and create predictive user flows.'
              },
              {
                id: '07',
                role: 'Founders & Solopreneurs',
                desc: 'Backend systems handle multi-channel leads, product delivery, and support while you scale.'
              },
              {
                id: '08',
                role: 'Consultants & Analysts',
                desc: 'System reads client requests, pulls files from databases, and hands you pre-drafted research.'
              },
              {
                id: '09',
                role: 'Legal & Compliance',
                desc: 'Agents review long contracts, flag missing clauses, and summarize risk profiles instantly.'
              }
            ].map((item, i) => (
              <div key={i} className={styles.roleCard}>
                <h3 className={styles.roleTitle}>{item.role}</h3>
                <p className={styles.roleDesc}>{item.desc}</p>
              </div>
            ))}
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

          <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
            <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
              Unlock the Blueprint & Preview Video
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section">
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

          <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
            <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
              Unlock the Blueprint & Preview Video
            </a>
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

           <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
             <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
               Unlock the Blueprint & Preview Video
             </a>
           </div>
        </div>
      </section>

      {/* The Honest Answer */}
      <section className="section">
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

          <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
            <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
              Unlock the Blueprint & Preview Video
            </a>
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

          <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
            <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
              Unlock the Blueprint & Preview Video
            </a>
          </div>
        </div>
      </section>

      {/* Fit Check */}
      <section className="section">
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

          <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
            <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
              Unlock the Blueprint & Preview Video
            </a>
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

          <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
            <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
              Unlock the Blueprint & Preview Video
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
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

          <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
            <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
              Unlock the Blueprint & Preview Video
            </a>
          </div>
        </div>
      </section>

      {/* Matrix CTA Section */}
      <section id="matrix-cta" className={styles.matrixSection}>
        <div className="container" style={{maxWidth: '1200px'}}>
          <div className={styles.matrixGrid}>
            
            {/* Left Content */}
            <div className={styles.matrixLeft}>
              <div className="reveal">
                <div className={styles.pillBox}>
                  <img src="/images/blue_pill_man.png" alt="Frustrated man working late" className={styles.pillImage} />
                  <div>
                    <h2 className={styles.bluePillTitle}>Blue pill: log back in tomorrow. Continue the 14-hour grind.</h2>
                  </div>
                </div>
                
                <div className={styles.pillDivider}></div>
                
                <div className={styles.pillBox}>
                  <img src="/images/happy_professional.png" alt="Happy confident professional" className={styles.pillImage} />
                  <div>
                    <p className={styles.redPillDesc}>
                      Or take the red pill. Step out of the mundane. Learn to manage the technology before it manages you. Claim absolute authority over your career and time.
                    </p>
                  </div>
                </div>

                <div className={styles.matrixDisclaimer}>
                  Unlock the 15-minute architectural preview video + the AI-Native Design Blueprint — delivered straight to your WhatsApp.
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className={`reveal delay-200 ${styles.matrixRight}`}>
               <LeadCaptureForm />
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <h2 style={{color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem'}}>A year from now, will you wish you'd started?</h2>
          <p style={{color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.1rem'}}>Not because of urgency. Because considered things tend to compound.</p>
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '4rem'}}>
            <LeadCaptureForm />
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
