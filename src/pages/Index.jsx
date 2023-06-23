import React from "react";
import Navigation from "../components/Navbar";
import Presentation from "../components/Presentation";
import AboutUs from "../components/AboutUs";

export default function Index() {
  return (
    <div>
      <section id="navbar">
        <Navigation />
      </section>
      <section id="presentation">
        <Presentation />
        <AboutUs />
      </section>
    </div>
  );
}
