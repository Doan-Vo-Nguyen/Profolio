import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Work } from "@/components/work";
import { Skills } from "@/components/skills";
import { Studio } from "@/components/studio";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[120] focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Studio />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
