import { useState, useEffect } from "react";
import * as S from "./main.style";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TrackList } from "../../components/TrackList/TrackList";

export function Main() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="App">
      <S.wrapper>
        <S.container>
          <S.main>
            <NavMenu />
            <TrackList isLoading={isLoading} />
            <Sidebar isLoading={isLoading} />
          </S.main>
          <AudioPlayer isLoading={isLoading} />
          <footer className="footer" />
        </S.container>
      </S.wrapper>
    </div>
  );
}
