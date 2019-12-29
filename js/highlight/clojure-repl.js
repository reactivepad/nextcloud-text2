(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["highlight/clojure-repl"],{

/***/ "./node_modules/highlight.js/lib/languages/clojure-repl.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/clojure-repl.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    contains: [
      {
        className: 'meta',
        begin: /^([\w.-]+|\s*#_)?=>/,
        starts: {
          end: /$/,
          subLanguage: 'clojure'
        }
      }
    ]
  }
};

/***/ })

}]);
//# sourceMappingURL=clojure-repl.js.map?v=84b7313dfc1274b1c8b2