(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["editor"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'CollisionResolveDialog'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_SyncService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/SyncService */ "./src/services/SyncService.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helpers */ "./src/helpers/index.js");
/* harmony import */ var _helpers_mappings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/mappings */ "./src/helpers/mappings.js");
/* harmony import */ var _EditorFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../EditorFactory */ "./src/EditorFactory.js");
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../extensions */ "./src/extensions/index.js");
/* harmony import */ var _mixins_isMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../mixins/isMobile */ "./src/mixins/isMobile.js");
/* harmony import */ var nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nextcloud-vue/dist/Directives/Tooltip */ "./node_modules/nextcloud-vue/dist/Directives/Tooltip.js");
/* harmony import */ var nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10__);
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











var EDITOR_PUSH_DEBOUNCE = 200;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EditorWrapper",
  components: {
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_6__["EditorContent"],
    MenuBar: function MenuBar() {
      return Promise.all(/*! import() | editor-rich */[__webpack_require__.e("vendors~editor-collab~editor-rich"), __webpack_require__.e("vendors~editor-rich"), __webpack_require__.e("editor-rich")]).then(__webpack_require__.bind(null, /*! ./MenuBar */ "./src/components/MenuBar.vue"));
    },
    MenuBubble: function MenuBubble() {
      return Promise.all(/*! import() | editor-rich */[__webpack_require__.e("vendors~editor-collab~editor-rich"), __webpack_require__.e("vendors~editor-rich"), __webpack_require__.e("editor-rich")]).then(__webpack_require__.bind(null, /*! ./MenuBubble */ "./src/components/MenuBubble.vue"));
    },
    ReadOnlyEditor: function ReadOnlyEditor() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendor"), __webpack_require__.e("vendors~editor"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(null, /*! ./ReadOnlyEditor */ "./src/components/ReadOnlyEditor.vue"));
    },
    CollisionResolveDialog: function CollisionResolveDialog() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendor"), __webpack_require__.e("vendors~editor"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(null, /*! ./CollisionResolveDialog */ "./src/components/CollisionResolveDialog.vue"));
    },
    GuestNameDialog: function GuestNameDialog() {
      return Promise.all(/*! import() | editor-guest */[__webpack_require__.e("vendors~editor-collab~editor-guest"), __webpack_require__.e("editor-guest")]).then(__webpack_require__.bind(null, /*! ./GuestNameDialog */ "./src/components/GuestNameDialog.vue"));
    },
    SessionList: function SessionList() {
      return Promise.all(/*! import() | editor-collab */[__webpack_require__.e("vendors~editor-collab~editor-guest"), __webpack_require__.e("vendors~editor-collab~editor-rich"), __webpack_require__.e("editor-collab")]).then(__webpack_require__.bind(null, /*! ./SessionList */ "./src/components/SessionList.vue"));
    }
  },
  directives: {
    Tooltip: nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a
  },
  mixins: [_mixins_isMobile__WEBPACK_IMPORTED_MODULE_9__["default"]],
  props: {
    relativePath: {
      type: String,
      default: null
    },
    fileId: {
      type: Number,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    shareToken: {
      type: String,
      default: null
    },
    mime: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      tiptap: null,

      /** @type SyncService */
      syncService: null,
      document: null,
      sessions: [],
      currentSession: null,
      filteredSessions: {},
      dirty: false,
      initialLoading: false,
      lastSavedString: "",
      syncError: null,
      hasConnectionIssue: false,
      readOnly: true,
      forceRecreate: false,
      saveStatusPolling: null
    };
  },
  computed: {
    lastSavedStatus: function lastSavedStatus() {
      var status = this.dirtyStateIndicator ? "*" : "";

      if (!this.isMobile) {
        status += this.lastSavedString;
      }

      return status;
    },
    lastSavedStatusClass: function lastSavedStatusClass() {
      return this.syncError && this.lastSavedString !== "" ? "error" : "";
    },
    dirtyStateIndicator: function dirtyStateIndicator() {
      return this.hasUnpushedChanges || this.hasUnsavedChanges;
    },
    lastSavedStatusTooltip: function lastSavedStatusTooltip() {
      var message = t("text", "Last save {lastSave}", {
        lastSave: this.lastSavedString
      });

      if (this.hasSyncCollission) {
        message = t("text", "The document has been changed outside of the editor. The changes cannot be applied.");
      }

      if (this.hasUnpushedChanges) {
        message += " - " + t("text", "Unpushed changes");
      }

      if (this.hasUnsavedChanges) {
        message += " - " + t("text", "Unsaved changes");
      }

      return {
        content: message,
        placement: "bottom"
      };
    },
    hasSyncCollission: function hasSyncCollission() {
      return this.syncError && this.syncError.type === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].SAVE_COLLISSION;
    },
    hasUnpushedChanges: function hasUnpushedChanges() {
      return this.dirty;
    },
    hasUnsavedChanges: function hasUnsavedChanges() {
      return this.document && this.document.lastSavedVersion < this.document.currentVersion;
    },
    backendUrl: function backendUrl() {
      var _this = this;

      return function (endpoint) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["endpointUrl"])(endpoint, !!_this.shareToken);
      };
    },
    hasDocumentParameters: function hasDocumentParameters() {
      return this.fileId || this.shareToken;
    },
    isPublic: function isPublic() {
      return document.getElementById("isPublic") && document.getElementById("isPublic").value === "1";
    },
    isRichEditor: function isRichEditor() {
      return this.mime === "application/reactivepad";
    },
    fileExtension: function fileExtension() {
      return this.relativePath ? this.relativePath.split("/").pop().split(".").pop() : "txt";
    }
  },
  watch: {
    lastSavedStatus: function lastSavedStatus() {
      this.$refs.menubar && this.$refs.menubar.redrawMenuBar();
    }
  },
  mounted: function mounted() {
    if (this.active && this.hasDocumentParameters) {
      this.initSession();
    }

    this.$parent.$emit("update:loaded", true);
  },
  created: function created() {
    var _this2 = this;

    this.saveStatusPolling = setInterval(function () {
      _this2.updateLastSavedStatus();
    }, 2000);
    document.addEventListener("keydown", this._keyUpHandler, true);
  },
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;

    document.removeEventListener("keydown", this._keyUpHandler, true);
    clearInterval(this.saveStatusPolling);

    if (this.currentSession && this.syncService) {
      this.syncService.close().then(function () {
        _this3.currentSession = null;
        _this3.syncService = null;
      }).catch(function (e) {// Ignore issues closing the session since those might happen due to network issues
      });
    }
  },
  methods: {
    updateLastSavedStatus: function updateLastSavedStatus() {
      if (this.document) {
        this.lastSavedString = window.moment(this.document.lastSavedVersionTime * 1000).fromNow();
      }
    },
    initSession: function initSession() {
      var _this4 = this;

      if (!this.hasDocumentParameters) {
        this.$parent.$emit("error", "No valid file provided");
        return;
      }

      var guestName = localStorage.getItem("nick") ? localStorage.getItem("nick") : Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getRandomGuestName"])();
      this.syncService = new _services_SyncService__WEBPACK_IMPORTED_MODULE_2__["SyncService"]({
        shareToken: this.shareToken,
        filePath: this.relativePath,
        guestName: guestName,
        forceRecreate: this.forceRecreate,
        serialize: function serialize() {
          if (_this4.isRichEditor) {
            var serialized = _this4.tiptap.state.doc.toJSON();

            var stringified = JSON.stringify(serialized);
            console.debug("serialized document", {
              stringified: stringified
            });
            return stringified;
          }
        }
      }).on("opened", function (_ref) {
        var document = _ref.document,
            session = _ref.session;
        _this4.currentSession = session;
        _this4.document = document;
        _this4.readOnly = document.readOnly;
        localStorage.setItem("nick", _this4.currentSession.guestName);
      }).on("change", function (_ref2) {
        var document = _ref2.document,
            sessions = _ref2.sessions;

        if (_this4.document.baseVersionEtag !== "" && document.baseVersionEtag !== _this4.document.baseVersionEtag) {
          _this4.resolveUseServerVersion();

          return;
        }

        _this4.updateSessions.bind(_this4)(sessions);

        _this4.document = document;
        _this4.syncError = null;

        _this4.tiptap.setOptions({
          editable: !_this4.readOnly
        });
      }).on("loaded", function (_ref3) {
        var documentSource = _ref3.documentSource;
        _this4.hasConnectionIssue = false;
        Object(_EditorFactory__WEBPACK_IMPORTED_MODULE_5__["loadSyntaxHighlight"])(_helpers_mappings__WEBPACK_IMPORTED_MODULE_4__["extensionHighlight"][_this4.fileExtension] ? _helpers_mappings__WEBPACK_IMPORTED_MODULE_4__["extensionHighlight"][_this4.fileExtension] : _this4.fileExtension).then(function (languages) {
          var content = documentSource.trim() === "" ? documentSource : !documentSource ? null : JSON.parse(documentSource);
          _this4.tiptap = Object(_EditorFactory__WEBPACK_IMPORTED_MODULE_5__["createEditor"])({
            content: _this4.isRichEditor ? content : "<pre>" + escape_html__WEBPACK_IMPORTED_MODULE_1___default()(documentSource) + "</pre>",
            onInit: function onInit(_ref4) {
              var state = _ref4.state;
              _this4.syncService.state = state;

              _this4.syncService.startSync();
            },
            onUpdate: function onUpdate(_ref5) {
              var state = _ref5.state;
              _this4.syncService.state = state;
            },
            extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_7__["Collaboration"]({
              // the initial version we start with
              // version is an integer which is incremented with every change
              version: _this4.document.initialVersion,
              clientID: _this4.currentSession.id,
              // debounce changes so we can save some bandwidth
              debounce: EDITOR_PUSH_DEBOUNCE,
              onSendable: function onSendable(_ref6) {
                var sendable = _ref6.sendable;

                if (_this4.syncService) {
                  _this4.syncService.sendSteps();
                }
              }
            }), new _extensions__WEBPACK_IMPORTED_MODULE_8__["Keymap"]({
              "Ctrl-s": function CtrlS() {
                _this4.syncService.save();

                return true;
              }
            })],
            enableRichEditing: _this4.isRichEditor,
            languages: languages
          });
          _this4.syncService.state = _this4.tiptap.state;
        });
      }).on("sync", function (_ref7) {
        var steps = _ref7.steps,
            document = _ref7.document;
        _this4.hasConnectionIssue = false;

        try {
          _this4.tiptap.extensions.options.collaboration.update({
            version: document.currentVersion,
            steps: steps
          });

          _this4.syncService.state = _this4.tiptap.state;

          _this4.updateLastSavedStatus();
        } catch (e) {
          console.error("Failed to update steps in collaboration plugin", e); // TODO: we should recreate the editing session when this happens
        }

        _this4.document = document;
      }).on("error", function (error, data) {
        _this4.tiptap.setOptions({
          editable: false
        });

        if (error === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].SAVE_COLLISSION && (!_this4.syncError || _this4.syncError.type !== _services_SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].SAVE_COLLISSION)) {
          _this4.initialLoading = true;
          _this4.syncError = {
            type: error,
            data: data
          };
        }

        if (error === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].CONNECTION_FAILED && !_this4.hasConnectionIssue) {
          _this4.hasConnectionIssue = true; // FIXME: ideally we just try to reconnect in the service, so we don't loose steps

          OC.Notification.showTemporary("Connection failed, reconnecting");
          setTimeout(_this4.reconnect.bind(_this4), 1000);
        }

        if (error === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].SOURCE_NOT_FOUND) {
          _this4.initialLoading = false;
          OC.Notification.showTemporary("Source not found");

          _this4.$emit("close");
        }
      }).on("stateChange", function (state) {
        if (state.initialLoading && !_this4.initialLoading) {
          _this4.initialLoading = true;

          _this4.tiptap.focus("start");
        }

        if (state.hasOwnProperty("dirty")) {
          _this4.dirty = state.dirty;
        }
      });
      this.syncService.open({
        fileId: this.fileId,
        filePath: this.relativePath
      }).catch(function (e) {
        _this4.hasConnectionIssue = true;
      });
      this.forceRecreate = false;
    },
    resolveUseThisVersion: function resolveUseThisVersion() {
      this.syncService.forceSave();
      this.tiptap.setOptions({
        editable: !this.readOnly
      });
    },
    resolveUseServerVersion: function resolveUseServerVersion() {
      this.forceRecreate = true;
      this.reconnect();
    },
    reconnect: function reconnect() {
      var _this5 = this;

      if (this.syncService) {
        this.syncService.close().then(function () {
          _this5.syncService = null;

          _this5.tiptap.destroy();

          _this5.initSession();
        }).catch(function (e) {// Ignore issues closing the session since those might happen due to network issues
        });
      } else {
        this.syncService = null;
        this.tiptap.destroy();
        this.initSession();
      }
    },
    updateSessions: function updateSessions(sessions) {
      this.sessions = sessions.sort(function (a, b) {
        return b.lastContact - a.lastContact;
      });
      var currentSessionIds = this.sessions.map(function (session) {
        return session.userId;
      });
      var currentGuestIds = this.sessions.map(function (session) {
        return session.guestId;
      });
      var removedSessions = Object.keys(this.filteredSessions).filter(function (sessionId) {
        return !currentSessionIds.includes(sessionId) && !currentGuestIds.includes(sessionId);
      });

      for (var index in removedSessions) {
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].delete(this.filteredSessions, removedSessions[index]);
      }

      for (var _index in this.sessions) {
        var session = this.sessions[_index];
        var sessionKey = session.displayName ? session.userId : session.id;

        if (this.filteredSessions[sessionKey]) {
          // update timestamp if relevant
          if (this.filteredSessions[sessionKey].lastContact < session.lastContact) {
            vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.filteredSessions[sessionKey], "lastContact", session.lastContact);
          }
        } else {
          vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.filteredSessions, sessionKey, session);
        }

        if (session.id === this.currentSession.id) {
          vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.filteredSessions[sessionKey], "isCurrent", true);
        }
      }
    },
    _keyUpHandler: function _keyUpHandler(event) {
      var key = event.key || event.keyCode;

      if ((event.ctrlKey || event.metaKey) && !event.shiftKey && (key === "f" || key === 70)) {
        event.stopPropagation();
        return true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditorFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EditorFactory */ "./src/EditorFactory.js");
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
  name: 'ReadOnlyEditor',
  components: {
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorContent"]
  },
  props: {
    content: {
      type: String,
      required: true
    },
    isRichEditor: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      editor: null
    };
  },
  mounted: function mounted() {
    this.editor = Object(_EditorFactory__WEBPACK_IMPORTED_MODULE_2__["createEditor"])({
      content: this.isRichEditor ? this.content : '<pre>' + escape_html__WEBPACK_IMPORTED_MODULE_1___default()(this.content) + '</pre>',
      enableRichEditing: this.isRichEditor
    });
    this.editor.setOptions({
      editable: false
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/nodes/ImageView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
var imageMimes = ['image/png', 'image/jpeg', 'image/gif', 'image/x-xbitmap', 'image/bmp', 'image/svg+xml'];

var getQueryVariable = function getQueryVariable(src, variable) {
  var query = src.split('#')[1];

  if (typeof query === 'undefined') {
    return;
  }

  var vars = query.split('&');

  if (typeof vars === 'undefined') {
    return;
  }

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ImageView',
  props: ['node', 'updateAttrs', 'view'],
  // eslint-disable-line
  data: function data() {
    return {
      imageLoaded: false,
      loaded: false,
      failed: false
    };
  },
  computed: {
    mimeIcon: function mimeIcon() {
      var mime = getQueryVariable(this.src, 'mimetype');

      if (mime) {
        return {
          backgroundImage: 'url(' + window.OC.MimeType.getIconUrl(mime) + ')'
        };
      }

      return {};
    },
    isSupportedImage: function isSupportedImage() {
      var mime = getQueryVariable(this.src, 'mimetype');
      return typeof mime === 'undefined' || imageMimes.indexOf(mime) !== -1;
    },
    internalLinkOrImage: function internalLinkOrImage() {
      var fileId = getQueryVariable(this.src, 'fileId');

      if (fileId) {
        return OC.generateUrl('/f/' + fileId);
      }

      return this.src;
    },
    src: {
      get: function get() {
        return this.node.attrs.src;
      },
      set: function set(src) {
        this.updateAttrs({
          src: src
        });
      }
    },
    alt: {
      get: function get() {
        return this.node.attrs.alt ? this.node.attrs.alt : '';
      },
      set: function set(alt) {
        this.updateAttrs({
          alt: alt
        });
      }
    },
    t: function t() {
      return function (a, s) {
        return window.t(a, s);
      };
    }
  },
  beforeMount: function beforeMount() {
    var _this = this;

    if (!this.isSupportedImage) {
      // TODO check if hasPreview and render a file preview if available
      this.failed = true;
      this.imageLoaded = false;
      this.loaded = true;
      return;
    }

    var img = new Image();
    img.src = this.node.attrs.src;

    img.onload = function () {
      _this.imageLoaded = true;
    };

    img.onerror = function () {
      _this.failed = true;
      _this.imageLoaded = false;
      _this.loaded = true;
    };
  },
  methods: {
    updateAlt: function updateAlt() {
      this.alt = this.$refs.altInput.value;
    },
    onLoaded: function onLoaded() {
      this.loaded = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#resolve-conflicts[data-v-5ffe7972] {\n  display: flex;\n  position: fixed;\n  z-index: 10000;\n  bottom: 0;\n  max-width: 900px;\n  width: 100vw;\n  margin: auto;\n  padding: 20px 0;\n}\n#resolve-conflicts button[data-v-5ffe7972] {\n    margin: auto;\n    box-shadow: 0 0 10px var(--color-box-shadow);\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#editor-container[data-v-76135766] {\n  display: block;\n  width: 100vw;\n  max-width: 100%;\n  height: calc(100% - 50px);\n  top: 50px;\n  left: 0;\n  margin: 0 auto;\n  position: relative;\n  background-color: var(--color-main-background);\n}\n#editor-wrapper[data-v-76135766] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n#editor-wrapper.icon-loading #editor[data-v-76135766] {\n    opacity: 0.3;\n}\n#editor[data-v-76135766],\n.editor[data-v-76135766] {\n  background: var(--color-main-background);\n  color: var(--color-main-text);\n  background-clip: padding-box;\n  border-radius: var(--border-radius);\n  padding: 0;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n}\n.msg.icon-error[data-v-76135766] {\n  padding: 12px;\n  border-bottom: 1px solid var(--color-error);\n  padding-left: 30px;\n  background-position: 8px center;\n}\n.save-status[data-v-76135766] {\n  padding: 9px;\n  text-overflow: ellipsis;\n  color: var(--color-text-lighter);\n}\n.save-status.error[data-v-76135766] {\n    background-color: var(--color-error);\n    color: var(--color-main-background);\n    border-radius: 3px;\n}\n#editor-container #editor-wrapper.has-conflicts[data-v-76135766] {\n  height: calc(100% - 50px);\n}\n#editor-container #editor-wrapper.has-conflicts #editor[data-v-76135766],\n  #editor-container #editor-wrapper.has-conflicts #read-only-editor[data-v-76135766] {\n    width: 50%;\n    height: 100%;\n}\n#editor-session-list[data-v-76135766] {\n  padding: 9px;\n  padding-right: 16px;\n  display: flex;\n}\n#editor-session-list input[data-v-76135766],\n  #editor-session-list div[data-v-76135766] {\n    vertical-align: middle;\n    margin-left: 3px;\n}\n.editor__content[data-v-76135766] {\n  max-width: 800px;\n  margin: auto;\n  position: relative;\n}\n#body-public[data-v-76135766] {\n  height: auto;\n}\n#files-public-content[data-v-76135766] {\n  height: auto;\n}\n#files-public-content #editor-wrapper[data-v-76135766] {\n    position: relative;\n}\n#files-public-content #editor-container[data-v-76135766] {\n    top: 0;\n    width: 100%;\n}\n#files-public-content #editor-container #editor[data-v-76135766] .menubar {\n      position: fixed;\n      top: 50px;\n      width: 100%;\n}\n#files-public-content #editor-container #editor[data-v-76135766] {\n      padding-top: 50px;\n      overflow: auto;\n}\n#files-public-content #editor-container .has-conflicts #editor[data-v-76135766] {\n      padding-top: 0px;\n}\n.ie #editor[data-v-76135766] .menubar {\n  position: fixed;\n  top: 50px;\n  width: 100%;\n}\n.ie .editor__content[data-v-76135766] .ProseMirror {\n  padding-top: 50px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=2&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=2&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".modal-container #editor-container {\n  position: absolute;\n}\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n.ProseMirror-hideselection {\n  caret-color: transparent;\n}\n.ProseMirror-selectednode {\n  outline: 2px solid #8cf;\n}\n\n/* Make sure li selections wrap around markers */\nli.ProseMirror-selectednode {\n  outline: none;\n}\nli.ProseMirror-selectednode:after {\n  content: \"\";\n  position: absolute;\n  left: -32px;\n  right: -2px;\n  top: -2px;\n  bottom: -2px;\n  border: 2px solid #8cf;\n  pointer-events: none;\n}\n.has-conflicts .ProseMirror-menubar,\n#editor-wrapper.icon-loading .ProseMirror-menubar {\n  display: none;\n}\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n}\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid var(--color-main-text);\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n@keyframes ProseMirror-cursor-blink {\nto {\n    visibility: hidden;\n}\n}\ndiv[contenteditable=true],\ndiv[contenteditable=false] {\n  border: none !important;\n  width: 100%;\n  background-color: transparent;\n  color: var(--color-main-text);\n  opacity: 1;\n  -webkit-user-select: text;\n  user-select: text;\n}\n\n/* Document rendering styles */\n#editor-wrapper .ProseMirror {\n  margin-top: 44px;\n  height: 100%;\n  position: relative;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  padding: 4px 8px 200px 14px;\n  line-height: 150%;\n  font-size: 14px;\n  outline: none;\n}\n#editor-wrapper .ProseMirror p:first-child,\n  #editor-wrapper .ProseMirror h1:first-child,\n  #editor-wrapper .ProseMirror h2:first-child,\n  #editor-wrapper .ProseMirror h3:first-child,\n  #editor-wrapper .ProseMirror h4:first-child,\n  #editor-wrapper .ProseMirror h5:first-child,\n  #editor-wrapper .ProseMirror h6:first-child {\n    margin-top: 10px;\n}\n#editor-wrapper .ProseMirror a {\n    color: var(--color-primary-element);\n    text-decoration: underline;\n    padding: .5em 0;\n}\n#editor-wrapper .ProseMirror p {\n    margin-bottom: 1em;\n    line-height: 150%;\n}\n#editor-wrapper .ProseMirror em {\n    font-style: italic;\n}\n#editor-wrapper .ProseMirror h1 {\n    font-size: 36px;\n}\n#editor-wrapper .ProseMirror h2 {\n    font-size: 28px;\n}\n#editor-wrapper .ProseMirror h3 {\n    font-size: 24px;\n}\n#editor-wrapper .ProseMirror h4 {\n    font-size: 21px;\n}\n#editor-wrapper .ProseMirror h5 {\n    font-size: 17px;\n}\n#editor-wrapper .ProseMirror h6 {\n    font-size: 14px;\n}\n#editor-wrapper .ProseMirror h1,\n  #editor-wrapper .ProseMirror h2,\n  #editor-wrapper .ProseMirror h3,\n  #editor-wrapper .ProseMirror h4,\n  #editor-wrapper .ProseMirror h5,\n  #editor-wrapper .ProseMirror h6 {\n    font-weight: 600;\n    line-height: 120%;\n    margin-top: 24px;\n    margin-bottom: 12px;\n    color: var(--color-main-text);\n}\n#editor-wrapper .ProseMirror img {\n    cursor: default;\n    max-width: 100%;\n}\n#editor-wrapper .ProseMirror hr {\n    padding: 2px 0;\n    border: none;\n    margin: 1em 0;\n    width: 100%;\n}\n#editor-wrapper .ProseMirror hr:after {\n    content: \"\";\n    display: block;\n    height: 1px;\n    background-color: var(--color-border-dark);\n    line-height: 2px;\n}\n#editor-wrapper .ProseMirror pre {\n    white-space: pre-wrap;\n    background-color: var(--color-background-dark);\n    border-radius: var(--border-radius);\n    padding: 1em 1.3em;\n    margin-bottom: 1em;\n}\n#editor-wrapper .ProseMirror p code {\n    background-color: var(--color-background-dark);\n    border-radius: var(--border-radius);\n    padding: .1em .3em;\n}\n#editor-wrapper .ProseMirror li {\n    position: relative;\n}\n#editor-wrapper .ProseMirror ul, #editor-wrapper .ProseMirror ol {\n    padding-left: 14px;\n}\n#editor-wrapper .ProseMirror ul li {\n    list-style-type: disc;\n}\n#editor-wrapper .ProseMirror blockquote {\n    padding-left: 1em;\n    border-left: 4px solid var(--color-primary-element);\n    color: var(--color-text-maxcontrast);\n    margin-left: 0;\n    margin-right: 0;\n}\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre {\n  background-color: var(--color-main-background);\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre::before {\n    content: attr(data-language);\n    text-transform: uppercase;\n    display: block;\n    text-align: right;\n    font-weight: bold;\n    font-size: 0.6rem;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-comment,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-quote {\n    color: #999999;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-variable,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-template-variable,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-attribute,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-tag,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-name,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-regexp,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-link,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-name,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-selector-id,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-selector-class {\n    color: #f2777a;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-number,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-meta,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-built_in,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-builtin-name,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-literal,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-type,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-params {\n    color: #f99157;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-string,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-symbol,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-bullet {\n    color: #99cc99;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-title,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-section {\n    color: #ffcc66;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-keyword,\n  #editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-selector-tag {\n    color: #6699cc;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-emphasis {\n    font-style: italic;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-strong {\n    font-weight: 700;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#read-only-editor[data-v-41c92d1f] {\n  overflow: scroll;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".image[data-v-336b1e4e] {\n  margin: 0;\n  padding: 0;\n}\n.image__caption[data-v-336b1e4e] {\n  text-align: center;\n  color: var(--color-text-lighter);\n}\n.image__caption input[type='text'][data-v-336b1e4e] {\n    width: 100%;\n    border: none;\n    text-align: center;\n}\n.icon-image[data-v-336b1e4e] {\n  margin-top: 10px;\n  height: 32px;\n  padding: 20px;\n  background-size: contain;\n}\n.image__loading[data-v-336b1e4e] {\n  height: 100px;\n}\n.image__placeholder .image__main[data-v-336b1e4e] {\n  background-color: var(--color-background-dark);\n  text-align: center;\n  padding: 20px;\n  border-radius: var(--border-radius);\n}\n.image__placeholder .image__main .icon-image[data-v-336b1e4e] {\n    opacity: 0.7;\n}\n.fade-enter-active[data-v-336b1e4e] {\n  transition: opacity .3s ease-in-out;\n}\n.fade-enter-to[data-v-336b1e4e] {\n  opacity: 1;\n}\n.fade-enter[data-v-336b1e4e] {\n  opacity: 0;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n#editor-wrapper .ProseMirror {\n  margin-top: 5px !important;\n}\n.MuiInput-root input:not([type=\"range\"]) {\n  margin: 0 !important;\n  border: none !important;\n}\n.bp3-editable-text input {\n  width: auto !important;\n  min-height: initial !important;\n  border: none !important;\n  padding: 0 !important;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$":
/*!********************************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages lazy ^\.\/.*$ namespace object ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1c": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		"highlight/1c"
	],
	"./1c.js": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		"highlight/1c"
	],
	"./abnf": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		"highlight/abnf"
	],
	"./abnf.js": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		"highlight/abnf"
	],
	"./accesslog": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		"highlight/accesslog"
	],
	"./accesslog.js": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		"highlight/accesslog"
	],
	"./actionscript": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		"highlight/actionscript"
	],
	"./actionscript.js": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		"highlight/actionscript"
	],
	"./ada": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		"highlight/ada"
	],
	"./ada.js": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		"highlight/ada"
	],
	"./angelscript": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		"highlight/angelscript"
	],
	"./angelscript.js": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		"highlight/angelscript"
	],
	"./apache": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		"highlight/apache"
	],
	"./apache.js": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		"highlight/apache"
	],
	"./applescript": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		"highlight/applescript"
	],
	"./applescript.js": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		"highlight/applescript"
	],
	"./arcade": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		"highlight/arcade"
	],
	"./arcade.js": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		"highlight/arcade"
	],
	"./arduino": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		"highlight/arduino"
	],
	"./arduino.js": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		"highlight/arduino"
	],
	"./armasm": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		"highlight/armasm"
	],
	"./armasm.js": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		"highlight/armasm"
	],
	"./asciidoc": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		"highlight/asciidoc"
	],
	"./asciidoc.js": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		"highlight/asciidoc"
	],
	"./aspectj": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		"highlight/aspectj"
	],
	"./aspectj.js": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		"highlight/aspectj"
	],
	"./autohotkey": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		"highlight/autohotkey"
	],
	"./autohotkey.js": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		"highlight/autohotkey"
	],
	"./autoit": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		"highlight/autoit"
	],
	"./autoit.js": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		"highlight/autoit"
	],
	"./avrasm": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		"highlight/avrasm"
	],
	"./avrasm.js": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		"highlight/avrasm"
	],
	"./awk": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		"highlight/awk"
	],
	"./awk.js": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		"highlight/awk"
	],
	"./axapta": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		"highlight/axapta"
	],
	"./axapta.js": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		"highlight/axapta"
	],
	"./bash": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		"highlight/bash"
	],
	"./bash.js": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		"highlight/bash"
	],
	"./basic": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		"highlight/basic"
	],
	"./basic.js": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		"highlight/basic"
	],
	"./bnf": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		"highlight/bnf"
	],
	"./bnf.js": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		"highlight/bnf"
	],
	"./brainfuck": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		"highlight/brainfuck"
	],
	"./brainfuck.js": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		"highlight/brainfuck"
	],
	"./cal": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		"highlight/cal"
	],
	"./cal.js": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		"highlight/cal"
	],
	"./capnproto": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		"highlight/capnproto"
	],
	"./capnproto.js": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		"highlight/capnproto"
	],
	"./ceylon": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		"highlight/ceylon"
	],
	"./ceylon.js": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		"highlight/ceylon"
	],
	"./clean": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		"highlight/clean"
	],
	"./clean.js": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		"highlight/clean"
	],
	"./clojure": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		"highlight/clojure"
	],
	"./clojure-repl": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		"highlight/clojure-repl"
	],
	"./clojure-repl.js": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		"highlight/clojure-repl"
	],
	"./clojure.js": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		"highlight/clojure"
	],
	"./cmake": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		"highlight/cmake"
	],
	"./cmake.js": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		"highlight/cmake"
	],
	"./coffeescript": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		"highlight/coffeescript"
	],
	"./coffeescript.js": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		"highlight/coffeescript"
	],
	"./coq": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		"highlight/coq"
	],
	"./coq.js": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		"highlight/coq"
	],
	"./cos": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		"highlight/cos"
	],
	"./cos.js": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		"highlight/cos"
	],
	"./cpp": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		"highlight/cpp"
	],
	"./cpp.js": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		"highlight/cpp"
	],
	"./crmsh": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		"highlight/crmsh"
	],
	"./crmsh.js": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		"highlight/crmsh"
	],
	"./crystal": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		"highlight/crystal"
	],
	"./crystal.js": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		"highlight/crystal"
	],
	"./cs": [
		"./node_modules/highlight.js/lib/languages/cs.js",
		"highlight/cs"
	],
	"./cs.js": [
		"./node_modules/highlight.js/lib/languages/cs.js",
		"highlight/cs"
	],
	"./csp": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		"highlight/csp"
	],
	"./csp.js": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		"highlight/csp"
	],
	"./css": [
		"./node_modules/highlight.js/lib/languages/css.js",
		"highlight/css"
	],
	"./css.js": [
		"./node_modules/highlight.js/lib/languages/css.js",
		"highlight/css"
	],
	"./d": [
		"./node_modules/highlight.js/lib/languages/d.js",
		"highlight/d"
	],
	"./d.js": [
		"./node_modules/highlight.js/lib/languages/d.js",
		"highlight/d"
	],
	"./dart": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		"highlight/dart"
	],
	"./dart.js": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		"highlight/dart"
	],
	"./delphi": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		"highlight/delphi"
	],
	"./delphi.js": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		"highlight/delphi"
	],
	"./diff": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		"highlight/diff"
	],
	"./diff.js": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		"highlight/diff"
	],
	"./django": [
		"./node_modules/highlight.js/lib/languages/django.js",
		"highlight/django"
	],
	"./django.js": [
		"./node_modules/highlight.js/lib/languages/django.js",
		"highlight/django"
	],
	"./dns": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		"highlight/dns"
	],
	"./dns.js": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		"highlight/dns"
	],
	"./dockerfile": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		"highlight/dockerfile"
	],
	"./dockerfile.js": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		"highlight/dockerfile"
	],
	"./dos": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		"highlight/dos"
	],
	"./dos.js": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		"highlight/dos"
	],
	"./dsconfig": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		"highlight/dsconfig"
	],
	"./dsconfig.js": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		"highlight/dsconfig"
	],
	"./dts": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		"highlight/dts"
	],
	"./dts.js": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		"highlight/dts"
	],
	"./dust": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		"highlight/dust"
	],
	"./dust.js": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		"highlight/dust"
	],
	"./ebnf": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		"highlight/ebnf"
	],
	"./ebnf.js": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		"highlight/ebnf"
	],
	"./elixir": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		"highlight/elixir"
	],
	"./elixir.js": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		"highlight/elixir"
	],
	"./elm": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		"highlight/elm"
	],
	"./elm.js": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		"highlight/elm"
	],
	"./erb": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		"highlight/erb"
	],
	"./erb.js": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		"highlight/erb"
	],
	"./erlang": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		"highlight/erlang"
	],
	"./erlang-repl": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		"highlight/erlang-repl"
	],
	"./erlang-repl.js": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		"highlight/erlang-repl"
	],
	"./erlang.js": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		"highlight/erlang"
	],
	"./excel": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		"highlight/excel"
	],
	"./excel.js": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		"highlight/excel"
	],
	"./fix": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		"highlight/fix"
	],
	"./fix.js": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		"highlight/fix"
	],
	"./flix": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		"highlight/flix"
	],
	"./flix.js": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		"highlight/flix"
	],
	"./fortran": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		"highlight/fortran"
	],
	"./fortran.js": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		"highlight/fortran"
	],
	"./fsharp": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		"highlight/fsharp"
	],
	"./fsharp.js": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		"highlight/fsharp"
	],
	"./gams": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		"highlight/gams"
	],
	"./gams.js": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		"highlight/gams"
	],
	"./gauss": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		"highlight/gauss"
	],
	"./gauss.js": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		"highlight/gauss"
	],
	"./gcode": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		"highlight/gcode"
	],
	"./gcode.js": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		"highlight/gcode"
	],
	"./gherkin": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		"highlight/gherkin"
	],
	"./gherkin.js": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		"highlight/gherkin"
	],
	"./glsl": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		"highlight/glsl"
	],
	"./glsl.js": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		"highlight/glsl"
	],
	"./gml": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		"highlight/gml"
	],
	"./gml.js": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		"highlight/gml"
	],
	"./go": [
		"./node_modules/highlight.js/lib/languages/go.js",
		"highlight/go"
	],
	"./go.js": [
		"./node_modules/highlight.js/lib/languages/go.js",
		"highlight/go"
	],
	"./golo": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		"highlight/golo"
	],
	"./golo.js": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		"highlight/golo"
	],
	"./gradle": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		"highlight/gradle"
	],
	"./gradle.js": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		"highlight/gradle"
	],
	"./groovy": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		"highlight/groovy"
	],
	"./groovy.js": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		"highlight/groovy"
	],
	"./haml": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		"highlight/haml"
	],
	"./haml.js": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		"highlight/haml"
	],
	"./handlebars": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		"highlight/handlebars"
	],
	"./handlebars.js": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		"highlight/handlebars"
	],
	"./haskell": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		"highlight/haskell"
	],
	"./haskell.js": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		"highlight/haskell"
	],
	"./haxe": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		"highlight/haxe"
	],
	"./haxe.js": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		"highlight/haxe"
	],
	"./hsp": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		"highlight/hsp"
	],
	"./hsp.js": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		"highlight/hsp"
	],
	"./htmlbars": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		"highlight/htmlbars"
	],
	"./htmlbars.js": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		"highlight/htmlbars"
	],
	"./http": [
		"./node_modules/highlight.js/lib/languages/http.js",
		"highlight/http"
	],
	"./http.js": [
		"./node_modules/highlight.js/lib/languages/http.js",
		"highlight/http"
	],
	"./hy": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		"highlight/hy"
	],
	"./hy.js": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		"highlight/hy"
	],
	"./inform7": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		"highlight/inform7"
	],
	"./inform7.js": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		"highlight/inform7"
	],
	"./ini": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		"highlight/ini"
	],
	"./ini.js": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		"highlight/ini"
	],
	"./irpf90": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		"highlight/irpf90"
	],
	"./irpf90.js": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		"highlight/irpf90"
	],
	"./isbl": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		"highlight/isbl"
	],
	"./isbl.js": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		"highlight/isbl"
	],
	"./java": [
		"./node_modules/highlight.js/lib/languages/java.js",
		"highlight/java"
	],
	"./java.js": [
		"./node_modules/highlight.js/lib/languages/java.js",
		"highlight/java"
	],
	"./javascript": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		"highlight/javascript"
	],
	"./javascript.js": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		"highlight/javascript"
	],
	"./jboss-cli": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		"highlight/jboss-cli"
	],
	"./jboss-cli.js": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		"highlight/jboss-cli"
	],
	"./json": [
		"./node_modules/highlight.js/lib/languages/json.js",
		"highlight/json"
	],
	"./json.js": [
		"./node_modules/highlight.js/lib/languages/json.js",
		"highlight/json"
	],
	"./julia": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		"highlight/julia"
	],
	"./julia-repl": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		"highlight/julia-repl"
	],
	"./julia-repl.js": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		"highlight/julia-repl"
	],
	"./julia.js": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		"highlight/julia"
	],
	"./kotlin": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		"highlight/kotlin"
	],
	"./kotlin.js": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		"highlight/kotlin"
	],
	"./lasso": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		"highlight/lasso"
	],
	"./lasso.js": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		"highlight/lasso"
	],
	"./ldif": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		"highlight/ldif"
	],
	"./ldif.js": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		"highlight/ldif"
	],
	"./leaf": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		"highlight/leaf"
	],
	"./leaf.js": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		"highlight/leaf"
	],
	"./less": [
		"./node_modules/highlight.js/lib/languages/less.js",
		"highlight/less"
	],
	"./less.js": [
		"./node_modules/highlight.js/lib/languages/less.js",
		"highlight/less"
	],
	"./lisp": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		"highlight/lisp"
	],
	"./lisp.js": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		"highlight/lisp"
	],
	"./livecodeserver": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		"highlight/livecodeserver"
	],
	"./livecodeserver.js": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		"highlight/livecodeserver"
	],
	"./livescript": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		"highlight/livescript"
	],
	"./livescript.js": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		"highlight/livescript"
	],
	"./llvm": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		"highlight/llvm"
	],
	"./llvm.js": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		"highlight/llvm"
	],
	"./lsl": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		"highlight/lsl"
	],
	"./lsl.js": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		"highlight/lsl"
	],
	"./lua": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		"highlight/lua"
	],
	"./lua.js": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		"highlight/lua"
	],
	"./makefile": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		"highlight/makefile"
	],
	"./makefile.js": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		"highlight/makefile"
	],
	"./markdown": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		"highlight/markdown"
	],
	"./markdown.js": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		"highlight/markdown"
	],
	"./mathematica": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		"highlight/mathematica"
	],
	"./mathematica.js": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		"highlight/mathematica"
	],
	"./matlab": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		"highlight/matlab"
	],
	"./matlab.js": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		"highlight/matlab"
	],
	"./maxima": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		"highlight/maxima"
	],
	"./maxima.js": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		"highlight/maxima"
	],
	"./mel": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		"highlight/mel"
	],
	"./mel.js": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		"highlight/mel"
	],
	"./mercury": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		"highlight/mercury"
	],
	"./mercury.js": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		"highlight/mercury"
	],
	"./mipsasm": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		"highlight/mipsasm"
	],
	"./mipsasm.js": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		"highlight/mipsasm"
	],
	"./mizar": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		"highlight/mizar"
	],
	"./mizar.js": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		"highlight/mizar"
	],
	"./mojolicious": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		"highlight/mojolicious"
	],
	"./mojolicious.js": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		"highlight/mojolicious"
	],
	"./monkey": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		"highlight/monkey"
	],
	"./monkey.js": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		"highlight/monkey"
	],
	"./moonscript": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		"highlight/moonscript"
	],
	"./moonscript.js": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		"highlight/moonscript"
	],
	"./n1ql": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		"highlight/n1ql"
	],
	"./n1ql.js": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		"highlight/n1ql"
	],
	"./nginx": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		"highlight/nginx"
	],
	"./nginx.js": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		"highlight/nginx"
	],
	"./nimrod": [
		"./node_modules/highlight.js/lib/languages/nimrod.js",
		"highlight/nimrod"
	],
	"./nimrod.js": [
		"./node_modules/highlight.js/lib/languages/nimrod.js",
		"highlight/nimrod"
	],
	"./nix": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		"highlight/nix"
	],
	"./nix.js": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		"highlight/nix"
	],
	"./nsis": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		"highlight/nsis"
	],
	"./nsis.js": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		"highlight/nsis"
	],
	"./objectivec": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		"highlight/objectivec"
	],
	"./objectivec.js": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		"highlight/objectivec"
	],
	"./ocaml": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		"highlight/ocaml"
	],
	"./ocaml.js": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		"highlight/ocaml"
	],
	"./openscad": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		"highlight/openscad"
	],
	"./openscad.js": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		"highlight/openscad"
	],
	"./oxygene": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		"highlight/oxygene"
	],
	"./oxygene.js": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		"highlight/oxygene"
	],
	"./parser3": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		"highlight/parser3"
	],
	"./parser3.js": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		"highlight/parser3"
	],
	"./perl": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		"highlight/perl"
	],
	"./perl.js": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		"highlight/perl"
	],
	"./pf": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		"highlight/pf"
	],
	"./pf.js": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		"highlight/pf"
	],
	"./pgsql": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		"highlight/pgsql"
	],
	"./pgsql.js": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		"highlight/pgsql"
	],
	"./php": [
		"./node_modules/highlight.js/lib/languages/php.js",
		"highlight/php"
	],
	"./php.js": [
		"./node_modules/highlight.js/lib/languages/php.js",
		"highlight/php"
	],
	"./plaintext": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		"highlight/plaintext"
	],
	"./plaintext.js": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		"highlight/plaintext"
	],
	"./pony": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		"highlight/pony"
	],
	"./pony.js": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		"highlight/pony"
	],
	"./powershell": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		"highlight/powershell"
	],
	"./powershell.js": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		"highlight/powershell"
	],
	"./processing": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		"highlight/processing"
	],
	"./processing.js": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		"highlight/processing"
	],
	"./profile": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		"highlight/profile"
	],
	"./profile.js": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		"highlight/profile"
	],
	"./prolog": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		"highlight/prolog"
	],
	"./prolog.js": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		"highlight/prolog"
	],
	"./properties": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		"highlight/properties"
	],
	"./properties.js": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		"highlight/properties"
	],
	"./protobuf": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		"highlight/protobuf"
	],
	"./protobuf.js": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		"highlight/protobuf"
	],
	"./puppet": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		"highlight/puppet"
	],
	"./puppet.js": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		"highlight/puppet"
	],
	"./purebasic": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		"highlight/purebasic"
	],
	"./purebasic.js": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		"highlight/purebasic"
	],
	"./python": [
		"./node_modules/highlight.js/lib/languages/python.js",
		"highlight/python"
	],
	"./python.js": [
		"./node_modules/highlight.js/lib/languages/python.js",
		"highlight/python"
	],
	"./q": [
		"./node_modules/highlight.js/lib/languages/q.js",
		"highlight/q"
	],
	"./q.js": [
		"./node_modules/highlight.js/lib/languages/q.js",
		"highlight/q"
	],
	"./qml": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		"highlight/qml"
	],
	"./qml.js": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		"highlight/qml"
	],
	"./r": [
		"./node_modules/highlight.js/lib/languages/r.js",
		"highlight/r"
	],
	"./r.js": [
		"./node_modules/highlight.js/lib/languages/r.js",
		"highlight/r"
	],
	"./reasonml": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		"highlight/reasonml"
	],
	"./reasonml.js": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		"highlight/reasonml"
	],
	"./rib": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		"highlight/rib"
	],
	"./rib.js": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		"highlight/rib"
	],
	"./roboconf": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		"highlight/roboconf"
	],
	"./roboconf.js": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		"highlight/roboconf"
	],
	"./routeros": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		"highlight/routeros"
	],
	"./routeros.js": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		"highlight/routeros"
	],
	"./rsl": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		"highlight/rsl"
	],
	"./rsl.js": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		"highlight/rsl"
	],
	"./ruby": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		"highlight/ruby"
	],
	"./ruby.js": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		"highlight/ruby"
	],
	"./ruleslanguage": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		"highlight/ruleslanguage"
	],
	"./ruleslanguage.js": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		"highlight/ruleslanguage"
	],
	"./rust": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		"highlight/rust"
	],
	"./rust.js": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		"highlight/rust"
	],
	"./sas": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		"highlight/sas"
	],
	"./sas.js": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		"highlight/sas"
	],
	"./scala": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		"highlight/scala"
	],
	"./scala.js": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		"highlight/scala"
	],
	"./scheme": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		"highlight/scheme"
	],
	"./scheme.js": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		"highlight/scheme"
	],
	"./scilab": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		"highlight/scilab"
	],
	"./scilab.js": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		"highlight/scilab"
	],
	"./scss": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		"highlight/scss"
	],
	"./scss.js": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		"highlight/scss"
	],
	"./shell": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		"highlight/shell"
	],
	"./shell.js": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		"highlight/shell"
	],
	"./smali": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		"highlight/smali"
	],
	"./smali.js": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		"highlight/smali"
	],
	"./smalltalk": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		"highlight/smalltalk"
	],
	"./smalltalk.js": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		"highlight/smalltalk"
	],
	"./sml": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		"highlight/sml"
	],
	"./sml.js": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		"highlight/sml"
	],
	"./sqf": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		"highlight/sqf"
	],
	"./sqf.js": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		"highlight/sqf"
	],
	"./sql": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		"highlight/sql"
	],
	"./sql.js": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		"highlight/sql"
	],
	"./stan": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		"highlight/stan"
	],
	"./stan.js": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		"highlight/stan"
	],
	"./stata": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		"highlight/stata"
	],
	"./stata.js": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		"highlight/stata"
	],
	"./step21": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		"highlight/step21"
	],
	"./step21.js": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		"highlight/step21"
	],
	"./stylus": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		"highlight/stylus"
	],
	"./stylus.js": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		"highlight/stylus"
	],
	"./subunit": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		"highlight/subunit"
	],
	"./subunit.js": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		"highlight/subunit"
	],
	"./swift": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		"highlight/swift"
	],
	"./swift.js": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		"highlight/swift"
	],
	"./taggerscript": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		"highlight/taggerscript"
	],
	"./taggerscript.js": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		"highlight/taggerscript"
	],
	"./tap": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		"highlight/tap"
	],
	"./tap.js": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		"highlight/tap"
	],
	"./tcl": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		"highlight/tcl"
	],
	"./tcl.js": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		"highlight/tcl"
	],
	"./tex": [
		"./node_modules/highlight.js/lib/languages/tex.js",
		"highlight/tex"
	],
	"./tex.js": [
		"./node_modules/highlight.js/lib/languages/tex.js",
		"highlight/tex"
	],
	"./thrift": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		"highlight/thrift"
	],
	"./thrift.js": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		"highlight/thrift"
	],
	"./tp": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		"highlight/tp"
	],
	"./tp.js": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		"highlight/tp"
	],
	"./twig": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		"highlight/twig"
	],
	"./twig.js": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		"highlight/twig"
	],
	"./typescript": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		"highlight/typescript"
	],
	"./typescript.js": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		"highlight/typescript"
	],
	"./vala": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		"highlight/vala"
	],
	"./vala.js": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		"highlight/vala"
	],
	"./vbnet": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		"highlight/vbnet"
	],
	"./vbnet.js": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		"highlight/vbnet"
	],
	"./vbscript": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		"highlight/vbscript"
	],
	"./vbscript-html": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		"highlight/vbscript-html"
	],
	"./vbscript-html.js": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		"highlight/vbscript-html"
	],
	"./vbscript.js": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		"highlight/vbscript"
	],
	"./verilog": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		"highlight/verilog"
	],
	"./verilog.js": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		"highlight/verilog"
	],
	"./vhdl": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		"highlight/vhdl"
	],
	"./vhdl.js": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		"highlight/vhdl"
	],
	"./vim": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		"highlight/vim"
	],
	"./vim.js": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		"highlight/vim"
	],
	"./x86asm": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		"highlight/x86asm"
	],
	"./x86asm.js": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		"highlight/x86asm"
	],
	"./xl": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		"highlight/xl"
	],
	"./xl.js": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		"highlight/xl"
	],
	"./xml": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		"highlight/xml"
	],
	"./xml.js": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		"highlight/xml"
	],
	"./xquery": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		"highlight/xquery"
	],
	"./xquery.js": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		"highlight/xquery"
	],
	"./yaml": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		"highlight/yaml"
	],
	"./yaml.js": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		"highlight/yaml"
	],
	"./zephir": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		"highlight/zephir"
	],
	"./zephir.js": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		"highlight/zephir"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "collision-resolve-dialog",
      attrs: { id: "resolve-conflicts" }
    },
    [
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.$emit("resolveUseThisVersion")
            }
          }
        },
        [
          _vm._v(
            "\n\t\t" + _vm._s(_vm.t("text", "Use current version")) + "\n\t"
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.$emit("resolveUseServerVersion")
            }
          }
        },
        [
          _vm._v(
            "\n\t\t" + _vm._s(_vm.t("text", "Use the saved version")) + "\n\t"
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { attrs: { id: "editor-container" } },
    [
      _vm.currentSession && _vm.active
        ? _c("div", [
            _vm.hasSyncCollission
              ? _c("p", { staticClass: "msg icon-error" }, [
                  _vm._v(
                    "\n      " +
                      _vm._s(
                        _vm.t(
                          "text",
                          "The document has been changed outside of the editor. The changes cannot be applied."
                        )
                      ) +
                      "\n    "
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.hasConnectionIssue
              ? _c("p", { staticClass: "msg icon-error" }, [
                  _vm._v(
                    "\n      " +
                      _vm._s(
                        _vm.t(
                          "text",
                          "Network connection error: Could not connect to the document"
                        )
                      ) +
                      "\n      "
                  ),
                  _c(
                    "a",
                    {
                      staticClass: "button primary",
                      on: { click: _vm.reconnect }
                    },
                    [_vm._v(_vm._s(_vm.t("text", "Retry")))]
                  )
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.currentSession && _vm.active
        ? _c(
            "div",
            {
              class: {
                "has-conflicts": _vm.hasSyncCollission,
                "icon-loading": !_vm.initialLoading,
                richEditor: _vm.isRichEditor
              },
              attrs: { id: "editor-wrapper" }
            },
            [
              _c(
                "div",
                { attrs: { id: "editor" } },
                [
                  !_vm.syncError && !_vm.readOnly
                    ? _c(
                        "MenuBar",
                        {
                          ref: "menubar",
                          attrs: {
                            editor: _vm.tiptap,
                            "is-rich-editor": _vm.isRichEditor
                          }
                        },
                        [
                          _vm.currentSession && _vm.active
                            ? _c(
                                "div",
                                { attrs: { id: "editor-session-list" } },
                                [
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: _vm.lastSavedStatusTooltip,
                                          expression: "lastSavedStatusTooltip"
                                        }
                                      ],
                                      staticClass: "save-status",
                                      class: _vm.lastSavedStatusClass
                                    },
                                    [
                                      _vm._v(
                                        "\n            " +
                                          _vm._s(_vm.lastSavedStatus) +
                                          "\n          "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "SessionList",
                                    {
                                      attrs: { sessions: _vm.filteredSessions }
                                    },
                                    [
                                      _vm.isPublic &&
                                      _vm.currentSession.guestName
                                        ? _c("GuestNameDialog", {
                                            attrs: {
                                              "sync-service": _vm.syncService
                                            }
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "editor__content" },
                    [
                      !_vm.readOnly && _vm.isRichEditor
                        ? _c("MenuBubble", { attrs: { editor: _vm.tiptap } })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("EditorContent", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.initialLoading,
                            expression: "initialLoading"
                          }
                        ],
                        attrs: { editor: _vm.tiptap }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.hasSyncCollission
                ? _c("ReadOnlyEditor", {
                    attrs: {
                      content: _vm.syncError.data.outsideChange,
                      "is-rich-editor": _vm.isRichEditor
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.hasSyncCollission && !_vm.readOnly
        ? _c("CollisionResolveDialog", {
            on: {
              resolveUseThisVersion: _vm.resolveUseThisVersion,
              resolveUseServerVersion: _vm.resolveUseServerVersion
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _vm.editor
    ? _c("EditorContent", {
        attrs: { id: "read-only-editor", editor: _vm.editor }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "image",
      class: { "icon-loading": !_vm.loaded },
      attrs: { "data-src": _vm.src }
    },
    [
      _vm.imageLoaded && _vm.isSupportedImage
        ? _c(
            "div",
            [
              _c("transition", { attrs: { name: "fade" } }, [
                _c("img", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.loaded,
                      expression: "loaded"
                    }
                  ],
                  staticClass: "image__main",
                  attrs: { src: _vm.src },
                  on: { load: _vm.onLoaded }
                })
              ]),
              _vm._v(" "),
              _c("transition", { attrs: { name: "fade" } }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loaded,
                        expression: "loaded"
                      }
                    ],
                    staticClass: "image__caption"
                  },
                  [
                    _c("input", {
                      ref: "altInput",
                      attrs: { type: "text" },
                      domProps: { value: _vm.alt },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.updateAlt()
                        }
                      }
                    })
                  ]
                )
              ])
            ],
            1
          )
        : _c(
            "div",
            { staticClass: "image__placeholder" },
            [
              _c("transition", { attrs: { name: "fade" } }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loaded,
                        expression: "loaded"
                      }
                    ],
                    staticClass: "image__main"
                  },
                  [
                    _c("div", {
                      staticClass: "icon-image",
                      style: _vm.mimeIcon
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: _vm.internalLinkOrImage,
                            target: "_blank"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.isSupportedImage
                                ? _vm.t("text", "Show image")
                                : _vm.t("text", "Show file")
                            )
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]),
              _c("transition", { attrs: { name: "fade" } }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loaded,
                        expression: "loaded"
                      }
                    ],
                    staticClass: "image__caption"
                  },
                  [
                    _c("input", {
                      ref: "altInput",
                      attrs: { type: "text" },
                      domProps: { value: _vm.alt },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.updateAlt()
                        }
                      }
                    })
                  ]
                )
              ])
            ],
            1
          )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1ecfe32a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2f8b1060", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=2&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=2&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=2&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d8778206", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a3ac3790", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2ff9b55c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("fbd72742", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/EditorFactory.js":
/*!******************************!*\
  !*** ./src/EditorFactory.js ***!
  \******************************/
/*! exports provided: default, createEditor, loadSyntaxHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditor", function() { return createEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSyntaxHighlight", function() { return loadSyntaxHighlight; });
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var _reactivepad_prosemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reactivepad/prosemirror */ "./node_modules/@reactivepad/prosemirror/es/index.js");
/* harmony import */ var _marks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marks */ "./src/marks/index.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodes */ "./src/nodes/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var oldCreateNodes = tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"].prototype.createNodes;

tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"].prototype.createNodes = function () {
  var nodes = oldCreateNodes.apply(this, arguments);
  return _objectSpread({}, nodes, {}, _reactivepad_prosemirror__WEBPACK_IMPORTED_MODULE_2__["nodes"]);
};

var oldCreatePlugins = tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"].prototype.createPlugins;

tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"].prototype.createPlugins = function () {
  var plugins = oldCreatePlugins.apply(this, arguments);
  return [].concat(_toConsumableArray(plugins), _toConsumableArray(this.options.proseMirrorPlugins));
};

var loadSyntaxHighlight =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(language) {
    var languages, modules, i, lang;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            languages = [language];
            modules = {};
            i = 0;

          case 3:
            if (!(i < languages.length)) {
              _context.next = 17;
              break;
            }

            _context.prev = 4;
            _context.next = 7;
            return __webpack_require__("./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$")("./" + languages[i]);

          case 7:
            lang = _context.sent;
            modules[languages[i]] = lang.default;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", undefined);

          case 14:
            i++;
            _context.next = 3;
            break;

          case 17:
            if (!(Object.keys(modules).length === 0 && modules.constructor === Object)) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", undefined);

          case 19:
            return _context.abrupt("return", {
              languages: modules
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function loadSyntaxHighlight(_x) {
    return _ref.apply(this, arguments);
  };
}();

var createEditor = function createEditor(_ref2) {
  var content = _ref2.content,
      onInit = _ref2.onInit,
      onUpdate = _ref2.onUpdate,
      extensions = _ref2.extensions,
      enableRichEditing = _ref2.enableRichEditing,
      languages = _ref2.languages;
  var richEditingExtensions = [];

  if (enableRichEditing) {
    richEditingExtensions = [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Heading"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Code"](), new _marks__WEBPACK_IMPORTED_MODULE_3__["Strong"](), new _marks__WEBPACK_IMPORTED_MODULE_3__["Italic"](), new _marks__WEBPACK_IMPORTED_MODULE_3__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Link"](), new _nodes__WEBPACK_IMPORTED_MODULE_4__["Image"]()];
  } else {
    richEditingExtensions = [new _nodes__WEBPACK_IMPORTED_MODULE_4__["PlainTextDocument"](), new tiptap__WEBPACK_IMPORTED_MODULE_0__["Text"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlockHighlight"](_objectSpread({}, languages))];
  }

  extensions = extensions || [];
  var rpPlugin = Object(_reactivepad_prosemirror__WEBPACK_IMPORTED_MODULE_2__["buildPlugin"])({
    tableRenderDelay: 3000
  });
  return new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
    content: content,
    onInit: onInit,
    onUpdate: onUpdate,
    extensions: [].concat(_toConsumableArray(richEditingExtensions), [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["History"]()]).concat(extensions),
    useBuiltInExtensions: enableRichEditing,
    proseMirrorPlugins: [rpPlugin.plugin]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createEditor);


/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue":
/*!***************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& */ "./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&");
/* harmony import */ var _CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollisionResolveDialog.vue?vue&type=script&lang=js& */ "./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& */ "./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ffe7972",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/CollisionResolveDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./CollisionResolveDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/EditorWrapper.vue":
/*!******************************************!*\
  !*** ./src/components/EditorWrapper.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& */ "./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&");
/* harmony import */ var _EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=script&lang=js& */ "./src/components/EditorWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditorWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=style&index=0&lang=css& */ "./src/components/EditorWrapper.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _EditorWrapper_vue_vue_type_style_index_1_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss& */ "./src/components/EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss&");
/* harmony import */ var _EditorWrapper_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=style&index=2&lang=scss& */ "./src/components/EditorWrapper.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "76135766",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/EditorWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=1&id=76135766&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=style&index=2&lang=scss&":
/*!****************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=style&index=2&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue":
/*!*******************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&scoped=true& */ "./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&scoped=true&");
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=script&lang=js& */ "./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReadOnlyEditor_vue_vue_type_style_index_0_id_41c92d1f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss& */ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "41c92d1f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ReadOnlyEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_id_41c92d1f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&id=41c92d1f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_id_41c92d1f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_id_41c92d1f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_id_41c92d1f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_id_41c92d1f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_id_41c92d1f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/extensions/Keymap.js":
/*!**********************************!*\
  !*** ./src/extensions/Keymap.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keymap; });
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


var Keymap =
/*#__PURE__*/
function (_Extension) {
  _inherits(Keymap, _Extension);

  function Keymap() {
    _classCallCheck(this, Keymap);

    return _possibleConstructorReturn(this, _getPrototypeOf(Keymap).apply(this, arguments));
  }

  _createClass(Keymap, [{
    key: "keys",
    value: function keys(_ref) {
      var schema = _ref.schema;
      return this.options;
    }
  }, {
    key: "name",
    get: function get() {
      return 'save';
    }
  }]);

  return Keymap;
}(tiptap__WEBPACK_IMPORTED_MODULE_0__["Extension"]);



/***/ }),

/***/ "./src/extensions/index.js":
/*!*********************************!*\
  !*** ./src/extensions/index.js ***!
  \*********************************/
/*! exports provided: Keymap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Keymap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keymap */ "./src/extensions/Keymap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keymap", function() { return _Keymap__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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



/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: documentReady, endpointUrl, getRandomGuestName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentReady", function() { return documentReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpointUrl", function() { return endpointUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomGuestName", function() { return getRandomGuestName; });
/* harmony import */ var nextcloud_server_dist_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextcloud-server/dist/router */ "./node_modules/nextcloud-server/dist/router.js");
/* harmony import */ var nextcloud_server_dist_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextcloud_server_dist_router__WEBPACK_IMPORTED_MODULE_0__);
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


var documentReady = function documentReady(callback) {
  var fn = function fn() {
    return setTimeout(callback, 0);
  };

  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

var _baseUrl = Object(nextcloud_server_dist_router__WEBPACK_IMPORTED_MODULE_0__["generateUrl"])('/apps/text');

var endpointUrl = function endpointUrl(endpoint) {
  var isPublic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isPublic) {
    return "".concat(_baseUrl, "/public/").concat(endpoint);
  }

  return "".concat(_baseUrl, "/").concat(endpoint);
};

var randomGuestNames = ['Artichoke', 'Arugula', 'Asparagus', 'Avocado', 'Bamboo Shoot', 'Bean Sprout', 'Bean', 'Beet', 'Belgian Endive', 'Bell Pepper', 'Bitter Melon', 'Bitter Gourd', 'Bok Choy', 'Broccoli', 'Brussels Sprout', 'Burdock Root', 'Cabbage', 'Calabash', 'Caper', 'Carrot', 'Cassava', 'Cauliflower', 'Celery', 'Celery Root', 'Celtuce', 'Chayote', 'Chinese Broccoli', 'Corn', 'Baby Corn', 'Cucumber', 'English Cucumber', 'Gherkin', 'Pickling Cucumber', 'Daikon Radish', 'Edamame', 'Eggplant', 'Elephant Garlic', 'Endive', 'Curly', 'Escarole', 'Fennel', 'Fiddlehead', 'Galangal', 'Garlic', 'Ginger', 'Grape Leave', 'Green Bean', 'Wax Bean', 'Green', 'Amaranth Leave', 'Beet Green', 'Collard Green', 'Dandelion Green', 'Kale', 'Kohlrabi Green', 'Mustard Green', 'Rapini', 'Spinach', 'Swiss Chard', 'Turnip Green', 'Hearts of Palm', 'Horseradish', 'Jerusalem Artichoke', 'Jícama', 'Kale', 'Curly', 'Lacinato', 'Ornamental', 'Kohlrabi', 'Leeks', 'Lemongrass', 'Lettuce', 'Butterhead', 'Iceberg', 'Leaf', 'Romaine', 'Lotus Root', 'Lotus Seed', 'Mushroom', 'Napa Cabbage', 'Nopales', 'Okra', 'Olive', 'Onion', 'Green Onion', 'Parsley', 'Parsley Root', 'Parsnip', 'Pepper', 'Plantain', 'Potato', 'Pumpkin', 'Purslane', 'Radicchio', 'Radish', 'Rutabaga', 'Shallots', 'Spinach', 'Squash', 'Sweet Potato', 'Swiss Chard', 'Taro', 'Tomatillo', 'Tomato', 'Turnip', 'Water Chestnut', 'Water Spinach', 'Watercress', 'Winter Melon', 'Yams', 'Zucchini'];

var getRandomGuestName = function getRandomGuestName() {
  return randomGuestNames[Math.floor(Math.random() * randomGuestNames.length)];
};



/***/ }),

