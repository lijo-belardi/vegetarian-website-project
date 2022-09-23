// React
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
// Mui Components
import { Container, Typography, List, ListItem } from '@mui/material'
// My Components
import ErrorBoundary from '../../components/ErrorBoundary'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import RecipeImage from '../../components/RecipeImage';
import RecipeTitle from '../../components/RecipeTitle';
import Search from '../../components/Search'
// Others import
import axios from 'axios'
import classNames from "classnames";
import styles from './index.module.scss'


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

      <ErrorBoundary>
        {/* Recipe - main container */}
        <Container className={styles['recipe-container']}>
          {/* Recipe - Title and image */}
          <div>
            {/* Recipe - Title */}
            <RecipeTitle title={details.title} />
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

            {/* Recipe - activeTab - ingredients */}
            {activeTab === 'ingredients' && (
              <div>
                {/* Recipe - ingredients's title */}
                <Typography
                  variant='h5'
                  sx={{ mt: 3, mb: 2, fontWeight: 'bold' }}>
                  Ingredients
                </Typography>

                {/* Recipe - ingredients's text */}
                <List>
                  {ingredients.map((ingredient) => {
                    return <ListItem key={ingredient.original} sx={{ pl: 0 }}>
                      <Typography variant='h5' >
                        {ingredient.original}
                      </Typography>
                    </ListItem>
                  })}
                </List>
              </div>)}

          </div> {/* Recipe - info's section - END */}
        </Container> {/* Recipe - main container - END */}
      </ErrorBoundary>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Recipe