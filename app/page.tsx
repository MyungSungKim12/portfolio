import Hero from '@/components/Hero';
import About from '@/components/About';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import TroubleShooting from '@/components/TroubleShooting';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Career />
      <Projects />
      <TroubleShooting />
      <Contact />
    </main>
  );
}