/***/ "./src/helpers/mappings.js":
/*!*********************************!*\
  !*** ./src/helpers/mappings.js ***!
  \*********************************/
/*! exports provided: default, extensionHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionHighlight", function() { return extensionHighlight; });
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
var extensionHighlight = {
  py: 'python',
  gyp: 'python',
  wsgi: 'python',
  htm: 'html',
  xhtml: 'html',
  erl: 'erlang',
  jsp: 'java',
  pl: 'perl',
  rss: 'xml',
  atom: 'xml',
  xsl: 'xml',
  plist: 'xml',
  rb: 'ruby',
  builder: 'ruby',
  gemspec: 'ruby',
  podspec: 'ruby',
  thor: 'ruby',
  diff: 'patch',
  hs: 'haskell',
  icl: 'haskell',
  php3: 'php',
  php4: 'php',
  php5: 'php',
  php6: 'php',
  sh: 'bash',
  zsh: 'bash',
  st: 'smalltalk',
  as: 'actionscript',
  apacheconf: 'apache',
  osacript: 'applescript',
  b: 'brainfuck',
  bf: 'brainfuck',
  clj: 'clojure',
  'cmake.in': 'cmake',
  coffee: 'coffeescript',
  cson: 'coffescript',
  iced: 'coffescript',
  c: 'cpp',
  'c++': 'cpp',
  'h++': 'cpp',
  hh: 'cpp',
  jinja: 'django',
  bat: 'dos',
  cmd: 'dos',
  fs: 'fsharp',
  hbs: 'handlebars',
  'html.hbs': 'handlebars',
  'html.handlebars': 'handlebars',
  'sublime_metrics': 'json',
  'sublime_session': 'json',
  'sublime-keymap': 'json',
  'sublime-mousemap': 'json',
  'sublime-project': 'json',
  'sublime-settings': 'json',
  'sublime-workspace': 'json',
  mk: 'makefile',
  mak: 'makefile',
  md: 'markdown',
  mkdown: 'markdown',
  mkd: 'markdown',
  nginxconf: 'nginx',
  m: 'objectivec',
  mm: 'objectivec',
  ml: 'ocaml',
  rs: 'rust',
  sci: 'scilab',
  vb: 'vbnet',
  vbs: 'vbscript'
};
/* harmony default export */ __webpack_exports__["default"] = (extensionHighlight);


