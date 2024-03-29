import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Drawer from "../Drawer";
import Navbar from "../Navbar";

import styles from "./Header.styles";

import logo_desk from "../../assets/img/logo_desk.svg";
import logo_mob from "../../assets/img/logo_mob.svg";
import burger_menu from "../../assets/img/burger_menu.svg";

function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl" sx={styles.container}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />

        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography component="a" href="#app-bar-with-responsive-menu" sx={styles.logoDesk}>
            <img src={logo_desk} alt="logo" />
          </Typography>

          <Box sx={{ flex: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton size="large" aria-label="menu" onClick={() => setOpenDrawer(true)} sx={styles.menuIcon}>
              <img src={burger_menu} alt="burger menu" />
            </IconButton>
          </Box>

          <Typography component="a" href="#app-bar-with-responsive-menu" sx={styles.logoMob}>
            <img src={logo_mob} alt="logo" />
          </Typography>

          <Box sx={{ flex: 1, display: { xs: "none", lg: "flex" } }}>
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
