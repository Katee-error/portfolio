import React from "react";
import {
  Box,
  Container,
  Divider,
  Link,
  Flex,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa6";
// import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <Box py={"60px"}>
      <Container maxW={"container.lg"}>
        <Divider h={"1px"} color={'brand.text'}/>
        <Flex
          color={"brand.text"}
          alignItems={"start"}
          justifyContent={"space-between"}
          mt={"40px"}
        >
          <VStack alignItems={"start"}>
            <Link href="mailto:ekaterinaerokhina.work@protonmail.com">
              ekaterinaerokhina.work@protonmail.com
            </Link>
            <Link>+7(953)699-53-62</Link>
          </VStack>
          <HStack gap={'20px'}>
            <Link href="https://t.me/katee_error">
              <FaTelegram size={"25px"} bg={"none"} color={"brand.text"}/>
            </Link>
            <Link
              href="https://instagram.com/katee_error?igshid=YmMyMTA2M2Y=">
              <FaInstagram size={"25px"} bg={"none"} color={"brand.text"} />
            </Link>
            <Link href="https://github.com/Katee-error">
              <FaGithub size={"25px"} bg={"none"} color={"brand.text"}/>
            </Link>e
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
