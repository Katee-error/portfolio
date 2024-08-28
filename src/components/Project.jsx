import {
  Box,
  Container,
  Text,
  Card,
  Flex,
  Image,
  Link,
  VStack,
  CardBody,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import monocureImg from "./../assets/project/monocure.jpg";
import clinicalImg from "./../assets/project/clinical-heart.jpg";
import shopImg from "./../assets/project/shop.jpg";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

const Project = () => {
  const MotionImage = motion(Image);
  return (
    <Box py={"60px"}>
      <Container maxW={"container.lg"}>
        <VStack gap={{base:'100px',md:"170px"}}>
          <Flex justifyContent={"space-between"} gap={"50px"} alignItems={'start'} flexDir={{base: 'column', md: 'row'}}>
            <MotionImage
              src={monocureImg}
              opacity={"40%"}
              borderRadius={"10px"}
              whileHover={{ scale: 1.05, opacity: "90%" }}
              objectFit={"contain"}
              w={{base:'100%',md:"50%"}}
              h={"auto"}
            />
            <VStack gap={"20px"} alignItems={"start"}>
              <Card
                maxW="lg"
                bgColor={"#242d3d"}
                border={"1px solid #475162"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody color={"brand.text"}>
                  <Heading
                    fontSize={"20px"}
                    mb={"20px"}
                    fontWeight={300}
                    color={"brand.main"}
                  >
                    01. Monocure project
                  </Heading>
                  <Text fontSize={"14px"}>
                    A landing page created for product presentation and future
                    sales, featuring localization and multilingual support, with
                    a feedback form submission to Gmail (using Express).
                    Currently, the site functions as a landing page, but after
                    the product registration and release, there are plans to
                    develop the site into an online store with the capability to
                    sell products online across European countries and integrate
                    a payment system.
                  </Text>
                </CardBody>
              </Card>
              <Flex
                color={"brand.text"}
                alignItems={"center"}
                gap={'20px'}
                fontSize={{base: '12px', md: '16px'}}
                fontWeight={300}
              >
                <Text _hover={{ color: "brand.main" }}>React</Text>
                <Text _hover={{ color: "brand.main" }}>Express</Text>
                <Text _hover={{ color: "brand.main" }}>JS6</Text>
                <Text _hover={{ color: "brand.main" }}>TS</Text>
                <Text _hover={{ color: "brand.main" }}>Chakra UI</Text>
                <Text _hover={{ color: "brand.main" }}>Gmail Api</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"20px"}>
                <Link href="https://github.com/Katee-error/Monocure.git">
                  <IconButton
                    as={FaGithub}
                    bg={"none"}
                    color={"white"}
                    opacity={"50%"}
                    _hover={{ opacity: "100%" }}
                    _active={{ bg: "none" }}
                    w={"25px"}
                    h={"25px"}
                  />
                </Link>
                <Link href="https://monocure.ee/">
                  <IconButton
                    as={RiExternalLinkLine}
                    bg={"none"}
                    color={"white"}
                    opacity={"50%"}
                    _hover={{ opacity: "100%" }}
                    _active={{ bg: "none" }}
                    w={"25px"}
                    h={"25px"}
                  />
                </Link>
              </Flex>
            </VStack>
          </Flex>
          <Flex justifyContent={"space-between"} gap={"50px"} alignItems={'start'} flexDir={{base: "column-reverse", md: 'row'}} >
            <VStack gap={"20px"} alignItems={"start"} >
              <Card
                maxW="lg"
                bgColor={"#242d3d"}
                border={"1px solid #475162"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody color={"brand.text"}>
                  <Heading
                    fontSize={"20px"}
                    mb={"20px"}
                    fontWeight={300}
                    color={"brand.main"}
                  >
                    02. Clinical Heart project
                  </Heading>
                  <Text fontSize={"14px"}>
                    A clinic website developed using React and Chakra UI,
                    featuring a user-friendly interface that provides
                    comprehensive information about specialists, clinic
                    services, and location. Data from the contact form is sent
                    as a template to WhatsApp.
                  </Text>
                </CardBody>
              </Card>
              <Flex
                color={"brand.text"}
                alignItems={"center"}
                gap={"20px"}
                fontWeight={300}
                fontSize={{base: '12px', md: '16px'}}
              >
                <Text _hover={{ color: "brand.main" }}>React</Text>

                <Text _hover={{ color: "brand.main" }}>JS6</Text>

                <Text _hover={{ color: "brand.main" }}>Chakra UI</Text>
                <Text _hover={{ color: "brand.main" }}>WhatsApp Api</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"20px"}>
                <Link href="https://github.com/Katee-error/Heart-Clinic.git">
                  <IconButton
                    as={FaGithub}
                    bg={"none"}
                    color={"white"}
                    opacity={"50%"}
                    _hover={{ opacity: "100%" }}
                    _active={{ bg: "none" }}
                    w={"25px"}
                    h={"25px"}
                  />
                </Link>
                <Link href="https://heart-clinic.vercel.app/">
                  <IconButton
                    as={RiExternalLinkLine}
                    bg={"none"}
                    color={"white"}
                    opacity={"50%"}
                    _hover={{ opacity: "100%" }}
                    _active={{ bg: "none" }}
                    w={"25px"}
                    h={"25px"}
                  />
                </Link>
              </Flex>
            </VStack>{" "}
            <MotionImage
              src={clinicalImg}
              opacity={"40%"}
              borderRadius={"10px"}
              whileHover={{ scale: 1.05, opacity: "90%" }}
              objectFit={"contain"}
              w={{base:'100%',md:"50%"}}
              h={"auto"}
            />
          </Flex>
          <Flex justifyContent={"space-between"} gap={"50px"} alignItems={'start'} flexDir={{base: 'column', md: 'row'}}>
            <MotionImage
              src={shopImg}
              opacity={"40%"}
              borderRadius={"10px"}
              whileHover={{ scale: 1.05, opacity: "90%" }}
              objectFit={"contain"}
              w={{base:'100%',md:"50%"}}
              h={"auto"}
            />
            <VStack gap={"20px"} alignItems={"start"}>
              <Card
                maxW="lg"
                bgColor={"#242d3d"}
                border={"1px solid #475162"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody color={"brand.text"}>
                  <Heading
                    fontSize={"20px"}
                    mb={"20px"}
                    fontWeight={300}
                    color={"brand.main"}
                  >
                    03. E-commerce shop
                  </Heading>
                  <Text fontSize={"14px"}>
                    A furniture e-commerce website project, developed using
                    React and Redux, offers a modern and convenient solution for
                    online shopping. The site features login and registration
                    forms, along with a user-friendly system for filtering and
                    searching through the product list. Users can easily add
                    selected items to the cart and place orders through an
                    intuitive interface..
                  </Text>
                </CardBody>
              </Card>
              <Flex
                color={"brand.text"}
                alignItems={"center"}
                gap={"20px"}
                fontWeight={300}
                fontSize={{base: '12px', md: '16px'}}
              >
                <Text _hover={{ color: "brand.main" }}>React</Text>
                <Text _hover={{ color: "brand.main" }}>Firebase</Text>
                <Text _hover={{ color: "brand.main" }}>JS6</Text>
                <Text _hover={{ color: "brand.main" }}>Chakra UI</Text>
                <Text _hover={{ color: "brand.main" }}>Redux</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"20px"}>
                <Link href="https://github.com/Katee-error/furniture-E-commerce.git">
                  <IconButton
                    as={FaGithub}
                    bg={"none"}
                    color={"white"}
                    opacity={"50%"}
                    _hover={{ opacity: "100%" }}
                    _active={{ bg: "none" }}
                    w={"25px"}
                    h={"25px"}
                  />
                </Link>
                <Link href="https://furniture-e-commerce-iqxh.vercel.app/home">
                  <IconButton
                    as={RiExternalLinkLine}
                    bg={"none"}
                    color={"white"}
                    opacity={"50%"}
                    _hover={{ opacity: "100%" }}
                    _active={{ bg: "none" }}
                    w={"25px"}
                    h={"25px"}
                  />
                </Link>
              </Flex>
            </VStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Project;
