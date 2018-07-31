import React from 'react';
import PageWrapper from '../components/PageWrapper';
import BookingContainer from '../containers/BookingContainer';

export default ({ data }) => (
  <PageWrapper
    title={data.markdownRemark.frontmatter.title}
    backgroundImage={
      data.markdownRemark.frontmatter.evidenceImage.childImageSharp
    }>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    {typeof window !== 'undefined' && (
      <BookingContainer
        timeSlots={data.markdownRemark.frontmatter.timeSlots}
        bookingAlertEmail={data.markdownRemark.frontmatter.bookingAlertEmail}
      />
    )}
  </PageWrapper>
);

export const bookPageQuery = graphql`
  query BookPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        evidenceImage {
          childImageSharp {
            resolutions(width: 2000) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
        path
        title
        bookingAlertEmail
        timeSlots {
          endTime
          price
          startTime
        }
      }
    }
  }
`;
