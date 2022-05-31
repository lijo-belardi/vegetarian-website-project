import React from 'react'
import styles from './index.module.scss'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'

const Navbar = () => {
  return (
    <div className={styles.header}>
      <Container className={styles.navbar}>
        {/* TODO Navlink */}
        
        <Typography
          variant='h6'
          align='center'
        >
          Home
        </Typography>
      </Container>
    </div>
  )
}

export default Navbar