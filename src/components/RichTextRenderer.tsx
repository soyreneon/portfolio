import { Box, Code, Heading, Image, Link, Text } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Block, Inline } from "@contentful/rich-text-types";
import type { RichTextDocument } from "@/types";

interface RichTextRendererProps {
  document: RichTextDocument;
}

const getEmbeddedImage = (node: Block | Inline) => {
  const target: unknown = node.data.target;
  if (!target || typeof target !== "object" || !("fields" in target)) {
    return null;
  }

  const fields: unknown = target.fields;
  if (!fields || typeof fields !== "object" || !("file" in fields)) {
    return null;
  }

  const file: unknown = fields.file;
  if (!file || typeof file !== "object" || !("url" in file)) {
    return null;
  }

  const url = file.url;
  const contentType = "contentType" in file ? file.contentType : undefined;
  if (
    typeof url !== "string" ||
    (typeof contentType === "string" && !contentType.startsWith("image/"))
  ) {
    return null;
  }

  const title = "title" in fields ? fields.title : undefined;
  const description = "description" in fields ? fields.description : undefined;
  const alt = typeof description === "string" ? description : title;

  return {
    src: url.startsWith("//") ? `https:${url}` : url,
    alt: typeof alt === "string" ? alt : "",
  };
};

export const RichTextRenderer = ({ document }: RichTextRendererProps) => {
  if (!document?.content?.length) {
    return null;
  }

  return (
    <Box>
      {documentToReactComponents(document, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (_node, children) => (
            <Text as="p" mb={4} lineHeight="1.8">
              {children}
            </Text>
          ),
          [BLOCKS.HEADING_1]: (_node, children) => (
            <Heading as="h1" size="2xl" mb={4}>
              {children}
            </Heading>
          ),
          [BLOCKS.HEADING_2]: (_node, children) => (
            <Heading as="h2" size="xl" mb={3}>
              {children}
            </Heading>
          ),
          [BLOCKS.HEADING_3]: (_node, children) => (
            <Heading as="h3" size="lg" mb={3}>
              {children}
            </Heading>
          ),
          [BLOCKS.HEADING_4]: (_node, children) => (
            <Heading as="h4" size="md" mb={2}>
              {children}
            </Heading>
          ),
          [BLOCKS.HEADING_5]: (_node, children) => (
            <Heading as="h5" size="sm" mb={2}>
              {children}
            </Heading>
          ),
          [BLOCKS.HEADING_6]: (_node, children) => (
            <Heading as="h6" size="xs" mb={2}>
              {children}
            </Heading>
          ),
          [BLOCKS.UL_LIST]: (_node, children) => (
            <Box as="ul" pl={8} mb={4} listStyleType="disc">
              {children}
            </Box>
          ),
          [BLOCKS.OL_LIST]: (_node, children) => (
            <Box as="ol" pl={6} mb={4} listStyleType="decimal">
              {children}
            </Box>
          ),
          [BLOCKS.LIST_ITEM]: (_node, children) => (
            <Box as="li" mb={1}>
              {children}
            </Box>
          ),
          [BLOCKS.QUOTE]: (_node, children) => (
            <Box
              as="blockquote"
              borderLeftWidth="4px"
              borderColor="gray.300"
              _dark={{ borderColor: "gray.600", color: "gray.300" }}
              pl={4}
              my={4}
              color="gray.600"
              fontStyle="italic"
            >
              {children}
            </Box>
          ),
          [BLOCKS.HR]: () => <Box as="hr" my={6} borderColor="gray.300" />,
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const image = getEmbeddedImage(node);
            return image ? (
              <Image
                src={image.src}
                alt={image.alt}
                maxW="full"
                my={6}
                rounded="md"
              />
            ) : null;
          },
          [BLOCKS.EMBEDDED_ENTRY]: () => null,
          [INLINES.HYPERLINK]: (node, children) => {
            const uri = node.data.uri;
            const scheme = uri
              .match(/^([a-z][a-z\d+.-]*):/i)?.[1]
              .toLowerCase();
            if (
              scheme &&
              !["http", "https", "mailto", "tel"].includes(scheme)
            ) {
              return <>{children}</>;
            }

            const isExternal = /^https?:\/\//i.test(uri);
            return (
              <Link
                href={uri}
                color="primary.600"
                _dark={{ color: "primary.300" }}
                textDecoration="underline"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {children}
              </Link>
            );
          },
          [INLINES.ENTRY_HYPERLINK]: (_node, children) => <>{children}</>,
          [INLINES.ASSET_HYPERLINK]: (_node, children) => <>{children}</>,
          [INLINES.EMBEDDED_ENTRY]: () => null,
        },
        renderMark: {
          [MARKS.BOLD]: (text) => <Text as="strong">{text}</Text>,
          [MARKS.ITALIC]: (text) => <Text as="em">{text}</Text>,
          [MARKS.UNDERLINE]: (text) => (
            <Text as="span" textDecoration="underline">
              {text}
            </Text>
          ),
          [MARKS.CODE]: (text) => <Code>{text}</Code>,
          [MARKS.SUPERSCRIPT]: (text) => <Text as="sup">{text}</Text>,
          [MARKS.SUBSCRIPT]: (text) => <Text as="sub">{text}</Text>,
          [MARKS.STRIKETHROUGH]: (text) => <Text as="del">{text}</Text>,
        },
      })}
    </Box>
  );
};
