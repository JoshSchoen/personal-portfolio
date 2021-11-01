import {
  Flex,
  Text,
  Center,
  Box,
  Square,
  Heading,
  Link
} from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import NavLink from './NavLink';

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
      background: white;
      box-shadow: ${theme.shadows.md};
      top: 0;
    `
);

const StyledLink = styled(Link)(
  ({ theme }: Dict): Dict =>
    css`
      color: ${theme.colors.teal[500]};
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
const StyledNavLink = styled(Link)(
  ({ theme }: Dict): Dict =>
    css`
    font-weight: bold;
      margin: 0 16px;
      text-decoration: none;
      color: ${theme.colors.gray[500]};
      &.active {
        color: ${theme.colors.teal[500]};
      }
      &:hover {
        color: ${theme.colors.teal[500]};
        /* text-decoration: none; */
      }
      /* color: ${theme.colors.gray[800]}; */
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
}

export interface Apptoolbar {
  children?: ReactElement;
  navList?: Navlist[];
}

const defaultNavlist: Navlist[] = [
  {
    path: '/work',
    label: ' Work',
    exact: false
  },
  {
    path: '/this-is-the-way',
    label: ' This is the way',
    exact: true
  },
  {
    path: '/skills',
    label: ' Skills',
    exact: true
  },
  {
    path: '/resume',
    label: ' Resume',
    exact: true
  }
];

const AppToolbar = ({
  children,
  navList = [...defaultNavlist]
}: Apptoolbar) => {
  const router = useRouter();
  return (
    <StyledFlex justifyContent="center" alignContent="center">
      <Center padding="1" w="30%">
        <StyledLink href="/">JOSH SCHOEN</StyledLink>
      </Center>
      <Box flex="1">
        <StyledNav>
          {navList.map((nav) => (
            <NavLink key={nav.path} exact href={nav.path}>{nav.label}</NavLink>
          ))}
        </StyledNav>
      </Box>
    </StyledFlex>
  );
};

export default AppToolbar;
