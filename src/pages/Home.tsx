import { useEffect } from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Features from "../components/Features";
import Curriculum from "../components/Curriculum";
import BuilderNotes from "../components/BuilderNotes";
import Community from "../components/Community";
import Team from "../components/Team";
import { consumeSectionScroll } from "../router";

export default function Home() {
  useEffect(() => {
    const id = consumeSectionScroll();
    if (id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Features />
      <Curriculum />
      <BuilderNotes />
      <Community />
      <Team />
    </>
  );
}
