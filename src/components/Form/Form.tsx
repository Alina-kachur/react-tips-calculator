import React, { ChangeEvent, useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Title, Subtitle, Total } from "./styles";
import { IOption } from "../../types";
import { useInput } from "../../hooks/useInput";

export const Form = () => {
  const options: IOption[] = [
    {
      value: 10,
      label: "10%",
    },
    {
      value: 15,
      label: "15%",
    },
    {
      value: 20,
      label: "20%",
    },
  ];
  const bill = useInput();
  const persons = useInput();

  const [selectValue, setSelectValue] = useState(options[0]);
  const [total, setTotal] = useState(0);
  const [isDisable, setDisable] = useState(true);

  const handleTotal = () => {
    const amountTotal = +bill.value * (1 + selectValue.value / 100);
    const amountPerEachPerson = amountTotal / +persons.value;
    setTotal(amountPerEachPerson);
  };
  const handleSelectValue = (e: IOption | any) => setSelectValue(e);
  useEffect(() => {
    const newDisable = bill && persons ? false : true;
    setDisable(newDisable);
  });

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input {...bill} placeholder="Enter bill" />
      <Input {...persons} placeholder="Enter persons" />
      <CustomSelect value={selectValue} options={options} onChange={handleSelectValue} />
      <Total>Total: {total.toFixed(2)}$ </Total>
      <Button type="button" handleTotal={handleTotal} isDisable={isDisable} hasOpacity={isDisable}>
        Ohhhoooo 🍻
      </Button>
    </StyledForm>
  );
};
