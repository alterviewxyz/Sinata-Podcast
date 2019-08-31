// @flow
import type { Node as ReactNode } from 'react';

export type RenderCallback = (data: any) => ReactNode;

export type Entry = (string[]) => string;

export type WidgetFor = (string) => string;

export type PageContext = {
  tag: string,
  category: string,
  currentPage: number,
  prevPagePath: string,
  nextPagePath: string,
  hasPrevPage: boolean,
  hasNextPage: boolean
};

export type Node = {
  fields: {
    slug: string,
    categorySlug?: string,
    tagSlugs?: string[]
    seasonSlug?: string,
  },
  frontmatter: {
    date: string,
    description?: string,
    category?: string,
    season?: string,
    tags?: string[],
    number: string,
    title: string,
    cover: string,
    castbox_embed: string,
    anchor: string,
    mp3: string,
    castbox: string,
    google_podcast: string,
    spotify: string,
    anchor: string,
    cover: string,
    banner: string,
  },
  html: string,
  id: string
};

export type Edge = {
  node: Node
};

export type Edges = Array<Edge>;

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Edges,
  },
  group: {
    fieldValue: string,
    totalCount: number
  }[]
};

export type MarkdownRemark = Node;
