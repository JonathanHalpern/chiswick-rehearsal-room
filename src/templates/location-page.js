import React from 'react';
import { graphql } from 'gatsby'
import PageWrapper from '../containers/PageWrapper';
import Map from '../components/Map';

export default ({ data }) => (
  <PageWrapper
    title={data.markdownRemark.frontmatter.title}
    backgroundImage={
      data.markdownRemark.frontmatter.headerImage.childImageSharp
    }>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <Map
      mapLocations={data.markdownRemark.frontmatter.mapLocations}
      defaultZoom={data.markdownRemark.frontmatter.defaultZoom}
    />
  </PageWrapper>
);

export const locationPageQuery = graphql`
  query LocationPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        headerImage {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        defaultZoom
        mapLocations {
          address
          legend
        }
      }
    }
  }
`;
