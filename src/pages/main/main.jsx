import { useState, useEffect } from "react";
import * as S from "./main.style";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TrackList } from "../../components/TrackList/TrackList";
import { getTracksAll } from "../../api/Api";

export function Main() {
  const [isLoading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const handleCurrentTrack = (track) => setCurrentTrack(track);
  console.log(currentTrack);
  const [loadingTracksError, setLoadingTracksError] = useState(null);

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
        setTracks(track);
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
            <AudioPlayer
              isLoading={isLoading}
              currentTrack={currentTrack}
            />
          )}
          <footer className="footer" />
        </S.container>
      </S.wrapper>
    </div>
  );
}
