import {
  Button,
  extendTheme,
  Heading,
  Text,
  theme as defaultTheme,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Dict } from '@chakra-ui/utils';
import MainHero from 'component/MainHero';
import styled from '@emotion/styled';
import Layout from 'component/Layout';
import { getAllPosts, getSortedPosts } from '../../lib/posts';
import { IWorkListProps} from 'types/posts';

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

const StyledAnchor = styled.a(
  ({ theme }: Dict): Dict =>
    css`
      display: flex;
      justify-content: space-between;
      height: 500px;
      width: 100%;
      border-radius: 12px;
      background: ${theme.colors.teal[100]};
      margin-bottom: 32px;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.01);
        opacity: 0.95;
      }
    `
);

const StyledWorkContent = styled.div(
  ({ theme }: Dict): Dict =>
    css`
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;

    `
);

const StyledImage = styled.img`
  height: 100%;
  width: auto;
  padding-right: 8px;
`;

// console.log(theme);

const Home = ({ posts }: IWorkListProps): JSX.Element => {
  // console.log(allPostsData, 'component');
  return (
    <Layout>
        <>
        <MainHero></MainHero>
        <Heading marginTop="12" marginBottom="8" as="h2">
          Work
        </Heading>
        {posts.map((post) => (
                  
                  <StyledAnchor key={post.slug} href={`work/${post.slug}`}>
                  <StyledWorkContent>
                    <div>
                      <Heading marginTop="12" as="h3" fontSize="4xl">
                        {post.title}
                      </Heading>
                      <Text marginBottom="8"marginTop="4"  fontSize="lg">
                        {post.description}
                      </Text>
                      <Button colorScheme="teal">View project</Button>
                    </div>
                  </StyledWorkContent>
                  <StyledImage className="main-image" src={`${post.teaserImage}`} />
                </StyledAnchor>
        ))}

        {/* <StyledAnchor href="/work/platform-ux">
          <StyledWorkContent>
            <div>
              <Heading marginTop="12" as="h3" fontSize="4xl">
                Strategy: Unified Experience
              </Heading>
              <Text marginBottom="8"marginTop="4"  fontSize="lg">
                This initiative was broad as it was deep. 
                Taking 5 completely sperate products and unifing the experiences to create 1 Digital.ai expierence.
              </Text>
              <Button colorScheme="teal">View project</Button>
            </div>
          </StyledWorkContent>
          <StyledImage className="main-image" src="/paltform-ux.jpg" />
        </StyledAnchor> */}
        </>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'subtitle', 'teaserImage']);
  return {
    props: { posts },
  };
}
