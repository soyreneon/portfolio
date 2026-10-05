import { Box, Heading, Stack, Text, Link, Image } from "@chakra-ui/react";
import type { Block, Inline, Text as RichTextText } from "@contentful/rich-text-types";
import { Link as RouterLink } from "react-router";
import type { Post } from "@/types";

const getTextContent = (node: Block | Inline | RichTextText): string => {
  if ("value" in node) {
    return node.value;
  }

  return node.content.map(getTextContent).join("");
};

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const { title, description, headImage } = post.fields;
  const preview = description?.content[0]
    ? getTextContent(description.content[0])
    : "";
  const imageUrl = headImage?.fields?.file?.url
    ? `https:${headImage.fields.file.url}`
    : undefined;

  return (
    <Link asChild _hover={{ textDecoration: "none" }}>
      <RouterLink to={`/post/${post.sys.id}`}>
        <Box
          bg="white"
          _dark={{ bg: "dark.700" }}
          borderRadius="lg"
          overflow="hidden"
          transition="all 0.3s"
          _hover={{
            boxShadow: "lg",
            transform: "translateY(-4px)",
          }}
          cursor="pointer"
          display="block"
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              width="100%"
              height="200px"
              objectFit="cover"
            />
          )}
          <Stack gap={3} padding={6}>
            <Heading as="h3" size="md" color="primary.600">
              {title}
            </Heading>
            {preview && (
              <Text
                color="gray.600"
                _dark={{ color: "gray.300" }}
                lineClamp={2}
              >
                {preview}
              </Text>
            )}
            <Text fontSize="sm" color="accent.600" fontWeight="medium">
              Read more →
            </Text>
          </Stack>
        </Box>
      </RouterLink>
    </Link>
  );
};

interface PostGridProps {
  posts: Post[];
  isLoading?: boolean;
}

export const PostGrid = ({ posts, isLoading }: PostGridProps) => {
  if (isLoading) {
    return <Text>Loading posts...</Text>;
  }

  if (posts.length === 0) {
    return <Text>No posts found.</Text>;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
    >
      {posts.map((post) => (
        <PostCard key={post.sys.id} post={post} />
      ))}
    </Box>
  );
};
