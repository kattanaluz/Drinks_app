import css from "./nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={css.navBar}>
      <NavLink className={css.name} to="/">
        lemon & mixer
      </NavLink>
      {/*    <div>
        <a>cocktail of the day</a>
      </div>
      <div>
        <NavLink className={css.links} to="/results/random.php">
          Surprise me!
        </NavLink> */}
    </nav>
  );
}
