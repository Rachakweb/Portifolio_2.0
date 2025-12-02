import Section from './Section';
import styles from './Contact.module.css';
import { personalDetails } from '@/data/placeholder';

const Contact = () => {
    return (
        <Section id="contact" className={styles.contact}>
            <h2 className="section-title">Connect With Me</h2>
            <p style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '2rem' }}>
                Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <a href={`mailto:${personalDetails.email}`} className="btn btn-primary" style={{ marginBottom: '3rem' }}>
                Say Hello
            </a>

            <div className={styles.socials}>
                {Object.entries(personalDetails.socials).map(([platform, link]) => (
                    <a key={platform} href={link} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                ))}
            </div>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</p>
            </footer>
        </Section>
    );
};

export default Contact;
