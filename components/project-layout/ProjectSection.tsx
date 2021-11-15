import { Flex } from '@chakra-ui/layout';
import React from 'react';

export interface ProjectSectionProps {
  children: JSX.Element;
}
export const ProjectSection = ({ children }: ProjectSectionProps) => (
  <Flex flexDirection="column" alignItems="center"><>{children}</></Flex>
);
