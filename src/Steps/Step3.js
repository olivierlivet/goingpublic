import React, { useState } from 'react'
import { Box, Button, Text, Textarea, Stack, VStack
 } from '@chakra-ui/react'

const Step3 = () => {

  const [ value, setValue ] = useState('')

  return (
    <Stack>
      <Text>Nous serons enchantés d'échanger avec vous test, si vous souhaitez démarrer la discussion en quelques mots, n'hésitez pas !</Text>
      <VStack spacing='1rem'>
        <Textarea
          onChange={ (e, value)=>{ setValue( e.target.value ) }}
        ></Textarea>
       
      </VStack>
      <Box>
        { value.length > 2 ? 
          <Button variant="blue" onClick={ ()=>{ alert('Demo end') }}>Valider</Button>
          : null }
      </Box>
    </Stack>
  )

}

export default Step3