(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./login-controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_styles_live_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/styles/live.css */ "./node_modules/@symfony/ux-live-component/styles/live.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-live-component/dist/live_controller.js */ "./node_modules/@symfony/ux-live-component/dist/live_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = (function() {
    return class LazyController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
        constructor(context) {
            super(context);
            this.__stimulusLazyController = true;
        }
        initialize() {
            if (this.application.controllers.find((controller) => {
                return controller.identifier === this.identifier && controller.__stimulusLazyController;
            })) {
                return;
            }
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_core-js_modules_es_date_to-primitive_js-node_modules_core-js_modules_es_-383ea2"), __webpack_require__.e("assets_controllers_login-controller_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/login-controller.js */ "./assets/controllers/login-controller.js")).then((controller) => {
                this.application.register(this.identifier, controller.default);
            });
        }
    }
})();


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/transition.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/alert.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/collapse.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/dropdown.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/modal.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_highlight_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/highlight.js */ "./assets/js/highlight.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/doclinks.js */ "./assets/js/doclinks.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");


// loads the Bootstrap jQuery plugins







// loads the code syntax highlighting library


// Creates links to the Symfony documentation


// start the Stimulus application


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/doclinks.js":
/*!*******************************!*\
  !*** ./assets/js/doclinks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


// Wraps some elements in anchor tags referencing to the Symfony documentation
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
$(function () {
  var $modal = $('#sourceCodeModal');
  var $controllerCode = $modal.find('code.php');
  var $templateCode = $modal.find('code.twig');
  function anchor(url, content) {
    return '<a class="doclink" target="_blank" href="' + url + '">' + content + '</a>';
  }
  ;
  function wrap(content, links) {
    return content.replace(new RegExp(Object.keys(links).join('|'), 'g'), function (token) {
      return anchor(links[token], token);
    });
  }
  ;

  // Wraps links to the Symfony documentation
  $modal.find('.hljs-comment').each(function () {
    $(this).html($(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g, function (url) {
      return anchor(url, url);
    }));
  });

  // Wraps Symfony's attributes
  var attributes = {
    'Cache': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html',
    'IsGranted': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted',
    'ParamConverter': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html',
    'Route': 'https://symfony.com/doc/current/routing.html#creating-routes-as-attributes-or-annotations',
    'Security': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security'
  };
  $controllerCode.find('.hljs-meta').each(function () {
    var src = $(this).text();
    $(this).html(wrap(src, attributes));
  });

  // Wraps Twig's tags
  $templateCode.find('.hljs-template-tag + .hljs-name').each(function () {
    var tag = $(this).text();
    if ('else' === tag || tag.match(/^end/)) {
      return;
    }
    var url = 'https://twig.symfony.com/doc/3.x/tags/' + tag + '.html#' + tag;
    $(this).html(anchor(url, tag));
  });

  // Wraps Twig's functions
  $templateCode.find('.hljs-template-variable > .hljs-name').each(function () {
    var func = $(this).text();
    var url = 'https://twig.symfony.com/doc/3.x/functions/' + func + '.html#' + func;
    $(this).html(anchor(url, func));
  });
});

/***/ }),

