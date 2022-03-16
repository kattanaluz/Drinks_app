import Image from "../image";
import Input from "../input";
import landImage from "./drink.jpg";
import Button from "../button";
import css from "./search.module.css";

export default function search({ onClick, onChange, onKeyUp, options }) {
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
            list="data"
          />
          {options ? (
            <datalist id="data">
              {options.drinks.map((item, index) => {
                return <option value={item.strDrink} key={index} />;
              })}
            </datalist>
          ) : null}
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
