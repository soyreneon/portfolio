import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import client from "@/config/contentful";
// import { WorkGrid } from "@/components";
import { WorkGrid } from "@/components";
import type { Work as WorkType } from "@/types";

export const Work = () => {
  const [work, setWork] = useState<WorkType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWork = async () => {
      try {
        setIsLoading(true);
        const entries = await client.getEntries({
          content_type: "workingProject",
        });

        setWork(entries.items as unknown as WorkType[]);
      } catch (err) {
        setError("Failed to load work. Please try again later.");
        console.error("Error fetching work:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getWork();
  }, []);

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
            <Heading
              as="h1"
              size="2xl"
              color="primary.700"
              _dark={{ color: "primary.200" }}
            >
              Working Experience
            </Heading>
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

          <WorkGrid works={work} isLoading={isLoading} />
        </Container>
      </Stack>
    </Box>
  );
};