/***/ "./assets/js/highlight.js":
/*!********************************!*\
  !*** ./assets/js/highlight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/es/core.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/es/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/es/languages/twig.js");



highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('php', highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('twig', highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAll();

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-bdd77e","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_object_-eef3d1","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-live-compo-4edbe8"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RW5DRiwwRUFBaUIsRUFBRTs7Ozs7Ozs7Ozs7O0FDUG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2xvZ2luLWNvbnRyb2xsZXIuanM/YmJkZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY2xpbmtzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oaWdobGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz9lOGI4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9sb2dpbi1jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbG9naW4tY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvc3R5bGVzL2xpdmUuY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2xpdmUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5jb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjbGFzcyBMYXp5Q29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgICAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX19zdGltdWx1c0xhenlDb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24uY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLmlkZW50aWZpZXIgPT09IHRoaXMuaWRlbnRpZmllciAmJiBjb250cm9sbGVyLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlcjtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1wb3J0KCdDOlxcXFxVc2Vyc1xcXFxtaWNoYVxcXFxEZXNrdG9wXFxcXHBlcnNvbmFscHJvamVjdHNcXFxcc3ltZm9ueS1kZW1vXFxcXGFzc2V0c1xcXFxjb250cm9sbGVyc1xcXFxsb2dpbi1jb250cm9sbGVyLmpzJykudGhlbigoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuZXhwb3J0IHsgY29udHJvbGxlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4vLyBsb2FkcyB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW5zXHJcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC90cmFuc2l0aW9uLmpzJztcclxuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL2FsZXJ0LmpzJztcclxuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL2NvbGxhcHNlLmpzJztcclxuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL21vZGFsLmpzJztcclxuaW1wb3J0ICdqcXVlcnknXHJcblxyXG4vLyBsb2FkcyB0aGUgY29kZSBzeW50YXggaGlnaGxpZ2h0aW5nIGxpYnJhcnlcclxuaW1wb3J0ICcuL2pzL2hpZ2hsaWdodC5qcyc7XHJcblxyXG4vLyBDcmVhdGVzIGxpbmtzIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cclxuaW1wb3J0ICcuL2pzL2RvY2xpbmtzLmpzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gV3JhcHMgc29tZSBlbGVtZW50cyBpbiBhbmNob3IgdGFncyByZWZlcmVuY2luZyB0byB0aGUgU3ltZm9ueSBkb2N1bWVudGF0aW9uXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJG1vZGFsID0gJCgnI3NvdXJjZUNvZGVNb2RhbCcpO1xyXG4gICAgdmFyICRjb250cm9sbGVyQ29kZSA9ICRtb2RhbC5maW5kKCdjb2RlLnBocCcpO1xyXG4gICAgdmFyICR0ZW1wbGF0ZUNvZGUgPSAkbW9kYWwuZmluZCgnY29kZS50d2lnJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gYW5jaG9yKHVybCwgY29udGVudCkge1xyXG4gICAgICAgIHJldHVybiAnPGEgY2xhc3M9XCJkb2NsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIicgKyB1cmwgKyAnXCI+JyArIGNvbnRlbnQgKyAnPC9hPic7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXAoY29udGVudCwgbGlua3MpIHtcclxuICAgICAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKFxyXG4gICAgICAgICAgICBuZXcgUmVnRXhwKE9iamVjdC5rZXlzKGxpbmtzKS5qb2luKCd8JyksICdnJyksXHJcbiAgICAgICAgICAgIHRva2VuID0+IGFuY2hvcihsaW5rc1t0b2tlbl0sIHRva2VuKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFdyYXBzIGxpbmtzIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cclxuICAgICRtb2RhbC5maW5kKCcuaGxqcy1jb21tZW50JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmh0bWwoJCh0aGlzKS5odG1sKCkucmVwbGFjZSgvaHR0cHM6XFwvXFwvc3ltZm9ueS5jb21cXC9kb2NcXC9bXFx3Ly4jLV0rL2csIGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5jaG9yKHVybCwgdXJsKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBXcmFwcyBTeW1mb255J3MgYXR0cmlidXRlc1xyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgJ0NhY2hlJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9jYWNoZS5odG1sJyxcclxuICAgICAgICAnSXNHcmFudGVkJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9zZWN1cml0eS5odG1sI2lzZ3JhbnRlZCcsXHJcbiAgICAgICAgJ1BhcmFtQ29udmVydGVyJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9jb252ZXJ0ZXJzLmh0bWwnLFxyXG4gICAgICAgICdSb3V0ZSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L3JvdXRpbmcuaHRtbCNjcmVhdGluZy1yb3V0ZXMtYXMtYXR0cmlidXRlcy1vci1hbm5vdGF0aW9ucycsXHJcbiAgICAgICAgJ1NlY3VyaXR5JzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9zZWN1cml0eS5odG1sI3NlY3VyaXR5J1xyXG4gICAgfTtcclxuXHJcbiAgICAkY29udHJvbGxlckNvZGUuZmluZCgnLmhsanMtbWV0YScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNyYyA9ICQodGhpcykudGV4dCgpO1xyXG5cclxuICAgICAgICAkKHRoaXMpLmh0bWwod3JhcChzcmMsIGF0dHJpYnV0ZXMpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFdyYXBzIFR3aWcncyB0YWdzXHJcbiAgICAkdGVtcGxhdGVDb2RlLmZpbmQoJy5obGpzLXRlbXBsYXRlLXRhZyArIC5obGpzLW5hbWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0YWcgPSAkKHRoaXMpLnRleHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCdlbHNlJyA9PT0gdGFnIHx8IHRhZy5tYXRjaCgvXmVuZC8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly90d2lnLnN5bWZvbnkuY29tL2RvYy8zLngvdGFncy8nICsgdGFnICsgJy5odG1sIycgKyB0YWc7XHJcblxyXG4gICAgICAgICQodGhpcykuaHRtbChhbmNob3IodXJsLCB0YWcpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFdyYXBzIFR3aWcncyBmdW5jdGlvbnNcclxuICAgICR0ZW1wbGF0ZUNvZGUuZmluZCgnLmhsanMtdGVtcGxhdGUtdmFyaWFibGUgPiAuaGxqcy1uYW1lJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZnVuYyA9ICQodGhpcykudGV4dCgpO1xyXG5cclxuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vdHdpZy5zeW1mb255LmNvbS9kb2MvMy54L2Z1bmN0aW9ucy8nICsgZnVuYyArICcuaHRtbCMnICsgZnVuYztcclxuXHJcbiAgICAgICAgJCh0aGlzKS5odG1sKGFuY2hvcih1cmwsIGZ1bmMpKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJztcclxuaW1wb3J0IHBocCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9waHAnO1xyXG5pbXBvcnQgdHdpZyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy90d2lnJztcclxuXHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgncGhwJywgcGhwKTtcclxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCd0d2lnJywgdHdpZyk7XHJcblxyXG5obGpzLmhpZ2hsaWdodEFsbCgpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiJCIsIiRtb2RhbCIsIiRjb250cm9sbGVyQ29kZSIsImZpbmQiLCIkdGVtcGxhdGVDb2RlIiwiYW5jaG9yIiwidXJsIiwiY29udGVudCIsIndyYXAiLCJsaW5rcyIsInJlcGxhY2UiLCJSZWdFeHAiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsInRva2VuIiwiZWFjaCIsImh0bWwiLCJhdHRyaWJ1dGVzIiwic3JjIiwidGV4dCIsInRhZyIsIm1hdGNoIiwiZnVuYyIsImhsanMiLCJwaHAiLCJ0d2lnIiwicmVnaXN0ZXJMYW5ndWFnZSIsImhpZ2hsaWdodEFsbCJdLCJzb3VyY2VSb290IjoiIn0=