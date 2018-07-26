import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import Hamburger from './Hamburger';

const withData = lifecycle({
  componentDidMount() {
    window.addEventListener('scroll', this.props.handleScroll);
    window.addEventListener('resize', this.props.updateDimensions);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleScroll);
    window.removeEventListener('resize', this.props.updateDimensions);
  },
});

const handlers = withStateHandlers(
  () => ({
    scrollTop: document.documentElement.scrollTop,
    width: window.innerWidth,
    isMenuOpen: false,
  }),
  {
    handleScroll: () => () => {
      return {
        scrollTop: document.documentElement.scrollTop,
      };
    },
    updateDimensions: () => () => {
      return {
        width: window.innerWidth,
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
  :hover {
    text-decoration: none;
    color: grey;
  }
`;

const Wrapper = styled.div`
  z-index: 2;
  transition: background 0.5s, padding 0.5s;
  position: ${props => (props.scrollTop ? 'fixed' : 'absolute')};
  background: ${props => (props.scrollTop ? 'black' : 'default')};
  padding: ${props => (props.scrollTop ? '20px 0' : '30px 0')};
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
    transition: height 0.5s, opacity 0.8s;
    opacity: ${props => (props.isMenuOpen ? '1' : '0')};
    height: ${props =>
      props.isMenuOpen ? `${props.listLength * props.listHeight}px` : '0px'};
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
)(({ pageList, scrollTop, width, toggleMenu, isMenuOpen }) => (
  <Wrapper scrollTop={scrollTop}>
    {width <= 700 && <Hamburger isActive={isMenuOpen} onClick={toggleMenu} />}
    <StyledList
      isMenuOpen={isMenuOpen}
      listLength={pageList.length}
      listHeight={44}>
      {pageList.map(pageItem => (
        <StyledListItem key={pageItem.path}>
          <StyledLink to={pageItem.path}>
            <p>{pageItem.title}</p>
          </StyledLink>
        </StyledListItem>
      ))}
    </StyledList>
  </Wrapper>
));

export default NavBar;
