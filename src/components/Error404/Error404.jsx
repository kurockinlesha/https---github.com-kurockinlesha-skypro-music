import { useNavigate } from "react-router-dom";
import * as S from "./Error404.style";
import * as Styled from "../TrackList/TrackList.style";

export function Error404() {
  const navigate = useNavigate();

  return (
    <Styled.MainCenterBlock>
      <Styled.CenterBlockSearch>
        <Styled.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </Styled.SearchSvg>
        <Styled.SearchText type="search" placeholder="Поиск" name="search" />
      </Styled.CenterBlockSearch>

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
        <S.notFoundBlockButton type="button" onClick={() => navigate("/")}>
          Вернуться на главную
        </S.notFoundBlockButton>
      </S.notFoundBlock>
    </Styled.MainCenterBlock>
  );
}
