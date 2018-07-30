import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: relative;
`;

const ContentContainer = styled.div`
  padding: 30px;
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
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 50vh;
`;

const PageWrapper = ({ backgroundImage, title, children }) => (
  <Wrapper>
    <Container>
      {backgroundImage && <StyledImg sizes={backgroundImage.resolutions} />}
      <Title>{title}</Title>
    </Container>
    <ContentContainer>{children}</ContentContainer>
  </Wrapper>
);

export default PageWrapper;
