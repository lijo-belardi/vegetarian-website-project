import { Container, Typography } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <Container>
        <Typography variant='h6' align='center'>© 2022 Copyright: Lijo Belardi</Typography>
      </Container>
    </div>
  )
}

export default Footer