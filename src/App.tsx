import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import SocialProof from "./components/sections/SocialProof";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
    </div>
  );
}

export default App;