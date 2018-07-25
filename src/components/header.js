import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import NavBar from './NavBar';

const Container = styled.div`
  position: relative;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-size: 7vw;
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 80vw;
`;

const Header = ({ siteTitle, pageList, backgroundImage }) => (
  <Container>
    {backgroundImage && <StyledImg sizes={backgroundImage.resolutions} />}
    <NavBar pageList={pageList} />
    <Title>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}>
        {siteTitle}
      </Link>
    </Title>
  </Container>
);

export default Header;
