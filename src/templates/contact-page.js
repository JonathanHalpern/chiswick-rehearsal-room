import React from 'react';
import PageWrapper from '../components/PageWrapper';

export default ({ data }) => (
  <PageWrapper
    title={data.markdownRemark.frontmatter.title}
    backgroundImage={
      data.markdownRemark.frontmatter.evidenceImage.childImageSharp
    }>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <p>Hey</p>
  </PageWrapper>
);

export const contactPageQuery = graphql`
  query ContactPage($path: String!) {
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
      }
    }
  }
`;
