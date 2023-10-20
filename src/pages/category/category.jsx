import { useParams } from "react-router-dom";
import * as S from "../main/main.style";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { playListArr } from "../../utils/playListArr";

export function Category() {
  const params = useParams();

  const category = playListArr.find(
    (element) => element.id === Number(params.id)
  );

  return (
    <S.wrapper>
      <S.container>
        <S.main>
          <h1>CategoryPage {category.id}</h1>
          <img src={category.img} alt={category.alt} />
        </S.main>
        <AudioPlayer />
        <footer className="footer" />
      </S.container>
    </S.wrapper>
  );
}