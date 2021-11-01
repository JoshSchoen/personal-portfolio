import {
  Flex,
  Text,
  Center,
  Box,
  Square,
  Heading,
  Link,
  Button,
  useTheme
} from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledCenter = styled(Center)(
  ({ theme }: Dict): Dict =>
    css`
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    `
);

const StyledWrapper = styled(Center)(
  ({ theme }: Dict): Dict =>
    css`
      max-width: 625px;
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
      height: 325px;
      width: auto;
      display: flex;
      border-radius: 100px;
      background: whitesmoke;
      border: 6px solid ${theme.colors.teal[100]};
      box-shadow: 12px 12px 0px ${theme.colors.teal[500]};
      .profile-pic {
        max-width: 100%;
        height: auto;
        border-radius: 100px;
        border: 8px solid white;
      }
    `
);

export interface Apptoolbar {
  children?: ReactElement;
}

const MainHero = ({ children }: Apptoolbar) => {
  const theme = useTheme();
  return (
    <>
      <Flex justifyContent="center" alignContent="center">
        <StyledCenter w="60%">
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
        <Box
          display="flex"
          flex="1"
          justifyContent="flex-end"
          alignItems="center"
        >
          <StyledProfile>
            <img className="profile-pic" src="/josh-schoen-b-w.jpg" />
          </StyledProfile>
        </Box>
      </Flex>
    </>
  );
};

export default MainHero;
