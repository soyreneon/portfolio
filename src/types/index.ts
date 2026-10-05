import type { Document } from "@contentful/rich-text-types";

export type RichTextDocument = Document;

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
export interface WorkFields {
  title: string;
  slug?: string;
  init?: string;
  end?: string;
  role?: string;
  mainCompany?: string;
  projectUrl?: string;
  description?: RichTextDocument;
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
export interface Work {
  sys: PostSys;
  fields: WorkFields;
}
