import css from "./section.module.css";
import { NavLink } from "react-router-dom";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import { BiDrink } from "react-icons/bi";
import { GiBeerBottle } from "react-icons/gi";

export default function Section() {
  return (
    <div className={css.sectionWrapper}>
      <h2 className={css.sectionH2}>DRINKS & COCKTAILS </h2>
      <div className={css.divisionLine}></div>
      <p className={css.sectionParagraph}>
        Fancy a drink? Here you can find out hundreds and hundreds of cocktail
        recipes. So, make yourself at home and search for your favorite
        cocktail, or, if you are feeling curious, try our section Surprise me!
        and find out a delicious new cocktail recipe.
      </p>
      <div className={css.sectionOptions}>
        <div className={css.monthlyCocktail}>
          <BsFillCalendarMinusFill className={css.icon} /> <br />
          <NavLink className={css.link} to="/cocktail-of-the-month/">
            Find out our selected cocktail of the month!
          </NavLink>
        </div>
        <div className={css.surprise}>
          <GiBeerBottle className={css.icon} /> <br />
          <NavLink className={css.link} to="/spirits">
            Explore the world of spirits and their cocktails
          </NavLink>
        </div>
        <div className={css.surprise}>
          <BiDrink className={css.icon} /> <br />
          <NavLink className={css.link} to="/recipe/random.php">
            Surprise me! Discover a new cocktail recipe
          </NavLink>
        </div>
      </div>
    </div>
  );
}
