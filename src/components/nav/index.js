import css from "./nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={css.navBar}>
      {/*       <div>
        <a>cocktail of the day</a>
      </div> */}
      <div>
        <NavLink className={css.links} to="/recipe/random.php">
          Surprise me!
        </NavLink>
      </div>
    </nav>
  );
}
