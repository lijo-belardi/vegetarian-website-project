import React, {useContext} from 'react'
import { PopularVegetarianContext } from '../../context/popularVegetariancontext'

const PopularVegetarianCarousel = () => {
  const [recipes, setRecipes] = useContext(PopularVegetarianContext)
  return (
    <div>
      {recipes.map((recipe) => {
        return <p key={recipe.id}>{recipe.title}</p>
      })}
    </div>
  )
}

export default PopularVegetarianCarousel

