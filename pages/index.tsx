import { extendTheme, Heading, theme as defaultTheme } from '@chakra-ui/react';

import MainHero from 'components/MainHero';
import Layout from 'components/Layout';
import { getAllPosts, getPost, getPostBySlug } from '../lib/posts';
import { IWorkItemProps, IWorkListProps } from 'types/posts';
import { WorkSummaryCard } from 'components/WorkSummaryCard';
import { MDXRemote } from 'next-mdx-remote';
import { mdxComponents } from 'lib/mdx-components';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const theme = extendTheme({
  fonts: {
    body: 'Nunito',
    heading: 'Teko'
  },
  components: {
    Link: {
      baseStyle: {
        fonFamily: 'Nunito',
        fontWeight: 'bold',
        color: defaultTheme.colors.gray[500]
      }
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold' // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px'
        }
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde'
        }
      }
    }
  }
});

export interface HomeProps extends IWorkListProps {
  about: IWorkItemProps;
}

const Home = ({ posts, about }: HomeProps): JSX.Element => {
  return (
    <Layout>
      <AnimatePresence>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
        <MainHero></MainHero>
        <Heading style={{display: 'flex' ,justifyContent: 'center'}} marginTop="12" marginBottom="8" as="h2">
          Work
        </Heading>

          {posts.map((post, index) => (
            <WorkSummaryCard
              index={index}
              key={post.slug}
              post={post}
              backgroundColor={post.themeColor}
            />
          ))}
        </motion.div>
        <MDXRemote {...about.source} components={mdxComponents()} />
      </AnimatePresence>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPosts([
    'date',
    'description',
    'slug',
    'title',
    'subtitle',
    'teaserImage',
    'themeColor',
    'type'
  ]);
  const about = await getPost('about');

  return {
    props: { posts, about }
  };
}
