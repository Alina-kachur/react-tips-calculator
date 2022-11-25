import Select from "react-select";
import { IOption } from "../../types";
import { styles } from "./styles";

interface IProps {
  options: IOption[];
  value: IOption;
  onChange: (newValue: IOption | any) => void;
}

export const CustomSelect = (props: IProps) => {
  return <Select styles={styles} {...props}></Select>;
};
