const styles = {
  card: theme => ({
    textAlign: "left",
    border: `0.5px solid ${theme.palette.slateBlue.main}`,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    padding: "44px",
    margin: "20px 10px",
    width: "100%",
    maxWidth: "403px",
    boxSizing: "border-box",
    [theme.breakpoints.up("md")]: {
      maxWidth: "403px",
    },
  }),
  btn: theme => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textDecorationLine: "underline",
    textTransform: "capitalize",
    color: theme.palette.slateBlue.main,
  }),
  listItem: theme => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    padding: "12px 0",
  }),
};

export default styles;
