import { useNavigate } from "react-router-dom";
import * as S from "./Error404.style";

export function Error404() {
  const navigate = useNavigate();

  return (
      <S.MainCenterBlock>
        <S.notFoundBlock>
          <S.notFoundBlockTitle>404</S.notFoundBlockTitle>
          <S.notFoundBlockItem>
            <S.notFoundBlockItemTitle>
              Страница не найдена
            </S.notFoundBlockItemTitle>
            <img src="../img/icon/smile_crying.svg" alt="smile_crying" />
          </S.notFoundBlockItem>
          <S.notFoundBlockText>
            Возможно, она была удалена
            <br /> или перенесена на другой адрес
          </S.notFoundBlockText>
          <S.notFoundBlockButton
            type="button"
            onClick={(() => navigate("/"), { replace: false })}
          >
            Вернуться на главную
          </S.notFoundBlockButton>
        </S.notFoundBlock>
      </S.MainCenterBlock>
  );
}
