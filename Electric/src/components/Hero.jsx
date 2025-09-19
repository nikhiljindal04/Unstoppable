import React from "react";

export default function Hero() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
          Electra Model X
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          The future of driving is here. Experience breathtaking performance,
          groundbreaking technology, and zero emissions.
        </p>
      </div>

      <div className="mt-12">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
          <img
            alt="Electra Model X"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEfRj0b-p-h3474WHR35abymme68wL7f63zX2mxDHrXDCUcPirKbehyVc29ZhWiRBslU4nsy_mrgjxli6davUSo2i-2UeNzTrACdXzs0ravXnmqMIFwjtCVt1XzBuau7c1H6DAw6_0ZAGgXYGETNTBgz_yQGZyjsUz9JTA4COOywdzlYtHCv5n-fOofl6UYxQSqhztQq42H6Fv22m_luauIQZlZJvAXt_5GCwhQNuh6pXD_SxBUJ6wFsbySArfr9ox9M6KZnHMzFEe"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button className="group flex size-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110">
              <span className="material-symbols-outlined text-5xl text-white">
                play_arrow
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
