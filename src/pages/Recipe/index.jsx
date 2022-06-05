import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Container, Typography, Button } from '@mui/material'
import Search from '../../components/Search'
import Navbar from '../../components/Navbar'
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
      <Navbar />
      <Container>
        <Search />
      </Container>

      <Container className={styles['recipe-container']}>
        <div>
          <Typography
            variant='h4'
            sx={{ fontWeight: 'bold', mb: 3 }}
            align='left'>{details.title}
          </Typography>
          <img src={details.image} alt={details.title} />
        </div>

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
                <Typography variant='h4' sx={{ mt: 2, mb: 2 }}>Summary</Typography>
                <Typography
                  className={styles['summary-text']}
                  variant='h5'
                  dangerouslySetInnerHTML={{ __html: details.summary }}>
                </Typography>
              </div>
              <div className={styles['instructions']}>
                <Typography variant='h4' sx={{ mt: 2, mb: 2 }}>Instructions</Typography>
                <Typography
                  className={styles['instructions-text']}
                  variant='h5'
                  dangerouslySetInnerHTML={{ __html: details.instructions }}>
                </Typography>
              </div>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <ul>
              {ingredients.map((ingredient) => {
                return <li key={ingredient.original}>{ingredient.original}</li>
              })}
            </ul>)}

        </div>
      </Container>

      <Footer />




    </div>
  )
}

export default Recipe