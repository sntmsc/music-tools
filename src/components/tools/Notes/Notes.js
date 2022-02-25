import {useState} from 'react'
import '../../../App.css'
import { Flex, Text } from '@chakra-ui/react'
import NoteSelect from './notes-components/NoteSelect/NoteSelect';
import NoteButton from './notes-components/NoteButton';
import { motion } from 'framer-motion';
 const Notes= ({app, setApp, variants})=> {

const objNote = {
    nt:'',
    fq:0
  }

const [note, setNote] = useState(objNote);

const arrAllNotes = [
  {note:'C',freq:261.63},
  {note:'C#',freq:277.18},
  {note:'D',freq:293.66},
  {note:'D#',freq:311.13},
  {note:'E',freq:329.63},
  {note:'F',freq:349.23},
  {note:'F#',freq:369.99},
  {note:'G',freq:392},
  {note:'G#',freq:415},
  {note:'A',freq:440},
  {note:'A#',freq:466.16},
  {note:'B',freq:493.88}
]
  return (
    <Flex
    as={motion.div}
    variants={variants}
    initial='init'
    animate='value'
    exit='exit'
    w='100%'
    h='100vh'
    bg='black'
    justify='center'
    align='center'>
      <Flex
      wrap='wrap'
      gap='5px'
      w='17em'
      justify='center'
      align='center'>
          {note.nt === '' && 
          <>
          <Flex
          position='absolute'
          top='0%'
          w='100%'
          justify='flex-end'
          mr='1em'
          mt='.5em'
          align='center'>
            <Text
            onClick={()=>setApp(!app)}
            cursor='pointer'
            p='.3em'
            border='1px solid white'
            color='white'
            fontSize='1.5em'>TAP BPM</Text>
          </Flex>
          <Flex
            wrap='wrap'
            gap='5px'
            justify='center'
            align='center'>
            {arrAllNotes.map((x,i)=>
              <NoteButton key={i} fq={x.freq} nt={x.note} setNote={(value)=> setNote(value)}/>
            )}
          </Flex>
          
          </>
          }
          {note.nt !== '' && 
          <NoteSelect
          setNote={(value)=>setNote(value)}
          fq={note.fq} nt={note.nt}
          objNote={objNote}
          setFreq={(frequency)=>setNote({...note,fq:frequency})}/>
          }
      </Flex>
    </Flex>
  );
}

export default Notes;
