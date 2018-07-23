import React from 'react';
import BookingContainer from '../components/BookingContainer';

export default ({ data }) => (
  <div>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <BookingContainer />
  </div>
);

export const bookPageQuery = graphql`
  query BookPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
