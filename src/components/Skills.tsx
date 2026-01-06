"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiDocker, SiKalilinux, SiGithubactions } from "react-icons/si";
import { FaLaptopCode, FaBug, FaRocket, FaShieldAlt } from "react-icons/fa";
import styles from './Skills.module.css';

const skills = [
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        description: "Full-stack React framework",
        color: "default"
    },
    {
        name: "Docker",
        icon: <SiDocker />,
        description: "Containerization & Orchestration",
        color: "blue"
    },
    {
        name: "Antigravity",
        icon: <FaRocket />, // Symbolic of "Advanced/High-Tech"
        description: "Advanced Agentic AI Systems",
        color: "default"
    },
    {
        name: "Ethical Hacking",
        icon: <SiKalilinux />,
        description: "Vulnerability Assessment",
        color: "default"
    },
    {
        name: "Penetration Testing",
        icon: <FaBug />, // Bug/Vuln finding
        description: "Exploitation & Reporting",
        color: "danger" // Red glow for security/red team stuff
    },
    {
        name: "CI/CD",
        icon: <SiGithubactions />,
        description: "Automated Deployment Pipelines",
        color: "default"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className={styles.skillsContainer}>
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                &lt;System Capabilities /&gt;
            </motion.h2>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className={`${styles.card} ${skill.color === 'danger' ? styles.danger : ''}`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className={styles.iconWrapper}>
                            {skill.icon}
                        </div>
                        <div className={styles.skillName}>{skill.name}</div>
                        <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#666' }}>
                            {skill.description}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
