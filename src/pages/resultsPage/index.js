import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/fetch";
import css from "./recipePage.module.css";
import RecipeResults from "../../components/recipeResults";

export default function ResultsPage() {
  const params = useParams();
  const { text } = params;

  const [data] = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
  );

  if (data && data.drinks && data.drinks.length > 0) {
    let content = [];
    for (let i = 0; i < data.drinks.length; i++) {
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
