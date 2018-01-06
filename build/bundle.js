/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              res = _context3.sent;


              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var POST_PROPERTY = exports.POST_PROPERTY = 'post_property';
var postProperty = exports.postProperty = function postProperty(params) {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return api.post('/post/property', params);

            case 2:
              res = _context4.sent;


              dispatch({
                type: POST_PROPERTY,
                payload: res,
                params: params
              });

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var FETCH_PROPERTIES = exports.FETCH_PROPERTIES = 'fetch_properties';
var fetchProperties = exports.fetchProperties = function fetchProperties(params) {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return api.get('/properties', params);

            case 2:
              res = _context5.sent;


              dispatch({
                type: FETCH_PROPERTIES,
                payload: res,
                params: params
              });

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(15);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(16);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _NotFoundPage = __webpack_require__(17);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(18);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

var _MyProfilePage = __webpack_require__(20);

var _MyProfilePage2 = _interopRequireDefault(_MyProfilePage);

var _SubmitProperty = __webpack_require__(21);

var _SubmitProperty2 = _interopRequireDefault(_SubmitProperty);

var _FindProperty = __webpack_require__(22);

var _FindProperty2 = _interopRequireDefault(_FindProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _FindProperty2.default, {
    path: '/find-bolig'
  }), _extends({}, _SubmitProperty2.default, {
    path: '/opret'
  }), _extends({}, _MyProfilePage2.default, {
    path: '/min-profil'
  }), _extends({}, _AdminsListPage2.default, {
    path: '/admins'
  }), _extends({}, _UsersListPage2.default, {
    path: '/users'
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(5);

var _expressHttpProxy = __webpack_require__(11);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(24);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(27);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:5000', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });
  // + 34 607043552
  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

var PORT = process.env.PORT || 3000;
app.listen(PORT);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'wrapper' },
                _react2.default.createElement(
                    'header',
                    { id: 'header-container', className: 'header-style-2' },
                    _react2.default.createElement(
                        'div',
                        { id: 'header' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'left-side' },
                                _react2.default.createElement(
                                    'div',
                                    { id: 'logo', className: 'margin-top-10' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/' },
                                        _react2.default.createElement('img', { src: 'images/logo.png', alt: '' })
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/', className: 'sticky-logo' },
                                        _react2.default.createElement('img', { src: 'images/logo2.png', alt: '' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'mmenu-trigger' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'hamburger hamburger--collapse', type: 'button' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'hamburger-box' },
                                            _react2.default.createElement('span', { className: 'hamburger-inner' })
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'right-side' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'header-widget' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement('i', { className: 'sl sl-icon-location' }),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'title' },
                                                    'Find/Lej/Udlej'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'data' },
                                                    'Helt gratis!'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement('i', { className: 'sl sl-icon-home' }),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'title' },
                                                    'K\xF8b/S\xE6lg'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'data' },
                                                    'Din bolig i dag'
                                                )
                                            )
                                        )
                                    ),
                                    this.props.auth != null ? _react2.default.createElement(
                                        'li',
                                        { className: 'with-btn' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/opret', className: 'button border' },
                                            'Opret nyt Boligopslag'
                                        )
                                    ) : _react2.default.createElement(
                                        'li',
                                        { className: 'with-btn' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/api/auth/facebook', className: 'button border' },
                                            'Log Ind via Facebook'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'nav',
                            { id: 'navigation', className: 'style-2' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container' },
                                _react2.default.createElement(
                                    'ul',
                                    { id: 'responsive' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/find-bolig', className: 'current' },
                                            'S\xF8g Bolig'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Udlej Bolig'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Find Lejer'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'Boligr\xE5d'
                                        )
                                    ),
                                    this.props.auth != null ? null : _react2.default.createElement(
                                        'li',
                                        { className: 'right-side-menu-item' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#', className: 'sign-in' },
                                            _react2.default.createElement('i', { className: 'fa fa-instagram' }),
                                            _react2.default.createElement('i', { className: 'fa fa-twitter-square' }),
                                            _react2.default.createElement('i', { className: 'fa fa-facebook-square' })
                                        )
                                    )
                                )
                            )
                        ),
                        this.props.auth == null ? null : _react2.default.createElement(
                            'div',
                            { className: 'container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'user-menu-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'user-menu' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'user-name' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement('img', { src: this.props.auth.image, alt: '' })
                                            ),
                                            this.props.auth.name
                                        ),
                                        _react2.default.createElement(
                                            'ul',
                                            null,
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { to: '/min-profil' },
                                                    _react2.default.createElement('i', { className: 'sl sl-icon-user' }),
                                                    ' Min Profil'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    _react2.default.createElement('i', { className: 'sl sl-icon-star' }),
                                                    ' Favoriter'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    _react2.default.createElement('i', { className: 'sl sl-icon-home' }),
                                                    ' Mine Boliger'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/api/logout' },
                                                    _react2.default.createElement('i', { className: 'sl sl-icon-power' }),
                                                    ' Log Af'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement('div', { className: 'clearfix' })
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

;

function mapStateToProps(state) {
    return { auth: state.auth };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    return _react2.default.createElement(
        'div',
        { id: 'footer', className: 'sticky-footer' },
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-5 col-sm-6' },
                    _react2.default.createElement('img', { className: 'footer-logo', src: 'images/logo.png', alt: '' }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Nem og gratis m\xE5de at Leje/Udleje/K\xF8be/S\xE6lge sin Bolig.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-4 col-sm-6 ' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Oversigt'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'footer-links' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Om Findeo'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Holdet bag'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Om Boligs\xF8gning'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Opret boligopslag'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Vilk\xE5r'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'footer-links' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'FAQ'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Blog'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Lejekontrakter'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Hvordan det fungerer?'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Kontakt'
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'clearfix' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-3  col-sm-12' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Kontakt Os'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'text-widget' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Yolovej 1337, Mars'
                        ),
                        ' ',
                        _react2.default.createElement('br', null),
                        'Telefon: ',
                        _react2.default.createElement(
                            'span',
                            null,
                            '(123) 123-456 '
                        ),
                        _react2.default.createElement('br', null),
                        'E-Mail:',
                        _react2.default.createElement(
                            'span',
                            null,
                            ' ',
                            _react2.default.createElement('a', { href: '#' }),
                            ' '
                        ),
                        _react2.default.createElement('br', null)
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'social-icons margin-top-20' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'facebook', href: '#' },
                                _react2.default.createElement('i', { className: 'icon-facebook' })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'twitter', href: '#' },
                                _react2.default.createElement('i', { className: 'icon-twitter' })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'gplus', href: '#' },
                                _react2.default.createElement('i', { className: 'icon-gplus' })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'vimeo', href: '#' },
                                _react2.default.createElement('i', { className: 'icon-vimeo' })
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement(
                        'div',
                        { className: 'copyrights' },
                        '\xA9 2017 Findeo. All Rights Reserved.'
                    )
                )
            )
        )
    );
};

