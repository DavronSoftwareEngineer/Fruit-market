import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import planet from './photo/planet.png';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserForm from '../../components/user-form';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: grey[400],
  color: grey[700],
  height: "40px",
  '&:hover': {
    backgroundColor: grey[500],
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '10ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function PrimaryAppBar() {

    const [state, setState] = React.useState({
        left: false,
      });
    
    const task1 = useSelector((state) => state.task1)
    console.log(task1);

      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", px: 1.2, py: 1}}>
            <IconButton onClick={toggleDrawer(anchor, false)}>
                <MenuIcon sx={{color: "grey"}} /> 
            </IconButton>
            <IconButton onClick={toggleDrawer(anchor, false)}>
                <Badge badgeContent={""} color="success" variant='dot'>
                    <LocalGroceryStoreOutlinedIcon sx={{color: "grey"}}/>
                </Badge>
            </IconButton>
          </Box>
          <Divider />
          <Search 
            onClick={toggleDrawer(anchor, true)}
                sx={{
                    display: "flex", 
                    alignItems: 'center',
                    mt: 1

                    }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          <List>
            {task1.map((item, index) => (
              <Link to={item.to} style={{
                textDecoration: 'none',
                color: grey[800],
              }}>
              <ListItem key={item.text} disablePadding onClick={toggleDrawer(anchor, false)}>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      );

  return (
    <Box sx={{flexGrow: 1, position: "sticky", top: 0, zIndex: 1}}>
      <AppBar position="static" sx={{backgroundColor: "#fff", py: 1}}>
        <Toolbar>
            <Box>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}
                    sx={{ mr: 2, display: {xl: "block", sm: "block", md: "none", lg: "none", xl: "none"} }}
                >
                    <MenuIcon sx={{color: "grey"}} />
                </Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onOpen={toggleDrawer(anchor, true)}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
                </React.Fragment>
            ))}
            </Box>
                
            <Box sx={{display: {xs: "none", sm: "none", md: "block", lg: "block", xl: "block"}}}>
            {task1.map((item, index) => (
              
              <Link to={item.to} key={index} 
                style={{textTransform: "capitalize",
                color: grey[900],
                textDecoration: "none",
                marginRight: "20px",
                }} 
                size='large'>{item.text}</Link>
          
            ))}
            </Box> 
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center"}}>
                <Link to={"/"}>
                    <Box variant="img" component={"img"} src={planet}/>
                </Link>
            </Box>
            <Box sx={{display: { xs: 'none', sm: "none", md: "flex", lg: "flex", xl: 'flex' }, alignItems: "center"}}>    
            <Search 
                sx={{
                    display: "flex", 
                    alignItems: 'center',
                    }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Link to={"/karzinka"}
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <Badge badgeContent={""} color="success" variant='dot'>
                <LocalGroceryStoreOutlinedIcon sx={{color: "grey"}}/>
              </Badge>
            </Link>  
          </Box>
          <Box sx={{ml: 3}}>
            <UserForm/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
