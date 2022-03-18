import useFetch from "../../hooks/fetch";
import { useParams } from "react-router-dom";
import Spirit from "../../components/spirit";
import RecipeModal from "../../components/recipeModal";
import css from "./spiritPage.module.css";

export default function SpiritPage() {
  const params = useParams();
  const { spirit } = params;

  const [spiritData] = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${spirit}`
  );

  let coktailSpirit = spirit;
  function getCaipira() {
    if (spirit === "cachaca") {
      coktailSpirit = "caipirinha";
    }
  }
  getCaipira();

  const [recipeData] = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coktailSpirit}`
  );
  console.log(spiritData, recipeData);

  if (spiritData && recipeData) {
    let content = [];
    for (let i = 0; i < recipeData.drinks.length; i++) {
      content.push(<RecipeModal data={recipeData.drinks[i]} key={i} />);
    }
    return (
      <div className={css.recipeSpiritWrapper}>
        <Spirit data={spiritData} />
        <h2
          className={css.spiritH2}
        >{`${spiritData.ingredients[0].strIngredient} cocktail recipes`}</h2>
        <div className={css.recipeResults}>
          <div className={css.resultsModal}>{content}</div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
