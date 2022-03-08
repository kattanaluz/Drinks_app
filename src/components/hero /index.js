import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/homePage";
import ResultsPage from "../../pages/resultsPage";
import RecipePage from "../../pages/recipePage";

function Hero() {
  return (
    <div className="bg-blueWhite flex-grow overflow-y-scroll">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results/:text" element={<ResultsPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default Hero;
