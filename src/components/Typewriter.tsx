"use client";

import { useState, useEffect } from 'react';

interface TypewriterProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

const Typewriter = ({
    texts,
    typingSpeed = 50,
    deletingSpeed = 30,
    pauseDuration = 2000
}: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[index];

        const handleTyping = () => {
            if (isDeleting) {
                setDisplayedText(prev => prev.substring(0, prev.length - 1));
            } else {
                setDisplayedText(prev => currentText.substring(0, prev.length + 1));
            }

            if (!isDeleting && displayedText === currentText) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span>
            {displayedText}
            <span style={{ borderRight: '2px solid currentColor', animation: 'blink 0.7s infinite' }}>&nbsp;</span>
            <style jsx>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </span>
    );
};

export default Typewriter;
