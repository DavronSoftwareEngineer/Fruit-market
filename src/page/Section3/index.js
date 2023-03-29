import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react';
import groupp from './photo/Groupp.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import adc from './photo/adc.png';

export default function Section3() {
  return (
    <Box  sx={{
        backgroundColor: "rgba(9, 166, 109, 0.05)",
        py: 6,

    }}>
        <Container>
        <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box>
                    <Box variant="img" component="img" src={groupp} sx={{width: "100%", height: '100%'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box sx={{
                    position: "relative"
                }}>
                    <Typography sx={{
                        fontSize: "50px",
                        fontWeight: 700,
                    }}>Explor Our Special Items</Typography>
                    <Typography sx={{fontSize: "18px"}}>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer...</Typography>
                    <Typography sx={{
                        mt: 5,
                    }}>
                        Explor Now
                        <IconButton sx={{
                            ml: 3,
                            backgroundColor: "#09A66D",
                            "&:hover":{
                                backgroundColor: "#09A66D",
                            }
                        }}>
                            <TrendingFlatIcon sx={{color: "#fff"}}/>     
                        </IconButton>
                    </Typography>
                    <Box variant="img" component={"img"} src={adc}
                    sx={{
                        width: "365px",
                        height: "310",
                        position: "absolute",
                        top: "255px",
                        right: "-80px",
                        display: {xs: "none", sm: "none", md: "none", lg: "block", xl: "block"}
                    }}
                    />
                </Box>
            </Grid>
        </Grid>
        </Container>
    </Box>
  )
}
