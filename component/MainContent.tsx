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
  
  const StyledSection = styled.section(
    ({ theme }: Dict): Dict =>
      css`
        margin: 64px 84px;
        padding: 32px 64px;
      `
  );
  
  
  export interface Apptoolbar {
    children?: ReactElement;
  }
  
  const MainContent = ({ children }: Apptoolbar) => {
    const theme = useTheme();
    return (
      <>
        <StyledSection>
        {children}
        </StyledSection>
      </>
    );
  };
  
  export default MainContent;
  















