import React from 'react'
import { Button, Box, Flex, HStack } from '@chakra-ui/react'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'

import { scroller } from 'react-scroll'

const Form = () => {
    const goToStep = (step) => {
        scroller.scrollTo(`step${step}`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'form'
        })
    }
    return (
        <Box
            w='100%'
        >
            <Box
                position='top'
                right='0'
                bottom='0'
                zIndex='banner'
            >
                <HStack>
                    <Button
                        onClick={() => { goToStep(1) }}
                    >↑</Button>
                    <Button
                        onClick={() => { goToStep(2) }}
                    >↓</Button>
                </HStack>
            </Box>
            <Box
                id='form'
                mx='auto'
                maxW='800px'
                h='100vh'
                // border='solid 1px'
                // borderColor='gray.300'
                px='0.5rem'
                overflowY='hidden'
                position='relative'
            >
                <Flex
                    h='100vh'
                    alignItems='center'
                    id='step1'
                >
                    <Step1
                        goToStep={() => { goToStep(2) }}
                    />
                </Flex>
                <Flex
                    h='100vh'
                    alignItems='center'
                    id='step2'
                >
                    <Step2
                        goToStep={() => { goToStep(3) }}
                    />
                </Flex>
                <Flex
                    h='100vh'
                    alignItems='center'
                    id='step3'
                >
                    <Step3
                        goToStep={() => { goToStep(3) }}
                    />
                </Flex>
            </Box>
        </Box>
    )
}

export default Form