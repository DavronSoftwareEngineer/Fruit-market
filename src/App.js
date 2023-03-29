import { Box, CssBaseline } from '@mui/material';
import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrimaryAppBar from './page/AppBar';
import Footer from './page/Footer';
import Karzinka from './page/karzinka';
import Section1 from './page/Section1';
import Section2 from './page/Section2';
import Section3 from './page/Section3';
import Section4 from './page/Section4';
import Section5 from './page/Section5';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <CssBaseline/>
    <PrimaryAppBar/>
      <Routes>        
        <Route path='/' element={
          <Box>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
          </Box>
        }/>
        <Route path='/section1' element={<Section1/>}/>
        <Route path='/section2' element={<Section2/>}/>
        <Route path='/section3' element={<Section3/>}/>
        <Route path='/section4' element={<Section4/>}/>
        <Route path='/section5' element={<Section5/>}/>
        <Route path='/karzinka' element={<Karzinka/>}/>
      </Routes>
      <Footer/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
