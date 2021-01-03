import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import useFetch from 'use-http'

import styles from './Home.styles.js'

const Home = () => {
  const classes = styles()

  const { loading, error, data = [] } = useFetch('https://myattire-demo.gigalixirapp.com/api/mens', {}, [])
  console.log(data);

  if(loading){
    return "Loading..."
  }

  return <Grid container spacing={2} justify='center'>
    { data.hits.map(({ _source: { aw_image_url: img, product_name: title, description: description }}, index) => (
        <Card key={index} className={classes.card} >
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={img}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="default">
            Share
          </Button>
          <Button size="small" color="default">
            Learn More
          </Button>
        </CardActions>
      </Card>
    ))}
  </Grid>
}

export default Home