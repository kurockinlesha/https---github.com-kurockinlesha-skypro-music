import { useDispatch, useSelector } from "react-redux";
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
} from "../../store/selectors/tracks";
import {
  setCurrentTrack,
  setCurrentPlaylist,
  toggleShuffleTracks,
} from "../../store/slices/tracksSlice";

export function TrackList({ title, error, isLoading, tracks, isFavorites }) {
  const dispatch = useDispatch();
  const shuffled = useSelector(shuffledSelector);
  const allTracks = useSelector(allTracksSelector);
  const favouritesTracks = useSelector(favouritesTracksSelector);
  const currentPlaylist = useSelector(currentPlaylistSelector);
  const shuffledAllTracks = useSelector(shuffledAllTracksSelector);
  const currentPage = useSelector(currentPageSelector);
  const arrayTracksAll = shuffled ? shuffledAllTracks : currentPlaylist;

  const handleCurrentTrack = (track) => {
    // if (shuffled) {
    if (currentPage === "Main") {
      dispatch(setCurrentPlaylist(allTracks));
    }
    if (currentPage === "Favourites") {
      dispatch(setCurrentPlaylist(favouritesTracks));
    }
    // }

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
      <TrackListFilter />
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
                    isFavorites={
                      // title === "Мои треки"
                      //   ? true
                      //   : !!(track.stared_user ?? []).find(
                      //       (user) => user.id === authID
                      //     )
                      isFavorites

                      // Boolean(track?.stared_user?.find((user) => user.id === authID))
                    }
                  />
                </S.playlistItem>
              ))}
          </S.contentPlaylist>
        )}
      </S.centerblockContent>
    </>
  );
}
