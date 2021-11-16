import { Button } from '@chakra-ui/react';
import Layout from 'components/Layout';
import NextLink from 'next/link';

export default function Custom404() {
  const customMeta: any = {
    title: '404 - Josh Schoen - Portfolio',
    description: 'Page not found'
  };
  return (
    <Layout customMeta={customMeta}>
      <>
        <h1 style={{marginBottom: '24px'}}>404 - Page Not Found</h1>
        <NextLink href="/#">
          <Button colorScheme="teal">View my work</Button>
        </NextLink>
      </>
    </Layout>
  );
}
