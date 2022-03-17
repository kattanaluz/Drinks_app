import css from "./footer.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.infos}>
        <p>Designed and built by Kattana Luz</p>
      </div>
      <div className={css.icons}>
        <div className={css.linkedinIcon}>
          <a
            href="https://www.linkedin.com/in/kattana-luz-6b1000124/"
            target="_blank"
          >
            <AiFillLinkedin className={css.linkLinkedinIcon} />
          </a>
        </div>
        <div className={css.gitIcon}>
          <a href="https://github.com/kattanaluz" target="_blank">
            <AiFillGithub className={css.linkGitIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
