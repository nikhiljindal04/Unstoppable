export default function HeroSection() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPrVXSkLJQy29ftoGV9UrIPtHUaplBm1gXIazhMoeydXrBSQHmI5sU422swSvH4R5xbyMeBn6I0GfMVNwdn3bS2oxAVBtckt9AAax6gIV1o-7OSkjQekMcC83mAtvUbbVA-8-L233h4421io_2YxeZpZY2v3LGCUQNO_Xg3IAGzWPVt3Q7ybosaKZiTMwu4POZZWZ3tXwoZJ_2N61zwOMg3OTWLYEnq9hil1LkA7FubDxeNBBECchsM8eT8c3YJhFBP2kSj7pzV7-6')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-center text-white">
          Electra: The Future is Here
        </h1>
      </div>
    </div>
  );
}
