import React from 'react';
import { Button, Flex, useColorMode, IconButton, useBreakpointValue, Heading } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Skills = () => {
  const { colorMode } = useColorMode();
  const variant = useBreakpointValue({
    md: 'md'
  });
  const mode = colorMode === 'light' ? '' : '-dark';
  const direction = variant !== 'md' ? 'column' : 'row';

  return (
      <>
            <Heading
        marginTop="4"
        as="h2"
        fontSize="4xl"
        textAlign="center" style={{padding: '64px 0px 32px 0px'}}>
        Skills
        </Heading>
    <Flex width="100%" justifyContent="space-around" flexDirection={direction} alignItems="center">
    <div style={{padding: '12px'}}>
      <img src={`/skills-radar${mode}.svg`} alt="Josh Schoen's design skills" />
      </div>
      <div style={{padding: '12px'}}>
      <img src={`/bar-chart${mode}.svg`} alt="Josh Schoen's technical skills" />
      </div>
    </Flex>
    </>
  );
};

export default Skills;
