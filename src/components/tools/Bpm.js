import {useState} from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import './Bpm.css'

const Bpm = ({setApp, app, variants}) => {

    const defaultTime = {
      time: 0,
      acc:0
    }
    const [resetIsClick, setResetIsClick] = useState(false);
    const [tapIsClick, setTapIsClick] = useState(false);
    const [average, setAverage] = useState(0);
    const [initTime, setInitTime] = useState(defaultTime);


//////////////////////////FRAMER MOTION //////////////////////////////
    const tapVariants = {
        init: { scale: 1 },
        value: { scale: 1.1, transition:{duration:0.2}}

      }

    const resetVariants = {
      init: {rotate:0},
      value: {scale: [1, 1.2, 1.2, 1, 1],
        rotate: [50, 0, -50, 0, 50, 0, -50, 0,50, 0, -50, 0], transition:{duration:0.5}}
    }
    const animateClick = (setValue) => {
      setValue(true);
      setTimeout(() => {
        setValue(false);
      },200);
    }
///////////////////////////////////////////////////////////////////////
    
      const handleClick = () => {
        animateClick(setTapIsClick);
        if(initTime.acc === 0){
          setInitTime({...initTime,
            time: new Date().getTime(),
            acc:initTime.acc+1});
        }
        else{
          setInitTime({...initTime,
            acc: initTime.acc+1});
        }
    
        const currentTime = new Date().getTime();
        const duration = (currentTime - initTime.time)/1000;
        
        if(duration !== 0) setAverage((initTime.acc * 60 / duration).toFixed(1));
    
      }
    
      const Reset = () =>{
         animateClick(setResetIsClick);
         setAverage(0);
         setInitTime(defaultTime);
      }
    
      return(
        <Flex
        as={motion.div}
        variants={variants}
        initial='init'
        animate='value'
        exit='exit'
        backgroundImage="linear-gradient( #c6ffdd, #fbd786, #f7797d)"
        w='100%'
        h='100vh'
        align='center'
        justify='center'>
          <Flex
          w='100%'
          justify='center'
          align='center'
          direction='column'>
            <Flex
            position='absolute'
            top='0'
            w='100%'
            justify='flex-end'>
              <Text
              onClick={()=>setApp(!app)}
              textDecoration='underline'
              cursor='pointer'
              mr='.5em'
              mt='.5em'
              fontSize='1.5em'
              userSelect = 'none'
              fontFamily="'Shadows Into Light', cursive">
                Go to notes for tune
              </Text>
            </Flex>
            <Text
            fontSize='3em'
            fontFamily="'Shadows Into Light', cursive"
            userSelect = 'none'>
              TAP BPM
            </Text>
            <Flex
            className='tap-mobile'
            _active={{outline:'none'}}
            as={motion.div}
            variants={tapVariants}
            animate= {tapIsClick ? "value" : "init"}
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
            as={motion.button}
            variants={resetVariants}
            animate= {resetIsClick ? "value" : "init"}
            className='tap-mobile'
            colorScheme='black'
            variant='outline'
            mt='1em'
            _focus={{outline:'none'}}
            onClick={Reset}>
              Reset
            </Button>
          </Flex>
        </Flex>
      )
    }

    export default Bpm