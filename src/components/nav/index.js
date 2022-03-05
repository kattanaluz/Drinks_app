import css from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={css.navBar}>
      <div>
        <a>cocktail of the day</a>
      </div>
      <div>
        <a>surprize me!</a>
      </div>
    </nav>
  );
}
