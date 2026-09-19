import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

export const Header = () => {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="1px"
      borderBottomColor="gray.200"
      position="sticky"
      top="0"
      zIndex={100}
      _dark={{ bg: "dark.700", borderBottomColor: "dark.600" }}
    >
      <Stack align="center">
        <Container maxW="6xl" px={{ base: 4, md: 8 }}>
          <Flex justify="space-between" align="center" py={4}>
            {/* Logo/Brand */}
            <Link asChild _hover={{ textDecoration: "none" }}>
              <RouterLink to="/">
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color="primary.600"
                  _dark={{ color: "primary.300" }}
                >
                  Portfolio
                </Text>
              </RouterLink>
            </Link>

            {/* Navigation */}
            <HStack gap={{ base: 4, md: 8 }}>
              <Link
                asChild
                _hover={{ color: "accent.600", textDecoration: "none" }}
                color="gray.700"
                _dark={{ color: "gray.200", _hover: { color: "accent.400" } }}
                fontWeight="medium"
                transition="color 0.2s"
                display={{ base: "none", md: "initial" }}
              >
                <RouterLink to="/">Home</RouterLink>
              </Link>
              <Link
                asChild
                _hover={{ color: "accent.600", textDecoration: "none" }}
                color="gray.700"
                _dark={{ color: "gray.200", _hover: { color: "accent.400" } }}
                fontWeight="medium"
                transition="color 0.2s"
              >
                <RouterLink to="/blog">Blog</RouterLink>
              </Link>
              <Link
                asChild
                _hover={{ color: "accent.600", textDecoration: "none" }}
                color="gray.700"
                _dark={{ color: "gray.200", _hover: { color: "accent.400" } }}
                fontWeight="medium"
                transition="color 0.2s"
              >
                <RouterLink to="/about">About</RouterLink>
              </Link>
              <Link
                asChild
                _hover={{ color: "accent.600", textDecoration: "none" }}
                color="gray.700"
                _dark={{ color: "gray.200", _hover: { color: "accent.400" } }}
                fontWeight="medium"
                transition="color 0.2s"
              >
                <RouterLink to="/contact">Contact</RouterLink>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Stack>
    </Box>
  );
};
