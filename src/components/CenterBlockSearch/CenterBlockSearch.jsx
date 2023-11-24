import { useDispatch, useSelector } from "react-redux";
import * as S from "./CenterBlockSearch.style";
import { setFilterPlaylist } from "../../store/slices/tracksSlice";
import { filtersPlaylistSelector } from "../../store/selectors/tracks";

export default function CenterBlockSearch() {
  const dispatch = useDispatch();
  const filtersPlaylist = useSelector(filtersPlaylistSelector);

  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        value={filtersPlaylist.search}
        onChange={(e) => {
          dispatch(
            setFilterPlaylist({
              search: e.target.value,
            })
          );

          console.log("e.target.value", e.target.value);
        }}
      />
    </S.CenterBlockSearch>
  );
}
