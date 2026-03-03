import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import SocialProof from "./components/sections/SocialProof";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Destinations from "./components/sections/DEstinations";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Destinations />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;