import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarRating from '../../components/rating';
import boh from './photo/boh.png';
import group89 from './photo/Group89.png';
export default function Section4() {
  return (
    <Box  sx={{
        py: 6,
    }}>
        <Container>
            <Grid container alignItems={"center"} spacing={3}>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                    <Box>
                        <Typography sx={{
                            fontSize: "60px",
                            fontWeight: 700,
                        }}>What Our Customers About Us saying</Typography>
                        <Typography>Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem Ipsum has 
                            been the industry's standard dummy text ever since 
                            the 1500s, when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also 
                            the leap into electronic typesetting, remaining 
                            essentially unchanged. It was popularis</Typography>
                        <Box sx={{
                            mt: 4,
                        }}>
                            <Typography sx={{
                                fontSize: "30px",
                                fontWeight: 500,
                            }}>Ahmed Hridoy</Typography>
                            <Box sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: 'wrap',
                            }}>
                                <Box sx={{
                                    py: 1,
                                }}>
                                <StarRating/>
                                </Box>
                                <Box sx={{
                                    py: 1,
                                }}>
                                    <IconButton 
                                    sx={{
                                        border: "1px solid grey",
                                        mr: 3,
                                    }}
                                    >
                                        <ChevronLeftIcon sx={{color: "grey"}}/>
                                    </IconButton>
                                    <IconButton sx={{
                                        backgroundColor: "#09A66D",
                                        "&:hover": {
                                            backgroundColor: "#09A66D",
                                        }
                                    }}>
                                        <ChevronRightIcon sx={{color: '#fff'}}/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: {xs: "center", sm: 'center', md: 'end', lg: "end", xl: 'end'},
                        alignItems: "center",
                    }}>
                        <Box variant="img" component={"img"} src={boh} sx={{
                            width: "80%",
                            height: "80%",
                            borderRadius: "50%",
                            backgroundColor: '#F3FBF8',
                            boxShadow: 3,
                        }}/>
                        <Box variant="img" component={"img"} src={group89} sx={{
                            position: "absolute",
                            top: '280px',
                            left: "-10px",
                        }}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
