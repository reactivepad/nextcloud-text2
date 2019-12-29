(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["vendors~editor-rich"],{

/***/ "./node_modules/@nextcloud/auth/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@nextcloud/auth/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getRequestToken", {
  enumerable: true,
  get: function get() {
    return _requesttoken.getRequestToken;
  }
});
Object.defineProperty(exports, "onRequestTokenUpdate", {
  enumerable: true,
  get: function get() {
    return _requesttoken.onRequestTokenUpdate;
  }
});
Object.defineProperty(exports, "getCurrentUser", {
  enumerable: true,
  get: function get() {
    return _user.getCurrentUser;
  }
});

var _requesttoken = __webpack_require__(/*! ./requesttoken */ "./node_modules/@nextcloud/auth/dist/requesttoken.js");

var _user = __webpack_require__(/*! ./user */ "./node_modules/@nextcloud/auth/dist/user.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/auth/dist/requesttoken.js":
/*!***********************************************************!*\
  !*** ./node_modules/@nextcloud/auth/dist/requesttoken.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequestToken = getRequestToken;
exports.onRequestTokenUpdate = onRequestTokenUpdate;

var _eventBus = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");

var tokenElement = document.getElementsByTagName('head')[0];
var token = tokenElement ? tokenElement.getAttribute('data-requesttoken') : null;
var observers = [];

function getRequestToken() {
  return token;
}

function onRequestTokenUpdate(observer) {
  observers.push(observer);
} // Listen to server event and keep token in sync


(0, _eventBus.subscribe)('csrf-token-update', function (e) {
  token = e.token;
  observers.forEach(function (observer) {
    try {
      observer(e.token);
    } catch (e) {
      console.error('error updating CSRF token observer', e);
    }
  });
});
//# sourceMappingURL=requesttoken.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/auth/dist/user.js":
/*!***************************************************!*\
  !*** ./node_modules/@nextcloud/auth/dist/user.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUser = getCurrentUser;
var uidElement = document.getElementsByTagName('head')[0];
var uid = uidElement ? uidElement.getAttribute('data-user') : null;
var displayNameElement = document.getElementsByTagName('head')[0];
var displayName = displayNameElement ? displayNameElement.getAttribute('data-user-displayname') : null;

function getCurrentUser() {
  if (uid === null) {
    return null;
  }

  return {
    uid: uid,
    displayName: displayName
  };
}
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/a-function.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/a-function.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-for-each.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-for-each.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-includes.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-includes.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-iteration.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-iteration.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-species-create.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-species-create.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/bind-context.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/bind-context.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof-raw.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof-raw.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/copy-constructor-properties.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/document-create-element.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/document-create-element.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/enum-bug-keys.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/enum-bug-keys.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/function-to-string.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/function-to-string.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-built-in.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-built-in.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hide.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/hide.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/ie8-dom-define.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/ie8-dom-define.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/indexed-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/indexed-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-state.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-state.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-array.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-forced.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-forced.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-pure.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-pure.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-symbol.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-symbol.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-weak-map.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-weak-map.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-define-property.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-names.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys-internal.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-keys-internal.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/own-keys.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/own-keys.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/path.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/path.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/redefine.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/require-object-coercible.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/require-object-coercible.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-key.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared-key.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/set-global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.2.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/sloppy-array-method.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/sloppy-array-method.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-absolute-index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-absolute-index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-indexed-object.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-integer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-integer.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-length.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-object.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-object.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-primitive.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/to-primitive.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/uid.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/uid.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/internals/well-known-symbol.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.for-each.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/auth/node_modules/core-js/modules/es.array.for-each.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/@nextcloud/auth/node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/@nextcloud/axios/dist/client.js":
/*!******************************************************!*\
  !*** ./node_modules/@nextcloud/axios/dist/client.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/@nextcloud/axios/node_modules/core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _auth = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = _axios["default"].create({
  headers: {
    requesttoken: (0, _auth.getRequestToken)()
  }
});

(0, _auth.onRequestTokenUpdate)(function (token) {
  return client.defaults.headers.requesttoken = token;
});
var _default = client;
exports["default"] = _default;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/an-object.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/an-object.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/array-includes.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/array-includes.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/classof-raw.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/classof-raw.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/copy-constructor-properties.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-non-enumerable-property.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-property-descriptor.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-property-descriptor.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/descriptors.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/descriptors.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/document-create-element.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/document-create-element.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/enum-bug-keys.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/enum-bug-keys.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/export.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/export.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/fails.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/fails.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/function-to-string.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/function-to-string.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/get-built-in.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/get-built-in.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/has.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/has.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/hidden-keys.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/hidden-keys.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/ie8-dom-define.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/ie8-dom-define.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/indexed-object.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/indexed-object.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/internal-state.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/internal-state.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-forced.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-forced.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-object.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-object.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-pure.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-pure.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/native-weak-map.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/native-weak-map.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-define-property.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-define-property.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-names.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-keys-internal.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-keys-internal.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/own-keys.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/own-keys.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/redefine.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/redefine.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/require-object-coercible.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/require-object-coercible.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/set-global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/set-global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared-key.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared-key.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared-store.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared-store.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.3.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-absolute-index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-absolute-index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-indexed-object.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-indexed-object.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-integer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-integer.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-length.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-length.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-primitive.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/to-primitive.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/uid.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/internals/uid.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/@nextcloud/axios/node_modules/core-js/modules/es.object.define-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/axios/node_modules/core-js/modules/es.object.define-property.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/axios/node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/dist/ProxyBus.js":
/*!************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/dist/ProxyBus.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProxyBus = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var packageJson = {
  name: "@nextcloud/event-bus",
  version: "0.2.1",
  description: "",
  main: "dist/index.js",
  types: "dist/index.d.ts",
  scripts: {
    build: "babel ./lib --out-dir dist --extensions '.ts,.tsx' --source-maps && tsc --emitDeclarationOnly",
    "check-types": "tsc",
    dev: "babel ./lib --out-dir dist --extensions '.ts,.tsx' --watch",
    test: "jest",
    "test:watch": "jest --watchAll"
  },
  keywords: ["nextcloud"],
  homepage: "https://github.com/nextcloud/nextcloud-event-bus#readme",
  author: "Christoph Wurst",
  license: "GPL-3.0-or-later",
  repository: {
    type: "git",
    url: "https://github.com/nextcloud/nextcloud-event-bus"
  },
  dependencies: {
    "core-js": "^3.1.4"
  },
  devDependencies: {
    "@babel/cli": "^7.6.0",
    "@babel/core": "^7.6.0",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/preset-env": "^7.6.0",
    "@babel/preset-typescript": "^7.6.0",
    "babel-jest": "^24.9.0",
    "babel-plugin-inline-json-import": "^0.3.2",
    "browserslist-config-nextcloud": "0.0.1",
    jest: "^24.9.0",
    typescript: "^3.6.3"
  },
  browserslist: ["extends browserslist-config-nextcloud"]
};

var ProxyBus =
/*#__PURE__*/
function () {
  function ProxyBus(bus) {
    _classCallCheck(this, ProxyBus);

    _defineProperty(this, "bus", void 0);

    if (bus.getVersion() !== this.getVersion()) {
      // TODO: only warn if major version number does not match
      console.warn('Proxying an event bus of version ' + bus.getVersion() + ' with ' + this.getVersion());
    }

    this.bus = bus;
  }

  _createClass(ProxyBus, [{
    key: "getVersion",
    value: function getVersion() {
      return packageJson.version;
    }
  }, {
    key: "subscribe",
    value: function subscribe(name, handler) {
      this.bus.subscribe(name, handler);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(name, handler) {
      this.bus.unsubscribe(name, handler);
    }
  }, {
    key: "emit",
    value: function emit(name, event) {
      this.bus.emit(name, event);
    }
  }]);

  return ProxyBus;
}();

exports.ProxyBus = ProxyBus;
//# sourceMappingURL=ProxyBus.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/dist/SimpleBus.js":
/*!*************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/dist/SimpleBus.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.map */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleBus = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var packageJson = {
  name: "@nextcloud/event-bus",
  version: "0.2.1",
  description: "",
  main: "dist/index.js",
  types: "dist/index.d.ts",
  scripts: {
    build: "babel ./lib --out-dir dist --extensions '.ts,.tsx' --source-maps && tsc --emitDeclarationOnly",
    "check-types": "tsc",
    dev: "babel ./lib --out-dir dist --extensions '.ts,.tsx' --watch",
    test: "jest",
    "test:watch": "jest --watchAll"
  },
  keywords: ["nextcloud"],
  homepage: "https://github.com/nextcloud/nextcloud-event-bus#readme",
  author: "Christoph Wurst",
  license: "GPL-3.0-or-later",
  repository: {
    type: "git",
    url: "https://github.com/nextcloud/nextcloud-event-bus"
  },
  dependencies: {
    "core-js": "^3.1.4"
  },
  devDependencies: {
    "@babel/cli": "^7.6.0",
    "@babel/core": "^7.6.0",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/preset-env": "^7.6.0",
    "@babel/preset-typescript": "^7.6.0",
    "babel-jest": "^24.9.0",
    "babel-plugin-inline-json-import": "^0.3.2",
    "browserslist-config-nextcloud": "0.0.1",
    jest: "^24.9.0",
    typescript: "^3.6.3"
  },
  browserslist: ["extends browserslist-config-nextcloud"]
};

var SimpleBus =
/*#__PURE__*/
function () {
  function SimpleBus() {
    _classCallCheck(this, SimpleBus);

    _defineProperty(this, "handlers", new Map());
  }

  _createClass(SimpleBus, [{
    key: "getVersion",
    value: function getVersion() {
      return packageJson.version;
    }
  }, {
    key: "subscribe",
    value: function subscribe(name, handler) {
      this.handlers.set(name, (this.handlers.get(name) || []).concat(handler));
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(name, handler) {
      this.handlers.set(name, (this.handlers.get(name) || []).filter(function (h) {
        return h != handler;
      }));
    }
  }, {
    key: "emit",
    value: function emit(name, event) {
      (this.handlers.get(name) || []).forEach(function (h) {
        try {
          h(event);
        } catch (e) {
          console.error('could not invoke event listener', e);
        }
      });
    }
  }]);

  return SimpleBus;
}();

exports.SimpleBus = SimpleBus;
//# sourceMappingURL=SimpleBus.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emit = exports.unsubscribe = exports.subscribe = void 0;

var _ProxyBus = __webpack_require__(/*! ./ProxyBus */ "./node_modules/@nextcloud/event-bus/dist/ProxyBus.js");

var _SimpleBus = __webpack_require__(/*! ./SimpleBus */ "./node_modules/@nextcloud/event-bus/dist/SimpleBus.js");

function getBus() {
  if (typeof window.OC !== 'undefined' && window.OC._eventBus && typeof window._nc_event_bus === 'undefined') {
    console.warn('found old event bus instance at OC._eventBus. Update your version!');
    window._nc_event_bus = window.OC._eventBus;
  } // Either use an existing event bus instance or create one


  if (typeof window._nc_event_bus !== 'undefined') {
    return new _ProxyBus.ProxyBus(window._nc_event_bus);
  } else {
    return window._nc_event_bus = new _SimpleBus.SimpleBus();
  }
}

var bus = getBus();
var subscribe = bus.subscribe.bind(bus);
exports.subscribe = subscribe;
var unsubscribe = bus.unsubscribe.bind(bus);
exports.unsubscribe = unsubscribe;
var emit = bus.emit.bind(bus);
exports.emit = emit;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/a-possible-prototype.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/a-possible-prototype.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-instance.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-instance.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-for-each.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-for-each.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-iteration.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-iteration.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-method-has-species-support.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-method-has-species-support.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-species-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-species-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/bind-context.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/bind-context.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/classof-raw.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/classof-raw.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/classof.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/classof.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/collection-strong.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/collection-strong.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/collection.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/collection.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var ADDER = IS_MAP ? 'set' : 'add';
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/copy-constructor-properties.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/correct-prototype-getter.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-iterator-constructor.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-property-descriptor.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-property-descriptor.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-property.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-property.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/define-iterator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/define-iterator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/document-create-element.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/document-create-element.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/dom-iterables.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/dom-iterables.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/freezing.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/freezing.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/function-to-string.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/function-to-string.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/get-built-in.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/get-built-in.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/get-iterator-method.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/get-iterator-method.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/hidden-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/hidden-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/indexed-object.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/indexed-object.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/inherit-if-required.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/inherit-if-required.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-metadata.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-metadata.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-state.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-state.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-array-iterator-method.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-array.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-forced.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-forced.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-pure.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-pure.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterate.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterate.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators-core.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators-core.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/native-symbol.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/native-symbol.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/native-weak-map.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/native-weak-map.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-properties.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-properties.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-names.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-prototype-of.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-set-prototype-of.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-to-string.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-to-string.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/classof.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/own-keys.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/own-keys.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/path.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/path.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine-all.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine-all.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/require-object-coercible.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/require-object-coercible.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-global.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-global.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-species.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-species.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared-store.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared-store.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.3.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/sloppy-array-method.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/sloppy-array-method.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/string-multibyte.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/string-multibyte.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-indexed-object.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-indexed-object.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-integer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.concat.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.concat.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.filter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.filter.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-method-has-species-support.js");

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.for-each.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.for-each.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.iterator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.iterator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.map.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.map.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (get) {
  return function Map() { return get(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong, true);


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.object.to-string.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.object.to-string.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/object-to-string.js");

var ObjectPrototype = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (toString !== ObjectPrototype.toString) {
  redefine(ObjectPrototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.string.iterator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.string.iterator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/event-bus/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/nextcloud-vue/dist/Components/ActionButton.js":
/*!********************************************************************!*\
  !*** ./node_modules/nextcloud-vue/dist/Components/ActionButton.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")):undefined}(window,function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=67)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,i,a,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return o})},1:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")});return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},15:function(t,e,n){"use strict";var o=n(5);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
 */e.a={mixins:[o.a],props:{icon:{type:String,default:"",required:!0},title:{type:String,default:""}},computed:{isIconUrl:function(){try{return new URL(this.icon)}catch(t){return!1}}},methods:{onClick:function(t){this.$emit("click",t)}}}},2:function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],s={id:t+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return h});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,r){u=n,d=r||{};var a=o(t,e);return v(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=i[s.id]).refs--,n.push(c)}e?v(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(g(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(g(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,o=document.querySelector("style["+p+'~="'+t.id+'"]');if(o){if(u)return l;o.parentNode.removeChild(o)}if(f){var r=c++;o=s||(s=b()),e=_.bind(null,o,r,!1),n=_.bind(null,o,r,!0)}else o=b(),e=function(t,e){var n=e.css,o=e.media,r=e.sourceMap;o&&t.setAttribute("media",o);d.ssrId&&t.setAttribute(p,e.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var m,x=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function _(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},26:function(t,e,n){var o=n(95);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(2).default)("2601b667",o,!0,{})},3:function(e,n){e.exports=t},35:function(t,e){},5:function(t,e,n){"use strict";var o=n(3),r=n.n(o);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
 */e.a={before:function(){this.$slots.default&&""!==this.text.trim()||(r.a.util.warn("".concat(this.$options.name," cannot be empty and requires a meaningful text content"),this),this.$destroy(),this.$el.remove())},beforeUpdate:function(){this.text=this.getText()},data:function(){return{text:this.getText()}},computed:{isLongText:function(){return this.text&&this.text.trim().length>20}},methods:{getText:function(){return this.$slots.default?this.$slots.default[0].text.trim():""}}}},67:function(t,e,n){"use strict";n.r(e);var o={name:"ActionButton",mixins:[n(15).a],props:{disabled:{type:Boolean,default:!1}},computed:{isFocusable:function(){return!this.disabled}}},r=(n(94),n(0)),i=n(35),a=n.n(i),s=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{"action--disabled":t.disabled}},[n("button",{staticClass:"action-button",class:{focusable:t.isFocusable},on:{click:t.onClick}},[n("span",{staticClass:"action-button__icon",class:[t.isIconUrl?"action-button__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url("+t.icon+")":null}}),t._v(" "),t.title?n("p",[n("strong",{staticClass:"action-button__title"},[t._v("\n\t\t\t\t"+t._s(t.title)+"\n\t\t\t")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}})]):t.isLongText?n("p",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}}):n("span",{staticClass:"action-button__text"},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)])},[],!1,null,"37538719",null);"function"==typeof a.a&&a()(s);var c=s.exports;n.d(e,"ActionButton",function(){return c});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
 */e.default=c},94:function(t,e,n){"use strict";var o=n(26);n.n(o).a},95:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"li.active[data-v-37538719]{box-shadow:inset 4px 0 var(--color-primary)}.action--disabled[data-v-37538719]{pointer-events:none;opacity:.5}.action--disabled[data-v-37538719]:hover,.action--disabled[data-v-37538719]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-37538719]{opacity:1 !important}.action-button[data-v-37538719]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-right:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-button[data-v-37538719]:hover,.action-button[data-v-37538719]:focus{opacity:1}.action-button>span[data-v-37538719]{cursor:pointer;white-space:nowrap}.action-button__icon[data-v-37538719]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-button p[data-v-37538719]{width:150px;padding:7px 0;cursor:pointer;text-align:left;line-height:1.6em}.action-button__longtext[data-v-37538719]{cursor:pointer;white-space:pre-wrap}.action-button__title[data-v-37538719]{font-weight:bold}\n",""])}})});