exports.default = Footer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
        _inherits(HomePage, _Component);

        function HomePage() {
                _classCallCheck(this, HomePage);

                return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
        }

        _createClass(HomePage, [{
                key: 'componentDidMount',
                value: function componentDidMount() {}
        }, {
                key: 'head',
                value: function head() {
                        return _react2.default.createElement(
                                _reactHelmet.Helmet,
                                null,
                                _react2.default.createElement(
                                        'title',
                                        null,
                                        'Findeo | Lejligheder, v\xE6relser, huse og huse til salg/k\xF8b/leje/udleje'
                                ),
                                _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
                        );
                }
        }, {
                key: 'render',
                value: function render() {
                        return _react2.default.createElement(
                                'div',
                                null,
                                this.head(),
                                _react2.default.createElement(
                                        'div',
                                        { className: 'parallax', 'data-background': 'images/home-parallax-2.jpg', 'data-color': '#36383e', 'data-color-opacity': '0.5', 'data-img-width': '100%', 'data-img-height': '100%' },
                                        _react2.default.createElement(
                                                'div',
                                                { className: 'container' },
                                                _react2.default.createElement(
                                                        'div',
                                                        { className: 'row' },
                                                        _react2.default.createElement(
                                                                'div',
                                                                { className: 'col-md-12' },
                                                                _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'search-container' },
                                                                        _react2.default.createElement(
                                                                                'h2',
                                                                                null,
                                                                                'Find dit nye Hjem'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'div',
                                                                                { className: 'row with-forms' },
                                                                                _react2.default.createElement(
                                                                                        'div',
                                                                                        { className: 'col-md-3' },
                                                                                        _react2.default.createElement(
                                                                                                'select',
                                                                                                { 'data-placeholder': 'Any Type', className: 'chosen-select-no-single' },
                                                                                                _react2.default.createElement(
                                                                                                        'option',
                                                                                                        null,
                                                                                                        'Lejligheder'
                                                                                                ),
                                                                                                _react2.default.createElement(
                                                                                                        'option',
                                                                                                        null,
                                                                                                        'Huse'
                                                                                                ),
                                                                                                _react2.default.createElement(
                                                                                                        'option',
                                                                                                        null,
                                                                                                        'V\xE6relser'
                                                                                                ),
                                                                                                _react2.default.createElement(
                                                                                                        'option',
                                                                                                        null,
                                                                                                        'Garager'
                                                                                                ),
                                                                                                _react2.default.createElement(
                                                                                                        'option',
                                                                                                        null,
                                                                                                        'Grunde'
                                                                                                )
                                                                                        )
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                        'div',
                                                                                        { className: 'col-md-3' },
                                                                                        _react2.default.createElement(
                                                                                                'select',
                                                                                                { 'data-placeholder': 'Any Status', className: 'chosen-select-no-single' },
                                                                                                _react2.default.createElement(
                                                                                                        'option',
                                                                                                        null,
                                                                                                        'Til Leje'
                                                                                                ),
                                                                                                _react2.default.createElement(
                                                                                                        'option',
                                                                                                        null,
                                                                                                        'Til Salg'
                                                                                                )
                                                                                        )
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                        'div',
                                                                                        { className: 'col-md-6' },
                                                                                        _react2.default.createElement(
                                                                                                'div',
                                                                                                { className: 'main-search-input' },
                                                                                                _react2.default.createElement('input', { type: 'text', placeholder: 'Hvor vil du gerne bo?', value: '' }),
                                                                                                _react2.default.createElement(
                                                                                                        'button',
                                                                                                        { className: 'button' },
                                                                                                        _react2.default.createElement('i', { className: 'fa fa-search' })
                                                                                                )
                                                                                        )
                                                                                )
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'div',
                                                                                { className: 'adv-search-btn' },
                                                                                'Mangler du mere advanceret s\xF8gning? ',
                                                                                _react2.default.createElement(
                                                                                        'a',
                                                                                        { href: '#' },
                                                                                        'Tryk her'
                                                                                )
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'div',
                                                                                { className: 'announce' },
                                                                                'Vi hare mere end 1000 opslag til dig!'
                                                                        )
                                                                )
                                                        )
                                                )
                                        )
                                ),
                                _react2.default.createElement(
                                        'div',
                                        { className: 'container' },
                                        _react2.default.createElement(
                                                'div',
                                                { className: 'row' },
                                                _react2.default.createElement(
                                                        'div',
                                                        { style: { marginTop: '3%' }, className: 'col-md-12' },
                                                        _react2.default.createElement(
                                                                'h3',
                                                                { className: 'headline centered margin-bottom-35 margin-top-10' },
                                                                'Mest popul\xE6re byer ',
                                                                _react2.default.createElement(
                                                                        'span',
                                                                        null,
                                                                        'Boliger i de mest popul\xE6re omr\xE5der'
                                                                )
                                                        )
                                                ),
                                                _react2.default.createElement(
                                                        'div',
                                                        { className: 'col-md-4' },
                                                        _react2.default.createElement(
                                                                'a',
                                                                { href: 'listings-list-with-sidebar.html', className: 'img-box', 'data-background-image': 'images/popular-location-01.jpg' },
                                                                _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'listing-badges' },
                                                                        _react2.default.createElement(
                                                                                'span',
                                                                                { className: 'featured' },
                                                                                'Featured'
                                                                        )
                                                                ),
                                                                _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'img-box-content visible' },
                                                                        _react2.default.createElement(
                                                                                'h4',
                                                                                null,
                                                                                'New York '
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'span',
                                                                                null,
                                                                                '14 Properties'
                                                                        )
                                                                )
                                                        )
                                                ),
                                                _react2.default.createElement(
                                                        'div',
                                                        { className: 'col-md-8' },
                                                        _react2.default.createElement(
                                                                'a',
                                                                { href: 'listings-list-with-sidebar.html', className: 'img-box', 'data-background-image': 'images/popular-location-02.jpg' },
                                                                _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'img-box-content visible' },
                                                                        _react2.default.createElement(
                                                                                'h4',
                                                                                null,
                                                                                'Los Angeles'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'span',
                                                                                null,
                                                                                '24 Properties'
                                                                        )
                                                                )
                                                        )
                                                ),
                                                _react2.default.createElement(
                                                        'div',
                                                        { className: 'col-md-8' },
                                                        _react2.default.createElement(
                                                                'a',
                                                                { href: 'listings-list-with-sidebar.html', className: 'img-box', 'data-background-image': 'images/popular-location-03.jpg' },
                                                                _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'img-box-content visible' },
                                                                        _react2.default.createElement(
                                                                                'h4',
                                                                                null,
                                                                                'San Francisco '
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'span',
                                                                                null,
                                                                                '12 Properties'
                                                                        )
                                                                )
                                                        )
                                                ),
                                                _react2.default.createElement(
                                                        'div',
                                                        { className: 'col-md-4' },
                                                        _react2.default.createElement(
                                                                'a',
                                                                { href: 'listings-list-with-sidebar.html', className: 'img-box', 'data-background-image': 'images/popular-location-04.jpg' },
                                                                _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'img-box-content visible' },
                                                                        _react2.default.createElement(
                                                                                'h4',
                                                                                null,
                                                                                'Miami'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'span',
                                                                                null,
                                                                                '9 Properties'
                                                                        )
                                                                )
                                                        )
                                                )
                                        )
                                )
                        );
                }
        }]);

        return HomePage;
}(_react.Component);

