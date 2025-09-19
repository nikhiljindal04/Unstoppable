import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ModelCard from "../components/ModelCard";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const models = [
  {
    title: "EcoDrive Urban",
    tag: "Compact Urban",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeC1uyXmeBqZAklrGLEx8ppd_aolQWpPBAl7OFsKPxN3-lhGKNqhi6hPZMnz3dzAWrFOB6OYPEPoZkaS7p9vfOkBVaT9l-LFzAgDkEwF7UahN1FdTE-q0eDjUNHqTgEnx3mWzO-SfbXcCvmsHdDXHwB6QWFIDH_lPUCUUysoMYDSp3f24LBYMjdG8B7CzZCiPSYpLSM2f5NCMzmGnBKEYGwXpCsugOrhhfhGY1ExnPm3alyt9Pvp5L7DMYKu7hxpxjz78c88RgtN3G",
  },
  {
    title: "EcoDrive Voyager",
    tag: "Long Range",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcOBEIBzip9yM_f0LqD_xQI_mTDrOsWN6tFgsHujniS4OXkE09HoyJ6Tf9VSJKi30S96nOiM3Kn1mk3jbi2nw9lAA1m_b7TbxcvuvMSvWQaHO8URpYhxSGHzMhQ0Gv3xHik-elir3ZKvA6GWVDyeFuFVr0HznMHchCpiKNJQplmhNQ3yWN3sBi54NU7J5dGKbq4gn7xaUTO8p2gEjktU6BIkFnRDIoB6yHNKQIFJ2Si8spZqPTgpFQJHGYthVEs6HxvxmnMtSrhH_I",
  },
  {
    title: "EcoDrive Compact",
    tag: "Efficient Commuter",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcMgHz31ZRQS8SOkBwuoZrJK6DvjpYVq6wofTfI8EgpSEpqS-AnSRhFJwGmWWZBbS4txyb4FQYEOVL-o-zzJproGTb8Ip9TrsnlfM5lY_LgSTMoSK7EOsh70PnE_Nnp5WnLlPANpnrZQKwAToJoLWr5vIACxEhYhOWhfrQA6uG1-Nh4N5fXe7Zs4yl4R_2goHIYU5-7M7SrGqDL_1YcIZprEW-EQEvXOcaRXJNd1gna7aOVoxK8MG_JOnScnClbRuaRKoQZLhenK6j",
  },
  {
    title: "EcoDrive Luxe",
    tag: "Luxury Performance",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGAFbe783GVe6uriUAeCD_Dv23ysp2QISEMqveD44q6DzDUX39NTtLIAtYagDdvIh7mXbLdDblgfCGQ7GBkX6LmkgLCz0iVBfEz8w9XVwyhoKceiY7YoQFwOzBvg84JJxvJwMWsr9OhP-V-O1Iayc0HDjGVVl9J-0M_jnG20DsysD2WuXUiERFLP-G0EqZ-PhhG1jowlI4F1MG2F4m_LEz7NDtj1b42atI0Eu69BhJAoqOSqR4n8JKJM0rEUT06oLKtQl74x6g9WQ1",
  },
];

export default function Explore() {
  return (
    <>
      {/* Navbar */}
      <div className="flex flex-col flex-items-center min-h-screen bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white text-center">
      <Navbar />
        {/* Hero Carousel */}
        <Carousel />

        {/* Models Section */}
        <section className="relative bg-background-dark px-6 py-20 text-center md:px-12 lg:px-20">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-white">
            Discover Our Models
          </h2>
          <p className="mb-12 text-lg text-white/70">
            Explore the future of mobility with our cutting-edge electric
            vehicles.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {models.map((model, i) => (
              <ModelCard key={i} {...model} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination />
        </section>

        {/* Footer */}
       
          <Footer />
        
      </div>
     
    </>
  );
}
