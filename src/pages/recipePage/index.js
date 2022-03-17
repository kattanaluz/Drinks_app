import { useParams } from "react-router-dom";
import useFetch from "../../hooks/fetch";
import Recipe from "../../components/recipe";

export default function RecipePage() {
  const params = useParams();
  const { recipe } = params;

  let URL = undefined;

  function definingURL() {
    if (recipe === "random.php") {
      URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    } else {
      URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipe}`;
    }
  }
  definingURL();

  const [data] = useFetch(URL);

  if (data && data.drinks && data.drinks.length > 0) {
    return <Recipe data={data.drinks[0]} />;
  } else {
    return <p>Loading...</p>;
  }
}
