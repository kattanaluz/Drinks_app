import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/homePage";
import RecipePage from "../../pages/recipePage";

function Hero() {
  return (
    <div className="bg-blueWhite flex-grow overflow-y-scroll">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:text" element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default Hero;
