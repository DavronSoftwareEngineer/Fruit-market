import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import planet from './photo/planet.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {
  return (
        <Box sx={{
            py: 8,
            backgroundColor: "#FCFEFD",
        }}>
            <Container>
                <Grid container alignItems={"start"} spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={5} xl={5}>
                        <Box>
                            <Box variant="img" component={"img"} src={planet} 
                            sx={{
                                mb: 3,
                            }}
                            />
                            <Typography sx={{width: "300px"}}>Lorem Ipsum is simply dummy text of the 
                                printing and typesetting industry. Lorem Ipsum 
                                has been the industry's standard dummy text ever 
                                since the 1500s, when an unknown printer...</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                        <Typography variant="ul" component={"ul"} sx={{listStyleType: "none", m: 0, p: 0}}>
                            <Typography sx={{
                                fontSize: "24px",
                                fontWeight: 500,
                                mb: 4,
                            }}>Navigation</Typography>
                            <Typography variant="li" component={"li"} sx={{mb:3}}>About Us</Typography>
                            <Typography variant="li" component={"li"} sx={{mb:3}}>Service</Typography>
                            <Typography variant="li" component={"li"}>Menu</Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                    <Typography variant="ul" component={"ul"} sx={{listStyleType: "none", m: 0, p: 0}}>
                            <Typography sx={{
                                fontSize: "24px",
                                fontWeight: 500,
                                mb: 4,
                            }}>Resources</Typography>
                            <Typography variant="li" component={"li"} sx={{mb:3}}>Reviews</Typography>
                            <Typography variant="li" component={"li"} sx={{mb:3}}>Blog</Typography>
                            <Typography variant="li" component={"li"}>Update News</Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                        <Box>
                            <Typography sx={{
                                mb: 4,
                                fontSize: "24px",
                                fontWeight: 500,
                            }}>Contact Us</Typography>
                            <Typography sx={{
                                mb: 4,
                            }}>Email: oyasim@email.com</Typography>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <FacebookIcon sx={{mr: 3}}/>
                                <TwitterIcon sx={{mr: 3}}/>
                                <InstagramIcon/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
