const impactStats = [
  { value: "500M+", label: "Electric Miles Driven" },
  { value: "250K+", label: "Tons of CO2 Emissions Avoided" },
  { value: "10K+", label: "Charging Stations Deployed" },
];

export default function Impact() {
  return (
    <section className="space-y-8 px-2 sm:px-4 md:px-0">
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#13ec5b] font-bold mb-8">
        Our Environmental Impact
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {impactStats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl bg-gray-200/50 dark:bg-gray-800/50 p-6 text-[#13ec5b] text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stat.value}</p>
            <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
