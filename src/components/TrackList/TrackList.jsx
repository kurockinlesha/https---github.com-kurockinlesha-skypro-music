import * as S from "./TrackList.style";
import { Tracks } from "../TrackListItem/Tracks";
import { TrackListTitle } from "../TracklistTitle/TrackListTitle";
import { TrackListFilter } from "../TrackListFilter/TrackListFilter";

export function TrackList({ isLoading }) {
  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.centerblockH2 className="centerblock__h2">Треки</S.centerblockH2>
      <TrackListFilter />
      <S.centerblockContent>
        <TrackListTitle />
        <Tracks isLoading={isLoading} />
      </S.centerblockContent>
    </S.MainCenterBlock>
  );
}