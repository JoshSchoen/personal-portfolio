import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';

export interface SectionFlex {
  children: string | JSX.Element;
  margin?: string;
  width?: string;
  id?: string;
  mdWidth?: string;
  className?: string;
}
export const SectionFlex = ({
  className = null,
  children,
  margin = '0',
  mdWidth = '70%',
  width = '100%',
  id = null
}: SectionFlex) => {
  const variant = useBreakpointValue({ md: 'md' });
  return (
    <Flex
      className={className}
      margin={margin}
      width={variant === 'md' ? width : '100%'}
      flexDirection={variant === 'md' ? 'row' : 'column'}
    >
      {children}
    </Flex>
  );
};
