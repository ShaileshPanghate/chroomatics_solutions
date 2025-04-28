import Head from 'next/head';
import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import About from '../app/components/About';
import Services from '../app/components/Services';
import Brands from '../app/components/Brands';
import Founders from '../app/components/Founders';
import Footer from '../app/components/Footer';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Brands />
        {/* <ContactSection /> */}
        <Founders />
      </main>
      <Footer />
    </div>
  );
}