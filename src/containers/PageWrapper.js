import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../layouts';

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: relative;
`;

const ContentContainer = styled.div`
  padding: 30px;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 0px;
  left: 30px;
  font-size: 6vw;
  color: white;
  @media (max-width: 700px) {
    font-size: 14vw;
  }
  &::first-letter {
    border-bottom: 1px solid;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 50vh;
`;

const PageWrapper = ({ backgroundImage, title, children }) =>  (
  <Layout>
    <Wrapper>
      <Container>
        {backgroundImage && <StyledImg fluid={backgroundImage.fluid} />}
        <Title>{title}</Title>
      </Container>
      <ContentContainer>{children}</ContentContainer>
    </Wrapper>
  </Layout>
);

export default PageWrapper;
