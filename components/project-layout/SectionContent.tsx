import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

export interface ProjectSectionProps {
  children: string | JSX.Element;
  margin?: string;
  width?: string;
  id?: string;
}
export const SectionContent = ({ children, margin = '0', width = '70%', id = null }: ProjectSectionProps) => {
    const variant = useBreakpointValue({ base: 'base', md: 'md' });
    return (
        <Box id={id} width={variant === 'md' ? width : 'auto'} margin={margin}>{children}</Box>
    );

    };
