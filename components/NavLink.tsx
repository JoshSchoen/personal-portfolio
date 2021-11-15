import { useRouter } from 'next/router';
import { Link, useColorMode } from '@chakra-ui/react';
import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Dict } from '@chakra-ui/utils';

export interface NavLinkProps {
  href: string;
  exact?: boolean;
  className?: string;
  children: ReactElement | string;
  type?: 'mobile' | 'desktop';
}

export const StyledNavLink = styled(Link)(
  ({ theme }: Dict): Dict =>
    css`
      font-weight: bold;
      margin: 0 16px;
      text-decoration: none;
      color: ${theme.colors.gray[500]};
      &.dark {
        color: ${theme.colors.gray[300]};
      }
      &.active {
        color: ${theme.colors.teal[500]};
        &.dark {
          color: ${theme.colors.teal[200]};
        }
      }
      &:hover {
        /* color: ${theme.colors.teal[500]}; */
        /* text-decoration: none; */
      }
      /* color: ${theme.colors.gray[800]}; */
    `
);

const NavLink = ({
  href,
  exact,
  children,
  className = '',
  type = 'desktop'
}: NavLinkProps) => {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

 
  if (pathname === href) {
    className += ' active';
  }

  return (
    <StyledNavLink className={`${className} ${type} ${colorMode}`} href={href}>
    {children}
  </StyledNavLink>
  );
};

export default NavLink;
