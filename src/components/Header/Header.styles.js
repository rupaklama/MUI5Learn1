const styles = {
  appBar: theme => ({
    backgroundColor: "#fff",
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
      borderBottom: "0.5px solid #777FEB",
      padding: "20px 0",
      margin: "auto",
      maxWidth: "1240px",
    },
  }),
  container: theme => ({
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      margin: 0,
    },
  }),
  logoDesk: {
    mr: "16px",
    display: { xs: "none", lg: "flex" },
    flex: 1,
  },
  logoMob: {
    mr: "16px",
    display: { xs: "flex", lg: "none" },
    flex: 1,
  },
};

export default styles;
