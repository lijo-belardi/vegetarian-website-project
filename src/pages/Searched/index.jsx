import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Container } from '@mui/material'
import styles from './index.module.scss'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

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
        } catch (error) {
            console.log('Error function: getSearched')
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
            <Container>
                <div className={styles['grid']}>
                    {searchedRecipes.map((item) => {
                        return (
                            <Link key={item.id} to={`/recipe/${item.id}`}>
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    img={item.image} />
                            </Link>
                        )
                    })}
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Searched