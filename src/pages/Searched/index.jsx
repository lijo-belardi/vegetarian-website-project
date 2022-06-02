import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './index.module.scss'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    const getSearched = async (name) => {
        try {
            const data = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
            setSearchedRecipes(data.data.results)
            console.log(data.data.results);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />
            <div className={styles['grid']}>
                {searchedRecipes.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            img={item.image} >
                            <Link to={`/recipe/${item.id}`} />
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Searched