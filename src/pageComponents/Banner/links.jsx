import { Stack } from '@mui/material'
import React from 'react'

export default function LinksPage() {
  return (
    <div className='text-white'>
        <Stack direction={"row"} spacing={4}>
            <a href='#' style={{textDecoration:"none", color:"white"}}>Facebook</a>
            <a href='#' style={{textDecoration:"none", color:"white"}}>Twitter</a>
            <a href='#' style={{textDecoration:"none", color:"white"}}>Instagram</a>
        </Stack>
    </div>
  )
}
