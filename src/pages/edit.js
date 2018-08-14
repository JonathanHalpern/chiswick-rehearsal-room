import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../containers/PageWrapper';
import Auth from '../containers/Auth';
import SignIn from '../components/SignIn';
import GoogleIcon from '../components/Google';
import EditContainer from '../containers/EditContainer';

const StyledGoogleIcon = styled(GoogleIcon)`
  margin-right: 5px;
`;

const EditPage = ({ data, history }) => (
  <PageWrapper
    title="Edit"
    backgroundImage={data.bookingInfo.frontmatter.headerImage.childImageSharp}>
    <Auth>
      {auth => {
        return (
          <div>
            <SignIn
              onClick={() =>
                auth.isAuthed ? auth.signOut() : auth.signIn('google')
              }
              icon={auth.isAuthed ? null : <StyledGoogleIcon />}
              text={auth.isAuthed ? 'Sign Out' : 'Sign in with Google'}
            />
            {auth.isAuthed && (
              <EditContainer
                {...auth}
                maxDaysAhead={data.bookingInfo.frontmatter.maxDaysAhead}
                timeSlots={data.bookingInfo.frontmatter.timeSlots}
                history={history}
              />
            )}
          </div>
        );
      }}
    </Auth>
  </PageWrapper>
);

export default EditPage;

export const query = graphql`
  query EditPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    bookingInfo: markdownRemark(frontmatter: { path: { eq: "/book" } }) {
      frontmatter {
        headerImage {
          childImageSharp {
            resolutions(width: 1280) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
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
