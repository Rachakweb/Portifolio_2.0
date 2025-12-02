import Section from './Section';
import styles from './CV.module.css';
import { cvLink } from '@/data/placeholder';

const CV = () => {
    return (
        <Section id="cv" className={styles.cvContainer}>
            <h2 className="section-title">Resume</h2>
            <p className={styles.cvText}>
                Interested in learning more about my experience? Download or view my full resume below.
            </p>
            <a href={cvLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <span className={styles.icon}>📄</span> Download / View CV
            </a>
        </Section>
    );
};

export default CV;
