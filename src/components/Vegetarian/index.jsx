import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { PopularVegetarianContext } from '../../context/popularVegetariancontext'
import styles from './index.module.scss'
import { Typography, Container } from '@mui/material';
import Card from '../Card';

const Vegetarian = () => {
  const [recipes, setRecipes] = useContext(PopularVegetarianContext)
  return (
    <Container className={styles['vegetarian-section']}>
      <Typography variant='h4' align='left' sx={{ fontWeight: 'bold' }}>
        Vegetarian Picks
      </Typography>

      {/* Vegetarian - grid */}
      <div className={styles.grid}>
        {/* Vegetarian - grid's items */}
        {recipes?.map((recipe) => {
          return (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <Card
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                img={recipe.image}>
              </Card>
            </Link>)
        })}
      </div>

    </Container>
  )
}

export default Vegetarian