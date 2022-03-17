import css from "./recipeResults.module.css";
import Image from "../image";
import Button from "../button";
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
        <Button
          className={css.openModalBtn}
          onClick={() => navigate(`/recipe/${data.idDrink}`)}
          text="see recipe"
        />
      </div>
    </div>
  );
}
