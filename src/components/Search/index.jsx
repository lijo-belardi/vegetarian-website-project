import React, { useState } from 'react'
import { Container } from '@mui/material'
import { FaSearch } from 'react-icons/fa'
import styles from './index.module.scss'

const Search = () => {
  return (
    <Container className={styles['search-container']}>
      <form className={styles['form']}>
        <FaSearch></FaSearch>
        <input

          type="text"
        />
      </form>
    </Container>
  )
}

export default Search