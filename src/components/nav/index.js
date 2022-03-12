import css from "./nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={css.navBar}>
      <NavLink className={css.name} to="/">
        lemon & mixer
      </NavLink>
    </nav>
  );
}
