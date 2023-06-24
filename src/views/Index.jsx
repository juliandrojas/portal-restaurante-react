import React from 'react'
import Navigation from '../components/NavbarNavigation'
import Presentation from '../components/Presentation';
import CardMenu from '../components/Card';
import AboutUs from '../components/AboutUs';
import Formulary from '../components/Formulary';

function Index() {
  return (
    <>
      <Navigation />
      <br /><br />
      <Presentation />
      <AboutUs />
      <CardMenu />
      <Formulary />
    </>
  )
}

export default Index
