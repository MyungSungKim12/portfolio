import Hero from '@/components/Hero';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import TroubleShooting from '@/components/TroubleShooting';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Career />
      <Projects />
      <TroubleShooting />
      <Contact />
    </main>
  );
}