import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

export interface ProjectSectionProps {
  children: string | JSX.Element;
  margin?: string;
  width?: string;
  id?: string;
  mdWidth?: string;
}
export const SectionContent = ({ children, margin = '0', mdWidth = '70%', width = '100%', id = null }: ProjectSectionProps) => {
    const variant = useBreakpointValue({ base: 'base', md: 'md' });
    return (
        <Box id={id} width={variant === 'md' ? mdWidth : width} margin={margin}>{children}</Box>
    );

    };
