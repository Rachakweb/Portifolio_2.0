import Section from './Section';
import styles from './Projects.module.css';
import { projects } from '@/data/placeholder';

const Projects = () => {
    return (
        <Section id="projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span>root@kali:~/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>./{project.title}</h3>
                            <p className={styles.cardDescription}># {project.description}</p>
                            <div className={styles.tags}>
                                {project.tech.map((t, index) => (
                                    <span key={index} className={styles.tag}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                            [ EXECUTE PROJECT ]
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
