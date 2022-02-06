import Image from "../../components/image";
import H1 from "../h1";
import H2 from "../h2";
import landImage from "./roxo.png";
import Button from "../../components/button";
import css from "./home.module.css";

export function Home() {
  const landText = `Find out hundreds of delicious cocktail recipes from expert bartenders around the world.`;
  const buttonText = `search a recipe`;

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
      <Button text={buttonText} className={css.homeButton} />
    </div>
  );
}
