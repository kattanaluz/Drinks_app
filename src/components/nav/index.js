import css from "./nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Modal from "react-modal";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Nav() {
  const [state, setState] = useState(false);
  function openModal() {
    setState(true);
  }
  function closeModal() {
    setState(false);
  }

  const navigate = useNavigate();

  const [input, setInput] = useState(undefined);
  function getInputText(e) {
    setInput(e.target.value);
  }

  function onKeyUp(e) {
    if (e.keyCode === 13) {
      closeModal(false);
      navigate(`/results/${input}`);
    }
  }

  return (
    <nav className={css.navBar}>
      <NavLink className={css.name} to="/">
        lemon & mixer
      </NavLink>
      <div className={css.iconsAndButton}>
        <div className={css.linkedinIcon}>
          <Button
            className={css.navSearchBtn}
            onClick={openModal}
            text={<HiSearch className={css.icon} />}
          />
          <a
            href="https://www.linkedin.com/in/kattana-luz-6b1000124/"
            target="_blank"
          >
            <AiFillLinkedin className={css.icon} />
          </a>
        </div>
        <div className={css.gitIcon}>
          <a href="https://github.com/kattanaluz" target="_blank">
            <AiFillGithub className={css.icon} />
          </a>
        </div>
      </div>
      <Modal isOpen={state} className={css.modalNav}>
        <div className={css.inputAndButton}>
          <Button
            className={css.closeModalNavBtn}
            onClick={closeModal}
            text={<GrFormClose className={css.closeModalNavIcon} />}
          />

          <Input
            inputClassName={css.navInput}
            onChange={getInputText}
            onKeyUp={onKeyUp}
            placeholder="Search a recipe"
          />
        </div>
      </Modal>
    </nav>
  );
}
