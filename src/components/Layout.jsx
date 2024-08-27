import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Routers from "../router/Routers";
import { Box, Flex, Text } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Flex flexDirection={"column"} minH={"100vh"} bgColor={"brand.bg"}>
      {/* <Box
        position="fixed"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        bg="blue.500"
        color="white"
        p={4}
        textAlign="center"
        zIndex="1000"
        w="50px"
      >
        <Text transform="rotate(-90deg)">Левый текст</Text>
        <Box height="4px" bg="white" mt={2} />
      </Box> */}

      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Flex>
  );
};

export default Layout;
