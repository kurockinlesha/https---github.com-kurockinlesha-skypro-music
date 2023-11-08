import { styled } from "styled-components";

export const MainCenterBlock = styled.div`
  width: auto;
  flex-grow: 3;
`;
export const notFoundBlock = styled.div`
  margin-top: 285px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const notFoundBlockTitle = styled.h3`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: StratosSkyeng;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px;
`;
export const notFoundBlockItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const notFoundBlockItemTitle = styled(notFoundBlockTitle)`
  font-size: 32px;
  line-height: 40px;
`;
export const notFoundBlockText = styled.p`
  color: #4e4e4e;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
`;
export const notFoundBlockButton = styled.button`
  border: none;
  outline: none;
  width: 278px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--palette-purple-90, #580ea2);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  margin-top: 36px;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;
