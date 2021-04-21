import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { withPrefix } from 'gatsby-link';
import { StaticQuery, graphql } from 'gatsby'

import NavBar from '../components/NavBar';

const Header = styled.div`
  position: relative;
`;

const Layout = ({ children }) => (
  <StaticQuery
  query={query}
  render={data =>  (
    <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'Chiswick Rehearsal Room',
          content:
            'Chamber music practice studio with Bösendorfer grand piano in Chiswick, West London',
        },
      ]}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix('/favicons/apple-touch-icon.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix('/favicons/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix('/favicons/favicon-16x16.png')}
      />
    </Helmet>
    <Header>
      <NavBar
        pageList={data.pageList.edges
          .map(edge => edge.node.frontmatter)
          .sort((a, b) => a.navOrder - b.navOrder)}
      />
    </Header>
    <div>{children}</div>
  </div>
  )}
/>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    pageList: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            navOrder
          }
        }
      }
    }
  }
`;
