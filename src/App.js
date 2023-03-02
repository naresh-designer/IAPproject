import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import BottomTopButton from "./Components/BottomTopButton/BottomTopButton";
import Container from "./Components/Container/Container";
import GlobalStyle from "./Style/GlobalStyle";

const App = () => {
  const theme = {
    colors: {
      cyan: "#008896",
      lightCyan: "#39A0AA",
      lighterCyan: "#69B8BF",
      lighterBlue: "#005D7D",
      darkblue: "#1C2B39",
      lightBlue: "#005D7D",
      green: "#85891A",
      lightGreen: "#9DA148",
      orange: "#E99524",
      lightOrange: "#EDAA50",
      brown: "#B45015",
      lightBrown: "#C37344",
      white: "#ffffff",
    },
    media: {
      mobile: "768px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Container />
        <BottomTopButton />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
