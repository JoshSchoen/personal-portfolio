import {
  Button,
  extendTheme,
  Heading,
  Text,
  theme as defaultTheme,
  useBreakpointValue
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Dict } from '@chakra-ui/utils';
import MainHero from 'component/MainHero';
import styled from '@emotion/styled';
import Layout from 'component/Layout';
import { getAllPosts } from '../../lib/posts';
import { IWorkListProps } from 'types/posts';
import {WorkSummaryCard} from 'component/WorkSummaryCard';

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



// console.log(theme);

const Home = ({ posts }: IWorkListProps): JSX.Element => {
  const variant = useBreakpointValue({ base: 'base', md: 'md', lg: 'lg' });
  return (
    <Layout>
      <>
        <MainHero></MainHero>
        <Heading marginTop="12" marginBottom="8" as="h2">
          Work
        </Heading>
        {posts.map((post) => (
          <WorkSummaryCard key={post.slug} post={post} />
        ))}
      </>
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
    'teaserImage'
  ]);
  return {
    props: { posts }
  };
}
