import * as Colors from "@material-ui/core/colors/index";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export let Theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.deepPurple[500],
    },
    secondary: {
      main: "#556cd6",
    },
    error: {
      main: Colors.red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
Theme = responsiveFontSizes(Theme);
