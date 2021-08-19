"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/main.js?{"page":"pages%2Fdetail-video%2FsubNVue%2Fvideo"} ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detail-video/subNVue/video.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/detail-video/subNVue/video'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMEZBQUc7QUFDWCxRQUFRLDBGQUFHO0FBQ1gsUUFBUSwwRkFBRztBQUNYLGdCQUFnQiwwRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2RldGFpbC12aWRlby9zdWJOVnVlL3ZpZGVvJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/main.js?{"type":"appStyle"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jx/Desktop/play-video/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".text-main": {
    "": {
      "color": [
        "#FB7299",
        0,
        0,
        3
      ]
    }
  },
  ".text-main-hover": {
    "": {
      "color": [
        "#FB85A7",
        0,
        0,
        4
      ]
    }
  },
  ".text-main-disabled": {
    "": {
      "color": [
        "#FB85A7",
        0,
        0,
        5
      ]
    }
  },
  ".bg-main": {
    "": {
      "backgroundColor": [
        "#FB7299",
        0,
        0,
        7
      ]
    }
  },
  ".bg-main-hover": {
    "": {
      "backgroundColor": [
        "#FB85A7",
        0,
        0,
        8
      ]
    }
  },
  ".bg-main-disabled": {
    "": {
      "backgroundColor": [
        "#FB85A7",
        0,
        0,
        9
      ]
    }
  },
  ".border-main": {
    "": {
      "borderColor": [
        "#FB7299",
        1,
        0,
        11
      ]
    }
  },
  ".line-h": {
    "": {
      "lineHeight": [
        1.2,
        0,
        0,
        13
      ]
    }
  },
  ".f-divider": {
    "": {
      "height": [
        "18rpx",
        0,
        0,
        15
      ],
      "backgroundColor": [
        "#F5F5F4",
        0,
        0,
        15
      ]
    }
  },
  ".iconfont": {
    "": {
      "fontFamily": [
        "iconfont",
        0,
        0,
        17
      ]
    }
  },
  ".view": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        18
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        18
      ],
      "color": [
        "#0E151D",
        0,
        0,
        18
      ]
    }
  },
  ".text": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        18
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        18
      ],
      "color": [
        "#0E151D",
        0,
        0,
        18
      ]
    }
  },
  ".row": {
    "": {
      "marginRight": [
        "-20rpx",
        0,
        0,
        20
      ],
      "marginLeft": [
        "-20rpx",
        0,
        0,
        20
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        20
      ],
      "flexDirection": [
        "row",
        0,
        0,
        20
      ]
    }
  },
  ".col-1": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "62.5rpx",
        0,
        0,
        33
      ]
    }
  },
  ".col-2": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "125rpx",
        0,
        0,
        32
      ]
    }
  },
  ".col-3": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "187.5rpx",
        0,
        0,
        31
      ]
    }
  },
  ".col-4": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "250rpx",
        0,
        0,
        30
      ]
    }
  },
  ".col-5": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "312.5rpx",
        0,
        0,
        29
      ]
    }
  },
  ".col-6": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "375rpx",
        0,
        0,
        28
      ]
    }
  },
  ".col-7": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "437.5rpx",
        0,
        0,
        27
      ]
    }
  },
  ".col-8": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "500rpx",
        0,
        0,
        26
      ]
    }
  },
  ".col-9": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "562.5rpx",
        0,
        0,
        25
      ]
    }
  },
  ".col-10": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "625rpx",
        0,
        0,
        24
      ]
    }
  },
  ".col-11": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "687.5rpx",
        0,
        0,
        23
      ]
    }
  },
  ".col-12": {
    "": {
      "position": [
        "relative",
        0,
        0,
        21
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        21
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        21
      ],
      "width": [
        "750rpx",
        0,
        0,
        22
      ]
    }
  },
  ".col-offset-12": {
    "": {
      "marginLeft": [
        "750rpx",
        0,
        0,
        34
      ]
    }
  },
  ".col-offset-11": {
    "": {
      "marginLeft": [
        "687.5rpx",
        0,
        0,
        35
      ]
    }
  },
  ".col-offset-10": {
    "": {
      "marginLeft": [
        "625rpx",
        0,
        0,
        36
      ]
    }
  },
  ".col-offset-9": {
    "": {
      "marginLeft": [
        "562.5rpx",
        0,
        0,
        37
      ]
    }
  },
  ".col-offset-8": {
    "": {
      "marginLeft": [
        "500rpx",
        0,
        0,
        38
      ]
    }
  },
  ".col-offset-7": {
    "": {
      "marginLeft": [
        "437.5rpx",
        0,
        0,
        39
      ]
    }
  },
  ".col-offset-6": {
    "": {
      "marginLeft": [
        "375rpx",
        0,
        0,
        40
      ]
    }
  },
  ".col-offset-5": {
    "": {
      "marginLeft": [
        "312.5rpx",
        0,
        0,
        41
      ]
    }
  },
  ".col-offset-4": {
    "": {
      "marginLeft": [
        "250rpx",
        0,
        0,
        42
      ]
    }
  },
  ".col-offset-3": {
    "": {
      "marginLeft": [
        "187.5rpx",
        0,
        0,
        43
      ]
    }
  },
  ".col-offset-2": {
    "": {
      "marginLeft": [
        "125rpx",
        0,
        0,
        44
      ]
    }
  },
  ".col-offset-1": {
    "": {
      "marginLeft": [
        "62.5rpx",
        0,
        0,
        45
      ]
    }
  },
  ".col-offset-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        46
      ]
    }
  },
  ".flex": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        48
      ]
    }
  },
  ".flex-row": {
    "": {
      "flexDirection": [
        "row",
        1,
        0,
        49
      ]
    }
  },
  ".flex-column": {
    "": {
      "flexDirection": [
        "column",
        1,
        0,
        50
      ]
    }
  },
  ".flex-row-reverse": {
    "": {
      "flexDirection": [
        "row-reverse",
        1,
        0,
        51
      ]
    }
  },
  ".flex-column-reverse": {
    "": {
      "flexDirection": [
        "column-reverse",
        1,
        0,
        52
      ]
    }
  },
  ".flex-wrap": {
    "": {
      "flexWrap": [
        "wrap",
        0,
        0,
        53
      ]
    }
  },
  ".flex-nowrap": {
    "": {
      "flexWrap": [
        "nowrap",
        0,
        0,
        54
      ]
    }
  },
  ".justify-start": {
    "": {
      "justifyContent": [
        "flex-start",
        0,
        0,
        55
      ]
    }
  },
  ".justify-end": {
    "": {
      "justifyContent": [
        "flex-end",
        0,
        0,
        56
      ]
    }
  },
  ".justify-between": {
    "": {
      "justifyContent": [
        "space-between",
        0,
        0,
        57
      ]
    }
  },
  ".justify-center": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        58
      ]
    }
  },
  ".align-center": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        59
      ]
    }
  },
  ".align-stretch": {
    "": {
      "alignItems": [
        "stretch",
        0,
        0,
        60
      ]
    }
  },
  ".align-start": {
    "": {
      "alignItems": [
        "flex-start",
        0,
        0,
        61
      ]
    }
  },
  ".align-end": {
    "": {
      "alignItems": [
        "flex-end",
        0,
        0,
        62
      ]
    }
  },
  ".flex-1": {
    "": {
      "flex": [
        1,
        0,
        0,
        63
      ]
    }
  },
  ".flex-2": {
    "": {
      "flex": [
        2,
        0,
        0,
        64
      ]
    }
  },
  ".flex-3": {
    "": {
      "flex": [
        3,
        0,
        0,
        65
      ]
    }
  },
  ".flex-4": {
    "": {
      "flex": [
        4,
        0,
        0,
        66
      ]
    }
  },
  ".flex-5": {
    "": {
      "flex": [
        5,
        0,
        0,
        67
      ]
    }
  },
  ".container": {
    "": {
      "paddingRight": [
        "20rpx",
        0,
        0,
        68
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        68
      ]
    }
  },
  ".m-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        70
      ],
      "marginRight": [
        0,
        0,
        0,
        70
      ],
      "marginBottom": [
        0,
        0,
        0,
        70
      ],
      "marginLeft": [
        0,
        0,
        0,
        70
      ]
    }
  },
  ".m-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        71
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        71
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        71
      ],
      "marginLeft": [
        "10rpx",
        0,
        0,
        71
      ]
    }
  },
  ".m-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        72
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        72
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        72
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        72
      ]
    }
  },
  ".m-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        73
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        73
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        73
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        73
      ]
    }
  },
  ".m-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        74
      ],
      "marginRight": [
        "40rpx",
        0,
        0,
        74
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        74
      ],
      "marginLeft": [
        "40rpx",
        0,
        0,
        74
      ]
    }
  },
  ".m-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        75
      ],
      "marginRight": [
        "50rpx",
        0,
        0,
        75
      ],
      "marginBottom": [
        "50rpx",
        0,
        0,
        75
      ],
      "marginLeft": [
        "50rpx",
        0,
        0,
        75
      ]
    }
  },
  ".mt-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        76
      ]
    }
  },
  ".mt-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        77
      ]
    }
  },
  ".mt-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        78
      ]
    }
  },
  ".mt-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        79
      ]
    }
  },
  ".mt-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        80
      ]
    }
  },
  ".mt-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        81
      ]
    }
  },
  ".mb-0": {
    "": {
      "marginBottom": [
        0,
        0,
        0,
        82
      ]
    }
  },
  ".mb-1": {
    "": {
      "marginBottom": [
        "10rpx",
        0,
        0,
        83
      ]
    }
  },
  ".mb-2": {
    "": {
      "marginBottom": [
        "20rpx",
        0,
        0,
        84
      ]
    }
  },
  ".mb-3": {
    "": {
      "marginBottom": [
        "30rpx",
        0,
        0,
        85
      ]
    }
  },
  ".mb-4": {
    "": {
      "marginBottom": [
        "40rpx",
        0,
        0,
        86
      ]
    }
  },
  ".mb-5": {
    "": {
      "marginBottom": [
        "50rpx",
        0,
        0,
        87
      ]
    }
  },
  ".ml-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        88
      ]
    }
  },
  ".ml-1": {
    "": {
      "marginLeft": [
        "10rpx",
        0,
        0,
        89
      ]
    }
  },
  ".ml-2": {
    "": {
      "marginLeft": [
        "20rpx",
        0,
        0,
        90
      ]
    }
  },
  ".ml-3": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        91
      ]
    }
  },
  ".ml-4": {
    "": {
      "marginLeft": [
        "40rpx",
        0,
        0,
        92
      ]
    }
  },
  ".ml-5": {
    "": {
      "marginLeft": [
        "50rpx",
        0,
        0,
        93
      ]
    }
  },
  ".mr-0": {
    "": {
      "marginRight": [
        0,
        0,
        0,
        94
      ]
    }
  },
  ".mr-1": {
    "": {
      "marginRight": [
        "10rpx",
        0,
        0,
        95
      ]
    }
  },
  ".mr-2": {
    "": {
      "marginRight": [
        "20rpx",
        0,
        0,
        96
      ]
    }
  },
  ".mr-3": {
    "": {
      "marginRight": [
        "30rpx",
        0,
        0,
        97
      ]
    }
  },
  ".mr-4": {
    "": {
      "marginRight": [
        "40rpx",
        0,
        0,
        98
      ]
    }
  },
  ".mr-5": {
    "": {
      "marginRight": [
        "50rpx",
        0,
        0,
        99
      ]
    }
  },
  ".my-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        100
      ],
      "marginBottom": [
        0,
        0,
        0,
        100
      ]
    }
  },
  ".my-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        101
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        101
      ]
    }
  },
  ".my-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        102
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        102
      ]
    }
  },
  ".my-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        103
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        103
      ]
    }
  },
  ".my-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        104
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        104
      ]
    }
  },
  ".my-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        105
      ],
      "marginBottom": [
        "50rpx",
        0,
        0,
        105
      ]
    }
  },
  ".mx-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        106
      ],
      "marginRight": [
        0,
        0,
        0,
        106
      ]
    }
  },
  ".mx-1": {
    "": {
      "marginLeft": [
        "10rpx",
        0,
        0,
        107
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        107
      ]
    }
  },
  ".mx-2": {
    "": {
      "marginLeft": [
        "20rpx",
        0,
        0,
        108
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        108
      ]
    }
  },
  ".mx-3": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        109
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        109
      ]
    }
  },
  ".mx-4": {
    "": {
      "marginLeft": [
        "40rpx",
        0,
        0,
        110
      ],
      "marginRight": [
        "40rpx",
        0,
        0,
        110
      ]
    }
  },
  ".mx-5": {
    "": {
      "marginLeft": [
        "50rpx",
        0,
        0,
        111
      ],
      "marginRight": [
        "50rpx",
        0,
        0,
        111
      ]
    }
  },
  ".p-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        112
      ],
      "paddingRight": [
        0,
        0,
        0,
        112
      ],
      "paddingBottom": [
        0,
        0,
        0,
        112
      ],
      "paddingLeft": [
        0,
        0,
        0,
        112
      ]
    }
  },
  ".p": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        113
      ],
      "paddingRight": [
        "5rpx",
        0,
        0,
        113
      ],
      "paddingBottom": [
        "5rpx",
        0,
        0,
        113
      ],
      "paddingLeft": [
        "5rpx",
        0,
        0,
        113
      ]
    }
  },
  ".p-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        114
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        114
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        114
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        114
      ]
    }
  },
  ".p-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        115
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        115
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        115
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        115
      ]
    }
  },
  ".p-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        116
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        116
      ],
      "paddingBottom": [
        "30rpx",
        0,
        0,
        116
      ],
      "paddingLeft": [
        "30rpx",
        0,
        0,
        116
      ]
    }
  },
  ".p-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        117
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        117
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        117
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        117
      ]
    }
  },
  ".p-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        118
      ],
      "paddingRight": [
        "50rpx",
        0,
        0,
        118
      ],
      "paddingBottom": [
        "50rpx",
        0,
        0,
        118
      ],
      "paddingLeft": [
        "50rpx",
        0,
        0,
        118
      ]
    }
  },
  ".pt-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        119
      ]
    }
  },
  ".pt": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        120
      ]
    }
  },
  ".pt-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        121
      ]
    }
  },
  ".pt-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        122
      ]
    }
  },
  ".pt-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        123
      ]
    }
  },
  ".pt-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        124
      ]
    }
  },
  ".pt-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        125
      ]
    }
  },
  ".pb-0": {
    "": {
      "paddingBottom": [
        0,
        0,
        0,
        126
      ]
    }
  },
  ".pb-1": {
    "": {
      "paddingBottom": [
        "10rpx",
        0,
        0,
        127
      ]
    }
  },
  ".pb": {
    "": {
      "paddingBottom": [
        "5rpx",
        0,
        0,
        128
      ]
    }
  },
  ".pb-2": {
    "": {
      "paddingBottom": [
        "20rpx",
        0,
        0,
        129
      ]
    }
  },
  ".pb-3": {
    "": {
      "paddingBottom": [
        "30rpx",
        0,
        0,
        130
      ]
    }
  },
  ".pb-4": {
    "": {
      "paddingBottom": [
        "40rpx",
        0,
        0,
        131
      ]
    }
  },
  ".pb-5": {
    "": {
      "paddingBottom": [
        "50rpx",
        0,
        0,
        132
      ]
    }
  },
  ".pl-0": {
    "": {
      "paddingLeft": [
        0,
        0,
        0,
        133
      ]
    }
  },
  ".pl": {
    "": {
      "paddingLeft": [
        "5rpx",
        0,
        0,
        134
      ]
    }
  },
  ".pl-1": {
    "": {
      "paddingLeft": [
        "10rpx",
        0,
        0,
        135
      ]
    }
  },
  ".pl-2": {
    "": {
      "paddingLeft": [
        "20rpx",
        0,
        0,
        136
      ]
    }
  },
  ".pl-3": {
    "": {
      "paddingLeft": [
        "30rpx",
        0,
        0,
        137
      ]
    }
  },
  ".pl-4": {
    "": {
      "paddingLeft": [
        "40rpx",
        0,
        0,
        138
      ]
    }
  },
  ".pl-5": {
    "": {
      "paddingLeft": [
        "50rpx",
        0,
        0,
        139
      ]
    }
  },
  ".pr-0": {
    "": {
      "paddingRight": [
        0,
        0,
        0,
        140
      ]
    }
  },
  ".pr": {
    "": {
      "paddingRight": [
        "5rpx",
        0,
        0,
        141
      ]
    }
  },
  ".pr-1": {
    "": {
      "paddingRight": [
        "10rpx",
        0,
        0,
        142
      ]
    }
  },
  ".pr-2": {
    "": {
      "paddingRight": [
        "20rpx",
        0,
        0,
        143
      ]
    }
  },
  ".pr-3": {
    "": {
      "paddingRight": [
        "30rpx",
        0,
        0,
        144
      ]
    }
  },
  ".pr-4": {
    "": {
      "paddingRight": [
        "40rpx",
        0,
        0,
        145
      ]
    }
  },
  ".pr-5": {
    "": {
      "paddingRight": [
        "50rpx",
        0,
        0,
        146
      ]
    }
  },
  ".py-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        147
      ],
      "paddingBottom": [
        0,
        0,
        0,
        147
      ]
    }
  },
  ".py": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        148
      ],
      "paddingBottom": [
        "5rpx",
        0,
        0,
        148
      ]
    }
  },
  ".py-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        149
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        149
      ]
    }
  },
  ".py-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        150
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        150
      ]
    }
  },
  ".py-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        151
      ],
      "paddingBottom": [
        "30rpx",
        0,
        0,
        151
      ]
    }
  },
  ".py-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        152
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        152
      ]
    }
  },
  ".py-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        153
      ],
      "paddingBottom": [
        "50rpx",
        0,
        0,
        153
      ]
    }
  },
  ".px-0": {
    "": {
      "paddingLeft": [
        0,
        0,
        0,
        154
      ],
      "paddingRight": [
        0,
        0,
        0,
        154
      ]
    }
  },
  ".px-1": {
    "": {
      "paddingLeft": [
        "10rpx",
        0,
        0,
        155
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        155
      ]
    }
  },
  ".px": {
    "": {
      "paddingLeft": [
        "5rpx",
        0,
        0,
        156
      ],
      "paddingRight": [
        "5rpx",
        0,
        0,
        156
      ]
    }
  },
  ".px-2": {
    "": {
      "paddingLeft": [
        "20rpx",
        0,
        0,
        157
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        157
      ]
    }
  },
  ".px-3": {
    "": {
      "paddingLeft": [
        "30rpx",
        0,
        0,
        158
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        158
      ]
    }
  },
  ".px-4": {
    "": {
      "paddingLeft": [
        "40rpx",
        0,
        0,
        159
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        159
      ]
    }
  },
  ".px-5": {
    "": {
      "paddingLeft": [
        "50rpx",
        0,
        0,
        160
      ],
      "paddingRight": [
        "50rpx",
        0,
        0,
        160
      ]
    }
  },
  ".font-smaller": {
    "": {
      "fontSize": [
        "15rpx",
        0,
        0,
        162
      ]
    }
  },
  ".font-small": {
    "": {
      "fontSize": [
        "20rpx",
        0,
        0,
        163
      ]
    }
  },
  ".font-sm": {
    "": {
      "fontSize": [
        "25rpx",
        0,
        0,
        164
      ]
    }
  },
  ".font": {
    "": {
      "fontSize": [
        "30rpx",
        1,
        0,
        165
      ]
    }
  },
  ".font-md": {
    "": {
      "fontSize": [
        "35rpx",
        1,
        0,
        166
      ]
    }
  },
  ".font-lg": {
    "": {
      "fontSize": [
        "40rpx",
        0,
        0,
        167
      ]
    }
  },
  ".h1": {
    "": {
      "fontSize": [
        "80rpx",
        0,
        0,
        168
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        168
      ]
    }
  },
  ".h2": {
    "": {
      "fontSize": [
        "60rpx",
        0,
        0,
        169
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        169
      ]
    }
  },
  ".h3": {
    "": {
      "fontSize": [
        "45rpx",
        0,
        0,
        170
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        170
      ]
    }
  },
  ".h4": {
    "": {
      "fontSize": [
        "32rpx",
        0,
        0,
        171
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        171
      ]
    }
  },
  ".h5": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        172
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        172
      ]
    }
  },
  ".h6": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        173
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        173
      ]
    }
  },
  ".text-through": {
    "": {
      "textDecoration": [
        "line-through",
        0,
        0,
        176
      ]
    }
  },
  ".text-left": {
    "": {
      "textAlign": [
        "left",
        0,
        0,
        178
      ]
    }
  },
  ".text-right": {
    "": {
      "textAlign": [
        "right",
        0,
        0,
        179
      ]
    }
  },
  ".text-center": {
    "": {
      "textAlign": [
        "center",
        0,
        0,
        180
      ]
    }
  },
  ".text-ellipsis": {
    "": {
      "lines": [
        1,
        0,
        0,
        182
      ]
    }
  },
  ".font-weight-light": {
    "": {
      "fontWeight": [
        "300",
        0,
        0,
        184
      ]
    }
  },
  ".font-weight-lighter": {
    "": {
      "fontWeight": [
        "100",
        0,
        0,
        186
      ]
    }
  },
  ".font-weight-normal": {
    "": {
      "fontWeight": [
        "400",
        0,
        0,
        188
      ]
    }
  },
  ".font-weight-bold": {
    "": {
      "fontWeight": [
        "700",
        0,
        0,
        190
      ]
    }
  },
  ".font-weight-bolder": {
    "": {
      "fontWeight": [
        "bold",
        0,
        0,
        192
      ]
    }
  },
  ".font-italic": {
    "": {
      "fontStyle": [
        "italic",
        0,
        0,
        194
      ]
    }
  },
  ".text-white": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        197
      ]
    }
  },
  ".text-primary": {
    "": {
      "color": [
        "#007bff",
        0,
        0,
        198
      ]
    }
  },
  ".text-hover-primary": {
    "": {
      "color": [
        "#0056b3",
        0,
        0,
        199
      ]
    }
  },
  ".text-secondary": {
    "": {
      "color": [
        "#6c757d",
        0,
        0,
        200
      ]
    }
  },
  ".text-hover-secondary": {
    "": {
      "color": [
        "#494f54",
        0,
        0,
        201
      ]
    }
  },
  ".text-success": {
    "": {
      "color": [
        "#28a745",
        0,
        0,
        202
      ]
    }
  },
  ".text-hover-success": {
    "": {
      "color": [
        "#19692c",
        0,
        0,
        203
      ]
    }
  },
  ".text-info": {
    "": {
      "color": [
        "#17a2b8",
        0,
        0,
        204
      ]
    }
  },
  ".text-hover-info": {
    "": {
      "color": [
        "#0f6674",
        0,
        0,
        205
      ]
    }
  },
  ".text-warning": {
    "": {
      "color": [
        "#ffc107",
        0,
        0,
        206
      ]
    }
  },
  ".text-hover-warning": {
    "": {
      "color": [
        "#ba8b00",
        0,
        0,
        207
      ]
    }
  },
  ".text-danger": {
    "": {
      "color": [
        "#dc3545",
        0,
        0,
        208
      ]
    }
  },
  ".text-hover-danger": {
    "": {
      "color": [
        "#a71d2a",
        0,
        0,
        209
      ]
    }
  },
  ".text-light": {
    "": {
      "color": [
        "#f8f9fa",
        0,
        0,
        210
      ]
    }
  },
  ".text-hover-light": {
    "": {
      "color": [
        "#cbd3da",
        0,
        0,
        211
      ]
    }
  },
  ".text-dark": {
    "": {
      "color": [
        "#343a40",
        0,
        0,
        212
      ]
    }
  },
  ".text-hover-dark": {
    "": {
      "color": [
        "#121416",
        0,
        0,
        213
      ]
    }
  },
  ".text-body": {
    "": {
      "color": [
        "#212529",
        0,
        0,
        214
      ]
    }
  },
  ".text-muted": {
    "": {
      "color": [
        "#6c757d",
        0,
        0,
        215
      ]
    }
  },
  ".text-light-muted": {
    "": {
      "color": [
        "#A9A5A0",
        0,
        0,
        217
      ]
    }
  },
  ".text-light-black": {
    "": {
      "color": [
        "rgba(0,0,0,0.5)",
        0,
        0,
        218
      ]
    }
  },
  ".text-light-white": {
    "": {
      "color": [
        "rgba(255,255,255,0.5)",
        0,
        0,
        219
      ]
    }
  },
  ".bg-primary": {
    "": {
      "backgroundColor": [
        "#007bff",
        0,
        0,
        221
      ]
    }
  },
  ".bg-hover-primary": {
    "": {
      "backgroundColor:hover": [
        "#0062cc",
        0,
        0,
        222
      ]
    }
  },
  ".bg-secondary": {
    "": {
      "backgroundColor": [
        "#6c757d",
        0,
        0,
        223
      ]
    }
  },
  ".bg-hover-secondary": {
    "": {
      "backgroundColor:hover": [
        "#545b62",
        0,
        0,
        224
      ]
    }
  },
  ".bg-success": {
    "": {
      "backgroundColor": [
        "#28a745",
        0,
        0,
        225
      ]
    }
  },
  ".bg-hover-success": {
    "": {
      "backgroundColor": [
        "#1e7e34",
        0,
        0,
        226
      ]
    }
  },
  ".bg-info": {
    "": {
      "backgroundColor": [
        "#17a2b8",
        0,
        0,
        227
      ]
    }
  },
  ".bg-hover-info": {
    "": {
      "backgroundColor": [
        "#117a8b",
        0,
        0,
        228
      ]
    }
  },
  ".bg-warning": {
    "": {
      "backgroundColor": [
        "#ffc107",
        0,
        0,
        229
      ]
    }
  },
  ".bg-hover-warning": {
    "": {
      "backgroundColor": [
        "#d39e00",
        0,
        0,
        230
      ]
    }
  },
  ".bg-danger": {
    "": {
      "backgroundColor": [
        "#dc3545",
        0,
        0,
        231
      ]
    }
  },
  ".bg-hover-danger": {
    "": {
      "backgroundColor": [
        "#bd2130",
        0,
        0,
        232
      ]
    }
  },
  ".bg-light": {
    "": {
      "backgroundColor": [
        "#f8f9fa",
        0,
        0,
        233
      ]
    }
  },
  ".bg-hover-light": {
    "": {
      "backgroundColor": [
        "#dae0e5",
        0,
        0,
        234
      ]
    }
  },
  ".bg-dark": {
    "": {
      "backgroundColor": [
        "#343a40",
        0,
        0,
        235
      ]
    }
  },
  ".bg-hover-dark": {
    "": {
      "backgroundColor": [
        "#1d2124",
        0,
        0,
        236
      ]
    }
  },
  ".bg-white": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        237
      ]
    }
  },
  ".bg-transparent": {
    "": {
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        238
      ]
    }
  },
  ".border": {
    "": {
      "borderWidth": [
        "1rpx",
        0,
        0,
        240
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        240
      ],
      "borderColor": [
        "#dee2e6",
        0,
        0,
        240
      ]
    }
  },
  ".border-top": {
    "": {
      "borderTopWidth": [
        "1rpx",
        0,
        0,
        241
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        241
      ],
      "borderTopColor": [
        "#dee2e6",
        0,
        0,
        241
      ]
    }
  },
  ".border-right": {
    "": {
      "borderRightWidth": [
        "1rpx",
        0,
        0,
        242
      ],
      "borderRightStyle": [
        "solid",
        0,
        0,
        242
      ],
      "borderRightColor": [
        "#dee2e6",
        0,
        0,
        242
      ]
    }
  },
  ".border-bottom": {
    "": {
      "borderBottomWidth": [
        "1rpx",
        0,
        0,
        243
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        243
      ],
      "borderBottomColor": [
        "#dee2e6",
        0,
        0,
        243
      ]
    }
  },
  ".border-left": {
    "": {
      "borderLeftWidth": [
        "1rpx",
        0,
        0,
        244
      ],
      "borderLeftStyle": [
        "solid",
        0,
        0,
        244
      ],
      "borderLeftColor": [
        "#dee2e6",
        0,
        0,
        244
      ]
    }
  },
  ".border-0": {
    "": {
      "borderWidth": [
        0,
        1,
        0,
        245
      ]
    }
  },
  ".border-top-0": {
    "": {
      "borderTopWidth": [
        0,
        1,
        0,
        246
      ]
    }
  },
  ".border-right-0": {
    "": {
      "borderRightWidth": [
        0,
        1,
        0,
        247
      ]
    }
  },
  ".border-bottom-0": {
    "": {
      "borderBottomWidth": [
        0,
        1,
        0,
        248
      ]
    }
  },
  ".border-left-0": {
    "": {
      "borderLeftWidth": [
        0,
        1,
        0,
        249
      ]
    }
  },
  ".border-primary": {
    "": {
      "borderColor": [
        "#007bff",
        0,
        0,
        250
      ]
    }
  },
  ".border-secondary": {
    "": {
      "borderColor": [
        "#6c757d",
        0,
        0,
        251
      ]
    }
  },
  ".border-light-secondary": {
    "": {
      "borderColor": [
        "#E9E8E5",
        0,
        0,
        252
      ]
    }
  },
  ".border-success": {
    "": {
      "borderColor": [
        "#28a745",
        0,
        0,
        253
      ]
    }
  },
  ".border-info": {
    "": {
      "borderColor": [
        "#17a2b8",
        0,
        0,
        254
      ]
    }
  },
  ".border-warning": {
    "": {
      "borderColor": [
        "#ffc107",
        0,
        0,
        255
      ]
    }
  },
  ".border-danger": {
    "": {
      "borderColor": [
        "#dc3545",
        0,
        0,
        256
      ]
    }
  },
  ".border-light": {
    "": {
      "borderColor": [
        "#f8f9fa",
        0,
        0,
        257
      ]
    }
  },
  ".border-dark": {
    "": {
      "borderColor": [
        "#343a40",
        0,
        0,
        258
      ]
    }
  },
  ".border-white": {
    "": {
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        259
      ]
    }
  },
  ".rounded": {
    "": {
      "borderRadius": [
        "8rpx",
        0,
        0,
        261
      ]
    }
  },
  ".rounded-lg": {
    "": {
      "borderRadius": [
        "14rpx",
        0,
        0,
        262
      ]
    }
  },
  ".rounded-top": {
    "": {
      "borderTopLeftRadius": [
        "8rpx",
        0,
        0,
        263
      ],
      "borderTopRightRadius": [
        "8rpx",
        0,
        0,
        263
      ]
    }
  },
  ".rounded-top-lg": {
    "": {
      "borderTopLeftRadius": [
        "14rpx",
        0,
        0,
        264
      ],
      "borderTopRightRadius": [
        "14rpx",
        0,
        0,
        264
      ]
    }
  },
  ".rounded-right": {
    "": {
      "borderTopRightRadius": [
        "8rpx",
        0,
        0,
        265
      ],
      "borderBottomRightRadius": [
        "8rpx",
        0,
        0,
        265
      ]
    }
  },
  ".rounded-bottom": {
    "": {
      "borderBottomRightRadius": [
        "8rpx",
        0,
        0,
        266
      ],
      "borderBottomLeftRadius": [
        "8rpx",
        0,
        0,
        266
      ]
    }
  },
  ".rounded-bottom-lg": {
    "": {
      "borderBottomRightRadius": [
        "14rpx",
        0,
        0,
        267
      ],
      "borderBottomLeftRadius": [
        "14rpx",
        0,
        0,
        267
      ]
    }
  },
  ".rounded-left": {
    "": {
      "borderTopLeftRadius": [
        "8rpx",
        0,
        0,
        268
      ],
      "borderBottomLeftRadius": [
        "8rpx",
        0,
        0,
        268
      ]
    }
  },
  ".rounded-circle": {
    "": {
      "borderRadius": [
        "100rpx",
        0,
        0,
        269
      ]
    }
  },
  ".rounded-0": {
    "": {
      "borderRadius": [
        0,
        0,
        0,
        270
      ]
    }
  },
  ".overflow-hidden": {
    "": {
      "overflow": [
        "hidden",
        0,
        0,
        273
      ]
    }
  },
  ".position-relative": {
    "": {
      "position": [
        "relative",
        0,
        0,
        275
      ]
    }
  },
  ".position-absolute": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        276
      ]
    }
  },
  ".position-fixed": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        277
      ]
    }
  },
  ".fixed-top": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        279
      ],
      "top": [
        0,
        0,
        0,
        279
      ],
      "right": [
        0,
        0,
        0,
        279
      ],
      "left": [
        0,
        0,
        0,
        279
      ],
      "zIndex": [
        1030,
        0,
        0,
        279
      ]
    }
  },
  ".fixed-bottom": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        281
      ],
      "right": [
        0,
        0,
        0,
        281
      ],
      "bottom": [
        0,
        0,
        0,
        281
      ],
      "left": [
        0,
        0,
        0,
        281
      ],
      "zIndex": [
        1030,
        0,
        0,
        281
      ]
    }
  },
  ".top-0": {
    "": {
      "top": [
        0,
        0,
        0,
        282
      ]
    }
  },
  ".left-0": {
    "": {
      "left": [
        0,
        0,
        0,
        283
      ]
    }
  },
  ".right-0": {
    "": {
      "right": [
        0,
        0,
        0,
        284
      ]
    }
  },
  ".bottom-0": {
    "": {
      "bottom": [
        0,
        0,
        0,
        285
      ]
    }
  },
  ".mask": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        287
      ],
      "left": [
        0,
        0,
        0,
        287
      ],
      "right": [
        0,
        0,
        0,
        287
      ],
      "top": [
        0,
        0,
        0,
        287
      ],
      "bottom": [
        0,
        0,
        0,
        287
      ],
      "zIndex": [
        100,
        0,
        0,
        287
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!****************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/video.nvue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=466e0921&mpType=page */ 5);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 22).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 22).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"400e32a0\",\n  false,\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQzJLO0FBQzNLLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NmUwOTIxJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHJvb3RcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjQwMGUzMmEwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2RldGFpbC12aWRlby9zdWJOVnVlL3ZpZGVvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/video.nvue?vue&type=template&id=466e0921&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=466e0921&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/video.nvue?vue&type=template&id=466e0921&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["bg-dark"] },
    [
      _c(
        "u-video",
        {
          ref: "video",
          staticStyle: { width: "750rpx", height: "225px" },
          attrs: {
            id: "video",
            src: _vm.src,
            poster: "/static/demo/6.jpg",
            controls: false,
            showCenterPlayBtn: false,
            showFullscreenBtn: false,
            showProgress: false,
            enableProgressGesture: false
          },
          on: {
            fullscreenchange: _vm.fullscreenchange,
            timeupdate: _vm.timeupdate,
            play: function($event) {
              _vm.isplay = true
            },
            pause: function($event) {
              _vm.isplay = false
            }
          }
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0"
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: [
                    "position-absolute",
                    "flex",
                    "align-center",
                    "justify-center"
                  ],
                  style: _vm.videoBox
                },
                [
                  _c("view", {
                    staticClass: ["position-absolute", "left-0", "right-0"],
                    style: _vm.modalStyle,
                    on: {
                      touchstart: _vm.touchStart,
                      touchmove: _vm.touchMove,
                      touchend: _vm.touchEnd
                    }
                  }),
                  _vm.showToastStatus
                    ? _c(
                        "view",
                        {
                          staticClass: ["p-2", "rounded"],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.3)" }
                        },
                        [
                          _vm.toast.type === "progress"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["font", "text-white"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatTime")(_vm.currentTime)
                                    ) +
                                      "/" +
                                      _vm._s(_vm._f("formatTime")(_vm.duration))
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.toast.type === "msg"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["font", "text-white"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v(_vm._s(_vm.toast.msg))]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e(),
                  _vm.showStatusBarStatus && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "flex",
                            "justify-between",
                            "align-center",
                            "video-bg-top",
                            "",
                            "position-absolute",
                            "top-0",
                            "left-0",
                            "right-0"
                          ],
                          staticStyle: { height: "44px" }
                        },
                        [
                          _c(
                            "view",
                            { staticClass: ["flex", "align-center"] },
                            [
                              _c(
                                "view",
                                { staticClass: ["flex", "align-center"] },
                                [
                                  _c("f-icon-btn", {
                                    attrs: { icon: "\ue612" },
                                    on: { click: _vm.fullOrExitScreen }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["flex", "align-center", "px-2"]
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["text-white"],
                                      staticStyle: {
                                        fontSize: "15px",
                                        lines: "1"
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" }
                                    },
                                    [_vm._v("视频标题")]
                                  )
                                ]
                              ),
                              _c(
                                "view",
                                { staticClass: ["flex", "align-center"] },
                                [
                                  _c("f-icon-btn", {
                                    attrs: { icon: "\ue612" },
                                    on: { click: _vm.fullOrExitScreen }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e()
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm.showStatusBarStatus && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "video-bg-top",
                "bg-dark",
                "position-fixed",
                "top-0",
                "left-0",
                "right-0"
              ]
            },
            [
              _c("view", { style: "height:" + _vm.statusBarHeight + "px" }),
              _c(
                "view",
                {
                  staticClass: ["flex", "align-center"],
                  staticStyle: { height: "44px" }
                },
                [
                  _c("f-icon-btn", {
                    attrs: { icon: "\ue612" },
                    on: { click: _vm.back }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm.showStatusBarStatus && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "position-fixed",
                "bottom-0",
                "left-0",
                "right-0",
                "video-bg-bottom"
              ]
            },
            [
              _c(
                "view",
                { staticClass: ["flex", "align-stretch"] },
                [
                  !_vm.isplay
                    ? _c("f-icon-btn", {
                        attrs: { icon: "\ue63a", size: 22 },
                        on: { click: _vm.playOrPause }
                      })
                    : _c("f-icon-btn", {
                        attrs: { icon: "\ue605", size: 22 },
                        on: { click: _vm.playOrPause }
                      }),
                  _c(
                    "view",
                    { staticClass: ["flex-1"] },
                    [
                      _c("f-slider", {
                        attrs: {
                          duration: _vm.duration,
                          currentTime: _vm.currentTime
                        },
                        on: {
                          change: _vm.sliderChange,
                          update: _vm.sliderUpdate
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["flex", "align-center", "justify-center"],
                      staticStyle: { width: "80px" }
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["font-sm", "text-white"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm._f("formatTime")(_vm.currentTime)) +
                              "/" +
                              _vm._s(_vm._f("formatTime")(_vm.duration))
                          )
                        ]
                      )
                    ]
                  ),
                  _c("f-icon-btn", {
                    attrs: { icon: "\ue800", size: 22 },
                    on: { click: _vm.fullOrExitScreen }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWljLENBQWdCLDBlQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxccm9vdFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxyb290XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxccm9vdFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxccm9vdFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxyb290XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxccm9vdFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _fIconBtn = _interopRequireDefault(__webpack_require__(/*! ./components/f-icon-btn.vue */ 9));\nvar _fSlider = _interopRequireDefault(__webpack_require__(/*! ./components/f-slider.vue */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar d = weex.requireModule('dom');var videoCTX = null;var showToastTimer = null;var timer = null;var _default = { provide: function provide() {return { v: this };}, components: { fIconBtn: _fIconBtn.default, fSlider: _fSlider.default }, data: function data() {return { src: 'https://v-cdn.zjol.com.cn/280443.mp4', isplay: false, //是否播放\n      statusBarHeight: 0, currentTime: 0, //当前时间点\n      duration: 0, //视频总时长\n      windowHeight: 0, windowWidth: 0, fullScreenStatus: false, //全屏状态\n      showToastStatus: false, //时间框显示状态\n      toast: { type: \"msg\", msg: \"提示\" }, showStatusBarStatus: true, //底部控制条的显示状态\n      oldTouchs: {}, //旧的触摸返回对象\n      oldValue: {}, dbCount: 0, //点击蒙版的次数\n      touchType: null, platform: '' //当前所在平台\n    };}, created: function created() {var res = uni.getSystemInfoSync();this.statusBarHeight = res.statusBarHeight;this.windowHeight = res.windowHeight; //屏幕高度\n    this.windowWidth = res.windowWidth; //屏幕宽度\n    this.platform = res.platform; // 引入图标\n    d.addRule('fontFace', { 'fontFamily': \"iconfont\", 'src': \"url('https://at.alicdn.com/t/font_1419176_mzo8rsjxi4c.ttf')\" });}, mounted: function mounted() {videoCTX = this.$refs.video;}, computed: { videoBox: function videoBox() {return this.fullScreenStatus ? \"width:\".concat(this.windowHeight, \"px;height:\").concat(this.windowWidth, \"px\") : \"width:750rpx;height:225px;\";}, modalStyle: function modalStyle() {var top = this.statusBarHeight + 44;return \"top:\".concat(top, \"px;bottom:44px;\");} }, methods: { //全屏、退出全屏\n    fullOrExitScreen: function fullOrExitScreen() {if (this.fullScreenStatus) {videoCTX.exitFullScreen(); //退出全屏\n      } else {videoCTX.requestFullScreen();}}, //显示或隐藏控制条\n    showOrHideStatusBar: function showOrHideStatusBar() {this.showStatusBarStatus ? this.hideStatusBar() : this.showStatusBar();}, //显示控制条\n    showStatusBar: function showStatusBar() {var _this = this;this.showStatusBarStatus = true;timer = timer ? clearTimeout(timer) : null;var timer = setTimeout(function () {_this.hideStatusBar();timer = null;\n      }, 3000);\n    },\n    //隐藏控制条\n    hideStatusBar: function hideStatusBar() {\n      this.showStatusBarStatus = false;\n    },\n    back: function back() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    //播放和暂停\n    playOrPause: function playOrPause() {\n      this.showToast({\n        msg: this.isplay ? '暂停' : '播放',\n        autoClose: true });\n\n      if (this.isplay) {\n        videoCTX.pause();\n      } else {\n        this.showStatusBar();\n        videoCTX.play();\n      }\n    },\n    //全屏变化时\n    fullscreenchange: function fullscreenchange(e) {\n      this.fullScreenStatus = e.detail.fullScreen; //进入全屏时，把全屏状态保存下来\n    },\n    //监听时间进度\n    timeupdate: function timeupdate(e) {\n      if (!this.showToastStatus) {//时间框没出来时，才通过这里获得当前时间\n        this.currentTime = parseInt(e.detail.currentTime); //获得当前时间\n      }\n      this.duration = parseInt(e.detail.duration); //获得总时长\n    },\n    //进度条变化\n    sliderChange: function sliderChange(e) {//拖动进度条结束时\n      videoCTX.seek(e); //视频跳转到某个时间\n      this.showToastStatus = false;\n      videoCTX.play();\n    },\n    sliderUpdate: function sliderUpdate(e) {//拖动进度条过程中\n      this.showStatusBar();\n      videoCTX.pause();\n      this.showToastStatus = true;\n      this.currentTime = e;\n      this.showToast({\n        type: 'progress',\n        autoClose: false });\n\n\n    },\n\n    showToast: function showToast(options) {var _this2 = this;\n      this.toast.type = options.type || 'msg';\n      this.toast.msg = options.msg || '提示';\n      this.showToastStatus = true;\n\n      if (options.autoClose !== false) {//autoClose代表是否自动关闭提示框（拖动时不应该自动关闭）\n        if (showToastTimer) clearTimeout(showToastTimer);\n        showToastTimer = setTimeout(function () {\n          _this2.showToastStatus = false;\n          showToastTimer = null;\n        }, 500);\n      }\n    },\n    //开始触摸蒙版\n    touchStart: function touchStart(e) {\n      this.oldTouchs = e.changedTouches[0]; //旧坐标\n      this.oldValue = {\n        currentTime: this.currentTime //保存旧的时间\n      };\n    },\n    //在蒙版上移动\n    touchMove: function touchMove(e) {\n      var newTouchs = e.changedTouches[0]; //新坐标\n      if (!this.touchType) {\n        this.touchType = Math.abs(newTouchs.pageX - this.oldTouchs.pageX) > 20 ? 'currentTime' : null; //拖动距离大于20，就进入拖动进度条模式\n        if (this.fullScreenStatus && this.platform === 'ios') {//处于全屏状态\n          this.touchType = Math.abs(newTouchs.pageY - this.oldTouchs.pageY) > 20 ? 'currentTime' : null; //拖动距离大于20，就进入拖动进度条模式\n        }\n        if (this.touchType === 'currentTime') {\n          videoCTX.pause();\n        }\n      } else if (this.touchType === 'currentTime') {//拖拽过程中\n        this.showToast({\n          type: 'progress',\n          autoClose: false });\n\n        this.showStatusBar();\n        var newCurrentTime = (newTouchs.pageX - this.oldTouchs.pageX) / 250 * this.duration * 2 + this.oldValue.currentTime * 1;\n        if (this.fullScreenStatus && this.platform === 'ios') {\n          newCurrentTime = (newTouchs.pageY - this.oldTouchs.pageY) / 250 * this.duration * 2 + this.oldValue.currentTime * 1;\n        }\n        newCurrentTime = newCurrentTime > this.duration ? this.duration : newCurrentTime;\n        newCurrentTime = newCurrentTime < 0 ? 0 : newCurrentTime;\n        this.currentTime = newCurrentTime;\n      }\n    },\n    //结束触摸蒙版\n    touchEnd: function touchEnd(e) {var _this3 = this;\n      if (this.touchType === 'currentTime') {//处于拖动模式\n        videoCTX.seek(this.currentTime); //视频跳转到某个时间\n        videoCTX.play();\n\n      } else {//处于点击模式\n        if (this.dbCount === 1 || this.dbCount === 0) {\n          this.dbCount++;\n        }\n        if (this.dbCount > 0) {\n          setTimeout(function () {\n            if (_this3.dbCount === 1) {//单击\n              _this3.showOrHideStatusBar();\n            }\n            if (_this3.dbCount === 2) {//双击\n              _this3.playOrPause();\n            }\n            _this3.dbCount = 0;\n          }, 250);\n        }\n      }\n      this.touchType = null; //拖拽完毕，重置状态\n      this.showToastStatus = false;\n    } },\n\n  filters: {\n    formatTime: function formatTime(result) {\n      var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n      var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result /\n      60 % 60);\n      var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n      return result = result > 3600 ? h + \":\" + m + \":\" + s : m + \":\" + s;\n    },\n    formatQuality: function formatQuality(val) {\n      var arr = {\n        SD: \"标清\",\n        HD: \"高清\",\n        FHD: \"超清\" };\n\n      return arr[val];\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUVBO0FBQ0EsZ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTEEsa0NBQ0Esb0JBQ0EsMEJBQ0EsaUIsZUFHQSxFQUNBLE9BREEscUJBQ0EsQ0FDQSxTQUNBLE9BREEsR0FHQSxDQUxBLEVBTUEsY0FDQSwyQkFEQSxFQUVBLHlCQUZBLEVBTkEsRUFVQSxJQVZBLGtCQVVBLENBQ0EsU0FDQSwyQ0FEQSxFQUVBLGFBRkEsRUFFQTtBQUNBLHdCQUhBLEVBSUEsY0FKQSxFQUlBO0FBQ0EsaUJBTEEsRUFLQTtBQUNBLHFCQU5BLEVBT0EsY0FQQSxFQVNBLHVCQVRBLEVBU0E7QUFFQSw0QkFYQSxFQVdBO0FBRUEsZUFDQSxXQURBLEVBRUEsU0FGQSxFQWJBLEVBa0JBLHlCQWxCQSxFQWtCQTtBQUVBLG1CQXBCQSxFQW9CQTtBQUNBLGtCQXJCQSxFQXNCQSxVQXRCQSxFQXNCQTtBQUNBLHFCQXZCQSxFQXdCQSxZQXhCQSxDQXdCQTtBQXhCQSxNQTBCQSxDQXJDQSxFQXNDQSxPQXRDQSxxQkFzQ0EsQ0FDQSxrQ0FDQSwyQ0FDQSxxQ0FIQSxDQUdBO0FBQ0EsdUNBSkEsQ0FJQTtBQUNBLGlDQUxBLENBTUE7QUFDQSw0QkFDQSx3QkFEQSxFQUVBLG9FQUZBLElBS0EsQ0FsREEsRUFtREEsT0FuREEscUJBbURBLENBQ0EsNEJBQ0EsQ0FyREEsRUFzREEsWUFDQSxRQURBLHNCQUNBLENBQ0EsOElBRUEsQ0FKQSxFQUtBLFVBTEEsd0JBS0EsQ0FDQSxvQ0FDQSw2Q0FDQSxDQVJBLEVBdERBLEVBZ0VBLFdBQ0E7QUFDQSxvQkFGQSw4QkFFQSxDQUNBLDRCQUNBLDBCQURBLENBQ0E7QUFDQSxPQUZBLE1BRUEsQ0FDQSw2QkFDQSxDQUNBLENBUkEsRUFTQTtBQUNBLHVCQVZBLGlDQVVBLENBQ0EsdUVBQ0EsQ0FaQSxFQWFBO0FBQ0EsaUJBZEEsMkJBY0Esa0JBQ0EsZ0NBQ0EsMkNBQ0Esb0NBQ0Esc0JBQ0E7QUFDQSxPQUhBLEVBR0EsSUFIQTtBQUlBLEtBckJBO0FBc0JBO0FBQ0EsaUJBdkJBLDJCQXVCQTtBQUNBO0FBQ0EsS0F6QkE7QUEwQkEsUUExQkEsa0JBMEJBO0FBQ0E7QUFDQSxnQkFEQTs7QUFHQSxLQTlCQTtBQStCQTtBQUNBLGVBaENBLHlCQWdDQTtBQUNBO0FBQ0Esc0NBREE7QUFFQSx1QkFGQTs7QUFJQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EzQ0E7QUE0Q0E7QUFDQSxvQkE3Q0EsNEJBNkNBLENBN0NBLEVBNkNBO0FBQ0Esa0RBREEsQ0FDQTtBQUNBLEtBL0NBO0FBZ0RBO0FBQ0EsY0FqREEsc0JBaURBLENBakRBLEVBaURBO0FBQ0E7QUFDQSwwREFEQSxDQUNBO0FBQ0E7QUFDQSxrREFKQSxDQUlBO0FBQ0EsS0F0REE7QUF1REE7QUFDQSxnQkF4REEsd0JBd0RBLENBeERBLEVBd0RBO0FBQ0EsdUJBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSxLQTVEQTtBQTZEQSxnQkE3REEsd0JBNkRBLENBN0RBLEVBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsd0JBRkE7OztBQUtBLEtBdkVBOztBQXlFQSxhQXpFQSxxQkF5RUEsT0F6RUEsRUF5RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsRUFHQSxHQUhBO0FBSUE7QUFDQSxLQXJGQTtBQXNGQTtBQUNBLGNBdkZBLHNCQXVGQSxDQXZGQSxFQXVGQTtBQUNBLDJDQURBLENBQ0E7QUFDQTtBQUNBLHFDQURBLENBQ0E7QUFEQTtBQUdBLEtBNUZBO0FBNkZBO0FBQ0EsYUE5RkEscUJBOEZBLENBOUZBLEVBOEZBO0FBQ0EsMENBREEsQ0FDQTtBQUNBO0FBQ0Esc0dBREEsQ0FDQTtBQUNBO0FBQ0Esd0dBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxNQVFBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdEhBO0FBdUhBO0FBQ0EsWUF4SEEsb0JBd0hBLENBeEhBLEVBd0hBO0FBQ0E7QUFDQSx3Q0FEQSxDQUNBO0FBQ0E7O0FBRUEsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FSQSxFQVFBLEdBUkE7QUFTQTtBQUNBO0FBQ0EsNEJBckJBLENBcUJBO0FBQ0E7QUFDQSxLQS9JQSxFQWhFQTs7QUFpTkE7QUFDQSxjQURBLHNCQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxRQURBLEdBQ0EsRUFEQTtBQUVBO0FBQ0E7QUFDQSxLQVBBO0FBUUEsaUJBUkEseUJBUUEsR0FSQSxFQVFBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGdCQUZBO0FBR0EsaUJBSEE7O0FBS0E7QUFDQSxLQWZBLEVBak5BLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImJnLWRhcmtcIj5cclxuXHRcdDx2aWRlbyBpZD0ndmlkZW8nIHJlZj1cInZpZGVvXCIgOnNyYz1cInNyY1wiIHBvc3Rlcj0nL3N0YXRpYy9kZW1vLzYuanBnJyA6Y29udHJvbHM9XCJmYWxzZVwiXHJcblx0XHRcdDpzaG93LWNlbnRlci1wbGF5LWJ0bj0nZmFsc2UnIDpzaG93LWZ1bGxzY3JlZW4tYnRuPSdmYWxzZScgOnNob3ctcHJvZ3Jlc3M9J2ZhbHNlJ1xyXG5cdFx0XHQ6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9J2ZhbHNlJyBzdHlsZT1cIndpZHRoOiA3NTBycHg7aGVpZ2h0OiAyMjVweDtcIiBAZnVsbHNjcmVlbmNoYW5nZT0nZnVsbHNjcmVlbmNoYW5nZSdcclxuXHRcdFx0QHRpbWV1cGRhdGU9J3RpbWV1cGRhdGUnIEBwbGF5PSdpc3BsYXkgPSB0cnVlJyBAcGF1c2U9J2lzcGxheSA9IGZhbHNlJz5cclxuXHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiA6c3R5bGU9XCJ2aWRlb0JveFwiPlxyXG5cdFx0XHRcdDwhLS0g6JKZ54mIKOS7o+abv+inhumikee7hOS7tuaOpeaUtuinpuaRuOaIlueCueWHu+S6i+S7tikgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMFwiIDpzdHlsZT1cIm1vZGFsU3R5bGVcIiBAdG91Y2hzdGFydD0ndG91Y2hTdGFydCdcclxuXHRcdFx0XHRcdEB0b3VjaG1vdmU9XCJ0b3VjaE1vdmVcIiBAdG91Y2hlbmQ9XCJ0b3VjaEVuZFwiPjwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOaPkOekuuahhiAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd1RvYXN0U3RhdHVzXCIgY2xhc3M9XCJwLTIgcm91bmRlZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInRvYXN0LnR5cGUgPT09ICdwcm9ncmVzcydcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbnQgdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInRvYXN0LnR5cGUgPT09ICdtc2cnXCIgY2xhc3M9XCJmb250IHRleHQtd2hpdGVcIj57e3RvYXN0Lm1zZ319PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8IS0tIOWFqOWxjyDmjqfliLbmnaEgLS0+XHJcblx0XHRcdFx0PCEtLSDpobbpg6ggLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInNob3dTdGF0dXNCYXJTdGF0dXMgJiYgZnVsbFNjcmVlblN0YXR1c1wiIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIHZpZGVvLWJnLXRvcCAgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTBcIiBzdHlsZT1cImhlaWdodDogNDRweDtcIiA+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCIgPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOeureWktCAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxmLWljb24tYnRuIDppY29uPVwiJ1xcdWU2MTInXCIgQGNsaWNrPSdmdWxsT3JFeGl0U2NyZWVuJz48L2YtaWNvbi1idG4+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDmoIfpopggLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIgcHgtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O2xpbmVzOiAxO1wiPuinhumikeagh+mimDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGYtaWNvbi1idG4gOmljb249XCInXFx1ZTYxMidcIiBAY2xpY2s9J2Z1bGxPckV4aXRTY3JlZW4nPjwvZi1pY29uLWJ0bj5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOW6lemDqCAtLT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWRlbz5cclxuXHJcblx0XHQ8IS0tIOmdnuWFqOWxjyDmjqfliLbmnaEgLS0+XHJcblx0XHQ8IS0tIOmhtumDqCjlt6bnrq3lpLQpLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwic2hvd1N0YXR1c0JhclN0YXR1cyAmJiAhZnVsbFNjcmVlblN0YXR1c1wiIGNsYXNzPVwidmlkZW8tYmctdG9wIGJnLWRhcmsgcG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJcIiA6c3R5bGU9XCInaGVpZ2h0Oicrc3RhdHVzQmFySGVpZ2h0KydweCdcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiA0NHB4O1wiIGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlNjEyJ1wiIEBjbGljaz0nYmFjayc+PC9mLWljb24tYnRuPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOW6lemDqOaOp+WItuadoSAtLT5cclxuXHRcdDx2aWV3IHYtaWY9XCJzaG93U3RhdHVzQmFyU3RhdHVzICYmIWZ1bGxTY3JlZW5TdGF0dXNcIiBjbGFzcz1cInBvc2l0aW9uLWZpeGVkIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHZpZGVvLWJnLWJvdHRvbVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tc3RyZXRjaFwiIHN0eWxlPVwiNDRweFwiPlxyXG5cdFx0XHRcdDwhLS0g5pKt5pS+5oyJ6ZKuIC0tPlxyXG5cdFx0XHRcdDxmLWljb24tYnRuIHYtaWY9XCIhaXNwbGF5XCIgOmljb249XCInXFx1ZTYzYSdcIiA6c2l6ZT1cIjIyXCIgQGNsaWNrPSdwbGF5T3JQYXVzZSc+PC9mLWljb24tYnRuPlxyXG5cdFx0XHRcdDxmLWljb24tYnRuIHYtZWxzZSA6aWNvbj1cIidcXHVlNjA1J1wiIDpzaXplPVwiMjJcIiBAY2xpY2s9J3BsYXlPclBhdXNlJz48L2YtaWNvbi1idG4+XHJcblx0XHRcdFx0PCEtLSDov5vluqbmnaEgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTFcIj5cclxuXHRcdFx0XHRcdDxmLXNsaWRlciA6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpjdXJyZW50VGltZT1cImN1cnJlbnRUaW1lXCIgQGNoYW5nZT0nc2xpZGVyQ2hhbmdlJ1xyXG5cdFx0XHRcdFx0XHRAdXBkYXRlPVwic2xpZGVyVXBkYXRlXCI+PC9mLXNsaWRlcj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDml7bpl7QgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQtc20gdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlODAwJ1wiIDpzaXplPVwiMjJcIiBAY2xpY2s9XCJmdWxsT3JFeGl0U2NyZWVuXCI+PC9mLWljb24tYnRuPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRsZXQgdmlkZW9DVFggPSBudWxsO1xyXG5cdGxldCBzaG93VG9hc3RUaW1lciA9IG51bGw7XHJcblx0bGV0IHRpbWVyID0gbnVsbDtcclxuXHRpbXBvcnQgZkljb25CdG4gZnJvbSAnLi9jb21wb25lbnRzL2YtaWNvbi1idG4udnVlJztcclxuXHRpbXBvcnQgZlNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvZi1zbGlkZXIudnVlJztcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm92aWRlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHY6IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Zkljb25CdG4sXHJcblx0XHRcdGZTbGlkZXJcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNyYzogJ2h0dHBzOi8vdi1jZG4uempvbC5jb20uY24vMjgwNDQzLm1wNCcsXHJcblx0XHRcdFx0aXNwbGF5OiBmYWxzZSwgLy/mmK/lkKbmkq3mlL5cclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsXHJcblx0XHRcdFx0Y3VycmVudFRpbWU6IDAsIC8v5b2T5YmN5pe26Ze054K5XHJcblx0XHRcdFx0ZHVyYXRpb246IDAsIC8v6KeG6aKR5oC75pe26ZW/XHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiAwLFxyXG5cclxuXHRcdFx0XHRmdWxsU2NyZWVuU3RhdHVzOiBmYWxzZSwgLy/lhajlsY/nirbmgIFcclxuXHJcblx0XHRcdFx0c2hvd1RvYXN0U3RhdHVzOiBmYWxzZSwgLy/ml7bpl7TmoYbmmL7npLrnirbmgIFcclxuXHJcblx0XHRcdFx0dG9hc3Q6IHtcclxuXHRcdFx0XHRcdHR5cGU6IFwibXNnXCIsXHJcblx0XHRcdFx0XHRtc2c6IFwi5o+Q56S6XCJcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRzaG93U3RhdHVzQmFyU3RhdHVzOiB0cnVlLCAvL+W6lemDqOaOp+WItuadoeeahOaYvuekuueKtuaAgVxyXG5cclxuXHRcdFx0XHRvbGRUb3VjaHM6IHt9LCAvL+aXp+eahOinpuaRuOi/lOWbnuWvueixoVxyXG5cdFx0XHRcdG9sZFZhbHVlOiB7fSxcclxuXHRcdFx0XHRkYkNvdW50OiAwLCAvL+eCueWHu+iSmeeJiOeahOasoeaVsFxyXG5cdFx0XHRcdHRvdWNoVHlwZTogbnVsbCxcclxuXHRcdFx0XHRwbGF0Zm9ybTonJywvL+W9k+WJjeaJgOWcqOW5s+WPsFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0bGV0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHJlcy5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodCAvL+Wxj+W5lemrmOW6plxyXG5cdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoIC8v5bGP5bmV5a695bqmXHJcblx0XHRcdHRoaXMucGxhdGZvcm0gPSByZXMucGxhdGZvcm07XHJcblx0XHRcdC8vIOW8leWFpeWbvuagh1xyXG5cdFx0XHRkLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHRcdCdmb250RmFtaWx5JzogXCJpY29uZm9udFwiLFxyXG5cdFx0XHRcdCdzcmMnOiBcInVybCgnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF8xNDE5MTc2X216bzhyc2p4aTRjLnR0ZicpXCJcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHZpZGVvQ1RYID0gdGhpcy4kcmVmcy52aWRlbztcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHR2aWRlb0JveCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdWxsU2NyZWVuU3RhdHVzID8gYHdpZHRoOiR7dGhpcy53aW5kb3dIZWlnaHR9cHg7aGVpZ2h0OiR7dGhpcy53aW5kb3dXaWR0aH1weGAgOlxyXG5cdFx0XHRcdFx0YHdpZHRoOjc1MHJweDtoZWlnaHQ6MjI1cHg7YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb2RhbFN0eWxlKCkge1xyXG5cdFx0XHRcdGxldCB0b3AgPSB0aGlzLnN0YXR1c0JhckhlaWdodCArIDQ0XHJcblx0XHRcdFx0cmV0dXJuIGB0b3A6JHt0b3B9cHg7Ym90dG9tOjQ0cHg7YFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvL+WFqOWxj+OAgemAgOWHuuWFqOWxj1xyXG5cdFx0XHRmdWxsT3JFeGl0U2NyZWVuKCl7XHJcblx0XHRcdFx0aWYodGhpcy5mdWxsU2NyZWVuU3RhdHVzKXtcclxuXHRcdFx0XHRcdHZpZGVvQ1RYLmV4aXRGdWxsU2NyZWVuKCkvL+mAgOWHuuWFqOWxj1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dmlkZW9DVFgucmVxdWVzdEZ1bGxTY3JlZW4oKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/mmL7npLrmiJbpmpDol4/mjqfliLbmnaFcclxuXHRcdFx0c2hvd09ySGlkZVN0YXR1c0JhcigpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXJTdGF0dXMgPyB0aGlzLmhpZGVTdGF0dXNCYXIoKSA6IHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5pi+56S65o6n5Yi25p2hXHJcblx0XHRcdHNob3dTdGF0dXNCYXIoKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyU3RhdHVzID0gdHJ1ZTtcclxuXHRcdFx0XHR0aW1lciA9IHRpbWVyID8gY2xlYXJUaW1lb3V0KHRpbWVyKSA6IG51bGw7XHJcblx0XHRcdFx0bGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmhpZGVTdGF0dXNCYXIoKVxyXG5cdFx0XHRcdFx0dGltZXIgPSBudWxsO1xyXG5cdFx0XHRcdH0sIDMwMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6ZqQ6JeP5o6n5Yi25p2hXHJcblx0XHRcdGhpZGVTdGF0dXNCYXIoKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyU3RhdHVzID0gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2soKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+aSreaUvuWSjOaaguWBnFxyXG5cdFx0XHRwbGF5T3JQYXVzZSgpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRtc2c6IHRoaXMuaXNwbGF5ID8gJ+aaguWBnCcgOiAn5pKt5pS+JyxcclxuXHRcdFx0XHRcdGF1dG9DbG9zZTogdHJ1ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKHRoaXMuaXNwbGF5KSB7XHJcblx0XHRcdFx0XHR2aWRlb0NUWC5wYXVzZSgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5YWo5bGP5Y+Y5YyW5pe2XHJcblx0XHRcdGZ1bGxzY3JlZW5jaGFuZ2UoZSkge1xyXG5cdFx0XHRcdHRoaXMuZnVsbFNjcmVlblN0YXR1cyA9IGUuZGV0YWlsLmZ1bGxTY3JlZW4gLy/ov5vlhaXlhajlsY/ml7bvvIzmiorlhajlsY/nirbmgIHkv53lrZjkuIvmnaVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/nm5HlkKzml7bpl7Tov5vluqZcclxuXHRcdFx0dGltZXVwZGF0ZShlKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnNob3dUb2FzdFN0YXR1cykgeyAvL+aXtumXtOahhuayoeWHuuadpeaXtu+8jOaJjemAmui/h+i/memHjOiOt+W+l+W9k+WJjeaXtumXtFxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHBhcnNlSW50KGUuZGV0YWlsLmN1cnJlbnRUaW1lKTsgLy/ojrflvpflvZPliY3ml7bpl7RcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IHBhcnNlSW50KGUuZGV0YWlsLmR1cmF0aW9uKTsgLy/ojrflvpfmgLvml7bplb9cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ov5vluqbmnaHlj5jljJZcclxuXHRcdFx0c2xpZGVyQ2hhbmdlKGUpIHsgLy/mi5bliqjov5vluqbmnaHnu5PmnZ/ml7ZcclxuXHRcdFx0XHR2aWRlb0NUWC5zZWVrKGUpIC8v6KeG6aKR6Lez6L2s5Yiw5p+Q5Liq5pe26Ze0XHJcblx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSBmYWxzZTtcclxuXHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2xpZGVyVXBkYXRlKGUpIHsgLy/mi5bliqjov5vluqbmnaHov4fnqIvkuK1cclxuXHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXIoKVxyXG5cdFx0XHRcdHZpZGVvQ1RYLnBhdXNlKCk7XHJcblx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSBlO1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHR5cGU6ICdwcm9ncmVzcycsXHJcblx0XHRcdFx0XHRhdXRvQ2xvc2U6IGZhbHNlXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzaG93VG9hc3Qob3B0aW9ucykge1xyXG5cdFx0XHRcdHRoaXMudG9hc3QudHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnbXNnJ1xyXG5cdFx0XHRcdHRoaXMudG9hc3QubXNnID0gb3B0aW9ucy5tc2cgfHwgJ+aPkOekuidcclxuXHRcdFx0XHR0aGlzLnNob3dUb2FzdFN0YXR1cyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGlmIChvcHRpb25zLmF1dG9DbG9zZSAhPT0gZmFsc2UpIHsgLy9hdXRvQ2xvc2Xku6PooajmmK/lkKboh6rliqjlhbPpl63mj5DnpLrmoYbvvIjmi5bliqjml7bkuI3lupTor6Xoh6rliqjlhbPpl63vvIlcclxuXHRcdFx0XHRcdGlmIChzaG93VG9hc3RUaW1lcikgY2xlYXJUaW1lb3V0KHNob3dUb2FzdFRpbWVyKVxyXG5cdFx0XHRcdFx0c2hvd1RvYXN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0c2hvd1RvYXN0VGltZXIgPSBudWxsXHJcblx0XHRcdFx0XHR9LCA1MDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+W8gOWni+inpuaRuOiSmeeJiFxyXG5cdFx0XHR0b3VjaFN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLm9sZFRvdWNocyA9IGUuY2hhbmdlZFRvdWNoZXNbMF07IC8v5pen5Z2Q5qCHXHJcblx0XHRcdFx0dGhpcy5vbGRWYWx1ZSA9IHtcclxuXHRcdFx0XHRcdGN1cnJlbnRUaW1lOiB0aGlzLmN1cnJlbnRUaW1lIC8v5L+d5a2Y5pen55qE5pe26Ze0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WcqOiSmeeJiOS4iuenu+WKqFxyXG5cdFx0XHR0b3VjaE1vdmUoZSkge1xyXG5cdFx0XHRcdGxldCBuZXdUb3VjaHMgPSBlLmNoYW5nZWRUb3VjaGVzWzBdOyAvL+aWsOWdkOagh1xyXG5cdFx0XHRcdGlmICghdGhpcy50b3VjaFR5cGUpIHtcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gTWF0aC5hYnMobmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVgpID4gMjAgPyAnY3VycmVudFRpbWUnIDpudWxsIC8v5ouW5Yqo6Led56a75aSn5LqOMjDvvIzlsLHov5vlhaXmi5bliqjov5vluqbmnaHmqKHlvI9cclxuXHRcdFx0XHRcdGlmKHRoaXMuZnVsbFNjcmVlblN0YXR1cyAmJiB0aGlzLnBsYXRmb3JtID09PSAnaW9zJyl7Ly/lpITkuo7lhajlsY/nirbmgIFcclxuXHRcdFx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBNYXRoLmFicyhuZXdUb3VjaHMucGFnZVkgLSB0aGlzLm9sZFRvdWNocy5wYWdlWSkgPiAyMCA/ICdjdXJyZW50VGltZScgOm51bGwgLy/mi5bliqjot53nprvlpKfkuo4yMO+8jOWwsei/m+WFpeaLluWKqOi/m+W6puadoeaooeW8j1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMudG91Y2hUeXBlID09PSAnY3VycmVudFRpbWUnKSB7XHJcblx0XHRcdFx0XHRcdHZpZGVvQ1RYLnBhdXNlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudG91Y2hUeXBlID09PSAnY3VycmVudFRpbWUnKSB7Ly/mi5bmi73ov4fnqIvkuK1cclxuXHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3Byb2dyZXNzJyxcclxuXHRcdFx0XHRcdFx0YXV0b0Nsb3NlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdFx0XHRsZXQgbmV3Q3VycmVudFRpbWUgPSAobmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVgpIC8gMjUwICogdGhpcy5kdXJhdGlvbiAqIDIgKyB0aGlzLm9sZFZhbHVlLmN1cnJlbnRUaW1lICogMTtcclxuXHRcdFx0XHRcdGlmKHRoaXMuZnVsbFNjcmVlblN0YXR1cyAmJiB0aGlzLnBsYXRmb3JtID09PSAnaW9zJyl7XHJcblx0XHRcdFx0XHRcdG5ld0N1cnJlbnRUaW1lID0gKG5ld1RvdWNocy5wYWdlWSAtIHRoaXMub2xkVG91Y2hzLnBhZ2VZKSAvIDI1MCAqIHRoaXMuZHVyYXRpb24gKiAyICsgdGhpcy5vbGRWYWx1ZS5jdXJyZW50VGltZSAqIDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRuZXdDdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lID4gdGhpcy5kdXJhdGlvbiA/IHRoaXMuZHVyYXRpb24gOiBuZXdDdXJyZW50VGltZTtcclxuXHRcdFx0XHRcdG5ld0N1cnJlbnRUaW1lID0gbmV3Q3VycmVudFRpbWUgPCAwID8gMCA6IG5ld0N1cnJlbnRUaW1lO1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/nu5PmnZ/op6bmkbjokpnniYhcclxuXHRcdFx0dG91Y2hFbmQoZSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnRvdWNoVHlwZSA9PT0gJ2N1cnJlbnRUaW1lJykgeyAvL+WkhOS6juaLluWKqOaooeW8j1xyXG5cdFx0XHRcdFx0dmlkZW9DVFguc2Vlayh0aGlzLmN1cnJlbnRUaW1lKSAvL+inhumikei3s+i9rOWIsOafkOS4quaXtumXtFxyXG5cdFx0XHRcdFx0dmlkZW9DVFgucGxheSgpXHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7IC8v5aSE5LqO54K55Ye75qih5byPXHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYkNvdW50ID09PSAxIHx8IHRoaXMuZGJDb3VudCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRiQ291bnQrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGJDb3VudCA+IDApIHtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZGJDb3VudCA9PT0gMSkgeyAvL+WNleWHu1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93T3JIaWRlU3RhdHVzQmFyKClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZGJDb3VudCA9PT0gMikgeyAvL+WPjOWHu1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5T3JQYXVzZSgpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGJDb3VudCA9IDA7XHJcblx0XHRcdFx0XHRcdH0sIDI1MClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBudWxsOyAvL+aLluaLveWujOavle+8jOmHjee9rueKtuaAgVxyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0U3RhdHVzID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRmaWx0ZXJzOiB7XHJcblx0XHRcdGZvcm1hdFRpbWUocmVzdWx0KSB7XHJcblx0XHRcdFx0dmFyIGggPSBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApIDwgMTAgPyAnMCcgKyBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApIDogTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKTtcclxuXHRcdFx0XHR2YXIgbSA9IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcigocmVzdWx0IC8gNjAgJSA2MCkpIDogTWF0aC5mbG9vcigocmVzdWx0IC9cclxuXHRcdFx0XHRcdDYwICUgNjApKTtcclxuXHRcdFx0XHR2YXIgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPSByZXN1bHQgPiAzNjAwID8gKGggKyBcIjpcIiArIG0gKyBcIjpcIiArIHMpIDogbSArIFwiOlwiICsgcztcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybWF0UXVhbGl0eSh2YWwpIHtcclxuXHRcdFx0XHRsZXQgYXJyID0ge1xyXG5cdFx0XHRcdFx0U0Q6IFwi5qCH5riFXCIsXHJcblx0XHRcdFx0XHRIRDogXCLpq5jmuIVcIixcclxuXHRcdFx0XHRcdEZIRDogXCLotoXmuIVcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gYXJyW3ZhbF1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC8qIOa4kOWPmOiJsiAqL1xyXG5cdC52aWRlby1iZy10b3Age1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcclxuXHR9XHJcblxyXG5cdC52aWRlby1iZy1ib3R0b20ge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-icon-btn.vue ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-icon-btn.vue?vue&type=template&id=afaffccc& */ 10);\n/* harmony import */ var _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-icon-btn.vue?vue&type=script&lang=js& */ 12);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./f-icon-btn.vue?vue&type=style&index=0&lang=css& */ 14).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./f-icon-btn.vue?vue&type=style&index=0&lang=css& */ 14).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5aa6b318\",\n  false,\n  _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/components/f-icon-btn.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUg7QUFDdkg7QUFDOEQ7QUFDTDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQzJLO0FBQzNLLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZmFmZmNjYyZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxyb290XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1YWE2YjMxOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS9jb21wb25lbnRzL2YtaWNvbi1idG4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=template&id=afaffccc& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=template&id=afaffccc& */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=template&id=afaffccc& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["video-btn"],
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [
      _c(
        "u-text",
        {
          staticClass: ["iconfont", "text-white"],
          style: "font-size:" + _vm.size + "px;",
          appendAsTree: true,
          attrs: { append: "tree" }
        },
        [_vm._v(_vm._s(_vm.icon))]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=script&lang=js& */ 13);\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBiLENBQWdCLG1lQUFHLEVBQUMiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHJvb3RcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxccm9vdFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHJvb3RcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1pY29uLWJ0bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxccm9vdFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxyb290XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxccm9vdFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    icon: {\n      type: String,\n      default: '' },\n\n    size: {\n      type: [String, Number],\n      default: 20 } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLWljb24tYnRuLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFEQTs7QUFLQTtBQUNBLDRCQURBO0FBRUEsaUJBRkEsRUFMQSxFQURBLEUiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ2aWRlby1idG5cIiBAY2xpY2s9XCIkZW1pdCgnY2xpY2snKVwiPlxyXG5cdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCB0ZXh0LXdoaXRlXCJcclxuXHRcdDpzdHlsZT1cIidmb250LXNpemU6JytzaXplKydweDsnXCI+e3tpY29ufX08L3RleHQ+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpY29uOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpemU6e1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAyMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XHJcblx0LnZpZGVvLWJ0bntcclxuXHRcdHdpZHRoOiA0NHB4O1xyXG5cdFx0aGVpZ2h0OiA0NHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=style&index=0&lang=css& */ 15);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".video-btn": {
    "": {
      "width": [
        "44",
        0,
        0,
        0
      ],
      "height": [
        "44",
        0,
        0,
        0
      ],
      "flexDirection": [
        "row",
        0,
        0,
        0
      ],
      "alignItems": [
        "center",
        0,
        0,
        0
      ],
      "justifyContent": [
        "center",
        0,
        0,
        0
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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
/* 17 */
/*!*****************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-slider.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-slider.vue?vue&type=template&id=040f5173& */ 18);\n/* harmony import */ var _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-slider.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"ee2f6b1e\",\n  false,\n  _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/components/f-slider.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDMks7QUFDM0ssZ0JBQWdCLG9MQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mLXNsaWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQwZjUxNzMmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mLXNsaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Ytc2xpZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHJvb3RcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImVlMmY2YjFlXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2RldGFpbC12aWRlby9zdWJOVnVlL2NvbXBvbmVudHMvZi1zbGlkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-slider.vue?vue&type=template&id=040f5173& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slider.vue?vue&type=template&id=040f5173& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-slider.vue?vue&type=template&id=040f5173& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["align-center", "position-relative", "flex"],
      staticStyle: { height: "44px" },
      on: {
        touchstart: _vm.touchstart,
        touchmove: _vm.touchmove,
        touchend: _vm.touchend,
        touchcancel: _vm.touchcancel
      }
    },
    [
      _c(
        "view",
        {
          staticClass: ["flex-1", "rounded"],
          staticStyle: {
            height: "3px",
            backgroundColor: "rgba(255,255,255,0.5)"
          }
        },
        [
          _c("view", {
            staticClass: ["bg-main"],
            staticStyle: { height: "3px" },
            style: _vm.activeStyle
          })
        ]
      ),
      _c("view", {
        staticClass: ["position-absolute", "rounded-circle", "bg-main-hover"],
        staticStyle: { width: "15px", height: "15px" },
        style: _vm.activeDotSty
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!******************************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-slider.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slider.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_root_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdiLENBQWdCLGllQUFHLEVBQUMiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXHJvb3RcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxccm9vdFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHJvb3RcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1zbGlkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHJvb3RcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxccm9vdFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXHJvb3RcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1zbGlkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/components/f-slider.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  inject: ['v'],\n  props: {\n    currentTime: {\n      type: Number,\n      default: 0 },\n\n    duration: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      width: 0, //进度条的总宽度\n      activeWith: 0, //当前播放进度的宽度\n      moveStatus: false //拖拽状态\n    };\n  },\n  computed: {\n    activeStyle: function activeStyle() {\n      return \"width:\".concat(this.activeWith, \"px\");\n    },\n    activeDotSty: function activeDotSty() {\n      return \"left:\".concat(this.activeWith, \"px\");\n    },\n    current: function current() {//通过进度条长度，反推出时间\n      return this.width == 0 ? 0 : this.activeWith / this.width * this.duration;\n    } },\n\n  watch: {\n    currentTime: function currentTime(newval, oldval) {\n      if (!this.moveStatus) {//没有处在拖拽状态，才监听时间\n        this.active();\n      }\n    } },\n\n  created: function created() {\n    this.width = this.v.windowWidth - 44 - 44 - 80 - 15;\n    this.active();\n  },\n  methods: {\n    active: function active() {\n      this.activeWith = this.duration == 0 ? 0 : this.currentTime / this.duration * this.width;\n    },\n    touchstart: function touchstart(e) {\n      if (this.duration === 0) return;\n      this.moveStatus = true; //开启拖拽状态\n      //e.changedTouches[0].screenX (当前触摸点距离屏幕左边的长度)\n      this.activeWith = e.changedTouches[0].screenX - 44;\n    },\n    touchmove: function touchmove(e) {\n      if (this.duration === 0) return;\n      var d = e.changedTouches[0].screenX - 44;\n      if (d <= 0) {\n        this.activeWith = 0;\n      } else if (d >= this.width) {\n        this.activeWith = this.width;\n      } else {\n        this.activeWith = d;\n      }\n      this.$emit('update', this.current);\n    },\n    touchend: function touchend(e) {\n      if (this.duration === 0) return;\n      this.moveStatus = false; //结束拖拽状态\n      this.$emit('change', this.current);\n    },\n    touchcancel: function touchcancel(e) {//滑动手势被中断时（例如提示电量不足）\n      this.touchend(e);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLXNsaWRlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBLGVBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQUxBLEVBRkE7OztBQVlBLE1BWkEsa0JBWUE7QUFDQTtBQUNBLGNBREEsRUFDQTtBQUNBLG1CQUZBLEVBRUE7QUFDQSx1QkFIQSxDQUdBO0FBSEE7QUFLQSxHQWxCQTtBQW1CQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxnQkFKQSwwQkFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLFdBUEEscUJBT0E7QUFDQTtBQUNBLEtBVEEsRUFuQkE7O0FBOEJBO0FBQ0EsZUFEQSx1QkFDQSxNQURBLEVBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQSxFQTlCQTs7QUFxQ0EsU0FyQ0EscUJBcUNBO0FBQ0E7QUFDQTtBQUNBLEdBeENBO0FBeUNBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGNBSkEsc0JBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQSw2QkFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLEtBVEE7QUFVQSxhQVZBLHFCQVVBLENBVkEsRUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJCQTtBQXNCQSxZQXRCQSxvQkFzQkEsQ0F0QkEsRUFzQkE7QUFDQTtBQUNBLDhCQUZBLENBRUE7QUFDQTtBQUNBLEtBMUJBO0FBMkJBLGVBM0JBLHVCQTJCQSxDQTNCQSxFQTJCQTtBQUNBO0FBQ0EsS0E3QkEsRUF6Q0EsRSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIiBhbGlnbi1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmUgZmxleFwiIHN0eWxlPVwiaGVpZ2h0OiA0NHB4O1wiXHJcblx0QHRvdWNoc3RhcnQgPSAndG91Y2hzdGFydCcgQHRvdWNobW92ZSA9ICd0b3VjaG1vdmUnIEB0b3VjaGVuZD0ndG91Y2hlbmQnIEB0b3VjaGNhbmNlbCA9ICd0b3VjaGNhbmNlbCdcclxuXHQ+XHJcblx0XHQ8IS0tIOe6v+adoSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleC0xIHJvdW5kZWRcIiBzdHlsZT1cImhlaWdodDogM3B4O2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiZy1tYWluXCIgc3R5bGU9XCJoZWlnaHQ6IDNweDtcIiA6c3R5bGU9XCJhY3RpdmVTdHlsZVwiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5ZyG54K5IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSByb3VuZGVkLWNpcmNsZSBiZy1tYWluLWhvdmVyXCIgc3R5bGU9XCJ3aWR0aDogMTVweDtoZWlnaHQ6IDE1cHg7XCIgOnN0eWxlPVwiYWN0aXZlRG90U3R5XCI+PC92aWV3PiBcclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGluamVjdDpbJ3YnXSxcclxuXHRcdHByb3BzOntcclxuXHRcdFx0Y3VycmVudFRpbWU6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LCBcclxuXHRcdFx0ZHVyYXRpb246e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR3aWR0aDogMCwvL+i/m+W6puadoeeahOaAu+WuveW6plxyXG5cdFx0XHRcdGFjdGl2ZVdpdGg6MCwvL+W9k+WJjeaSreaUvui/m+W6pueahOWuveW6plxyXG5cdFx0XHRcdG1vdmVTdGF0dXM6ZmFsc2UsLy/mi5bmi73nirbmgIFcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOntcclxuXHRcdFx0YWN0aXZlU3R5bGUoKXtcclxuXHRcdFx0XHRyZXR1cm4gYHdpZHRoOiR7dGhpcy5hY3RpdmVXaXRofXB4YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhY3RpdmVEb3RTdHkoKXtcclxuXHRcdFx0XHRyZXR1cm4gYGxlZnQ6JHt0aGlzLmFjdGl2ZVdpdGh9cHhgXHJcblx0XHRcdH0sXHJcblx0XHRcdGN1cnJlbnQoKXsvL+mAmui/h+i/m+W6puadoemVv+W6pu+8jOWPjeaOqOWHuuaXtumXtFxyXG5cdFx0XHRcdHJldHVybiB0aGlzLndpZHRoPT0wPzA6ICh0aGlzLmFjdGl2ZVdpdGgvdGhpcy53aWR0aCkgKiB0aGlzLmR1cmF0aW9uXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDp7XHJcblx0XHRcdGN1cnJlbnRUaW1lKG5ld3ZhbCxvbGR2YWwpe1xyXG5cdFx0XHRcdGlmKCF0aGlzLm1vdmVTdGF0dXMpeyAvL+ayoeacieWkhOWcqOaLluaLveeKtuaAge+8jOaJjeebkeWQrOaXtumXtFxyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmUoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnYud2luZG93V2lkdGgtNDQtNDQtODAtMTU7XHJcblx0XHRcdHRoaXMuYWN0aXZlKClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0YWN0aXZlKCl7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVXaXRoID0gdGhpcy5kdXJhdGlvbiA9PTAgPyAwOiAodGhpcy5jdXJyZW50VGltZS90aGlzLmR1cmF0aW9uKSAqIHRoaXMud2lkdGhcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hzdGFydChlKXtcclxuXHRcdFx0XHRpZih0aGlzLmR1cmF0aW9uID09PSAwKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLm1vdmVTdGF0dXMgPSB0cnVlOyAvL+W8gOWQr+aLluaLveeKtuaAgVxyXG5cdFx0XHRcdC8vZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YICjlvZPliY3op6bmkbjngrnot53nprvlsY/luZXlt6bovrnnmoTplb/luqYpXHJcblx0XHRcdFx0IHRoaXMuYWN0aXZlV2l0aD0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YLTQ0XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNobW92ZShlKXtcclxuXHRcdFx0XHRpZih0aGlzLmR1cmF0aW9uID09PSAwKSByZXR1cm5cclxuXHRcdFx0XHRsZXQgZCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWC00NFxyXG5cdFx0XHRcdGlmKGQ8PTApe1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVXaXRoID0gMFxyXG5cdFx0XHRcdH1lbHNlIGlmKGQ+PXRoaXMud2lkdGgpe1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVXaXRoID0gdGhpcy53aWR0aFxyXG5cdFx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuYWN0aXZlV2l0aCA9IGRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndXBkYXRlJyx0aGlzLmN1cnJlbnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoZW5kKGUpe1xyXG5cdFx0XHRcdGlmKHRoaXMuZHVyYXRpb24gPT09IDApIHJldHVyblxyXG5cdFx0XHRcdHRoaXMubW92ZVN0YXR1cyA9IGZhbHNlOyAvL+e7k+adn+aLluaLveeKtuaAgVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsdGhpcy5jdXJyZW50KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaGNhbmNlbChlKXsvL+a7keWKqOaJi+WKv+iiq+S4reaWreaXtu+8iOS+i+WmguaPkOekuueUtemHj+S4jei2s++8iVxyXG5cdFx0XHRcdHRoaXMudG91Y2hlbmQoZSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 23);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".video-bg-top": {
    "": {
      "backgroundImage": [
        "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))",
        0,
        0,
        1
      ]
    }
  },
  ".video-bg-bottom": {
    "": {
      "backgroundImage": [
        "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))",
        0,
        0,
        2
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);