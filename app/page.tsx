import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import PageTransition from "@/components/PageTransition";
import CodingJourney from "@/components/CodingJourney";
import Leadership from "@/components/Leadership";
import CursorGlow from "@/components/CursorGlow";
import Reveal from "@/components/Reveal";

export default function Home() {

  return (

    <main>

      <CursorGlow />
      <Loader />

      <PageTransition>
        <Background />
        <Navbar />
        <Reveal>
          <Hero />
        </Reveal>


        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Leadership />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <CodingJourney /> 
        </Reveal>
          <Contact />
          <Footer />
      </PageTransition>

    </main>

  );

}