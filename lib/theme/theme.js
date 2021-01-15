import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'
// import AvroRegularTtf from '../../public/fonts/Arvo/Arvo-Regular.ttf'

// const avro = {
//   fontFamily: 'Avro',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Avro'),
//     url(${AvroRegularTtf}) format('ttf')
//   `
// };

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Avro, Arial',
  },
  palette: {
    primary: blue,
    secondary: orange,
    colors: {
      red,
      yellow,
    }
  },
  MuiTypography: {
    variantMapping: {
      h1: 'h2',
      h2: 'h2',
      h3: 'h2',
      h4: 'h2',
      h5: 'h2',
      h6: 'h2',
      subtitle1: 'h2',
      subtitle2: 'h2',
      body1: 'span',
      body2: 'span',
    },
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [avro],
  //     },
  //   },
  // },
})
