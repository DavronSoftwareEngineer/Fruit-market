import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

export default function Karzinka() {
  return (
    <Box sx={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
    }}>
        <Box sx={{
            backgroundColor: grey[300],
            py: 5,
            px: 3,
            borderRadius: "5px"
        }}>
            <Typography variant='h5'>Hozircha sizda tanlangan mahsulotlar mavjut emas!</Typography>
        </Box>
    </Box>
  )
}
