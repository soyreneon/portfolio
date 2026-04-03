import { Box, Text } from "@chakra-ui/react";
import type { RichTextDocument } from "@/types";

interface RichTextRendererProps {
  document: RichTextDocument;
}

export const RichTextRenderer = ({ document }: RichTextRendererProps) => {
  if (!document || !document.content) {
    return null;
  }

  return (
    <Box>
      {document.content.map((block, index) => {
        if (block.nodeType === "paragraph") {
          return (
            <Text key={index} mb={4} fontSize="md" lineHeight="1.6">
              {block.content?.map((content, contentIndex) =>
                content.value ? (
                  <span key={contentIndex}>{content.value}</span>
                ) : null,
              )}
            </Text>
          );
        }
        if (block.nodeType === "heading-1") {
          return (
            <Box key={index} as="h1" fontSize="4xl" fontWeight="bold" mb={4}>
              {block.content?.map((content, contentIndex) =>
                content.value ? (
                  <span key={contentIndex}>{content.value}</span>
                ) : null,
              )}
            </Box>
          );
        }
        if (block.nodeType === "heading-2") {
          return (
            <Box key={index} as="h2" fontSize="3xl" fontWeight="bold" mb={3}>
              {block.content?.map((content, contentIndex) =>
                content.value ? (
                  <span key={contentIndex}>{content.value}</span>
                ) : null,
              )}
            </Box>
          );
        }
        return null;
      })}
    </Box>
  );
};
