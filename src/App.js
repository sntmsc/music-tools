import {useState} from 'react'
import './App.css';
import { Text, Flex, Button } from '@chakra-ui/react'


const Bpm = () => {
const [average, setAverage] = useState(0);
const [initTime, setInitTime] = useState({
  time: 0,
  acc:0
});

  let currentTime = 0;
  let duration = 0;

  const handleClick = () => {

    if(initTime.acc === 0){
      setInitTime({...initTime,
        time: new Date().getTime(),
        acc:initTime.acc+1});

    }
    else{
      setInitTime({...initTime,
        acc: initTime.acc+1});
    }

    currentTime = new Date().getTime();
    duration = (currentTime - initTime.time)/1000;
    
    if(duration !== 0) setAverage((initTime.acc * 60 / duration).toFixed(1));

    console.log(initTime.acc)

  }

  const Reset = () =>{

     currentTime = 0;
     duration = 0;
     setAverage(0);
     setInitTime({
      time: 0,
      acc:0
    });
  }

  return(
    <Flex
    w='100%'
    justify='center'
    align='center'
    direction='column'>
      <Text
      fontSize='3em'
      userSelect = 'none'>
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
      fontSize={initTime.acc === 0 ? '1em' : '2em'}
      userSelect = 'none'>
        {initTime.acc === 0 ? 'Press me' : average}
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
