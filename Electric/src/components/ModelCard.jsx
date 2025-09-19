export default function ModelCard({ title, tag, img }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 shadow-lg transition-all hover:border-primary/50 hover:shadow-primary/20">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      <img
        src={img}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="bottom-0 w-full p-6 text-white">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-primary text-[#13ec5b]">{tag}</p>
        <button className="mt-4 rounded-lg bg-primary bg-[#13ec5b] px-5 py-2 text-sm font-bold text-background-dark transition-transform group-hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
}
