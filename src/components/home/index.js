import Image from "../image";
import Input from "../input";
import landImage from "./drink.jpg";
import Button from "../button";
import css from "./home.module.css";

export default function HomePage({ onClick, onChange, onKeyUp }) {
  const buttonText = "search";
  const inputText = "Type here";

  return (
    <div>
      <div className={css.ImageContainer}>
        <Image src={landImage} alt={"cocktail"} className={css.landPageImage} />
        <h1 className={css.landPageH1}>Find a drink recipe</h1>
        <div className={css.searchAndButtonContainer}>
          <Input
            placeholder={inputText}
            divClassName={css.divInput}
            inputClassName={css.searchInput}
            onChange={onChange}
            onKeyUp={onKeyUp}
          />
          <Button
            text={buttonText}
            className={css.searchButton}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
