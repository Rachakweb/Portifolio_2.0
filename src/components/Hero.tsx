import Link from 'next/link';
import Typewriter from './Typewriter';
import Section from './Section';
import styles from './Hero.module.css';
import { personalDetails } from '@/data/placeholder';

const Hero = () => {
    return (
        <Section id="home" className={styles.hero}>
            <h1 className={styles.title}>
                Hi, I'm <span className={styles.highlight}>{personalDetails.name}</span>
            </h1>
            <h2 className={styles.tagline}>{personalDetails.tagline}</h2>
            <p className={styles.description}>
                <Typewriter texts={personalDetails.about as string[]} />
            </p>
            <div className={styles.actions}>
                <Link href="#projects" className="btn btn-primary">
                    View My Work
                </Link>
                <Link href="#contact" className="btn btn-outline">
                    Contact Me
                </Link>
            </div>
        </Section>
    );
};

export default Hero;
