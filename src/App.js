import {useState} from 'react'
import './App.css';
import { Text, Flex, Button } from '@chakra-ui/react'


const Bpm = () => {
const [average, setAverage] = useState(0);
  let initTime = 0;
  let currentTime = 0;
  let acc = 0;
  let duration = 0;

  const handleClick = () => {
    if(acc === 0){
      initTime = new Date().getTime();
    }

    currentTime = new Date().getTime();
    duration = (currentTime - initTime)/1000;
    
    if(duration !== 0) setAverage((acc * 60 / duration).toFixed(2));

    acc += 1;
    console.log(average); 

  }

  const Reset = () =>{

     initTime = 0;
     currentTime = 0;
     acc = 0;
     duration = 0;
     setAverage(0);
  }

  return(
    <Flex
    w='100%'
    justify='center'
    align='center'
    direction='column'>
      <Text
      fontSize='3em'>
        BPM meter
      </Text>
      <Flex
      direction='column'
      mt='2em'
      boxSize='8em'
      boxShadow='xl'
      border='1px solid'
      borderRadius='50%'
      _hover={{cursor:'pointer'}}
      bg='gray'
      p='1em'
      justify='center'
      align='center'
      onClick={handleClick}>
      <Text
      fontSize='2em'>
        {average}
      </Text>
      <Text
      fontSize='1em'>
        touch
      </Text>
      </Flex>
      <Button
      colorScheme='teal'
      variant='solid'
      mt='1em'
      onClick={Reset}>
        Reset
      </Button>
    </Flex>
  )
}

function App() {
 
  return (
    <Flex
    w='100%'>
      <Bpm/>
    </Flex>
  );
}

export default App;
