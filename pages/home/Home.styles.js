import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  description: {
    height: '50px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  card: {
    width: '300px',
    margin: '10px',
  },
  cardMedia: {
    height: '300px'
  },
}))
