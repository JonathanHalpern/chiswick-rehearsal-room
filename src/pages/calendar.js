import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PageWrapper from '../containers/PageWrapper';
import Auth from '../containers/Auth';
import SignIn from '../components/SignIn';
import GoogleIcon from '../components/Google';
import EditContainer from '../containers/EditContainer';

const Container = styled.div`
  position: relative;
`;

const StyledGoogleIcon = styled(GoogleIcon)`
  margin-right: 5px;
`;

const Title = styled.h1`
  position: absolute;
  top: 80px;
  left: 30px;
  font-size: 6vw;
  @media (max-width: 700px) {
    font-size: 14vw;
  }
  span {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-shadow: none;
  background-image: none;
  :hover {
    text-decoration: none;
    color: grey;
    text-shadow: none;
    background-image: none;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100vh;
`;

const AdminPage = ({ data, history }) => (
  <PageWrapper title="Calendar" backgroundImage={data.backgroundImage}>
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

export default AdminPage;

export const query = graphql`
  query AdminPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: imageSharp(id: { regex: "/room-piano/" }) {
      resolutions(width: 1280) {
        ...GatsbyImageSharpResolutions
      }
    }
    bookingInfo: markdownRemark(frontmatter: { path: { eq: "/book" } }) {
      frontmatter {
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
