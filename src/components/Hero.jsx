import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box py={'120px'}>
        <Container maxW={'container.lg'}>
            <Heading color={'white'} fontSize={'60px'} fontWeight={600}>
                Erokhina Ekaterina
            </Heading>
        </Container>
    </Box>
  )
}

export default Hero
