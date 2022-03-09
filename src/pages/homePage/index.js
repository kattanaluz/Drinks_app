import Home from "../../components/home";
import { useState, useEffect } from "react";
import RecipeModal from "../../components/recipeModal";
import css from "./home.module.css";
import { useNavigate } from "react-router-dom";
import Section from "../../components/sections";

export default function HomePage() {
  const navigate = useNavigate();

  const [text, setText] = useState("negroni");

  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      const data = await response.json();
      if (data && data.drinks && data.drinks.length > 0) {
        setData(data);
      } else {
        setData(null);
      }
    }
    getData();
  }, [text]);

  const [input, setInput] = useState();
  function getInputText(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    setText(input);
    navigate(`/results/${input}`);
  }

  function onKeyUp(e) {
    if (e.keyCode === 13) {
      setText(input);
      navigate(`/results/${input}`);
    }
  }
  if (data && data.drinks && data.drinks.length > 0) {
    var content = [];
    for (var i = 0; i < data.drinks.length; i++) {
      content.push(<RecipeModal data={data.drinks[i]} key={i} />);
    }
    return (
      <div className="App">
        <Home onClick={handleClick} onChange={getInputText} onKeyUp={onKeyUp} />
        <Section />
        <h2 className={css.h2Title}>DISCOVER</h2>
        <div className={css.headingLine}></div>
        <p
          className={css.discoverParagraph}
        >{`Check out our selection of ${text} recipes`}</p>
        <div className={css.recipeWrapper}>{content}</div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Home onClick={handleClick} onChange={getInputText} onKeyUp={onKeyUp} />
        <p className={css.noRecipeFound}>
          {`OOPS! Your search for "${text}" did not return any results. Please
          search for a different term.`}
        </p>
      </div>
    );
  }
}
