"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/rak_studio_logo.png"
                        alt="RAK Studio Logo"
                        width={200}
                        height={50}
                        priority
                    />
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="#home" className={styles.navLink}>/home</Link></li>
                    <li><Link href="#projects" className={styles.navLink}>/projects</Link></li>
                    <li><Link href="#academic" className={styles.navLink}>/academic</Link></li>
                    <li><Link href="#certifications" className={styles.navLink}>/certs</Link></li>

                    <li><Link href="#cv" className={styles.navLink}>/cv</Link></li>
                    <li><Link href="#contact" className={styles.navLink}>/connect</Link></li>
                </ul>
                <div className={styles.clock}>{time}</div>
            </div>
        </nav>
    );
};

export default Navbar;
