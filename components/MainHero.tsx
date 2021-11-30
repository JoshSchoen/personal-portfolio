import {
  Flex,
  Text,
  Center,
  Box,
  Heading,
  Button,
  useTheme,
  useBreakpointValue,
  useColorMode,
  Link
} from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const StyledCenter = styled(Center)(
  ({ theme }: Dict): Dict =>
    css`

      &.base {
        max-width: 100%;
        margin-top: 24px;
      }
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    `
);

const StyledWrapper = styled(Center)(
  ({ theme }: Dict): Dict =>
    css`
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    `
);

const StyledHeading = styled(Heading)(
  ({ theme }: Dict): Dict =>
    css`
    /* color: ${theme.colors.teal[500]}; */
      /* background: -webkit-linear-gradient(
        left,
        ${theme.colors.teal[600]},
        ${theme.colors.teal[400]},
        ${theme.colors.teal[500]}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-decoration: none; */
      /* font-size: ${theme.fontSizes['4xl']}; */
    `
);

const StyledProfile = styled.div(
  ({ theme }: Dict): Dict =>
    css`
      height: 192px;
      width: 192px;
      overflow: hidden;
      display: flex;
      border-radius: 100px;
      border: 6px solid ${theme.colors.teal[50]};
      box-shadow: 12px 12px 0px ${theme.colors.teal[500]}, -12px -12px 0px ${theme.colors.teal[200]}, -24px 36px 0px ${theme.colors.teal[700]};
      margin-bottom: 32px;
      &.md {
        margin-left: 48px;
        margin-bottom: 0;
      }

      .profile-pic {
        height: 330px;
      }
    `
);

export interface Apptoolbar {
  children?: ReactElement;
}

const MainHero = ({ children }: Apptoolbar) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const variant = useBreakpointValue({ base: 'base', md: 'md' });
  const headingColor = colorMode === 'light' ? theme.colors.teal[500]: theme.colors.teal[100];
  return (
      <Flex flexDirection={variant === 'base' ? 'column-reverse' : 'row'} justifyContent="center" alignContent="center">

        <StyledCenter className={variant}>
          <StyledWrapper>
            <StyledHeading  color={headingColor} as="h1" size="2xl">Hi, I'm Josh Schoen </StyledHeading>
            <StyledHeading color={headingColor}  as="h2" size="lg">Leader, UX/UI Engineer and Designer  </StyledHeading>
            <Text as="h3" paddingTop="2" paddingBottom="4" fontSize="xl">
              I help companies design and develop digital solutions. I'm open to
              freelance work and I'm passionate about working with teams to solve hard problems.
            </Text>
            <NextLink href='mailto:jshchoen@gmail.com'>  
            <Button colorScheme="teal">Get in touch</Button>
            </NextLink>
          </StyledWrapper>
        </StyledCenter>
        <Box
          display="flex"
          flex="1"
          justifyContent="space-around"
          alignItems="center"
        >
          <StyledProfile style={{borderColor: colorMode === 'dark' ? `${theme.colors.gray[800]}` : null}} className={variant}>
            <img className="profile-pic" src="/josh-schoen-b-w.jpg" />
          </StyledProfile>
        </Box>
      </Flex>
  );
};

export default MainHero;
