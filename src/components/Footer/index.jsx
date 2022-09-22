import React from 'react'
import { Container, Typography, Grid, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from './index.module.scss'

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <Container sx={{ minHeight: ['8rem'] }}>

        {/* Grid - container */}
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{
              display: 'flex',
              flexDirection: ['row', 'row'],
              alignItems: 'center',
              justifyContent: 'space-around',
              minHeight: ['4rem', '4rem'],
              borderBottom: '1px solid #000'
            }}>
              <GitHubIcon
                onClick={() => window.open('https://github.com/lijo-belardi', '_blank')}
                sx={{ '&:hover': { cursor: 'pointer', backgroundColor: '#99db9b', color: '#38ad60' } }}
              />
              <LinkedInIcon
                onClick={() => window.open('https://www.linkedin.com/in/lijo-belardi/', '_blank')}
                sx={{ '&:hover': { cursor: 'pointer', backgroundColor: '#99db9b', color: '#38ad60' } }}
              />
              <InstagramIcon
                onClick={() => window.open('https://www.instagram.com/lijo.belardi/', '_blank')}
                sx={{ '&:hover': { cursor: 'pointer', backgroundColor: '#99db9b', color: '#38ad60' } }}
              />
              <FacebookIcon
                onClick={() => window.open('https://www.facebook.com/lijo.belardi.75', '_blank')}
                sx={{ '&:hover': { cursor: 'pointer', backgroundColor: '#99db9b', color: '#38ad60' } }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant='h6' align='center' marginTop={3}>
          © 2022 Copyright: Lijo Belardi
        </Typography>
      </Container>
    </div>
  )
}

export default Footer