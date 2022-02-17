import './App.css';
import { Text, Flex } from '@chakra-ui/react'

function App() {
  return (
    <Flex
    w='100%'>
      <Flex
      w='100%'
      justify='center'
      align='center'
      direction='column'>
        <Text
        fontSize='3em'>BPM meter
        </Text>
        <Flex
        mt='2em'
        boxSize='8em'
        boxShadow='xl'
        border='1px solid'
        borderRadius='50%'
        bg='gray'
        p='1em'
        justify='center'
        align='center'>
        <Text
        fontSize='2em'>0
        </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
