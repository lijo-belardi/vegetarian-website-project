import React, { useContext } from 'react'
import { PopularVegetarianContext } from '../../context/popularVegetariancontext'
import Card from '../Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './index.module.scss'
import { breakpoints, style } from '@mui/system';

const PopularVegetarianCarousel = () => {
  const [recipes, setRecipes] = useContext(PopularVegetarianContext)
  return (
    <div className={styles.carouselSection}>
      <h2>Vegetarian Picks</h2>
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
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              img={recipe.image} />
          </SplideSlide>
        })}
      </Splide>

    </div>
  )
}

export default PopularVegetarianCarousel

