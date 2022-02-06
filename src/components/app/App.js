import "./App.css";
import Home from "../home";
import RecipeDisplay from "../recipeDisplay";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState();
  function getInputText(e) {
    setInput(e.target.value);
  }

  const [text, setText] = useState();
  function handleEnter(e) {
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
      setData(data.drinks[0]);
      console.log(data.drinks[0]);
    }
    getData();
  }, [text]);

  return (
    <div className="App">
      <Home />
      <RecipeDisplay />
    </div>
  );
}

export default App;
