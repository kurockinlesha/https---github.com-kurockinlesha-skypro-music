import * as S from "./login.style";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";

export function SignUp() {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <SignUpForm />
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}