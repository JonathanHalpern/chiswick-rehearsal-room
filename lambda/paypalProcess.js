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
/******/ 	return __webpack_require__(__webpack_require__.s = 447);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142)();


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var configuration = __webpack_require__(41);
var api = __webpack_require__(9);

module.exports = function () {

    function configure(options) {
        api.configure(options);
    }

    function generateToken(config, cb) {
        api.generateToken(config, cb);
    }

    return {
        version: configuration.sdkVersion,
        configure: configure,
        configuration: configuration.default_options,
        generateToken: generateToken,
        payment: __webpack_require__(145)(),
        sale: __webpack_require__(146)(),
        refund: __webpack_require__(147)(),
        authorization: __webpack_require__(148)(),
        capture: __webpack_require__(149)(),
        order: __webpack_require__(150)(),
        payout: __webpack_require__(151)(),
        payoutItem: __webpack_require__(152)(),
        billingPlan: __webpack_require__(84)(),
        billingAgreement: __webpack_require__(85)(),
        creditCard: __webpack_require__(86)(),
        invoice: __webpack_require__(153)(),
        invoiceTemplate: __webpack_require__(154)(),
        openIdConnect: __webpack_require__(87)(),
        webProfile: __webpack_require__(155)(),
        notification: __webpack_require__(156)(),
        //entries below are deprecated but provided for compatibility with 0.* versions
        generate_token: generateToken,
        billing_plan: __webpack_require__(84)(),
        billing_agreement: __webpack_require__(85)(),
        credit_card: __webpack_require__(86)(),
        openid_connect: __webpack_require__(87)()
    };
};


/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = {"_from":"paypal-rest-sdk","_id":"paypal-rest-sdk@1.8.1","_inBundle":false,"_integrity":"sha512-Trj2GuPn10GqpICAxQh5wjxuDT7rq7DMOkvyatz05wI5xPGmqXN7UC0WfDSF9WSBs4YdcWZP0g+nY+sOdaFggw==","_location":"/paypal-rest-sdk","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"paypal-rest-sdk","name":"paypal-rest-sdk","escapedName":"paypal-rest-sdk","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/paypal-rest-sdk/-/paypal-rest-sdk-1.8.1.tgz","_shasum":"5023fd42f43da628d18cc00d6bd566eacba74528","_spec":"paypal-rest-sdk","_where":"/Users/jonathanhalpern/Projects/chiswick-rehearsal-room","author":{"name":"PayPal","email":"DL-PP-NODEJS-SDK@paypal.com","url":"https://developer.paypal.com/"},"bugs":{"url":"https://github.com/paypal/PayPal-node-SDK/issues","email":"DL-PP-NODEJS-SDK@paypal.com"},"bundleDependencies":false,"config":{"blanket":{"pattern":"lib","data-cover-never":"node_modules"}},"dependencies":{"buffer-crc32":"^0.2.3","semver":"^5.0.3"},"deprecated":false,"description":"SDK for PayPal REST APIs","devDependencies":{"blanket":"~1.1.5","chai":"~1.9.1","grunt":"~0.4.1","grunt-contrib-jshint":"~0.3.0","grunt-jsdoc":"^0.5.8","grunt-simple-mocha":"~0.4.0","ink-docstrap":"^0.5.2","jsdoc":"^3.3.0-beta1","mocha":"~1.18.2","mocha-lcov-reporter":"0.0.1","nock":"0.36.2"},"engines":{"node":">= v0.6.0"},"homepage":"https://github.com/paypal/PayPal-node-SDK","keywords":["paypal","rest","api","sdk"],"license":"SEE LICENSE IN https://github.com/paypal/PayPal-node-SDK/blob/master/LICENSE","main":"./index.js","name":"paypal-rest-sdk","repository":{"type":"git","url":"git+https://github.com/paypal/PayPal-node-SDK.git"},"scripts":{"test":"grunt"},"version":"1.8.1"}

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ process.env.NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
var COERCE = R++;
src[COERCE] = '(?:^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          return num;
      }
      return id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};

Comparator.prototype.intersects = function(comp, loose) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  var rangeTmp;

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, loose);
    return satisfies(this.value, rangeTmp, loose);
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, loose);
    return satisfies(comp.semver, rangeTmp, loose);
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, loose) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'));
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, loose) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'));

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};


exports.Range = Range;
function Range(range, loose) {
  if (range instanceof Range) {
    if (range.loose === loose) {
      return range;
    } else {
      return new Range(range.raw, loose);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, loose);
  }

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

Range.prototype.intersects = function(range, loose) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function(thisComparators) {
    return thisComparators.every(function(thisComparator) {
      return range.set.some(function(rangeComparators) {
        return rangeComparators.every(function(rangeComparator) {
          return thisComparator.intersects(rangeComparator, loose);
        });
      });
    });
  });
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          M = +M + 1;
        else
          m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  var max = null;
  var maxSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!max || maxSV.compare(v) === -1) { // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, loose);
      }
    }
  })
  return max;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  var min = null;
  var minSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!min || minSV.compare(v) === 1) { // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, loose);
      }
    }
  })
  return min;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}

exports.intersects = intersects;
function intersects(r1, r2, loose) {
  r1 = new Range(r1, loose)
  r2 = new Range(r2, loose)
  return r1.intersects(r2)
}

exports.coerce = coerce;
function coerce(version) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  var match = version.match(re[COERCE]);

  if (match == null)
    return null;

  return parse((match[1] || '0') + '.' + (match[2] || '0') + '.' + (match[3] || '0')); 
}


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

/**
 * Create or get details of payments
 * @return {Object} Payment functions
 */
