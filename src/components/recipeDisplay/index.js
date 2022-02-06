import H2 from "../h2";
import Paragraph from "../p";
import css from "./recipe.module.css";

export default function RecipeDisplay({ data }) {
  return (
    <div className={css.recipeWrapper}>
      <H2 text={data.strDrink} h2ClassName={css.recipeH2} />
      <div className={css.ingredients}>
        <Paragraph text={"Ingredients"} className={css.ingredientsParagraph} />
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
      <Paragraph className={css.methodParagraph} text={"Method"} />
      <Paragraph text={data.strInstructions} />
    </div>
  );
}
