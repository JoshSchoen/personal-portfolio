import { useRouter } from 'next/router';
import { Link } from '@chakra-ui/react';
import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Dict } from '@chakra-ui/utils';

export interface NavLinkProps {
  href: string;
  exact?: boolean;
  className?: string;
  children: ReactElement | string;
}

const StyledNavLink = styled(Link)(
    ({ theme }: Dict): Dict =>
      css`
      font-weight: bold;
        margin: 0 16px;
        text-decoration: none;
        color: ${theme.colors.gray[500]};
        &.active {
          color: ${theme.colors.teal[500]};
        }
        &:hover {
          color: ${theme.colors.teal[500]};
          /* text-decoration: none; */
        }
        /* color: ${theme.colors.gray[800]}; */
      `
  );

const NavLink = ({ href, exact, children, className = '' }: NavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  if (isActive || pathname.startsWith(href)) {
    className += ' active';
  }

  return (
    <StyledNavLink className={className} href={href}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
