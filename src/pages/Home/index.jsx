import React from 'react'
import PopularVegetarianCarousel from '../../components/PopularVegetarianCarousel'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Footer from '../../components/Footer'
import ErrorBoundary from '../../components/ErrorBoundary'

const Home = () => {

    return (
        <div>
            <ErrorBoundary>
                <Navbar />
            </ErrorBoundary>

            <ErrorBoundary>
                <Search />
            </ErrorBoundary>

            <ErrorBoundary>
                <PopularVegetarianCarousel />
            </ErrorBoundary>

            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
        </div>
    )
}

export default Home