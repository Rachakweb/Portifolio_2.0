import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
    return (
        <section id={id} className={`${styles.section} ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
