import styled from "styled-components";

export const centerblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
`;
export const filterDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;
export const filterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
export const filterItem = styled.li`
  font-family: "StratosSkyeng", sans-serif;
  color: ${(props) => (props.$isSelected ? "#b672ff" : "#fff")};
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */

  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
