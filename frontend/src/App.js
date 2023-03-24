import React from 'react';
import Header from './component/Header'
import Home from './component/Home';
import './component/header.css'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import { Routes,BrowserRouter as Router,Route } from 'react-router-dom';
import Predict from './component/Predict';

function App() {
  return (
    <ChakraProvider theme={theme}>   
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='diabetes' element={<Predict/>}/>
        </Routes>
      </Router>
 

    </ChakraProvider>
  );
}

export default App;
