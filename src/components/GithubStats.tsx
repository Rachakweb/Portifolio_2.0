"use client";

import React from "react";

import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Section from "./Section";

const GithubStats = () => {
    return (
        <Section id="github-stats" className="github-stats-section">
            <h2 className="section-title">GitHub Contributions</h2>
            <div
                className="calendar-container"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2rem",
                    padding: "1rem",
                    background: "rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    border: "1px solid var(--neon-green)",
                    boxShadow: "0 0 10px rgba(39, 201, 63, 0.2)"
                }}
            >
                <GitHubCalendar
                    username="Rachakweb"
                    colorScheme="dark"
                    blockMargin={2}
                    theme={{
                        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    }}
                    fontSize={12}
                    blockSize={12}
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