/***/ }),

/***/ "./src/marks/index.js":
/*!****************************!*\
  !*** ./src/marks/index.js ***!
  \****************************/
/*! exports provided: Strong, Italic, Strike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return Strong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Italic", function() { return Italic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strike", function() { return Strike; });
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
 * This file maps prosemirror mark names to tiptap classes,
 * so we can reuse the prosemirror-markdown default parser for now
 */

var Strong =
/*#__PURE__*/
function (_Bold) {
  _inherits(Strong, _Bold);

  function Strong() {
    _classCallCheck(this, Strong);

    return _possibleConstructorReturn(this, _getPrototypeOf(Strong).apply(this, arguments));
  }

  _createClass(Strong, [{
    key: "name",
    get: function get() {
      return 'strong';
    }
  }]);

  return Strong;
}(tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__["Bold"]);

var Italic =
/*#__PURE__*/
function (_TipTapItalic) {
  _inherits(Italic, _TipTapItalic);

  function Italic() {
    _classCallCheck(this, Italic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Italic).apply(this, arguments));
  }

  _createClass(Italic, [{
    key: "name",
    get: function get() {
      return 'em';
    }
  }]);

  return Italic;
}(tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__["Italic"]);

var Strike =
/*#__PURE__*/
function (_TipTapStrike) {
  _inherits(Strike, _TipTapStrike);

  function Strike() {
    _classCallCheck(this, Strike);

    return _possibleConstructorReturn(this, _getPrototypeOf(Strike).apply(this, arguments));
  }

  _createClass(Strike, [{
    key: "schema",
    get: function get() {
      return {
        parseDOM: [{
          tag: 's'
        }, {
          tag: 'del'
        }, {
          tag: 'strike'
        }, {
          style: 'text-decoration',
          getAttrs: function getAttrs(value) {
            return value === 'line-through';
          }
        }],
        toDOM: function toDOM() {
          return ['s', 0];
        },
        toMarkdown: {
          open: '~~',
          close: '~~',
          mixable: true,
          expelEnclosingWhitespace: true
        }
      };
    }
  }]);

  return Strike;
}(tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__["Strike"]);
/** Strike is currently unsupported by prosemirror-markdown */




