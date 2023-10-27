import { useContext } from "react";
import * as S from "./Sidebar.style";
import { playListArr } from "../../utils/playListArr";
import { SkeletonSidebar } from "../TrackListItem/Tracks.style";
import { UserContext } from "../Context/Context";

export function Sidebar({ isLoading, loadingTracksError }) {
  const categoryPlayList = playListArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {isLoading && !loadingTracksError ? (
        <S.SidebarLink to={`/category/${category.id}`}>
          <S.SidebarImg src={category.img} alt={category.alt} />
        </S.SidebarLink>
      ) : (
        <SkeletonSidebar> </SkeletonSidebar>
      )}
    </S.SidebarItem>
  ));

  const { user, handleLogout } = useContext(UserContext);
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   window.location.href = "/auth";
  // };

  return (
    <S.mainSidebar>
      <S.sidebarPersonal>
        <S.sidebarPersonalName>{user}</S.sidebarPersonalName>
        <S.sidebarIcon onClick={handleLogout}>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.sidebarIcon>
      </S.sidebarPersonal>
      <S.sidebarBlock>
        <S.sidebarList>{categoryPlayList}</S.sidebarList>
      </S.sidebarBlock>
    </S.mainSidebar>
  );
}