
import { useState } from 'react';
import Section from './Section';
import styles from './Certifications.module.css';
import { certifications } from '@/data/placeholder';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

    return (
        <Section id="certifications">
            <h2 className="section-title">Certifications</h2>
            <div className={styles.grid}>
                {certifications.map((cert) => (
                    <div key={cert.id} className={styles.card} onClick={() => setSelectedCert(cert)}>
                        <div className={styles.imageWrapper}>
                            {/* @ts-ignore - image property exists in updated data */}
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{cert.title}</h3>
                            <p className={styles.issuer}>{cert.issuer}</p>
                            <span className={styles.date}>{cert.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedCert && (
                <div className={styles.modalOverlay} onClick={() => setSelectedCert(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={() => setSelectedCert(null)}>&times;</button>
                        {/* @ts-ignore */}
                        <img src={selectedCert.image} alt={selectedCert.title} className={styles.modalImage} />
                        <div className={styles.modalInfo}>
                            <h3>{selectedCert.title}</h3>
                            <p>{selectedCert.issuer}</p>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
};

export default Certifications;
