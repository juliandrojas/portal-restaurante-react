import React from 'react'
import Navigation from '../components/NavbarNavigation'
import Presentation from '../components/Presentation';
import CardMenu from '../components/Card';
import AboutUs from '../components/AboutUs';

function Index() {
  return (
    <>
      <Navigation />
      <Presentation />
      <AboutUs />
      <CardMenu />
    </>
  )
}

export default Index
