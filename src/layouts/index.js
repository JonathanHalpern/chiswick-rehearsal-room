import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import NavBar from '../components/NavBar';

const Header = styled.div`
  position: relative;
`;

const Layout = ({ children, data }) => (
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
      <meta name="robots" content="noindex" />
    </Helmet>
    <Header>
      <NavBar
        pageList={data.pageList.edges
          .map(edge => edge.node.frontmatter)
          .sort((a, b) => a.navOrder - b.navOrder)}
      />
    </Header>
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

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
