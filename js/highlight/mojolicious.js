(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["highlight/mojolicious"],{

/***/ "./node_modules/highlight.js/lib/languages/mojolicious.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mojolicious.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    subLanguage: 'xml',
    contains: [
      {
        className: 'meta',
        begin: '^__(END|DATA)__$'
      },
    // mojolicious line
      {
        begin: "^\\s*%{1,2}={0,2}", end: '$',
        subLanguage: 'perl'
      },
    // mojolicious block
      {
        begin: "<%{1,2}={0,2}",
        end: "={0,1}%>",
        subLanguage: 'perl',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=mojolicious.js.map?v=2a14c6939ccdd73ef606