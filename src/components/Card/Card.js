import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import strategy_svg from "../../assets/img/strategy.svg";
import arrowRight_svg from "../../assets/img/arrow-right.svg";

import styles from "./Card.styles";

function Card() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <MuiCard sx={styles.card}>
        <CardContent sx={{ padding: 0 }}>
          <Box component="img" src={strategy_svg} />
          <Typography variant="h3">Strategy</Typography>

          <List>
            <ListItem sx={styles.listItem}>
              <Box component="img" src={arrowRight_svg} sx={{ marginRight: "5px" }} />
              Product management
            </ListItem>
            <ListItem sx={styles.listItem}>
              <Box component="img" src={arrowRight_svg} sx={{ marginRight: "5px" }} />
              MVP definition
            </ListItem>
            <ListItem sx={styles.listItem}>
              <Box component="img" src={arrowRight_svg} sx={{ marginRight: "5px" }} />
              Product strategy
            </ListItem>
          </List>
        </CardContent>
        <CardActions sx={{ padding: 0 }}>
          <Button size="small" sx={styles.btn}>
            Learn More
          </Button>
        </CardActions>
      </MuiCard>

      <MuiCard sx={styles.card}>
        <CardContent sx={{ padding: 0 }}>
          <Box component="img" src={strategy_svg} />
          <Typography variant="h3">Strategy</Typography>

          <List>
            <ListItem sx={styles.listItem}>
              <Box component="img" src={arrowRight_svg} sx={{ marginRight: "5px" }} />
              Product management
            </ListItem>
            <ListItem sx={styles.listItem}>
              <Box component="img" src={arrowRight_svg} sx={{ marginRight: "5px" }} />
              MVP definition
            </ListItem>
            <ListItem sx={styles.listItem}>
              <Box component="img" src={arrowRight_svg} sx={{ marginRight: "5px" }} />
              Product strategy
            </ListItem>
          </List>
        </CardContent>
        <CardActions sx={{ padding: 0 }}>
          <Button size="small" sx={styles.btn}>
            Learn More
          </Button>
        </CardActions>
      </MuiCard>
    </Box>
  );
}
export default Card;
