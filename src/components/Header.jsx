import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Container, Flex, Heading, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
const Header = () => {
  const MotionButton = motion(Button);
  return (
    <Box py={"40px"}>
      <Container maxW={"container.lg"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading color={"white"} fontWeight={900}>
              {" "}
              404
            </Heading>
          </Box>
          <Flex
            color={"brand.nav"}
            fontSize={"14px"}
            fontWeight={300}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"40px"}
          >
            <NavLink>
              <Link _hover={{ color: "brand.main" }}>
                <Box as={"span"} color={"brand.main"}>
                  01.{" "}
                </Box>
                About
              </Link>
            </NavLink>
            <NavLink>
              <Link _hover={{ color: "brand.main" }}>
                <Box as={"span"} color={"brand.main"}>
                  02.{" "}
                </Box>
                Work
              </Link>
            </NavLink>
            <NavLink>
              <Link _hover={{ color: "brand.main" }}>
                <Box as={"span"} color={"brand.main"}>
                  03.{" "}
                </Box>
                Contact
              </Link>
            </NavLink>

            <Link
              href="/resume_Ekaterina_Erokhina.pdf"
              isExternal
              p={"10px 20px"}
              borderRadius={"10px"}
              fontSize={"14px"}
              fontWeight={400}
              border={"1px solid #34d585"}
              bg={"transparent"}
              color={"brand.main"}
              // bg={"#C7323D"}
              transition="all 0.3s ease"
              _hover={{
                transform: "translateX(-8px)", // Смещение кнопки вверх при ховере
              }}
              //   whileHover={{ scale: 1.05 }}
              //  color={'brand.main'}
              // color={"#C7323D"}
            >
              Resume
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
