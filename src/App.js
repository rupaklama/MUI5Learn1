import "./App.css";
// import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

// Custom Button
const StyledButton = styled.button`
  color: turquoise;
`;

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Card />

      {/* using Inline styles
        The sx prop is the best option for adding style overrides to a single instance of a component in most cases.
        */}
      {/* <Button sx={{ backgroundColor: "orange", color: "white" }}>New Inline Style</Button> */}

      {/* Styled utility to create Custom element */}
      {/* <StyledButton>Styled Button</StyledButton> */}
    </Container>
  );
}

export default App;
