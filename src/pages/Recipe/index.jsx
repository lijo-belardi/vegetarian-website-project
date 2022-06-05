import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Container, Typography, List, ListItem } from '@mui/material'
import Search from '../../components/Search'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title';
import RecipeImage from '../../components/RecipeImage';
import styles from './index.module.scss'
import classNames from "classnames";
import axios from 'axios'
import Footer from '../../components/Footer';

const Recipe = () => {
  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  const fetchDetails = async () => {
    try {
      const data = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      setDetails(data.data) // fetch details
      setIngredients(data.data.extendedIngredients) // fetch ingredients
    } catch (error) {
      console.log('Error function: fetchDetails');
      console.log(error.name);
      console.log(error.message);
    }
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Search's section */}
      <Container>
        <Search />
      </Container>

      {/* Recipe - main container */}
      <Container className={styles['recipe-container']}>
        {/* Recipe - Title and image */}
        <div>
          {/* Recipe - Title */}
          <Title title={details.title} />
          {/* Recipe - Image */}
          <RecipeImage src={details.image} alt={details.title} />
        </div>

        {/* Recipe - summary's section */}
        <div>
          {/* Recipe - summary - title */}
          <Typography
            variant='h5'
            sx={{ mt: 3, mb: 2, fontWeight: 'bold' }}>
            Summary
          </Typography>

          {/* Recipe - summary - text */}
          <Typography
            className={styles['summary-text']}
            variant='h5'
            dangerouslySetInnerHTML={{ __html: details.summary }}>
          </Typography>
        </div>

        {/* Recipe - info's section */}
        <div className={styles['info']}>
          {/* Recipe - instruction's button */}
          <button
            className={activeTab === 'instructions' ? classNames(styles['active']) : ''}
            onClick={() => setActiveTab('instructions')}>
            Instructions
          </button>

          {/* Recipe - ingredients's button */}
          <button
            className={activeTab === 'ingredients' ? classNames(styles['active']) : ''}
            onClick={() => setActiveTab('ingredients')}>
            Ingredients
          </button>

          {/* Recipe - activeTab - instructions */}
          {activeTab === 'instructions' && (
            <div>
              <div className={styles['instructions']}>
                {/* Recipe - instruction's title */}
                <Typography
                  variant='h5'
                  sx={{ mt: 3, mb: 2, fontWeight: 'bold' }}>
                  Instructions
                </Typography>

                {/* Recipe - instruction's text */}
                <Typography
                  className={styles['instructions-text']}
                  variant='h5'
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                />

              </div>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <div>
              <Typography
                variant='h5'
                sx={{ mt: 3, mb: 2, fontWeight: 'bold' }}>
                Ingredients
              </Typography>
              <List>
                {ingredients.map((ingredient) => {
                  return <ListItem key={ingredient.original} sx={{pl: 0}}>
                    <Typography variant='h5' >
                      {ingredient.original}
                      </Typography>
                  </ListItem>
                })}
              </List>
            </div>)}

        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Recipe