import React from 'react';
import PageWrapper from '../containers/PageWrapper';
import BookingContainer from '../containers/BookingContainer';
import Covid from '../components/Covid';

export default ({ data }) => (
  <PageWrapper
    title={data.markdownRemark.frontmatter.title}
    backgroundImage={
      data.markdownRemark.frontmatter.headerImage.childImageSharp
    }>
    <Covid />
  </PageWrapper>
);

// export default ({ data }) => (
//   <PageWrapper
//     title={data.markdownRemark.frontmatter.title}
//     backgroundImage={
//       data.markdownRemark.frontmatter.headerImage.childImageSharp
//     }>
//     {typeof window !== 'undefined' && (
//       <BookingContainer
//         timeSlots={data.markdownRemark.frontmatter.timeSlots}
//         bookingAlertEmail={data.markdownRemark.frontmatter.bookingAlertEmail}
//         maxDaysAhead={data.markdownRemark.frontmatter.maxDaysAhead}
//         termsAndCondtionsHTML={data.markdownRemark.html}
//       />
//     )}
//   </PageWrapper>
// );

export const bookPageQuery = graphql`
  query BookPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        headerImage {
          childImageSharp {
            resolutions(width: 1280) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
        path
        title
        bookingAlertEmail
        maxDaysAhead
        timeSlots {
          endTime
          price
          startTime
          title
        }
      }
    }
  }
`;
