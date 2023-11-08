import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const menuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const menuLink = styled(Link) `
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
