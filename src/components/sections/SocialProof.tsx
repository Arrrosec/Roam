const stats = [
  { value: "50K+", label: "Happy travelers" },
  { value: "120", label: "Countries covered" },
  { value: "4.9★", label: "Average rating" },
  { value: "2min", label: "Average plan time" },
];

const SocialProof = () => {
  return (
    <section className="bg-black py-16 px-6 border-b border-white/10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="text-4xl font-bold text-white mb-1">
              {stat.value}
            </span>
            <span className="text-white/40 text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;