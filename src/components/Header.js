import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  icon: {
    color: "#fff",
  },
}));

const Header = ({ darkMode, switchTheme }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar component={Container} maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          Todo App
        </Typography>
        <IconButton onClick={switchTheme}>
          {darkMode ? (
            <Brightness4Icon className={classes.icon} />
          ) : (
            <Brightness7Icon className={classes.icon} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
