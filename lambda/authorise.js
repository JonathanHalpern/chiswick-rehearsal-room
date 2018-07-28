(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ({

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = handler;
const serviceAccount = __webpack_require__(94);

function getAccessToken() {
  return new Promise((resolve, reject) => {
    const key = serviceAccount;
    const jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, SCOPES, null);
    jwtClient.authorize((err, tokens) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}

function handler(event, context, callback) {
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' })
  });
}

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = {"type":"service_account","project_id":"polling-app-88df9","private_key_id":"38b98b09113a3c0e2104383de71adaa560ef2530","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCejmUQ3K2hk+eu\nj1IBnjFa7TTK6Ln9Y9Uq3rOewmQSdI8v8kFnTWhJjGTI3ZuN1CxjXUkUMYWSL4tN\nQ28qOtnVuHYaoerUl/jb2YgwPsfQaLmylsneXHfFSAx4ly79XE7WIA3bNxYxzJA7\nzD1lb5HfoeeAqWhFRQqwIrWX1Ofve9ZiEr6Tpxi7zyTDS+wRLudmHZgg0fSA5jaZ\nbqSBkOnv+AKk20Ic8UkCl1tCFbhsGjOE40GTHwPioVWos85hNRywzyRXSSNJpXl2\n+777Ps7SvOJzUgeo85tPm0OrNlkdgQDrBwPLppasKw0+VU38+j1YZILUoQnxLrep\ng5VR67cVAgMBAAECggEAC4NV8d1AS1sAx/NWtlDdDxfpzTEMbkqNPD1rCARf/VoS\n2p2p450ijTKhT9eNl8UYCwgHSizVYNnMcOoMXKHk1ui7xK/MrC6zzozzX2NzoV21\nXDMoSdnnhX73jtsVeaa1/8TYlLohhbCvqXPpYl/xVO5976D9dggvID6I9pMqW0CC\nqFVw2bNwJPACYRxa2GDr4C30mdyi+eMKw/SjPNqZbPana6l1RcTIs72+mCrs1WPI\n11RCCw+bGyauqO5L8Kc+XlVAvjJADTz80LfAXp82gv6bdYPBb/EpCZUDU+lXZWB3\nwANPehkHfostxkWMOFTfQr2WVCJ6LTrK6J6ShmTMoQKBgQDY3pR+4pi+1T/H6Pyf\nxh0dgRVgjGkiuGZYMepaZ7ZVuVVlardDdzY1mBjbETRV9oWbJTylVIrEZZEf21g0\nb7v8ZeShN5tDH4PJ6k8q6kGLBZyO6lQLwWfWUeupOaTQMzkDdRDD58N9qpc0W97u\npaikJZnvI6hqWdZnhSS/FHhINQKBgQC7KkSOd7wXr1SdQM4EGbKY109R4dXiqQqg\nXVrGlaV3tjiCLYTDXaevIEkyt2wYupgKBjXSOYOoER7MiA7UFejpjSwcpVJGdSXC\nBGttWpBZL/S2yBHFGl05Uw6SJlOBXz2BrZVWV2LRKH1GuXrMLRkAHenQpK0GFnBW\nvJz2i9BPYQKBgDJXcKcHmKdrvxN7vPClv2py5XB1B468uV0tsRXtT0EU9YLGQ+ZQ\nTPAh71si4kA2Kot6GFrUhiXS4d5AP3hkm4GacXkO/GaXcTM0xc3TdQV9dvsh4AKe\nkakJeSfeLqj5yvlHem3PZezM5a6MyPIi2EPKSrJdV6HgWsnK+V21tbolAoGBAJud\nxyaVUyR2OOoOqbwrCZ2e12qDVOyCFD3FoOYgIlXogg9qfUpaokMvmuy6KPxemG8t\nPq6t91NT+MGiFoIsPV2CbTzcEA5Y9K3eMtvXQtGE1/jpXCz/gKda8XB+wUt9vowF\noXcKbTTub0rQiNMeY/z+4hsB8IJxQbI8XF15XhfBAoGBAMXjaGDruBDHyE4oZrmC\nwe2ySxepcUeE3J1iv8oyIw6IgIkCH6gaCl0z197V4PWPAlLr7zqfCjLA0OIMYr2g\n+mel1RqgDIQEquc7w+YfzKNVA1VKHbGzU0pNFl14y277byRmhGja4plO7TlQ5mSB\nuXTf27/YrhVavJ4USC//oYzf\n-----END PRIVATE KEY-----\n","client_email":"firebase-adminsdk-ze140@polling-app-88df9.iam.gserviceaccount.com","client_id":"117445654124746684832","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ze140%40polling-app-88df9.iam.gserviceaccount.com"}

/***/ })

/******/ })));