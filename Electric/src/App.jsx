import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Technology from "./pages/Technology";
import PreOrder from "./pages/PreOrder";
import Features from "./pages/Features";
import DrivinngExperience from "./pages/DrivingExperience";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/driving-experience" element={<DrivinngExperience />} />
      <Route path="/features" element={<Features />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/preorder" element={<PreOrder />} />
      <Route path="/about" element={<About />} />


    </Routes>
  );
}
