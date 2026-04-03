import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

export const Home = () => {
  return (
    <Box
      as="section"
      py={{ base: 20, md: 32 }}
      bg="white"
      _dark={{ bg: "dark.800" }}
    >
      <Container maxW="4xl">
        <Stack gap={8} align="center" textAlign="center">
          <Stack gap={4}>
            <Heading
              as="h1"
              size="2xl"
              color="primary.700"
              _dark={{ color: "primary.200" }}
            >
              Welcome to My Portfolio
            </Heading>
            <Text
              fontSize="lg"
              color="gray.600"
              _dark={{ color: "gray.300" }}
              maxW="2xl"
            >
              Explore my latest projects, thoughts, and experiences. Here you'll
              find insights about web development, design, and technology.
            </Text>
          </Stack>

          <HStack gap={4}>
            <Button
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
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};
