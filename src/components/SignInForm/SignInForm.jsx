import { NavLink, useNavigate } from "react-router-dom";

import * as S from "./SignInForm.style";

export function SignInForm({ onAuthButtonClick }) {
  const navigate = useNavigate();
  return (
    <S.ModalFormLogin action="#">
      <NavLink href="../">
        <S.ModalLogo>
          <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
        </S.ModalLogo>
      </NavLink>
      <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
      <S.ModalInput type="password" name="password" placeholder="Пароль" />
      <S.ModalBtnEnter
        type="button"
        onClick={() => {
          onAuthButtonClick();
          navigate("/", { replace: false });
        }}
      >
        Войти
      </S.ModalBtnEnter>
      <S.ModalBtnSignUp type="button" onClick={() => navigate("/signUp")}>
        Зарегистрироваться
      </S.ModalBtnSignUp>
    </S.ModalFormLogin>
  );
}