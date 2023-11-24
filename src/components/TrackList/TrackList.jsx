import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as S from "./TrackList.style";
import { Tracks } from "../TrackListItem/Tracks";
import { TrackListTitle } from "../TracklistTitle/TrackListTitle";
import { TrackListFilter } from "../TrackListFilter/TrackListFilter";
import {
  shuffledSelector,
  currentPlaylistSelector,
  shuffledAllTracksSelector,
  currentPageSelector,
  allTracksSelector,
  favouritesTracksSelector,
  categoryArrSelector,
  filtersPlaylistSelector,
} from "../../store/selectors/tracks";
import {
  setCurrentTrack,
  setCurrentPlaylist,
  toggleShuffleTracks,
  setFilterPlaylist,
} from "../../store/slices/tracksSlice";

export function TrackList({ title, error, isLoading, tracks, isFavorites }) {
  const dispatch = useDispatch();
  const shuffled = useSelector(shuffledSelector);
  const allTracks = useSelector(allTracksSelector);
  const categoryArr = useSelector(categoryArrSelector);
  const favouritesTracks = useSelector(favouritesTracksSelector);
  const currentPlaylist = useSelector(currentPlaylistSelector);
  const shuffledAllTracks = useSelector(shuffledAllTracksSelector);
  const currentPage = useSelector(currentPageSelector);
  const arrayTracksAll = shuffled ? shuffledAllTracks : currentPlaylist;
  const filtersPlaylist = useSelector(filtersPlaylistSelector);


  useEffect(() => {
    dispatch(setFilterPlaylist({ sort: "По умолчанию" }));
    dispatch(setFilterPlaylist({ search: "" }));
    dispatch(setFilterPlaylist({ authors: "" }));
    dispatch(setFilterPlaylist({ genres: "" }));
  }, [title]);

  const handleCurrentTrack = (track) => {
    if (!filtersPlaylist.isActiveSort && !filtersPlaylist?.isActiveAuthors) {
      if (currentPage === "Main") {
        dispatch(setCurrentPlaylist(allTracks));
      }
      if (currentPage === "Favourites") {
        dispatch(setCurrentPlaylist(favouritesTracks));
      }
      if (currentPage === "Category") {
        dispatch(setCurrentPlaylist(categoryArr));
      }
    } else {
      dispatch(setCurrentPlaylist(filtersPlaylist.filterTracksArr));
    }

    if (shuffled) {
      dispatch(toggleShuffleTracks({ shuffled }));
    }

    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack({ track, indexCurrentTrack }));
    console.log(track);
  };

  return (
    <>
      <S.centerblockH2 className="centerblock__h2">
        {title || "Треки"}
      </S.centerblockH2>
      <TrackListFilter
        selectedArrListFilter={
          // eslint-disable-next-line no-nested-ternary
          currentPage === "Main"
            ? allTracks
            : currentPage === "Favourites"
            ? favouritesTracks
            : categoryArr
        }
        currentPage={currentPage}
      />
      <S.centerblockContent>
        <TrackListTitle />
        {error ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (
          <S.contentPlaylist>
            {isLoading &&
              new Array(20)
                .fill()
                .map(() => (
                  <Tracks key={Math.random()} isLoading={isLoading} />
                ))}
            {tracks &&
              tracks.map((track) => (
                <S.playlistItem
                  key={track.id}
                  onClick={() => handleCurrentTrack(track)}
                >
                  <Tracks
                    key={track.id}
                    onClick={() => handleCurrentTrack(track)}
                    isLoading={isLoading}
                    track={track}
                    tracks={tracks}
                    isFavorites={isFavorites}
                  />
                </S.playlistItem>
              ))}
          </S.contentPlaylist>
        )}
      </S.centerblockContent>
    </>
  );
}
