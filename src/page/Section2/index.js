import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import Ellipse1 from "./photo/Ellipse1.png";
import Ellipse2 from "./photo/Ellipse2.png";
import Group from "./photo/Group.png";
import Group1 from "./photo/Group1.png";
import Group2 from "./photo/Group2.png";
import Rect1 from "./photo/Rect1.png";
import Rect2 from "./photo/Rect2.png";
import user1 from "./photo/user1.png";
import Vector from "./photo/Vector.png";
import SouthIcon from '@mui/icons-material/South';
export default function Section2() {
  return (
    <Box 
    sx={{
        position: "relative",
        backgroundColor: '#fff',
        py: 8,
    }}
    >
        <Box variant="img" component={"img"} src={Vector}
            sx={{
                display: {xs: "none", sm: 'none', md: 'block', lg: "block", xl: 'block'},
                width: "800px",
                height: "400px",
                position: "absolute",
                top: "-50px",
                right: "20px",
            }}  
        />
        <Container>
            <Box sx={{
                mb: 5,
            }}>
                <Typography
                sx={{
                    fontSize: "60px",
                    fontWeight: 700,
                    fontFamily: 'Rosario',
                }}
                >Why We Aer The Best?</Typography>
                <Typography sx={{
                    width: "100%",
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley...
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%px",
                    px: "50px",
                    py: 3,
                    mb: 3,
                    // border: "1px solid blue",
                    borderRadius: "3px",
                }}>
                    <Box sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2,
                        mr: 3,
                        backgroundColor: "#F3FBF8",
                    }}>
                        <Box variant="img" component={"img"} src={Group}
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                        />
                    </Box>
                    <Typography>
                        <Typography sx={{
                            fontSize: "20px",
                            fontWeight: 400,
                        }}>Fasted delivery Service</Typography>
                        <Typography sx={{
                            fontSize: '14px',
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundColor: '#F3FBF8',
                    display: "flex",
                    alignItems: "center",
                    width: "100%px",
                    px: "50px",
                    py: 3,
                    mb: 3,
                    // border: "1px solid blue",
                    borderRadius: "3px",
                }}>
                    <Box sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2,
                        mr: 3,
                        backgroundColor: "#FFF",
                    }}>
                        <Box variant="img" component={"img"} src={Group2}
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                        />
                    </Box>
                    <Typography>
                        <Typography sx={{
                            fontSize: "20px",
                            fontWeight: 400,
                        }}>Online order Service</Typography>
                        <Typography sx={{
                            fontSize: '14px',
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    px: "50px",
                    py: 3,
                    mb: 3,
                    // border: "1px solid blue",
                    borderRadius: "3px",
                }}>
                    <Box sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2,
                        mr: 3,
                        backgroundColor: "#F3FBF8",
                    }}>
                        <Box variant="img" component={"img"} src={Group1}
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                        />
                    </Box>
                    <Typography>
                        <Typography sx={{
                            fontSize: "20px",
                            fontWeight: 400,
                        }}>24/8 Service</Typography>
                        <Typography sx={{
                            fontSize: '14px',
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex", 
                    justifyContent: 'center',
                }}>
                    <IconButton color="success">
                        <SouthIcon sx={{color: "#09A66D"}}/>
                    </IconButton>
                </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box sx={{
                        display: {xs: 'none', sm: 'none', md: "flex", lg: "flex", xl: "flex"},
                        justifyContent: 'center',
                        position: "relative",
                    }}>
                        <Box variant="img" component={"img"} src={Ellipse2} 
                        sx={{
                        }}/>
                        <Box variant="img" component={"img"} src={Rect1}
                        sx={{
                            position: "absolute",
                            left: "119px",
                            top: "54px",
                        }}
                        />
                        <Box variant="img" component={"img"} src={Rect2}
                        sx={{
                            position: "absolute",
                            right: "119px",
                            top: "54px",
                        }}
                        />
                        <Box variant="img" component={"img"} src={Ellipse1}
                        sx={{
                            position: "absolute",
                            right: "0px",
                            top: "-90px",
                        }}
                        />

                        <Box variant="img" component={"img"} src={user1}
                        sx={{
                            position: "absolute",
                            left: "100px",
                            top: "-80px",
                        }}
                        />
                        
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
    )
}
