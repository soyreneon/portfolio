import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import client from "@/config/contentful";
import { PostGrid } from "@/components";
import type { Post } from "@/types";

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const entries = await client.getEntries({
          content_type: "post",
        });

        setPosts(entries.items as unknown as Post[]);
      } catch (err) {
        setError("Failed to load posts. Please try again later.");
        console.error("Error fetching posts:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <Box
      as="section"
      py={{ base: 16, md: 24 }}
      bg="white"
      _dark={{ bg: "dark.800" }}
    >
      <Container maxW="6xl">
        <Stack gap={12}>
          <Stack gap={3}>
            <Heading
              as="h1"
              size="2xl"
              color="primary.700"
              _dark={{ color: "primary.200" }}
            >
              Blog Posts
            </Heading>
            <Text
              fontSize="md"
              color="gray.600"
              _dark={{ color: "gray.400" }}
              maxW="2xl"
            >
              Thoughts and insights on web development, design, and technology.
            </Text>
          </Stack>

          {error && (
            <Box
              p={4}
              bg="red.100"
              borderRadius="md"
              color="red.800"
              _dark={{ bg: "red.900", color: "red.100" }}
            >
              {error}
            </Box>
          )}

          <PostGrid posts={posts} isLoading={isLoading} />
        </Stack>
      </Container>
    </Box>
  );
};
