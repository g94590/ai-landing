import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Solutions from '@/components/Solutions';
import HowItWorks from '@/components/HowItWorks';
import Guarantees from '@/components/Guarantees';
import Cases from '@/components/Cases';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <HowItWorks />
        <Guarantees />
        <Cases />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
