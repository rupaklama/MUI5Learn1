import { Button as MuiButton, Box } from "@mui/material";

import arrow from "../assets/img/chevron-down.svg";

const pages = [
  { title: "Home", arrow: true },
  { title: "Services", arrow: true },
  { title: "Pages", arrow: true },
  { title: "Portfolio", arrow: true },
  { title: "Blog", arrow: true },
  { title: "Contact", arrow: false },
];

const styles = {
  btnLink: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "22px",
    textTransform: "capitalize",
    display: "flex",
    padding: "0",
    marginRight: "44px",
    color: "#000000",
    marginBottom: "10px",
  },
};

const Navbar = () => {
  return (
    <Box sx={{ flex: 1, display: { lg: "flex" }, justifyContent: "flex-end" }}>
      {pages.map((page, index) => (
        <MuiButton key={index} sx={styles.btnLink}>
          {page.title}
          {page.arrow && <img src={arrow} alt={page.title} style={{ marginLeft: "5px" }} />}
        </MuiButton>
      ))}
    </Box>
  );
};
export default Navbar;
