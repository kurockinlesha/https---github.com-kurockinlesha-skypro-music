import { useEffect, useState } from "react";
import uniq from "lodash/uniq";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./TrackListFilter.style";
import { TrackListFilterCategory } from "../TrackListFilterCategory/TrackListFilterCategory";
import { setFilterPlaylist } from "../../store/slices/tracksSlice";
import { filtersPlaylistSelector } from "../../store/selectors/tracks";

export function TrackListFilter({ selectedArrListFilter, currentPage }) {
  const dispatch = useDispatch();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
  const selectedFiltersPlaylist = useSelector(filtersPlaylistSelector);

  useEffect(() => {
    console.log("author filter: ", selectedFiltersPlaylist?.authors);
  }, [selectedFiltersPlaylist?.authors]);

  useEffect(() => {
    console.log("genres filter: ", selectedFiltersPlaylist?.genres);
  }, [selectedFiltersPlaylist?.genres]);

  return (
    <S.centerblockFilter>
      <S.filterDiv>
        <S.filterTitle>Искать по:</S.filterTitle>
        <TrackListFilterCategory
          nameCategory="исполнителю"
          numberSelectedValues={selectedFiltersPlaylist?.authors.length}
          content={uniq(selectedArrListFilter?.map((track) => track?.author)).map((author) => (
            <S.filterItem
              key={author}
              onClick={() => {
                dispatch(setFilterPlaylist({ authors: author }));
              }}
              $isSelected={selectedFiltersPlaylist?.authors.includes(author)}
            >
              {author}
            </S.filterItem>
          ))}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
        />
        {currentPage !== "Category" && (
          <TrackListFilterCategory
            nameCategory="жанру"
            isActiveCategory={activeCategoryFilter}
            setActiveCategory={setActiveCategoryFilter}
            numberSelectedValues={selectedFiltersPlaylist?.genres.length}
            content={uniq(selectedArrListFilter?.map((track) => track.genre)).map((genre) => (
              <S.filterItem
                key={genre}
                onClick={() => {
                  dispatch(setFilterPlaylist({ genres: genre }));
                }}
                $isSelected={selectedFiltersPlaylist?.genres.includes(genre)}
              >
                {genre}
              </S.filterItem>
            ))}
          />
        )}
      </S.filterDiv>

      <S.filterDiv>
        <S.filterTitle>Сортировка:</S.filterTitle>
        <TrackListFilterCategory
          nameCategory={selectedFiltersPlaylist?.sort}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
          numberSelectedValues={
            selectedFiltersPlaylist?.sort === "По умолчанию" ? 0 : 1
          }
          content={["По умолчанию", "Сначала новые", "Сначала старые"].map(
            (item) => (
              <S.filterItem
                key={item}
                onClick={() => {
                  dispatch(setFilterPlaylist({ sort: item }));
                  console.log("year sort: ", item);
                }}
                $isSelected={selectedFiltersPlaylist?.sort.includes(item)}
              >
                {item}
              </S.filterItem>
            )
          )}
        />
      </S.filterDiv>
    </S.centerblockFilter>
  );
}
