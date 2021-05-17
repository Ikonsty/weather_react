import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CloudIcon from "@material-ui/icons/Cloud";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  drawer: {
    width: 200,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerPaper: {
    width: "inherit",
    paddingTop: 64, // equal to AppBar height
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        <ListItem button component={RouterLink} to="/login">
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={RouterLink} to="/weather">
          <ListItemIcon>
            <CloudIcon />
          </ListItemIcon>
          <ListItemText primary="Weather" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
