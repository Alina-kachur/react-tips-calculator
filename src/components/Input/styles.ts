import styled from "styled-components";

const StyledInput = styled.input`
  width: 456px;
  height: 68px;
  text-align: center;
  border-radius: 30px;
  border: none;
  color: rgba(117, 108, 108, 0.6);
  ::placeholder {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    color: rgba(117, 108, 108, 0.6);
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }
  @media (max-width: 744px) {
    width: 332px;
    height: 68px;
  }
`;

export { StyledInput };
