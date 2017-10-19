import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import grey from 'material-ui/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
    input: {
      disabled: grey[100] // does not work yet!!!
    }
  },
});

export default theme;
