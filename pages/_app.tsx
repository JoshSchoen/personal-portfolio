import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppToolbar from 'components/AppToolbar';
import {theme} from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ChakraProvider theme={theme}>
      <AppToolbar></AppToolbar>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}
export default MyApp;
