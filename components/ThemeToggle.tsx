import React from 'react';
import { Button, Flex, useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Search database"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={() => toggleColorMode()}
    />
  );
};

export default ThemeToggle;
