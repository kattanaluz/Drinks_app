import { Routes, Route } from "react-router-dom";
import Home from "../home";
import Recipe from "../recipe";

function Hero() {
  return (
    <div className="bg-blueWhite flex-grow overflow-y-scroll">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default Hero;
