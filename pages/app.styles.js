import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => {
  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      '& a': {
        color: theme.palette.common.black,
        textDecoration: 'none',
        cursor: 'pointer',
        paddingRight: '20px',
        transition: 'color 0.2 ease-in-out',
        '&:hover': {
          color: theme.palette.secondary.main
        },
      },
    },
    button: {
      '& span': {
        color: theme.palette.secondary
      }
    },
    topHeadContainer: {
      width: '100%',
      position: 'fixed',
      zIndex: 2,
    },
    content: {
      padding: '0px 24px 0px 24px'
    },
    fluidContent: {
      padding: '0px 0px 0px 0px'
    },
    overHeadImage: {
      height: '360px',
      width: '100%',
      background: theme.palette.common.black,
      display: 'flex',
      justifyContent: 'center'
    },
    topImage: {
      height: '100%',
    },
    logoImage: {
      marginRight: '50px'
    }
  }
})
