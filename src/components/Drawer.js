import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import closeIcon from "../assets/img/close.svg";
import Navbar from "./Navbar";

function Drawer(open, onClose) {
  return (
    <MuiDrawer
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "300px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
        },
        anchor: "left",
        open: open,
        onClose: onClose,
      }}
    >
      <Box sx={{ padding: "2px" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: "10px",
            top: "10px",
            padding: "5px",
            backgroundColor: "#000000",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#000000",
            },
          }}
        >
          <img src={closeIcon} alt="close" />
        </IconButton>

        <Box sx={{ padding: "44px" }}>
          <Navbar />
        </Box>
      </Box>
    </MuiDrawer>
  );
}
export default Drawer;
