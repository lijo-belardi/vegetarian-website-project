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

        {/* Recipe - info's section */}
        <div className={styles['info']}>
          <button
            className={activeTab === 'instructions' ? classNames(styles['active']) : ''}
            onClick={() => setActiveTab('instructions')}>
            Instructions
          </button>

          <button
            className={activeTab === 'ingredients' ? classNames(styles['active']) : ''}
            onClick={() => setActiveTab('ingredients')}>
            Ingredients
          </button>
          {activeTab === 'instructions' && (
            <div>
              <div className={styles['summary']}>
                <Typography variant='h5' sx={{ mt: 2, mb: 2, fontWeight: 'bold' }}>Summary</Typography>
                <Typography
                  className={styles['summary-text']}
                  variant='h5'
                  dangerouslySetInnerHTML={{ __html: details.summary }}>
                </Typography>
              </div>
              <div className={styles['instructions']}>
                <Typography variant='h5' sx={{ mt: 2, mb: 2, fontWeight: 'bold' }}>
                  Instructions
                </Typography>
                <Typography
                  className={styles['instructions-text']}
                  variant='h5'
                  dangerouslySetInnerHTML={{ __html: details.instructions }}>
                </Typography>
              </div>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <List>
              {ingredients.map((ingredient) => {
                return <ListItem key={ingredient.original}>{ingredient.original}</ListItem>
              })}
            </List>)}

        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Recipe