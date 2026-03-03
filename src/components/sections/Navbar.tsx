import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-transparent backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <div className="text-white text-2xl font-bold tracking-tight">
        roam<span className="text-emerald-400">.</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#features" className="hover:text-white transition">Features</a>
        <a href="#destinations" className="hover:text-white transition">Destinations</a>
        <a href="#how-it-works" className="hover:text-white transition">How it works</a>
        <a href="#pricing" className="hover:text-white transition">Pricing</a>
      </div>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-sm text-white/70 hover:text-white transition">
          Log in
        </button>
        <button className="text-sm bg-emerald-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-emerald-300 transition">
          Get started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-1">
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md p-6 flex flex-col gap-4 text-white/70 text-sm md:hidden">
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#destinations" onClick={() => setIsOpen(false)}>Destinations</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)}>How it works</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <button className="bg-emerald-400 text-black font-semibold px-4 py-2 rounded-full w-fit">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;