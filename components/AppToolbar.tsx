import {
  Flex,
  Center,
  Box,
  Link,
  useColorMode,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useBreakpointValue
} from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';
import { MobileMenu } from './MobileMenu';

// const StyledFlex = styled(Flex)(({theme}))`
//     position: fixed;
//     width: 100%;
//     z-index: 10;
//     /* background: white; */
// `});

const StyledFlex = styled(Flex)(
  ({ theme }: Dict): Dict =>
    css`
      position: fixed;
      width: 100%;
      z-index: 9999;
      /* background: ${theme.colors.teal[500]};; */
      box-shadow: ${theme.shadows.md};
      top: 0;
    `
);

const StyledLink = styled(Link)(
  ({ theme }: Dict): Dict =>
    css`
      font-family: Teko;
      font-weight: 800;
      text-decoration: none;
      font-size: ${theme.fontSizes['4xl']};
      &:hover {
        background: -webkit-linear-gradient(
          left,
          ${theme.colors.teal[500]},
          ${theme.colors.teal[600]}
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `
);

const StyledNav = styled.nav(
  ({ theme }: Dict): Dict =>
    css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 24px;
      height: 100%;
    `
);

export interface Navlist {
  path: string;
  label: string;
  exact: boolean;
  newTab?: boolean;
}

export interface Apptoolbar {
  children?: ReactElement;
  navList?: Navlist[];
}

const defaultNavlist: Navlist[] = [
  {
    path: '/#',
    label: ' Work',
    exact: false
  },
  {
    path: '/#about',
    label: ' About',
    exact: true
  },
  {
    path: '/#skills',
    label: ' Skills',
    exact: true
  },
  {
    path: '/josh-schoen-resume.pdf',
    label: ' Resume',
    exact: true,
    newTab: true
  }
];

const AppToolbar = ({
  children,
  navList = [...defaultNavlist]
}: Apptoolbar) => {
  const { colorMode } = useColorMode();
  const variant = useBreakpointValue({
    sm: 'sm',
    md: 'md'
  });
  return (
    <>
      <StyledFlex
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        justifyContent="center"
        alignContent="center"
      >
        <Flex justifyContent="center" alignItems="center" padding="1" w="300px">
          <StyledLink href="/">JOSH SCHOEN</StyledLink>
        </Flex>
        <Box flex="1">

            <StyledNav>
            {variant === 'md' ? (
              navList.map((nav) => (
                <NavLink key={nav.path} href={nav.path} newTab={nav.newTab}>
                  {nav.label}
                </NavLink>
              ))
              ) : <MobileMenu navItems={navList} />}
              <ThemeToggle />
            </StyledNav>

        </Box>
      </StyledFlex>

    </>
  );
};

export default AppToolbar;
