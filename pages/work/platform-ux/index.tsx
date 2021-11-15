import {
  Flex,
  Text,
  Center,
  Box,
  Square,
  Heading,
  Link,
  Button,
  useTheme,
  List,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Layout from 'components/Layout';

const StyledCenter = styled(Center)(
  ({ theme }: Dict): Dict =>
    css`
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    `
);

const StyledWrapper = styled(Center)(
  ({ theme }: Dict): Dict =>
    css`
      max-width: 625px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    `
);

export interface Apptoolbar {
  children?: ReactElement;
}

const PlatformUX = ({ children }: Apptoolbar) => {
  const theme = useTheme();
  return (
    <Layout customMeta={{title: 'Digital.ai Platform Experience'}}>
      <Flex justifyContent="center" alignContent="center">
        <StyledCenter w="60%">
          <Heading marginTop="12" as="h2" fontSize="4xl">
            Strategy: Unifiedd Experience
          </Heading>
          <Heading marginTop="12" as="h3" fontSize="2xl">
            Overview
          </Heading>
          <StyledWrapper>
            <Text as="p" paddingTop="2" paddingBottom="4" fontSize="xl">
              This is a story of Digital.ai merging 5 separate companies and
              their products to form Digital.ai. I was in charge of 16
              researchers, designers and UI Engineers responsible for
              coordination with product engineering to deliver a Value Stream
              Management Platform for enterprise customers managing their
              digital transformation and continuous software design and
              development.
            </Text>
            <Heading marginTop="12" as="h3" fontSize="2xl">
              My Role
            </Heading>
            <UnorderedList>
              <ListItem>Director of UX</ListItem>
              <ListItem>UX Design Lead</ListItem>
              <ListItem>Coordinated product design efforts</ListItem>
            </UnorderedList>
            <Heading marginTop="12" as="h3" fontSize="2xl">
              The Problem
            </Heading>
            <Text as="p" paddingTop="2" paddingBottom="4" fontSize="xl">
              When Digital.ai was formed in early 2020 it brought together 5
              different companies, CollabNet VersionOne, XebiaLabs, Experitest,
              Arxan and Numerify. The mission was to form one company to
              delivery end-to-end analytics on enterprise software delivery
              (value Stream Management). With that, each product and company had
              it's own branding, look and feel and ways teams worked.
            </Text>
            <Heading marginTop="12" as="h3" fontSize="2xl">
              Goals
            </Heading>
            <Text as="p" paddingTop="2" paddingBottom="4" fontSize="xl">
              There were many goals from improving the customer onboarding,
              creating a consistent experience and enabling seamless
              integrations from one application to the other all while creating
              a common design language for the entire company.
            </Text>
            <Heading marginTop="12" as="h3" fontSize="2xl">
              Scope
            </Heading>
            <Text as="p" paddingTop="2" paddingBottom="4" fontSize="xl">
              Each product went through several iterations and had specific
              needs and challenges. Because of this we had to take "bite size"
              increments to achieve the desired results.
            </Text>
            <Text as="p" paddingTop="2" paddingBottom="4" fontSize="xl">
              Improving and maintaining a unified Digital.ai experience is never
              truly done. However, we broke it down in the following key
              milestones that set Digital.ai to bring on additional capabilities
              and Platform level features such as SSO and common navigation.
            </Text>
          </StyledWrapper>
          <UnorderedList fontSize="xl">
            <ListItem>
              Iteration 1
              <UnorderedList>
                <ListItem>
                  Gkobal application toolbar - created consistent and know areas
                  to access global type features that persist accross all
                  Digital.ai applications
                </ListItem>
                <ListItem>
                  Common navigation - created consistence and known
                  in-application navigation across all products
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Iteration 2
              <UnorderedList fontSize="xl">
                <ListItem>
                  Implimented Single Sign-on (SSO) and identity prodiver
                  services to seamlessly authentication and athorization from
                  one Digital.ai products and capabilities to another
                </ListItem>
                <ListItem>
                  Enable onboarding of new customers and users through a single
                  Platform experience
                </ListItem>
                <ListItem>
                  Implement application level access to user profile,
                  preferences and other Digital.ai applications
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Continous improvements
              <Text as="p" paddingTop="2" paddingBottom="4" fontSize="xl">
                Improving and maintaining a unified Digital.ai experience is
                never truly done. As a organization and the Director of UX, I
                was pivotal in ensuring experiences were instrumented with the
                proper telemetrics on usage and feature baselining. My team
                worked through top task analysis research to better understand
                how our users were actually using out products which had not
                been done in the past. We use this data as one way to design
                with intent and validate concepts and priorities
              </Text>
            </ListItem>
            <ListItem>
              Process
              <UnorderedList>
                <ListItem>
                  Starting from scratch: Stakeholders interviews
                </ListItem>
                <UnorderedList>
                <ListItem>
                  We started wutg stakeholder interviews. The stakeholders
                  included product managers, c-level executives and various
                  roles within engineering for each product. It was important to
                  understand the background for each company and their
                  applications.
                </ListItem>
                <ListItem>
                  Taking inventory: An audit of common and unique patterns for
                  each application was done. The hypothesis was, there is are
                  similar navigation and toolbars we could use to start the
                  unification of the the product under one common design system.
                </ListItem>
                </UnorderedList>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </StyledCenter>
        <Box
          display="flex"
          flex="1"
          justifyContent="flex-end"
          alignItems="center"
        ></Box>
      </Flex>
    </Layout>
  );
};

export default PlatformUX;