/***/ }),

/***/ "./src/mixins/isMobile.js":
/*!********************************!*\
  !*** ./src/mixins/isMobile.js ***!
  \********************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isMobile: this._isMobile()
    };
  },
  beforeMount: function beforeMount() {
    window.addEventListener('resize', this._onResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this._onResize);
  },
  methods: {
    _onResize: function _onResize() {
      // Update mobile mode
      this.isMobile = this._isMobile();
    },
    _isMobile: function _isMobile() {
      // check if content width is under 768px
      return document.documentElement.clientWidth < 768;
    }
  }
});

/***/ }),

/***/ "./src/nodes/Image.js":
/*!****************************!*\
  !*** ./src/nodes/Image.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var _ImageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageView */ "./src/nodes/ImageView.vue");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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



var Image =
/*#__PURE__*/
function (_TiptapImage) {
  _inherits(Image, _TiptapImage);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "view",
    get: function get() {
      return _ImageView__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }, {
    key: "schema",
    get: function get() {
      return _objectSpread({}, _get(_getPrototypeOf(Image.prototype), "schema", this), {
        selectable: false
      });
    }
  }]);

  return Image;
}(tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__["Image"]);



/***/ }),

/***/ "./src/nodes/ImageView.vue":
/*!*********************************!*\
  !*** ./src/nodes/ImageView.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& */ "./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&");
