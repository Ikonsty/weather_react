import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import Header from "../../modules/Homepage/components/Header";
import Sidebar from "../../modules/Homepage/components/Sidebar";
import Content from "../../modules/Homepage/components/Content";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appContent: theme.mixins.gutters({
    flex: "1 1 100%",
    maxWidth: "100%",
    paddingTop: 80,
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values.lg,
    },
  }),
}));

const HomepageView = () => {
  const classes = useStyles();

  // const match = matchPath();

  // console.log(match);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/homepage/login">
          <main className={classes.appContent}>
            <Content />
          </main>
        </Route>
        <Route path="/weather">
          <main className={classes.appContent}>
            <Content />
          </main>
        </Route>
      </Switch>
    </div>
  );
};

export default HomepageView;
