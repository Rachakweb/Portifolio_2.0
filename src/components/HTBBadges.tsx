import Image from 'next/image';
import Section from './Section';
import styles from './HTBBadges.module.css';
import { htbBadges } from '@/data/placeholder';

const HTBBadges = () => {
    return (
        <Section id="htb" className={styles.htb}>
            <h2 className="section-title">Hack The Box Badges</h2>
            <div className={styles.grid}>
                {htbBadges.map((badge) => (
                    <div key={badge.id} className={styles.card}>
                        <a href={badge.link || "#"} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={badge.image}
                                    alt={badge.name}
                                    width={100}
                                    height={100}
                                    className={styles.image}
                                    unoptimized // Allow external images without config changes for now
                                />
                            </div>
                            <h3 className={styles.rank}>{badge.rank}</h3>
                            <p className={styles.name}>{badge.name}</p>
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default HTBBadges;
