import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import group78 from './photo/group78.png';
import group80 from './photo/group80.png';
export default function Section5() {
  return (
    <Box sx={{
        py: 8,
    }}>
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <Box sx={{
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Box variant="img" component={"img"} src={group78}/>
                        <Box variant="img" component={"img"} src={group80}
                        sx={{
                            display: {xs: "none", sm: 'none', md: "block", lg: 'block', xl: "block" },
                            position: "absolute",
                            top: '-30px',
                            left: "160px", 
                        }}
                        />  
                    </Box>
                </Grid> 
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <Button variant="contained" sx={{
                            backgroundColor: '#F3FBF8',
                            borderRadius: "20px",
                            textTransform: "capitalize",
                            color: "grey",
                            mb: 3,
                        }}>Download App</Button>
                        </Box>
                        <Typography
                        sx={{
                            fontSize: "45px",
                            fontWeight: 700,
                        }}
                        >Simple Way To Order Your Organic Fruit </Typography>
                        <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: 400,
                            mb: 3,
                        }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer...
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
