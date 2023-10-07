import * as S from "./login.style";
import { SignInForm } from "../../components/SignInForm/SignInForm";

export function SignIn({ onAuthButtonClick }) {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <SignInForm onAuthButtonClick={onAuthButtonClick} />
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}
