import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { compose, withStateHandlers, lifecycle } from 'recompose';

const withData = lifecycle({
  componentDidMount() {
    window.addEventListener('scroll', this.props.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleScroll);
  },
});

const handlers = withStateHandlers(
  () => ({
    scrollTop: 0,
  }),
  {
    handleScroll: () => () => {
      return {
        scrollTop: document.documentElement.scrollTop,
      };
    },
  },
);

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: none;
    color: red;
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
`;

const StyledList = styled.ul`
  margin: 0
  float: right;
`;

const StyledListItem = styled.li`
  display: inline-block;
  margin: 0 25px 0 0;
  text-transform: uppercase;
`;

const NavBar = compose(
  handlers,
  withData,
)(({ pageList, scrollTop }) => (
  <Wrapper scrollTop={scrollTop}>
    <StyledList>
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
