import React, { useContext } from 'react'
import { PopularVegetarianContext } from '../../context/popularVegetariancontext'
import Card from '../Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './index.module.scss'

const PopularVegetarianCarousel = () => {
  const [recipes, setRecipes] = useContext(PopularVegetarianContext)
  return (
    <div>
      <h3>Vegetarian Picks</h3>
      <Splide
        className={styles.splide}
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '5rem',
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

