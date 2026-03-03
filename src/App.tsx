import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import SocialProof from "./components/sections/SocialProof";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default App;