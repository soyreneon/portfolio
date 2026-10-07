import {
  Box,
  Container,
  Heading,
  Link,
  Mark,
  Stack,
  Tag,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaRegBuilding, FaExternalLinkAlt, FaUserTie } from "react-icons/fa";
import { useParams, Link as RouterLink } from "react-router";
import { useEffect, useState } from "react";
import client from "@/config/contentful";
import { RichTextRenderer } from "@/components";
import type { Work } from "@/types";

export const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [work, setWork] = useState<Work | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWork = async () => {
      try {
        setIsLoading(true);
        if (!id) {
          throw new Error("Work ID is required");
        }

        const entry = await client.getEntries({
          content_type: "workingProject",
          "sys.id": id,
          limit: 1,
        });

        if (entry.items.length === 0) {
          throw new Error("Work not found");
        }

        setWork(entry.items[0] as unknown as Work);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load work");
        console.error("Error fetching work:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getWork();
  }, [id]);

  if (isLoading) {
    return (
      <Box py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "dark.800" }}>
        <Container maxW="3xl">
          <Text>Loading work...</Text>
        </Container>
      </Box>
    );
  }

  if (error || !work) {
    return (
      <Box py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "dark.800" }}>
        <Container maxW="3xl">
          <Stack gap={6}>
            <Text color="red.600">{error || "Work not found"}</Text>
            <Button asChild>
              <RouterLink to="/work">← back</RouterLink>
            </Button>
          </Stack>
        </Container>
      </Box>
    );
  }

  const { title, description, init, end, role, mainCompany, projectUrl } =
    work.fields;
  const startDate = init ? new Date(init) : null;
  const endDate = end ? new Date(end) : null;

  return (
    <Box
      as="article"
      bg="white"
      _dark={{ bg: "dark.800" }}
      py={{ base: 10, md: 32 }}
    >
      <Stack align="center">
        <Container maxW="4xl">
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
                fontSize={{ base: "xs", md: "sm" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
                px={{ base: 4, md: 0 }}
              >
                <Mark variant="subtle">
                  {startDate
                    ? `${startDate.getMonth() + 1}/${startDate.getFullYear()}`
                    : ""}
                  {endDate
                    ? ` - ${endDate.getMonth() + 1}/${endDate.getFullYear()}`
                    : ""}
                </Mark>
              </Text>
              <Stack px={10} align="start" direction={"row"} gap={4}>
                {role && (
                  <Tag.Root variant="surface" colorPalette="green">
                    <FaUserTie />
                    <Tag.Label> {role}</Tag.Label>
                  </Tag.Root>
                )}
                {mainCompany && (
                  <Tag.Root variant="surface" colorPalette="blue">
                    <FaRegBuilding />
                    <Tag.Label> Contracted via {mainCompany}</Tag.Label>
                    {/* External Consultant through {mainCompany} */}
                  </Tag.Root>
                )}
              </Stack>

              {projectUrl && (
                <Link
                  px={10}
                  href={projectUrl}
                  _hover={{ color: "accent.600", textDecoration: "none" }}
                  color="gray.700"
                  _dark={{ color: "gray.200", _hover: { color: "accent.400" } }}
                  // fontWeight="medium"
                  fontSize="sm"
                  transition="color 0.2s"
                >
                  Project: {projectUrl} <FaExternalLinkAlt />
                </Link>
              )}
            </Stack>

            {description && (
              <Box
                color="gray.700"
                _dark={{ color: "gray.200" }}
                fontSize="md"
                lineHeight="1.8"
              >
                <Heading
                  as="h1"
                  pb={4}
                  size="xl"
                  color="primary.600"
                  _dark={{ color: "primary.200" }}
                >
                  Activities and responsibilities
                </Heading>

                <RichTextRenderer document={description} />
              </Box>
            )}

            <Box
              borderTopWidth={1}
              borderTopColor="gray.200"
              _dark={{ borderTopColor: "gray.700" }}
              pt={6}
            >
              <Button asChild px={{ base: 4, md: 6 }}>
                <RouterLink to="/work">← back</RouterLink>
              </Button>
            </Box>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
};
