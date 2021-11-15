import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Dict } from '@chakra-ui/utils';
import {
  Button,
  Heading,
  Text,
  useBreakpointValue,
  useTheme,
  useColorMode
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
  /* min-width: 300px; */
  /* padding: 8px; */
`;
const StyledImageHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 425px;
  margin-top: 24px;
  border-radius: 10px;
  img {
    max-height: 425px;
    width: auto;
  }
`;

const StyledImage = styled.img`
  padding: 0 12px;
  max-height: 500px;
  max-width: max-content;
  width: auto;
`;

const StyledButton = styled(Button)`
  ${({ theme, color = 'teal' }: Dict): Dict =>
    css`
      background: ${color};
      /* padding: 10px; */
      color: ${theme.colors.white};
      &:hover {
        background: ${color};
      }
    `}
`;

export interface WorkSummaryCardProps {
  post: IPost;
  backgroundColor?: string;
  color?: string;
  type?: 'teaser' | 'header';
  index?: number;
}

export const WorkSummaryCard = ({
  post,
  backgroundColor = 'teal',
  color = 'gray',
  type = 'teaser',
  index = 0
}: WorkSummaryCardProps) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const variant = useBreakpointValue({ base: 'base', md: 'md', lg: 'lg' });
  const isOdd = (n) => {
    return n % 2 === 0;
  };

  const renderHeader = (
    <StyledImageHeaderContainer style={{backgroundColor: theme.colors[backgroundColor][100]}}>
      <StyledImage className="main-image" src={`${post.teaserImage}`} />
    </StyledImageHeaderContainer>
  );

  return (
    <>
      {type === 'teaser' ? (
        <StyledAnchor
          className={variant}
          key={post.slug}
          href={`work/${post.slug}`}
          style={{
            backgroundColor: theme.colors[backgroundColor][100],
            color: color,
            flexDirection: variant === 'base' || variant === 'md' ? 'column-reverse' : isOdd(index) ? 'row-reverse' : 'row'
          }}
        >
          <StyledWorkContent className={variant}>
              <div>
                <Heading
                  color={`${color}.800`}
                  marginTop="0"
                  as="h3"
                  fontSize="4xl"
                >
                  {post.title}
                </Heading>
                <Text
                  color={`${color}.800`}
                  marginBottom="8"
                  marginTop="4"
                  fontSize="lg"
                >
                  {post.subtitle}
                </Text>
                <StyledButton color={theme.colors[backgroundColor][400]}>
                  View project
                </StyledButton>
              </div>
          </StyledWorkContent>
          <StyledImageContainer>
            <StyledImage className="main-image" src={`${post.teaserImage}`} />
          </StyledImageContainer>
        </StyledAnchor>
      ) : renderHeader}
    </>
  );
};

export default WorkSummaryCard;