function payment() {
    var baseURL = '/v1/payments/payment/';
    var operations = ['create', 'update', 'get', 'list'];

    var ret = {
        baseURL: baseURL,
        /**
         * Execute(complete) a PayPal or payment that has been approved by the payer
         * @param  {String}   id     Payment identifier
         * @param  {Object}   data   Transaction details if updating a payment
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb     
         * @return {Object}          Payment object for completed PayPal payment
         */
        execute: function execute(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/execute', data, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = payment;


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);

/**
 * Completed payments are referred to as sale transactions
 * @return {Object} sale functions
 */
function sale() {
    var baseURL = '/v1/payments/sale/';
    var operations = ['get', 'refund'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = sale;


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);

/**
 * Refunds on direct and captured payments
 * @return {Object} refund functions
 */
function refund() {
    var baseURL = '/v1/payments/refund/';
    var operations = ['get'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = refund;


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

/**
 * Retrieving, capturing, voiding, and reauthorizing previously created authorizations
 * @return {Object} authorization functions
 */
function authorization() {
    var baseURL = '/v1/payments/authorization/';
    var operations = ['get', 'capture'];

    var ret = {
        baseURL: baseURL,
        /**
         * Void a previously authorized payment
         * @param  {String}   id     authorization identifier
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb        
         * @return {Object}          Authorization object
         */
        void: function voidAuthorization(id, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/void', {}, config, cb);
        },
        /**
         * Reauthorize a PayPal account payment
         * @param  {String}   id     authorization identifier
         * @param  {object}   data   amount object with total e.g. 7.00 and currency e.g. USD
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb     
         * @return {}          
         */
        reauthorize: function reauthorize(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/reauthorize', data, config, cb);
        },
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = authorization;


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);

/**
 * Look up and refund captured payments
 * @return {Object} capture functions
 */
function capture() {
    var baseURL = '/v1/payments/capture/';
    var operations = ['get', 'refund'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = capture;


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

/**
 * Take action on a payment with the intent of order
 * @return {Object} order functions
 */
function order() {
    var baseURL = '/v1/payments/orders/';
    var operations = ['get', 'capture'];

    var ret = {
        baseURL: baseURL,
        /**
         * Void an existing order
         * @param  {String}   id     Order identifier
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb        
         * @return {Object}          Order object, with state set to voided
         */
        void: function voidOrder(id, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/do-void', {}, config, cb);
        },
        /**
         * Authorize an order
         * @param  {String}   id     Order identifier
         * @param  {Object}   data   Amount object with total and currency
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb 
         * @return {Object}          Authorization object
         */
        authorize: function authorize(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/authorize', data, config, cb);
        },
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = order;


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

/**
 * Make payouts to multiple PayPal accounts, or multiple payments to same PayPal account
 * @return {Object} payout functions
 */
function payout() {
    var baseURL = '/v1/payments/payouts/';
    var operations = ['get'];

    var ret = {
        baseURL: baseURL,
        /**
         * Create a batch(asynchronous) or single(synchronous) payout
         * @param  {Object}   data      payout details
         * @param  {String}   sync_mode true for synchronous payouts, false by default
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb
         * @return {Object}             Payout object
         */
        create: function create(data, sync_mode, config, cb) {
            cb = (typeof sync_mode === 'function') ? sync_mode : cb;
            sync_mode = (typeof sync_mode === 'string' && sync_mode === 'true') ? 'true' : 'false';
            api.executeHttp('POST', this.baseURL + "?" + "sync_mode=" + sync_mode, data, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = payout;


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

/**
 * An individual Payout item
 * @return {Object} payout object functions
 */
function payoutItem() {
    var baseURL = '/v1/payments/payouts-item/';
    var operations = ['get'];

    var ret = {
        baseURL: baseURL,
        /**
         * Cancel an existing payout/transaction in UNCLAIMED state
         * Explicitly define `cancel` method here to avoid having to pass in an empty `data` parameter
         * as required by the generated generic `cancel` operation.
         * 
         * @param  {String}   id     Payout item id
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb
         * @return {Object}          Payout item details object with transaction status of RETURNED
         */
        cancel: function cancel(id, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/cancel', {}, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = payoutItem;


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

/**
 * Create, send and manage invoices, PayPal emails the customer with link to invoice
 * on PayPal's website. Customers can pay with PayPal, check, debit or credit card.
 * @return {Invoice} Invoice functions
 */
function invoice() {
    var baseURL = '/v1/invoicing/invoices/';
    var operations = ['create', 'get', 'list', 'del', 'delete', 'cancel'];

    var ret = {
        baseURL: baseURL,
        search: function search(data, config, cb) {
            api.executeHttp('POST', '/v1/invoicing/search', data, config, cb);
        },
        update: function update(id, data, config, cb) {
            api.executeHttp('PUT', this.baseURL + id, data, config, cb);
        },
        send: function send(id, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/send', {}, config, cb);
        },
        remind: function remind(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/remind', data, config, cb);
        },
        recordPayment: function recordPayment(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/record-payment', data, config, cb);
        },
        recordRefund: function recordRefund(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/record-refund', data, config, cb);
        },
        deleteExternalPayment: function deleteExternalPayment(invoiceId, transactionId, config, cb) {
            api.executeHttp('DELETE', this.baseURL + invoiceId + '/payment-records/' + transactionId, {}, config, cb);
        },
        deleteExternalRefund: function deleteExternalRefund(invoiceId, transactionId, config, cb) {
            api.executeHttp('DELETE', this.baseURL + invoiceId + '/refund-records/' + transactionId, {}, config, cb);
        },
        generateNumber: function generateNumber(config, cb) {
            api.executeHttp("POST", this.baseURL + '/next-invoice-number', {}, config, cb);
        },
        /* Specify invoice ID to get a QR code corresponding to the invoice */
        qrCode: function qrCode(id, height, width, config, cb) {
            var image_attributes = {
                "height": height,
                "width": width
            };
            api.executeHttp('GET', this.baseURL + id + '/qr-code', image_attributes, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = invoice;


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

function invoiceTemplate() {
    var baseURL = '/v1/invoicing/templates/';
    var operations = ['create', 'get', 'list', 'delete'];

    var ret = {
        baseURL: baseURL,
        update: function update(id, data, config, cb) {
            api.executeHttp('PUT', this.baseURL + id, data, config, cb);
        }
    };

    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = invoiceTemplate;


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

/**
 * Exposes REST endpoints for providing a customizing Paypal checkout
 * flow for users, supports features such as noshipping.
 *
 * https://developer.paypal.com/webapps/developer/docs/integration/direct/rest-experience-overview/
 * @return {Object} web profile functions
 */
function webProfile() {
    var baseURL = '/v1/payment-experience/web-profiles/';
    var operations = ['create', 'list', 'get', 'del', 'delete'];

    var ret = {
        baseURL: baseURL,
        /**
         * Update an experience profile
         * @param  {String}   id     Web Profile Id
         * @param  {Object}   data   Object with name, flow_config, input_fields and presentation
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb     
         * @return {}          Returns the HTTP status of 204 if the call is successful
         */
        update: function update(id, data, config, cb) {
            api.executeHttp('PUT', this.baseURL + id, data, config, cb);
        },
        /**
         * Partially update a web experience profile
         * @param  {String}   id     Web Profile Id
         * @param  {Array}   data   Array of patch request objects (operation, path, value, from)
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb 
         * @return {}          Returns the HTTP status of 204 if the call is successful
         */
        replace: function replace(id, data, config, cb) {
            api.executeHttp('PATCH', this.baseURL + id, data, config, cb);
        },
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = webProfile;


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);
var https = __webpack_require__(13);
var crypto = __webpack_require__(4);
var crc32 = __webpack_require__(157);

/**
 * Exposes REST endpoints for creating and managing webhooks
 * @return {Object} webhook functions
 */
function webhook() {
    var baseURL = '/v1/notifications/webhooks/';
    var operations = ['create', 'list', 'get', 'del', 'delete'];

    var ret = {
        baseURL: baseURL,
        replace: function replace(id, data, config, cb) {
            api.executeHttp('PATCH', this.baseURL + id, data, config, cb);
        },
        eventTypes: function eventTypes(id, config, cb) {
            api.executeHttp('GET', this.baseURL + id + '/event-types', {}, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

/**
 * Exposes REST endpoints for working with subscribed webhooks events
 *
 * https://developer.paypal.com/webapps/developer/docs/integration/direct/rest-webhooks-overview/#events
 * @return {Object} webhook event functions
 */
function webhookEvent() {
    var baseURL = '/v1/notifications/webhooks-events/';
    var operations = ['list', 'get'];

    /**
     * Instead of calling this method, it is recommended that you initiate a GET request in your code for the webhook
     * event data and use the returned information from the webhook or use the updated verify() function. See
     * https://github.com/paypal/PayPal-node-SDK/wiki/Webhook-Validation
     *
     * @example
     * var paypal = require('paypal-rest-sdk');
     * function(request, response) {
     *     try {
     *         // Get the Webhook event id from the incoming event request
     *         var webhookEventId = JSON.parse(request.body).id;
     *
     *         paypal.notification.webhookEvent.get(webhookEventId, function (error, webhookEvent) {
     *             if (error) {
     *                 console.log(error);
     *                 // The webhook event data could not be found.
     *                 // Send a HTTP 503 response status code ( http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.4 )
     *                 // to signal to PayPal to resend the request at a later time.
     *                 response.sendStatus(503);
     *             } else {
     *                 // Proceed to use the data from PayPal
     *                 console.log("Get webhookEvent Response");
     *                 console.log(JSON.stringify(webhookEvent));
     *                 response.sendStatus(200);
     *             }
     *         });
     *     } catch (e) {
     *         // The webhook id could not be found or any other error occurred.
     *         // Send a HTTP 503 response status code ( http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.4 )
     *         // to signal to PayPal to resend the request at a later time
     *         response.sendStatus(503);
     *     }
     * }
     *
     * @deprecated
     * @param  {String}   body raw body of request
     * @param  {Function} cb   callback function
     */
    function getAndVerify(body, cb) {
        var response = false;
        var err = null;
        try {
            var webhookEventId = JSON.parse(body).id;
            api.executeHttp('GET', baseURL + webhookEventId, {}, function (error, res) {
                if (error) {
                    cb(error, response);
                } else {
                    cb(err, true);
                }
            });
        } catch (e) {
            err = new Error("Webhook Event Id attribute not found. Possible reason could be invalid JSON Object.");
            cb(err, response);
        }
    }

    /**
     * @param {Object} headers from request
     * @param {String} raw body of request
     * @param {String} webhook id
     * @param {Function} callback function
     */
    function verify(headers, body, webhookId, callback) {
        // In an effort not to break existing applications, accept old arguments temporarily
        if (arguments.length > 4) {
            /* jshint validthis: true */
            return verifyLegacy.apply(this, arguments);
        }

        if (typeof headers !== 'object') {
            return callback(new Error("headers is not an object"), false);
        }

        // Normalizes headers
        Object.keys(headers).forEach(function (header) {
            headers[header.toUpperCase()] = headers[header];
        });

        var webhookEventBody = (typeof body === "string") ? JSON.parse(body) : body;

        var payload = {
            'auth_algo': headers['PAYPAL-AUTH-ALGO'],
            'cert_url': headers['PAYPAL-CERT-URL'],
            'transmission_id': headers['PAYPAL-TRANSMISSION-ID'],
            'transmission_sig': headers['PAYPAL-TRANSMISSION-SIG'],
            'transmission_time': headers['PAYPAL-TRANSMISSION-TIME'],
            'webhook_id': webhookId,
            'webhook_event': webhookEventBody
        };

        api.executeHttp('POST', '/v1/notifications/verify-webhook-signature', payload, callback);
    }

    function verifyLegacy(certURL, transmissionId, timeStamp, webhookId, eventBody, ppTransmissionSig, cb) {
        // Emit a warning that the arguments have changed
        if (process.env.NODE_ENV === 'development') {
            console.log('PayPal-Node-SDK: Webhook verify arguments have changed. Please check the latest documentation on https://developer.paypal.com/docs/integration/direct/rest-webhooks-overview/#event-signature.');
        }

        var headers = {
            // This is currently the default auth algorithm. If this changes, need to change. Legacy method did
            // not pass in the algorithm.
            'PAYPAL-AUTH-ALGO': 'SHA256withRSA',
            'PAYPAL-CERT-URL': certURL,
            'PAYPAL-TRANSMISSION-ID': transmissionId,
            'PAYPAL-TRANSMISSION-SIG': ppTransmissionSig,
            'PAYPAL-TRANSMISSION-TIME': timeStamp
        };

        function legacyCallback(error, response) {
            if (error) {
                cb(error, false);
            } else {
                // Verification status must be SUCCESS
                if (response.verification_status === "SUCCESS") {
                    cb(null, true);
                } else {
                    cb(null, false);
                }
            }
        }

        return verify(headers, eventBody, webhookId, legacyCallback);
    }

    var ret = {
        baseURL: baseURL,
        verify: verify,
        getAndVerify: getAndVerify,
        resend: function resend(id, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/resend', {}, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

/**
 * Exposes REST endpoint for listing available event types for webhooks
 * @return {Object} webhook event type functions
 */
function webhookEventType() {
    var baseURL = '/v1/notifications/webhooks-event-types/';
    var operations = ['list'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

/**
 * Exposes the namespace for webhook and webhook event functionalities
 * 
 * https://developer.paypal.com/webapps/developer/docs/api/#notifications
 * @return {Object} notification functions
 */
function notification() {
    return {
        webhook: webhook(),
        webhookEvent: webhookEvent(),
        webhookEventType: webhookEventType()
    };
}

module.exports = notification;


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(31).Buffer;

var CRC_TABLE = [
  0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419,
  0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4,
  0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07,
  0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de,
  0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856,
  0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9,
  0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4,
  0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b,
  0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3,
  0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a,
  0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599,
  0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924,
  0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190,
  0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f,
  0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e,
  0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01,
  0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed,
  0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950,
  0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3,
  0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2,
  0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a,
  0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5,
  0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010,
  0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f,
  0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17,
  0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6,
  0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615,
  0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8,
  0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1, 0xf00f9344,
  0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb,
  0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a,
  0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5,
  0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1,
  0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c,
  0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef,
  0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236,
  0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe,
  0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31,
  0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c,
  0x026d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x05005713,
  0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b,
  0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242,
  0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1,
  0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c,
  0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278,
  0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7,
  0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66,
  0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9,
  0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605,
  0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8,
  0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b,
  0x2d02ef8d
];

if (typeof Int32Array !== 'undefined') {
  CRC_TABLE = new Int32Array(CRC_TABLE);
}

function ensureBuffer(input) {
  if (Buffer.isBuffer(input)) {
    return input;
  }

  var hasNewBufferAPI =
      typeof Buffer.alloc === "function" &&
      typeof Buffer.from === "function";

  if (typeof input === "number") {
    return hasNewBufferAPI ? Buffer.alloc(input) : new Buffer(input);
  }
  else if (typeof input === "string") {
    return hasNewBufferAPI ? Buffer.from(input) : new Buffer(input);
  }
  else {
    throw new Error("input must be buffer, number, or string, received " +
                    typeof input);
  }
}

function bufferizeInt(num) {
  var tmp = ensureBuffer(4);
  tmp.writeInt32BE(num, 0);
  return tmp;
}

function _crc32(buf, previous) {
  buf = ensureBuffer(buf);
  if (Buffer.isBuffer(previous)) {
    previous = previous.readUInt32BE(0);
  }
  var crc = ~~previous ^ -1;
  for (var n = 0; n < buf.length; n++) {
    crc = CRC_TABLE[(crc ^ buf[n]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ -1);
}

function crc32() {
  return bufferizeInt(_crc32.apply(null, arguments));
}
crc32.signed = function () {
  return _crc32.apply(null, arguments);
};
crc32.unsigned = function () {
  return _crc32.apply(null, arguments) >>> 0;
};

module.exports = crc32;


/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var sdkVersion = exports.sdkVersion = __webpack_require__(143).version;
var userAgent = exports.userAgent = 'PayPalSDK/PayPal-node-SDK ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform  + '; OpenSSL ' + process.versions.openssl + ')';

var default_options = exports.default_options = {
    'mode': 'sandbox',
    'schema': 'https',
    'host': 'api.sandbox.paypal.com',
    'port': '',
    'openid_connect_schema': 'https',
    'openid_connect_host': 'api.sandbox.paypal.com',
    'openid_connect_port': '',
    'authorize_url': 'https://www.sandbox.paypal.com/signin/authorize',
    'logout_url': 'https://www.sandbox.paypal.com/webapps/auth/protocol/openidconnect/v1/endsession',
    'headers': {}
};


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = handler;
const paypal = __webpack_require__(141);

paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: "AVQRQZrhx5INZ0hvHyFoj6m_vmp94wl8q4mEIcQ6fbuVdjOesWdUEy-V2fa4peZLtXfzKC5-k9j1mlks", // run: firebase functions:config:set paypal.client_id="yourPaypalClientID"
  client_secret: "ECWnpEE_GmHvAE1eobMrxkd6-u9ugeabUhENE_eAOHR_Kx6m3bYo2ScCNK6C76nrqvA3BFza_VitAm2k" // run: firebase functions:config:set paypal.client_secret="yourPaypalClientSecret"
});

function handler(event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode: 200,
      body: {}
    });
  }

  const data = event.body;
  const { paymentID, payerID, price } = JSON.parse(data);

  const execute_payment_json = {
    payer_id: payerID,
    transactions: [{
      amount: {
        currency: 'GBP',
        total: price
      }
    }]
  };

  console.log(paymentID, execute_payment_json);

  paypal.payment.execute(paymentID, execute_payment_json, (error, payment) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: 200,
        body: 'payment failed'
      });
    } else if (payment.state === 'approved') {
      console.info('payment completed successfully, description: ', payment.transactions[0].description);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(payment)
      });
    } else {
      console.warn('payment.state: not approved ?');
      // replace debug url
      callback(null, {
        statusCode: 200,
        body: 'payment failed'
      });
    }
  });
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */

var api = __webpack_require__(9);

/**
 * Attach REST operations from restFunctions as required by a PayPal API
 * resource e.g. create, get and list are attahed for Payment resource
 * @param  {Object} destObject A PayPal resource e.g. Invoice
 * @param  {Array} operations Rest operations that the destObject will allow e.g. get
 * @return {Object}            
 */
function mixin(destObject, operations) {
    operations.forEach(function (property) {
        destObject[property] = restFunctions[property];
    });
    return destObject;
}

/**
 * restFunctions Object containing the REST CRUD methods and paypal specific REST methods that
 * are shared between at least two of the REST endpoints, otherwise the function
 * will be defined within the resource definition itself
 * @type {Object}
 */
var restFunctions = {
    create: function create(data, config, cb) {
        api.executeHttp('POST', this.baseURL, data, config, cb);
    },
    get: function get(id, config, cb) {
        api.executeHttp('GET', this.baseURL + id, {}, config, cb);
    },
    list: function list(data, config, cb) {
        if (typeof data === 'function') {
            config = data;
            data = {};
        }
        api.executeHttp('GET', this.baseURL, data, config, cb);
    },
    del: function del(id, config, cb) {
        api.executeHttp('DELETE', this.baseURL + id, {}, config, cb);
    },
    //provided for compatibility with 0.* versions
    delete: function del(id, config, cb) {
        api.executeHttp('DELETE', this.baseURL + id, {}, config, cb);
    },
    capture: function capture(id, data, config, cb) {
        api.executeHttp('POST', this.baseURL + id + '/capture', data, config, cb);
    },
    refund: function refund(id, data, config, cb) {
        api.executeHttp('POST', this.baseURL + id + '/refund', data, config, cb);
    },
    update: function update(id, data, config, cb) {
        api.executeHttp('PATCH', this.baseURL + id, data, config, cb);
    },
    cancel: function cancel(id, data, config, cb) {
        api.executeHttp('POST', this.baseURL + id + '/cancel', data, config, cb);
    }
};

module.exports.mixin = mixin;


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var http = __webpack_require__(30);
var https = __webpack_require__(13);
var querystring = __webpack_require__(34);
var configuration = __webpack_require__(41);
var semver = __webpack_require__(144);

/**
 * Wraps the http client, handles request parameters, populates request headers, handles response
 * @param  {String}   http_method        HTTP Method GET/POST
 * @param  {String}   path               url endpoint
 * @param  {Object}   data               Payload for HTTP Request
 * @param  {Object}   http_options_param Configuration parameters
 * @param  {Function} cb                 [description]
 */
var invoke = exports.invoke = function invoke(http_method, path, data, http_options_param, cb) {
    var client = (http_options_param.schema === 'http') ? http : https;

    var request_data = data;

    if (http_method === 'GET') {
        //format object parameters into GET request query string
        if (typeof request_data !== 'string') {
            request_data = querystring.stringify(request_data);
        }
        if (request_data) {
            path = path + "?" + request_data;
            request_data = "";
        }
    } else if (typeof request_data !== 'string') {
        request_data = JSON.stringify(request_data);
    }

    var http_options = {};

    if (http_options_param) {

        http_options = JSON.parse(JSON.stringify(http_options_param));

        if (!http_options.headers) {
            http_options.headers = {};
        }
        http_options.path = path;
        http_options.method = http_method;
        if (request_data) {
            http_options.headers['Content-Length'] = Buffer.byteLength(request_data, 'utf-8');
        }

        if (!http_options.headers.Accept) {
            http_options.headers.Accept = 'application/json';
        }

        if (!http_options.headers['Content-Type']) {
            http_options.headers['Content-Type'] = 'application/json';
        }

        http_options.headers['User-Agent'] = configuration.userAgent;
        http_options.withCredentials = false;
    }

    // Enable full request response logging in development/non-production environment only
    if (configuration.default_options.mode !== 'live' && process.env.PAYPAL_DEBUG) {
        console.dir(JSON.stringify(http_options.headers));
        console.dir(request_data);
    }

    //PCI compliance
    if (process.versions !== undefined && process.versions.openssl !== undefined && semver.lt(process.versions.openssl.slice(0, 5), '1.0.1')) {
        console.warn('WARNING: openssl version ' + process.versions.openssl + ' detected. Per PCI Security Council mandate (https://github.com/paypal/TLS-update), you MUST update to the latest security library.');
    }

    var req = client.request(http_options);
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
        cb(e, null);
    });

    req.on('response', function (res) {
        var response = '';
        //do not setEndcoding with browserify
        if (res.setEncoding) {
            res.setEncoding('utf8');
        }

        res.on('data', function (chunk) {
            response += chunk;
        });

        res.on('end', function () {
            var err = null;

            try {
                //export PAYPAL_DEBUG to development to get access to paypal-debug-id
                //for questions to merchant technical services.
                if (res.headers['paypal-debug-id'] !== undefined && process.env.PAYPAL_DEBUG) {
                    console.log('paypal-debug-id: ' + res.headers['paypal-debug-id']);

                    if (configuration.default_options.mode !== 'live') {
                        console.dir(JSON.stringify(res.headers));
                        console.dir(response);
                    }
                }

                // Set response to an empty object if no data was received
                if (response.trim() === '') {
                    response = {};
                } else if (typeof res.headers['content-type'] === "string" &&
                    res.headers['content-type'].match(/^application\/json(?:;.*)?$/) !== null) {
                    // Set response to be parsed JSON object if data received is json
                    // expect that content-type header has application/json when it
                    // returns data
                    response = JSON.parse(response);
                }
                response.httpStatusCode = res.statusCode;
            } catch (e) {
                err = new Error('Invalid JSON Response Received. If the response received is empty, please check' +
                 'the httpStatusCode attribute of error message for 401 or 403. It is possible that the client credentials' +
                  'are invalid for the environment you are using, be it live or sandbox.');
                err.error = {
                    name: 'Invalid JSON Response Received, JSON Parse Error.'
                };
                err.response = response;
                err.httpStatusCode = res.statusCode;
                response = null;
            }

            if (!err && (res.statusCode < 200 || res.statusCode >= 300)) {
                err = new Error('Response Status : ' + res.statusCode);
                // response contains the full json description of the error
                // that PayPal returns and information link
                err.response = response;
                if (process.env.PAYPAL_DEBUG) {
                    err.response_stringified = JSON.stringify(response);
                }
                err.httpStatusCode = res.statusCode;
                response = null;
            }
            cb(err, response);
        });
    });

    if (request_data) {
        req.write(request_data);
    }
    req.end();
};


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */

var https = __webpack_require__(13);
var isArray = Array.isArray;
var hasOwn = Object.prototype.hasOwnProperty;

var getDefaultEndpoint = exports.getDefaultEndpoint = function getDefaultEndpoint(mode) {
    return (typeof mode === "string" && mode === "live") ? "paypal.com" : "sandbox.paypal.com";
};

var getDefaultApiEndpoint = exports.getDefaultApiEndpoint = function getDefaultApiEndpoint(mode) {
    var api = (typeof mode === "string" && mode === "security-test-sandbox") ? "test-api." : "api.";
    return api + getDefaultEndpoint(mode);
};

/**
 * Recursively copies given object into a new object. Helper method for merge
 * @param  {Object} v
 * @return {Object}
 */
function clone(v) {
    if (v === null || typeof v !== "object") {
        return v;
    }

    if (isArray(v)) {
        var arr = v.slice();
        for (var i = 0; i < v.length; i++) {
            arr[i] = clone(arr[i]);
        }
        return arr;
    }
    else {
        var obj = {};
        for (var k in v) {
            obj[k] = clone(v[k]);
        }
        return obj;
    }
}

/**
 * Merges two Objects recursively, setting property of obj1 to those of obj2
 * and creating property as necessary. 
 *
 * Implementation suggested by @kobalicek on https://github.com/paypal/PayPal-node-SDK/issues/69
 * @param  {Object} obj1 
 * @param  {Object} obj2 
 * @return {Object}     
 */
var merge = exports.merge = function merge(obj1, obj2, appendOnly) {

    //Handle invalid arguments
    if (obj1 === null || typeof obj1 !== "object") {
        throw new TypeError("merge() - first parameter has to be an object, not " + typeof obj1 + ".");
    }

    if (obj2 === null || typeof obj2 !== "object") {
        throw new TypeError("merge() - first parameter has to be an object, not " + typeof obj2 + ".");
    }

    if (isArray(obj1) || isArray(obj2)) {
        throw new TypeError("merge() - Unsupported for arrays.");
    }

    for (var k in obj2) {
        var obj1Val, obj2Val = obj2[k];
        if (hasOwn.call(obj1, k)) {
            if (!appendOnly) {
                obj1Val = obj1[k];
                if (obj1Val !== null && typeof obj1Val === "object" &&
                        obj2Val !== null && typeof obj2Val === "object") {
                    merge(obj1Val, obj2Val);
                }
                else {
                    obj1[k] = clone(obj2Val);
                }
            }
        }
        else {
            obj1[k] = clone(obj2Val);
        }
    }
    return obj1;
};

/**
 * Checks if access token for client id has expired
 * @param  {Object} token_hash  object returned from paypal access token request
 *                              with expires_in set and sdk sets the created_at
 * @return {Boolean}            true if token expired else false
 */
var checkExpiredToken = exports.checkExpiredToken = function checkExpiredToken(token_hash) {
    var delta = (new Date().getTime() / 1000) - token_hash.created_at;
    return (delta < token_hash.expires_in) ? false : true;
};



/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

/**
 * Create planned sets of future recurring payments at periodic intervals (sometimes known as “subscriptions”).
 * @return {Object} billing plan functions
 */
function billingPlan() {
    var baseURL = '/v1/payments/billing-plans/';
    var operations = ['create', 'get', 'list', 'update'];

    var ret = {
        baseURL: baseURL,
        /**
         * Activate a billing plan so that it can be used to form
         * billing agreements with users
         * @param  {String}   id     Billing plan identifier
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb     
         * @return {}          Returns the HTTP status of 200 if the call is successful
         */
        activate: function activate(id, config, cb) {
            var activate_attributes = [
                {
                    "op": "replace",
                    "path": "/",
                    "value": {
                        "state": "ACTIVE"
                    }
                }
            ];
            api.executeHttp('PATCH', this.baseURL + id, activate_attributes, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = billingPlan;


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);
var api = __webpack_require__(9);

/**
 * The billing agreements allows merchants to have users agree to be billed
 * for billing plans
 * @return {Object} billing agreement functions
 */
function billingAgreement() {
    var baseURL = '/v1/payments/billing-agreements/';
    var operations = ['create', 'get', 'update', 'cancel'];

    /**
     * Search for transactions within a billing agreement
     * @param  {String}   id         Identifier of the agreement resource for which to list transactions.
     * @param  {String}   start_date YYYY-MM-DD start date of range of transactions to list
     * @param  {String}   end_date   YYYY-MM-DD end date of range of transactions to list
     * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
     * @param  {Function} cb         
     * @return {Object}              agreement transaction list, array of agreement transaction objects
     */
    function searchTransactions(id, start_date, end_date, config, cb) {
        var date_range = {
            "start_date": start_date,
            "end_date": end_date
        };
        api.executeHttp('GET', baseURL + id + '/transactions', date_range, config, cb);
    }

    /**
     * Bill outstanding balance of an agreement
     * @param  {String}   id     Identifier of the agreement resource for which to bill balance
     * @param  {Object}   data   Agreement state descriptor, fields include note and amount which has two attributes, value and currency
     * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
     * @param  {Function} cb      
     * @return {}          Returns the HTTP status of 204 if the call is successful
     */
    function billBalance(id, data, config, cb) {
        api.executeHttp('POST', baseURL + id + '/bill-balance', data, config, cb);
    }

    /**
     * Set the outstanding amount of an agreement
     * @param  {String}   id     Identifier of the agreement resource for which to set balance
     * @param  {Object}   data   Two attributes currency e.g. "USD" and value e.g. "100"
     * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
     * @param  {Function} cb
     * @return {}          Returns the HTTP status of 204 if the call is successful
     */
    function setBalance(id, data, config, cb) {
        api.executeHttp('POST', baseURL + id + '/set-balance', data, config, cb);
    }

    var ret = {
        baseURL: baseURL,
        /**
         * Execute an agreement after the buyer approves it
         * @param  {String}   token  Payment Token of format EC-XXXXXX, appended to return url as a parameter after buyer approves agreement
         * @param  {Object|Function}   data Empty object or callback. Optional, will be removed in next major release. 
         * @param  {Object|Function}   config Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb     
         * @return {Object}          agreement object
         */
        execute: function execute(token, data, config, cb) {
            //support case where neither data nor config is provided
            if (typeof data === "function" && arguments.length === 2) {
                cb = data;
                data = {};
            }
            api.executeHttp('POST', this.baseURL + token + '/agreement-execute', data, config, cb);
        },
        /**
         * Changes agreement state to suspended, can be reactivated unlike cancelling agreement
         * @param  {String}   id     Identifier of the agreement resource for which to suspend
         * @param  {Object}   data   Add note attribute, reason for changing state of agreement
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb
         * @return {}          Returns the HTTP status of 204 if the call is successful
         */
        suspend: function suspend(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/suspend', data, config, cb);
        },
        /**
         * Reactivate a suspended agreement
         * @param  {String}   id     Identifier of the agreement resource for which to reactivate
         * @param  {Object}   data   Add note attribute, reason for changing state of agreement
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb
         * @return {}          Returns the HTTP status of 204 if the call is successful
         */
        reactivate: function reactivate(id, data, config, cb) {
            api.executeHttp('POST', this.baseURL + id + '/re-activate', data, config, cb);
        },
        billBalance: billBalance,
        setBalance: setBalance,
        searchTransactions: searchTransactions,
        //entries below are deprecated but provided for compatibility with 0.* versions
        bill_balance: billBalance,
        set_balance: setBalance,
        search_transactions: searchTransactions
    };
    ret = generate.mixin(ret, operations);
    return ret;
}
module.exports = billingAgreement;


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var generate = __webpack_require__(6);

/**
 * Store credit cards information securely in vault
 * @return {Object} Credit Card functions
 */
function creditCard() {
    var baseURL = '/v1/vault/credit-cards/';
    var operations = ['create', 'get', 'update', 'del', 'delete', 'list'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = creditCard;


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */

var configuration = __webpack_require__(41);
var client = __webpack_require__(82);
var utils = __webpack_require__(83);
var querystring = __webpack_require__(34);

/**
 * Sets up request body for open id connect module requests
 * @param  {String}   path              url endpoint
 * @param  {Object}   data              Payload for HTTP Request
 * @param  {Object|Function}   config   Configuration parameters such as authorization code or refresh token
 * @param  {Function} cb     
 */
function openIdConnectRequest(path, data, config, cb) {
    var http_options = {
        schema: config.openid_connect_schema || configuration.default_options.openid_connect_schema,
        host: utils.getDefaultApiEndpoint(config.mode) || config.openid_connect_host,
        port: config.openid_connect_port || configuration.default_options.openid_connect_port,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    //Populate Basic Auth header only for endpoints that need it such as tokeninfo
    if (data.client_id && data.client_secret) {
        http_options.headers.Authorization = 'Basic ' + new Buffer(data.client_id + ':' + data.client_secret).toString('base64');
    }

    client.invoke('POST', path, querystring.stringify(data), http_options, cb);
}

/**
 * @param  {Object} config Configurations for settings and Auth
 * @return {String}        client id
 */
function getClientId(config) {
    return config.openid_client_id || config.client_id ||
        configuration.default_options.openid_client_id || configuration.default_options.client_id;
}

/**
 * @param  {Object} config Configurations for settings and Auth
 * @return {String}        client secret
 */
function getClientSecret(config) {
    return config.openid_client_secret || config.client_secret ||
        configuration.default_options.openid_client_secret || configuration.default_options.client_secret;
}

/**
 * Configurations for settings and Auth
 * @return {String}        redirect uri
 */
function getRedirectUri(config) {
    return config.openid_redirect_uri || configuration.default_options.openid_redirect_uri;
}

/**
 * Obtain a user’s consent to make Identity API calls on their behalf by redirecting them
 * to authorization endpoint
 * @param  {Data}   data      Payload associated with API request
 * @param  {Object} config    Configurations for settings and Auth
 * @return {String}        authorize url
 */
function authorizeUrl(data, config) {
    config = config || configuration.default_options;
    data   = data || {};

    //Use mode provided, live or sandbox to construct authorize_url, sandbox is default
    var url = 'https://www.' + utils.getDefaultEndpoint(config.mode) + '/signin/authorize' || config.authorize_url;

    data = utils.merge({
        'client_id': getClientId(config),
        'scope': 'openid',
        'response_type': 'code',
        'redirect_uri': getRedirectUri(config)
    }, data);

    return url + '?' + querystring.stringify(data);
}

/**
 * Direct user to logout url to end session
 * @param  {Data}   data      Payload associated with API request
 * @param  {Object} config    Configurations for settings and Auth
 * @return {String}        logout url
 */
function logoutUrl(data, config) {
    config = config || configuration.default_options;
    data   = data || {};

    var url = 'https://www.' + utils.getDefaultEndpoint(config.mode) + '/webapps/auth/protocol/openidconnect/v1/endsession' || config.logout_url;

    if (typeof data === 'string') {
        data = { 'id_token': data };
    }

    data = utils.merge({
        'logout': 'true',
        'redirect_uri': getRedirectUri(config)
    }, data);

    return url + '?' + querystring.stringify(data);
}

/**
 * Grant a new access token, using a refresh token
 * @param  {Object}   data   Payload associated with API request
 * @param  {Object|Function}   config Configurations for settings and Auth
 * @param  {Function} cb     Callback function
 */
function tokenInfoRequest(data, config, cb) {

    if (typeof config === 'function') {
        cb = config;
        config = configuration.default_options;
    } else if (!config) {
        config = configuration.default_options;
    }

    data = utils.merge({
        'client_id': getClientId(config),
        'client_secret': getClientSecret(config)
    }, data);

    openIdConnectRequest('/v1/identity/openidconnect/tokenservice', data, config, cb);
}

/**
 * Retrieve user profile attributes
 * @param  {Object}   data   Payload associated with API request
 * @param  {Object|Function}   config Configurations for settings and Auth
 * @param  {Function} cb     Callback function
 */
function userInfoRequest(data, config, cb) {
    if (typeof config === 'function') {
        cb = config;
        config = configuration.default_options;
    } else if (!config) {
        config = configuration.default_options;
    }

    if (typeof data === 'string') {
        data = { 'access_token': data };
    }

    data = utils.merge({
        'schema': 'openid'
    }, data);

    openIdConnectRequest('/v1/identity/openidconnect/userinfo', data, config, cb);
}

/**
 * Use log in with PayPal to avoid storing user data on the system
 * @return {Object} openidconnect functions
 */
function openIdConnect() {
    return {
        tokeninfo: {
            create: function (data, config, cb) {
                if (typeof data === 'string') {
                    data = { 'code': data };
                }
                data.grant_type = 'authorization_code';
                tokenInfoRequest(data, config, cb);
            },
            refresh: function (data, config, cb) {
                if (typeof data === 'string') {
                    data = { 'refresh_token': data };
                }
                data.grant_type = 'refresh_token';
                tokenInfoRequest(data, config, cb);
            }
        },
        authorizeUrl: authorizeUrl,
        logoutUrl: logoutUrl,
        userinfo: {
            get: userInfoRequest
        },
        //entries below are deprecated but provided for compatibility with 0.* versions
        authorize_url: authorizeUrl,
        logout_url: logoutUrl
    };
}

module.exports = openIdConnect;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2015-2016 PayPal, Inc. */


var client = __webpack_require__(82);
var utils = __webpack_require__(83);
var configuration = __webpack_require__(41);

/**
 * token_persist client id to access token cache, used to reduce access token round trips
 * @type {Object}
 */
var token_persist = {};

/**
 * Set up configuration globally such as client_id and client_secret,
 * by merging user provided configurations otherwise use default settings
 * @param  {Object} options Configuration parameters passed as object
 * @return {undefined}
 */
var configure = exports.configure = function configure(options) {
    if (options !== undefined && typeof options === 'object') {
        configuration.default_options = utils.merge(configuration.default_options, options);
    }

    if (configuration.default_options.mode !== 'sandbox' && configuration.default_options.mode !== 'live') {
        throw new Error('Mode must be "sandbox" or "live"');
    }
};

/**
 * Generate new access token by making a POST request to /oauth2/token by
 * exchanging base64 encoded client id/secret pair or valid refresh token.
 *
 * Otherwise authorization code from a mobile device can be exchanged for a long
 * living refresh token used to charge user who has consented to future payments.
 * @param  {Object|Function}   config Configuration parameters such as authorization code or refresh token
 * @param  {Function} cb     Callback function
 * @return {String}          Access token or Refresh token
 */
var generateToken = exports.generateToken = function generateToken(config, cb) {

    if (typeof config === "function") {
        cb = config;
        config = configuration.default_options;
    } else if (!config) {
        config = configuration.default_options;
    } else {
        config = utils.merge(config, configuration.default_options, true);
    }

    var payload = 'grant_type=client_credentials';
    if (config.authorization_code) {
        payload = 'grant_type=authorization_code&response_type=token&redirect_uri=urn:ietf:wg:oauth:2.0:oob&code=' + config.authorization_code;
    } else if (config.refresh_token) {
        payload = 'grant_type=refresh_token&refresh_token=' + config.refresh_token;
    }

    var basicAuthString = 'Basic ' + new Buffer(config.client_id + ':' + config.client_secret).toString('base64');

    var http_options = {
        schema: config.schema || configuration.default_options.schema,
        host: utils.getDefaultApiEndpoint(config.mode) || config.host || configuration.default_options.host,
        port: config.port || configuration.default_options.port,
        headers: utils.merge({
            'Authorization': basicAuthString,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }, configuration.default_options.headers, true)
    };

    client.invoke('POST', '/v1/oauth2/token', payload, http_options, function (err, res) {
        var token = null;
        if (res) {
            if (!config.authorization_code && !config.refresh_token) {
                var seconds = new Date().getTime() / 1000;
                token_persist[config.client_id] = res;
                token_persist[config.client_id].created_at = seconds;
            }

            if (!config.authorization_code) {
                token = res.token_type + ' ' + res.access_token;
            }
            else {
                token = res.refresh_token;
            }
        }
        cb(err, token);
    });
};

/* Update authorization header with new token obtained by calling
generateToken */
/**
 * Updates http Authorization header to newly created access token
 * @param  {Object}   http_options   Configuration parameters such as authorization code or refresh token
 * @param  {Function}   error_callback
 * @param  {Function} callback
 */
function updateToken(http_options, error_callback, callback) {
    generateToken(http_options, function (error, token) {
        if (error) {
            error_callback(error, token);
        } else {
            http_options.headers.Authorization = token;
            callback();
        }
    });
}

/**
 * Makes a PayPal REST API call. Reuses valid access tokens to reduce
 * round trips, handles 401 error and token expiration.
 * @param  {String}   http_method           A HTTP Verb e.g. GET or POST
 * @param  {String}   path                  Url endpoint for API request
 * @param  {Data}   data                    Payload associated with API request
 * @param  {Object|Function}   http_options Configurations for settings and Auth
 * @param  {Function} cb                    Callback function
 */
var executeHttp = exports.executeHttp = function executeHttp(http_method, path, data, http_options, cb) {
    if (typeof http_options === "function") {
        cb = http_options;
        http_options = null;
    }
    if (!http_options) {
        http_options = configuration.default_options;
    } else {
        http_options = utils.merge(http_options, configuration.default_options, true);
    }

    //Get host endpoint using mode
    http_options.host = utils.getDefaultApiEndpoint(http_options.mode) || http_options.host;

    function retryInvoke() {
        client.invoke(http_method, path, data, http_options, cb);
    }

    // correlation-id is deprecated in favor of client-metadata-id
    if (http_options.client_metadata_id) {
        http_options.headers['Paypal-Client-Metadata-Id'] = http_options.client_metadata_id;
    }
    else if (http_options.correlation_id) {
        http_options.headers['Paypal-Client-Metadata-Id'] = http_options.correlation_id;
    }

    // If client_id exists with an unexpired token and a refresh token is not provided, reuse cached token
    if (http_options.client_id in token_persist && !utils.checkExpiredToken(token_persist[http_options.client_id]) && !http_options.refresh_token) {
        http_options.headers.Authorization = "Bearer " + token_persist[http_options.client_id].access_token;
        client.invoke(http_method, path, data, http_options, function (error, response) {
            // Don't reprompt already authenticated user for login by updating Authorization header
            // if token expires
            if (error && error.httpStatusCode === 401 && http_options.client_id && http_options.headers.Authorization) {
                http_options.headers.Authorization = null;
                updateToken(http_options, cb, retryInvoke);
            } else {
                cb(error, response);
            }
        });
    } else {
        updateToken(http_options, cb, retryInvoke);
    }
};


/***/ })

/******/ })));