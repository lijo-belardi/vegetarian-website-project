import React from 'react'
import styles from './index.module.scss'

const RecipeImage = (props) => {
    return (<img src={props.src} alt={props.alt} />)
}

export default RecipeImage