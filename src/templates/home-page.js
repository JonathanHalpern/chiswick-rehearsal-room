import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Title = styled.h1`
  position: absolute;
  top: 80px;
  left: 30px;
  font-size: 6vw;
  @media (max-width: 700px) {
    font-size: 14vw;
  }
  span {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-shadow: none;
  background-image: none;
  :hover {
    text-decoration: none;
    color: grey;
    text-shadow: none;
    background-image: none;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100vh;
`;

const IndexPage = ({ data }) => (
  <Container>
    <StyledImg
      sizes={
        data.markdownRemark.frontmatter.headerImage.childImageSharp.resolutions
      }
    />
    <Title>
      <StyledLink to="/">
        <span>Chiswick</span>
        <span>Rehearsal</span>
        <span>Room</span>
      </StyledLink>
    </Title>
  </Container>
);

export default IndexPage;

export const homePageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        headerImage {
          childImageSharp {
            resolutions(width: 1280) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;