function mapStateToProps(state) {
        return {};
}

exports.default = {
        component: (0, _reactRedux.connect)(mapStateToProps)(HomePage)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
  _inherits(UsersList, _Component);

  function UsersList() {
    _classCallCheck(this, UsersList);

    return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
  }

  _createClass(UsersList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'renderUsers',
    value: function renderUsers() {
      return this.props.users.map(function (user) {
        return _react2.default.createElement(
          'li',
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          this.props.users.length + ' Users Loaded'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        'Here\'s a big list of users:',
        _react2.default.createElement(
          'ul',
          null,
          this.renderUsers()
        )
      );
    }
  }]);

  return UsersList;
}(_react.Component);

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    'h1',
    null,
    'Ooops, route not found.'
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _requireAuth = __webpack_require__(19);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
  _inherits(AdminsListPage, _Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAdmins();
    }
  }, {
    key: 'renderAdmins',
    value: function renderAdmins() {
      return this.props.admins.map(function (admin) {
        return _react2.default.createElement(
          'li',
          { key: admin.id },
          admin.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Protected list of admins'
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.renderAdmins()
        )
      );
    }
  }]);

  return AdminsListPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var admins = _ref.admins;

  return { admins: admins };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchAdmins)());
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'render',
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          case null:
            return _react2.default.createElement(
              'div',
              null,
              'Loading...'
            );
          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyProfilePage = function (_Component) {
        _inherits(MyProfilePage, _Component);

        function MyProfilePage() {
                _classCallCheck(this, MyProfilePage);

                return _possibleConstructorReturn(this, (MyProfilePage.__proto__ || Object.getPrototypeOf(MyProfilePage)).apply(this, arguments));
        }

        _createClass(MyProfilePage, [{
                key: 'componentDidMount',
                value: function componentDidMount() {}
        }, {
                key: 'head',
                value: function head() {
                        return _react2.default.createElement(
                                _reactHelmet.Helmet,
                                null,
                                _react2.default.createElement(
                                        'title',
                                        null,
                                        'Findeo | ' + this.props.auth.name
                                ),
                                _react2.default.createElement('meta', { property: 'og:title', content: 'Findeo: ' + this.props.auth.name })
                        );
                }
        }, {
                key: 'render',
                value: function render() {
                        return _react2.default.createElement(
                                'div',
                                null,
                                this.head(),
                                _react2.default.createElement(
                                        'div',
                                        { id: 'titlebar' },
                                        _react2.default.createElement(
                                                'div',
                                                { className: 'container' },
                                                _react2.default.createElement(
                                                        'div',
                                                        { className: 'row' },
                                                        _react2.default.createElement(
                                                                'div',
                                                                { className: 'col-md-12' },
                                                                _react2.default.createElement(
                                                                        'h2',
                                                                        null,
                                                                        'Min Profil'
                                                                ),
                                                                _react2.default.createElement(
                                                                        'nav',
                                                                        { id: 'breadcrumbs' },
                                                                        _react2.default.createElement(
                                                                                'ul',
                                                                                null,
                                                                                _react2.default.createElement(
                                                                                        'li',
                                                                                        null,
                                                                                        _react2.default.createElement(
                                                                                                'a',
                                                                                                { href: '/' },
                                                                                                'Hjem'
                                                                                        )
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                        'li',
                                                                                        null,
                                                                                        'Min Profil'
                                                                                )
                                                                        )
                                                                )
                                                        )
                                                )
                                        )
                                ),
                                _react2.default.createElement(
                                        'div',
                                        { className: 'container' },
                                        _react2.default.createElement(
                                                'div',
                                                { className: 'row' },
                                                _react2.default.createElement(
                                                        'div',
                                                        { className: 'col-md-4' },
                                                        _react2.default.createElement(
                                                                'div',
                                                                { className: 'sidebar left' },
                                                                _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'my-account-nav-container' },
                                                                        _react2.default.createElement(
                                                                                'ul',
                                                                                { className: 'my-account-nav' },
                                                                                _react2.default.createElement(
                                                                                        'li',
                                                                                        { className: 'sub-nav-title' },
                                                                                        'Administre konto'
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                        'li',
                                                                                        null,
                                                                                        _react2.default.createElement(
                                                                                                'a',
                                                                                                { href: '#', className: 'current' },
                                                                                                _react2.default.createElement('i', { className: 'sl sl-icon-user' }),
                                                                                                ' Min Profil'
                                                                                        )
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                        'li',
                                                                                        null,
                                                                                        _react2.default.createElement(
                                                                                                'a',
                                                                                                { href: '#' },
                                                                                                _react2.default.createElement('i', { className: 'sl sl-icon-star' }),
                                                                                                ' Favorit Liste'
                                                                                        )
                                                                                )
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'ul',
                                                                                { className: 'my-account-nav' },
                                                                                _react2.default.createElement(
                                                                                        'li',
                                                                                        { className: 'sub-nav-title' },
                                                                                        'Administre Opslag'
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                        'li',
                                                                                        null,
                                                                                        _react2.default.createElement(
                                                                                                'a',
                                                                                                { href: '#' },
                                                                                                _react2.default.createElement('i', { className: 'sl sl-icon-docs' }),
                                                                                                ' Mine Opslag'
                                                                                        )
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                        'li',
                                                                                        null,
                                                                                        _react2.default.createElement(
                                                                                                'a',
                                                                                                { href: '#' },
                                                                                                _react2.default.createElement('i', { className: 'sl sl-icon-home' }),
                                                                                                ' Opret nyt boligopslag'
                                                                                        )
                                                                                )
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'ul',
                                                                                { className: 'my-account-nav' },
                                                                                _react2.default.createElement(
                                                                                        'li',
                                                                                        null,
                                                                                        _react2.default.createElement(
                                                                                                'a',
                                                                                                { href: '/api/logout' },
                                                                                                _react2.default.createElement('i', { className: 'sl sl-icon-power' }),
                                                                                                ' Log Af'
                                                                                        )
                                                                                )
                                                                        )
                                                                )
                                                        )
                                                ),
                                                _react2.default.createElement(
                                                        'div',
                                                        { className: 'col-md-8' },
                                                        _react2.default.createElement(
                                                                'div',
                                                                { className: 'row' },
                                                                _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'col-md-8 my-profile' },
                                                                        _react2.default.createElement(
                                                                                'h4',
                                                                                { className: 'margin-top-0 margin-bottom-30' },
                                                                                'Min Bruger'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'label',
                                                                                null,
                                                                                'Navn:'
                                                                        ),
                                                                        _react2.default.createElement('input', { defaultValue: this.props.auth.name, type: 'text' }),
                                                                        _react2.default.createElement(
                                                                                'label',
                                                                                null,
                                                                                'Besk\xE6ftigelse: '
                                                                        ),
                                                                        _react2.default.createElement('input', { defaultValue: 'Studerende', type: 'text' }),
                                                                        _react2.default.createElement(
                                                                                'label',
                                                                                null,
                                                                                'Telefon/Mobil: '
                                                                        ),
                                                                        _react2.default.createElement('input', { defaultValue: '70809010', type: 'text' }),
                                                                        _react2.default.createElement(
                                                                                'label',
                                                                                null,
                                                                                'Email:'
                                                                        ),
                                                                        _react2.default.createElement('input', { defaultValue: 'alexander@example.com', type: 'text' }),
                                                                        _react2.default.createElement(
                                                                                'h4',
                                                                                { className: 'margin-top-50 margin-bottom-25' },
                                                                                'Om mig: '
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'textarea',
                                                                                { name: 'about', id: 'about', cols: '30', rows: '10' },
                                                                                'Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'h4',
                                                                                { className: 'margin-top-50 margin-bottom-0' },
                                                                                'Sociale Medier'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                                'label',
                                                                                null,
                                                                                _react2.default.createElement('i', { className: 'fa fa-twitter' }),
                                                                                ' Twitter'
                                                                        ),
                                                                        _react2.default.createElement('input', { defaultValue: 'https://www.twitter.com/', type: 'text' }),
                                                                        _react2.default.createElement(
                                                                                'label',
                                                                                null,
                                                                                _react2.default.createElement('i', { className: 'fa fa-facebook-square' }),
                                                                                ' Facebook'
                                                                        ),
                                                                        _react2.default.createElement('input', { defaultValue: 'https://www.facebook.com/', type: 'text' }),
                                                                        _react2.default.createElement(
                                                                                'label',
                                                                                null,
                                                                                _react2.default.createElement('i', { className: 'fa fa-google-plus' }),
                                                                                ' Google+'
                                                                        ),
                                                                        _react2.default.createElement('input', { defaultValue: 'https://www.google.com/', type: 'text' }),
                                                                        _react2.default.createElement(
                                                                                'label',
                                                                                null,
                                                                                _react2.default.createElement('i', { className: 'fa fa-linkedin' }),
                                                                                ' Linkedin'
                                                                        ),
                                                                        _react2.default.createElement('input', { defaultValue: 'https://www.linkedin.com/', type: 'text' }),
                                                                        _react2.default.createElement(
                                                                                'button',
                                                                                { className: 'button margin-top-20 margin-bottom-20' },
                                                                                'Gem \xC6ndringer'
                                                                        )
                                                                ),
                                                                _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'col-md-4' },
                                                                        _react2.default.createElement(
                                                                                'div',
                                                                                { className: 'edit-profile-photo' },
                                                                                _react2.default.createElement('img', { src: this.props.auth.image, alt: '' })
                                                                        )
                                                                )
                                                        )
                                                )
                                        )
                                )
                        );
                }
        }]);

        return MyProfilePage;
}(_react.Component);

