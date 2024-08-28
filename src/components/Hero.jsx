import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box py={"120px"} id="about">
      <Container maxW={"container.lg"}>
        <Text color={"brand.main"} fontSize={"14px"}>
          Hello, my name is
        </Text>
        <Heading color={"brand.text"} fontSize={"80px"} fontWeight={500}>
          Erokhina Ekaterina
        </Heading>
        <Text color={'brand.text'} maxW={{base: '100%',md:'70%'}} mt={'20px'} fontWeight={300}>
          Frontend developer with 1 year of commercial development experience.
          Specializing in creating dynamic and responsive web applications using
          React, TypeScript, Redux, and modern frontend development tools.
          Studied UX-UI Design and actively apply the acquired knowledge in
          developing user-friendly web application interfaces.
        </Text>
      </Container>
    </Box>
  );
};

export default Hero;
