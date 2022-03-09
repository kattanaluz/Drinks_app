import { useState, useEffect } from "react";
import Recipe from "../../components/recipe";

export default function MonthCocktail() {
  const date = new Date();
  const month = date.getMonth();

  const cocktailsPerMonth = {
    january: "winter rita",
    february: "moscow  mule",
    march: "french martini",
    april: "pink moon",
    may: "americo",
    june: "Raspberry Julep",
    july: "spritz",
    august: "lemouroudji",
    september: "almond joy",
    october: "greyhound",
    november: "pegu club",
    december: "casino",
  };

  const cocktail = cocktailsPerMonth[month];

  const [recipe, setRecipe] = useState(undefined);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=spritz`
      );
      const data = await response.json();
      console.log(data.drinks);
      setRecipe(data.drinks[0]);
      console.log(recipe);
    }
    getData();
  }, []);

  if (recipe) {
    return <Recipe data={recipe} />;
  } else {
    return <p>Loading...</p>;
  }
}
