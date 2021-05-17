import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LoginForm from "../../modules/Auth/components/LoginForm";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const LoginView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <LoginForm />
    </Container>
  );
};

export default LoginView;
