import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VerticalMenu from './components/VerticalMenu';
function App() {
  return (
    <div className="layout-wrapper">
      <VerticalMenu />
      <div className="main-content">
        <Navigation />
      <main>
        <Hero />
        <Services />
        <Products />
        <Industries />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;
