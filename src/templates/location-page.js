import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Map from '../components/Map';

export default ({ data }) => (
  <PageWrapper
    title={data.markdownRemark.frontmatter.title}
    backgroundImage={
      data.markdownRemark.frontmatter.evidenceImage.childImageSharp
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
        evidenceImage {
          childImageSharp {
            resolutions(width: 2000) {
              ...GatsbyImageSharpResolutions
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
