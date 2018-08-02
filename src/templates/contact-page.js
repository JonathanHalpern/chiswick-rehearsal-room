import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ContactFormContainer from '../containers/ContactFormContainer';

export default ({ data }) => (
  <PageWrapper
    title={data.markdownRemark.frontmatter.title}
    backgroundImage={
      data.markdownRemark.frontmatter.headerImage.childImageSharp
    }>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <ContactFormContainer
      onEmailSendMessage={data.markdownRemark.frontmatter.onEmailSendMessage}
      contactEmail={data.markdownRemark.frontmatter.contactEmail}
    />
  </PageWrapper>
);

export const contactPageQuery = graphql`
  query ContactPage($path: String!) {
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
        contactEmail
        onEmailSendMessage
      }
    }
  }
`;
