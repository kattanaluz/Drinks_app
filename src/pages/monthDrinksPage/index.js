import useFetch from "../../hooks/fetch";
import Recipe from "../../components/recipe";
import css from "./monthDrinksPage.module.css";

export default function MonthlyCocktail() {
  const date = new Date();
  const month = date.getMonth();

  const cocktails = [
    "winter rita",
    "moscow  mule",
    "french martini",
    "pink moon",
    "vodka tonic",
    "Raspberry Julep",
    "spritz",
    "lemouroudji",
    "almond joy",
    "greyhound",
    "pegu club",
    "Spice 75",
  ];
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthTexts = [
    "New year, new you, new recipes to try.",
    "Because we all need something to get us through Valentine’s Day and beyond.",
    "Show winter out the door and usher in spring with this delicious drink.",
    "Fresh, fruity and floral, this drink is perfect for spring.",
    "Fruity and fresh, this cocktail is perfect for the warming weather.",
    "Summer’s here, and this is the drink recipe we think you want right now.",
    "Enjoy the summer weather with this fresh cocktail.",
    "Cool down with these delicious summer drinks.",
    "They’ll see you through the change of seasons.",
    "The leaves have officially turned color, so try this two ingredients cocktail.",
    "Put the best of fall’s flavors right into your glass with this cocktail.",
    "This drink will make your festive season even more fun.",
  ];
  const monthlyCocktail = cocktails[month];

  const [data] = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${monthlyCocktail}`
  );

  if (data && data.drinks && data.drinks.length > 0) {
    return (
      <>
        <div className={css.monthlyRecipeWrapper}>
          <h1 className={css.h1Header}>{`${monthList[month]} Cocktail`}</h1>
          <div className={css.divisionLine}></div>
          <h2 className={css.h2Header}>{`${monthTexts[month]}`}</h2>
        </div>
        <Recipe data={data.drinks[0]} />
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
}
