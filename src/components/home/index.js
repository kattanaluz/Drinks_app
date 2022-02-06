import Image from "../image";
import H1 from "../h1";
import H2 from "../h2";
import Input from "../input";
import landImage from "./roxo.png";
import Button from "../button";
import css from "./home.module.css";

export default function Home() {
  const landText =
    "Find out hundreds of delicious cocktail recipes from expert bartenders around the world.";
  const buttonText = "search a recipe";
  const inputText = "Type here to search a drink recipe";

  return (
    <div>
      <div className={css.h1AndImageContainer}>
        <H1
          h1ClassName={css.landPageH1}
          divH1ClassName={css.divH1}
          text="Fancy a drink?"
        />
        <Image
          src={landImage}
          alt={"Fancy a drink?"}
          className={css.landPageImage}
        />
      </div>
      <H2
        text={landText}
        h2ClassName={css.landPageH2}
        divH2ClassName={css.divH2}
      />
      <div className={css.searchAndButtonContainer}>
        <Input
          placeholder={inputText}
          divClassName={css.divInput}
          inputClassName={css.searchInput}
        />
        <Button text={buttonText} className={css.homeButton} />
      </div>
    </div>
  );
}
