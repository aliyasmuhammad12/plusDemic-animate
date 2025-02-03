// import React from 'react'

import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HowItHelps from "./components/HowItHelps/HowItHelps";
import Navbar from "./components/Navbar/Navbar";
import Trust from "./components/Trust/Trust";
import Uses from "./components/Uses/Uses";

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <HowItHelps />
      <Uses />
      <Trust />
      <Footer />
    </main>
  );
}

export default App;
