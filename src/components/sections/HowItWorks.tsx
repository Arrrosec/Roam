const steps = [
  {
    number: "01",
    title: "Tell us your dream trip",
    description:
      "Enter your destination, travel dates, budget and who you're travelling with. Takes 30 seconds.",
    icon: "🌍",
  },
  {
    number: "02",
    title: "Roam builds your plan",
    description:
      "Our AI generates a full itinerary — flights, hotels, activities and daily schedule — instantly.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Book & go",
    description:
      "Review your plan, tweak anything you like, then book everything in one click. That's it.",
    icon: "🎒",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">
            How it works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            Plan a trip in 3 steps
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            No more 47 browser tabs. Roam brings everything together into one
            effortless flow.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/40 to-emerald-400/0" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 group-hover:border-emerald-400/40 flex items-center justify-center text-3xl mb-6 transition-all duration-300 relative z-10">
                {step.icon}
              </div>

              {/* Step Number */}
              <span className="text-emerald-400/60 text-xs font-bold uppercase tracking-widest mb-2">
                Step {step.number}
              </span>

              {/* Title */}
              <h3 className="text-white font-semibold text-xl mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;