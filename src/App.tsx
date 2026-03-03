import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import SocialProof from "./components/sections/SocialProof";
import Features from "./components/sections/Features";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
    </div>
  );
}

export default App;