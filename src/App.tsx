import React from "react";
import { Form } from "./components/Form/Form";
import { Container } from "./styles";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Form />
    </Container>
  );
};
