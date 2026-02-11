"use client";

import React from "react";

import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Section from "./Section";
import styles from "./GithubStats.module.css";

const GithubStats = () => {
    const [blockSize, setBlockSize] = React.useState(12);
    const [blockMargin, setBlockMargin] = React.useState(2);
    const [fontSize, setFontSize] = React.useState(12);

    const currentYear = new Date().getFullYear();

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setBlockSize(4);
                setBlockMargin(1);
                setFontSize(8);
            } else if (window.innerWidth < 768) {
                setBlockSize(10);
                setBlockMargin(2);
                setFontSize(12);
            } else {
                setBlockSize(12);
                setBlockMargin(2);
                setFontSize(12);
            }
        };

        // Set initial size
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Section id="github-stats" className="github-stats-section">
            <h2 className="section-title">GitHub Contributions</h2>
            <div className={styles.container}>
                <GitHubCalendar
                    username="Rachakweb"
                    colorScheme="dark"
                    year={currentYear}
                    blockMargin={blockMargin}
                    theme={{
                        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    }}
                    fontSize={fontSize}
                    blockSize={blockSize}
                    renderBlock={(block, activity) =>
                        React.cloneElement(block, {
                            "data-tooltip-id": "github-tooltip",
                            "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                        })
                    }
                />
                <Tooltip id="github-tooltip" />
            </div>
        </Section>
    );
};

export default GithubStats;
