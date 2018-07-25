import Typography from 'typography';

import moragaTheme from 'typography-theme-moraga';

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2': {
    marginTop: rhythm(1 / 2),
  },
  body: {
    padding: '0!important',
  },
  html: {
    overflowX: 'hidden',
  },
  ul: {
    listStyleType: 'none',
  },
  'a,a:hover': {
    textDecoration: 'none',
    color: 'inherit',
    textShadow: 'none',
  },
  '.gatsby-resp-image-background-image': {
    borderRadius: '10px',
  },
});

const typography = new Typography(moragaTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
