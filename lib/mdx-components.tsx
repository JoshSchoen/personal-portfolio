import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Box,
  Flex,
  Link,
  useTheme,
  useColorMode
} from '@chakra-ui/react';
import { ProjectSection } from 'components/project-layout/ProjectSection';
import { SectionImage } from 'components/project-layout/SectionImage';
import { SectionContent } from 'components/project-layout/SectionContent';
import WorkSummaryCard from 'components/WorkSummaryCard';
import Skills from 'components/Skils';

export const mdxComponents = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  return {
    Heading,
    WorkSummaryCard,
    h1: (props) => (
      <Heading as="h1" fontSize="5xl" textAlign="center" {...props} />
    ),
    h2: (props) => (
      <Heading
        marginTop="4"
        as="h2"
        fontSize="4xl"
        textAlign="center"
        {...props}
      />
    ),
    h3: (props) => <Heading marginTop="12" as="h3" fontSize="5xl" {...props} />,
    h4: (props) => (
      <Heading
        marginTop="4"
        as="h4"
        fontSize="3xl"
        color={
          colorMode === 'light'
            ? theme.colors.teal[400]
            : theme.colors.teal[200]
        }
        {...props}
      />
    ),
    p: (props) => <Text paddingBottom="8" fontSize="lg" {...props} />,
    ul: (props) => (
      <UnorderedList marginBottom="8" marginTop="4" fontSize="lg" {...props} />
    ),
    li: (props) => (
      <ListItem marginBottom="4" marginTop="2" fontSize="lg" {...props} />
    ),
    a: (props) => <Link {...props} />,
    Text,
    Box,
    Flex,
    ProjectSection,
    SectionImage: (props) => <SectionImage {...props} />,
    SectionContent,
    Skills
  };
};
