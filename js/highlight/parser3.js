(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["highlight/parser3"],{

/***/ "./node_modules/highlight.js/lib/languages/parser3.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/parser3.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var CURLY_SUBCOMMENT = hljs.COMMENT(
    '{',
    '}',
    {
      contains: ['self']
    }
  );
  return {
    subLanguage: 'xml', relevance: 0,
    contains: [
      hljs.COMMENT('^#', '$'),
      hljs.COMMENT(
        '\\^rem{',
        '}',
        {
          relevance: 10,
          contains: [
            CURLY_SUBCOMMENT
          ]
        }
      ),
      {
        className: 'meta',
        begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
        relevance: 10
      },
      {
        className: 'title',
        begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
      },
      {
        className: 'variable',
        begin: '\\$\\{?[\\w\\-\\.\\:]+\\}?'
      },
      {
        className: 'keyword',
        begin: '\\^[\\w\\-\\.\\:]+'
      },
      {
        className: 'number',
        begin: '\\^#[0-9a-fA-F]+'
      },
      hljs.C_NUMBER_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=parser3.js.map?v=925ab0810773747adb86