import { NavLink, useNavigate } from "react-router-dom";
import * as S from "../SignInForm/SignInForm.style";

export function SignUpForm() {
  const navigate = useNavigate();
  return (
    <S.ModalFormLogin action="#">
      <NavLink href="../">
        <S.ModalLogo>
          <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
        </S.ModalLogo>
      </NavLink>
      <S.ModalInputLogin type="text" name="login" placeholder="Почта" />
      <S.ModalInputLogin type="password" name="password" placeholder="Пароль" />
      <S.ModalInput
        type="password"
        name="login"
        placeholder="Повторите пароль"
      />
      <S.ModalBtnEnter type="button" onClick={() => navigate("/signIn")}>
        Зарегистрироваться
      </S.ModalBtnEnter>
    </S.ModalFormLogin>
  );
}