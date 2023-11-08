import styled from "styled-components";

export const contentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const playlistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;

export const col01 = styled(playlistTitleCol)`
  width: 447px;
`;
export const col02 = styled(playlistTitleCol)`
  width: 321px;
`;
export const col03 = styled(playlistTitleCol)`
  width: 245px;
`;
export const col04 = styled(playlistTitleCol)`
  width: 60px;
  text-align: end;
`;

export const playlistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
