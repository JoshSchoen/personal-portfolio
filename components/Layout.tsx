import { Dict } from '@chakra-ui/utils';
import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Head from './Head';
import AppToolbar from './AppToolbar';
import MainContent from './MainContent';
import { IPost, IWorkItemProps } from 'types/posts';
import { useRouter } from 'next/router';
  export interface LayoutProps {
    customMeta?: IPost;
    children?: ReactElement;
  }

  export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';
  
  const Layout = ({ children, customMeta }: LayoutProps) => {
    return (
        <>
        <Head customMeta={customMeta} />
        <MainContent>
        {children}
        </MainContent>
        <footer></footer>
      </>
    );
  };
  
  export default Layout;
  