function mapStateToProps(state) {
        return { auth: state.auth };
}

exports.default = {
        component: (0, _reactRedux.connect)(mapStateToProps)(MyProfilePage)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitProperty = function (_Component) {
  _inherits(SubmitProperty, _Component);

  function SubmitProperty() {
    _classCallCheck(this, SubmitProperty);

    var _this = _possibleConstructorReturn(this, (SubmitProperty.__proto__ || Object.getPrototypeOf(SubmitProperty)).call(this));

    _this.state = {
      property: {
        title: '',
        type: '',
        status: '',
        floor: '',
        size: '',
        rooms: '',
        montlyRent: '',
        aconto: '',
        deposit: '',
        prePaidRental: '',
        totalPrice: '',
        rentalPeriod: '',
        moveDate: '',
        address: '',
        city: '',
        zipcode: '',
        description: '',
        bedrooms: '',
        bathrooms: '',
        year: '',
        name: '',
        email: '',
        phone: '',
        shareable: false,
        furnished: false,
        animals: false
      }
    };
    return _this;
  }

  _createClass(SubmitProperty, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Findeo | Opret boligopslag'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Findeo | Opret boligopslag' })
      );
    }
  }, {
    key: 'submitProperty',
    value: function submitProperty(event) {
      event.preventDefault();
      this.props.postProperty({ title: this.state.property.title,
        type: this.state.property.type,
        status: this.state.property.status,
        floor: this.state.property.floor,
        size: this.state.property.size,
        rooms: this.state.property.rooms,
        montlyRent: this.state.property.montlyRent,
        aconto: this.state.property.aconto,
        deposit: this.state.property.deposit,
        prePaidRental: this.state.property.prePaidRental,
        totalPrice: this.state.property.totalPrice,
        rentalPeriod: this.state.property.rentalPeriod,
        moveDate: this.state.property.moveDate,
        address: this.state.property.totalPrice,
        city: this.state.property.city,
        zipcode: this.state.property.zipcode,
        description: this.state.property.description,
        furnished: this.state.property.furnished,
        shareable: this.state.property.shareable,
        animals: this.state.property.animals,
        propertyBy: this.props.auth._id });
      console.log(JSON.stringify(this.state.property));
      console.log(JSON.stringify(this.props.auth._id));
    }
  }, {
    key: 'updateCheckbox',
    value: function updateCheckbox(event) {
      console.log(this.state.property.furnished);
    }
  }, {
    key: 'updateProperty',
    value: function updateProperty(event) {
      var updated = Object.assign({}, this.state.property);
      event.preventDefault();
      updated[event.target.id] = event.target.value;
      this.setState({
        property: updated
      });
      console.log('updateProperty: ' + event.target.id + ' == ' + event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      return _react2.default.createElement(
        'div',
        { style: { marginBottom: '50px' } },
        this.head(),
        _react2.default.createElement(
          'div',
          { id: 'titlebar', className: 'submit-page' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-12' },
                _react2.default.createElement(
                  'h2',
                  null,
                  ' Tilf\xF8j Bolig'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-12' },
              _react2.default.createElement(
                'div',
                { className: 'submit-page' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Grundl\xE6ggende oplysninger'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'submit-section' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form' },
                    _react2.default.createElement(
                      'h5',
                      null,
                      'Bolig overskrift ',
                      _react2.default.createElement('i', { className: 'tip', 'data-tip-content': 'Type title that will also contains an unique feature of your property (e.g. renovated, air contidioned)' })
                    ),
                    _react2.default.createElement('input', { onChange: this.updateProperty.bind(this), id: 'title', className: 'search-field', type: 'text', defaultValue: '' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'row with-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-6' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Bolig Status'
                      ),
                      _react2.default.createElement(
                        'select',
                        { onChange: this.updateProperty.bind(this), id: 'status' },
                        _react2.default.createElement(
                          'option',
                          { label: 'blank' },
                          'V\xE6lg'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'rent' },
                          'Til Leje'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'sale' },
                          'Til Salg'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-6' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Bolig Type'
                      ),
                      _react2.default.createElement(
                        'select',
                        { onChange: this.updateProperty.bind(this), id: 'type' },
                        _react2.default.createElement(
                          'option',
                          { label: 'blank' },
                          'V\xE6lg'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'apartment' },
                          'Lejlighed'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'house' },
                          'Hus'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'room' },
                          'V\xE6relse'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'garage' },
                          'Garage'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'lot' },
                          'Grund'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'row with-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-4' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Etage'
                      ),
                      _react2.default.createElement(
                        'select',
                        { onChange: this.updateProperty.bind(this), id: 'floor' },
                        _react2.default.createElement(
                          'option',
                          { label: 'blank' },
                          'Hvilken Etage'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'ground' },
                          'Stuen'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '1'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '3'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '4'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '5'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '6'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '7'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '8'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-4' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Areal'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'select-input disabled-first-option' },
                        _react2.default.createElement('input', { onChange: this.updateProperty.bind(this), id: 'size', type: 'text', 'data-unit': 'm2' })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-4' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'V\xE6relser'
                      ),
                      _react2.default.createElement(
                        'select',
                        { onChange: this.updateProperty.bind(this), id: 'rooms' },
                        _react2.default.createElement(
                          'option',
                          { label: 'blank' },
                          'Antal V\xE6lelser'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '1'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '3'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '4'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '5'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '6' },
                          'Mere end 5'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'h3',
                    null,
                    '\xD8konomi'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'row with-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'submit-section' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-4' },
                        _react2.default.createElement(
                          'h5',
                          null,
                          'M\xE5nedlig husleje'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'select-input disabled-first-option' },
                          _react2.default.createElement('input', { type: 'text', onChange: this.updateProperty.bind(this), id: 'montlyRent', 'data-unit': 'DKK' })
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-4' },
                        _react2.default.createElement(
                          'h5',
                          null,
                          'Aconto ',
                          _react2.default.createElement('i', { className: 'tip', 'data-tip-content': 'Type overall or monthly price if property is for rent' })
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'select-input disabled-first-option' },
                          _react2.default.createElement('input', { type: 'text', onChange: this.updateProperty.bind(this), id: 'aconto', 'data-unit': 'DKK' })
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-4' },
                        _react2.default.createElement(
                          'h5',
                          null,
                          'Depositum ',
                          _react2.default.createElement('i', { className: 'tip', 'data-tip-content': 'Type overall or monthly price if property is for rent' })
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'select-input disabled-first-option' },
                          _react2.default.createElement('input', { onChange: this.updateProperty.bind(this), id: 'deposit', type: 'text', 'data-unit': 'DKK' })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-6' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Forudbetalt husleje ',
                        _react2.default.createElement('i', { className: 'tip', 'data-tip-content': 'Type overall or monthly price if property is for rent' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'select-input disabled-first-option' },
                        _react2.default.createElement('input', { type: 'text', onChange: this.updateProperty.bind(this), id: 'prePaidRental', 'data-unit': 'DKK' })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-6' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Samlet pris for indflytning ',
                        _react2.default.createElement('i', { className: 'tip', 'data-tip-content': 'Type overall or monthly price if property is for rent' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'select-input disabled-first-option' },
                        _react2.default.createElement('input', { type: 'text', onChange: this.updateProperty.bind(this), id: 'totalPrice', 'data-unit': 'DKK' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'h3',
                    null,
                    'Indflytning'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'row with-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'submit-section' },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                          'h5',
                          null,
                          'Lejeperiode'
                        ),
                        _react2.default.createElement(
                          'select',
                          { onChange: this.updateProperty.bind(this), id: 'rentalPeriod' },
                          _react2.default.createElement(
                            'option',
                            { label: 'blank' },
                            'V\xE6lg lejeperiode'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: 'unlimited' },
                            'Ubegr\xE6nset'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: 'month' },
                            '2-12 m\xE5neder'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: 'year' },
                            '1-2 \xC5r'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: 'years' },
                            '2+ \xC5r'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                          'h5',
                          null,
                          'Indflytningsdato ',
                          _react2.default.createElement('i', { className: 'tip', 'data-tip-content': 'Type overall or monthly price if property is for rent' })
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'select-input disabled-first-option' },
                          _react2.default.createElement('input', { type: 'text', onChange: this.updateProperty.bind(this), id: 'moveDate', placeholder: '01/01/20XX', 'data-unit': 'Dato' })
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Billeder'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'submit-section' },
                  _react2.default.createElement('form', { action: '#', className: 'dropzone' })
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Lokation'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'submit-section' },
                  _react2.default.createElement(
                    'div',
                    { className: 'row with-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-6' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Adresse'
                      ),
                      _react2.default.createElement('input', { onChange: this.updateProperty.bind(this), id: 'address', type: 'text' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-6' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'By'
                      ),
                      _react2.default.createElement('input', { onChange: this.updateProperty.bind(this), id: 'city', type: 'text' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-12' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Post Nr'
                      ),
                      _react2.default.createElement('input', { type: 'text', onChange: this.updateProperty.bind(this), id: 'zipcode' })
                    )
                  )
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Detaljeret beskrivelse'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'submit-section' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form' },
                    _react2.default.createElement(
                      'h5',
                      null,
                      'Beskrivelse'
                    ),
                    _react2.default.createElement('textarea', (_React$createElement = { onChange: this.updateProperty.bind(this), id: 'moveDate', className: 'WYSIWYG', name: 'summary', cols: '40', rows: '3' }, _defineProperty(_React$createElement, 'id', 'description'), _defineProperty(_React$createElement, 'spellCheck', 'true'), _React$createElement))
                  ),
                  _react2.default.createElement(
                    'h5',
                    { className: 'margin-top-30' },
                    'Andet ',
                    _react2.default.createElement(
                      'span',
                      null,
                      '(valgfri)'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'checkboxes in-row margin-bottom-20' },
                    _react2.default.createElement('input', { defaultChecked: this.state.property.furnished, id: 'check-2', type: 'checkbox' }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'check-2' },
                      'M\xF8bleret'
                    ),
                    _react2.default.createElement('input', { onChange: this.updateProperty.bind(this), id: 'shareable', type: 'checkbox', name: 'check' }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'check-3' },
                      'Delevenlig'
                    ),
                    _react2.default.createElement('input', { onChange: this.updateProperty.bind(this), id: 'animals', type: 'checkbox', name: 'check' }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'check-4' },
                      'Husdyr tilladt  '
                    )
                  )
                ),
                _react2.default.createElement('div', { className: 'divider' }),
                _react2.default.createElement(
                  'a',
                  { href: '#', onClick: this.submitProperty.bind(this), className: 'button preview margin-top-5' },
                  'Opret ',
                  _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SubmitProperty;
}(_react.Component);

