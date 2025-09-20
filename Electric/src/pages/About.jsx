import Mission from "../components/About/Mission";
import Vision from "../components/About/Vision";
import Story from "../components/About/Story";
import Team from "../components/About/Team";
import Impact from "../components/About/Impact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="relative bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white text-center">
      <Navbar />
      <main className="flex-1 px-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
              About Electra
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Driving the Future of Sustainable Transportation.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            <Mission />
            <Vision />
            <Story />
            <Team />
            <Impact />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
