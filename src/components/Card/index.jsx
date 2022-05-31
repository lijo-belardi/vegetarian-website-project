import React from 'react'
import styles from './index.module.scss'

const Card = (props) => {
  return (
    <div className={styles.card}>
        {/* TODO aggiungere link */}
        <p>{props.title}</p>
        <img src={props.img} alt={props.title} />
        <div className={styles.gradient}></div>
    </div>
  )
}

export default Card