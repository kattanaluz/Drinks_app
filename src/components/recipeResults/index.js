import css from "./recipeResults.module.css";
import Image from "../image";
import { useNavigate } from "react-router-dom";

export default function RecipeResults({ data }) {
  const navigate = useNavigate();

  return (
    <div className={css.recipeResults}>
      <div className={css.recipeHeader}>
        <Image src={data.strDrinkThumb} className={css.drinkImage} />
        <p className={css.recipeType}>{data.strAlcoholic}</p>
        <h2
          className={css.recipeH2}
          onClick={() => navigate(`/recipe/${data.idDrink}`)}
        >
          {data.strDrink}
        </h2>
        <div className={css.division}></div>
        <button
          className={css.openModalBtn}
          onClick={() => navigate(`/recipe/${data.idDrink}`)}
        >
          see recipe
        </button>
      </div>
    </div>
  );
}
