import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Workflow from "@/components/Workflow"; 

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Workflow />
      <Contact />
      <Footer />
    </div>
  )
}