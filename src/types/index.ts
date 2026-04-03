import type { EntrySkeletonType } from "contentful";

export interface Post {
  metadata: {
    tags: string[];
    concepts: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    publishedVersion: number;
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: string;
  };
  fields: {
    title: string;
    slug: string;
    description: {
      nodeType: string;
      data: Record<string, unknown>;
      content: {
        nodeType: string;
        data: Record<string, unknown>;
        content: {
          nodeType: string;
          value: string;
          marks: unknown[];
          data: Record<string, unknown>;
        }[];
      }[];
    };
  };
}

/*
{
    "fields": {
        "title": "Acerca",
        "slug": "acerca",
        "description": {
            "nodeType": "document",
            "data": {},
            "content": [
                {
                    "nodeType": "paragraph",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "text",
                            "value": "hey, this is me",
                            "marks": [],
                            "data": {}
                        }
                    ]
                }
            ]
        }
    }
}

*/
