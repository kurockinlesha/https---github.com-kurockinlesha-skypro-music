// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import * as S from "../main/main.style";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { currentTrackSelector } from "../../store/selectors/tracks";
import CenterBlockSearch from "../../components/CenterBlockSearch/CenterBlockSearch";
import { useGetTracksAllQuery } from "../../servicesQuery/tracks";

export default function Layout() {
  const currentTrack = useSelector(currentTrackSelector);
  const { isError, isLoading } = useGetTracksAllQuery();

  return (
    <div className="App">
      <S.wrapper>
        <S.container>
          <S.main>
            <NavMenu />
            <S.MainCenterBlock>
              <CenterBlockSearch />

              <Outlet />
            </S.MainCenterBlock>
            <Sidebar isLoading={isLoading} loadingTracksError={isError} />
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
