import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import url from "../api/popularVegetarianRequest";

export const PopularVegetarianContext = createContext()

export const PopularVegetarianProvider = (props) => {
    const [popularRecipes, setPopularRecipes] = useState([])

    useEffect(() => {
        getPopularVegetarianRecipes()
    }, [])

    const getPopularVegetarianRecipes = async () => {
        try {
            const check = localStorage.getItem('popularRecipes')
            if (check) {
                setPopularRecipes(JSON.parse(check))
            } else {
                const response = await axios.get(url.popularVegetarianRecipes)
                localStorage.setItem('popularRecipes', JSON.stringify(response.data.recipes))
                setPopularRecipes(response.data.recipes)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <PopularVegetarianContext.Provider value={[popularRecipes, setPopularRecipes]}>
            {props.children}
        </PopularVegetarianContext.Provider>
    )
}