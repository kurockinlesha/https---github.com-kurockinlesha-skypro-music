import * as S from "./Sidebar.style";
import { playListArr } from "../../utils/playListArr";
import { SkeletonSidebar } from "../TrackListItem/Tracks.style";

export function Sidebar({ isLoading }) {
  const categoryPlayList = playListArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {isLoading ? (
        <S.SidebarLink to={`/category/${category.id}`}>
          <S.SidebarImg src={category.img} alt={category.alt} />
        </S.SidebarLink>
      ) : (
        <SkeletonSidebar> </SkeletonSidebar>
      )}
    </S.SidebarItem>
  ));

  return (
    <S.mainSidebar>
      <S.sidebarPersonal>
        <S.sidebarPersonalName>Sergey.Ivanov</S.sidebarPersonalName>
        <S.sidebarIcon>
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
