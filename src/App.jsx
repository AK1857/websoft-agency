import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonial />
        <Contact />
        
       
      </main>
      <Footer />
    </div>
  );
}

export default App;