import Section from "../components/Feature/Section";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Features() {
  return (

      <div className="bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white">
        <Navbar />
        <div className="overflow-hidden">
        <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-20 py-12 lg:py-20">
          <div className="mx-auto max-w-7xl">
         
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-100 dark:text-white">
                Electrifying Features
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400 dark:text-gray-400">
                Discover the innovation that drives us forward. Every detail
                engineered for an unparalleled experience.
              </p>
            </div>

            <div className="space-y-24">
              {/* Sections */}
              <Section
  id="performance"
  title="Performance"
  content={[
    {
      title: "Instant Acceleration",
      desc: "Experience the thrill of instant torque with our electric powertrain, delivering exhilarating acceleration from 0 to 60 mph in just 3.2 seconds.",
    },
    {
      title: "Long Range",
      desc: "Go further on a single charge with a range of up to 400 miles, making long journeys a breeze.",
    },
  ]}
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuCJOUf4nR1kTPbzh6Xn7hnEkTEgbhohoYSlJA24xfdFGHt_3ty1J2fTZxUYqX2Zu1eKa2LtSJio3Q8MsV_TbbwkjsSjy79MpbPRJFKBhHlljVD091EsipkHgZD9qA2RoSh3PpXwGOlwtPdflQ7ycF40qYO6Q8YVTUfVfs1EAk7-9iEPfOotHaMjwn_pTyIfgDqR6q9dH_vz2RdpA6oxton4MtruWV_jmBciMg8HIS2a69-8wr51dcsv7JLpBauP-Dk_nueyBa7Fnbfg"
/>

<Section
  id="safety"
  title="Safety"
  reverse
  content={[
    {
      title: "Advanced Driver Assistance",
      desc: "Our vehicles are equipped with advanced driver assistance systems, including automatic emergency braking, lane-keeping assist, and adaptive cruise control, ensuring a safe and confident driving experience.",
    },
    {
      title: "Enhanced Visibility",
      desc: "Experience enhanced visibility with our adaptive LED headlights and surround-view camera system, providing a clear view of your surroundings in all conditions.",
    },
  ]}
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuB_wYBPWG7Hh892o__vGC-ct0igbAirjZTfTx0CpX8PaRfa-wggsXGMg64M6ZZPp35qQerlb8IDlZvDCSNvfxXHsZtvxNmEnkDA6h0_0xtmVStGgjN0tLlUhyQ4X_z-tS2Q6m3TtgyyZLNfTZtWRemqYfYs0RQPl1cq6HWtfDSUFwwgQQBW4jDM1Czp2hLPJwfavm4StVFfwKrMk1ZGbUz1ZZleC7o2Mud9MuYlhCJo_3efZccNs_gVlVWuByj-QVJY2ztG59aNC908"
/>

<Section
  id="connectivity"
  title="Connectivity"
  content={[
    {
      title: "Seamless Integration",
      desc: "Stay connected on the go with seamless smartphone integration, allowing you to access your favorite apps, music, and navigation directly from the vehicle's touchscreen display.",
    },
    {
      title: "Over-the-Air Updates",
      desc: "Keep your vehicle up-to-date with the latest features and improvements through over-the-air software updates, ensuring your driving experience is always optimized.",
    },
  ]}
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuC_UZqUEADkdWlGs57yErfgFtNUXRaOAs5MBAVJaGeT5Q0m7z5WnxZt3XZqzhDmFrqvEAqB2kt5i8OVjrRltbGz6Pa6FGE0RFwPxEtirEOhSE6I8ErdZiYown57SlD-yOdqyEiKdWVskaDYO1lg3V9SjZctIgKIHmN_Xo-Mw4gFmDKgQpBdGdVDtktMKOBUogboamu1_mRw9WhG6wUqhVctBj7zlsrjKxOVa3nUCdb05W4kBOrU5MAIVihbsg2St7gfgM1kShl611aY"
/>

<Section
  id="comfort"
  title="Comfort"
  reverse
  content={[
    {
      title: "Luxurious Interior",
      desc: "Indulge in a luxurious and spacious interior crafted with premium materials, providing a comfortable and refined driving environment for both driver and passengers.",
    },
    {
      title: "Advanced Climate Control",
      desc: "Enjoy personalized comfort with our advanced climate control system, featuring multi-zone temperature settings and air purification for a pleasant cabin environment.",
    },
  ]}
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuC9HhgpBDlQQU_sE_IZh4RgJRaa1ErsHJRcu0aVwdV1hqMnnZTUVSDPEvZsY36-eSnlz2hdjHUHZl5OKCYCPBXdPYTlmRR1574jAaG_vA3SO1Pt3YkEdHHrwa8gxmQDVBDMJV93r_5lkOorWOD5qRUDynIki722eZ8EstTDAx_G560xRY6J4kI37NhCNR2FRlNJeNGMI8PTDJEfSJ-hoeOALJ4salj2TSNOB1PzNsQc3TRfJnY-_UV0GhhqbOpeCftciuWS2naXpr4B"
/>

{/* New Section: Sustainability */}
<Section
  id="sustainability"
  title="Sustainability"
  content={[
    {
      title: "Eco-Friendly Materials",
      desc: "Our cars use recycled fabrics, responsibly sourced materials, and low-impact manufacturing processes to reduce our environmental footprint.",
    },
    {
      title: "Green Manufacturing",
      desc: "With renewable energy-powered factories, we are working towards a carbon-neutral production cycle to build a sustainable future.",
    },
  ]}
  image="https://images.pexels.com/photos/9799729/pexels-photo-9799729.jpeg"
/>

{/* New Section: Innovation */}
<Section
  id="innovation"
  title="Innovation"
  reverse
  content={[
    {
      title: "Cutting-Edge Design",
      desc: "From aerodynamic exteriors to AI-driven driving systems, our design philosophy blends style with futuristic engineering.",
    },
    {
      title: "Future-Ready Technology",
      desc: "We continuously integrate upcoming innovations like solid-state batteries, AI copilots, and next-gen connectivity for the road ahead.",
    },
  ]}
  image="https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg"
/>

            </div>
          </div>
        </main>
        </div>
        <Footer />
      </div>
    
  );
}
