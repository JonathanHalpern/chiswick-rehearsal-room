// ./gatsby-browser.js
/* eslint-disable react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import { Router } from 'react-router-dom';
import FirebaseProvider from './src/containers/FirebaseProvider';

import firebase from './src/services/firebase';


// TODO restore this https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v1-to-v2/#browser-api-replaceroutercomponent-was-removed

// export const replaceRouterComponent = ({ history }) => {
//   const ConnectedRouterWrapper = ({ children }) => (
//     <FirebaseProvider firebase={firebase}>
//       <Router history={history}>{children}</Router>
//     </FirebaseProvider>
//   );

//   return ConnectedRouterWrapper;
// };
