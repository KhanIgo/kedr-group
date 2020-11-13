/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
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
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./site */ \"./src/js/site.js\");\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/site.js":
/*!************************!*\
  !*** ./src/js/site.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nwindow.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;\nwindow.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;\nvar btns = document.getElementsByClassName(\"show_more\");\nvar btns_docs = document.getElementsByClassName(\"docs_modal\");\nvar modals = document.getElementsByClassName(\"modal\");\nvar spans = document.getElementsByClassName(\"close\");\nvar document_modal = document.getElementById(\"modal-document\");\nvar body = document.getElementsByTagName(\"body\");\n\nvar _iterator = _createForOfIteratorHelper(btns),\n    _step;\n\ntry {\n  var _loop = function _loop() {\n    var btn = _step.value;\n    var name = btn.dataset.id;\n    var modal = document.getElementById(name);\n\n    btn.onclick = function () {\n      modal.style.display = \"block\";\n    };\n  };\n\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nvar _iterator2 = _createForOfIteratorHelper(btns_docs),\n    _step2;\n\ntry {\n  var _loop2 = function _loop2() {\n    var btn = _step2.value;\n\n    btn.onclick = function () {\n      var filename = btn.dataset.filename;\n      document_modal.style.display = \"block\";\n      body[0].style.overflow = 'hidden';\n      document_modal.getElementsByTagName('embed')[0].outerHTML = '<embed src=\"https://drive.google.com/viewerng/viewer?embedded=true&url=http://' + location.host + '/docs/' + filename + '\">';\n    };\n  };\n\n  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n    _loop2();\n  }\n} catch (err) {\n  _iterator2.e(err);\n} finally {\n  _iterator2.f();\n}\n\nvar _iterator3 = _createForOfIteratorHelper(spans),\n    _step3;\n\ntry {\n  var _loop3 = function _loop3() {\n    var span = _step3.value;\n\n    span.onclick = function () {\n      span.parentElement.parentElement.style.display = \"none\";\n      body[0].style.overflow = 'auto';\n    };\n  };\n\n  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n    _loop3();\n  }\n} catch (err) {\n  _iterator3.e(err);\n} finally {\n  _iterator3.f();\n}\n\nwindow.onclick = function (event) {\n  if (event.target.classList[0] == 'modal') {\n    event.target.style.display = \"none\";\n  }\n};\n\nvar lar = document.querySelector('.leave_a_request');\n\nif (lar) {\n  lar.addEventListener('click', function () {\n    var lar_modal = document.querySelector('.modal-leave_a_request');\n\n    if (lar_modal) {\n      lar_modal.style.display = \"flex\";\n    }\n  });\n}\n\njQuery(function ($) {\n  $('body').on('submit', '.feedback__form', function (e) {\n    e.preventDefault();\n    var form = this;\n    var formData = new FormData(form);\n    var stop = false;\n\n    var _iterator4 = _createForOfIteratorHelper(formData),\n        _step4;\n\n    try {\n      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n        var _step4$value = _slicedToArray(_step4.value, 2),\n            name = _step4$value[0],\n            value = _step4$value[1];\n\n        // console.log(`${name} = ${value}`);\n        if (!value) {\n          $('[name=\"' + name + '\"]').addClass('error');\n          stop = stop === false ? true : stop;\n        }\n      }\n    } catch (err) {\n      _iterator4.e(err);\n    } finally {\n      _iterator4.f();\n    }\n\n    ;\n\n    if (stop === true) {\n      return;\n    }\n\n    $.ajax({\n      type: 'post',\n      dataType: 'json',\n      enctype: 'multipart/form-data',\n      url: '/mail.php',\n      data: formData,\n      processData: false,\n      contentType: false,\n      cache: false,\n      timeout: 800000,\n      success: function success(data) {\n        if (data.status == 'success') {\n          $(form).find('.feedback__success').fadeIn('400');\n          setTimeout(function () {\n            $(form).find('.feedback__success').hide();\n            $(form).closest('.modal').hide();\n            $(form).find('input, textarea').val('');\n          }, 4000);\n        } else {\n          alert('Ошибка отправки сообщения, попробуйте позже еще раз.');\n        }\n      },\n      error: function error(e) {\n        console.log(e.responseText);\n      }\n    });\n  });\n  $('body').on('click', '.panel__close', function () {\n    $(this).closest('.modal').hide();\n  });\n  $('body').on('keyup', '.feedback input, .feedback textarea', function () {\n    if ($(this).val().length > 0) {\n      $(this).removeClass('error');\n    } else {\n      $(this).addClass('error');\n    }\n  });\n  $('body').on(\"click\", \".email_button\", function (e) {\n    e.preventDefault();\n    var e = $('.js-hamburger'),\n        n = $(\"#menu\"),\n        o = $(\"#headerInfo\"),\n        t = $(\"#pageIntro\"),\n        s = $(\"#pageButton\");\n    e.toggleClass(\"menu--open\"), n.toggleClass(\"menu--open\"), n.hasClass(\"menu--feedback\") && setTimeout(function () {\n      n.removeClass(\"menu--feedback\");\n    }, 300), o.toggleClass(\"menu--open\"), t.toggleClass(\"menu--open\"), s.toggleClass(\"menu--open\");\n  });\n  $(window).on('scroll resize', function () {\n    var st = $(this).scrollTop();\n    var header = $('.page__intro');\n    var buttons = $('.page-intro__actions');\n\n    if (header.length) {\n      if (st > header.height()) {\n        if (!$('.main_menu_bar.fixed').length) {\n          buttons.addClass('fixed');\n        }\n      } else if (st < header.height()) {\n        buttons.removeClass('fixed');\n      }\n    }\n  });\n  $('.menu-nav__link.with_dropdown').click(function (e) {\n    e.preventDefault();\n    $(this).toggleClass('open');\n    $(this).next('.menu-nav__subnav').slideToggle();\n  });\n  $('.display_more').click(function (e) {\n    $(this).closest('.panel-item__text').toggleClass('display_all_text');\n  });\n  $('body').on('click', '.tile__image', function (e) {\n    e.preventDefault();\n    var src = 'http://' + location.host + $(this).attr('data-file');\n    document_modal.style.display = \"block\";\n    body[0].style.overflow = 'hidden';\n    document_modal.getElementsByTagName('embed')[0].outerHTML = '<embed src=\"https://drive.google.com/viewerng/viewer?embedded=true&url=' + src + '\">';\n  });\n});\n\n//# sourceURL=webpack:///./src/js/site.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi @babel/polyfill ./src/js/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/js/index.js?");

/***/ })

/******/ });