import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/homePage";
import ResultsPage from "../../pages/resultsPage";
import RecipePage from "../../pages/recipePage";
import MonthCocktail from "../../pages/monthDrinksPage";
import css from "./hero.module.css";

export default function Hero({ className }) {
  return (
    <div className={className}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results/:text" element={<ResultsPage />} />
        <Route path="/recipe/:recipe" element={<RecipePage />} />
        <Route path="/cocktail-of-the-month/" element={<MonthCocktail />} />
      </Routes>
    </div>
  );
}