/* harmony import */ var _ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageView.vue?vue&type=script&lang=js& */ "./src/nodes/ImageView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& */ "./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "336b1e4e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/nodes/ImageView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/nodes/ImageView.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/nodes/ImageView.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ImageView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/nodes/PlainTextDocument.js":
/*!****************************************!*\
  !*** ./src/nodes/PlainTextDocument.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlainTextDocument; });
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-commands */ "./node_modules/tiptap-commands/dist/commands.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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



var PlainTextDocument =
/*#__PURE__*/
function (_Node) {
  _inherits(PlainTextDocument, _Node);

  function PlainTextDocument() {
    _classCallCheck(this, PlainTextDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlainTextDocument).apply(this, arguments));
  }

  _createClass(PlainTextDocument, [{
    key: "keys",
    value: function keys() {
      var _this = this;

      return {
        Tab: function Tab(state) {
          Object(tiptap_commands__WEBPACK_IMPORTED_MODULE_1__["insertText"])('\t')(state, _this.editor.view.dispatch, _this.editor.view);
          return true;
        }
      };
    }
  }, {
    key: "name",
    get: function get() {
      return 'doc';
    }
  }, {
    key: "schema",
    get: function get() {
      return {
        content: 'block'
      };
    }
  }]);

  return PlainTextDocument;
}(tiptap__WEBPACK_IMPORTED_MODULE_0__["Node"]);



