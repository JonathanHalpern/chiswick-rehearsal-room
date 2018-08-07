import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import Hamburger from './Hamburger';

const withData = lifecycle({
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.props.handleScroll);
    }
  },

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.props.handleScroll);
    }
  },
});

const handlers = withStateHandlers(
  () => ({
    scrollTop:
      typeof window !== 'undefined' && document.documentElement.scrollTop,
    isMenuOpen: false,
  }),
  {
    handleScroll: () => () => {
      return {
        scrollTop:
          typeof document !== 'undefined' && document.documentElement.scrollTop,
      };
    },
    toggleMenu: ({ isMenuOpen }) => () => {
      return {
        isMenuOpen: !isMenuOpen,
      };
    },
  },
);

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-shadow: none;
  background-image: none;
  :hover {
    text-decoration: none;
    color: #dddddd;
    text-shadow: none;
    background-image: none;
  }
  &.active {
    p::first-letter {
      border-bottom: 1px solid;
    }
  }
`;

const StyledHamburger = styled(Hamburger)`
  @media (min-width: 701px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  z-index: 2;
  transition: background 0.5s, padding 0.5s;
  position: ${({ scrollTop }) => (scrollTop ? 'fixed' : 'absolute')};
  background: ${({ scrollTop }) => (scrollTop ? 'black' : 'initial')};
  padding: ${({ scrollTop }) => (scrollTop ? '20px 0' : '30px 0')};
  top: 0;
  width: 100%;
  margin: 0;
  @media (max-width: 700px) {
    padding: 0;
  }
`;

const StyledList = styled.ul`
  margin: 0
  float: right;
  display: flex;
  position: relative;
  @media (max-width: 700px) {
    transition: max-height 0.8s, opacity 0.8s;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
    max-height: ${({ isMenuOpen, listLength, maxHeight }) =>
      isMenuOpen ? `${listLength * maxHeight}px` : '0px'};
    overflow: hidden;
    flex-direction: column;
    float: none;
  }
`;

const StyledListItem = styled.li`
  margin: 0;
  padding: 0 25px 0 0;
  @media (max-width: 700px) {
    padding: 10px 20px;
    background: black;
  }
  text-transform: uppercase;
`;

const NavBar = compose(
  handlers,
  withData,
)(({ pageList, scrollTop, toggleMenu, isMenuOpen }) => (
  <Wrapper scrollTop={scrollTop}>
    <StyledHamburger isActive={isMenuOpen} onClick={toggleMenu} />
    <StyledList
      isMenuOpen={isMenuOpen}
      listLength={pageList.length}
      maxHeight={80}>
      {pageList.map(pageItem => (
        <StyledListItem key={pageItem.path}>
          <StyledLink to={pageItem.path} activeClassName="active">
            <p>{pageItem.title}</p>
          </StyledLink>
        </StyledListItem>
      ))}
    </StyledList>
  </Wrapper>
));

export default NavBar;
