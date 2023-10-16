import styled, { css } from "styled-components";

const icons = {
  prev: css`
    margin-right: 23px;
  `,
  play: css`
    margin-right: 23px;
  `,
  next: css`
    margin-right: 28px;
    fill: #a53939;
  `,
  repeat: css`
    margin-right: 24px;
  `,
  shuffle: css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  `,
};

const playerBtnMixin = (alt) => {
  const styles = icons[alt];
  return styles;
};

export const playerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  ${(props) => playerBtnMixin(props.$style)};
`;

const iconsSvg = {
  prev: css`
    width: 15px;
    height: 14px;
  `,
  play: css`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
  `,
  next: css`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
  `,
  repeat: css`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  `,
  shuffle: css`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  `,
};

const playerBtnSvgMixin = (alt) => {
  const styles = iconsSvg[alt];
  return styles;
};

export const playerBtnSvg = styled.svg`
  width: 15px;
  height: 14px;
  &:hover {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  ${(props) => playerBtnSvgMixin(props.$style)}
`;