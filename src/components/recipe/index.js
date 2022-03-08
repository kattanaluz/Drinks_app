import css from "./recipe.module.css";
import Image from "../image";

export default function Recipe({ data }) {
  return (
    <>
      <h2 className={css.recipeH2}>{data.strDrink}</h2>
      <div className={css.division}></div>
      <div className={css.recipe}>
        <div className={css.recipeHeader}>
          <Image src={data.strDrinkThumb} className={css.drinkImage} />
        </div>
        <div className={css.recipeWrapper}>
          <p className={css.recipeGlass}>Serve in a {data.strGlass}</p>
          <p className={css.recipeType}>{data.strAlcoholic}</p>
          <div className={css.ingredients}>
            <p className={css.ingredientsParagraph}>Ingredients</p>
            <ul>
              <li>
                {data.strMeasure1} {data.strIngredient1}
              </li>
              <li>
                {data.strMeasure2} {data.strIngredient2}
              </li>
              <li>
                {data.strMeasure3} {data.strIngredient3}
              </li>
              <li>
                {data.strMeasure4} {data.strIngredient4}
              </li>
              <li>
                {data.strMeasure5} {data.strIngredient5}
              </li>
              <li>
                {data.strMeasure6} {data.strIngredient6}
              </li>
              <li>
                {data.strMeasure7} {data.strIngredient7}
              </li>
              <li>
                {data.strMeasure8} {data.strIngredient8}
              </li>
              <li>
                {data.strMeasure9} {data.strIngredient9}
              </li>
              <li>
                {data.strMeasure10} {data.strIngredient10}
              </li>
            </ul>
          </div>
          <p className={css.methodParagraph}>Method</p>
          <p> {data.strInstructions} </p>
        </div>
      </div>
    </>
  );
}
