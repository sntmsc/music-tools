import React from 'react'
import './App.css';
import { Flex } from '@chakra-ui/react'
import Bpm from './components/tools/Bpm';

function App() {
 
  return (
    <Flex
    backgroundImage="linear-gradient( #c6ffdd, #fbd786, #f7797d)"
    w='100%'
    h='100vh'
    align='center'
    justify='center'>
      <Bpm/>
    </Flex>
  );
}

export default App;
