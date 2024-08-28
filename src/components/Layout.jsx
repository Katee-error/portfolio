import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Routers from "../router/Routers";
import { Box, Flex, Text } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Flex flexDirection={"column"} minH={"100vh"} bgColor={"brand.bg"}>
      { <Box
        position="fixed"
        top="50%"
        right="40px"
        transform="translateY(-50%)"
        color="brand.text"
        p={5}
        textAlign="center"
        zIndex="1000"
        w="30px"
      >
        <Box height="250px" bg="brand.text" w={'1px'} ml={'5px'} mb={'10px'} />
        <Text transform="rotate(-360deg)" fontWeight={300} >ERROR</Text>
        <Box height="250px" bg="brand.text" w={'1px'} ml={'5px'} mt={'10px'} />
      </Box>}

      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Flex>
  );
};

export default Layout;
