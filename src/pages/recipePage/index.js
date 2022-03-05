import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./recipePage.module.css";
import Recipe from "../../components/recipe";

export default function RecipePage() {
  const params = useParams();
  const { text } = params;
  console.log(text);

  const [input, setInput] = useState();
  function getInputText(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  const [inputText, setInputText] = useState(text);
  function handleClick() {
    setInputText(input);
  }
  function onKeyUp(e) {
    if (e.keyCode === 13) {
      setInputText(input);
    }
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`
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
      content.push(<Recipe data={data.drinks[i]} key={i} />);
    }
    return <div>{content}</div>;
  } else {
    return (
      <div>
        <p className={css.noRecipeFound}>
          OOPS! Your search for {text} did not return any results. Please search
          for a different term.
        </p>
      </div>
    );
  }
}
