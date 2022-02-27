import Home from "../home";
import RecipeDisplay from "../recipeDisplay";
import { useState, useEffect } from "react";
import css from "./App.module.css";

function App() {
  const [input, setInput] = useState();
  function getInputText(e) {
    setInput(e.target.value);
  }

  const [text, setText] = useState("mojito");
  function handleClick() {
    setText(input);
  }
  function onKeyUp(e) {
    if (e.keyCode === 13) {
      setText(input);
    }
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      const data = await response.json();
      // console.log(data);
      if (data && data.drinks && data.drinks.length > 0) {
        const drinkRecipe = data;
        setData(drinkRecipe);
      } else {
        setData(null);
      }
      console.log(data);
    }
    getData();
  }, [text]);

  if (data && data.drinks && data.drinks.length > 0) {
    var rows = [];
    for (var i = 0; i < data.drinks.length; i++) {
      rows.push(<RecipeDisplay data={data.drinks[i]} key={i} />);
    }
    return (
      <div className="App">
        <Home onClick={handleClick} onChange={getInputText} onKeyUp={onKeyUp} />
        {rows}
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

export default App;
