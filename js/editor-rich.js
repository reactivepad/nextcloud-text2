(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["editor-rich"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextcloud-vue/dist/Directives/Tooltip */ "./node_modules/nextcloud-vue/dist/Directives/Tooltip.js");
/* harmony import */ var nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactivepad_prosemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reactivepad/prosemirror */ "./node_modules/@reactivepad/prosemirror/es/index.js");
/* harmony import */ var _mixins_menubar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../mixins/menubar */ "./src/mixins/menubar.js");
/* harmony import */ var _helpers_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../helpers/files */ "./src/helpers/files.js");
/* harmony import */ var nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nextcloud-vue/dist/Components/Actions */ "./node_modules/nextcloud-vue/dist/Components/Actions.js");
/* harmony import */ var nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nextcloud-vue/dist/Components/ActionButton */ "./node_modules/nextcloud-vue/dist/Components/ActionButton.js");
/* harmony import */ var nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nextcloud-vue/dist/Components/PopoverMenu */ "./node_modules/nextcloud-vue/dist/Components/PopoverMenu.js");
/* harmony import */ var nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_8__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuBar',
  components: {
    EditorMenuBar: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBar"],
    ActionButton: nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_6___default.a,
    PopoverMenu: nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_7___default.a,
    Actions: nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  directives: {
    Tooltip: nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1___default.a,
    ClickOutside: vue_click_outside__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  props: {
    editor: {
      type: Object,
      required: false,
      default: null
    },
    isRichEditor: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      forceRecompute: 0,
      submenuVisibility: {},
      icons: _toConsumableArray(_mixins_menubar__WEBPACK_IMPORTED_MODULE_3__["default"])
    };
  },
  computed: {
    isPublic: function isPublic() {
      return document.getElementById('isPublic') && document.getElementById('isPublic').value === '1';
    },
    isHiddenInMenu: function isHiddenInMenu() {
      var _this = this;

      return function ($index) {
        return $index - _this.iconCount >= 0;
      };
    },
    getIconClasses: function getIconClasses() {
      return function (isActive, icon) {
        var classes = {
          'is-active': icon.isActive(isActive)
        };
        classes[icon.class] = true;
        return classes;
      };
    },
    isChildMenuVisible: function isChildMenuVisible() {
      var _this2 = this;

      return function (icon) {
        return _this2.submenuVisibility.hasOwnProperty(icon.label) ? _this2.submenuVisibility[icon.label] : false;
      };
    },
    allIcons: function allIcons() {
      var _this3 = this;

      if (this.isPublic) {
        return this.icons;
      }

      return [].concat(_toConsumableArray(this.icons), [{
        label: t('text', 'Insert image'),
        class: 'icon-image',
        isActive: function isActive() {},
        action: function action(commands) {
          _this3.showImagePrompt(commands.image);
        }
      }]);
    },
    childPopoverMenu: function childPopoverMenu() {
      var _this4 = this;

      return function (isActive, commands, icons, parent) {
        var popoverMenuItems = [];

        var _loop = function _loop(index) {
          popoverMenuItems.push({
            text: icons[index].label,
            icon: icons[index].class,
            action: function action() {
              icons[index].action(commands);

              _this4.hideChildMenu(parent);
            },
            active: icons[index].isActive(isActive)
          });
        };

        for (var index in icons) {
          _loop(index);
        }

        return popoverMenuItems;
      };
    },
    childIconClass: function childIconClass() {
      return function (isActive, icons) {
        for (var index in icons) {
          var icon = icons[index];

          if (icon.isActive(isActive)) {
            return icon.class;
          }
        }

        return 'icon-h1';
      };
    },
    iconCount: function iconCount() {
      this.forceRecompute; // eslint-disable-line

      this.windowWidth; // eslint-disable-line

      var menuBarWidth = this.$refs.menubar ? this.$refs.menubar.clientWidth : this.windowWidth - 200;
      var iconCount = Math.max(Math.floor(menuBarWidth / 44) - 2, 0);
      return iconCount;
    }
  },
  beforeMount: function beforeMount() {
    this.redrawMenuBar();
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.getWindowWidth);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },
  methods: {
    redrawMenuBar: function redrawMenuBar() {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.getWindowWidth();

        _this5.forceRecompute++;
      });
    },
    clickIcon: function clickIcon(commands, icon) {
      return icon.action(commands);
    },
    rxpClickButton: function rxpClickButton(i, editor) {
      _reactivepad_prosemirror__WEBPACK_IMPORTED_MODULE_2__["menuItems"][i].run(editor.state, editor.view.dispatch);
    },
    getWindowWidth: function getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight: function getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    hideChildMenu: function hideChildMenu(icon) {
      this.$set(this.submenuVisibility, icon.label, false);
    },
    toggleChildMenu: function toggleChildMenu(icon) {
      var lastValue = this.submenuVisibility.hasOwnProperty(icon.label) ? this.submenuVisibility[icon.label] : false;
      this.$set(this.submenuVisibility, icon.label, !lastValue);
    },
    showImagePrompt: function showImagePrompt(command) {
      var currentUser = OC.getCurrentUser();

      if (!currentUser) {
        return;
      }

      var _command = command;
      OC.dialogs.filepicker('Insert an image', function (file) {
        Object(_helpers_files__WEBPACK_IMPORTED_MODULE_4__["fetchFileInfo"])(currentUser.uid, file).then(function (info) {
          var fileInfo = info[0];
          console.debug(fileInfo);
          var previewUrl = OC.generateUrl('/core/preview?') + "fileId=".concat(fileInfo.id, "&x=1024&y=1024&a=true");
          var internalLink = OC.generateUrl('/f/' + fileInfo.id); // dirty but works so we have the information stored in markdown

          var appendMeta = {
            mimetype: fileInfo.mimetype,
            hasPreview: fileInfo.hasPreview,
            fileId: fileInfo.id
          };
          var src = (fileInfo.hasPreview ? previewUrl : internalLink) + '#' + Object.entries(appendMeta).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                val = _ref2[1];

            return "".concat(key, "=").concat(encodeURIComponent(val));
          }).join('&');

          _command({
            src: src,
            alt: fileInfo.name
          });
        });
      }, false, [], true);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBubble.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBubble.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextcloud-vue/dist/Directives/Tooltip */ "./node_modules/nextcloud-vue/dist/Directives/Tooltip.js");
