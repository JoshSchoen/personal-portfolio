import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Dict } from '@chakra-ui/utils';
import {
  Button,
  Heading,
  Text,
  useBreakpointValue,
  useTheme
} from '@chakra-ui/react';
import { IPost } from 'types/posts';

export interface Apptoolbar {
  children?: ReactElement;
}

const StyledAnchor = styled.a(
  ({ theme }: Dict): Dict =>
    css`
      display: flex;
      justify-content: space-between;
      height: 500px;
      width: 100%;
      border-radius: 12px;
      /* background: ${theme.colors.teal[100]}; */
      margin-bottom: 32px;
      transition: all 0.2s ease-in-out;
      &.base,
      &.md {
        flex-direction: column-reverse;
        height: 100%;
      }
      &:hover {
        transform: scale(1.01);
        opacity: 0.95;
      }
    `
);

const StyledWorkContent = styled.div(
  ({ theme }: Dict): Dict =>
    css`
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    `
);

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  padding: 8px;
`;

const StyledImage = styled.img`
  padding: 12px;
  max-height: 1000px;
`;

export interface WorkSummaryCardProps {
  post: IPost;
  backgroundColor?: string;
  color?: string;
}

export const WorkSummaryCard = ({
  post,
  backgroundColor = 'teal',
  color = null
}: WorkSummaryCardProps) => {
  const theme = useTheme();
  const variant = useBreakpointValue({ base: 'base', md: 'md', lg: 'lg' });
    console.log(theme);
  return (
    <StyledAnchor
      className={variant}
      key={post.slug}
      href={`work/${post.slug}`}
      style={{ backgroundColor: theme.colors[backgroundColor][100] , color: color }}
    >
      <StyledWorkContent className={variant}>
        <div>
          <Heading marginTop="12" as="h3" fontSize="4xl">
            {post.title}
          </Heading>
          <Text marginBottom="8" marginTop="4" fontSize="lg">
            {post.subtitle}
          </Text>
          <Button colorScheme={backgroundColor}>View project</Button>
        </div>
      </StyledWorkContent>
      <StyledImageContainer>
        <StyledImage className="main-image" src={`${post.teaserImage}`} />
      </StyledImageContainer>
    </StyledAnchor>
  );
};

export default WorkSummaryCard;