/***/ }),

/***/ "./src/nodes/index.js":
/*!****************************!*\
  !*** ./src/nodes/index.js ***!
  \****************************/
/*! exports provided: Image, PlainTextDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/nodes/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PlainTextDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlainTextDocument */ "./src/nodes/PlainTextDocument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlainTextDocument", function() { return _PlainTextDocument__WEBPACK_IMPORTED_MODULE_1__["default"]; });

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




/***/ }),

/***/ "./src/services/PollingBackend.js":
/*!****************************************!*\
  !*** ./src/services/PollingBackend.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextcloud-axios */ "./node_modules/nextcloud-axios/dist/client.js");
/* harmony import */ var nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _SyncService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SyncService */ "./src/services/SyncService.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/collab.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




/**
 * Minimum inverval to refetch the document changes
 * @type {number}
 */

var FETCH_INTERVAL = 300;
/**
 * Maximum interval between refetches of document state if multiple users have joined
 * @type {number}
 */

var FETCH_INTERVAL_MAX = 5000;
/**
 * Interval to check for changes when there is only one user joined
 * @type {number}
 */

var FETCH_INTERVAL_SINGLE_EDITOR = 5000;
var MIN_PUSH_RETRY = 500;
var MAX_PUSH_RETRY = 10000;
/* Timeout after that a PUSH_FAILURE error is emitted */

