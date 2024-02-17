const styles = {
  hero: theme => ({
    padding: "20px",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      padding: "44px 20px 20px",
    },
  }),
  wrapper: theme => ({
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "1200px",
      display: "flex",
      alignItems: "center",
      padding: "44px 20px 20px",
      gap: "35px",
    },
  }),
  photo: {
    width: "100%",
    maxWidth: "509px",
    display: "block",
    margin: "44px auto 0",
  },
  text: theme => ({
    margin: "20px 0",
    [theme.breakpoints.up("md")]: {
      marginBottom: "44px",
    },
  }),
};

export default styles;
