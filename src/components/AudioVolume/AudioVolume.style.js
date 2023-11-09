import styled from "styled-components";

export const barVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;
export const volumeContent = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const volumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const volumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

export const volumeProgress = styled.div`
  display: flex;
  width: 109px;
  cursor: pointer;
`;
export const volumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
  outline: none;
  height: 2px;
`;
