import css from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={css.navBar}>
      <div>
        <a>Cocktail of the day</a>
      </div>
      <div>
        <a>Surprize me!</a>
      </div>
    </nav>
  );
}
