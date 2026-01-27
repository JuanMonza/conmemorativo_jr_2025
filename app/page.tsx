import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Purpose from '@/components/Purpose';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Alliances from '@/components/Alliances';
import Workshops from '@/components/Workshops';
import Experience360 from '@/components/Experience360';
import LifeConnection from '@/components/LifeConnection';
import Tree3D from '@/components/Tree3D';
import CorporateExperience from '@/components/CorporateExperience';
import QuoteForm from '@/components/QuoteForm';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '@/components/ScrollToTop';
import PromoPopup from '@/components/PromoPopup';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Introduction />
      <Purpose />
      <Benefits />
      <Services />
      <Gallery />
      <Tree3D />
      <Workshops />
      <Experience360 />
      <LifeConnection />
      <Alliances />
      <CorporateExperience />
      <QuoteForm />
      <Contact />
      <Location />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
      <PromoPopup />
    </main>
  );
}
