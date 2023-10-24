import { useState } from "react";
import * as S from "./NavMenu.styles"
import { NavMenuItems } from "../NavMenuItems/NavMenuItems";

export function NavMenu() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <S.mainNav>
      <S.navLogo>
        <S.logoImage src="img/logo.png" alt="logo" />
      </S.navLogo>
      <S.navBurger type="button" onClick={toggleVisibility}>
        <S.burgerLine />
        <S.burgerLine />
        <S.burgerLine />
      </S.navBurger>
      {visible && (
        <S.navMenu>
          <S.menuList>
            <NavMenuItems item={{ link: "/", text: "Главное" }} />
            <NavMenuItems item={{ link: "/favorites", text: "Мой плейлист" }} />
            <NavMenuItems item={{ link: "/signIn", text: "Выйти" }} />
          </S.menuList>
        </S.navMenu>
      )}
    </S.mainNav>
  );
}