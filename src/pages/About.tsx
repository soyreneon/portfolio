import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 24 }}
      bg="white"
      _dark={{ bg: "dark.800" }}
    >
      <Container maxW="3xl">
        <Stack gap={8}>
          <Heading
            as="h1"
            size="2xl"
            color="primary.700"
            _dark={{ color: "primary.200" }}
          >
            About Me
          </Heading>

          <Stack gap={6}>
            <Box>
              <Heading
                as="h2"
                size="md"
                mb={3}
                color="accent.600"
                _dark={{ color: "accent.400" }}
              >
                Who am I?
              </Heading>
              <Text
                fontSize="md"
                lineHeight="1.8"
                color="gray.700"
                _dark={{ color: "gray.200" }}
              >
                I'm a passionate developer dedicated to creating beautiful and
                functional web experiences. With a focus on modern technologies
                and best practices, I strive to build solutions that make a
                difference.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h2"
                size="md"
                mb={3}
                color="accent.600"
                _dark={{ color: "accent.400" }}
              >
                What I Do
              </Heading>
              <Text
                fontSize="md"
                lineHeight="1.8"
                color="gray.700"
                _dark={{ color: "gray.200" }}
              >
                I specialize in React development, TypeScript, and creating
                responsive user interfaces with modern tools like Chakra UI. I'm
                passionate about writing clean, maintainable code and staying
                updated with the latest web development trends.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h2"
                size="md"
                mb={3}
                color="accent.600"
                _dark={{ color: "accent.400" }}
              >
                My Interests
              </Heading>
              <Text
                fontSize="md"
                lineHeight="1.8"
                color="gray.700"
                _dark={{ color: "gray.200" }}
              >
                Beyond coding, I'm interested in design systems, performance
                optimization, and open-source contributions. I enjoy learning
                new technologies and sharing knowledge through writing and
                mentoring.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
