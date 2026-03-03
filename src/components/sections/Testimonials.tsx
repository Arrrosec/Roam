const testimonials = [
  {
    name: "Sarah K.",
    location: "London, UK",
    avatar: "SK",
    review:
      "I planned a 10-day Japan trip in literally 4 minutes. The itinerary was better than anything I could have put together myself after hours of research.",
    trip: "Tokyo & Kyoto",
    rating: 5,
  },
  {
    name: "Marcus T.",
    location: "Toronto, Canada",
    avatar: "MT",
    review:
      "Travelled with a group of 6 for the first time without any drama. Roam handled the splitting, voting and booking — we just showed up.",
    trip: "Bali, Indonesia",
    rating: 5,
  },
  {
    name: "Amara L.",
    location: "Cape Town, SA",
    avatar: "AL",
    review:
      "The budget optimization is insane. I got a full week in Santorini for what I thought would only cover flights. Never booking any other way.",
    trip: "Santorini, Greece",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            Travelers love Roam
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Don't take our word for it — here's what real travelers say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 hover:border-emerald-400/20 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-emerald-400 text-sm">★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                "{t.review}"
              </p>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.location}</p>
                </div>
                <span className="ml-auto text-white/20 text-xs">{t.trip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;