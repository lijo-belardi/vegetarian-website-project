import React from 'react'
import PopularVegetarianCarousel from '../../components/PopularVegetarianCarousel'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Footer from '../../components/Footer'

const Home = () => {

    return (
        <div>
            <Navbar />
            <Search />
            <PopularVegetarianCarousel />
            <Footer />
        </div>
    )
}

export default Home