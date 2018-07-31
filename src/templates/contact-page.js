import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ContactFormContainer from '../containers/ContactFormContainer';

export default ({ data }) => (
  <PageWrapper
    title={data.markdownRemark.frontmatter.title}
    backgroundImage={
      data.markdownRemark.frontmatter.evidenceImage.childImageSharp
    }>
    <ContactFormContainer
      onEmailSendMessage={data.markdownRemark.frontmatter.onEmailSendMessage}
      contactEmail={data.markdownRemark.frontmatter.contactEmail}
    />
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
        contactEmail
        onEmailSendMessage
      }
    }
  }
`;
