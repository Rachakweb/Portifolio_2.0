import Section from './Section';
import styles from './Academic.module.css';
import { academic } from '@/data/placeholder';

const Academic = () => {
    return (
        <Section id="academic" className={styles.academic}>
            <h2 className="section-title">Academic Background</h2>
            <div className={styles.timeline}>
                {academic.map((item) => (
                    <div key={item.id} className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.degree}>{item.degree}</h3>
                            <h4 className={styles.institution}>{item.institution}</h4>
                            <span className={styles.year}>{item.year}</span>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Academic;
