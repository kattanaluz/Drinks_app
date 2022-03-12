import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/homePage";
import ResultsPage from "../../pages/resultsPage";
import RecipePage from "../../pages/recipePage";
import MonthCocktail from "../../pages/monthDrinksPage";

export default function Hero() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results/:text" element={<ResultsPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/cocktail-of-the-month/" element={<MonthCocktail />} />
      </Routes>
    </div>
  );
}
