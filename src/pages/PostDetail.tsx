import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { useParams, Link as RouterLink } from "react-router";
import { useEffect, useState } from "react";
import client from "@/config/contentful";
import { RichTextRenderer } from "@/components";
import type { Post } from "@/types";

export const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        setIsLoading(true);
        if (!id) {
          throw new Error("Post ID is required");
        }

        const entry = await client.getEntries({
          content_type: "post",
          "sys.id": id,
          limit: 1,
        });

        if (entry.items.length === 0) {
          throw new Error("Post not found");
        }

        setPost(entry.items[0] as unknown as Post);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load post");
        console.error("Error fetching post:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getPost();
  }, [id]);

  if (isLoading) {
    return (
      <Box py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "dark.800" }}>
        <Container maxW="3xl">
          <Text>Loading post...</Text>
        </Container>
      </Box>
    );
  }

  if (error || !post) {
    return (
      <Box py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "dark.800" }}>
        <Container maxW="3xl">
          <Stack gap={6}>
            <Text color="red.600">{error || "Post not found"}</Text>
            <Button asChild>
              <RouterLink to="/blog">← Back to posts</RouterLink>
            </Button>
          </Stack>
        </Container>
      </Box>
    );
  }

  const { title, description, headImage } = post.fields;
  const imageUrl = headImage?.fields?.file?.url
    ? `https:${headImage.fields.file.url}`
    : undefined;

  return (
    <Box as="article" bg="white" _dark={{ bg: "dark.800" }}>
      {imageUrl && (
        <Box
          width="100%"
          height={{ base: "250px", md: "400px" }}
          overflow="hidden"
        >
          <Image
            src={imageUrl}
            alt={title}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
      )}

      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="3xl">
          <Stack gap={8}>
            <Stack gap={4}>
              <Heading
                as="h1"
                size="2xl"
                color="primary.700"
                _dark={{ color: "primary.200" }}
              >
                {title}
              </Heading>
              <Text
                fontSize="sm"
                color="gray.500"
                _dark={{ color: "gray.400" }}
              >
                Published on{" "}
                {new Date(post.sys.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </Stack>

            {description && (
              <Box
                color="gray.700"
                _dark={{ color: "gray.200" }}
                fontSize="md"
                lineHeight="1.8"
              >
                <RichTextRenderer document={description} />
              </Box>
            )}

            <Box
              borderTopWidth={1}
              borderTopColor="gray.200"
              _dark={{ borderTopColor: "gray.700" }}
              pt={8}
            >
              <Button asChild>
                <RouterLink to="/blog">← Back to posts</RouterLink>
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
