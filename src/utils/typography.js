import Typography from 'typography';

import oceanBeachTheme from 'typography-theme-ocean-beach';

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2': {
    marginTop: rhythm(1 / 2),
  },
  h2: {
    textAlign: 'center',
    fontSize: '1.3em',
    fontStyle: 'italic',
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
  '.gatsby-resp-image-background-image': {
    borderRadius: '10px',
  },
});

const typography = new Typography(oceanBeachTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