function mapStateToProps(state) {
  return { auth: state.auth };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { postProperty: _actions.postProperty })(SubmitProperty)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _reactBootstrapTypeahead = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = [{ name: 'København', value: "copenhagen" }, { name: 'Aalborg', value: "aalborg" }, { name: 'Århus', value: "aarhus" }, { name: 'Odense', value: "odense" }];

var FindProperty = function (_Component) {
  _inherits(FindProperty, _Component);

  function FindProperty() {
    _classCallCheck(this, FindProperty);

    var _this = _possibleConstructorReturn(this, (FindProperty.__proto__ || Object.getPrototypeOf(FindProperty)).call(this));

    _this.state = {
      index: 0,
      page: 1,
      selectedCity: null,
      rerender: false,
      filters: {
        city: null,
        status: null,
        type: null
      }
    };
    return _this;
  }

  _createClass(FindProperty, [{
    key: 'increase',
    value: function increase(event) {
      event.preventDefault();
      this.setState({
        page: this.state.page += 1,
        rerender: true
      });
    }
  }, {
    key: 'decrease',
    value: function decrease(event) {
      event.preventDefault();
      if (this.state.page > 1) {
        this.setState({
          page: this.state.page -= 1,
          rerender: true
        });
      }
    }
  }, {
    key: 'fetchWithFilters',
    value: function fetchWithFilters() {
      var params = {};
      params.page = this.state.page;
      if (this.state.selectedCity != null) {
        var obj = this.state.selectedCity.reduce(function (acc, cur, i) {
          acc[i] = cur;
          return acc;
        }, {});
        var setCity = obj[0].value.toLowerCase();

        params.city = setCity;
      }
      if (this.state.filters.status != null) {
        params.status = this.state.filters.status;
      }
      if (this.state.filters.type != null) {
        params.status = this.state.filters.type;
      }
      this.props.fetchProperties({ params: params });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchWithFilters();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.rerender == true) {

        this.fetchWithFilters();
        this.setState({
          rerender: false
        });
      }
    }
  }, {
    key: 'cityValue',
    value: function cityValue(event) {
      event.preventDefault();
      var obj = this.state.selectedCity.reduce(function (acc, cur, i) {
        acc[i] = cur;
        return acc;
      }, {});
      var setCity = obj[0].name.toLowerCase();
      this.setState({
        selectedCity: setCity,
        rerender: true
      });
    }
  }, {
    key: 'updateFilters',
    value: function updateFilters(event) {
      var updated = Object.assign({}, this.state.filters);
      event.preventDefault();
      updated[event.target.id] = event.target.value;
      this.setState({
        filters: updated,
        rerender: true
      });
      console.log('updateFilters: ' + event.target.id + ' == ' + event.target.value);
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Findeo | S\xF8g Bolig'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'S\xF8g Bolig' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'div',
          { style: { marginTop: '3%' }, className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row sticky-wrapper' },
            _react2.default.createElement(
              'div',
              { style: { float: 'right' }, className: 'col-md-9' },
              _react2.default.createElement(
                'div',
                { className: 'row margin-bottom-15' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(
                    'div',
                    { className: 'sort-by' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Sorter:'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'sort-by-select' },
                      _react2.default.createElement(
                        'select',
                        { 'data-placeholder': 'Normal', onChange: this.updateFilters.bind(this), id: 'sorter', className: 'chosen-select-no-single' },
                        _react2.default.createElement(
                          'option',
                          null,
                          'Normal'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'desc' },
                          'Pris Lav til H\xF8j'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          'Pris H\xF8j til Lav'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          'Nyeste Opslag'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '\xC6ldeste Opslag'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6' },
                  _react2.default.createElement(
                    'div',
                    { className: 'layout-switcher' },
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'grid' },
                      _react2.default.createElement('i', { className: 'fa fa-th-large' })
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'list' },
                      _react2.default.createElement('i', { className: 'fa fa-th-list' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'listings-container grid-layout' },
                _react2.default.createElement('div', { className: 'clearfix' }),
                this.props.property == null ? null : this.props.property.map(function (prop, i) {
                  return _react2.default.createElement(
                    'div',
                    { key: i, className: 'listing-item' },
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'listing-img-container' },
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-badges' },
                        _react2.default.createElement(
                          'span',
                          null,
                          'Til Leje'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-img-content' },
                        _react2.default.createElement(
                          'span',
                          { className: 'listing-price' },
                          '4000,- kr / M\xE5ned',
                          _react2.default.createElement(
                            'i',
                            null,
                            '520,- kr / m2'
                          )
                        ),
                        _react2.default.createElement('span', { className: 'like-icon with-tip', 'data-tip-content': 'Tilf\xF8j til Favoriter' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-carousel' },
                        _react2.default.createElement(
                          'div',
                          null,
                          _react2.default.createElement('img', { src: 'https://images.boligportal.dk/propertyImage/5211396/2/768x1024.jpg?cacheKey=65c01266bc9282c3ea6d6b6d57a3528c&allowMap=false', alt: '' })
                        ),
                        _react2.default.createElement(
                          'div',
                          null,
                          _react2.default.createElement('img', { src: 'https://images.boligportal.dk/propertyImage/5211396/3/768x1024.jpg?cacheKey=f812fc91b8e71255944e4cd31d5f26cd&allowMap=false', alt: '' })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-content' },
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-title' },
                        _react2.default.createElement(
                          'h4',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: '#' },
                            prop.title
                          )
                        ),
                        _react2.default.createElement(
                          'a',
                          { href: '../../../www.google.com/maps/search/221B%2bBaker%2bStreet%2c%2bLondon%2c%2bUnited%2bKingdom/data%3d%214m2%212m1%214b1acc9.html?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom', className: 'listing-address popup-gmaps' },
                          _react2.default.createElement('i', { className: 'fa fa-map-marker' }),
                          '9364 School St. Lynchburg, NY'
                        ),
                        _react2.default.createElement(
                          'a',
                          { href: '#', className: 'details button border' },
                          'Detaljer'
                        )
                      ),
                      _react2.default.createElement(
                        'ul',
                        { className: 'listing-details' },
                        _react2.default.createElement(
                          'li',
                          null,
                          '530 sq ft'
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          '1 Bedroom'
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          '3 Rooms'
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          '1 Bathroom'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-footer' },
                        _react2.default.createElement(
                          'a',
                          { href: '#' },
                          _react2.default.createElement('i', { className: 'fa fa-user' }),
                          ' David Strozier'
                        ),
                        _react2.default.createElement(
                          'span',
                          null,
                          _react2.default.createElement('i', { className: 'fa fa-calendar-o' }),
                          ' 1 day ago'
                        )
                      )
                    ),
                    _react2.default.createElement('div', { className: 'clearfix' })
                  );
                })
              ),
              _react2.default.createElement('div', { className: 'clearfix' }),
              _react2.default.createElement(
                'div',
                { className: 'pagination-container margin-top-20' },
                _react2.default.createElement(
                  'nav',
                  { className: 'pagination' },
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: '#', className: 'current-page' },
                        '1'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: '#' },
                        '2'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: '#' },
                        '3'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'blank' },
                      '...'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: '#' },
                        '22'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'nav',
                  { className: 'pagination-next-prev' },
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.decrease.bind(this), className: 'prev' },
                        'Forrige'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.increase.bind(this), className: 'next' },
                        'N\xE6ste'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { paddingLeft: '0' }, className: 'col-md-3' },
              _react2.default.createElement(
                'div',
                { className: 'sidebar sticky right' },
                _react2.default.createElement(
                  'div',
                  { className: 'widget margin-bottom-40' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'margin-top-0 margin-bottom-35' },
                    'Find dit nye Hjem'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'row with-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-12' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Omr\xE5de '
                      ),
                      _react2.default.createElement(_reactBootstrapTypeahead.Typeahead, {
                        labelKey: 'name',
                        options: options,
                        onChange: function onChange(selectedCity) {
                          _this2.setState({ selectedCity: selectedCity,
                            rerender: true
                          });
                        },
                        placeholder: 'Hvor vil du gerne bo?'
                      })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'row with-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-12' },
                      _react2.default.createElement(
                        'select',
                        { 'data-placeholder': 'Any Status', onChange: this.updateFilters.bind(this), id: 'status' },
                        _react2.default.createElement(
                          'option',
                          { disabled: true },
                          'Bolig Status'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'rent' },
                          'Til Leje'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'sale' },
                          'Til Salg'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'row with-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-12' },
                      _react2.default.createElement(
                        'select',
                        { 'data-placeholder': 'Any Type', onChange: this.updateFilters.bind(this), id: 'type' },
                        _react2.default.createElement(
                          'option',
                          null,
                          'Bolig Type'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'apartment' },
                          'Lejlighed'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'house' },
                          'Hus'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'room' },
                          'V\xE6relse'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'garage' },
                          'Garage'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'lot' },
                          'Grund'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'range-slider' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Areal St\xF8rrelse'
                    ),
                    _react2.default.createElement('div', { id: 'area-range', 'data-min': '0', 'data-max': '500', 'data-unit': 'm2 ' }),
                    _react2.default.createElement('div', { className: 'clearfix' })
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'range-slider' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'M\xE5nedelig Leje'
                    ),
                    _react2.default.createElement('div', { id: 'price-range', 'data-min': '0', 'data-max': '20000', 'data-unit': 'DKK ' }),
                    _react2.default.createElement('div', { className: 'clearfix' })
                  ),
                  _react2.default.createElement(
                    'button',
                    { onClick: this.cityValue.bind(this), className: 'button fullwidth margin-top-30' },
                    'S\xF8g'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FindProperty;
}(_react.Component);

