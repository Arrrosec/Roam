const CTA = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center py-20 px-6">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">
            Start today
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-2xl">
            Your next trip is one prompt away
          </h2>
          <p className="text-white/50 text-lg max-w-lg mb-10">
            Join 50,000+ travelers already using Roam to plan smarter, spend
            less and experience more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-400 hover:bg-emerald-300 transition text-black font-semibold px-8 py-4 rounded-full text-sm">
              Plan your first trip free
            </button>
            <button className="bg-white/10 hover:bg-white/20 transition text-white font-semibold px-8 py-4 rounded-full text-sm backdrop-blur-sm">
              Watch a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;