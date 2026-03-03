const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1800&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          AI-powered travel planning
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight mb-6">
          Your next adventure,{" "}
          <span className="text-emerald-400">planned in seconds</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10">
          Tell Roam where you want to go. We handle flights, stays, itineraries
          and budget — all in one place.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="flex-1 bg-transparent text-white placeholder-white/40 text-sm px-4 py-3 outline-none"
          />
          <input
            type="text"
            placeholder="When?"
            className="md:w-36 bg-transparent text-white placeholder-white/40 text-sm px-4 py-3 outline-none border-t md:border-t-0 md:border-l border-white/10"
          />
          <button className="bg-emerald-400 hover:bg-emerald-300 transition text-black text-sm font-semibold px-6 py-3 rounded-xl">
            Plan my trip
          </button>
        </div>

        {/* Social Proof */}
        <p className="mt-6 text-white/40 text-sm">
          Trusted by{" "}
          <span className="text-white/70 font-medium">50,000+ travelers</span>{" "}
          across 120 countries
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;