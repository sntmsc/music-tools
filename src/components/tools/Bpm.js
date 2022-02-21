import {useState} from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Bpm = () => {
    const [average, setAverage] = useState(0);
    const [initTime, setInitTime] = useState({
      time: 0,
      acc:0
    });

    const variants = {
        init: { scale: 1 },
        value: { scale: 1.2, transition:{duration:0.4}}
      }

    
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
          fontFamily="'Shadows Into Light', cursive"
          userSelect = 'none'>
            TAP BPM
          </Text>
          <Flex
          as={motion.div}
          variants={variants}
          whileTap="value"
          direction='column'
          mt='2em'
          mb='1em'
          boxSize='10em'
          boxShadow='xl'
          border='1px solid'
          borderRadius='50%'
          userSelect='none'
          _hover={{cursor:'pointer'}}
          bg='transparent'
          p='1em'
          justify='center'
          align='center'
          onClick={handleClick}>
          <Text
          fontSize={initTime.acc === 0 ? '1.5em' : '2.5em'}
          userSelect = 'none'
          fontFamily="'Nanum Gothic Coding', monospace">
            {initTime.acc === 0 ? 'Press me' : average}
          </Text>
          </Flex>
          <Button
          colorScheme='black'
          variant='outline'
          mt='1em'
          onClick={Reset}>
            Reset
          </Button>
        </Flex>
      )
    }

    export default Bpm