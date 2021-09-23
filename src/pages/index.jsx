import React from 'react';
import CreationList from '../components/CreationList/inex';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';

const LandingPage = () => (
  <main>
    <Hero />
    <Intro />
    <CreationList />
    <Footer />
  </main>
);

export default LandingPage;
