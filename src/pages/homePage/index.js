import Home from "../../components/home";
import { useState, useEffect } from "react";
import Recipe from "../../components/recipe";
import css from "./home.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const [text, setText] = useState("gin");

  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
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

  const [input, setInput] = useState();
  function getInputText(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  function handleClick() {
    setText(input);
    navigate(`/recipe/${input}`);
  }

  function onKeyUp(e) {
    if (e.keyCode === 13) {
      setText(input);
      navigate(`/recipe/${input}`);
    }
  }
  if (data && data.drinks && data.drinks.length > 0) {
    var content = [];
    for (var i = 0; i < data.drinks.length; i++) {
      content.push(<Recipe data={data.drinks[i]} key={i} />);
    }
    return (
      <div>
        <Home onClick={handleClick} onChange={getInputText} onKeyUp={onKeyUp} />
        <div className={css.headingLine}></div>
        <h2
          className={css.h2Title}
        >{`Check out our selection of ${text} recipes`}</h2>
        <div className={css.recipeWrapper}>{content}</div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Home onClick={handleClick} onChange={getInputText} onKeyUp={onKeyUp} />
        <p className={css.noRecipeFound}>
          OOPS! Your search for {text} did not return any results. Please search
          for a different term.
        </p>
      </div>
    );
  }
}
