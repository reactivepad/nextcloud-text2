(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["editor-collab"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SessionList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SessionList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextcloud-vue/dist/Components/Avatar */ "./node_modules/nextcloud-vue/dist/Components/Avatar.js");
/* harmony import */ var nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextcloud-vue/dist/Components/PopoverMenu */ "./node_modules/nextcloud-vue/dist/Components/PopoverMenu.js");
/* harmony import */ var nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextcloud-vue/dist/Directives/Tooltip */ "./node_modules/nextcloud-vue/dist/Directives/Tooltip.js");
/* harmony import */ var nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var COLLABORATOR_IDLE_TIME = 10;
var COLLABORATOR_DISCONNECT_TIME = 30;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SessionList',
  components: {
    Avatar: nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0___default.a,
    PopoverMenu: nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  directives: {
    tooltip: nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    sessions: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      popoverVisible: '',
      myName: ''
    };
  },
  computed: {
    editorsTooltip: function editorsTooltip() {
      if (this.sessionsPopover.length > 0) {
        var first = this.activeSessions.slice(0, 3).map(function (session) {
          return session.guestName ? session.guestName : session.displayName;
        }).join(', ');
        var others = this.activeSessions.slice(3).length;
        return first + ' ' + n('text', 'and %n other editor', 'and %n other editors', others);
      }

      return this.activeSessions.slice(0, 3).map(function (session) {
        return session.guestName ? session.guestName : session.displayName;
      }).join(', ');
    },
    avatarUrl: function avatarUrl() {
      return function (session) {
        var user = !session.guestName ? session.userId : session.guestName;
        var size = 32;
        var guest = !!session.guestName;
        var avatarUrl = OC.generateUrl(guest ? '/avatar/guest/{user}/{size}' : '/avatar/{user}/{size}', {
          user: user,
          size: size
        });
        return window.location.protocol + '//' + window.location.host + avatarUrl;
      };
    },
    activeSessions: function activeSessions() {
      return Object.values(this.sessions).filter(function (session) {
        return session.lastContact > Date.now() / 1000 - COLLABORATOR_DISCONNECT_TIME && !session.isCurrent && session.userId !== null;
      });
    },
    sessionStyle: function sessionStyle() {
      return function (session) {
        return {
          'opacity': session.lastContact > Date.now() / 1000 - COLLABORATOR_IDLE_TIME ? 1 : 0.5 // 'border-color': session.color

        };
      };
    },
    sessionsVisible: function sessionsVisible() {
      return this.activeSessions.slice(0, 3);
    },
    sessionsPopover: function sessionsPopover() {
      var _this = this;

      return _toConsumableArray(this.activeSessions.slice(3).map(function (session) {
        return {
          href: '#',
          icon: _this.avatarUrl(session),
          text: session.guestName ? session.guestName : session.displayName
        };
      }));
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".session-list[data-v-0d166054] {\n  position: relative;\n}\n.session-list[data-v-0d166054] .popovermenu {\n    margin-right: -4px;\n}\n.session-list[data-v-0d166054] .popovermenu img {\n      padding: 0;\n      width: 32px !important;\n      height: 32px !important;\n      margin: 6px;\n      border-radius: 50%;\n}\n.avatar-list[data-v-0d166054] {\n  display: inline-flex;\n  flex-direction: row-reverse;\n}\n.avatar-list .avatardiv[data-v-0d166054],\n  .avatar-list[data-v-0d166054] .avatardiv {\n    width: 36px;\n    height: 36px;\n    margin-right: -8px;\n    border: 2px solid var(--color-main-background);\n    background-color: var(--color-main-background) !important;\n    box-sizing: content-box !important;\n}\n.avatar-list .avatardiv.icon-more[data-v-0d166054],\n    .avatar-list[data-v-0d166054] .avatardiv.icon-more {\n      width: 32px;\n      height: 32px;\n      opacity: .5;\n      background-color: var(--color-background-dark) !important;\n      cursor: pointer;\n}\n.popovermenu[data-v-0d166054] {\n  display: block;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "session-list" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "tooltip",
            rawName: "v-tooltip.left",
            value: _vm.editorsTooltip,
            expression: "editorsTooltip",
            modifiers: { left: true }
          }
        ],
        staticClass: "avatar-list",
        on: {
          click: function($event) {
            _vm.popoverVisible = !_vm.popoverVisible
          }
        }
      },
      [
        _vm.sessionsPopover.length > 0
          ? _c("div", { staticClass: "avatardiv icon-more" })
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.sessionsVisible, function(session) {
          return _c("Avatar", {
            key: session.id,
            style: _vm.sessionStyle(session),
            attrs: {
              url: _vm.avatarUrl(session),
              "disable-tooltip": true,
              size: 32
            }
          })
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.popoverVisible,
            expression: "popoverVisible"
          }
        ],
        staticClass: "popovermenu menu-right"
      },
      [
        _c("PopoverMenu", { attrs: { menu: _vm.sessionsPopover } }),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2a335d1e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/SessionList.vue":
/*!****************************************!*\
  !*** ./src/components/SessionList.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SessionList.vue?vue&type=template&id=0d166054&scoped=true& */ "./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true&");
/* harmony import */ var _SessionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionList.vue?vue&type=script&lang=js& */ "./src/components/SessionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& */ "./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SessionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d166054",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SessionList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/SessionList.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/SessionList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./SessionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SessionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./SessionList.vue?vue&type=template&id=0d166054&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=editor-collab.js.map?v=31386655758fe23deeca