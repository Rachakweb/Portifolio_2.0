import Section from './Section';
import styles from './Experience.module.css'; // Changed import
import { experience } from '@/data/placeholder';

const Experience = () => {
    return (
        <Section id="experience" className={styles.experience}>
            <h2 className="section-title">Experience</h2>
            <div className={styles.timeline}>
                {experience.map((item) => (
                    <div key={item.id} className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.role}>{item.role}</h3>
                            <h4 className={styles.company}>{item.company}</h4>
                            <span className={styles.period}>{item.period}</span>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
