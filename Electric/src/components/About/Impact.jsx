const impactStats = [
  { value: "500M+", label: "Electric Miles Driven" },
  { value: "250K+", label: "Tons of CO2 Emissions Avoided" },
  { value: "10K+", label: "Charging Stations Deployed" },
];

export default function Impact() {
  return (
    <section id="impact">
      <h3 className="text-2xl sm:text-3xl text-center text-[#13ec5b] font-bold text-primary mb-8">
        Our Environmental Impact
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {impactStats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl bg-gray-200/50 dark:bg-gray-800/50 p-6 text-[#13ec5b] text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <p className="text-4xl font-bold text-primary">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
