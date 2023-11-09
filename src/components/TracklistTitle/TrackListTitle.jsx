import * as S from "./TrackListTitle.style";

export function TrackListTitle() {
    return (
        <S.contentTitle>
          <S.col01>Трек</S.col01>
          <S.col02>ИСПОЛНИТЕЛЬ</S.col02>
          <S.col03>АЛЬБОМ</S.col03>
          <S.col04>
            <S.playlistTitleSvg alt="time">
              <use xlinkHref="../img/icon/sprite.svg#icon-watch" />
            </S.playlistTitleSvg>
          </S.col04>
        </S.contentTitle>
    )
}