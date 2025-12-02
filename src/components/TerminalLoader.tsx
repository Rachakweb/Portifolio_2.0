"use client";

import React, { useState, useEffect } from 'react';
import styles from './TerminalLoader.module.css';

const bootSequence = [
    "Initializing kernel...",
    "Loading modules...",
    "Mounting file systems...",
    "Checking permissions...",
    "Connecting to secure server...",
    "Bypassing firewalls...",
    "Access granted.",
    "Starting Kali Linux environment...",
    "Welcome, User."
];

interface TerminalLoaderProps {
    onComplete: () => void;
}

const TerminalLoader: React.FC<TerminalLoaderProps> = ({ onComplete }) => {
    const [lines, setLines] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex >= bootSequence.length) {
            const timeout = setTimeout(() => {
                onComplete();
            }, 1000);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setLines(prev => [...prev, bootSequence[currentIndex]]);
            setCurrentIndex(prev => prev + 1);
        }, Math.random() * 400 + 100); // Random delay between 100ms and 500ms

        return () => clearTimeout(timeout);
    }, [currentIndex, onComplete]);

    return (
        <div className={styles.loaderContainer}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
                <span style={{ marginLeft: '1rem', color: '#888', fontSize: '0.9rem' }}>root@kali:~</span>
            </div>
            <div className={styles.content}>
                {lines.map((line, index) => (
                    <div key={index} className={styles.line}>
                        <span style={{ color: '#00ff00' }}>➜</span> <span style={{ color: '#00bfff' }}>~</span> {line}
                    </div>
                ))}
                <div className={styles.line}>
                    <span style={{ color: '#00ff00' }}>➜</span> <span style={{ color: '#00bfff' }}>~</span> <span className={styles.cursor}></span>
                </div>
            </div>
        </div>
    );
};

export default TerminalLoader;
