import {useState} from 'react'
import './App.css';
import { Flex } from '@chakra-ui/react'
import Bpm from './components/tools/Bpm';
import Notes from './components/tools/Notes/Notes';

function App() {
 const[app, setApp] = useState(false);

 const variants = {
  init: { opacity: 0 ,transition:{duration: .9 }},
  value: { opacity: 1, transition:{duration:0.5}},
  exit: {opacity: 0,transition: {ease: 'easeInOut', duration:1 }}
}
  return (
    <Flex
    bg='black'
    w='100%'
    h='100vh'>
    {app &&
          <Bpm setApp={(bool)=>setApp(bool)} app={app} variants={variants}/>
      }
      {!app && 
        <Notes setApp={(bool)=>setApp(bool)} app={app} variants={variants}/>
      }
    </Flex>
  );
}

export default App;
