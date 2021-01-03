import React, { useState } from 'react'
import {
  Box, Button, Text, Input, Stack
} from '@chakra-ui/react'

const Step2 = (props) => {
  const [value, setValue] = useState('')

  return (
    <Stack spacing='1rem' w='100%'>
      <Box>
        <Text>Formidable ! Brisons la glace, quel est votre nom ?</Text>
      </Box>
      <Box>
        <Input
          placeholder='Votre nom'
          onChange={(e, value) => { setValue(e.target.value) }}
          type="text"
        />
      </Box>
        {value.length > 0 ?
          <Box>
            <Button
              onClick={() => { props.goToStep(3) }}

            >Valider</Button>
          </Box>
        : null}
    </Stack>
  )

}

export default Step2