import React from 'react'
import { AppBar, Box, Button, Container } from '@mui/material';

export default function Navbar() {

    const pages = ["Home", "Group Profile", "Infrasctructure", "Products+", "Quality", "Wind Energy", "Gallery", "Contact Us"]
  return (
    <Box pt={1}>
         <AppBar position="sticky" sx={{background:"#F33A6A", borderRadius:"10px", paddingTop:0,zIndex:9999}}>
         <Container maxWidth="lg">
         <Box sx={{ flexGrow: 1, display:  'flex', justifyContent:"space-between"  }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{my:1,  color: 'white', display: 'block', fontSize:"12px" }}
                
              >
               {page}
              </Button>
            ))}
          </Box>
          </Container>
         </AppBar>
    </Box>
  )
}
