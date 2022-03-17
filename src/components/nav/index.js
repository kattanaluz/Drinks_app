import css from "./nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Modal from "react-modal";

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
      <Button
        className={css.navSearchBtn}
        onClick={openModal}
        text={<HiSearch className={css.searchIcon} />}
      />
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
            placeholder="Search"
          />
        </div>
      </Modal>
    </nav>
  );
}
