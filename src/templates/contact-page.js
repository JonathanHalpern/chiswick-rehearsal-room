import React from 'react';
import { graphql } from 'gatsby'
import PageWrapper from '../containers/PageWrapper';
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
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contactEmail
        onEmailSendMessage
      }
    }
  }
`;
