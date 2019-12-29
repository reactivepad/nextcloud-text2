(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["highlight/leaf"],{

/***/ "./node_modules/highlight.js/lib/languages/leaf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/leaf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  return {
    contains: [
      {
        className: 'function',
        begin: '#+' + '[A-Za-z_0-9]*' + '\\(',
        end:' {',
        returnBegin: true,
        excludeEnd: true,
        contains : [
          {
            className: 'keyword',
            begin: '#+'
          },
          {
            className: 'title',
            begin: '[A-Za-z_][A-Za-z_0-9]*'
          },
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            endsParent: true,
            contains: [
              {
                className: 'string',
                begin: '"',
                end: '"'
              },
              {
                className: 'variable',
                begin: '[A-Za-z_][A-Za-z_0-9]*'
              }
            ]
          }
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=leaf.js.map?v=def73572698c9987ff7b