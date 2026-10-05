import { Box, Heading, Stack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import type { Work } from "@/types";

interface WorkCardProps {
  work: Work;
}

export const WorkCard = ({ work }: WorkCardProps) => {
  console.log("Rendering WorkCard for work:", work.fields);
  const { title, init, end, role } = work.fields;
  const startDate = init ? new Date(init) : null;
  const endDate = end ? new Date(end) : null;
  // const imageUrl = headImage?.fields?.file?.url
  //   ? `https:${headImage.fields.file.url}`
  //   : undefined;

  return (
    <Link asChild _hover={{ textDecoration: "none" }} display="block">
      <RouterLink to={`/work/${work.sys.id}`}>
        <Box
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
          <Stack gap={3} padding={6}>
            <Stack
              gap={3}
              padding={6}
              pb={1}
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "flex-start", md: "center" }}
            >
              <Heading as="h3" size="md" color="primary.600">
                {title}
              </Heading>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="gray.500"
                _dark={{ color: "gray.400" }}
                px={{ base: 4, md: 0 }}
              >
                {startDate
                  ? `${startDate.getMonth() + 1}/${startDate.getFullYear()}`
                  : ""}
                {endDate
                  ? ` - ${endDate.getMonth() + 1}/${endDate.getFullYear()}`
                  : ""}
              </Text>
            </Stack>

            {role && (
              <Text
                color="gray.600"
                textStyle="sm"
                _dark={{ color: "gray.300" }}
                lineClamp={5}
                px={10}
              >
                {role}
              </Text>
            )}
            <Text fontSize="sm" px={10} color="accent.600" fontWeight="medium">
              Read more →
            </Text>
          </Stack>
        </Box>
      </RouterLink>
    </Link>
  );
};

interface WorkGridProps {
  works: Work[];
  isLoading?: boolean;
}

export const WorkGrid = ({ works, isLoading }: WorkGridProps) => {
  if (isLoading) {
    return <Text>Loading works...</Text>;
  }

  if (works.length === 0) {
    return <Text>No works found.</Text>;
  }

  return (
    <Stack>
      {works.map((work) => (
        <WorkCard key={work.sys.id} work={work} />
      ))}
    </Stack>
  );
};
