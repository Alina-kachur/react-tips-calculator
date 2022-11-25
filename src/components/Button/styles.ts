import styled from "styled-components";

const StyledButton = styled.button<{ hasOpacity: boolean }>`
  width: 459px;
  height: 61px;
  background: #2ed2c9;
  border: none;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  opacity: ${({ hasOpacity }) => (hasOpacity ? 0.5 : 1)};

  @media (max-width: 744px) {
    width: 321px;
    height: 61px;
  }
`;
export { StyledButton };
