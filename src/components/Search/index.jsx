import React from 'react'
import { Typography, Container, TextField } from '@mui/material'


const Search = () => {
  return (
    <Container>
      <Typography
        variant='h5'
        align='center'
      >
        Search
      </Typography>

      {/* Form */}
      <TextField id="outlined-basic" label="Recipe to search" variant="outlined"/>
    </Container>
  )
}

export default Search