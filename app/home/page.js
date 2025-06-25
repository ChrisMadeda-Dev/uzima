import React from 'react'
import Hero from './_components/Hero'
import KeyFeatures from './_components/KeyFeatures'
import ServicesHighlights from './_components/ServicesHighlights'
import Testimonials from './_components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <ServicesHighlights />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home