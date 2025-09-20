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
    <main className="flex-1">
      <div className="container mx-auto px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
            About Electra
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Driving the Future of Sustainable Transportation.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-20 px-40 flex flex-col">
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
