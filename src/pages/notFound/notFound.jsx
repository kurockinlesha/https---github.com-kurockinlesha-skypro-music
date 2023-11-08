import * as S from "../main/main.style";
// import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { Error404 } from "../../components/Error404/Error404";

export function NotFound() {
  return (
    <S.wrapper>
      <S.container>
        <S.main>
          <Error404 />
        </S.main>
        {/* <AudioPlayer /> */}
        <footer className="footer" />
      </S.container>
    </S.wrapper>
  );
}
