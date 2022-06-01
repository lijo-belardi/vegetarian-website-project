import React, { useContext } from 'react'
import { PopularVegetarianContext } from '../../context/popularVegetariancontext'
import Card from '../Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './index.module.scss'
import { Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const PopularVegetarianCarousel = () => {
  const [recipes, setRecipes] = useContext(PopularVegetarianContext)
  return (
    <Container className={styles.carouselSection}>
      {/* Carousel's title */}
      <Typography
        variant='h4'
        align='center'
      >
        Vegetarian Picks
      </Typography>

      {/* Carousel */}
      <Splide
        className={styles.splide}
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '2.5rem',
          breakpoints: {
            1200: { perPage: 2 },
            900: { perPage: 1 },
            600: { perPage: 1 }
          }
        }}>

        {recipes.map((recipe) => {
          return <SplideSlide key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <Card
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                img={recipe.image}>
              </Card>
            </Link>
          </SplideSlide>
        })}
      </Splide>

    </Container>
  )
}

export default PopularVegetarianCarousel

