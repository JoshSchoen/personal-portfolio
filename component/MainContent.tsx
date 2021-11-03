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
  
  const StyledSection = styled.section(
    ({ theme }: Dict): Dict =>
      css`
      margin-top: 64px;
      padding: 32px 24px;
      /* max-width: 1280px; */
      &.lg {
        margin: 64px 24px;
        padding: 32px 64px;
      }
        /* margin: 64px 24px;
        padding: 32px 24px; */
      `
  );
  
  
  export interface Apptoolbar {
    children?: ReactElement;
  }
  
  const MainContent = ({ children }: Apptoolbar) => {
    const theme = useTheme();
    const variant = useBreakpointValue({ base: 'base', md: 'md', lg: 'lg' });
    return (
      <>
        <StyledSection className={variant}>
        {children}
        </StyledSection>
      </>
    );
  };
  
  export default MainContent;
  