//# sourceMappingURL=ActionButton.js.map

/***/ }),

/***/ "./node_modules/nextcloud-vue/dist/Components/Actions.js":
/*!***************************************************************!*\
  !*** ./node_modules/nextcloud-vue/dist/Components/Actions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")):undefined}(window,function(t){return function(t){var e={};function n(A){if(e[A])return e[A].exports;var o=e[A]={i:A,l:!1,exports:{}};return t[A].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,A){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:A})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var A=Object.create(null);if(n.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(A,o,function(e){return t[e]}.bind(null,o));return A},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=30)}({0:function(t,e,n){"use strict";function A(t,e,n,A,o,i,r,s){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),A&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=a):o&&(a=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var l=c.render;c.render=function(t,e){return a.call(e),l(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,a):[a]}return{exports:t,options:c}}n.d(e,"a",function(){return A})},1:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",A=t[3];if(!A)return n;if(e&&"function"==typeof btoa){var o=(r=A,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(a," */")),i=A.sources.map(function(t){return"/*# sourceURL=".concat(A.sourceRoot).concat(t," */")});return[n].concat(i).concat([o]).join("\n")}var r,s,a;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var A={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(A[i]=!0)}for(var r=0;r<t.length;r++){var s=t[r];null!=s[0]&&A[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},10:function(t,e){t.exports="data:application/vnd.ms-fontobject;base64,0gkAACgJAAABAAIAAAAAAAIABQMAAAAAAAABQJABAAAAAExQAAAAABAAAAAAAAAAAAAAAAAAAAEAAAAA7QDlIgAAAAAAAAAAAAAAAAAAAAAAABgAAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAAAAAAAAFgAAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAYAABpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAAAAAAAQAAAAoAgAADACBPUy8ydOOQiAAAAKwAAABgY21hcOok67wAAAEMAAABSmdseWZ0BZ9ZAAACWAAAAzxoZWFkJgsnMgAABZQAAAA2aGhlYSccE4AAAAXMAAAAJGhtdHgThwAAAAAF8AAAABpsb2NhA5oEoAAABgwAAAAYbWF4cAEYAFcAAAYkAAAAIG5hbWUNIFD5AAAGRAAAAkZwb3N0+8sNdgAACIwAAACcAAQTiAGQAAUAAAxlDawAAAK8DGUNrAAACWAA9QUKAAACAAUDAAAAAAAAAAAAABAAAAAAAAAAAAAAAFBmRWQAQOoB6gsTiAAAAcITiAAAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAAAAAEQAAwABAAAAHAAEACgAAAAGAAQAAQAC6gbqC///AADqAeoH//8WABX/AAEAAAAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAOpg9DAAUACwAACQIRCQQRCQEOpvqCBX77ugRG+oL6ggV++7oERg9C+oL6ggE4BEYERgE4+oL6ggE4BEYERgABAAAAAA1uElAABQAACQERCQERBhsHU/d0CIwJxPit/sgIiwiM/scAAgAAAAAP3w9DAAUACwAACQIRCQQRCQEE4gV++oIERvu6BX4Ff/qBBEb7ugRGBX4Ffv7I+7r7uv7IBX4Ffv7I+7r7ugABAAAAAA6mElAABQAACQERCQERDW74rQiL93UJxAdTATn3dPd1ATgAAQAAAAARFxEXAAsAAAkLERf97frA+sD97QVA+sACEwVABUACE/rABIT97QVA+sACEwVABUACE/rABUD97frAAAH//wAAE5MS7AAzAAABIgcOARcWFwEhJgcGBwYHBhQXFhcWFxY3IQEGBwYXFhceARcWFxY3NjcBNjc2JyYnAS4BCmBlT0pGEBJIBdfx4E0+OiknFBQUFCcpOj5NDiD6KTcaGAMDGxlWNTc7Pjo/NQftOxUVFBU8+BMsdBLsOTSsWWBH+ioBGxguLDk4eDg5LC4YGwL6KTU/Oz46NzZWGRoDAxgZOAfsPFFQT1I8B+wtMgAAAAMAAAAAERcRFwADAAcACwAAAREhEQERIREBESERAnEOpvFaDqbxWg6mERf9jwJx+eb9jwJx+eX9jwJxAAMAAAAAElAMNQAYADEASgAAASIHDgEHBhYXHgEXFjI3PgE3NjQnLgEnJiEiBw4BBwYUFx4BFxYyNz4BNzY0Jy4BJyYhIgcOAQcGFBceARcWMjc+ATc2NCcuAScmA6qAdHCtLzIBMS+tcHT/dHCtLzIyL61wdAWbf3RwrTAxMTCtcHT+dHCtMDExMK1wdAWcgHRwrS8xMS+tcHT/dHCtLzIyL61wdAw1MTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxAAAAAgAAAAAP3w/fAAMABwAAAREhESERIREDqgTiAnEE4g/f88sMNfPLDDUAAAABAAAAABEXERcAAgAACQICcQ6m8VoRF/it+K0AAQAAAAEAACLlAO1fDzz1AAsTiAAAAADZ1c/gAAAAANmE8+H//wAAE5MS7AAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAAAgAAAAATiAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAACIANgBYAGwAjADmAQQBegGQAZ4AAQAAAAsASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABAAwAAAABAAAAAAACAAcADAABAAAAAAADAAwAEwABAAAAAAAEAAwAHwABAAAAAAAFAAsAKwABAAAAAAAGAAwANgABAAAAAAAKACsAQgABAAAAAAALABMAbQADAAEECQABABgAgAADAAEECQACAA4AmAADAAEECQADABgApgADAAEECQAEABgAvgADAAEECQAFABYA1gADAAEECQAGABgA7AADAAEECQAKAFYBBAADAAEECQALACYBWmljb25mb250LXZ1ZVJlZ3VsYXJpY29uZm9udC12dWVpY29uZm9udC12dWVWZXJzaW9uIDEuMGljb25mb250LXZ1ZUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAsACwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsRYXJyb3ctbGVmdC1kb3VibGUKYXJyb3ctbGVmdBJhcnJvdy1yaWdodC1kb3VibGULYXJyb3ctcmlnaHQFY2xvc2UMY29uZmlybS1mYWRlBG1lbnUEbW9yZQVwYXVzZQRwbGF5"},11:function(t,e){t.exports="data:font/woff;base64,d09GRgABAAAAAAlwAAoAAAAACSgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAGAAAABgdOOQiGNtYXAAAAFUAAABSgAAAUrqJOu8Z2x5ZgAAAqAAAAM8AAADPHQFn1loZWFkAAAF3AAAADYAAAA2JgsnMmhoZWEAAAYUAAAAJAAAACQnHBOAaG10eAAABjgAAAAaAAAAGhOHAABsb2NhAAAGVAAAABgAAAAYA5oEoG1heHAAAAZsAAAAIAAAACABGABXbmFtZQAABowAAAJGAAACRg0gUPlwb3N0AAAI1AAAAJwAAACc+8sNdgAEE4gBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoLE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAABEAAMAAQAAABwABAAoAAAABgAEAAEAAuoG6gv//wAA6gHqB///FgAV/wABAAAAAAAAAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAADqYPQwAFAAsAAAkCEQkEEQkBDqb6ggV++7oERvqC+oIFfvu6BEYPQvqC+oIBOARGBEYBOPqC+oIBOARGBEYAAQAAAAANbhJQAAUAAAkBEQkBEQYbB1P3dAiMCcT4rf7ICIsIjP7HAAIAAAAAD98PQwAFAAsAAAkCEQkEEQkBBOIFfvqCBEb7ugV+BX/6gQRG+7oERgV+BX7+yPu6+7r+yAV+BX7+yPu6+7oAAQAAAAAOphJQAAUAAAkBEQkBEQ1u+K0Ii/d1CcQHUwE593T3dQE4AAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAADAAAAABEXERcAAwAHAAsAAAERIREBESERAREhEQJxDqbxWg6m8VoOphEX/Y8Ccfnm/Y8Ccfnl/Y8CcQADAAAAABJQDDUAGAAxAEoAAAEiBw4BBwYWFx4BFxYyNz4BNzY0Jy4BJyYhIgcOAQcGFBceARcWMjc+ATc2NCcuAScmISIHDgEHBhQXHgEXFjI3PgE3NjQnLgEnJgOqgHRwrS8yATEvrXB0/3RwrS8yMi+tcHQFm390cK0wMTEwrXB0/nRwrTAxMTCtcHQFnIB0cK0vMTEvrXB0/3RwrS8yMi+tcHQMNTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMQAAAAIAAAAAD98P3wADAAcAAAERIREhESERA6oE4gJxBOIP3/PLDDXzyww1AAAAAQAAAAARFxEXAAIAAAkCAnEOpvFaERf4rfitAAEAAAABAAAi5QDtXw889QALE4gAAAAA2dXP4AAAAADZhPPh//8AABOTEuwAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAIAAAAAE4gAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAiADYAWABsAIwA5gEEAXoBkAGeAAEAAAALAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAMAAAAAQAAAAAAAgAHAAwAAQAAAAAAAwAMABMAAQAAAAAABAAMAB8AAQAAAAAABQALACsAAQAAAAAABgAMADYAAQAAAAAACgArAEIAAQAAAAAACwATAG0AAwABBAkAAQAYAIAAAwABBAkAAgAOAJgAAwABBAkAAwAYAKYAAwABBAkABAAYAL4AAwABBAkABQAWANYAAwABBAkABgAYAOwAAwABBAkACgBWAQQAAwABBAkACwAmAVppY29uZm9udC12dWVSZWd1bGFyaWNvbmZvbnQtdnVlaWNvbmZvbnQtdnVlVmVyc2lvbiAxLjBpY29uZm9udC12dWVHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAsAAAECAQMBBAEFAQYBBwEIAQkBCgELEWFycm93LWxlZnQtZG91YmxlCmFycm93LWxlZnQSYXJyb3ctcmlnaHQtZG91YmxlC2Fycm93LXJpZ2h0BWNsb3NlDGNvbmZpcm0tZmFkZQRtZW51BG1vcmUFcGF1c2UEcGxheQ=="},12:function(t,e){t.exports="data:font/ttf;base64,AAEAAAAKAIAAAwAgT1MvMnTjkIgAAACsAAAAYGNtYXDqJOu8AAABDAAAAUpnbHlmdAWfWQAAAlgAAAM8aGVhZCYLJzIAAAWUAAAANmhoZWEnHBOAAAAFzAAAACRobXR4E4cAAAAABfAAAAAabG9jYQOaBKAAAAYMAAAAGG1heHABGABXAAAGJAAAACBuYW1lDSBQ+QAABkQAAAJGcG9zdPvLDXYAAAiMAAAAnAAEE4gBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoLE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAABEAAMAAQAAABwABAAoAAAABgAEAAEAAuoG6gv//wAA6gHqB///FgAV/wABAAAAAAAAAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAADqYPQwAFAAsAAAkCEQkEEQkBDqb6ggV++7oERvqC+oIFfvu6BEYPQvqC+oIBOARGBEYBOPqC+oIBOARGBEYAAQAAAAANbhJQAAUAAAkBEQkBEQYbB1P3dAiMCcT4rf7ICIsIjP7HAAIAAAAAD98PQwAFAAsAAAkCEQkEEQkBBOIFfvqCBEb7ugV+BX/6gQRG+7oERgV+BX7+yPu6+7r+yAV+BX7+yPu6+7oAAQAAAAAOphJQAAUAAAkBEQkBEQ1u+K0Ii/d1CcQHUwE593T3dQE4AAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAADAAAAABEXERcAAwAHAAsAAAERIREBESERAREhEQJxDqbxWg6m8VoOphEX/Y8Ccfnm/Y8Ccfnl/Y8CcQADAAAAABJQDDUAGAAxAEoAAAEiBw4BBwYWFx4BFxYyNz4BNzY0Jy4BJyYhIgcOAQcGFBceARcWMjc+ATc2NCcuAScmISIHDgEHBhQXHgEXFjI3PgE3NjQnLgEnJgOqgHRwrS8yATEvrXB0/3RwrS8yMi+tcHQFm390cK0wMTEwrXB0/nRwrTAxMTCtcHQFnIB0cK0vMTEvrXB0/3RwrS8yMi+tcHQMNTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMQAAAAIAAAAAD98P3wADAAcAAAERIREhESERA6oE4gJxBOIP3/PLDDXzyww1AAAAAQAAAAARFxEXAAIAAAkCAnEOpvFaERf4rfitAAEAAAABAAAi5QDtXw889QALE4gAAAAA2dXP4AAAAADZhPPh//8AABOTEuwAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAIAAAAAE4gAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAiADYAWABsAIwA5gEEAXoBkAGeAAEAAAALAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAMAAAAAQAAAAAAAgAHAAwAAQAAAAAAAwAMABMAAQAAAAAABAAMAB8AAQAAAAAABQALACsAAQAAAAAABgAMADYAAQAAAAAACgArAEIAAQAAAAAACwATAG0AAwABBAkAAQAYAIAAAwABBAkAAgAOAJgAAwABBAkAAwAYAKYAAwABBAkABAAYAL4AAwABBAkABQAWANYAAwABBAkABgAYAOwAAwABBAkACgBWAQQAAwABBAkACwAmAVppY29uZm9udC12dWVSZWd1bGFyaWNvbmZvbnQtdnVlaWNvbmZvbnQtdnVlVmVyc2lvbiAxLjBpY29uZm9udC12dWVHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAsAAAECAQMBBAEFAQYBBwEIAQkBCgELEWFycm93LWxlZnQtZG91YmxlCmFycm93LWxlZnQSYXJyb3ctcmlnaHQtZG91YmxlC2Fycm93LXJpZ2h0BWNsb3NlDGNvbmZpcm0tZmFkZQRtZW51BG1vcmUFcGF1c2UEcGxheQ=="},13:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlIiBob3Jpei1hZHYteD0iNTAwMCI+PGZvbnQtZmFjZSBmb250LWZhbWlseT0iaWNvbmZvbnQtdnVlIiBmb250LXdlaWdodD0iNDAwIiBmb250LXN0cmV0Y2g9Im5vcm1hbCIgdW5pdHMtcGVyLWVtPSI1MDAwIiBwYW5vc2UtMT0iMiAwIDUgMyAwIDAgMCAwIDAgMCIgYXNjZW50PSI1MDAwIiBkZXNjZW50PSIwIiB4LWhlaWdodD0iMCIgYmJveD0iLTEgMCA1MDExIDQ4NDQiIHVuZGVybGluZS10aGlja25lc3M9IjAiIHVuZGVybGluZS1wb3NpdGlvbj0iNTAiIHVuaWNvZGUtcmFuZ2U9IlUrZWEwMS1lYTBiIiAvPjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIwIiAgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdC1kb3VibGUiIHVuaWNvZGU9IiYjeGVhMDE7IiBkPSJNMzc1MCAzOTA2IGwtMTQwNiAtMTQwNiBsMTQwNiAtMTQwNiBsMCAzMTIgbC0xMDk0IDEwOTQgbDEwOTQgMTA5NCBsMCAzMTIgWk0yMzQ0IDM5MDYgbC0xNDA2IC0xNDA2IGwxNDA2IC0xNDA2IGwwIDMxMiBsLTEwOTQgMTA5NCBsMTA5NCAxMDk0IGwwIDMxMiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1sZWZ0IiB1bmljb2RlPSImI3hlYTAyOyIgZD0iTTE1NjMgMjUwMCBsMTg3NSAtMTg3NSBsMCAtMzEyIGwtMjE4OCAyMTg3IGwyMTg4IDIxODggbDAgLTMxMyBsLTE4NzUgLTE4NzUgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctcmlnaHQtZG91YmxlIiB1bmljb2RlPSImI3hlYTAzOyIgZD0iTTEyNTAgMTA5NCBsMTQwNiAxNDA2IGwtMTQwNiAxNDA2IGwwIC0zMTIgbDEwOTQgLTEwOTQgbC0xMDk0IC0xMDk0IGwwIC0zMTIgWk0yNjU2IDEwOTQgbDE0MDcgMTQwNiBsLTE0MDcgMTQwNiBsMCAtMzEyIGwxMDk0IC0xMDk0IGwtMTA5NCAtMTA5NCBsMCAtMzEyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LXJpZ2h0IiB1bmljb2RlPSImI3hlYTA0OyIgZD0iTTM0MzggMjUwMCBsLTE4NzUgMTg3NSBsMCAzMTMgbDIxODcgLTIxODggbC0yMTg3IC0yMTg3IGwwIDMxMiBsMTg3NSAxODc1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImI3hlYTA1OyIgZD0iTTQzNzUgMTE1NiBsLTUzMSAtNTMxIGwtMTM0NCAxMzQ0IGwtMTM0NCAtMTM0NCBsLTUzMSA1MzEgbDEzNDQgMTM0NCBsLTEzNDQgMTM0NCBsNTMxIDUzMSBsMTM0NCAtMTM0NCBsMTM0NCAxMzQ0IGw1MzEgLTUzMSBsLTEzNDQgLTEzNDQgbDEzNDQgLTEzNDQgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY29uZmlybS1mYWRlIiB1bmljb2RlPSImI3hlYTA2OyYjeGVhMDc7IiBkPSJNMjY1NiA0ODQ0IHEtMTAxIDAgLTE4MCAtNTcgcS03NCAtNTIgLTEwOSAtMTM4IHEtMzUgLTg2IC0xOSAtMTc1IHExOCAtOTYgOTAgLTE2NyBsMTQ5NSAtMTQ5NCBsLTM2MTYgMCBxLTc3IDEgLTEzOSAtMjYgcS01OCAtMjQgLTk5IC03MCBxLTM5IC00NCAtNTkgLTEwMSBxLTIwIC01NiAtMjAgLTExNiBxMCAtNjAgMjAgLTExNiBxMjAgLTU3IDU5IC0xMDEgcTQxIC00NiA5OSAtNzAgcTYyIC0yNyAxMzkgLTI1IGwzNjE2IDAgbC0xNDk1IC0xNDk1IHEtNTUgLTUzIC04MSAtMTE2IHEtMjQgLTU5IC0yMSAtMTIxIHEzIC01OCAzMCAtMTEzIHEyNSAtNTQgNjggLTk3IHE0MyAtNDMgOTYgLTY4IHE1NSAtMjYgMTE0IC0yOSBxNjIgLTMgMTIwIDIxIHE2MyAyNSAxMTYgODEgbDIwMjkgMjAyOCBxNTkgNjAgODAgMTQxIHEyMSA4MCAxIDE1OSBxLTIxIDgyIC04MSAxNDIgbC0yMDI5IDIwMjggcS00NCA0NSAtMTAyIDcwIHEtNTggMjUgLTEyMiAyNSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtZW51IiB1bmljb2RlPSImI3hlYTA4OyIgZD0iTTYyNSA0Mzc1IGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMjgxMyBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFpNNjI1IDEyNTAgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtb3JlIiB1bmljb2RlPSImI3hlYTA5OyIgZD0iTTkzOCAzMTI1IHEtMTI4IDAgLTI0NCAtNDkgcS0xMTIgLTQ4IC0xOTguNSAtMTM0LjUgcS04Ni41IC04Ni41IC0xMzMuNSAtMTk4LjUgcS01MCAtMTE2IC00OS41IC0yNDMgcTAuNSAtMTI3IDQ5LjUgLTI0MyBxNDcgLTExMiAxMzMuNSAtMTk4LjUgcTg2LjUgLTg2LjUgMTk4LjUgLTEzNC41IHExMTYgLTQ5IDI0My41IC00OSBxMTI3LjUgMCAyNDMuNSA0OSBxMTEyIDQ4IDE5OC41IDEzNC41IHE4Ni41IDg2LjUgMTMzLjUgMTk4LjUgcTUwIDExNiA1MCAyNDMgcTAgMTI3IC01MCAyNDMgcS00NyAxMTIgLTEzMy41IDE5OC41IHEtODYuNSA4Ni41IC0xOTguNSAxMzQuNSBxLTExNiA0OSAtMjQzIDQ5IFpNMjUwMCAzMTI1IHEtMTI3IDAgLTI0MyAtNDkgcS0xMTIgLTQ4IC0xOTguNSAtMTM0LjUgcS04Ni41IC04Ni41IC0xMzQuNSAtMTk4LjUgcS00OSAtMTE2IC00OSAtMjQzIHEwIC0xMjcgNDkgLTI0MyBxNDggLTExMiAxMzQuNSAtMTk4LjUgcTg2LjUgLTg2LjUgMTk4LjUgLTEzNC41IHExMTYgLTQ5IDI0MyAtNDkgcTEyNyAwIDI0MyA0OSBxMTEyIDQ4IDE5OC41IDEzNC41IHE4Ni41IDg2LjUgMTM0LjUgMTk4LjUgcTQ5IDExNiA0OSAyNDMgcTAgMTI3IC00OSAyNDMgcS00OCAxMTIgLTEzNC41IDE5OC41IHEtODYuNSA4Ni41IC0xOTguNSAxMzQuNSBxLTExNiA0OSAtMjQzIDQ5IFpNNDA2MyAzMTI1IHEtMTI4IDAgLTI0NCAtNDkgcS0xMTIgLTQ4IC0xOTguNSAtMTM0LjUgcS04Ni41IC04Ni41IC0xMzMuNSAtMTk4LjUgcS00OSAtMTE2IC00OSAtMjQzIHEwIC0xMjcgNDkgLTI0MyBxNDcgLTExMiAxMzMuNSAtMTk4LjUgcTg2LjUgLTg2LjUgMTk4LjUgLTEzNC41IHExMTYgLTQ5IDI0My41IC00OSBxMTI3LjUgMCAyNDMuNSA0OSBxMTEyIDQ4IDE5OC41IDEzNC41IHE4Ni41IDg2LjUgMTMzLjUgMTk4LjUgcTUwIDExNiA1MCAyNDMgcTAgMTI3IC01MCAyNDMgcS00NyAxMTIgLTEzMy41IDE5OC41IHEtODYuNSA4Ni41IC0xOTguNSAxMzQuNSBxLTExNiA0OSAtMjQzIDQ5IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InBhdXNlIiB1bmljb2RlPSImI3hlYTBhOyIgZD0iTTkzOCA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaTTI4MTMgNDA2MyBsMCAtMzEyNSBsMTI1MCAwIGwwIDMxMjUgbC0xMjUwIDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGxheSIgdW5pY29kZT0iJiN4ZWEwYjsiIGQ9Ik02MjUgNDM3NSBsMzc1MCAtMTg3NSBsLTM3NTAgLTE4NzUgbDAgMzc1MCBaIiAvPjwvZm9udD48L2RlZnM+PC9zdmc+"},14:function(t,e,n){t.exports=function(){var t="undefined"!=typeof window,e="undefined"!=typeof navigator,n=t&&("ontouchstart"in window||e&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],A=function(t){return t},o={instances:[]};function i(t){var e="function"==typeof t;if(!e&&"object"!=typeof t)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:e?t:t.handler,middleware:t.middleware||A,events:t.events||n,isActive:!(!1===t.isActive)}}function r(t){var e=t.el,n=t.event,A=t.handler,o=t.middleware;n.target!==e&&!e.contains(n.target)&&o(n,e)&&A(n,e)}function s(t){var e=t.el,n=t.handler,A=t.middleware;return{el:e,eventHandlers:t.events.map(function(t){return{event:t,handler:function(t){return r({event:t,el:e,handler:n,middleware:A})}}})}}function a(t){var e=o.instances.findIndex(function(e){return e.el===t});-1!==e&&(o.instances[e].eventHandlers.forEach(function(t){return document.removeEventListener(t.event,t.handler)}),o.instances.splice(e,1))}return o.bind=function(t,e){var n=i(e.value);if(n.isActive){var A=s({el:t,events:n.events,handler:n.handler,middleware:n.middleware});A.eventHandlers.forEach(function(t){var e=t.event,n=t.handler;return setTimeout(function(){return document.addEventListener(e,n)},0)}),o.instances.push(A)}},o.update=function(t,e){var n=e.value,A=e.oldValue;if(JSON.stringify(n)!==JSON.stringify(A)){var c=i(n),l=c.events,u=c.handler,d=c.middleware;if(c.isActive){var f=o.instances.find(function(e){return e.el===t});f?(f.eventHandlers.forEach(function(t){return document.removeEventListener(t.event,t.handler)}),f.eventHandlers=l.map(function(e){return{event:e,handler:function(e){return r({event:e,el:t,handler:u,middleware:d})}}})):(f=s({el:t,events:l,handler:u,middleware:d}),o.instances.push(f)),f.eventHandlers.forEach(function(t){var e=t.event,n=t.handler;return setTimeout(function(){return document.addEventListener(e,n)},0)})}else a(t)}},o.unbind=a,{install:function(t){t.directive("click-outside",o)},directive:o}}()},16:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},17:function(t,e,n){"use strict";(function(t){for(
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!=typeof window&&"undefined"!=typeof document,A=["Edge","Trident","Firefox"],o=0,i=0;i<A.length;i+=1)if(n&&navigator.userAgent.indexOf(A[i])>=0){o=1;break}var r=n&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},o))}};function s(t){return t&&"[object Function]"==={}.toString.call(t)}function a(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function c(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function l(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=a(t),n=e.overflow,A=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+A)?t:l(c(t))}var u=n&&!(!window.MSInputMethodContext||!document.documentMode),d=n&&/MSIE 10/.test(navigator.userAgent);function f(t){return 11===t?u:10===t?d:u||d}function p(t){if(!t)return document.documentElement;for(var e=f(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var A=n&&n.nodeName;return A&&"BODY"!==A&&"HTML"!==A?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===a(n,"position")?p(n):n:t?t.ownerDocument.documentElement:document.documentElement}function h(t){return null!==t.parentNode?h(t.parentNode):t}function v(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,A=n?t:e,o=n?e:t,i=document.createRange();i.setStart(A,0),i.setEnd(o,0);var r,s,a=i.commonAncestorContainer;if(t!==a&&e!==a||A.contains(o))return"BODY"===(s=(r=a).nodeName)||"HTML"!==s&&p(r.firstElementChild)!==r?p(a):a;var c=h(t);return c.host?v(c.host,e):v(t,h(e).host)}function g(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var A=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||A)[e]}return t[e]}function m(t,e){var n="x"===e?"Left":"Top",A="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+A+"Width"],10)}function b(t,e,n,A){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],f(10)?parseInt(n["offset"+t])+parseInt(A["margin"+("Height"===t?"Top":"Left")])+parseInt(A["margin"+("Height"===t?"Bottom":"Right")]):0)}function y(t){var e=t.body,n=t.documentElement,A=f(10)&&getComputedStyle(n);return{height:b("Height",e,n,A),width:b("Width",e,n,A)}}var w=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},E=function(){function t(t,e){for(var n=0;n<e.length;n++){var A=e[n];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(t,A.key,A)}}return function(e,n,A){return n&&t(e.prototype,n),A&&t(e,A),e}}(),B=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var A in n)Object.prototype.hasOwnProperty.call(n,A)&&(t[A]=n[A])}return t};function I(t){return C({},t,{right:t.left+t.width,bottom:t.top+t.height})}function M(t){var e={};try{if(f(10)){e=t.getBoundingClientRect();var n=g(t,"top"),A=g(t,"left");e.top+=n,e.left+=A,e.bottom+=n,e.right+=A}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},i="HTML"===t.nodeName?y(t.ownerDocument):{},r=i.width||t.clientWidth||o.right-o.left,s=i.height||t.clientHeight||o.bottom-o.top,c=t.offsetWidth-r,l=t.offsetHeight-s;if(c||l){var u=a(t);c-=m(u,"x"),l-=m(u,"y"),o.width-=c,o.height-=l}return I(o)}function T(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],A=f(10),o="HTML"===e.nodeName,i=M(t),r=M(e),s=l(t),c=a(e),u=parseFloat(c.borderTopWidth,10),d=parseFloat(c.borderLeftWidth,10);n&&o&&(r.top=Math.max(r.top,0),r.left=Math.max(r.left,0));var p=I({top:i.top-r.top-u,left:i.left-r.left-d,width:i.width,height:i.height});if(p.marginTop=0,p.marginLeft=0,!A&&o){var h=parseFloat(c.marginTop,10),v=parseFloat(c.marginLeft,10);p.top-=u-h,p.bottom-=u-h,p.left-=d-v,p.right-=d-v,p.marginTop=h,p.marginLeft=v}return(A&&!n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],A=g(e,"top"),o=g(e,"left"),i=n?-1:1;return t.top+=A*i,t.bottom+=A*i,t.left+=o*i,t.right+=o*i,t}(p,e)),p}function _(t){if(!t||!t.parentElement||f())return document.documentElement;for(var e=t.parentElement;e&&"none"===a(e,"transform");)e=e.parentElement;return e||document.documentElement}function x(t,e,n,A){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},r=o?_(t):v(t,e);if("viewport"===A)i=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,A=T(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),r=e?0:g(n),s=e?0:g(n,"left");return I({top:r-A.top+A.marginTop,left:s-A.left+A.marginLeft,width:o,height:i})}(r,o);else{var s=void 0;"scrollParent"===A?"BODY"===(s=l(c(e))).nodeName&&(s=t.ownerDocument.documentElement):s="window"===A?t.ownerDocument.documentElement:A;var u=T(s,r,o);if("HTML"!==s.nodeName||function t(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===a(e,"position"))return!0;var A=c(e);return!!A&&t(A)}(r))i=u;else{var d=y(t.ownerDocument),f=d.height,p=d.width;i.top+=u.top-u.marginTop,i.bottom=f+u.top,i.left+=u.left-u.marginLeft,i.right=p+u.left}}var h="number"==typeof(n=n||0);return i.left+=h?n:n.left||0,i.top+=h?n:n.top||0,i.right-=h?n:n.right||0,i.bottom-=h?n:n.bottom||0,i}function O(t,e,n,A,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var r=x(n,A,i,o),s={top:{width:r.width,height:e.top-r.top},right:{width:r.right-e.right,height:r.height},bottom:{width:r.width,height:r.bottom-e.bottom},left:{width:e.left-r.left,height:r.height}},a=Object.keys(s).map(function(t){return C({key:t},s[t],{area:(e=s[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=a.filter(function(t){var e=t.width,A=t.height;return e>=n.clientWidth&&A>=n.clientHeight}),l=c.length>0?c[0].key:a[0].key,u=t.split("-")[1];return l+(u?"-"+u:"")}function N(t,e,n){var A=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return T(n,A?_(e):v(e,n),A)}function D(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),A=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+A,height:t.offsetHeight+n}}function Q(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function L(t,e,n){n=n.split("-")[0];var A=D(t),o={width:A.width,height:A.height},i=-1!==["right","left"].indexOf(n),r=i?"top":"left",s=i?"left":"top",a=i?"height":"width",c=i?"width":"height";return o[r]=e[r]+e[a]/2-A[a]/2,o[s]=n===s?e[s]-A[c]:e[Q(s)],o}function S(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function k(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var A=S(t,function(t){return t[e]===n});return t.indexOf(A)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&s(n)&&(e.offsets.popper=I(e.offsets.popper),e.offsets.reference=I(e.offsets.reference),e=n(e,t))}),e}function j(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function G(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),A=0;A<e.length;A++){var o=e[A],i=o?""+o+n:t;if(void 0!==document.body.style[i])return i}return null}function H(t){var e=t.ownerDocument;return e?e.defaultView:window}function Y(t,e,n,A){n.updateBound=A,H(t).addEventListener("resize",n.updateBound,{passive:!0});var o=l(t);return function t(e,n,A,o){var i="BODY"===e.nodeName,r=i?e.ownerDocument.defaultView:e;r.addEventListener(n,A,{passive:!0}),i||t(l(r.parentNode),n,A,o),o.push(r)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function F(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,H(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function P(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function R(t,e){Object.keys(e).forEach(function(n){var A="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&P(e[n])&&(A="px"),t.style[n]=e[n]+A})}var z=n&&/Firefox/i.test(navigator.userAgent);function U(t,e,n){var A=S(t,function(t){return t.name===e}),o=!!A&&t.some(function(t){return t.name===n&&t.enabled&&t.order<A.order});if(!o){var i="`"+e+"`",r="`"+n+"`";console.warn(r+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}var Z=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],$=Z.slice(3);function W(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=$.indexOf(t),A=$.slice(n+1).concat($.slice(0,n));return e?A.reverse():A}var V={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function X(t,e,n,A){var o=[0,0],i=-1!==["right","left"].indexOf(A),r=t.split(/(\+|\-)/).map(function(t){return t.trim()}),s=r.indexOf(S(r,function(t){return-1!==t.search(/,|\s/)}));r[s]&&-1===r[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var a=/\s*,\s*|\s+/,c=-1!==s?[r.slice(0,s).concat([r[s].split(a)[0]]),[r[s].split(a)[1]].concat(r.slice(s+1))]:[r];return(c=c.map(function(t,A){var o=(1===A?!i:i)?"height":"width",r=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,r=!0,t):r?(t[t.length-1]+=e,r=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,A){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],r=o[2];if(!i)return t;if(0===r.indexOf("%")){var s=void 0;switch(r){case"%p":s=n;break;case"%":case"%r":default:s=A}return I(s)[e]/100*i}if("vh"===r||"vw"===r)return("vh"===r?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i;return i}(t,o,e,n)})})).forEach(function(t,e){t.forEach(function(n,A){P(n)&&(o[e]+=n*("-"===t[A-1]?-1:1))})}),o}var J={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],A=e.split("-")[1];if(A){var o=t.offsets,i=o.reference,r=o.popper,s=-1!==["bottom","top"].indexOf(n),a=s?"left":"top",c=s?"width":"height",l={start:B({},a,i[a]),end:B({},a,i[a]+i[c]-r[c])};t.offsets.popper=C({},r,l[A])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,A=t.placement,o=t.offsets,i=o.popper,r=o.reference,s=A.split("-")[0],a=void 0;return a=P(+n)?[+n,0]:X(n,i,r,s),"left"===s?(i.top+=a[0],i.left-=a[1]):"right"===s?(i.top+=a[0],i.left+=a[1]):"top"===s?(i.left+=a[0],i.top-=a[1]):"bottom"===s&&(i.left+=a[0],i.top+=a[1]),t.popper=i,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||p(t.instance.popper);t.instance.reference===n&&(n=p(n));var A=G("transform"),o=t.instance.popper.style,i=o.top,r=o.left,s=o[A];o.top="",o.left="",o[A]="";var a=x(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);o.top=i,o.left=r,o[A]=s,e.boundaries=a;var c=e.priority,l=t.offsets.popper,u={primary:function(t){var n=l[t];return l[t]<a[t]&&!e.escapeWithReference&&(n=Math.max(l[t],a[t])),B({},t,n)},secondary:function(t){var n="right"===t?"left":"top",A=l[n];return l[t]>a[t]&&!e.escapeWithReference&&(A=Math.min(l[n],a[t]-("right"===t?l.width:l.height))),B({},n,A)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";l=C({},l,u[e](t))}),t.offsets.popper=l,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,A=e.reference,o=t.placement.split("-")[0],i=Math.floor,r=-1!==["top","bottom"].indexOf(o),s=r?"right":"bottom",a=r?"left":"top",c=r?"width":"height";return n[s]<i(A[a])&&(t.offsets.popper[a]=i(A[a])-n[c]),n[a]>i(A[s])&&(t.offsets.popper[a]=i(A[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!U(t.instance.modifiers,"arrow","keepTogether"))return t;var A=e.element;if("string"==typeof A){if(!(A=t.instance.popper.querySelector(A)))return t}else if(!t.instance.popper.contains(A))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],i=t.offsets,r=i.popper,s=i.reference,c=-1!==["left","right"].indexOf(o),l=c?"height":"width",u=c?"Top":"Left",d=u.toLowerCase(),f=c?"left":"top",p=c?"bottom":"right",h=D(A)[l];s[p]-h<r[d]&&(t.offsets.popper[d]-=r[d]-(s[p]-h)),s[d]+h>r[p]&&(t.offsets.popper[d]+=s[d]+h-r[p]),t.offsets.popper=I(t.offsets.popper);var v=s[d]+s[l]/2-h/2,g=a(t.instance.popper),m=parseFloat(g["margin"+u],10),b=parseFloat(g["border"+u+"Width"],10),y=v-t.offsets.popper[d]-m-b;return y=Math.max(Math.min(r[l]-h,y),0),t.arrowElement=A,t.offsets.arrow=(B(n={},d,Math.round(y)),B(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(j(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=x(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),A=t.placement.split("-")[0],o=Q(A),i=t.placement.split("-")[1]||"",r=[];switch(e.behavior){case V.FLIP:r=[A,o];break;case V.CLOCKWISE:r=W(A);break;case V.COUNTERCLOCKWISE:r=W(A,!0);break;default:r=e.behavior}return r.forEach(function(s,a){if(A!==s||r.length===a+1)return t;A=t.placement.split("-")[0],o=Q(A);var c=t.offsets.popper,l=t.offsets.reference,u=Math.floor,d="left"===A&&u(c.right)>u(l.left)||"right"===A&&u(c.left)<u(l.right)||"top"===A&&u(c.bottom)>u(l.top)||"bottom"===A&&u(c.top)<u(l.bottom),f=u(c.left)<u(n.left),p=u(c.right)>u(n.right),h=u(c.top)<u(n.top),v=u(c.bottom)>u(n.bottom),g="left"===A&&f||"right"===A&&p||"top"===A&&h||"bottom"===A&&v,m=-1!==["top","bottom"].indexOf(A),b=!!e.flipVariations&&(m&&"start"===i&&f||m&&"end"===i&&p||!m&&"start"===i&&h||!m&&"end"===i&&v),y=!!e.flipVariationsByContent&&(m&&"start"===i&&p||m&&"end"===i&&f||!m&&"start"===i&&v||!m&&"end"===i&&h),w=b||y;(d||g||w)&&(t.flipped=!0,(d||g)&&(A=r[a+1]),w&&(i=function(t){return"end"===t?"start":"start"===t?"end":t}(i)),t.placement=A+(i?"-"+i:""),t.offsets.popper=C({},t.offsets.popper,L(t.instance.popper,t.offsets.reference,t.placement)),t=k(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],A=t.offsets,o=A.popper,i=A.reference,r=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[r?"left":"top"]=i[n]-(s?o[r?"width":"height"]:0),t.placement=Q(e),t.offsets.popper=I(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!U(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=S(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,A=e.y,o=t.offsets.popper,i=S(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var r=void 0!==i?i:e.gpuAcceleration,s=p(t.instance.popper),a=M(s),c={position:o.position},l=function(t,e){var n=t.offsets,A=n.popper,o=n.reference,i=Math.round,r=Math.floor,s=function(t){return t},a=i(o.width),c=i(A.width),l=-1!==["left","right"].indexOf(t.placement),u=-1!==t.placement.indexOf("-"),d=e?l||u||a%2==c%2?i:r:s,f=e?i:s;return{left:d(a%2==1&&c%2==1&&!u&&e?A.left-1:A.left),top:f(A.top),bottom:f(A.bottom),right:d(A.right)}}(t,window.devicePixelRatio<2||!z),u="bottom"===n?"top":"bottom",d="right"===A?"left":"right",f=G("transform"),h=void 0,v=void 0;if(v="bottom"===u?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-a.height+l.bottom:l.top,h="right"===d?"HTML"===s.nodeName?-s.clientWidth+l.right:-a.width+l.right:l.left,r&&f)c[f]="translate3d("+h+"px, "+v+"px, 0)",c[u]=0,c[d]=0,c.willChange="transform";else{var g="bottom"===u?-1:1,m="right"===d?-1:1;c[u]=v*g,c[d]=h*m,c.willChange=u+", "+d}var b={"x-placement":t.placement};return t.attributes=C({},b,t.attributes),t.styles=C({},c,t.styles),t.arrowStyles=C({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return R(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&R(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,A,o){var i=N(o,e,t,n.positionFixed),r=O(n.placement,i,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",r),R(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},K=function(){function t(e,n){var A=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};w(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(A.update)},this.update=r(this.update.bind(this)),this.options=C({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(C({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){A.options.modifiers[e]=C({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return C({name:t},A.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&s(t.onLoad)&&t.onLoad(A.reference,A.popper,A.options,t,A.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return E(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=O(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=L(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=k(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,j(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[G("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=Y(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return F.call(this)}}]),t}();K.Utils=("undefined"!=typeof window?window:t).PopperUtils,K.placements=Z,K.Defaults=J,e.a=K}).call(this,n(16))},2:function(t,e,n){"use strict";function A(t,e){for(var n=[],A={},o=0;o<e.length;o++){var i=e[o],r=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};A[r]?A[r].parts.push(s):n.push(A[r]={id:r,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return p});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},r=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,a=0,c=!1,l=function(){},u=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,o){c=n,u=o||{};var r=A(t,e);return h(r),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o];(a=i[s.id]).refs--,n.push(a)}e?h(r=A(t,e)):r=[];for(o=0;o<n.length;o++){var a;if(0===(a=n[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],A=i[n.id];if(A){A.refs++;for(var o=0;o<A.parts.length;o++)A.parts[o](n.parts[o]);for(;o<n.parts.length;o++)A.parts.push(g(n.parts[o]));A.parts.length>n.parts.length&&(A.parts.length=n.parts.length)}else{var r=[];for(o=0;o<n.parts.length;o++)r.push(g(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function g(t){var e,n,A=document.querySelector("style["+d+'~="'+t.id+'"]');if(A){if(c)return l;A.parentNode.removeChild(A)}if(f){var o=a++;A=s||(s=v()),e=y.bind(null,A,o,!1),n=y.bind(null,A,o,!0)}else A=v(),e=function(t,e){var n=e.css,A=e.media,o=e.sourceMap;A&&t.setAttribute("media",A);u.ssrId&&t.setAttribute(d,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,A),n=function(){A.parentNode.removeChild(A)};return e(t),function(A){if(A){if(A.css===t.css&&A.media===t.media&&A.sourceMap===t.sourceMap)return;e(t=A)}else n()}}var m,b=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function y(t,e,n,A){var o=n?"":A.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(i,r[e]):t.appendChild(i)}}},21:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return i});var A=void 0;function o(){o.init||(o.init=!0,A=-1!==function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var n=t.indexOf("rv:");return parseInt(t.substring(n+3,t.indexOf(".",n)),10)}var A=t.indexOf("Edge/");return A>0?parseInt(t.substring(A+5,t.indexOf(".",A)),10):-1}())}var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[],_scopeId:"data-v-b329ee4c",name:"resize-observer",methods:{compareAndNotify:function(){this._w===this.$el.offsetWidth&&this._h===this.$el.offsetHeight||(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.$emit("notify"))},addResizeHandlers:function(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers:function(){this._resizeObject&&this._resizeObject.onload&&(!A&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),delete this._resizeObject.onload)}},mounted:function(){var t=this;o(),this.$nextTick(function(){t._w=t.$el.offsetWidth,t._h=t.$el.offsetHeight});var e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",A&&this.$el.appendChild(e),e.data="about:blank",A||this.$el.appendChild(e)},beforeDestroy:function(){this.removeResizeHandlers()}};var r={version:"0.4.5",install:function(t){t.component("resize-observer",i),t.component("ResizeObserver",i)}},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==t&&(s=t.Vue),s&&s.use(r)}).call(this,n(16))},22:function(t,e,n){var A=n(83);"string"==typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);(0,n(2).default)("74831c08",A,!0,{})},25:function(t,e){},3:function(e,n){e.exports=t},30:function(t,e,n){"use strict";n.r(e);var A=n(14),o=n(7),i=n(8),r=function(t){var e=t.getBoundingClientRect(),n=document.documentElement.clientHeight,A=document.documentElement.clientWidth,o=Object.assign({});return o.top=e.top<0,o.left=e.left<0,o.bottom=e.bottom>n,o.right=e.right>A,o.any=o.top||o.left||o.bottom||o.right,o.all=o.top&&o.left&&o.bottom&&o.right,o.offsetY=o.top?e.top:o.bottom?e.bottom-n:0,o.offsetX=o.left?e.left:o.right?e.right-A:0,o},s=n(3),a=n.n(s),c=function(t,e,n){void 0!==t&&t.forEach(function(A,o){var i=!A.componentOptions&&A.tag,r=A.componentOptions&&"string"==typeof A.componentOptions.tag&&-1===e.indexOf(A.componentOptions.tag);(i||r)&&(a.a.util.warn("".concat(i?A.tag:A.componentOptions.tag," is not allowed inside the ").concat(n.$options.name," component"),n),t.splice(o,1))})},l=["ActionButton","ActionCheckbox","ActionInput","ActionLink","ActionRadio","ActionRouter","ActionText","ActionTextEditable"],u={name:"Actions",directives:{ClickOutside:A.directive,tooltip:o.default},props:{open:{type:Boolean,default:!1},menuAlign:{type:String,default:"center",validator:function(t){return["left","center","right"].indexOf(t)>-1}}},data:function(){return{actions:[],opened:this.open,focusIndex:0,randomId:"menu-"+Object(i.a)(),offsetX:0,children:this.$children}},computed:{hasMultipleActions:function(){return this.actions.length>1},isValidSingleAction:function(){return 1===this.actions.length&&null!==this.firstActionElement},firstActionVNode:function(){return this.actions[0]},firstAction:function(){return this.children[0]?this.children[0]:{}},firstActionBinding:function(){if(this.firstActionVNode&&this.firstActionVNode.componentOptions){var t=this.firstActionVNode.componentOptions.tag;if("ActionLink"===t)return{is:"a",href:this.firstAction.href,target:this.firstAction.target};if("ActionRouter"===t)return{is:"router-link",to:this.firstAction.to,exact:this.firstAction.exact};if("ActionButton"===t)return{is:"button"}}return null},firstActionEvent:function(){return this.firstActionVNode&&this.firstActionVNode.componentOptions&&this.firstActionVNode.componentOptions.listeners&&this.firstActionVNode.componentOptions.listeners.click},firstActionEventBinding:function(){return this.firstActionEvent?"click":null},firstActionClass:function(){var t=this.firstActionVNode&&this.firstActionVNode.data.staticClass,e=this.firstActionVNode&&this.firstActionVNode.data.class;return"".concat(t," ").concat(e)}},watch:{open:function(t){var e=this;this.opened=t,this.opened&&this.$nextTick(function(){e.onOpen()})}},beforeMount:function(){this.initActions(),c(this.$slots.default,l,this)},beforeUpdate:function(){this.initActions(),c(this.$slots.default,l,this)},methods:{toggleMenu:function(){var t=this;this.opened=!this.opened,this.opened?(this.$nextTick(function(){t.onOpen(),t.focusFirstAction()}),this.$emit("open")):this.offsetX=0,this.$emit("update:open",this.opened)},closeMenu:function(){this.opened&&(this.$emit("update:open",!1),this.$emit("close")),this.opened=!1,this.offsetX=0},onOpen:function(){this.offsetX=0;var t=r(this.$refs.menu);t.any&&(this.offsetX=t.offsetX>0?Math.round(t.offsetX)+5:Math.round(t.offsetX)-5)},onMouseFocusAction:function(t){if(document.activeElement!==t.target){var e=t.target.closest("li");if(e){var n=e.querySelector(".focusable");if(n){var A=this.$refs.menu.querySelectorAll(".focusable"),o=Array.prototype.indexOf.call(A,n);o>-1&&(this.focusIndex=o,this.focusAction())}}}},removeCurrentActive:function(){var t=this.$refs.menu.querySelector("li.active");t&&t.classList.remove("active")},focusAction:function(){var t=this.$refs.menu.querySelectorAll(".focusable")[this.focusIndex];if(t){var e=t.closest("li");t.focus(),e&&(this.removeCurrentActive(),e.classList.add("active"))}},focusPreviousAction:function(){this.focusIndex=Math.max(this.focusIndex-1,0),this.focusAction()},focusNextAction:function(){this.focusIndex=Math.min(this.focusIndex+1,this.$refs.menu.querySelectorAll(".focusable").length-1),this.focusAction()},focusFirstAction:function(){this.focusIndex=0,this.focusAction()},focusLastAction:function(){this.focusIndex=this.$el.querySelectorAll(".focusable").length-1,this.focusAction()},execFirstAction:function(t){this.firstActionEvent&&this.firstActionEvent(t)},initActions:function(){this.actions=(this.$slots.default||[]).filter(function(t){return!!t&&!!t.componentOptions})}}},d=(n(82),n(0)),f=n(25),p=n.n(f),h=Object(d.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isValidSingleAction?n("element",t._b({directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.firstAction.text,expression:"firstAction.text",modifiers:{auto:!0}}],staticClass:"action-item action-item--single",class:[t.firstAction.icon,t.firstActionClass],attrs:{"aria-label":t.firstAction.text,rel:"noreferrer noopener"},on:t._d({},[t.firstActionEventBinding,t.execFirstAction])},"element",t.firstActionBinding,!1),[n("span",{attrs:{"aria-hidden":!0,hidden:""}},[t._t("default")],2)]):n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasMultipleActions,expression:"hasMultipleActions"}],staticClass:"action-item",class:{"action-item--open":t.opened},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusPreviousAction(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusNextAction(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:e.shiftKey?(e.preventDefault(),t.focusPreviousAction(e)):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"page-up",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusFirstAction(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"page-down",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusLastAction(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.closeMenu(e))}]}},[n("a",{staticClass:"icon action-item__menutoggle",attrs:{href:"#","aria-haspopup":"true","aria-controls":t.randomId,"aria-expanded":t.opened},on:{click:function(e){return e.preventDefault(),t.toggleMenu(e)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.toggleMenu(e))}}}),t._v(" "),t.opened?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeMenu,expression:"closeMenu"}],ref:"menu",staticClass:"action-item__menu",class:["menu-"+t.menuAlign,{open:t.opened}],style:{marginRight:t.offsetX+"px"},attrs:{tabindex:"-1"},on:{mousemove:t.onMouseFocusAction}},[n("div",{staticClass:"action-item__menu_arrow",style:{transform:"translateX("+t.offsetX+"px)"}}),t._v(" "),n("ul",{attrs:{id:t.randomId,tabindex:"-1"}},[t._t("default")],2)]):t._e()])},[],!1,null,"1b35df2f",null);"function"==typeof p.a&&p()(h);var v=h.exports;n.d(e,"Actions",function(){return v});
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
 */e.default=v},32:function(t,e,n){var A=n(33);"string"==typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);(0,n(2).default)("941c791e",A,!0,{})},33:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".vue-tooltip[data-v-6506c7f]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:normal;word-break:normal;opacity:0;text-shadow:none;font-family:'Nunito', 'Open Sans', Frutiger, Calibri, 'Myriad Pro', Myriad, sans-serif;font-size:12px;font-weight:normal;font-style:normal;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-6506c7f][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-6506c7f][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-6506c7f][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-6506c7f][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-6506c7f][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-6506c7f][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-6506c7f] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-6506c7f] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n",""])},6:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return Qn});var A=n(17),o=n(21);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var A=e[n];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(t,A.key,A)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},A=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(A=A.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),A.forEach(function(e){s(t,e,n[e])})}return t}var c=function(){};function l(t){return"string"==typeof t&&(t=t.split(" ")),t}function u(t,e){var n,A=l(e);n=t.className instanceof c?l(t.className.baseVal):l(t.className),A.forEach(function(t){-1===n.indexOf(t)&&n.push(t)}),t instanceof SVGElement?t.setAttribute("class",n.join(" ")):t.className=n.join(" ")}function d(t,e){var n,A=l(e);n=t.className instanceof c?l(t.className.baseVal):l(t.className),A.forEach(function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}),t instanceof SVGElement?t.setAttribute("class",n.join(" ")):t.className=n.join(" ")}"undefined"!=typeof window&&(c=window.SVGAnimatedString);var f=!1;if("undefined"!=typeof window){f=!1;try{var p=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,p)}catch(t){}}var h={container:!1,delay:0,html:!1,placement:"top",title:"",template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",offset:0},v=[],g=function(){function t(e,n){var A=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_events",[]),s(this,"_setTooltipNodeEvent",function(t,e,n,o){var i=t.relatedreference||t.toElement||t.relatedTarget;return!!A._tooltipNode.contains(i)&&(A._tooltipNode.addEventListener(t.type,function n(i){var r=i.relatedreference||i.toElement||i.relatedTarget;A._tooltipNode.removeEventListener(t.type,n),e.contains(r)||A._scheduleHide(e,o.delay,o,i)}),!0)}),n=a({},h,n),e.jquery&&(e=e[0]),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.reference=e,this.options=n,this._isOpen=!1,this._init()}var e,n,o;return e=t,(n=[{key:"show",value:function(){this._show(this.reference,this.options)}},{key:"hide",value:function(){this._hide()}},{key:"dispose",value:function(){this._dispose()}},{key:"toggle",value:function(){return this._isOpen?this.hide():this.show()}},{key:"setClasses",value:function(t){this._classes=t}},{key:"setContent",value:function(t){this.options.title=t,this._tooltipNode&&this._setContent(t,this.options)}},{key:"setOptions",value:function(t){var e=!1,n=t&&t.classes||M.options.defaultClass;this._classes!==n&&(this.setClasses(n),e=!0),t=w(t);var A=!1,o=!1;for(var i in this.options.offset===t.offset&&this.options.placement===t.placement||(A=!0),(this.options.template!==t.template||this.options.trigger!==t.trigger||this.options.container!==t.container||e)&&(o=!0),t)this.options[i]=t[i];if(this._tooltipNode)if(o){var r=this._isOpen;this.dispose(),this._init(),r&&this.show()}else A&&this.popperInstance.update()}},{key:"_init",value:function(){var t="string"==typeof this.options.trigger?this.options.trigger.split(" "):[];this._isDisposed=!1,this._enableDocumentTouch=-1===t.indexOf("manual"),t=t.filter(function(t){return-1!==["click","hover","focus"].indexOf(t)}),this._setEventListeners(this.reference,t,this.options),this.$_originalTitle=this.reference.getAttribute("title"),this.reference.removeAttribute("title"),this.reference.setAttribute("data-original-title",this.$_originalTitle)}},{key:"_create",value:function(t,e){var n=window.document.createElement("div");n.innerHTML=e.trim();var A=n.childNodes[0];return A.id="tooltip_".concat(Math.random().toString(36).substr(2,10)),A.setAttribute("aria-hidden","true"),this.options.autoHide&&-1!==this.options.trigger.indexOf("hover")&&(A.addEventListener("mouseenter",this.hide),A.addEventListener("click",this.hide)),A}},{key:"_setContent",value:function(t,e){var n=this;this.asyncContent=!1,this._applyContent(t,e).then(function(){n.popperInstance.update()})}},{key:"_applyContent",value:function(t,e){var n=this;return new Promise(function(A,o){var i=e.html,r=n._tooltipNode;if(r){var s=r.querySelector(n.options.innerSelector);if(1===t.nodeType){if(i){for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(t)}}else{if("function"==typeof t){var a=t();return void(a&&"function"==typeof a.then?(n.asyncContent=!0,e.loadingClass&&u(r,e.loadingClass),e.loadingContent&&n._applyContent(e.loadingContent,e),a.then(function(t){return e.loadingClass&&d(r,e.loadingClass),n._applyContent(t,e)}).then(A).catch(o)):n._applyContent(a,e).then(A).catch(o))}i?s.innerHTML=t:s.innerText=t}A()}})}},{key:"_show",value:function(t,e){if(e&&"string"==typeof e.container&&!document.querySelector(e.container))return;clearTimeout(this._disposeTimer),delete(e=Object.assign({},e)).offset;var n=!0;this._tooltipNode&&(u(this._tooltipNode,this._classes),n=!1);var A=this._ensureShown(t,e);return n&&this._tooltipNode&&u(this._tooltipNode,this._classes),u(t,["v-tooltip-open"]),A}},{key:"_ensureShown",value:function(t,e){var n=this;if(this._isOpen)return this;if(this._isOpen=!0,v.push(this),this._tooltipNode)return this._tooltipNode.style.display="",this._tooltipNode.setAttribute("aria-hidden","false"),this.popperInstance.enableEventListeners(),this.popperInstance.update(),this.asyncContent&&this._setContent(e.title,e),this;var o=t.getAttribute("title")||e.title;if(!o)return this;var i=this._create(t,e.template);this._tooltipNode=i,t.setAttribute("aria-describedby",i.id);var r=this._findContainer(e.container,t);this._append(i,r);var s=a({},e.popperOptions,{placement:e.placement});return s.modifiers=a({},s.modifiers,{arrow:{element:this.options.arrowSelector}}),e.boundariesElement&&(s.modifiers.preventOverflow={boundariesElement:e.boundariesElement}),this.popperInstance=new A.a(t,i,s),this._setContent(o,e),requestAnimationFrame(function(){!n._isDisposed&&n.popperInstance?(n.popperInstance.update(),requestAnimationFrame(function(){n._isDisposed?n.dispose():n._isOpen&&i.setAttribute("aria-hidden","false")})):n.dispose()}),this}},{key:"_noLongerOpen",value:function(){var t=v.indexOf(this);-1!==t&&v.splice(t,1)}},{key:"_hide",value:function(){var t=this;if(!this._isOpen)return this;this._isOpen=!1,this._noLongerOpen(),this._tooltipNode.style.display="none",this._tooltipNode.setAttribute("aria-hidden","true"),this.popperInstance.disableEventListeners(),clearTimeout(this._disposeTimer);var e=M.options.disposeTimeout;return null!==e&&(this._disposeTimer=setTimeout(function(){t._tooltipNode&&(t._tooltipNode.removeEventListener("mouseenter",t.hide),t._tooltipNode.removeEventListener("click",t.hide),t._removeTooltipNode())},e)),d(this.reference,["v-tooltip-open"]),this}},{key:"_removeTooltipNode",value:function(){if(this._tooltipNode){var t=this._tooltipNode.parentNode;t&&(t.removeChild(this._tooltipNode),this.reference.removeAttribute("aria-describedby")),this._tooltipNode=null}}},{key:"_dispose",value:function(){var t=this;return this._isDisposed=!0,this.reference.removeAttribute("data-original-title"),this.$_originalTitle&&this.reference.setAttribute("title",this.$_originalTitle),this._events.forEach(function(e){var n=e.func,A=e.event;t.reference.removeEventListener(A,n)}),this._events=[],this._tooltipNode?(this._hide(),this._tooltipNode.removeEventListener("mouseenter",this.hide),this._tooltipNode.removeEventListener("click",this.hide),this.popperInstance.destroy(),this.popperInstance.options.removeOnDestroy||this._removeTooltipNode()):this._noLongerOpen(),this}},{key:"_findContainer",value:function(t,e){return"string"==typeof t?t=window.document.querySelector(t):!1===t&&(t=e.parentNode),t}},{key:"_append",value:function(t,e){e.appendChild(t)}},{key:"_setEventListeners",value:function(t,e,n){var A=this,o=[],i=[];e.forEach(function(t){switch(t){case"hover":o.push("mouseenter"),i.push("mouseleave"),A.options.hideOnTargetClick&&i.push("click");break;case"focus":o.push("focus"),i.push("blur"),A.options.hideOnTargetClick&&i.push("click");break;case"click":o.push("click"),i.push("click")}}),o.forEach(function(e){var o=function(e){!0!==A._isOpen&&(e.usedByTooltip=!0,A._scheduleShow(t,n.delay,n,e))};A._events.push({event:e,func:o}),t.addEventListener(e,o)}),i.forEach(function(e){var o=function(e){!0!==e.usedByTooltip&&A._scheduleHide(t,n.delay,n,e)};A._events.push({event:e,func:o}),t.addEventListener(e,o)})}},{key:"_onDocumentTouch",value:function(t){this._enableDocumentTouch&&this._scheduleHide(this.reference,this.options.delay,this.options,t)}},{key:"_scheduleShow",value:function(t,e,n){var A=this,o=e&&e.show||e||0;clearTimeout(this._scheduleTimer),this._scheduleTimer=window.setTimeout(function(){return A._show(t,n)},o)}},{key:"_scheduleHide",value:function(t,e,n,A){var o=this,i=e&&e.hide||e||0;clearTimeout(this._scheduleTimer),this._scheduleTimer=window.setTimeout(function(){if(!1!==o._isOpen&&document.body.contains(o._tooltipNode)){if("mouseleave"===A.type)if(o._setTooltipNodeEvent(A,t,e,n))return;o._hide(t,n)}},i)}}])&&r(e.prototype,n),o&&r(e,o),t}();"undefined"!=typeof document&&document.addEventListener("touchstart",function(t){for(var e=0;e<v.length;e++)v[e]._onDocumentTouch(t)},!f||{passive:!0,capture:!0});var m={enabled:!0},b=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],y={defaultPlacement:"top",defaultClass:"vue-tooltip-theme",defaultTargetClass:"has-tooltip",defaultHtml:!0,defaultTemplate:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',defaultArrowSelector:".tooltip-arrow, .tooltip__arrow",defaultInnerSelector:".tooltip-inner, .tooltip__inner",defaultDelay:0,defaultTrigger:"hover focus",defaultOffset:0,defaultContainer:"body",defaultBoundariesElement:void 0,defaultPopperOptions:{},defaultLoadingClass:"tooltip-loading",defaultLoadingContent:"...",autoHide:!0,defaultHideOnTargetClick:!0,disposeTimeout:5e3,popover:{defaultPlacement:"bottom",defaultClass:"vue-popover-theme",defaultBaseClass:"tooltip popover",defaultWrapperClass:"wrapper",defaultInnerClass:"tooltip-inner popover-inner",defaultArrowClass:"tooltip-arrow popover-arrow",defaultOpenClass:"open",defaultDelay:0,defaultTrigger:"click",defaultOffset:0,defaultContainer:"body",defaultBoundariesElement:void 0,defaultPopperOptions:{},defaultAutoHide:!0,defaultHandleResize:!0}};function w(t){var e={placement:void 0!==t.placement?t.placement:M.options.defaultPlacement,delay:void 0!==t.delay?t.delay:M.options.defaultDelay,html:void 0!==t.html?t.html:M.options.defaultHtml,template:void 0!==t.template?t.template:M.options.defaultTemplate,arrowSelector:void 0!==t.arrowSelector?t.arrowSelector:M.options.defaultArrowSelector,innerSelector:void 0!==t.innerSelector?t.innerSelector:M.options.defaultInnerSelector,trigger:void 0!==t.trigger?t.trigger:M.options.defaultTrigger,offset:void 0!==t.offset?t.offset:M.options.defaultOffset,container:void 0!==t.container?t.container:M.options.defaultContainer,boundariesElement:void 0!==t.boundariesElement?t.boundariesElement:M.options.defaultBoundariesElement,autoHide:void 0!==t.autoHide?t.autoHide:M.options.autoHide,hideOnTargetClick:void 0!==t.hideOnTargetClick?t.hideOnTargetClick:M.options.defaultHideOnTargetClick,loadingClass:void 0!==t.loadingClass?t.loadingClass:M.options.defaultLoadingClass,loadingContent:void 0!==t.loadingContent?t.loadingContent:M.options.defaultLoadingContent,popperOptions:a({},void 0!==t.popperOptions?t.popperOptions:M.options.defaultPopperOptions)};if(e.offset){var n=i(e.offset),A=e.offset;("number"===n||"string"===n&&-1===A.indexOf(","))&&(A="0, ".concat(A)),e.popperOptions.modifiers||(e.popperOptions.modifiers={}),e.popperOptions.modifiers.offset={offset:A}}return e.trigger&&-1!==e.trigger.indexOf("click")&&(e.hideOnTargetClick=!1),e}function E(t,e){for(var n=t.placement,A=0;A<b.length;A++){var o=b[A];e[o]&&(n=o)}return n}function B(t){var e=i(t);return"string"===e?t:!(!t||"object"!==e)&&t.content}function C(t){t._tooltip&&(t._tooltip.dispose(),delete t._tooltip,delete t._tooltipOldShow),t._tooltipTargetClasses&&(d(t,t._tooltipTargetClasses),delete t._tooltipTargetClasses)}function I(t,e){var n,A=e.value,o=(e.oldValue,e.modifiers),i=B(A);i&&m.enabled?(t._tooltip?((n=t._tooltip).setContent(i),n.setOptions(a({},A,{placement:E(A,o)}))):n=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},A=B(e),o=void 0!==e.classes?e.classes:M.options.defaultClass,i=a({title:A},w(a({},e,{placement:E(e,n)}))),r=t._tooltip=new g(t,i);r.setClasses(o),r._vueEl=t;var s=void 0!==e.targetClasses?e.targetClasses:M.options.defaultTargetClass;return t._tooltipTargetClasses=s,u(t,s),r}(t,A,o),void 0!==A.show&&A.show!==t._tooltipOldShow&&(t._tooltipOldShow=A.show,A.show?n.show():n.hide())):C(t)}var M={options:y,bind:I,update:I,unbind:function(t){C(t)}};function T(t){t.addEventListener("click",x),t.addEventListener("touchstart",O,!!f&&{passive:!0})}function _(t){t.removeEventListener("click",x),t.removeEventListener("touchstart",O),t.removeEventListener("touchend",N),t.removeEventListener("touchcancel",D)}function x(t){var e=t.currentTarget;t.closePopover=!e.$_vclosepopover_touch,t.closeAllPopover=e.$_closePopoverModifiers&&!!e.$_closePopoverModifiers.all}function O(t){if(1===t.changedTouches.length){var e=t.currentTarget;e.$_vclosepopover_touch=!0;var n=t.changedTouches[0];e.$_vclosepopover_touchPoint=n,e.addEventListener("touchend",N),e.addEventListener("touchcancel",D)}}function N(t){var e=t.currentTarget;if(e.$_vclosepopover_touch=!1,1===t.changedTouches.length){var n=t.changedTouches[0],A=e.$_vclosepopover_touchPoint;t.closePopover=Math.abs(n.screenY-A.screenY)<20&&Math.abs(n.screenX-A.screenX)<20,t.closeAllPopover=e.$_closePopoverModifiers&&!!e.$_closePopoverModifiers.all}}function D(t){t.currentTarget.$_vclosepopover_touch=!1}var Q={bind:function(t,e){var n=e.value,A=e.modifiers;t.$_closePopoverModifiers=A,(void 0===n||n)&&T(t)},update:function(t,e){var n=e.value,A=e.oldValue,o=e.modifiers;t.$_closePopoverModifiers=o,n!==A&&(void 0===n||n?T(t):_(t))},unbind:function(t){_(t)}};function L(t){var e=M.options.popover[t];return void 0===e?M.options[t]:e}var S=!1;"undefined"!=typeof window&&"undefined"!=typeof navigator&&(S=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);var k=[],j=function(){};"undefined"!=typeof window&&(j=window.Element);var G={name:"VPopover",components:{ResizeObserver:o.a},props:{open:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placement:{type:String,default:function(){return L("defaultPlacement")}},delay:{type:[String,Number,Object],default:function(){return L("defaultDelay")}},offset:{type:[String,Number],default:function(){return L("defaultOffset")}},trigger:{type:String,default:function(){return L("defaultTrigger")}},container:{type:[String,Object,j,Boolean],default:function(){return L("defaultContainer")}},boundariesElement:{type:[String,j],default:function(){return L("defaultBoundariesElement")}},popperOptions:{type:Object,default:function(){return L("defaultPopperOptions")}},popoverClass:{type:[String,Array],default:function(){return L("defaultClass")}},popoverBaseClass:{type:[String,Array],default:function(){return M.options.popover.defaultBaseClass}},popoverInnerClass:{type:[String,Array],default:function(){return M.options.popover.defaultInnerClass}},popoverWrapperClass:{type:[String,Array],default:function(){return M.options.popover.defaultWrapperClass}},popoverArrowClass:{type:[String,Array],default:function(){return M.options.popover.defaultArrowClass}},autoHide:{type:Boolean,default:function(){return M.options.popover.defaultAutoHide}},handleResize:{type:Boolean,default:function(){return M.options.popover.defaultHandleResize}},openGroup:{type:String,default:null},openClass:{type:[String,Array],default:function(){return M.options.popover.defaultOpenClass}}},data:function(){return{isOpen:!1,id:Math.random().toString(36).substr(2,10)}},computed:{cssClass:function(){return s({},this.openClass,this.isOpen)},popoverId:function(){return"popover_".concat(this.id)}},watch:{open:function(t){t?this.show():this.hide()},disabled:function(t,e){t!==e&&(t?this.hide():this.open&&this.show())},container:function(t){if(this.isOpen&&this.popperInstance){var e=this.$refs.popover,n=this.$refs.trigger,A=this.$_findContainer(this.container,n);if(!A)return void console.warn("No container for popover",this);A.appendChild(e),this.popperInstance.scheduleUpdate()}},trigger:function(t){this.$_removeEventListeners(),this.$_addEventListeners()},placement:function(t){var e=this;this.$_updatePopper(function(){e.popperInstance.options.placement=t})},offset:"$_restartPopper",boundariesElement:"$_restartPopper",popperOptions:{handler:"$_restartPopper",deep:!0}},created:function(){this.$_isDisposed=!1,this.$_mounted=!1,this.$_events=[],this.$_preventOpen=!1},mounted:function(){var t=this.$refs.popover;t.parentNode&&t.parentNode.removeChild(t),this.$_init(),this.open&&this.show()},deactivated:function(){this.hide()},beforeDestroy:function(){this.dispose()},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.event,A=(e.skipDelay,e.force),o=void 0!==A&&A;!o&&this.disabled||(this.$_scheduleShow(n),this.$emit("show")),this.$emit("update:open",!0),this.$_beingShowed=!0,requestAnimationFrame(function(){t.$_beingShowed=!1})},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.event;t.skipDelay;this.$_scheduleHide(e),this.$emit("hide"),this.$emit("update:open",!1)},dispose:function(){if(this.$_isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.popperInstance&&(this.popperInstance.destroy(),!this.popperInstance.options.removeOnDestroy)){var t=this.$refs.popover;t.parentNode&&t.parentNode.removeChild(t)}this.$_mounted=!1,this.popperInstance=null,this.isOpen=!1,this.$emit("dispose")},$_init:function(){-1===this.trigger.indexOf("manual")&&this.$_addEventListeners()},$_show:function(){var t=this,e=this.$refs.trigger,n=this.$refs.popover;if(clearTimeout(this.$_disposeTimer),!this.isOpen){if(this.popperInstance&&(this.isOpen=!0,this.popperInstance.enableEventListeners(),this.popperInstance.scheduleUpdate()),!this.$_mounted){var o=this.$_findContainer(this.container,e);if(!o)return void console.warn("No container for popover",this);o.appendChild(n),this.$_mounted=!0}if(!this.popperInstance){var i=a({},this.popperOptions,{placement:this.placement});if(i.modifiers=a({},i.modifiers,{arrow:a({},i.modifiers&&i.modifiers.arrow,{element:this.$refs.arrow})}),this.offset){var r=this.$_getOffset();i.modifiers.offset=a({},i.modifiers&&i.modifiers.offset,{offset:r})}this.boundariesElement&&(i.modifiers.preventOverflow=a({},i.modifiers&&i.modifiers.preventOverflow,{boundariesElement:this.boundariesElement})),this.popperInstance=new A.a(e,n,i),requestAnimationFrame(function(){if(t.hidden)return t.hidden=!1,void t.$_hide();!t.$_isDisposed&&t.popperInstance?(t.popperInstance.scheduleUpdate(),requestAnimationFrame(function(){if(t.hidden)return t.hidden=!1,void t.$_hide();t.$_isDisposed?t.dispose():t.isOpen=!0})):t.dispose()})}var s=this.openGroup;if(s)for(var c,l=0;l<k.length;l++)(c=k[l]).openGroup!==s&&(c.hide(),c.$emit("close-group"));k.push(this),this.$emit("apply-show")}},$_hide:function(){var t=this;if(this.isOpen){var e=k.indexOf(this);-1!==e&&k.splice(e,1),this.isOpen=!1,this.popperInstance&&this.popperInstance.disableEventListeners(),clearTimeout(this.$_disposeTimer);var n=M.options.popover.disposeTimeout||M.options.disposeTimeout;null!==n&&(this.$_disposeTimer=setTimeout(function(){var e=t.$refs.popover;e&&(e.parentNode&&e.parentNode.removeChild(e),t.$_mounted=!1)},n)),this.$emit("apply-hide")}},$_findContainer:function(t,e){return"string"==typeof t?t=window.document.querySelector(t):!1===t&&(t=e.parentNode),t},$_getOffset:function(){var t=i(this.offset),e=this.offset;return("number"===t||"string"===t&&-1===e.indexOf(","))&&(e="0, ".concat(e)),e},$_addEventListeners:function(){var t=this,e=this.$refs.trigger,n=[],A=[];("string"==typeof this.trigger?this.trigger.split(" ").filter(function(t){return-1!==["click","hover","focus"].indexOf(t)}):[]).forEach(function(t){switch(t){case"hover":n.push("mouseenter"),A.push("mouseleave");break;case"focus":n.push("focus"),A.push("blur");break;case"click":n.push("click"),A.push("click")}}),n.forEach(function(n){var A=function(e){t.isOpen||(e.usedByTooltip=!0,!t.$_preventOpen&&t.show({event:e}),t.hidden=!1)};t.$_events.push({event:n,func:A}),e.addEventListener(n,A)}),A.forEach(function(n){var A=function(e){e.usedByTooltip||(t.hide({event:e}),t.hidden=!0)};t.$_events.push({event:n,func:A}),e.addEventListener(n,A)})},$_scheduleShow:function(){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(clearTimeout(this.$_scheduleTimer),t)this.$_show();else{var e=parseInt(this.delay&&this.delay.show||this.delay||0);this.$_scheduleTimer=setTimeout(this.$_show.bind(this),e)}},$_scheduleHide:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(clearTimeout(this.$_scheduleTimer),n)this.$_hide();else{var A=parseInt(this.delay&&this.delay.hide||this.delay||0);this.$_scheduleTimer=setTimeout(function(){if(t.isOpen){if(e&&"mouseleave"===e.type)if(t.$_setTooltipNodeEvent(e))return;t.$_hide()}},A)}},$_setTooltipNodeEvent:function(t){var e=this,n=this.$refs.trigger,A=this.$refs.popover,o=t.relatedreference||t.toElement||t.relatedTarget;return!!A.contains(o)&&(A.addEventListener(t.type,function o(i){var r=i.relatedreference||i.toElement||i.relatedTarget;A.removeEventListener(t.type,o),n.contains(r)||e.hide({event:i})}),!0)},$_removeEventListeners:function(){var t=this.$refs.trigger;this.$_events.forEach(function(e){var n=e.func,A=e.event;t.removeEventListener(A,n)}),this.$_events=[]},$_updatePopper:function(t){this.popperInstance&&(t(),this.isOpen&&this.popperInstance.scheduleUpdate())},$_restartPopper:function(){if(this.popperInstance){var t=this.isOpen;this.dispose(),this.$_isDisposed=!1,this.$_init(),t&&this.show({skipDelay:!0,force:!0})}},$_handleGlobalClose:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.$_beingShowed||(this.hide({event:t}),t.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),n&&(this.$_preventOpen=!0,setTimeout(function(){e.$_preventOpen=!1},300)))},$_handleResize:function(){this.isOpen&&this.popperInstance&&(this.popperInstance.scheduleUpdate(),this.$emit("resize"))}}};function H(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function(n){var A=k[n];if(A.$refs.popover){var o=A.$refs.popover.contains(t.target);requestAnimationFrame(function(){(t.closeAllPopover||t.closePopover&&o||A.autoHide&&!o)&&A.$_handleGlobalClose(t,e)})}},A=0;A<k.length;A++)n(A)}"undefined"!=typeof document&&"undefined"!=typeof window&&(S?document.addEventListener("touchend",function(t){H(t,!0)},!f||{passive:!0,capture:!0}):window.addEventListener("click",function(t){H(t)},!0));var Y=function(t,e,n,A,o,i,r,s,a,c){"boolean"!=typeof r&&(a=s,s=r,r=!1);var l,u="function"==typeof n?n.options:n;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),A&&(u._scopeId=A),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,a(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):e&&(l=r?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),l)if(u.functional){var d=u.render;u.render=function(t,e){return l.call(e),d(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return n},F=G,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-popover",class:t.cssClass},[n("div",{ref:"trigger",staticClass:"trigger",staticStyle:{display:"inline-block"},attrs:{"aria-describedby":t.popoverId,tabindex:-1!==t.trigger.indexOf("focus")?0:void 0}},[t._t("default")],2),t._v(" "),n("div",{ref:"popover",class:[t.popoverBaseClass,t.popoverClass,t.cssClass],style:{visibility:t.isOpen?"visible":"hidden"},attrs:{id:t.popoverId,"aria-hidden":t.isOpen?"false":"true",tabindex:t.autoHide?0:void 0},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.autoHide&&t.hide()}}},[n("div",{class:t.popoverWrapperClass},[n("div",{ref:"inner",class:t.popoverInnerClass,staticStyle:{position:"relative"}},[n("div",[t._t("popover")],2),t._v(" "),t.handleResize?n("ResizeObserver",{on:{notify:t.$_handleResize}}):t._e()],1),t._v(" "),n("div",{ref:"arrow",class:t.popoverArrowClass})])])])};P._withStripped=!0;var R=Y({render:P,staticRenderFns:[]},void 0,F,void 0,!1,void 0,void 0,void 0);var z=function(){this.__data__=[],this.size=0};var U=function(t,e){return t===e||t!=t&&e!=e};var Z=function(t,e){for(var n=t.length;n--;)if(U(t[n][0],e))return n;return-1},$=Array.prototype.splice;var W=function(t){var e=this.__data__,n=Z(e,t);return!(n<0||(n==e.length-1?e.pop():$.call(e,n,1),--this.size,0))};var V=function(t){var e=this.__data__,n=Z(e,t);return n<0?void 0:e[n][1]};var X=function(t){return Z(this.__data__,t)>-1};var J=function(t,e){var n=this.__data__,A=Z(n,t);return A<0?(++this.size,n.push([t,e])):n[A][1]=e,this};function K(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var A=t[e];this.set(A[0],A[1])}}K.prototype.clear=z,K.prototype.delete=W,K.prototype.get=V,K.prototype.has=X,K.prototype.set=J;var q=K;var tt=function(){this.__data__=new q,this.size=0};var et=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var nt=function(t){return this.__data__.get(t)};var At=function(t){return this.__data__.has(t)},ot="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function it(t,e){return t(e={exports:{}},e.exports),e.exports}var rt="object"==typeof ot&&ot&&ot.Object===Object&&ot,st="object"==typeof self&&self&&self.Object===Object&&self,at=rt||st||Function("return this")(),ct=at.Symbol,lt=Object.prototype,ut=lt.hasOwnProperty,dt=lt.toString,ft=ct?ct.toStringTag:void 0;var pt=function(t){var e=ut.call(t,ft),n=t[ft];try{t[ft]=void 0;var A=!0}catch(t){}var o=dt.call(t);return A&&(e?t[ft]=n:delete t[ft]),o},ht=Object.prototype.toString;var vt=function(t){return ht.call(t)},gt="[object Null]",mt="[object Undefined]",bt=ct?ct.toStringTag:void 0;var yt=function(t){return null==t?void 0===t?mt:gt:bt&&bt in Object(t)?pt(t):vt(t)};var wt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Et="[object AsyncFunction]",Bt="[object Function]",Ct="[object GeneratorFunction]",It="[object Proxy]";var Mt,Tt=function(t){if(!wt(t))return!1;var e=yt(t);return e==Bt||e==Ct||e==Et||e==It},_t=at["__core-js_shared__"],xt=(Mt=/[^.]+$/.exec(_t&&_t.keys&&_t.keys.IE_PROTO||""))?"Symbol(src)_1."+Mt:"";var Ot=function(t){return!!xt&&xt in t},Nt=Function.prototype.toString;var Dt=function(t){if(null!=t){try{return Nt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Qt=/^\[object .+?Constructor\]$/,Lt=Function.prototype,St=Object.prototype,kt=Lt.toString,jt=St.hasOwnProperty,Gt=RegExp("^"+kt.call(jt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ht=function(t){return!(!wt(t)||Ot(t))&&(Tt(t)?Gt:Qt).test(Dt(t))};var Yt=function(t,e){return null==t?void 0:t[e]};var Ft=function(t,e){var n=Yt(t,e);return Ht(n)?n:void 0},Pt=Ft(at,"Map"),Rt=Ft(Object,"create");var zt=function(){this.__data__=Rt?Rt(null):{},this.size=0};var Ut=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Zt="__lodash_hash_undefined__",$t=Object.prototype.hasOwnProperty;var Wt=function(t){var e=this.__data__;if(Rt){var n=e[t];return n===Zt?void 0:n}return $t.call(e,t)?e[t]:void 0},Vt=Object.prototype.hasOwnProperty;var Xt=function(t){var e=this.__data__;return Rt?void 0!==e[t]:Vt.call(e,t)},Jt="__lodash_hash_undefined__";var Kt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Rt&&void 0===e?Jt:e,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var A=t[e];this.set(A[0],A[1])}}qt.prototype.clear=zt,qt.prototype.delete=Ut,qt.prototype.get=Wt,qt.prototype.has=Xt,qt.prototype.set=Kt;var te=qt;var ee=function(){this.size=0,this.__data__={hash:new te,map:new(Pt||q),string:new te}};var ne=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ae=function(t,e){var n=t.__data__;return ne(e)?n["string"==typeof e?"string":"hash"]:n.map};var oe=function(t){var e=Ae(this,t).delete(t);return this.size-=e?1:0,e};var ie=function(t){return Ae(this,t).get(t)};var re=function(t){return Ae(this,t).has(t)};var se=function(t,e){var n=Ae(this,t),A=n.size;return n.set(t,e),this.size+=n.size==A?0:1,this};function ae(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var A=t[e];this.set(A[0],A[1])}}ae.prototype.clear=ee,ae.prototype.delete=oe,ae.prototype.get=ie,ae.prototype.has=re,ae.prototype.set=se;var ce=ae,le=200;var ue=function(t,e){var n=this.__data__;if(n instanceof q){var A=n.__data__;if(!Pt||A.length<le-1)return A.push([t,e]),this.size=++n.size,this;n=this.__data__=new ce(A)}return n.set(t,e),this.size=n.size,this};function de(t){var e=this.__data__=new q(t);this.size=e.size}de.prototype.clear=tt,de.prototype.delete=et,de.prototype.get=nt,de.prototype.has=At,de.prototype.set=ue;var fe=de,pe=function(){try{var t=Ft(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var he=function(t,e,n){"__proto__"==e&&pe?pe(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n};var ve=function(t,e,n){(void 0===n||U(t[e],n))&&(void 0!==n||e in t)||he(t,e,n)};var ge=function(t){return function(e,n,A){for(var o=-1,i=Object(e),r=A(e),s=r.length;s--;){var a=r[t?s:++o];if(!1===n(i[a],a,i))break}return e}}(),me=it(function(t,e){var n=e&&!e.nodeType&&e,A=n&&t&&!t.nodeType&&t,o=A&&A.exports===n?at.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,A=i?i(n):new t.constructor(n);return t.copy(A),A}}),be=at.Uint8Array;var ye=function(t){var e=new t.constructor(t.byteLength);return new be(e).set(new be(t)),e};var we=function(t,e){var n=e?ye(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};var Ee=function(t,e){var n=-1,A=t.length;for(e||(e=Array(A));++n<A;)e[n]=t[n];return e},Be=Object.create,Ce=function(){function t(){}return function(e){if(!wt(e))return{};if(Be)return Be(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var Ie=function(t,e){return function(n){return t(e(n))}}(Object.getPrototypeOf,Object),Me=Object.prototype;var Te=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Me)};var _e=function(t){return"function"!=typeof t.constructor||Te(t)?{}:Ce(Ie(t))};var xe=function(t){return null!=t&&"object"==typeof t},Oe="[object Arguments]";var Ne=function(t){return xe(t)&&yt(t)==Oe},De=Object.prototype,Qe=De.hasOwnProperty,Le=De.propertyIsEnumerable,Se=Ne(function(){return arguments}())?Ne:function(t){return xe(t)&&Qe.call(t,"callee")&&!Le.call(t,"callee")},ke=Array.isArray,je=9007199254740991;var Ge=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=je};var He=function(t){return null!=t&&Ge(t.length)&&!Tt(t)};var Ye=function(t){return xe(t)&&He(t)};var Fe=function(){return!1},Pe=it(function(t,e){var n=e&&!e.nodeType&&e,A=n&&t&&!t.nodeType&&t,o=A&&A.exports===n?at.Buffer:void 0,i=(o?o.isBuffer:void 0)||Fe;t.exports=i}),Re="[object Object]",ze=Function.prototype,Ue=Object.prototype,Ze=ze.toString,$e=Ue.hasOwnProperty,We=Ze.call(Object);var Ve=function(t){if(!xe(t)||yt(t)!=Re)return!1;var e=Ie(t);if(null===e)return!0;var n=$e.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Ze.call(n)==We},Xe={};Xe["[object Float32Array]"]=Xe["[object Float64Array]"]=Xe["[object Int8Array]"]=Xe["[object Int16Array]"]=Xe["[object Int32Array]"]=Xe["[object Uint8Array]"]=Xe["[object Uint8ClampedArray]"]=Xe["[object Uint16Array]"]=Xe["[object Uint32Array]"]=!0,Xe["[object Arguments]"]=Xe["[object Array]"]=Xe["[object ArrayBuffer]"]=Xe["[object Boolean]"]=Xe["[object DataView]"]=Xe["[object Date]"]=Xe["[object Error]"]=Xe["[object Function]"]=Xe["[object Map]"]=Xe["[object Number]"]=Xe["[object Object]"]=Xe["[object RegExp]"]=Xe["[object Set]"]=Xe["[object String]"]=Xe["[object WeakMap]"]=!1;var Je=function(t){return xe(t)&&Ge(t.length)&&!!Xe[yt(t)]};var Ke=function(t){return function(e){return t(e)}},qe=it(function(t,e){var n=e&&!e.nodeType&&e,A=n&&t&&!t.nodeType&&t,o=A&&A.exports===n&&rt.process,i=function(){try{var t=A&&A.require&&A.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),tn=qe&&qe.isTypedArray,en=tn?Ke(tn):Je;var nn=function(t,e){if("__proto__"!=e)return t[e]},An=Object.prototype.hasOwnProperty;var on=function(t,e,n){var A=t[e];An.call(t,e)&&U(A,n)&&(void 0!==n||e in t)||he(t,e,n)};var rn=function(t,e,n,A){var o=!n;n||(n={});for(var i=-1,r=e.length;++i<r;){var s=e[i],a=A?A(n[s],t[s],s,n,t):void 0;void 0===a&&(a=t[s]),o?he(n,s,a):on(n,s,a)}return n};var sn=function(t,e){for(var n=-1,A=Array(t);++n<t;)A[n]=e(n);return A},an=9007199254740991,cn=/^(?:0|[1-9]\d*)$/;var ln=function(t,e){var n=typeof t;return!!(e=null==e?an:e)&&("number"==n||"symbol"!=n&&cn.test(t))&&t>-1&&t%1==0&&t<e},un=Object.prototype.hasOwnProperty;var dn=function(t,e){var n=ke(t),A=!n&&Se(t),o=!n&&!A&&Pe(t),i=!n&&!A&&!o&&en(t),r=n||A||o||i,s=r?sn(t.length,String):[],a=s.length;for(var c in t)!e&&!un.call(t,c)||r&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ln(c,a))||s.push(c);return s};var fn=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},pn=Object.prototype.hasOwnProperty;var hn=function(t){if(!wt(t))return fn(t);var e=Te(t),n=[];for(var A in t)("constructor"!=A||!e&&pn.call(t,A))&&n.push(A);return n};var vn=function(t){return He(t)?dn(t,!0):hn(t)};var gn=function(t){return rn(t,vn(t))};var mn=function(t,e,n,A,o,i,r){var s=nn(t,n),a=nn(e,n),c=r.get(a);if(c)ve(t,n,c);else{var l=i?i(s,a,n+"",t,e,r):void 0,u=void 0===l;if(u){var d=ke(a),f=!d&&Pe(a),p=!d&&!f&&en(a);l=a,d||f||p?ke(s)?l=s:Ye(s)?l=Ee(s):f?(u=!1,l=me(a,!0)):p?(u=!1,l=we(a,!0)):l=[]:Ve(a)||Se(a)?(l=s,Se(s)?l=gn(s):wt(s)&&!Tt(s)||(l=_e(a))):u=!1}u&&(r.set(a,l),o(l,a,A,i,r),r.delete(a)),ve(t,n,l)}};var bn=function t(e,n,A,o,i){e!==n&&ge(n,function(r,s){if(wt(r))i||(i=new fe),mn(e,n,s,A,t,o,i);else{var a=o?o(nn(e,s),r,s+"",e,n,i):void 0;void 0===a&&(a=r),ve(e,s,a)}},vn)};var yn=function(t){return t};var wn=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},En=Math.max;var Bn=function(t,e,n){return e=En(void 0===e?t.length-1:e,0),function(){for(var A=arguments,o=-1,i=En(A.length-e,0),r=Array(i);++o<i;)r[o]=A[e+o];o=-1;for(var s=Array(e+1);++o<e;)s[o]=A[o];return s[e]=n(r),wn(t,this,s)}};var Cn=function(t){return function(){return t}},In=pe?function(t,e){return pe(t,"toString",{configurable:!0,enumerable:!1,value:Cn(e),writable:!0})}:yn,Mn=800,Tn=16,_n=Date.now;var xn=function(t){var e=0,n=0;return function(){var A=_n(),o=Tn-(A-n);if(n=A,o>0){if(++e>=Mn)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(In);var On=function(t,e){return xn(Bn(t,e,yn),t+"")};var Nn=function(t,e,n){if(!wt(n))return!1;var A=typeof e;return!!("number"==A?He(n)&&ln(e,n.length):"string"==A&&e in n)&&U(n[e],t)};var Dn=function(t){return On(function(e,n){var A=-1,o=n.length,i=o>1?n[o-1]:void 0,r=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,r&&Nn(n[0],n[1],r)&&(i=o<3?void 0:i,o=1),e=Object(e);++A<o;){var s=n[A];s&&t(e,s,A,i)}return e})}(function(t,e,n){bn(t,e,n)});!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var A=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&A.firstChild?A.insertBefore(o,A.firstChild):A.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}");var Qn=M,Ln={install:function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.installed){t.installed=!0;var A={};Dn(A,y,n),Ln.options=A,M.options=A,e.directive("tooltip",M),e.directive("close-popover",Q),e.component("v-popover",R)}},get enabled(){return m.enabled},set enabled(t){m.enabled=t}},Sn=null;"undefined"!=typeof window?Sn=window.Vue:void 0!==t&&(Sn=t.Vue),Sn&&Sn.use(Ln)}).call(this,n(16))},7:function(t,e,n){"use strict";n.r(e);var A=n(6);n(32);
/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
A.a.options.defaultTemplate='<div class="vue-tooltip" role="tooltip" data-v-'.concat("6506c7f",'><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'),A.a.options.defaultHtml=!1,e.default=A.a},8:function(t,e,n){"use strict";
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
 */e.a=function(t){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,t||5)}},82:function(t,e,n){"use strict";var A=n(22);n.n(A).a},83:function(t,e,n){e=t.exports=n(1)(!1);var A=n(9),o=A(n(10)),i=A(n(11)),r=A(n(12)),s=A(n(13));e.push([t.i,'@font-face{font-family:"iconfont-vue";src:url('+o+");src:url("+o+') format("embedded-opentype"),url('+i+') format("woff"),url('+r+') format("truetype"),url('+s+') format("svg")}.icon[data-v-1b35df2f]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.arrow-left[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right-double[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.close[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.confirm-fade[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.confirm[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.menu[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.more[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.pause[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.play[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.action-item[data-v-1b35df2f]{position:relative;display:inline-block}.action-item--single[data-v-1b35df2f]:hover,.action-item--single[data-v-1b35df2f]:focus,.action-item--single[data-v-1b35df2f]:active,.action-item__menutoggle[data-v-1b35df2f]:hover,.action-item__menutoggle[data-v-1b35df2f]:focus,.action-item__menutoggle[data-v-1b35df2f]:active{border-radius:22px;background-color:rgba(127,127,127,0.25) !important;opacity:1}.action-item.action-item--open .action-item__menutoggle[data-v-1b35df2f]{opacity:1;border-radius:22px;background-color:rgba(127,127,127,0.25)}.action-item--single[data-v-1b35df2f],.action-item__menutoggle[data-v-1b35df2f]{box-sizing:border-box;width:44px;height:44px;margin:0;padding:14px;cursor:pointer;border:none;background-color:transparent}.action-item__menutoggle[data-v-1b35df2f]{display:flex;align-items:center;justify-content:center;opacity:.7;font-size:16px}.action-item__menutoggle[data-v-1b35df2f]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.action-item--single[data-v-1b35df2f]{opacity:.7}.action-item--single[data-v-1b35df2f]:hover,.action-item--single[data-v-1b35df2f]:focus,.action-item--single[data-v-1b35df2f]:active{opacity:1}.action-item--single>[hidden][data-v-1b35df2f]{display:none}.action-item--multiple[data-v-1b35df2f]{position:relative}.action-item__menu[data-v-1b35df2f]{position:absolute;z-index:110;right:50%;display:none;margin:10px;margin-top:-5px;transform:translateX(50%);color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background);filter:drop-shadow(0 1px 3px var(--color-box-shadow))}.action-item__menu ul[data-v-1b35df2f]>:not(li){display:none}.action-item__menu.open[data-v-1b35df2f]{display:block}.action-item__menu .action-item__menu_arrow[data-v-1b35df2f]{position:absolute;right:50%;bottom:100%;width:0;height:0;margin-right:-9px;content:\' \';pointer-events:none;border:solid transparent;border-width:9px;border-bottom-color:var(--color-main-background)}.action-item__menu.menu-right[data-v-1b35df2f]{right:0;left:auto;transform:none}.action-item__menu.menu-right .action-item__menu_arrow[data-v-1b35df2f]{right:13px;margin-right:0}.action-item__menu.menu-left[data-v-1b35df2f]{right:auto;left:0;transform:none}.action-item__menu.menu-left .action-item__menu_arrow[data-v-1b35df2f]{right:auto;left:13px;margin-right:0}.ie .action-item__menu[data-v-1b35df2f],.ie .action-item__menu .action-item__menu_arrow[data-v-1b35df2f],.edge .action-item__menu[data-v-1b35df2f],.edge .action-item__menu .action-item__menu_arrow[data-v-1b35df2f]{border:1px solid var(--color-border)}\n',""])},9:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof(t=t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}}})});
//# sourceMappingURL=Actions.js.map

/***/ }),

/***/ "./node_modules/vue-click-outside/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-click-outside/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ })

}]);
//# sourceMappingURL=vendors~editor-rich.js.map?v=9badaf036a5918fb8cdd