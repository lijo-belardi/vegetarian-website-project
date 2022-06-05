import React from 'react'
import { Typography } from '@mui/material'

const Title = (props) => {
    return (
        <Typography
            variant='h4'
            sx={{ fontWeight: 'bold', mb: 3 }}
            align='left'>
            {props.title}
        </Typography>
    )
}

export default Title