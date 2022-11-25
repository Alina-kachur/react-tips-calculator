import { StyledButton } from "./styles";
import { ReactNode } from "react";
import { ButtonType } from "../../types";

interface IProps {
  children: ReactNode;
  type?: ButtonType;
  hasOpacity: boolean;
  isDisable: boolean;
  handleTotal?: () => void;
}

export const Button = ({ children, type, hasOpacity, isDisable, handleTotal }: IProps) => {
  return (
    <StyledButton type={type} onClick={handleTotal} hasOpacity={hasOpacity} disabled={isDisable}>
      {children}
    </StyledButton>
  );
};
