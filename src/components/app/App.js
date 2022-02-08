import "./App.css";
import Home from "../home";
import RecipeDisplay from "../recipeDisplay";
import { useState, useEffect } from "react";

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
      const drinkRecipe = data.drinks[0];
      setData(drinkRecipe);
    }
    getData();
  }, [text]);

  return (
    <div className="App">
      <Home onClick={handleClick} onChange={getInputText} onKeyUp={onKeyUp} />
      {!data ? "" : <RecipeDisplay data={data} />}
    </div>
  );
}

export default App;
