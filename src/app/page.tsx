"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import TerminalLoader from "@/components/TerminalLoader";

import Academic from "@/components/Academic";


export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      {loading ? (
        <TerminalLoader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Hero />
          <Projects />
          <Academic />
          <Certifications />

          <CV />
          <Contact />
        </>
      )}
    </main>
  );
}
