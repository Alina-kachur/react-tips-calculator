import React from "react";
import { StyledInput } from "./styles";

interface IProps {
  value: string;
  placeholder: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, placeholder, type, onChange }: IProps) => {
  return (
    <StyledInput
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></StyledInput>
  );
};
