import React from 'react'
import {
    Flex,
    Box,
    Image,
    Text
} from '@chakra-ui/react'
import { animateScroll as scroll, scroller } from 'react-scroll'


const Welcome = () => {
    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            bg='gray.50'
            h='100vh'
            w='100vw'
            position='relative'
        >
            <Image
                onClick={() => scroll.scrollToBottom(
                    {
                        duration: 1200,
                        delay: 0,
                        smooth: 'ease'
                    }
                ) }
                cursor="pointer" alt="Going Public" src='https://www.goingpublic.fr/img/logo.png' />
            <Box
                position='absolute'
                bottom='0'
                right='0'
                p='1rem'
            >
                <Text>
                    Signal Group<br />
                    3 rue de Milan<br />
                    75009 Paris<br />
                </Text>
            </Box>
            <Box>

            </Box>
        </Flex>
    )
}

export default Welcome