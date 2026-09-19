import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaStackOverflow, FaGithub } from "react-icons/fa";

export const Home = () => {
  return (
    <Box
      as="section"
      py={{ base: 10, md: 32 }}
      bg="white"
      _dark={{ bg: "dark.800" }}
    >
      <Stack align="center">
        <Container maxW="4xl">
          <Stack gap={8} align="center" textAlign="center">
            <div>
              <Heading
                as="h1"
                size="2xl"
                color="primary.700"
                _dark={{ color: "primary.200" }}
              >
                Rene Ivan Limon Chacon
              </Heading>
              <Heading
                as="h2"
                size="lg"
                color="primary.700"
                _dark={{ color: "primary.200" }}
              >
                Software engineer
              </Heading>
            </div>

            <Text
              fontSize="lg"
              color="gray.600"
              _dark={{ color: "gray.300" }}
              maxW="2xl"
              px={{ base: 4, md: 0 }}
              textAlign="justify"
            >
              Rene has 10 years of experience as a front-end developer working
              with technologies such as React, React native, Jquery, CSS, HTML,
              and vanillaJS. He has been part of development teams using agile
              methodologies and many tools for diverse projects. Responsible,
              fast learner and collaborative.
            </Text>
            <HStack gap={4} mt={8} justify="end" flexWrap="wrap">
              <IconButton
                aria-label="Linkedin profile"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/renelimon/",
                    "_blank",
                  )
                }
              >
                <FaLinkedinIn />
              </IconButton>
              <IconButton
                aria-label="Stack Overflow profile"
                onClick={() =>
                  window.open(
                    "https://es.stackoverflow.com/users/23233/rene-limon",
                    "_blank",
                  )
                }
              >
                <FaStackOverflow />
              </IconButton>
              <IconButton
                aria-label="Github profile"
                onClick={() =>
                  window.open("https://github.com/soyreneon", "_blank")
                }
              >
                <FaGithub />
              </IconButton>
              {/* <Button
                  asChild
                  size="lg"
                  bg="primary.600"
                  color="white"
                  _hover={{ bg: "primary.700" }}
                  _dark={{ bg: "primary.500" }}
                >
                  <RouterLink to="/blog">Read Posts</RouterLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  borderColor="accent.600"
                  color="accent.600"
                  _hover={{
                    bg: "accent.50",
                  }}
                  _dark={{
                    borderColor: "accent.400",
                    color: "accent.400",
                  }}
                >
                  <RouterLink to="/about">About Me</RouterLink>
                </Button> */}
            </HStack>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
};
