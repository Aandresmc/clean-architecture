
import * as Colors from '@material-ui/core/colors/index';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.deepPurple[500],
    },
    secondary: {
      main: '#556cd6',
    },
    error: {
      main: Colors.red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;