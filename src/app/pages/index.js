import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Brands from '../components/Brands';
import Founders from '../components/Founders';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Brands />
        <Founders />
      </main>
      <Footer />
    </div>
  );
}