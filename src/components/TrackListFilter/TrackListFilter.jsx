import { useState } from "react";
import * as S from "./TrackListFilter.style";
import { TrackListFilterCategory } from "../TrackListFilterCategory/TrackListFilterCategory";
import arrTracks from "../../utils/dataTracks";

export function TrackListFilter() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
  return (
    <S.centerblockFilter>
      <S.filterTitle>Искать по:</S.filterTitle>
      <TrackListFilterCategory
        nameCategory="исполнителю"
        content={arrTracks.map((track) => (
          <S.filterItem key={track.id}>{track.trackAuthor}</S.filterItem>
        ))}
        isActiveCategory={activeCategoryFilter}
        setActiveCategory={setActiveCategoryFilter}
      />
      <TrackListFilterCategory
        nameCategory="году выпуска"
        isActiveCategory={activeCategoryFilter}
        setActiveCategory={setActiveCategoryFilter}
        content={arrTracks.map((track) => (
          <S.filterItem key={track.id}>{track.year}</S.filterItem>
        ))}
      />
      <TrackListFilterCategory
        nameCategory="жанру"
        isActiveCategory={activeCategoryFilter}
        setActiveCategory={setActiveCategoryFilter}
        content={arrTracks.map((track) => (
          <S.filterItem key={track.id}>{track.genre}</S.filterItem>
        ))}
      />
    </S.centerblockFilter>
  );
}