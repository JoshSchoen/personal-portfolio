import {
  Flex,
  Text,
  Center,
  Box,
  Square,
  Heading,
  Link,
  Button,
  useTheme,
  useBreakpointValue
} from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledCenter = styled(Center)(
  ({ theme }: Dict): Dict =>
    css`
      &.md {
        max-width: 625px;
      }
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
    color: ${theme.colors.teal[500]};
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
      background: whitesmoke;
      border: 6px solid ${theme.colors.teal[100]};
      box-shadow: 12px 12px 0px ${theme.colors.teal[500]};
      &.md {
        margin-right: 48px;
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
  const theme = useTheme();
  const variant = useBreakpointValue({ base: 'base', md: 'md' });
  return (
    <>
      <Flex flexDirection={variant === 'base' ? 'column' : 'row'} justifyContent="center" alignContent="center">
      <Box
          display="flex"
          flex="1"
          justifyContent="space-around"
          alignItems="center"
        >
          <StyledProfile className={variant}>
            <img className="profile-pic" src="/josh-schoen-b-w.jpg" />
          </StyledProfile>
        </Box>
        <StyledCenter className={variant}>
          <StyledWrapper>
            <StyledHeading as="h1" size="2xl">Hi, I'm Josh Schoen </StyledHeading>
            <StyledHeading as="h2" size="lg">Leader, UX/UI Engineer and Designer  </StyledHeading>
            <Text as="h3" paddingTop="2" paddingBottom="4" fontSize="xl">
              I help companies design and develop digital solutions. I'm open to
              freelance work and I'm passionate about working with teams to solve hard problems.
            </Text>
            <Button colorScheme="teal">Get in touch</Button>
          </StyledWrapper>
        </StyledCenter>
      </Flex>
    </>
  );
};

export default MainHero;
