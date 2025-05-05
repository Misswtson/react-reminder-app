import { createTheme } from '@mui/material/';
import { blue } from '@mui/material/colors';

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#f50057',
    },
  error: {
      main: '#f44336',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});