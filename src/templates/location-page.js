import React from 'react';
import Map from '../components/Map';

export default ({ data }) => (
  <div>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <Map mapLocations={data.markdownRemark.frontmatter.mapLocations} />
  </div>
);

export const locationPageQuery = graphql`
  query LocationPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        mapLocations {
          address
          legend
        }
      }
    }
  }
`;
