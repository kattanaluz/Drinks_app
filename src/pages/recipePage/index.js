import Recipe from "../../components/recipe";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipePage() {
  const params = useParams();
  const { recipe } = params;

  console.log(recipe);
  const [dataRecipe, setDataRecipe] = useState(undefined);

  useEffect(() => {
    async function getData() {
      console.log("hello");
      if (recipe === "random.php") {
        const responseRandom = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        const dataRandom = await responseRandom.json();
        if (dataRandom && dataRandom.drinks && dataRandom.drinks.length > 0) {
          const drinkRecipeRandom = dataRandom;
          console.log(drinkRecipeRandom);
          setDataRecipe(drinkRecipeRandom.drinks[0]);
          console.log(dataRecipe);
        }
      } else {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipe}`
        );
        const data = await response.json();
        if (data && data.drinks && data.drinks.length > 0) {
          setDataRecipe(data.drinks[0]);
        }
      }
    }
    getData();
  }, [recipe]);

  if (dataRecipe) {
    return <Recipe data={dataRecipe} />;
  } else {
    return <p>Loading...</p>;
  }
}
