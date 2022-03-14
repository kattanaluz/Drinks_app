import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./recipePage.module.css";
import RecipeResults from "../../components/recipeResults";
import { NavLink } from "react-router-dom";

export default function ResultsPage() {
  const params = useParams();
  const { text } = params;

  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      const data = await response.json();
      if (data && data.drinks && data.drinks.length > 0) {
        const drinkRecipe = data;
        setData(drinkRecipe);
      } else {
        setData(null);
      }
    }
    getData();
  }, [text]);

  if (data && data.drinks && data.drinks.length > 0) {
    var content = [];
    for (var i = 0; i < data.drinks.length; i++) {
      content.push(<RecipeResults data={data.drinks[i]} key={i} />);
    }
    return (
      <>
        <p className={css.result}>
          {`Your search returned ${content.length} results:`}
        </p>
        <div className={css.recipeWrapper}>{content}</div>
      </>
    );
  } else {
    return (
      <div>
        <p className={css.noRecipeFound}>
          OOPS...
          <br />
          {`Your search for "${text}" did not return any results.`} Please
          <span className={css.tryAgain}> search for a different</span> term or
          click{" "}
          <NavLink className={css.links} to="/recipe/random.php">
            here
          </NavLink>{" "}
          and find a delicious drinks recipe.
        </p>
      </div>
    );
  }
}