function mapStateToProps(state) {
  return { auth: state.auth, property: state.property };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchProperties)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchProperties: _actions.fetchProperties })(FindProperty)
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-typeahead");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(25);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(26);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(3);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <meta charset="utf-8">\n        <link rel="shortcut icon" href="images/favicon.png">\n        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">\n        <link rel="stylesheet" href="css/style.css">\n        <link rel="stylesheet" href="css/colors/main.css" id="colors">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n\n        <div id="backtotop"><a href="#"></a></div>\n        <script src="bundle.js"></script>\n        <script type="text/javascript" src="scripts/jquery-2.2.0.min.js"></script>\n        <script type="text/javascript" src="scripts/chosen.min.js"></script>\n        <script type="text/javascript" src="scripts/magnific-popup.min.js"></script>\n        <script type="text/javascript" src="scripts/owl.carousel.min.js"></script>\n        <script type="text/javascript" src="scripts/rangeSlider.js"></script>\n        <script type="text/javascript" src="scripts/sticky-kit.min.js"></script>\n        <script type="text/javascript" src="scripts/slick.min.js"></script>\n        <script type="text/javascript" src="scripts/mmenu.min.js"></script>\n        <script type="text/javascript" src="scripts/tooltips.min.js"></script>\n        <script type="text/javascript" src="scripts/masonry.min.js"></script>\n        <script type="text/javascript" src="scripts/custom.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(28);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(29);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://localhost:5000',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _usersReducer = __webpack_require__(31);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(32);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _propertyReducer = __webpack_require__(33);

var _propertyReducer2 = _interopRequireDefault(_propertyReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  auth: _authReducer2.default,
  property: _propertyReducer2.default
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _actions = __webpack_require__(1);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_PROPERTIES:
      return action.payload.data.result;
    default:
      return state;
  }
};

/***/ })
/******/ ]);