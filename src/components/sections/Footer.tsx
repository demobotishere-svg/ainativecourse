import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function Footer() {
  return (
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
  );
}