/* harmony import */ var nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuBubble',
  components: {
    EditorMenuBubble: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBubble"]
  },
  directives: {
    tooltip: nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    editor: {
      type: Object,
      required: false,
      default: null
    }
  },
  data: function data() {
    return {
      linkUrl: null,
      linkMenuIsActive: false
    };
  },
  methods: {
    showLinkMenu: function showLinkMenu(attrs) {
      var _this = this;

      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(function () {
        _this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu: function hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    setLinkUrl: function setLinkUrl(command, url) {
      if (url && !url.match(/^[a-zA-Z]+:\/\//) && !url.match(/^\//)) {
        url = 'https://' + url;
      }

      command({
        href: url
      });
      this.hideLinkMenu();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".menubar[data-v-4a501398] {\n  position: fixed;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  display: flex;\n  z-index: 10010;\n  background-color: var(--color-main-background-translucent);\n  height: 44px;\n}\n.menubar .menubar-icons[data-v-4a501398] {\n    flex-grow: 1;\n    margin-left: calc((100% - 660px) / 2);\n}\n@media (max-width: 660px) {\n.menubar .menubar-icons[data-v-4a501398] {\n      margin-left: 0;\n}\n}\n.menubar button[data-v-4a501398] {\n  width: 44px;\n  height: 44px;\n  margin: 0;\n  background-size: 16px;\n  border: 0;\n  background-color: transparent;\n  opacity: .5;\n  color: var(--color-main-text);\n  background-position: center center;\n  vertical-align: top;\n}\n.menubar button[data-v-4a501398]:hover, .menubar button[data-v-4a501398]:focus, .menubar button[data-v-4a501398]:active {\n    background-color: var(--color-background-dark);\n}\n.menubar button.is-active[data-v-4a501398], .menubar button[data-v-4a501398]:hover, .menubar button[data-v-4a501398]:focus {\n    opacity: 1;\n}\n.menubar button.icon-undo[data-v-4a501398], .menubar button.icon-redo[data-v-4a501398] {\n    opacity: .4;\n}\n.rxpButton[data-v-4a501398] {\n  width: auto !important;\n}\n.menubar .submenu[data-v-4a501398] {\n  display: inline-block;\n  width: 44px;\n  height: 44px;\n  position: relative;\n  vertical-align: top;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".menububble[data-v-5496a10a] {\n  position: absolute;\n  display: flex;\n  z-index: 10020;\n  background: var(--color-main-background-translucent);\n  box-shadow: 0 1px 5px var(--color-box-shadow);\n  border-radius: 5px;\n  padding: 0.3rem;\n  margin-bottom: 0.5rem;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateX(-50%);\n  transition: opacity 0.2s, visibility 0.2s;\n}\n.menububble.is-active[data-v-5496a10a] {\n    opacity: 1;\n    visibility: visible;\n}\n.menububble__button[data-v-5496a10a] {\n    display: inline-flex;\n    border: 0;\n    padding: 0.2rem 0.5rem;\n    margin-right: 0.2rem;\n    border-radius: 3px;\n    cursor: pointer;\n}\n.menububble__button[data-v-5496a10a]:last-child {\n      margin-right: 0;\n}\n.menububble__form[data-v-5496a10a] {\n    display: flex;\n    align-items: center;\n}\n.menububble__input[data-v-5496a10a] {\n    font: inherit;\n    border: none;\n    background: transparent;\n    min-width: 150px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("EditorMenuBar", {
    attrs: { editor: _vm.editor },
    scopedSlots: _vm._u(
      [
        {
          key: "default",
          fn: function(ref) {
            var commands = ref.commands
            var isActive = ref.isActive
            return [
              _c(
                "div",
                { staticClass: "menubar" },
                [
                  _vm.isRichEditor
                    ? _c(
                        "div",
                        { ref: "menubar", staticClass: "menubar-icons" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "rxpButton",
                              on: {
                                click: function($event) {
                                  return _vm.rxpClickButton(0, _vm.editor)
                                }
                              }
                            },
                            [_vm._v("Formula")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "rxpButton",
                              on: {
                                click: function($event) {
                                  return _vm.rxpClickButton(1, _vm.editor)
                                }
                              }
                            },
                            [_vm._v("Table")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.allIcons, function(icon, $index) {
                            return [
                              icon.class
                                ? _c("button", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: $index < _vm.iconCount,
                                        expression: "$index < iconCount"
                                      }
                                    ],
                                    key: icon.label,
                                    class: _vm.getIconClasses(isActive, icon),
                                    attrs: { title: icon.label },
                                    on: {
                                      click: function($event) {
                                        return _vm.clickIcon(commands, icon)
                                      }
                                    }
                                  })
                                : [
                                    _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: $index < _vm.iconCount,
                                            expression: "$index < iconCount"
                                          },
                                          {
                                            name: "click-outside",
                                            rawName: "v-click-outside",
                                            value: function() {
                                              return _vm.hideChildMenu(icon)
                                            },
                                            expression:
                                              "() => hideChildMenu(icon)"
                                          }
                                        ],
                                        key: icon.label,
                                        staticClass: "submenu"
                                      },
                                      [
                                        _c("button", {
                                          class: _vm.childIconClass(
                                            isActive,
                                            icon.children
                                          ),
                                          attrs: { title: icon.label },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.toggleChildMenu(icon)
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "popovermenu menu-center",
                                            class: {
                                              open: _vm.isChildMenuVisible(icon)
                                            }
                                          },
                                          [
                                            _c("PopoverMenu", {
                                              attrs: {
                                                menu: _vm.childPopoverMenu(
                                                  isActive,
                                                  commands,
                                                  icon.children,
                                                  icon
                                                )
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                            ]
                          }),
                          _vm._v(" "),
                          _c(
                            "Actions",
                            [
                              _vm._l(_vm.allIcons, function(icon, $index) {
                                return [
                                  icon.class && _vm.isHiddenInMenu($index)
                                    ? _c(
                                        "ActionButton",
                                        {
                                          key: icon.class,
                                          attrs: { icon: icon.class },
                                          on: {
                                            click: function($event) {
                                              return _vm.clickIcon(
                                                commands,
                                                icon
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t" +
                                              _vm._s(icon.label) +
                                              "\n\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    : !icon.class && _vm.isHiddenInMenu($index)
                                    ? _vm._l(icon.children, function(
                                        childIcon
                                      ) {
                                        return _c(
                                          "ActionButton",
                                          {
                                            key: childIcon.class,
                                            attrs: { icon: childIcon.class },
                                            on: {
                                              click: function($event) {
                                                return _vm.clickIcon(
                                                  commands,
                                                  childIcon
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t" +
                                                _vm._s(childIcon.label) +
                                                "\n\t\t\t\t\t\t"
                                            )
                                          ]
                                        )
                                      })
                                    : _vm._e()
                                ]
                              })
                            ],
                            2
                          )
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._t("default", [_vm._v("\n\t\t\tLeft side\n\t\t")])
                ],
                2
              )
            ]
          }
        }
      ],
      null,
      true
    )
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("EditorMenuBubble", {
    staticClass: "menububble",
    attrs: { editor: _vm.editor },
    on: { hide: _vm.hideLinkMenu },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var commands = ref.commands
          var isActive = ref.isActive
          var getMarkAttrs = ref.getMarkAttrs
          var menu = ref.menu
          return [
            _c(
              "div",
              {
                staticClass: "menububble",
                class: { "is-active": menu.isActive },
                style:
                  "left: " + menu.left + "px; bottom: " + menu.bottom + "px;"
              },
              [
                _vm.linkMenuIsActive
                  ? _c(
                      "form",
                      {
                        staticClass: "menububble__form",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.setLinkUrl(commands.link, _vm.linkUrl)
                          }
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.linkUrl,
                              expression: "linkUrl"
                            }
                          ],
                          ref: "linkInput",
                          staticClass: "menububble__input",
                          attrs: { type: "text", placeholder: "https://" },
                          domProps: { value: _vm.linkUrl },
                          on: {
                            keydown: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k($event.keyCode, "esc", 27, $event.key, [
                                  "Esc",
                                  "Escape"
                                ])
                              ) {
                                return null
                              }
                              return _vm.hideLinkMenu($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.linkUrl = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("button", {
                          staticClass: "menububble__button icon-confirm",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.setLinkUrl(commands.link, _vm.linkUrl)
                            }
                          }
                        })
                      ]
                    )
                  : [
                      _c(
                        "button",
                        {
                          staticClass: "menububble__button",
                          class: { "is-active": isActive.link() },
                          on: {
                            click: function($event) {
                              _vm.showLinkMenu(getMarkAttrs("link"))
                            }
                          }
                        },
                        [
                          _c("span", {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: isActive.link()
                                  ? "Update Link"
                                  : "Add Link",
                                expression:
                                  "isActive.link() ? 'Update Link' : 'Add Link'"
                              }
                            ],
                            staticClass: "icon-link"
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(_vm._s(_vm.t("text", "Add link")))
                          ])
                        ]
                      )
                    ]
              ],
              2
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9d380b96", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1715a6ad", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/MenuBar.vue":
/*!************************************!*\
  !*** ./src/components/MenuBar.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=template&id=4a501398&scoped=true& */ "./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&");
/* harmony import */ var _MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=script&lang=js& */ "./src/components/MenuBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& */ "./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a501398",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MenuBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/MenuBar.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=template&id=4a501398&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/MenuBubble.vue":
/*!***************************************!*\
  !*** ./src/components/MenuBubble.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& */ "./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&");
/* harmony import */ var _MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBubble.vue?vue&type=script&lang=js& */ "./src/components/MenuBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& */ "./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5496a10a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MenuBubble.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/MenuBubble.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/MenuBubble.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBubble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBubble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/helpers/files.js":
/*!******************************!*\
  !*** ./src/helpers/files.js ***!
  \******************************/
/*! exports provided: fetchFileInfo, registerFileActionFallback, registerFileCreate, FILE_ACTION_IDENTIFIER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFileInfo", function() { return fetchFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFileActionFallback", function() { return registerFileActionFallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFileCreate", function() { return registerFileCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_ACTION_IDENTIFIER", function() { return FILE_ACTION_IDENTIFIER; });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/client.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextcloud_server_dist_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextcloud-server/dist/router */ "./node_modules/nextcloud-server/dist/router.js");
/* harmony import */ var nextcloud_server_dist_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextcloud_server_dist_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mime */ "./src/helpers/mime.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * Callback that should be executed after the document is ready
 * @param callback
 */



var FILE_ACTION_IDENTIFIER = 'Edit with text app';

var fetchFileInfo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(user, path) {
    var response, files;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default()({
              method: 'PROPFIND',
              url: Object(nextcloud_server_dist_router__WEBPACK_IMPORTED_MODULE_1__["generateRemoteUrl"])("dav/files/".concat(user).concat(path)),
              headers: {
                requesttoken: OC.requestToken,
                'content-Type': 'text/xml'
              },
              data: "<?xml version=\"1.0\"?>\n<d:propfind  xmlns:d=\"DAV:\" xmlns:oc=\"http://owncloud.org/ns\" xmlns:nc=\"http://nextcloud.org/ns\" xmlns:ocs=\"http://open-collaboration-services.org/ns\">\n  <d:prop>\n    <d:getlastmodified />\n    <d:getetag />\n    <d:getcontenttype />\n    <d:resourcetype />\n    <oc:fileid />\n    <oc:permissions />\n    <oc:size />\n    <d:getcontentlength />\n    <nc:has-preview />\n    <nc:mount-type />\n    <nc:is-encrypted />\n    <ocs:share-permissions />\n    <oc:tags />\n    <oc:favorite />\n    <oc:comments-unread />\n    <oc:owner-id />\n    <oc:owner-display-name />\n    <oc:share-types />\n  </d:prop>\n</d:propfind>"
            });

          case 2:
            response = _context.sent;
            files = OCA.Files.App.fileList.filesClient._client.parseMultiStatus(response.data);
            return _context.abrupt("return", files.map(function (file) {
              var fileInfo = OCA.Files.App.fileList.filesClient._parseFileInfo(file);

              fileInfo.href = file.href;
              return fileInfo;
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchFileInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var registerFileCreate = function registerFileCreate() {
  var newFileMenuPlugin = {
    attach: function attach(menu) {
      var fileList = menu.fileList; // only attach to main file list, public view is not supported yet

      if (fileList.id !== 'files' && fileList.id !== 'files.public') {
        return;
      } // register the new menu entry


      menu.addMenuEntry({
        id: 'file',
        displayName: t('text', 'New text document'),
        templateName: t('text', 'New text document') + '.rxp',
        iconClass: 'icon-filetype-text',
        fileType: 'file',
        actionHandler: function actionHandler(name) {
          fileList.createFile(name).then(function (status, data) {
            var fileInfoModel = new OCA.Files.FileInfoModel(data);

            if (typeof OCA.Viewer !== 'undefined') {
              OCA.Files.fileActions.triggerAction('view', fileInfoModel, fileList);
            } else if (typeof OCA.Viewer === 'undefined') {
              OCA.Files.fileActions.triggerAction(FILE_ACTION_IDENTIFIER, fileInfoModel, fileList);
            }
          });
        }
      });
    }
  };
  OC.Plugins.register('OCA.Files.NewFileMenu', newFileMenuPlugin);
};

var registerFileActionFallback = function registerFileActionFallback() {
  var sharingToken = document.getElementById('sharingToken') ? document.getElementById('sharingToken').value : null;
  var dir = document.getElementById('dir').value;

  if (!sharingToken || dir !== '') {
    var ViewerRoot = document.createElement('div');
    ViewerRoot.id = 'text-viewer-fallback';
    document.body.appendChild(ViewerRoot);

    var registerAction = function registerAction(mime) {
      return OCA.Files.fileActions.register(mime, FILE_ACTION_IDENTIFIER, OC.PERMISSION_UPDATE | OC.PERMISSION_READ, OC.imagePath('core', 'actions/rename'), function (filename) {
        var file = window.FileList.findFile(filename);
        Promise.all([__webpack_require__.e(/*! import() */ "vendor").then(__webpack_require__.bind(null, /*! vue */ "./node_modules/vue/dist/vue.esm.js")), Promise.all(/*! import() | files-modal */[__webpack_require__.e("vendor"), __webpack_require__.e("vendors~files-modal"), __webpack_require__.e("files-modal")]).then(__webpack_require__.bind(null, /*! ./../components/PublicFilesEditor */ "./src/components/PublicFilesEditor.vue"))]).then(function (imports) {
          var path = window.FileList.getCurrentDirectory() + '/' + filename;
          var Vue = imports[0].default;
          Vue.prototype.t = window.t;
          Vue.prototype.n = window.n;
          Vue.prototype.OCA = window.OCA;
          var Editor = imports[1].default;
          var vm = new Vue({
            render: function render(h) {
              return h(Editor, {
                props: {
                  fileId: file ? file.id : null,
                  active: true,
                  shareToken: sharingToken,
                  relativePath: path,
                  mimeType: file.mimetype
                }
              });
            }
          });
          vm.$mount(ViewerRoot);
        });
      }, t('text', 'Edit'));
    };

    for (var i = 0; i < _mime__WEBPACK_IMPORTED_MODULE_2__["openMimetypes"].length; i++) {
      registerAction(_mime__WEBPACK_IMPORTED_MODULE_2__["openMimetypes"][i]);
      OCA.Files.fileActions.setDefault(_mime__WEBPACK_IMPORTED_MODULE_2__["openMimetypes"][i], FILE_ACTION_IDENTIFIER);
    }
  }
};



/***/ }),

/***/ "./src/helpers/mime.js":
/*!*****************************!*\
  !*** ./src/helpers/mime.js ***!
  \*****************************/
/*! exports provided: openMimetypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMimetypes", function() { return openMimetypes; });
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var openMimetypes = ["application/reactivepad"];


/***/ }),

/***/ "./src/mixins/menubar.js":
/*!*******************************!*\
  !*** ./src/mixins/menubar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/* harmony default export */ __webpack_exports__["default"] = ([{
  label: t('text', 'Undo'),
  class: 'icon-undo',
  isActive: function isActive(_isActive) {},
  action: function action(command) {
    return command.undo();
  }
}, {
  label: t('text', 'Redo'),
  class: 'icon-redo',
  isActive: function isActive(_isActive2) {},
  action: function action(command) {
    return command.redo();
  }
}, {
  label: t('text', 'Bold'),
  class: 'icon-bold',
  isActive: function isActive(_isActive3) {
    return _isActive3.strong();
  },
  action: function action(command) {
    return command.strong();
  }
}, {
  label: t('text', 'Italic'),
  class: 'icon-italic',
  isActive: function isActive(_isActive4) {
    return _isActive4.em();
  },
  action: function action(command) {
    return command.em();
  }
}, {
  label: t('text', 'Strikethrough'),
  class: 'icon-strike',
  isActive: function isActive(_isActive5) {
    return _isActive5.strike();
  },
  action: function action(command) {
    return command.strike();
  }
}, {
  label: t('text', 'Paragraph'),
  class: 'icon-paragraph',
  isActive: function isActive(_isActive6) {},
  action: function action(command) {
    return command.paragraph();
  }
}, {
  label: t('text', 'Headings'),
  visible: false,
  children: [{
    label: t('text', 'Heading 1'),
    class: 'icon-h1',
    isActive: function isActive(_isActive7) {
      return _isActive7.heading({
        level: 1
      });
    },
    action: function action(command) {
      return command.heading({
        level: 1
      });
    }
  }, {
    label: t('text', 'Heading 2'),
    class: 'icon-h2',
    isActive: function isActive(_isActive8) {
      return _isActive8.heading({
        level: 2
      });
    },
    action: function action(command) {
      return command.heading({
        level: 2
      });
    }
  }, {
    label: t('text', 'Heading 3'),
    class: 'icon-h3',
    isActive: function isActive(_isActive9) {
      return _isActive9.heading({
        level: 3
      });
    },
    action: function action(command) {
      return command.heading({
        level: 3
      });
    }
  }, {
    label: t('text', 'Heading 4'),
    class: 'icon-h4',
    isActive: function isActive(_isActive10) {
      return _isActive10.heading({
        level: 4
      });
    },
    action: function action(command) {
      return command.heading({
        level: 4
      });
    }
  }, {
    label: t('text', 'Heading 5'),
    class: 'icon-h5',
    isActive: function isActive(_isActive11) {
      return _isActive11.heading({
        level: 5
      });
    },
    action: function action(command) {
      return command.heading({
        level: 5
      });
    }
  }, {
    label: t('text', 'Heading 6'),
    class: 'icon-h6',
    isActive: function isActive(_isActive12) {
      return _isActive12.heading({
        level: 6
      });
    },
    action: function action(command) {
      return command.heading({
        level: 6
      });
    }
  }]
}, {
  label: t('text', 'Unordered list'),
  class: 'icon-ul',
  isActive: function isActive(_isActive13) {
    return _isActive13.bullet_list();
  },
  action: function action(command) {
    return command.bullet_list();
  }
}, {
  label: t('text', 'Ordered list'),
  class: 'icon-ol',
  isActive: function isActive(_isActive14) {
    return _isActive14.ordered_list();
  },
  action: function action(command) {
    return command.ordered_list();
  }
}, {
  label: t('text', 'Blockquote'),
  class: 'icon-quote',
  isActive: function isActive(_isActive15) {
    return _isActive15.blockquote();
  },
  action: function action(command) {
    return command.blockquote();
  }
}, {
  label: t('text', 'Code block'),
  class: 'icon-code',
  isActive: function isActive(_isActive16) {
    return _isActive16.code_block();
  },
  action: function action(command) {
    return command.code_block();
  }
}]);

/***/ })

}]);
//# sourceMappingURL=editor-rich.js.map?v=06b0d4e402afda8ec5ab