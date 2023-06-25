import React from 'react'
import Navigation from '../components/NavbarNavigation'
import Presentation from '../components/Presentation';
import CardMenu from '../components/Card';
import AboutUs from '../components/AboutUs';
import Formulary from '../components/Formulary';
import Footer from '../components/Footer';

function Index() {
  return (
    <>
      <Navigation />
      <br /><br />
      <Presentation />
      <AboutUs />
      <CardMenu />
      <Formulary />
      <Footer />
    </>
  )
}

export default Index
