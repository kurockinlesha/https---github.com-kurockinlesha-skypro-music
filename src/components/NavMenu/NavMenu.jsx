import "./NavMenu.css";
import { useState } from "react";
import { NavMenuItems } from "../NavMenuItems/NavMenuItems";

export function NavMenu() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <button className="nav__burger burger" type="button" onClick={toggleVisibility}>
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </button>
      {visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <NavMenuItems item={{ link: "#", text: "Главное" }} />
            <NavMenuItems item={{ link: "#", text: "Мой плейлист" }} />
            <NavMenuItems item={{ link: "../signin.html", text: "Войти" }} />
          </ul>
        </div>
      )}
    </nav>
  );
}
