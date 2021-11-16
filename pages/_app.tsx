import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppToolbar from 'components/AppToolbar';
import {theme} from '../theme';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
<Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='ga-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `
        }
      </Script>
    <ChakraProvider theme={theme}>
      <AppToolbar></AppToolbar>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}
export default MyApp;
