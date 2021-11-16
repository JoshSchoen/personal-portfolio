import React from 'react';
import { Button, Flex, useColorMode, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Skills = () => {
  const { colorMode } = useColorMode();
  const variant = useBreakpointValue({
    md: 'md'
  });
  const mode = colorMode === 'light' ? '' : '-dark';

  return (
      <>
      
    <Flex justifyContent="space-around" flexDirection={variant !== 'md' ? 'column' : 'row'}>
      <img src={`/skills-radar${mode}.svg`} alt="Josh Schoen's design skills" />
      <img src={`/bar-chart${mode}.svg`} alt="Josh Schoen's technical skills" />
    </Flex>
    </>
  );
};

export default Skills;
