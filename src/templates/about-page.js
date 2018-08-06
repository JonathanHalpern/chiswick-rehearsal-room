import React from 'react';
import PageWrapper from '../containers/PageWrapper';

export default ({ data }) => (
  <PageWrapper
    title={data.markdownRemark.frontmatter.title}
    backgroundImage={
      data.markdownRemark.frontmatter.headerImage.childImageSharp
    }>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </PageWrapper>
);

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
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
