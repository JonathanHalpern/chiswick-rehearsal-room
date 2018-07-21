import React from 'react';
import Map from '../components/Map';

export default ({ data }) =>
  console.log(data) || (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <p>Hey</p>
      <Map />
    </div>
  );

export const locationPageQuery = graphql`
  query LocationPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
