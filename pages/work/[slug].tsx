import fs from 'fs';
import path from 'path';
import Layout, { WEBSITE_HOST_URL } from 'components/Layout';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IPost, IWorkItemProps } from 'types/posts';
import { serialize } from 'next-mdx-remote/serialize';
import { postFilePaths, POSTS_PATH } from 'lib/posts';
import { mdxComponents } from 'lib/mdx-components';
import React from 'react';
import { Heading } from '@chakra-ui/layout';

const SlugPage = ({ source, frontMatter }: IWorkItemProps): JSX.Element => {

  const customMeta: IPost = {
    title: `${frontMatter.title} - Josh Schoen`,
    description: frontMatter.description,
    teaserImage: `${WEBSITE_HOST_URL}${frontMatter.teaserImage}`,
    date: frontMatter.date,
    type: 'article',
    slug: frontMatter.slug
  };
  return (
    <Layout customMeta={customMeta}>
      <>
      <Heading as="h1" fontSize="5xl" textAlign="center">{frontMatter.title}</Heading>
      <Heading
        marginTop="4"
        as="h2"
        fontSize="4xl"
        textAlign="center"
      >{frontMatter.subtitle}</Heading>
        <MDXRemote {...source} components={mdxComponents()} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    //   mdxOptions: {
    //     remarkPlugins: [require('remark-code-titles')],
    //     rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    //   },
    scope: data
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};

export default SlugPage;
