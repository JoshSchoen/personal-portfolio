import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useColorMode,
  IconButton
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavLink, { NavLinkProps } from './NavLink';
import { Navlist } from './AppToolbar';
import styled from '@emotion/styled';

export interface MobileMenuProps {
  navItems: Navlist[];
}

const StyledContainer = styled.div`
  margin-right: 12px;
`;

const StyledNavLink = styled(NavLink)`
  &.mobile {
      padding: 8px;
  }
`;

export const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <StyledContainer>
      <IconButton
        aria-label="Menu"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={() => (isOpen ? onClose() : onOpen())}
      />
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            {navItems.map((nav) => (
              <StyledNavLink type="mobile" key={nav.path} exact href={nav.path}>
                {nav.label}
              </StyledNavLink>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </StyledContainer>
  );
};

export default MobileMenu;
