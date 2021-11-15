import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)`
    img {
        border-radius: 10px;
    }
`;

export interface ProjectSectionProps {
  imgSrc: string;
  alt: string;
  width?: string;
  margin?: string;
}
export const SectionImage = ({ imgSrc, alt, width = '30%', margin = '8' }: ProjectSectionProps) => {
    const variant = useBreakpointValue({ base: 'base', md: 'md' });
    return (
        <StyledBox width={variant === 'md' ? width : 'auto'} margin={margin}><img src={imgSrc} alt={alt} /></StyledBox>
    );
};
