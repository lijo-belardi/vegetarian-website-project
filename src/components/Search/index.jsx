import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'
import { FaSearch } from 'react-icons/fa'
import styles from './index.module.scss'

const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/searched/${input}`)
  }

  return (
    <Container onSubmit={submitHandler} className={styles['search-container']}>
      <form className={styles['form']}>
        <FaSearch/>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="apple, cookie, egg, etc."
        />
      </form>
    </Container>
  )
}

export default Search