import styled from "styled-components";

export const ModalFormLogin = styled.form`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 43px 47px 47px 40px;
`;
export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
`;

export const ModalLogoImg = styled.img`
  width: 140px;
  height: auto;
`;
export const ModalInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`;

export const ModalBtnEnter = styled.button`
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 20px;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #ffffff;
  font-family: StratosSkyeng;

  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;

export const ModalInputLogin = styled(ModalInput)`
  margin-bottom: 30px;
`;

export const ModalBtnSignUp = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
`;
