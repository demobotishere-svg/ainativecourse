import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function CurriculumSection() {
  return (
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
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
