import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const blink = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.2;
  }

`;

export const Skeleton = styled.div`
  animation: ${blink} 2s infinite alternate;
  background-color: #4e4e4e;
  height: 20px;
  width: 300px;
`;
export const skeletonAlbum = styled(Skeleton)`
  width: 100px;
`;
export const SkeletonSidebar = styled(Skeleton)`
  width: 250px;
  height: 150px;
`;
export const SkeletonPlayBar = styled(Skeleton)`
  width: 50px;
`;

export const contentPlaylist = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`;

export const playlistItem = styled.li`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

export const playlistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const trackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`;

export const trackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;

export const trackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const trackTitleLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const trackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;

export const trackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const trackAuthorLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;

export const trackAlbum = styled.div`
  width: 245px;
`;

export const trackAlbumLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

export const trackTime = styled.div`
  display: flex;
  flex-direction: row;
`;

export const trackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
  margin-left: 10px;
`;

const animationPointPulse = () => css`
  animation: pulse 0.6s ease-in-out infinite both;

  @keyframes pulse {
    0%,
    to {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
  }
`;

export const PointPlaying = styled.div`
  position: relative; // Нужно будет в будущем, для позиционирования эффекта
  text-align: center;
  padding: 8px;
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 50%;
  ${(props) => (props.$playing ? animationPointPulse : "")};
`;

export const trackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;
