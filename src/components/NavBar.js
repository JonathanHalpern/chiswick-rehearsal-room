import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: none;
    color: white;
  }
`;

const NavBar = ({ pageList }) => (
  <div>
    <ul>
      {pageList.map(pageItem => (
        <li key={pageItem.path}>
          <StyledLink to={pageItem.path}>
            <p>{pageItem.title}</p>
          </StyledLink>
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
