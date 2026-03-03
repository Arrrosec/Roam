const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for casual travelers planning occasional trips.",
    features: [
      "3 AI trip plans per month",
      "Basic itinerary builder",
      "Flight & hotel search",
      "Offline maps (1 destination)",
    ],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For frequent travelers who want the full Roam experience.",
    features: [
      "Unlimited AI trip plans",
      "Smart budget optimization",
      "Offline maps (unlimited)",
      "Instant rebooking",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Group",
    price: "$29",
    period: "per month",
    description: "Built for groups, families and travel squads.",
    features: [
      "Everything in Pro",
      "Up to 10 travelers",
      "Group cost splitting",
      "Activity voting",
      "Shared itinerary view",
    ],
    cta: "Get started",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            Simple, honest pricing
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Just great travel planning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col gap-6 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-emerald-400/10 border-emerald-400/40"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-400 text-black text-xs font-bold px-4 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              {/* Plan Name & Price */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/40 text-sm mb-1">
                    /{plan.period}
                  </span>
                </div>
                <p className="text-white/40 text-sm">{plan.description}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="text-emerald-400 text-base">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-emerald-400 hover:bg-emerald-300 text-black"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;