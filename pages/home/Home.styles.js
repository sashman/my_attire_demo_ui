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
    height: '300px',
  },
  hero: {
    fontSize: '12px'
  },
  heroSubTitle: {
    marginTop: '6em',
    boxSizing: 'border-box'
  },
  heroTitle: {
    lineHeight: '1.2',
    fontSize: '4rem',
    fontWeight: 'bold',
    maxWidth: '50%',
    display: 'inline-block',
    padding: '1.4rem 0 2rem 0',
  },
  heroImage: {
      maxWidth: '100%'
  }
}))
