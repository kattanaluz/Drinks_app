import Image from "../image";
import Input from "../input";
import landImage from "./drink.jpg";
import Button from "../button";
import css from "./search.module.css";

export default function Search({ onClick, onChange, onKeyUp, options }) {
  return (
    <div>
      <div className={css.ImageContainer}>
        <Image src={landImage} alt={"cocktail"} className={css.landPageImage} />
        <h1 className={css.landPageH1}>Find a drink recipe</h1>
        <div className={css.searchAndButtonContainer}>
          <Input
            placeholder={"Type here"}
            divClassName={css.divInput}
            inputClassName={css.searchInput}
            onChange={onChange}
            onKeyUp={onKeyUp}
            list="data"
          />
          {options && options.drinks ? (
            <datalist id="data">
              {options.drinks.map((item, index) => {
                return (
                  <option
                    value={item.strDrink}
                    key={index}
                    className={css.options}
                  />
                );
              })}
            </datalist>
          ) : null}
          <Button
            text={"Search"}
            className={css.searchButton}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
