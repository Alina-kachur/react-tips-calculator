import { StylesConfig } from "react-select";

export const styles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: "68px",
    borderRadius: "30px",
    border: "none",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "400px",
    fontSize: "18px",
    color: "#756C6C",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    color: "#756C6C",
  }),
};
