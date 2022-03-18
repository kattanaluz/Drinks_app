import Image from "../image";
import brandy from "./brandy.jpg";
import bourbon from "./bourbon.jpg";
import gin from "./gin.jpg";
import css from "./spirits.module.css";
import cachaca from "./cachaca.jpg";
import rum from "./run.jpg";
import tequila from "./tequila.jpg";
import vodka from "./vodka.png";
import whiskey from "./whiskey.jpg";
import { NavLink } from "react-router-dom";

export default function SpiritSelection() {
  return (
    <div>
      <div className={css.spiritsContainer}>
        <h1 className={css.spiritResultsH1}>SPIRITS</h1>
        <h2 className={css.spiritResultsH2}>
          The world of spirits is diverse and delightful, because of that we
          created a selection of spirits and cocktail recipes.
        </h2>
        <div className={css.spiritsWrapper}>
          <div>
            <Image src={brandy} className={css.spiritImage} />
            <NavLink to="/spirit/brandy" className={css.spiritLink}>
              Brandy
            </NavLink>
          </div>
          <div>
            <Image src={bourbon} className={css.spiritImage} />
            <NavLink to="/spirit/bourbon" className={css.spiritLink}>
              Bourbon
            </NavLink>
          </div>
          <div>
            <Image src={cachaca} className={css.spiritImage} />
            <NavLink to="/spirit/cachaca" className={css.spiritLink}>
              Cachaça
            </NavLink>
          </div>{" "}
          <div>
            <Image src={gin} className={css.spiritImage} />
            <NavLink to="/spirit/gin" className={css.spiritLink}>
              Gin
            </NavLink>
          </div>
          <div>
            <Image src={rum} className={css.spiritImage} />
            <NavLink to="/spirit/rum" className={css.spiritLink}>
              Rum
            </NavLink>
          </div>
          <div>
            <Image src={tequila} className={css.spiritImage} />
            <NavLink to="/spirit/tequila" className={css.spiritLink}>
              Tequila
            </NavLink>
          </div>
          <div>
            <Image src={vodka} className={css.spiritImage} />
            <NavLink to="/spirit/vodka" className={css.spiritLink}>
              Vodka
            </NavLink>
          </div>
          <div>
            <Image src={whiskey} className={css.spiritImage} />
            <NavLink to="/spirit/whiskey" className={css.spiritLink}>
              Whiskey
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
