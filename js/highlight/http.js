(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["highlight/http"],{

/***/ "./node_modules/highlight.js/lib/languages/http.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/http.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var VERSION = 'HTTP/[0-9\\.]+';
  return {
    aliases: ['https'],
    illegal: '\\S',
    contains: [
      {
        begin: '^' + VERSION, end: '$',
        contains: [{className: 'number', begin: '\\b\\d{3}\\b'}]
      },
      {
        begin: '^[A-Z]+ (.*?) ' + VERSION + '$', returnBegin: true, end: '$',
        contains: [
          {
            className: 'string',
            begin: ' ', end: ' ',
            excludeBegin: true, excludeEnd: true
          },
          {
            begin: VERSION
          },
          {
            className: 'keyword',
            begin: '[A-Z]+'
          }
        ]
      },
      {
        className: 'attribute',
        begin: '^\\w', end: ': ', excludeEnd: true,
        illegal: '\\n|\\s|=',
        starts: {end: '$', relevance: 0}
      },
      {
        begin: '\\n\\n',
        starts: {subLanguage: [], endsWithParent: true}
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=http.js.map?v=137e603316bb4e4d56b4