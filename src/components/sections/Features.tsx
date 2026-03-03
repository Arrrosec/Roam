const features = [
  {
    icon: "🧠",
    title: "AI Trip Planning",
    description:
      "Just tell Roam your destination, dates and budget. Our AI builds a full itinerary in seconds.",
  },
  {
    icon: "✈️",
    title: "Flight & Hotel Search",
    description:
      "Compare flights and stays across hundreds of providers — all without leaving the app.",
  },
  {
    icon: "💸",
    title: "Smart Budgeting",
    description:
      "Set your budget and Roam optimizes every part of your trip to make it stretch further.",
  },
  {
    icon: "🗺️",
    title: "Offline Maps",
    description:
      "Download your destination map and access it anywhere — no signal needed.",
  },
  {
    icon: "👥",
    title: "Group Travel",
    description:
      "Plan trips with friends, split costs, vote on activities and stay in sync effortlessly.",
  },
  {
    icon: "⚡",
    title: "Instant Rebooking",
    description:
      "Flight cancelled? Roam automatically finds the next best option and reboks for you.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            Everything your trip needs
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            From first search to final boarding pass — Roam handles the hard
            parts so you can focus on the experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;