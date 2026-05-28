import styles from '@/app/page.module.css';

export default function TestimonialsSection() {
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
  );
}
