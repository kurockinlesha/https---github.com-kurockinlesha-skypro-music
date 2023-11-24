import { useContext } from "react";
import * as S from "./Sidebar.style";
import { playListArr } from "../../utils/playListArr";
import { SkeletonSidebar } from "../TrackListItem/Tracks.style";
import { UserContext } from "../Context/Context";

export function Sidebar({ isLoading, loadingTracksError }) {
  const categoryPlayList = playListArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {!isLoading && !loadingTracksError ? (
        <S.SidebarLink to={`/category/${category.id}`}>
          <S.SidebarImg src={category.img} alt={category.alt} />
        </S.SidebarLink>
      ) : (
        <SkeletonSidebar />
      )}
    </S.SidebarItem>
  ));

  const { handleLogout } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <S.mainSidebar>
      <S.sidebarPersonal>
        <S.sidebarPersonalName>{user.username}</S.sidebarPersonalName>
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
