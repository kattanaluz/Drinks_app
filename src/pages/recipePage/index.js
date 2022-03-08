import Recipe from "../../components/recipe";
import css from "./recipePage.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipePage() {
  const params = useParams();
  let id = 0;
  id = params.id;

  console.log(id);
  const [recipe, setRecipe] = useState(undefined);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      console.log(data.drinks);
      setRecipe(data.drinks[0]);
      console.log(recipe);
    }
    getData();
  }, [id]);

  if (recipe) {
    return <Recipe data={recipe} />;
  } else {
    return <p>Loading...</p>;
  }
}
