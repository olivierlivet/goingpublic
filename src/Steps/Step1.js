import React from 'react'
import { Box, Text,
    useRadio,
    useRadioGroup,
    SimpleGrid,
    Grid
 } from '@chakra-ui/react'

const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="sm"
          _checked={{
            bg: "blue.700",
            color: "white",
            borderColor: "blue.700",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }

const Step1 = ( props ) => {
    
    // return(
    //     <Box>
    //         <Text as="label">Avez-vous plutôt...</Text>

    //     </Box>
    // )

    const options = [
        "Un besoin à satisfaire",
        "Une offre à présenter",
        "Une candidature à soumettre",
        "Une question à poser"
    ]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "react",
        onChange: () => { props.goToStep() },
        // onChange: props.goToStep
    })

  const group = getRootProps()

  return (
    <SimpleGrid
        columns={{ base:1, lg:2 }}
        w='100%'
        gap='1rem'
        {...group}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </SimpleGrid>
  )

}

export default Step1