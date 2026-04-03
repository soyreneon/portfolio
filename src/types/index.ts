export interface RichTextContent {
  nodeType: "text";
  value: string;
  marks: Array<{ type: string }>;
  data: Record<string, unknown>;
}

export interface RichTextBlock {
  nodeType: string;
  data: Record<string, unknown>;
  content: RichTextContent[];
}

export interface RichTextDocument {
  nodeType: "document";
  data: Record<string, unknown>;
  content: RichTextBlock[];
}

export interface FileDetails {
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

export interface AssetFields {
  title: string;
  file: FileDetails;
}

export interface Asset {
  sys: {
    id: string;
    type: "Asset";
  };
  fields: AssetFields;
}

export interface PostFields {
  title: string;
  slug?: string;
  description?: RichTextDocument;
  headImage?: Asset;
}

export interface PostSys {
  id: string;
  type: "Entry";
  createdAt: string;
  updatedAt: string;
  publishedVersion?: number;
  locale: string;
}

export interface Post {
  sys: PostSys;
  fields: PostFields;
}
