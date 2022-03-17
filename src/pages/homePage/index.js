import css from "./home.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/fetch";
import Search from "../../components/search";
import RecipeModal from "../../components/recipeModal";
import Section from "../../components/sections";
import Footer from "../../components/footer";

export default function HomePage() {
  const navigate = useNavigate();

  const [input, setInput] = useState("mojito");
  function getInputText(e) {
    setInput(e.target.value);
  }

  const [text, setText] = useState("negroni");
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

  const [data] = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
  );

  const [options] = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
  );

  if (data && data.drinks && data.drinks.length > 0) {
    let content = [];
    for (let i = 0; i < data.drinks.length; i++) {
      content.push(<RecipeModal data={data.drinks[i]} key={i} />);
    }
    return (
      <div>
        <Search
          onClick={handleClick}
          onChange={getInputText}
          onKeyUp={onKeyUp}
          options={options}
        />
        <Section />
        <h2
          className={css.h2Title}
        >{`${text.toLocaleUpperCase()} SELECTION`}</h2>
        <div className={css.headingLine}></div>
        <p
          className={css.discoverParagraph}
        >{`Check out our selection of ${text} recipes`}</p>
        <div className={css.recipeWrapper}>{content}</div>
        <Footer />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
