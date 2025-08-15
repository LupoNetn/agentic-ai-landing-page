import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="container mx-auto px-8">
          <header id="home">
            <Header />
          </header>

          <main>
            <section id="services">
              <Services />
            </section>

            <section id="our-work">
              <OurWork />
            </section>

            <section id="team">
              <Team />
            </section>

            <section id="contact">
              <CTA />
            </section>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