var WARNING_PUSH_RETRY = 5000;
/* Maximum number of retries for fetching before emitting a connection error */

var MAX_RETRY_FETCH_COUNT = 5;
/* Timeout for sessions to be marked as disconnected */

var COLLABORATOR_DISCONNECT_TIME = 20;

var PollingBackend =
/*#__PURE__*/
function () {
  function PollingBackend(authority) {
    _classCallCheck(this, PollingBackend);

    /** @type SyncService */
    this._authority = authority;
    this.fetchInterval = FETCH_INTERVAL;
    this.retryTime = MIN_PUSH_RETRY;
    this.lock = false;
    this.fetchRetryCounter = 0;
  }

  _createClass(PollingBackend, [{
    key: "connect",
    value: function connect() {
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInterval);
    }
  }, {
    key: "_isPublic",
    value: function _isPublic() {
      return !!this._authority.options.shareToken;
    }
  }, {
    key: "forceSave",
    value: function forceSave() {
      this._forcedSave = true;
      this.fetchSteps();
    }
  }, {
    key: "save",
    value: function save() {
      this._manualSave = true;
      this.fetchSteps();
    }
  }, {
    key: "fetchSteps",
    value: function fetchSteps() {
      this._fetchSteps();
    }
    /**
     * This method is only called though the timer
     */

  }, {
    key: "_fetchSteps",
    value: function _fetchSteps() {
      var _this = this;

      if (this.lock || !this.fetcher) {
        return;
      }

      this.lock = true;
      var autosaveContent;

      if (this._forcedSave || this._manualSave || !Object(prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__["sendableSteps"])(this._authority.state) && this._authority._getVersion() !== this._authority.document.lastSavedVersion) {
        autosaveContent = this._authority._getContent();
      }

      nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["endpointUrl"])('session/sync', this._isPublic()), {
        documentId: this._authority.document.id,
        sessionId: this._authority.session.id,
        sessionToken: this._authority.session.token,
        version: this._authority._getVersion(),
        autosaveContent: autosaveContent,
        force: !!this._forcedSave,
        manualSave: !!this._manualSave,
        token: this._authority.options.shareToken,
        filePath: this._authority.options.filePath
      }).then(function (response) {
        _this.fetchRetryCounter = 0;

        if (_this._authority.document.lastSavedVersion < response.data.document.lastSavedVersion) {
          console.debug('Saved document', response.data.document);

          _this._authority.emit('save', {
            document: response.data.document,
            sessions: response.data.sessions
          });
        }

        _this._authority.emit('change', {
          document: response.data.document,
          sessions: response.data.sessions
        });

        _this._authority.document = response.data.document;
        _this._authority.sessions = response.data.sessions;

        if (response.data.steps.length === 0) {
          _this.lock = false;

          if (response.data.sessions.filter(function (session) {
            return session.lastContact > Date.now() / 1000 - COLLABORATOR_DISCONNECT_TIME;
          }).length < 2) {
            _this.maximumRefetchTimer();
          } else {
            _this.increaseRefetchTimer();
          }

          _this._authority.emit('stateChange', {
            dirty: false
          });

          _this._authority.emit('stateChange', {
            initialLoading: true
          });

          return;
        }

        _this._authority._receiveSteps(response.data);

        _this.lock = false;
        _this._forcedSave = false;

        _this.resetRefetchTimer();
      }).catch(function (e) {
        _this.lock = false;

        if (!e.response || e.code === 'ECONNABORTED') {
          if (_this.fetchRetryCounter++ >= MAX_RETRY_FETCH_COUNT) {
            console.error('[PollingBackend:fetchSteps] Network error when fetching steps, emitting CONNECTION_FAILED');

            _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].CONNECTION_FAILED, {});
          } else {
            console.error("[PollingBackend:fetchSteps] Network error when fetching steps, retry ".concat(_this.fetchRetryCounter));
          }
        } else if (e.response.status === 409 && e.response.data.document.currentVersion === _this._authority.document.currentVersion) {
          // Only emit conflict event if we have synced until the latest version
          console.error('Conflict during file save, please resolve');

          _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].SAVE_COLLISSION, {
            outsideChange: e.response.data.outsideChange
          });
        } else if (e.response.status === 403) {
          _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].CONNECTION_FAILED, {});
        } else {
          console.error('Failed to fetch steps due to other reason', e);
        }
      });
      this._manualSave = false;
      this._forcedSave = false;
    }
  }, {
    key: "sendSteps",
    value: function sendSteps(_sendable) {
      var _this2 = this;

      this._authority.emit('stateChange', {
        dirty: true
      });

      if (this.lock) {
        setTimeout(function () {
          _this2._authority.sendSteps();
        }, 100);
        return;
      }

      this.lock = true;
      var sendable = typeof _sendable === 'function' ? _sendable() : _sendable;
      var steps = sendable.steps;
      nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["endpointUrl"])('session/push', !!this._authority.options.shareToken), {
        documentId: this._authority.document.id,
        sessionId: this._authority.session.id,
        sessionToken: this._authority.session.token,
        steps: steps.map(function (s) {
          return s.toJSON ? s.toJSON() : s;
        }) || [],
        version: sendable.version,
        token: this._authority.options.shareToken,
        filePath: this._authority.options.filePath
      }).then(function (response) {
        _this2.carefulRetryReset();

        _this2.lock = false;

        _this2.fetchSteps();
      }).catch(function (e) {
        console.error('failed to apply steps due to collission, retrying');
        _this2.lock = false;

        if (!e.response || e.code === 'ECONNABORTED') {
          _this2._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].CONNECTION_FAILED, {});

          return;
        } else if (e.response.status === 403 && e.response.data.document.currentVersion === _this2._authority.document.currentVersion) {
          // Only emit conflict event if we have synced until the latest version
          _this2._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].PUSH_FAILURE, {});

          OC.Notification.showTemporary('Changes could not be sent yet');
        }

        _this2.fetchSteps();

        _this2.carefulRetry();
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      clearInterval(this.fetcher);
      this.fetcher = 0;
    }
  }, {
    key: "resetRefetchTimer",
    value: function resetRefetchTimer() {
      if (this.fetcher === 0) {
        return;
      }

      this.fetchInverval = FETCH_INTERVAL;
      clearInterval(this.fetcher);
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInverval);
    }
  }, {
    key: "increaseRefetchTimer",
    value: function increaseRefetchTimer() {
      if (this.fetcher === 0) {
        return;
      }

      this.fetchInverval = Math.min(this.fetchInverval * 2, FETCH_INTERVAL_MAX);
      clearInterval(this.fetcher);
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInverval);
    }
  }, {
    key: "maximumRefetchTimer",
    value: function maximumRefetchTimer() {
      if (this.fetcher === 0) {
        return;
      }

      this.fetchInverval = FETCH_INTERVAL_SINGLE_EDITOR;
      clearInterval(this.fetcher);
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInverval);
    }
  }, {
    key: "carefulRetry",
    value: function carefulRetry() {
      var newRetry = this.retryTime ? Math.min(this.retryTime * 2, MAX_PUSH_RETRY) : MIN_PUSH_RETRY;

      if (newRetry > WARNING_PUSH_RETRY && this.retryTime < WARNING_PUSH_RETRY) {
        OC.Notification.showTemporary('Changes could not be sent yet');

        this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].PUSH_FAILURE, {});
      }

      this.retryTime = newRetry;
    }
  }, {
    key: "carefulRetryReset",
    value: function carefulRetryReset() {
      this.retryTime = MIN_PUSH_RETRY;
    }
  }]);

  return PollingBackend;
}();

