import React from "react";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
          Cutting-Edge Technology
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Discover the innovations that power the future of electric mobility.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-20 grid gap-16">
        <TechnologyCard
  title="Battery Innovation"
  description="Our electric vehicles are powered by state-of-the-art battery technology, offering extended range and rapid charging capabilities. We're committed to pushing the boundaries of energy storage to make electric driving more convenient and sustainable."
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuBq_IO-IwtAz83AkYB-ZN-KT819_p78pfJ7J_BeWJewa2qTl8Vq4yc3gVjt6EvLjETpFEbSeLjTyK3j-7yrLgeOuZvi_TgarvNSVdG8Hlb92S3gatuIbdguntZHZ1g646xNb62j0c4DgfQLW0cCw_dDXM3LpagAZlwBJBlAR7D_qS4C4QBdrp4Hz5fCybltEELwkxMJaf1CRrOz_duOW4QW-oGELxuxNdg176KmTvXEXYgiNslCtYoSUT8KhceleiMGmxu5xLRHpkR2"
  reverse
/>
<TechnologyCard
  title="Autonomous Driving"
  description="Experience the future of driving with our advanced autonomous features. Our vehicles are equipped with sophisticated sensors and AI algorithms to provide enhanced safety and convenience on the road."
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAHoiw-obD5HWZFgaOwqP1Rki5nyso9sMt-7UatsrTvo-A8tucng7FpPmQgp19DlvEBWaB6pUWScMxYEEmxzRgih2KuTVPdWYYlw81JgvyvyOJjDvRb-VyASl1BRQfYFBGNdP9QmDR-qEHI5v5XF91swIJTZ5eVVubZ4Ki5KveVseMz8t3JNXCLbvxAyNO9fPpMtJFI2cV09p3Bgm3-0HmZx7lxRkbXgWd-lULxHHsSAGMyt0TVAxx3PuUr1NnSiMZo8viZgQHOMA-f"
/>
<TechnologyCard
  title="Infotainment System"
  description="Stay connected and entertained with our intuitive infotainment system. Featuring a sleek touchscreen interface, seamless smartphone integration, and over-the-air updates, our system keeps you informed and in control."
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAvDtjVL0mOG6wTci2ae6fGDmImKKq_YgNTgauqAl5LOwCeeuWj6vC-hCUorGgBaNf5OWqBkpK1TsM4w_3zpCGSa6N80WKL6p18fDLHdYYYsD-KqXDkJ7PGmuqksCwB0qTQhvyV9unIeY_iJIeJeZEHcI5sJ5oyg3m4WoL4CZkIwcgg1ng6FpWGz4yDOLn4VJotkZ70kKBOoz4SQPN8nJek4S2pmr4Rsw-0hZZmhYEidQkTMPpnAb0vTOOfNJBmXt2mmi39lpINEvr5"
  reverse
/>
<TechnologyCard
  title="Safety Features"
  description="Your safety is our top priority. Our vehicles are equipped with a comprehensive suite of advanced safety features, including collision avoidance, lane-keeping assist, and adaptive cruise control, to ensure peace of mind on every journey."
  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDBWMUYqLTIUChL3lrFdGoFBJfYjeJ7liMpHzkxHIoBmv9D5Xow5FN0-NGl-Q9K363katcxje0-Mf8pIe0Kq_ePBigUkjEjw0mZdURdOzisY1hQ5Rwi69CLloC9V9WCdW-y5sfOeIceTkZbXptCc__b23NZZG8raB0Q_m6Y9mt7h89wiEdktXJrwu68_Srf7a9Bid39eeQ5M5TdGp1PqH2iAsUMGeZyFJY2rjNnzqjzAbC7bFg1XJ0Z0_4PmtfsXoMEbbjijJZkvgZX"
/>

{/* New Technology Cards */}
<TechnologyCard
  title="Sustainable Materials"
  description="We prioritize eco-friendly manufacturing by using recycled and sustainable materials in our vehicles. From interior fabrics to exterior finishes, every detail is designed to reduce environmental impact without compromising quality."
  image="https://images.pexels.com/photos/1230157/pexels-photo-1230157.jpeg"
  reverse
/>
<TechnologyCard
  title="Smart Connectivity"
  description="Our vehicles feature next-generation connectivity, enabling real-time navigation, remote diagnostics, and seamless smart-home integration. Drive smarter with a car that stays connected to your world."
  image="https://images.pexels.com/photos/7362886/pexels-photo-7362886.jpeg"
/>

      </div>
    </section>
  );
};

export default TechnologySection;
