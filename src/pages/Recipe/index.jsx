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
          <h2>{details.title}</h2>
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
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              </div>
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
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