/* harmony default export */ __webpack_exports__["default"] = (PollingBackend);

/***/ }),

/***/ "./src/services/SyncService.js":
/*!*************************************!*\
  !*** ./src/services/SyncService.js ***!
  \*************************************/
/*! exports provided: default, SyncService, ERROR_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncService", function() { return SyncService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
/* harmony import */ var nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextcloud-axios */ "./node_modules/nextcloud-axios/dist/client.js");
/* harmony import */ var nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PollingBackend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PollingBackend */ "./src/services/PollingBackend.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers */ "./src/helpers/index.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/collab.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




var defaultOptions = {
  shareToken: null,
  forceRecreate: false,
  serialize: function serialize(document) {
    return document;
  }
};
var ERROR_TYPE = {
  /**
   * Failed to save collaborative document due to external change
   * collission needs to be resolved manually
   */
  SAVE_COLLISSION: 0,

  /**
   * Failed to push changes for MAX_REBASE_RETRY times
   */
  PUSH_FAILURE: 1,
  LOAD_ERROR: 2,
  CONNECTION_FAILED: 3,
  SOURCE_NOT_FOUND: 4
};

var SyncService =
/*#__PURE__*/
function () {
  function SyncService(options) {
    _classCallCheck(this, SyncService);

    this.eventHandlers = {
      /* Document state */
      opened: [],
      loaded: [],

      /* All initial steps fetched */
      fetched: [],

      /* received new steps */
      sync: [],

      /* state changed (dirty) */
      stateChange: [],

      /* error */
      error: [],

      /* Events for session and document meta data */
      change: [],

      /* Emitted after successful save */
      save: []
    };
    this.backend = new _PollingBackend__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.options = Object.assign({}, defaultOptions, options);
    this.document = null;
    this.session = null;
    this.sessions = [];
    this.steps = [];
    this.stepClientIDs = [];
    return this;
  }

  _createClass(SyncService, [{
    key: "open",
    value: function open(_ref) {
      var _this2 = this;

      var fileId = _ref.fileId,
          filePath = _ref.filePath;
      return this._openDocument({
        fileId: fileId,
        filePath: filePath
      }).then(function () {
        _this2.emit('opened', {
          document: _this2.document,
          session: _this2.session
        });

        return _this2._fetchDocument().then(function (_ref2) {
          var data = _ref2.data;

          _this2.emit('loaded', {
            document: _this2.document,
            session: _this2.session,
            documentSource: '' + data
          });
        });
      }).catch(function (error) {
        if (!error.response || error.code === 'ECONNABORTED') {
          _this2.emit('error', ERROR_TYPE.CONNECTION_FAILED, {});
        } else {
          _this2.emit('error', ERROR_TYPE.LOAD_ERROR, error.response.status);
        }

        return Promise.reject(error);
      });
    }
  }, {
    key: "startSync",
    value: function startSync() {
      this.backend.connect();
    }
  }, {
    key: "_openDocument",
    value: function _openDocument(_ref3) {
      var _this3 = this;

      var fileId = _ref3.fileId,
          filePath = _ref3.filePath;
      return nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["endpointUrl"])('session/create', !!this.options.shareToken), {
        params: {
          fileId: fileId,
          filePath: filePath,
          token: this.options.shareToken,
          guestName: this.options.guestName,
          forceRecreate: this.options.forceRecreate
        }
      }).then(function (response) {
        _this3.document = response.data.document;
        _this3.document.readOnly = response.data.readOnly;
        _this3.session = response.data.session;
        return response.data;
      });
    }
  }, {
    key: "_fetchDocument",
    value: function _fetchDocument() {
      return nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["endpointUrl"])('session/fetch', !!this.options.shareToken), {
        transformResponse: [function (data) {
          return data;
        }],
        params: {
          documentId: this.document.id,
          sessionId: this.session.id,
          sessionToken: this.session.token,
          token: this.options.shareToken
        }
      });
    }
  }, {
    key: "updateSession",
    value: function updateSession(guestName) {
      var _this4 = this;

      if (!this.isPublic()) {
        return;
      }

      return nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["endpointUrl"])('session', !!this.options.shareToken), {
        documentId: this.document.id,
        sessionId: this.session.id,
        sessionToken: this.session.token,
        token: this.options.shareToken,
        guestName: guestName
      }).then(function (_ref4) {
        var data = _ref4.data;
        _this4.session = data;
        return data;
      }).catch(function (error) {
        console.error('Failed to update the session', error);
        return Promise.reject(error);
      });
    }
  }, {
    key: "sendSteps",
    value: function sendSteps(_sendable) {
      var sendable = _sendable || Object(prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__["sendableSteps"])(this.state);

      if (!sendable) {
        return;
      }

      return this.backend.sendSteps(sendable);
    }
  }, {
    key: "stepsSince",
    value: function stepsSince(version) {
      return {
        steps: this.steps.slice(version),
        clientIDs: this.stepClientIDs.slice(version)
      };
    }
  }, {
    key: "_receiveSteps",
    value: function _receiveSteps(_ref5) {
      var _this5 = this;

      var steps = _ref5.steps,
          document = _ref5.document;
      var newSteps = [];

      var _loop = function _loop(i) {
        var singleSteps = steps[i].data;

        if (!Array.isArray(singleSteps)) {
          console.error('Invalid step data, skipping step', steps[i]); // TODO: recover

          return "continue";
        }

        singleSteps.forEach(function (step) {
          _this5.steps.push(step);

          newSteps.push({
            step: step,
            clientID: steps[i].sessionId
          });
        });
      };

      for (var i = 0; i < steps.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      this.emit('sync', {
        steps: newSteps,
        document: document
      });
      console.debug('receivedSteps', 'newVersion', this._getVersion());
    }
  }, {
    key: "_getVersion",
    value: function _getVersion() {
      if (this.state) {
        return Object(prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__["getVersion"])(this.state);
      }

      return 0;
    }
  }, {
    key: "_getDocument",
    value: function _getDocument() {
      if (this.state) {
        return this.state.doc;
      }
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      return this.options.serialize(this._getDocument());
    }
  }, {
    key: "save",
    value: function save() {
      if (this.backend.save) {
        this.backend.save();
      }
    }
  }, {
    key: "forceSave",
    value: function forceSave() {
      if (this.backend.forceSave) {
        this.backend.forceSave();
      }
    }
  }, {
    key: "close",
    value: function close() {
      var _this6 = this;

      var closed = false;
      return new Promise(function (resolve, reject) {
        _this6.on('save', function () {
          _this6._close().then(function () {
            closed = true;
            resolve();
          }).catch(function () {
            return resolve();
          });
        });

        setTimeout(function () {
          if (!closed) {
            _this6._close().then(function () {
              resolve();
            }).catch(function () {
              return resolve();
            });
          }
        }, 2000);

        _this6.save();
      });
    }
  }, {
    key: "_close",
    value: function _close() {
      if (this.document === null || this.session === null) {
        return Promise.resolve();
      }

      this.backend.disconnect();
      return nextcloud_axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["endpointUrl"])('session/close', !!this.options.shareToken), {
        params: {
          documentId: this.document.id,
          sessionId: this.session.id,
          sessionToken: this.session.token,
          token: this.options.shareToken
        }
      });
    }
  }, {
    key: "on",
    value: function on(event, callback, _this) {
      this.eventHandlers[event].push(callback.bind(_this));
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event, data, additionalData) {
      if (typeof this.eventHandlers[event] !== 'undefined') {
        this.eventHandlers[event].forEach(function (callback) {
          callback(data, additionalData);
        });
      } else {
        console.error('Event not found', event);
      }
    }
  }, {
    key: "isPublic",
    value: function isPublic() {
      return !!this.options.shareToken;
    }
  }]);

  return SyncService;
}();

/* harmony default export */ __webpack_exports__["default"] = (SyncService);


/***/ })

}]);
//# sourceMappingURL=editor.js.map?v=c4343ed946e870eacd74