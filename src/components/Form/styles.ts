import styled from "styled-components";

const StyledForm = styled.form`
  width: 500px;
  display: grid;
  justify-self: center;
  justify-content: center;
  align-self: center;
  grid-gap: 10px;
  padding-top: 180px;

  @media (max-width: 744px) {
    width: 350px;
  }
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  text-align: center;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;
const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  color: rgba(117, 108, 108, 0.57);
  text-align: center;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;
const Total = styled.p`
  font-weight: 500;
  font-size: 24px;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;
export { StyledForm, Title, Subtitle, Total };
