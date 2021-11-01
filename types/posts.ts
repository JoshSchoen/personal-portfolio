import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IPost {
    slug?: string;
    date?: string;
    teaserImage?: string;
    title: string;
    subtitle?: string;
    description?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    takeaways?: string;
    role?: string[];
    client?: string;
    goals?: string[];
    type?: string;
  }

  export type IWorkListProps = {
    posts: IPost[];
  };

  export type IWorkItemProps = {
    source: MDXRemoteSerializeResult;
    frontMatter: IPost;
  };