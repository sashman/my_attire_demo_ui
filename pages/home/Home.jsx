import React from 'react'
import Typography from '@material-ui/core/Typography'

import styles from './Home.styles.js'

const Hero = () => {
  const classes = styles()

  return (
    <section className={classes.hero}>
      <Typography className={classes.heroSubTitle}>
        A new way of styling our wardrobe is here…
      </Typography>
      <Typography variant="h1" component="h1" className={classes.heroTitle}>
        All the brands and styles you need in one place
      </Typography>
      <img src='images/hero.png' alt="hero" className={classes.heroImage} />
    </section>
  )
}

const Home = () => {
  // const classes = styles()

  return ( 
    <>
      <Hero />
    </>
  )
}

export default Home
