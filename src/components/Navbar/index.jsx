import React from 'react'
import styles from './index.module.scss'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.header}>
      <Container>
        <Typography variant='h6' align='center'>
          <NavLink className={styles.homeLink} to={'/'}>Home</NavLink>
        </Typography>
      </Container>
    </div>
  )
}

export default Navbar