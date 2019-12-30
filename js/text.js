/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"text": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendor":"vendor","vendors~editor":"vendors~editor","editor":"editor","highlight/1c":"highlight/1c","highlight/abnf":"highlight/abnf","highlight/accesslog":"highlight/accesslog","highlight/actionscript":"highlight/actionscript","highlight/ada":"highlight/ada","highlight/angelscript":"highlight/angelscript","highlight/apache":"highlight/apache","highlight/applescript":"highlight/applescript","highlight/arcade":"highlight/arcade","highlight/arduino":"highlight/arduino","highlight/armasm":"highlight/armasm","highlight/asciidoc":"highlight/asciidoc","highlight/aspectj":"highlight/aspectj","highlight/autohotkey":"highlight/autohotkey","highlight/autoit":"highlight/autoit","highlight/avrasm":"highlight/avrasm","highlight/awk":"highlight/awk","highlight/axapta":"highlight/axapta","highlight/bash":"highlight/bash","highlight/basic":"highlight/basic","highlight/bnf":"highlight/bnf","highlight/brainfuck":"highlight/brainfuck","highlight/cal":"highlight/cal","highlight/capnproto":"highlight/capnproto","highlight/ceylon":"highlight/ceylon","highlight/clean":"highlight/clean","highlight/clojure":"highlight/clojure","highlight/clojure-repl":"highlight/clojure-repl","highlight/cmake":"highlight/cmake","highlight/coffeescript":"highlight/coffeescript","highlight/coq":"highlight/coq","highlight/cos":"highlight/cos","highlight/cpp":"highlight/cpp","highlight/crmsh":"highlight/crmsh","highlight/crystal":"highlight/crystal","highlight/cs":"highlight/cs","highlight/csp":"highlight/csp","highlight/css":"highlight/css","highlight/d":"highlight/d","highlight/dart":"highlight/dart","highlight/delphi":"highlight/delphi","highlight/diff":"highlight/diff","highlight/django":"highlight/django","highlight/dns":"highlight/dns","highlight/dockerfile":"highlight/dockerfile","highlight/dos":"highlight/dos","highlight/dsconfig":"highlight/dsconfig","highlight/dts":"highlight/dts","highlight/dust":"highlight/dust","highlight/ebnf":"highlight/ebnf","highlight/elixir":"highlight/elixir","highlight/elm":"highlight/elm","highlight/erb":"highlight/erb","highlight/erlang":"highlight/erlang","highlight/erlang-repl":"highlight/erlang-repl","highlight/excel":"highlight/excel","highlight/fix":"highlight/fix","highlight/flix":"highlight/flix","highlight/fortran":"highlight/fortran","highlight/fsharp":"highlight/fsharp","highlight/gams":"highlight/gams","highlight/gauss":"highlight/gauss","highlight/gcode":"highlight/gcode","highlight/gherkin":"highlight/gherkin","highlight/glsl":"highlight/glsl","highlight/gml":"highlight/gml","highlight/go":"highlight/go","highlight/golo":"highlight/golo","highlight/gradle":"highlight/gradle","highlight/groovy":"highlight/groovy","highlight/haml":"highlight/haml","highlight/handlebars":"highlight/handlebars","highlight/haskell":"highlight/haskell","highlight/haxe":"highlight/haxe","highlight/hsp":"highlight/hsp","highlight/htmlbars":"highlight/htmlbars","highlight/http":"highlight/http","highlight/hy":"highlight/hy","highlight/inform7":"highlight/inform7","highlight/ini":"highlight/ini","highlight/irpf90":"highlight/irpf90","highlight/isbl":"highlight/isbl","highlight/java":"highlight/java","highlight/javascript":"highlight/javascript","highlight/jboss-cli":"highlight/jboss-cli","highlight/json":"highlight/json","highlight/julia":"highlight/julia","highlight/julia-repl":"highlight/julia-repl","highlight/kotlin":"highlight/kotlin","highlight/lasso":"highlight/lasso","highlight/ldif":"highlight/ldif","highlight/leaf":"highlight/leaf","highlight/less":"highlight/less","highlight/lisp":"highlight/lisp","highlight/livecodeserver":"highlight/livecodeserver","highlight/livescript":"highlight/livescript","highlight/llvm":"highlight/llvm","highlight/lsl":"highlight/lsl","highlight/lua":"highlight/lua","highlight/makefile":"highlight/makefile","highlight/markdown":"highlight/markdown","highlight/mathematica":"highlight/mathematica","highlight/matlab":"highlight/matlab","highlight/maxima":"highlight/maxima","highlight/mel":"highlight/mel","highlight/mercury":"highlight/mercury","highlight/mipsasm":"highlight/mipsasm","highlight/mizar":"highlight/mizar","highlight/mojolicious":"highlight/mojolicious","highlight/monkey":"highlight/monkey","highlight/moonscript":"highlight/moonscript","highlight/n1ql":"highlight/n1ql","highlight/nginx":"highlight/nginx","highlight/nimrod":"highlight/nimrod","highlight/nix":"highlight/nix","highlight/nsis":"highlight/nsis","highlight/objectivec":"highlight/objectivec","highlight/ocaml":"highlight/ocaml","highlight/openscad":"highlight/openscad","highlight/oxygene":"highlight/oxygene","highlight/parser3":"highlight/parser3","highlight/perl":"highlight/perl","highlight/pf":"highlight/pf","highlight/pgsql":"highlight/pgsql","highlight/php":"highlight/php","highlight/plaintext":"highlight/plaintext","highlight/pony":"highlight/pony","highlight/powershell":"highlight/powershell","highlight/processing":"highlight/processing","highlight/profile":"highlight/profile","highlight/prolog":"highlight/prolog","highlight/properties":"highlight/properties","highlight/protobuf":"highlight/protobuf","highlight/puppet":"highlight/puppet","highlight/purebasic":"highlight/purebasic","highlight/python":"highlight/python","highlight/q":"highlight/q","highlight/qml":"highlight/qml","highlight/r":"highlight/r","highlight/reasonml":"highlight/reasonml","highlight/rib":"highlight/rib","highlight/roboconf":"highlight/roboconf","highlight/routeros":"highlight/routeros","highlight/rsl":"highlight/rsl","highlight/ruby":"highlight/ruby","highlight/ruleslanguage":"highlight/ruleslanguage","highlight/rust":"highlight/rust","highlight/sas":"highlight/sas","highlight/scala":"highlight/scala","highlight/scheme":"highlight/scheme","highlight/scilab":"highlight/scilab","highlight/scss":"highlight/scss","highlight/shell":"highlight/shell","highlight/smali":"highlight/smali","highlight/smalltalk":"highlight/smalltalk","highlight/sml":"highlight/sml","highlight/sqf":"highlight/sqf","highlight/sql":"highlight/sql","highlight/stan":"highlight/stan","highlight/stata":"highlight/stata","highlight/step21":"highlight/step21","highlight/stylus":"highlight/stylus","highlight/subunit":"highlight/subunit","highlight/swift":"highlight/swift","highlight/taggerscript":"highlight/taggerscript","highlight/tap":"highlight/tap","highlight/tcl":"highlight/tcl","highlight/tex":"highlight/tex","highlight/thrift":"highlight/thrift","highlight/tp":"highlight/tp","highlight/twig":"highlight/twig","highlight/typescript":"highlight/typescript","highlight/vala":"highlight/vala","highlight/vbnet":"highlight/vbnet","highlight/vbscript":"highlight/vbscript","highlight/vbscript-html":"highlight/vbscript-html","highlight/verilog":"highlight/verilog","highlight/vhdl":"highlight/vhdl","highlight/vim":"highlight/vim","highlight/x86asm":"highlight/x86asm","highlight/xl":"highlight/xl","highlight/xml":"highlight/xml","highlight/xquery":"highlight/xquery","highlight/yaml":"highlight/yaml","highlight/zephir":"highlight/zephir","vendors~editor-collab~editor-guest":"vendors~editor-collab~editor-guest","editor-guest":"editor-guest","vendors~editor-collab~editor-rich":"vendors~editor-collab~editor-rich","editor-collab":"editor-collab","vendors~editor-rich":"vendors~editor-rich","editor-rich":"editor-rich","vendors~files-modal":"vendors~files-modal","files-modal":"files-modal"}[chunkId]||chunkId) + ".js?v=" + {"vendor":"5f691150bebafb052cb7","vendors~editor":"84478d81a8687957a2a6","editor":"c4343ed946e870eacd74","highlight/1c":"85027d5972eb8bf086d2","highlight/abnf":"ed45f76c7e8586d3753d","highlight/accesslog":"e554f8daf684ed22d8bd","highlight/actionscript":"396b495bd10755d71713","highlight/ada":"a6292d66a8d206675055","highlight/angelscript":"ce8c50a64d6180b012ad","highlight/apache":"456e6c61be77fa07d5ba","highlight/applescript":"86c67d3578bf4f26cd2f","highlight/arcade":"94e90d899e2028138426","highlight/arduino":"3a8f0c26391ffacc7968","highlight/armasm":"07f0cdb909018a533a3c","highlight/asciidoc":"60c06dde68ffde53ec5e","highlight/aspectj":"f75ccc8d2beb427e9384","highlight/autohotkey":"992288e1e675e774b82e","highlight/autoit":"5b7c2476a74bae697df2","highlight/avrasm":"caed7f8eb23186aff76b","highlight/awk":"bce56a92cf60ce55b032","highlight/axapta":"f5c0e9b3cb180427249e","highlight/bash":"b54cffe509cb34c2f43c","highlight/basic":"0afb8c8990fbee548f79","highlight/bnf":"3390749f96170ab6adfc","highlight/brainfuck":"f5acc798532c91214ae6","highlight/cal":"b8af51b081cf53a85f63","highlight/capnproto":"dcec637d469c0a133d5a","highlight/ceylon":"979e2e0960e345ea4445","highlight/clean":"fb02f7853305d02f63c7","highlight/clojure":"7bff0d4c18029d0b4ba8","highlight/clojure-repl":"84b7313dfc1274b1c8b2","highlight/cmake":"5c7274e15a94c8332cba","highlight/coffeescript":"f9b051297608a08ca7ce","highlight/coq":"c809e77f7e21813d0e52","highlight/cos":"02d28a7405d93146c79c","highlight/cpp":"1ce34267cf5738cd3842","highlight/crmsh":"09cf72f9c6372a53c03b","highlight/crystal":"2b6ede22b8c4b4cec98e","highlight/cs":"9a1a4529cc9364f78070","highlight/csp":"689568fc18d081939f22","highlight/css":"d521b5b3f37883012b09","highlight/d":"3f316a436280078f67b3","highlight/dart":"014e826b0c477c3a6051","highlight/delphi":"5ec9c8805d4424c8bc81","highlight/diff":"43655601fadafc716793","highlight/django":"04cb79f73a235fcf817e","highlight/dns":"1adf896d060188350fb2","highlight/dockerfile":"ae900c78306691cf767b","highlight/dos":"bade16f763c195ce6a6b","highlight/dsconfig":"8eef4c281767b46a1116","highlight/dts":"6e57c83b8ea7972d6418","highlight/dust":"2d848728eeb8b36170cd","highlight/ebnf":"7b4b12457273e1f94d17","highlight/elixir":"30b064b84c2ee41d3ee3","highlight/elm":"59a53f06394a4c945613","highlight/erb":"9e2fdda96670977c86e1","highlight/erlang":"044edea7d0c42bc2a95d","highlight/erlang-repl":"19cb63fd9d62493766fb","highlight/excel":"a197a812f5f940034ebe","highlight/fix":"d84d21ab894d8c5ac6e6","highlight/flix":"701c502f5d4b99131c1e","highlight/fortran":"5d901e0e2ebf244b748a","highlight/fsharp":"b5a6af57d8f9fa89a069","highlight/gams":"56c02ffbc6ef437ee8ff","highlight/gauss":"879d10ad8d9372a58c98","highlight/gcode":"b75a316a071fcd651149","highlight/gherkin":"036d2bc4a115099a6926","highlight/glsl":"601b21bf24389be4080c","highlight/gml":"3647ea381ddf3226b568","highlight/go":"3fcb4bb1c881693b16cb","highlight/golo":"47aaa2f3cba28ec29844","highlight/gradle":"f4ea99403187aa1c472a","highlight/groovy":"40deebba7627b98fdc7d","highlight/haml":"13e037e653e1d1f50143","highlight/handlebars":"b46b59ad957efc9c117d","highlight/haskell":"9c42f0cd8a241fc0b0f2","highlight/haxe":"437dd94d6fcb0929a4fd","highlight/hsp":"e251f584719409c6ee3b","highlight/htmlbars":"2cda1c5dbade7a0da36f","highlight/http":"137e603316bb4e4d56b4","highlight/hy":"a03611b6bba3a9a57e51","highlight/inform7":"6aac8192eadf13346111","highlight/ini":"40c7686252b6c89cca8c","highlight/irpf90":"9b39d6e366f1c60e95e5","highlight/isbl":"1505e858dc0b02f2f920","highlight/java":"e9afd46b3843d29a37c2","highlight/javascript":"82d1042d58ee2ad3ee01","highlight/jboss-cli":"cf82759c7a354f61dcca","highlight/json":"363a06989580245a4305","highlight/julia":"98dee1b1cc075ab2e352","highlight/julia-repl":"f9bd55c44a1a6adc861c","highlight/kotlin":"e28b215bd6a5d3cf5d00","highlight/lasso":"4b2eda4ca29c00577d95","highlight/ldif":"7dfab3dc59ddbf1acc09","highlight/leaf":"def73572698c9987ff7b","highlight/less":"6d4512244cbaf6dbf808","highlight/lisp":"9aa8d64adc95d59ab939","highlight/livecodeserver":"b8c4c72d149dd3759813","highlight/livescript":"65049fe39c249b10be26","highlight/llvm":"f4ff77011d2185d3f15a","highlight/lsl":"f9ff715952cf8e48e636","highlight/lua":"f676892bb7b3d7a52694","highlight/makefile":"dad5c274710b12945f37","highlight/markdown":"d2d1ff77c76bb61affe1","highlight/mathematica":"2b8f350c069298a45cec","highlight/matlab":"a556dc82ec695b42b014","highlight/maxima":"50e665fa1e0657a63cfc","highlight/mel":"bb958f1af6d9f5649b78","highlight/mercury":"8c0cf9145ccec7d7e021","highlight/mipsasm":"7f6964bc582254d16e15","highlight/mizar":"db1aa880afdc4988f0c0","highlight/mojolicious":"2a14c6939ccdd73ef606","highlight/monkey":"10daab4564d83037fcf7","highlight/moonscript":"95780ee20cdb86548820","highlight/n1ql":"791a00d966919d5e3af7","highlight/nginx":"0e8550d6a1b03640d48e","highlight/nimrod":"d90ba74e340fcbcfaeaf","highlight/nix":"a8ac42a752e836ccc2ce","highlight/nsis":"f61ba2fcb5a9253c1337","highlight/objectivec":"ab43318fe9e803c28c18","highlight/ocaml":"5ffd2062ede38a1df68b","highlight/openscad":"992487963975b18b542f","highlight/oxygene":"dd830bcefbdf1b7bf6e5","highlight/parser3":"925ab0810773747adb86","highlight/perl":"ad66aa0daaec90760edb","highlight/pf":"913ba57928c2ce4a4617","highlight/pgsql":"2e16649d7697e9d46f75","highlight/php":"d85c02de1482c0c29556","highlight/plaintext":"fd12b7c010b92ea5923a","highlight/pony":"86268feab2ea7b07ab59","highlight/powershell":"b8a786e04a6c94423f6f","highlight/processing":"436a1f686163366ac324","highlight/profile":"0917bb4a318a874d7205","highlight/prolog":"771fa25b881fbfe27040","highlight/properties":"ff64533a45deb87e02aa","highlight/protobuf":"134dac76706ad6761465","highlight/puppet":"78d60b34100cd203640d","highlight/purebasic":"7f4b52ed01c4865ede21","highlight/python":"82983814494b0848c738","highlight/q":"1528ce832008dcd6a243","highlight/qml":"064f04ddbfd8cf720520","highlight/r":"5e3e304bd5ff0c2ed750","highlight/reasonml":"1179dcf0e2f2d774b5ff","highlight/rib":"6df52c39c1a206ec0b85","highlight/roboconf":"3512271c909e6d469cbd","highlight/routeros":"a894c6374ec7e953cfb6","highlight/rsl":"54994a1899119e184820","highlight/ruby":"6c66ba3cf83978e18ebe","highlight/ruleslanguage":"007d6defd1df92fc6742","highlight/rust":"bca6b93f330bca871cea","highlight/sas":"41f4f906d3fdcf70b723","highlight/scala":"cda1e4faab83f2e98066","highlight/scheme":"cb9ba8913d36699d9587","highlight/scilab":"b0a1341e797261d36c6b","highlight/scss":"ae2bea7ea689c062e5d4","highlight/shell":"81f08fc8e18483a28dfe","highlight/smali":"ac6233885194e563d47b","highlight/smalltalk":"07d32334929b9388784a","highlight/sml":"dd64cff0f933fd208a4b","highlight/sqf":"2a806ba1ed1b10303572","highlight/sql":"ea05d5aa286548ebbc56","highlight/stan":"1733288894dfe873b4a1","highlight/stata":"f883fc40a764f438bb87","highlight/step21":"37201558026501be06c8","highlight/stylus":"17d755e7d54c4cd5018c","highlight/subunit":"a7e9e18a0e456fe01256","highlight/swift":"7e8cc5329e91396e91e5","highlight/taggerscript":"55c83e373026df0b64f9","highlight/tap":"a70bd2ce171d8e15d1e0","highlight/tcl":"c3a7debaf5f7d5dd1a42","highlight/tex":"91991fefe3a2a4673a90","highlight/thrift":"ec028f4ed1056e86a146","highlight/tp":"cdfa2b6575e4b15c6eff","highlight/twig":"a5a9643d4670527ebc68","highlight/typescript":"e590b403783bace8619e","highlight/vala":"6a70314663885fe81bf8","highlight/vbnet":"6fded32b8e9f3e7ec99c","highlight/vbscript":"dc2aab43d97fcbd8be85","highlight/vbscript-html":"329f6cb0423155b8ae14","highlight/verilog":"921209c71f6b69e18259","highlight/vhdl":"2ab3be69676a73dcd6f1","highlight/vim":"c38e74571ba5f1b49a06","highlight/x86asm":"2420a9d3741c08ec8f28","highlight/xl":"72e2912b91a32feb7498","highlight/xml":"22fedbc14734de2ce9e4","highlight/xquery":"f9ce6daafb7873e4114a","highlight/yaml":"2ff0b78e5d76ce9b0036","highlight/zephir":"275f34c68ae84b6fe382","vendors~editor-collab~editor-guest":"7bfa1b88ecbbbf46ddbc","editor-guest":"6c7e2b14fbc7d87c78b3","vendors~editor-collab~editor-rich":"b0806ef5442fc005d9f9","editor-collab":"31386655758fe23deeca","vendors~editor-rich":"9badaf036a5918fb8cdd","editor-rich":"06b0d4e402afda8ec5ab","vendors~files-modal":"7dcb2be2673bd5e35a0e","files-modal":"426a8ffb4e3df1c68ca2"}[chunkId] + ""
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["textWebpackJsonp"] = window["textWebpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/FilesEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FilesEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilesEditor',
  components: {
    EditorWrapper: function EditorWrapper() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendor"), __webpack_require__.e("vendors~editor"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(null, /*! ./EditorWrapper */ "./src/components/EditorWrapper.vue"));
    }
  },
  props: {
    davPath: {
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
  beforeMount: function beforeMount() {
    // FIXME Dirty fix to avoid recreating the component on stable16
    if (typeof this.$parent.$parent !== 'undefined' && this.$parent.$parent.onResize) {
      window.removeEventListener('resize', this.$parent.$parent.onResize);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FilesEditor.vue?vue&type=template&id=08ca0ec4&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FilesEditor.vue?vue&type=template&id=08ca0ec4& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c("EditorWrapper", {
    attrs: {
      "file-id": _vm.fileId,
      "relative-path": _vm.davPath,
      active: _vm.active,
      "share-token": _vm.shareToken,
      mime: _vm.mime
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/components/FilesEditor.vue":
/*!****************************************!*\
  !*** ./src/components/FilesEditor.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilesEditor_vue_vue_type_template_id_08ca0ec4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesEditor.vue?vue&type=template&id=08ca0ec4& */ "./src/components/FilesEditor.vue?vue&type=template&id=08ca0ec4&");
/* harmony import */ var _FilesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesEditor.vue?vue&type=script&lang=js& */ "./src/components/FilesEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesEditor_vue_vue_type_template_id_08ca0ec4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilesEditor_vue_vue_type_template_id_08ca0ec4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/FilesEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/FilesEditor.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/FilesEditor.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./FilesEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/FilesEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/FilesEditor.vue?vue&type=template&id=08ca0ec4&":
/*!***********************************************************************!*\
  !*** ./src/components/FilesEditor.vue?vue&type=template&id=08ca0ec4& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEditor_vue_vue_type_template_id_08ca0ec4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./FilesEditor.vue?vue&type=template&id=08ca0ec4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FilesEditor.vue?vue&type=template&id=08ca0ec4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEditor_vue_vue_type_template_id_08ca0ec4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEditor_vue_vue_type_template_id_08ca0ec4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FilesEditor */ "./src/components/FilesEditor.vue");

__webpack_require__.nc = btoa(OC.requestToken); // eslint-disable-line

__webpack_require__.p = OC.linkTo('text', 'js/'); // eslint-disable-line

if (document.getElementById('maineditor')) {
  Promise.all([Promise.all(/*! import() | editor */[__webpack_require__.e("vendor"), __webpack_require__.e("vendors~editor"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(null, /*! vue */ "./node_modules/vue/dist/vue.esm.js")), Promise.all(/*! import() | editor */[__webpack_require__.e("vendor"), __webpack_require__.e("vendors~editor"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(null, /*! ./components/EditorWrapper */ "./src/components/EditorWrapper.vue"))]).then(function (imports) {
    var Vue = imports[0].default;
    Vue.prototype.t = window.t;
    Vue.prototype.OCA = window.OCA;
    var Editor = imports[1].default;
    var vm = new Vue({
      render: function render(h) {
        return h(Editor, {
          props: {
            relativePath: '/welcome.rxp',
            active: true
          }
        });
      }
    });
    vm.$mount(document.getElementById('preview'));
  });
}

OCA.Text = {
  Editor: _components_FilesEditor__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ })

/******/ });
//# sourceMappingURL=text.js.map