import "./App.css";
// import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

// Custom Button
const StyledButton = styled.button`
  color: turquoise;
`;

function App() {
  return (
    <Box>
      <Navbar />

      {/* using Inline styles
        The sx prop is the best option for adding style overrides to a single instance of a component in most cases.
        */}
      {/* <Button sx={{ backgroundColor: "orange", color: "white" }}>New Inline Style</Button> */}

      {/* Styled utility to create Custom element */}
      {/* <StyledButton>Styled Button</StyledButton> */}
    </Box>
  );
}

export default App;
