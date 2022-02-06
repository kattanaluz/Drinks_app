import Image from "../../components/image";
import H1 from "../../components/h1";
import landImage from "./land_image.png";
import Button from "../../components/button";
import css from "./home.module.css";

export function Home() {
  const landText = `Thirsty? We have hundreds and hundreds of delicious cocktail recipes from expert bartenders around the world. Make yourself at home and find out a new drink recipe.`;
  const buttonText = `search a recipe`;

  return (
    <div className={css.container}>
      <Image src={landImage} alt={"image"} className={css.landPageImage} />
      <H1
        text={landText}
        h1ClassName={css.landPageH1}
        divH1ClassName={css.divH1}
      />
      <Button text={buttonText} className={css.homeButton} />
    </div>
  );
}
