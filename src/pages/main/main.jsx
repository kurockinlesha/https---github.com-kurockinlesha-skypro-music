import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./main.style";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TrackList } from "../../components/TrackList/TrackList";
import { getTracksAll } from "../../api/Api";
// eslint-disable-next-line import/no-duplicates
import { setAllTracks } from "../../store/actions/creators/tracks";
import {
  allTracksSelector,
  currentTrackSelector,
  shuffledAllTracksSelector,
  shuffledSelector,
} from "../../store/selectors/tracks";
// eslint-disable-next-line import/no-duplicates
import { setCurrentTrack } from "../../store/actions/creators/tracks";

export function Main() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const shuffled = useSelector(shuffledSelector);
  const tracks = useSelector(allTracksSelector);
  const shuffledAllTracks = useSelector(shuffledAllTracksSelector);
  const arrayTracksAll = shuffled ? shuffledAllTracks : tracks;
  const [loadingTracksError, setLoadingTracksError] = useState(null);
  const currentTrack = useSelector(currentTrackSelector);

  const handleCurrentTrack = (track) => {
    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack(track, indexCurrentTrack));
    console.log(track);
    console.log("indexCurrentTrack: ", indexCurrentTrack);
  };

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    getTracksAll()
      .then((track) => {
        dispatch(setAllTracks(track));
      })
      .catch((error) => {
        setLoadingTracksError(error.message);
      });
  }, []);

  return (
    <div className="App">
      <S.wrapper>
        <S.container>
          <S.main>
            <NavMenu />
            <TrackList
              isLoading={isLoading}
              tracks={tracks}
              handleCurrentTrack={handleCurrentTrack}
              loadingTracksError={loadingTracksError}
            />
            <Sidebar
              isLoading={isLoading}
              loadingTracksError={loadingTracksError}
            />
          </S.main>
          {currentTrack && (
            <AudioPlayer isLoading={isLoading} currentTrack={currentTrack} />
          )}
          <footer className="footer" />
        </S.container>
      </S.wrapper>
    </div>
  );
}