import { Box, Card, Container, Grid, IconButton, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import { green } from '@mui/material/colors';
import fresh from './photo/fresh.png';
import veget from './photo/veget.png';
import user from './photo/user.png';
import star from './photo/star.png';
import Group5 from './photo/Group5.png';

const theme = createTheme({
  palette: {
    primary: {
        main: green[500],
        contrastText: "#fff",
    }
  },
});

export default function Section1() {
  return (
    <Box  sx={{
        zIndex: 0,
        position: "relative",
        backgroundColor: "#F3FBF8",
        pt: 10,
        pb: 3,

    }}>
        <Box variant="img" component={"img"} src={fresh}
        sx={{
            display: {xs: "none", sm: 'none', md: 'block', lg: "block", xl: 'block'},
            width: "450px",
            height: "358px",
            position: 'absolute',
            left: "0px",
            top: '-20px',
        }}
        />
        <Container>
            <ThemeProvider theme={theme}>
            <Grid container spacing={5} alignItems={"center"}>
                <Grid item xs={12}>
                    <Box sx={{
                        
                    }}>
                        <Typography 
                        sx={{
                            fontSize: "70px",
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontFamily: 'Rosario',
                            textAlign: "center",
                        }}
                        >Organic Fruit & Vegetables</Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: "center",
                            mb: 3,
                        }}>
                        <Typography sx={{
                            width: "700px",
                            fontSize: '18px',
                            textAlign: "center",
                        }}>Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been 
                            the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley...</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Typography sx={{mr: 2}}>
                                Order Now
                            </Typography>
                            <IconButton variant="contained"
                            sx={{
                                backgroundColor: "#09A66D",
                                "&:hover": {
                                    backgroundColor: "#09A66D",
                                }
                            }}
                            >
                                <ArrowRightAltIcon sx={{color: '#fff'}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <Box>
                        <Box variant="img" component={"img"} src={veget}
                        sx={{
                            width: "100%",
                            opacity: "0.6"                       
                        }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box>
                    <Card sx={{
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 3,
                        py: 1,
                        px: 4,
                    }}>
                        <Box variant="img" component={"img"} src={user}/>
                        <Box>
                            <Typography sx={{
                                fontSize: "48px",
                                fontWeight: 400,
                            }}>30K</Typography>
                            <Typography sx={{
                                fontSize: "18px",
                            }}>User Order</Typography>
                        </Box>
                    </Card>
                    <Card sx={{
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 3,
                        py: 1,
                        px: 4,
                    }}>
                        <Box variant="img" component={"img"} src={star} />
                        <Box>
                            <Typography sx={{
                                fontSize: "48px",
                                fontWeight: 400,
                            }}>20K</Typography>
                            <Typography sx={{
                                fontSize: "18px",
                            }}>Reviews(4.8)</Typography>
                        </Box>
                    </Card>
                    <Card sx={{
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        py: 1,
                        px: 4,
                    }}>
                        <Box variant="img" component={"img"} src={Group5}/>
                        <Box>
                            <Typography sx={{
                                fontSize: "48px",
                                fontWeight: 400,
                            }}>300</Typography>
                            <Typography sx={{
                                fontSize: "18px",
                            }}>Items</Typography>
                        </Box>
                    </Card>
                    </Box>
                </Grid>
            </Grid>
            </ThemeProvider>
        </Container>
    </Box>
  )
}
