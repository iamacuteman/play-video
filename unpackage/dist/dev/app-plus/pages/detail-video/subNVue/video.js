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
                    staticClass: [
                      "position-absolute",
                      "left-0",
                      "right-0",
                      "top-0",
                      "bottom-0"
                    ],
                    on: {
                      touchstart: _vm.touchStart,
                      touchmove: _vm.touchMove,
                      touchend: _vm.touchEnd
                    }
                  }),
                  _vm.fullScreenStatus &&
                  (_vm.showStatusBarStatus || _vm.lockScreenStatus)
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "align-center",
                            "justify-center"
                          ],
                          staticStyle: { width: "100px" }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "rounded",
                                "flex",
                                "align-center",
                                "justify-center"
                              ],
                              staticStyle: {
                                width: "60px",
                                height: "60px",
                                backgroundColor: "rgbc(0,0,0,0.4)"
                              },
                              on: { click: _vm.lockScreen }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["iconfont"],
                                  class: _vm.lockScreenStatus
                                    ? "text-main"
                                    : "text-white",
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("")]
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
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
                            "\n\t\t\tvideo-bg-top",
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
                    : _vm._e(),
                  _vm.showStatusBarStatus && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "bottom-0",
                            "left-0",
                            "right-0",
                            "video-bg-bottom"
                          ],
                          staticStyle: { height: "88px" }
                        },
                        [
                          _c("view", { staticStyle: { height: "88px" } }, [
                            _c(
                              "view",
                              {
                                staticClass: ["flex-1"],
                                staticStyle: {
                                  paddingLeft: "40px",
                                  paddingRight: "40px"
                                }
                              },
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
                                staticClass: [
                                  "flex",
                                  "align-stretch",
                                  "justify-between"
                                ],
                                staticStyle: {
                                  height: "44px",
                                  paddingLeft: "30px",
                                  paddingRight: "30px"
                                }
                              },
                              [
                                _c(
                                  "view",
                                  { staticClass: ["flex"] },
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
                                      {
                                        staticClass: [
                                          "flex",
                                          "align-center",
                                          "justify-center"
                                        ],
                                        staticStyle: { width: "80px" }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: [
                                              "font-sm",
                                              "text-white"
                                            ],
                                            appendAsTree: true,
                                            attrs: { append: "tree" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("formatTime")(
                                                  _vm.currentTime
                                                )
                                              ) +
                                                "/" +
                                                _vm._s(
                                                  _vm._f("formatTime")(
                                                    _vm.duration
                                                  )
                                                )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _c("f-icon-btn", {
                                      attrs: { icon: "\ue697", size: 22 }
                                    })
                                  ],
                                  1
                                ),
                                _c("view", { staticClass: ["flex"] }, [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("speed")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [_vm._v(_vm._s(_vm.rate))]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("quality")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatQuality")(
                                                _vm.quality
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("video")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [_vm._v("选集")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm.showDrawer
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "flex-column"
                          ],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.8)" }
                        },
                        [
                          _vm.drawerType === "speed"
                            ? _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "100px" }
                                },
                                _vm._l(_vm.rateList, function(item, index) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: [
                                        "flex-1",
                                        "flex",
                                        "align-center",
                                        "justify-center"
                                      ],
                                      on: {
                                        click: function($event) {
                                          _vm.changeRate(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class:
                                            item === _vm.rate
                                              ? "text-main"
                                              : "text-white",
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [_vm._v(_vm._s(item))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm.drawerType === "video"
                            ? _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "300px" }
                                },
                                [
                                  _c(
                                    "scroll-view",
                                    {
                                      staticClass: ["flex-1", "p-2"],
                                      attrs: { scrollY: "true" }
                                    },
                                    _vm._l(_vm.videoList, function(
                                      item,
                                      index
                                    ) {
                                      return _c(
                                        "view",
                                        {
                                          staticClass: [
                                            "border",
                                            "p-2",
                                            "flex",
                                            "rounded",
                                            "mb-2"
                                          ],
                                          on: {
                                            click: function($event) {
                                              _vm.changeVideo(item, index)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class:
                                                _vm.videoIndex === index
                                                  ? "text-main"
                                                  : "text-white",
                                              staticStyle: {
                                                fontSize: "14px",
                                                lines: "unset"
                                              },
                                              appendAsTree: true,
                                              attrs: { append: "tree" }
                                            },
                                            [_vm._v(_vm._s(item.title))]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            : _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "100px" }
                                },
                                _vm._l(_vm.qualityList, function(item, index) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: [
                                        "flex-1",
                                        "flex",
                                        "align-center",
                                        "justify-center"
                                      ],
                                      on: {
                                        click: function($event) {
                                          _vm.changeQuality(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class:
                                            item.value === _vm.quality
                                              ? "text-main"
                                              : "text-white",
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [_vm._v(_vm._s(item.name))]
                                      )
                                    ]
                                  )
                                }),
                                0
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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _fIconBtn = _interopRequireDefault(__webpack_require__(/*! ./components/f-icon-btn.vue */ 9));\nvar _fSlider = _interopRequireDefault(__webpack_require__(/*! ./components/f-slider.vue */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar d = weex.requireModule('dom');var videoCTX = null;var showToastTimer = null;var timer = null;var demoList = [{ index: 0, title: '优化空数据默认显示', list: [{ name: \"标清\", value: \"SD\", url: \"https://v-cdn.zjol.com.cn/280443.mp4\" }, { name: \"高清\", value: \"HD\", url: \"https://v-cdn.zjol.com.cn/276985.mp4\" }] }, { index: 1, title: '海马', list: [{ name: \"标清\", value: \"SD\", url: \"https://v-cdn.zjol.com.cn/276982.mp4\" }, { name: \"高清\", value: \"HD\", url: \"https://v-cdn.zjol.com.cn/276984.mp4\" }] }];var _default = { provide: function provide() {return { v: this };}, components: { fIconBtn: _fIconBtn.default, fSlider: _fSlider.default }, data: function data() {return { src: 'https://v-cdn.zjol.com.cn/280443.mp4', isplay: false, //是否播放\n      statusBarHeight: 0, currentTime: 0, //当前时间点\n      duration: 0, //视频总时长\n      windowHeight: 0, //屏幕高\n      windowWidth: 0, //屏幕宽\n      fullScreenStatus: false, //全屏状态,false(坚屏),true（全屏）\n      showToastStatus: false, //时间框显示状态\n      toast: { type: \"msg\", msg: \"提示\" }, showStatusBarStatus: true, //底部控制条的显示状态\n      oldTouchs: {}, //旧的触摸返回对象\n      oldValue: {}, dbCount: 0, //点击蒙版的次数\n      touchType: null, platform: '', //当前所在平台\n      showDrawer: false, //弹窗的显示隐藏状态\n      drawerType: \"speed\", //弹窗的类型（倍速、清晰度、选集）\n      rate: \"1.0\", //当前播放速度\n      rateList: ['2.0', '1.5', '1.25', '1.0', '0.8', '0.5'], //速度选择\n      videoIndex: 0, //当前播放的视频\n      videoList: [], //可选视频列表\n      quality: 'HD', //画质\n      lockScreenStatus: false //锁屏状态\n    };}, created: function created() {var res = uni.getSystemInfoSync();this.statusBarHeight = res.statusBarHeight;this.windowHeight = res.windowHeight; //屏幕高度\n    this.windowWidth = res.windowWidth; //屏幕宽度\n    this.platform = res.platform; // 引入图标\n    d.addRule('fontFace', { 'fontFamily': \"iconfont\", 'src': \"url('https://at.alicdn.com/t/font_1419176_mzo8rsjxi4c.ttf')\" });this.videoList = demoList;}, mounted: function mounted() {videoCTX = this.$refs.video;}, computed: { videoBox: function videoBox() {return this.fullScreenStatus ? \"width:\".concat(this.windowHeight, \"px;height:\").concat(this.windowWidth, \"px\") : \"width:750rpx;height:225px;\";}, modalStyle: function modalStyle() {var top = this.statusBarHeight + 44;return \"top:\".concat(top, \"px;bottom:44px;\");}, //视频画质数组\n    qualityList: function qualityList() {return this.videoList[this.videoIndex] ? this.videoList[this.videoIndex].list : [];} }, methods: { //锁屏或解除锁屏\n    lockScreen: function lockScreen() {this.lockScreenStatus = !this.lockScreenStatus;if (this.lockScreenStatus) {this.hideStatusBar();} else {this.showStatusBar();}}, //选择清晰度\n    changeQuality: function changeQuality(item) {videoCTX.stop();if (!item.url) {return uni.showToast({ title: '视频链接不存在', icon: 'none' });}this.src = item.url;this.quality = item.value;uni.showToast({ title: '清晰度:' + item.name, icon: 'none' });setTimeout(function () {videoCTX.play();}, 300);}, //选集\n    changeVideo: function changeVideo(item, index) {var _this = this;this.videoIndex = index;videoCTX.stop();var list = this.videoList[index].list;var i = list.findIndex(function (v) {return v.value === _this.quality;});if (i === -1) {//没找到高清\n        if (list.length > 0) {this.src = list[0].url;} else {return uni.showToast({ title: '视频链接不存在', icon: 'none' });}} else {//有高清\n        this.src = list[i].url;}uni.showToast({ title: '切换到:' + item.title, icon: 'none' });setTimeout(function () {videoCTX.seek(0); //进度归0\n        videoCTX.play();}, 300);this.showDrawer = false;}, //修改播放速度\n    changeRate: function changeRate(item) {this.rate = item;videoCTX.playbackRate(this.rate); //playbackRate是官方修改速度API\n      uni.showToast({ title: '当前速度修改为' + this.rate, icon: 'none' });this.showDrawer = false;}, openDrawer: function openDrawer(type) {\n      this.drawerType = type;\n      this.showDrawer = true;\n    },\n    //进入全屏、退出全屏\n    fullOrExitScreen: function fullOrExitScreen() {\n      if (this.fullScreenStatus) {\n        videoCTX.exitFullScreen(); //退出全屏\n      } else {\n        videoCTX.requestFullScreen();\n      }\n    },\n    //显示或隐藏控制条\n    showOrHideStatusBar: function showOrHideStatusBar() {\n      this.showStatusBarStatus ? this.hideStatusBar() : this.showStatusBar();\n    },\n    //显示控制条\n    showStatusBar: function showStatusBar() {var _this2 = this;\n      this.showStatusBarStatus = true;\n      timer = timer ? clearTimeout(timer) : null;\n      var timer = setTimeout(function () {\n        _this2.hideStatusBar();\n        timer = null;\n      }, 3000);\n    },\n    //隐藏控制条\n    hideStatusBar: function hideStatusBar() {\n      this.showStatusBarStatus = false;\n    },\n    back: function back() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    //播放和暂停\n    playOrPause: function playOrPause() {\n      this.showToast({\n        msg: this.isplay ? '暂停' : '播放',\n        autoClose: true });\n\n      if (this.isplay) {\n        videoCTX.pause();\n      } else {\n        this.showStatusBar();\n        videoCTX.play();\n      }\n    },\n    //全屏变化时\n    fullscreenchange: function fullscreenchange(e) {\n      this.fullScreenStatus = e.detail.fullScreen; //进入全屏时，把全屏状态保存下来\n    },\n    //监听时间进度\n    timeupdate: function timeupdate(e) {\n      if (!this.showToastStatus) {//时间框没出来时，才通过这里获得当前时间\n        this.currentTime = parseInt(e.detail.currentTime); //获得当前时间\n      }\n      this.duration = parseInt(e.detail.duration); //获得总时长\n    },\n    //进度条变化\n    sliderChange: function sliderChange(e) {//拖动进度条结束时\n      videoCTX.seek(e); //视频跳转到某个时间\n      this.showToastStatus = false;\n      videoCTX.play();\n    },\n    sliderUpdate: function sliderUpdate(e) {//拖动进度条过程中\n      this.showStatusBar();\n      videoCTX.pause();\n      this.showToastStatus = true;\n      this.currentTime = e;\n      this.showToast({\n        type: 'progress',\n        autoClose: false });\n\n\n    },\n\n    showToast: function showToast(options) {var _this3 = this;\n      this.toast.type = options.type || 'msg';\n      this.toast.msg = options.msg || '提示';\n      this.showToastStatus = true;\n\n      if (options.autoClose !== false) {//autoClose代表是否自动关闭提示框（拖动时不应该自动关闭）\n        if (showToastTimer) clearTimeout(showToastTimer);\n        showToastTimer = setTimeout(function () {\n          _this3.showToastStatus = false;\n          showToastTimer = null;\n        }, 500);\n      }\n    },\n    //开始触摸蒙版\n    touchStart: function touchStart(e) {\n      this.oldTouchs = e.changedTouches[0]; //旧坐标\n      this.oldValue = {\n        currentTime: this.currentTime //保存旧的时间\n      };\n    },\n    //在蒙版上移动\n    touchMove: function touchMove(e) {\n      if (this.lockScreenStatus) return; //如果处于锁屏状，直接不走下面\n      var newTouchs = e.changedTouches[0]; //新坐标\n      if (!this.touchType) {\n        this.touchType = Math.abs(newTouchs.pageX - this.oldTouchs.pageX) > 20 ? 'currentTime' :\n        null; //拖动距离大于20，就进入拖动进度条模式\n        if (this.fullScreenStatus && this.platform === 'ios') {//处于全屏状态\n          this.touchType = Math.abs(newTouchs.pageY - this.oldTouchs.pageY) > 20 ? 'currentTime' :\n          null; //拖动距离大于20，就进入拖动进度条模式\n        }\n        if (this.touchType === 'currentTime') {\n          videoCTX.pause();\n        }\n      } else if (this.touchType === 'currentTime') {//拖拽过程中\n        this.showToast({\n          type: 'progress',\n          autoClose: false });\n\n        this.showStatusBar();\n        var newCurrentTime = (newTouchs.pageX - this.oldTouchs.pageX) / 250 * this.duration * 2 + this.oldValue.\n        currentTime * 1;\n        if (this.fullScreenStatus && this.platform === 'ios') {\n          newCurrentTime = (newTouchs.pageY - this.oldTouchs.pageY) / 250 * this.duration * 2 + this.oldValue.\n          currentTime * 1;\n        }\n        newCurrentTime = newCurrentTime > this.duration ? this.duration : newCurrentTime;\n        newCurrentTime = newCurrentTime < 0 ? 0 : newCurrentTime;\n        this.currentTime = newCurrentTime;\n      }\n    },\n    //结束触摸蒙版\n    touchEnd: function touchEnd(e) {var _this4 = this;\n      if (this.lockScreenStatus) return; //如果处于锁屏状，直接不走下面\n      if (this.touchType === 'currentTime') {//处于拖动模式\n        videoCTX.seek(this.currentTime); //视频跳转到某个时间\n        videoCTX.play();\n\n      } else {//处于点击模式\n        if (this.dbCount === 1 || this.dbCount === 0) {\n          this.dbCount++;\n        }\n        if (this.dbCount > 0) {\n          setTimeout(function () {\n            if (_this4.dbCount === 1) {//单击\n              _this4.showOrHideStatusBar(); //隐藏进度条\n              _this4.showDrawer = false; //隐藏抽屉弹窗\n            }\n            if (_this4.dbCount === 2) {//双击\n              _this4.playOrPause();\n            }\n            _this4.dbCount = 0;\n          }, 250);\n        }\n      }\n      this.touchType = null; //拖拽完毕，重置状态\n      this.showToastStatus = false;\n    } },\n\n  filters: {\n    formatTime: function formatTime(result) {\n      var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n      var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result /\n      60 % 60);\n      var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n      return result = result > 3600 ? h + \":\" + m + \":\" + s : m + \":\" + s;\n    },\n    formatQuality: function formatQuality(val) {\n      var arr = {\n        SD: \"标清\",\n        HD: \"高清\",\n        FHD: \"超清\" };\n\n      return arr[val];\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErSkE7QUFDQSxnRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxBLGtDQUNBLG9CQUNBLDBCQUNBLGlCQUlBLGtCQUNBLFFBREEsRUFFQSxrQkFGQSxFQUdBLFNBQ0EsVUFEQSxFQUVBLFdBRkEsRUFHQSwyQ0FIQSxJQUtBLEVBQ0EsVUFEQSxFQUVBLFdBRkEsRUFHQSwyQ0FIQSxFQUxBLENBSEEsSUFlQSxFQUNBLFFBREEsRUFFQSxXQUZBLEVBR0EsU0FDQSxVQURBLEVBRUEsV0FGQSxFQUdBLDJDQUhBLElBS0EsRUFDQSxVQURBLEVBRUEsV0FGQSxFQUdBLDJDQUhBLEVBTEEsQ0FIQSxFQWZBLEUsZUErQkEsRUFDQSxPQURBLHFCQUNBLENBQ0EsU0FDQSxPQURBLEdBR0EsQ0FMQSxFQU1BLGNBQ0EsMkJBREEsRUFFQSx5QkFGQSxFQU5BLEVBVUEsSUFWQSxrQkFVQSxDQUNBLFNBQ0EsMkNBREEsRUFFQSxhQUZBLEVBRUE7QUFDQSx3QkFIQSxFQUlBLGNBSkEsRUFJQTtBQUNBLGlCQUxBLEVBS0E7QUFDQSxxQkFOQSxFQU1BO0FBQ0Esb0JBUEEsRUFPQTtBQUVBLDZCQVRBLEVBU0E7QUFFQSw0QkFYQSxFQVdBO0FBRUEsZUFDQSxXQURBLEVBRUEsU0FGQSxFQWJBLEVBa0JBLHlCQWxCQSxFQWtCQTtBQUVBLG1CQXBCQSxFQW9CQTtBQUNBLGtCQXJCQSxFQXNCQSxVQXRCQSxFQXNCQTtBQUNBLHFCQXZCQSxFQXdCQSxZQXhCQSxFQXdCQTtBQUVBLHVCQTFCQSxFQTBCQTtBQUNBLHlCQTNCQSxFQTJCQTtBQUNBLGlCQTVCQSxFQTRCQTtBQUNBLDJEQTdCQSxFQTZCQTtBQUVBLG1CQS9CQSxFQStCQTtBQUNBLG1CQWhDQSxFQWdDQTtBQUNBLG1CQWpDQSxFQWlDQTtBQUVBLDZCQW5DQSxDQW1DQTtBQW5DQSxNQXFDQSxDQWhEQSxFQWlEQSxPQWpEQSxxQkFpREEsQ0FDQSxrQ0FDQSwyQ0FDQSxxQ0FIQSxDQUdBO0FBQ0EsdUNBSkEsQ0FJQTtBQUNBLGlDQUxBLENBTUE7QUFDQSw0QkFDQSx3QkFEQSxFQUVBLG9FQUZBLElBS0EsMEJBRUEsQ0EvREEsRUFnRUEsT0FoRUEscUJBZ0VBLENBQ0EsNEJBQ0EsQ0FsRUEsRUFtRUEsWUFDQSxRQURBLHNCQUNBLENBQ0EsOElBRUEsQ0FKQSxFQUtBLFVBTEEsd0JBS0EsQ0FDQSxvQ0FDQSw2Q0FDQSxDQVJBLEVBU0E7QUFDQSxlQVZBLHlCQVVBLENBQ0EsbUZBQ0EsQ0FaQSxFQW5FQSxFQWlGQSxXQUNBO0FBQ0EsY0FGQSx3QkFFQSxDQUNBLCtDQUNBLDRCQUNBLHFCQUNBLENBRkEsTUFFQSxDQUNBLHFCQUNBLENBQ0EsQ0FUQSxFQVVBO0FBQ0EsaUJBWEEseUJBV0EsSUFYQSxFQVdBLENBQ0EsZ0JBQ0EsZ0JBQ0EsdUJBQ0EsZ0JBREEsRUFFQSxZQUZBLElBSUEsQ0FDQSxvQkFDQSwwQkFDQSxnQkFDQSx5QkFEQSxFQUVBLFlBRkEsSUFJQSx3QkFDQSxnQkFDQSxDQUZBLEVBRUEsR0FGQSxFQUdBLENBNUJBLEVBNkJBO0FBQ0EsZUE5QkEsdUJBOEJBLElBOUJBLEVBOEJBLEtBOUJBLEVBOEJBLGtCQUNBLHdCQUNBLGdCQUNBLHNDQUNBLHlFQUNBO0FBQ0EsOEJBQ0EsdUJBQ0EsQ0FGQSxNQUVBLENBQ0EsdUJBQ0EsZ0JBREEsRUFFQSxZQUZBLElBSUEsQ0FDQSxDQVRBLE1BU0E7QUFDQSwrQkFDQSxDQUVBLGdCQUNBLDBCQURBLEVBRUEsWUFGQSxJQUtBLHdCQUNBLGlCQURBLENBQ0E7QUFDQSx3QkFDQSxDQUhBLEVBR0EsR0FIQSxFQUtBLHdCQUVBLENBNURBLEVBNkRBO0FBQ0EsY0E5REEsc0JBOERBLElBOURBLEVBOERBLENBQ0EsaUJBQ0EsaUNBRkEsQ0FFQTtBQUNBLHNCQUNBLDRCQURBLEVBRUEsWUFGQSxJQUlBLHdCQUNBLENBdEVBLEVBdUVBLFVBdkVBLHNCQXVFQSxJQXZFQSxFQXVFQTtBQUNBO0FBQ0E7QUFDQSxLQTFFQTtBQTJFQTtBQUNBLG9CQTVFQSw4QkE0RUE7QUFDQTtBQUNBLGtDQURBLENBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FsRkE7QUFtRkE7QUFDQSx1QkFwRkEsaUNBb0ZBO0FBQ0E7QUFDQSxLQXRGQTtBQXVGQTtBQUNBLGlCQXhGQSwyQkF3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLElBSEE7QUFJQSxLQS9GQTtBQWdHQTtBQUNBLGlCQWpHQSwyQkFpR0E7QUFDQTtBQUNBLEtBbkdBO0FBb0dBLFFBcEdBLGtCQW9HQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0F4R0E7QUF5R0E7QUFDQSxlQTFHQSx5QkEwR0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsdUJBRkE7O0FBSUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckhBO0FBc0hBO0FBQ0Esb0JBdkhBLDRCQXVIQSxDQXZIQSxFQXVIQTtBQUNBLGtEQURBLENBQ0E7QUFDQSxLQXpIQTtBQTBIQTtBQUNBLGNBM0hBLHNCQTJIQSxDQTNIQSxFQTJIQTtBQUNBO0FBQ0EsMERBREEsQ0FDQTtBQUNBO0FBQ0Esa0RBSkEsQ0FJQTtBQUNBLEtBaElBO0FBaUlBO0FBQ0EsZ0JBbElBLHdCQWtJQSxDQWxJQSxFQWtJQTtBQUNBLHVCQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0SUE7QUF1SUEsZ0JBdklBLHdCQXVJQSxDQXZJQSxFQXVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLHdCQUZBOzs7QUFLQSxLQWpKQTs7QUFtSkEsYUFuSkEscUJBbUpBLE9BbkpBLEVBbUpBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLEVBR0EsR0FIQTtBQUlBO0FBQ0EsS0EvSkE7QUFnS0E7QUFDQSxjQWpLQSxzQkFpS0EsQ0FqS0EsRUFpS0E7QUFDQSwyQ0FEQSxDQUNBO0FBQ0E7QUFDQSxxQ0FEQSxDQUNBO0FBREE7QUFHQSxLQXRLQTtBQXVLQTtBQUNBLGFBeEtBLHFCQXdLQSxDQXhLQSxFQXdLQTtBQUNBLHdDQURBLENBQ0E7QUFDQSwwQ0FGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLFlBREEsQ0FEQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLGNBREEsQ0FEQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVZBLE1BVUE7QUFDQTtBQUNBLDBCQURBO0FBRUEsMEJBRkE7O0FBSUE7QUFDQTtBQUNBLG1CQURBLEdBQ0EsQ0FEQTtBQUVBO0FBQ0E7QUFDQSxxQkFEQSxHQUNBLENBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyTUE7QUFzTUE7QUFDQSxZQXZNQSxvQkF1TUEsQ0F2TUEsRUF1TUE7QUFDQSx3Q0FEQSxDQUNBO0FBQ0E7QUFDQSx3Q0FEQSxDQUNBO0FBQ0E7O0FBRUEsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBREEsQ0FDQTtBQUNBLHdDQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FUQSxFQVNBLEdBVEE7QUFVQTtBQUNBO0FBQ0EsNEJBdkJBLENBdUJBO0FBQ0E7QUFDQSxLQWhPQSxFQWpGQTs7QUFtVEE7QUFDQSxjQURBLHNCQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxRQURBLEdBQ0EsRUFEQTtBQUVBO0FBQ0E7QUFDQSxLQVBBO0FBUUEsaUJBUkEseUJBUUEsR0FSQSxFQVFBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGdCQUZBO0FBR0EsaUJBSEE7O0FBS0E7QUFDQSxLQWZBLEVBblRBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImJnLWRhcmtcIj5cclxuXHRcdDx2aWRlbyBpZD0ndmlkZW8nIHJlZj1cInZpZGVvXCIgOnNyYz1cInNyY1wiIHBvc3Rlcj0nL3N0YXRpYy9kZW1vLzYuanBnJyA6Y29udHJvbHM9XCJmYWxzZVwiXHJcblx0XHRcdDpzaG93LWNlbnRlci1wbGF5LWJ0bj0nZmFsc2UnIDpzaG93LWZ1bGxzY3JlZW4tYnRuPSdmYWxzZScgOnNob3ctcHJvZ3Jlc3M9J2ZhbHNlJ1xyXG5cdFx0XHQ6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9J2ZhbHNlJyBzdHlsZT1cIndpZHRoOiA3NTBycHg7aGVpZ2h0OiAyMjVweDtcIiBAZnVsbHNjcmVlbmNoYW5nZT0nZnVsbHNjcmVlbmNoYW5nZSdcclxuXHRcdFx0QHRpbWV1cGRhdGU9J3RpbWV1cGRhdGUnIEBwbGF5PSdpc3BsYXkgPSB0cnVlJyBAcGF1c2U9J2lzcGxheSA9IGZhbHNlJz5cclxuXHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiA6c3R5bGU9XCJ2aWRlb0JveFwiPlxyXG5cdFx0XHRcdDwhLS0g6JKZ54mIKOS7o+abv+inhumikee7hOS7tuaOpeaUtuinpuaRuOaIlueCueWHu+S6i+S7tikgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCB0b3AtMCBib3R0b20tMFwiIEB0b3VjaHN0YXJ0PSd0b3VjaFN0YXJ0J1xyXG5cdFx0XHRcdFx0QHRvdWNobW92ZT1cInRvdWNoTW92ZVwiIEB0b3VjaGVuZD1cInRvdWNoRW5kXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PCEtLSDkvqfovrkg6ZSB5bGP5Zu+5qCHLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImZ1bGxTY3JlZW5TdGF0dXMgJiYgKHNob3dTdGF0dXNCYXJTdGF0dXN8fGxvY2tTY3JlZW5TdGF0dXMpXCIgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJvdHRvbS0wIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDoxMDBweDtcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicm91bmRlZCBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIFxyXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDo2MHB4O2hlaWdodDogNjBweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JjKDAsMCwwLDAuNCk7XCJcclxuXHRcdFx0XHRcdEBjbGljaz1cImxvY2tTY3JlZW5cIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgOmNsYXNzPVwibG9ja1NjcmVlblN0YXR1cz8ndGV4dC1tYWluJzondGV4dC13aGl0ZSdcIj4mI3hlNjIwOzwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDmj5DnpLrmoYYgLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInNob3dUb2FzdFN0YXR1c1wiIGNsYXNzPVwicC0yIHJvdW5kZWRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0b2FzdC50eXBlID09PSAncHJvZ3Jlc3MnXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb250IHRleHQtd2hpdGVcIj57e2N1cnJlbnRUaW1lfGZvcm1hdFRpbWV9fS97e2R1cmF0aW9ufGZvcm1hdFRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0b2FzdC50eXBlID09PSAnbXNnJ1wiIGNsYXNzPVwiZm9udCB0ZXh0LXdoaXRlXCI+e3t0b2FzdC5tc2d9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdDwhLS0g5YWo5bGPIOaOp+WItuadoSAtLT5cclxuXHRcdFx0XHQ8IS0tIOmhtumDqCAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd1N0YXR1c0JhclN0YXR1cyAmJiBmdWxsU2NyZWVuU3RhdHVzXCIgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXIgXHJcblx0XHRcdFx0dmlkZW8tYmctdG9wICBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMFwiIHN0eWxlPVwiaGVpZ2h0OiA0NHB4O1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOeureWktCAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxmLWljb24tYnRuIDppY29uPVwiJ1xcdWU2MTInXCIgQGNsaWNrPSdmdWxsT3JFeGl0U2NyZWVuJz48L2YtaWNvbi1idG4+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDmoIfpopggLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIgcHgtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O2xpbmVzOiAxO1wiPuinhumikeagh+mimDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlNjEyJ1wiIEBjbGljaz0nZnVsbE9yRXhpdFNjcmVlbic+PC9mLWljb24tYnRuPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOW6lemDqOaOp+WItuadoSAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd1N0YXR1c0JhclN0YXR1cyAmJmZ1bGxTY3JlZW5TdGF0dXNcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCB2aWRlby1iZy1ib3R0b21cIiBzdHlsZT1cImhlaWdodDogODhweDtcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiA4OHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOi/m+W6puadoSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTFcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogNDBweDtwYWRkaW5nLXJpZ2h0OiA0MHB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxmLXNsaWRlciA6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpjdXJyZW50VGltZT1cImN1cnJlbnRUaW1lXCIgQGNoYW5nZT0nc2xpZGVyQ2hhbmdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0QHVwZGF0ZT1cInNsaWRlclVwZGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvZi1zbGlkZXI+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSDov5vluqbmnaEg5LiL6Z2i5oyJ6ZKuLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1zdHJldGNoIGp1c3RpZnktYmV0d2VlblwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9XCJoZWlnaHQ6IDQ0cHg7cGFkZGluZy1sZWZ0OiAzMHB4O3BhZGRpbmctcmlnaHQ6IDMwcHg7XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOaSreaUvuaMiemSriAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDxmLWljb24tYnRuIHYtaWY9XCIhaXNwbGF5XCIgOmljb249XCInXFx1ZTYzYSdcIiA6c2l6ZT1cIjIyXCIgQGNsaWNrPSdwbGF5T3JQYXVzZSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2YtaWNvbi1idG4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zi1pY29uLWJ0biB2LWVsc2UgOmljb249XCInXFx1ZTYwNSdcIiA6c2l6ZT1cIjIyXCIgQGNsaWNrPSdwbGF5T3JQYXVzZSc+PC9mLWljb24tYnRuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDml7bpl7QgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogODBweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvbnQtc20gdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSDlvLnluZXmjInpkq4gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlNjk3J1wiIDpzaXplPVwiMjJcIj48L2YtaWNvbi1idG4+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiIEBjbGljaz1cIm9wZW5EcmF3ZXIoJ3NwZWVkJylcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImhlaWdodDogNDRweDtwYWRkaW5nLWxlZnQ6IDE1cHg7cGFkZGluZy1yaWdodDogMTVweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7XCI+e3tyYXRlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCIgQGNsaWNrPVwib3BlbkRyYXdlcigncXVhbGl0eScpXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJoZWlnaHQ6IDQ0cHg7cGFkZGluZy1sZWZ0OiAxNXB4O3BhZGRpbmctcmlnaHQ6IDE1cHg7XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O1wiPnt7cXVhbGl0eXxmb3JtYXRRdWFsaXR5fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCIgQGNsaWNrPVwib3BlbkRyYXdlcigndmlkZW8nKVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwiaGVpZ2h0OiA0NHB4O3BhZGRpbmctbGVmdDogMTVweDtwYWRkaW5nLXJpZ2h0OiAxNXB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTVweDtcIj7pgInpm4Y8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8IS0tIOW8ueahhiAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd0RyYXdlclwiIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBmbGV4IGZsZXgtY29sdW1uXCJcclxuXHRcdFx0XHRcdHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1wiPlxyXG5cdFx0XHRcdFx0PCEtLSDpgJ/luqYgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiZHJhd2VyVHlwZSA9PT0gJ3NwZWVkJ1wiIGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2x1bW5cIiBzdHlsZT1cIndpZHRoOiAxMDBweDtcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiByYXRlTGlzdFwiXHJcblx0XHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCIgQGNsaWNrPVwiY2hhbmdlUmF0ZShpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cIml0ZW0gPT09IHJhdGU/J3RleHQtbWFpbic6J3RleHQtd2hpdGUnXCI+e3tpdGVtfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PCEtLSDpgInpm4YgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWVsc2UtaWY9XCJkcmF3ZXJUeXBlID09PSAndmlkZW8nXCIgY2xhc3M9XCJmbGV4LTEgZmxleCBmbGV4LWNvbHVtblwiIHN0eWxlPVwid2lkdGg6IDMwMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCIgY2xhc3M9XCJmbGV4LTEgcC0yXCIgPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9yZGVyIHAtMiBmbGV4IHJvdW5kZWQgbWItMlwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHZpZGVvTGlzdFwiXHJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwiY2hhbmdlVmlkZW8oaXRlbSxpbmRleClcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cInZpZGVvSW5kZXggPT09IGluZGV4Pyd0ZXh0LW1haW4nOid0ZXh0LXdoaXRlJ1wiIHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O2xpbmVzOiB1bnNldDtcIj57e2l0ZW0udGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwhLS0g5riF5pmw5bqmIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1lbHNlIGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2x1bW5cIiBzdHlsZT1cIndpZHRoOiAxMDBweDtcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBxdWFsaXR5TGlzdFwiXHJcblx0XHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCIgQGNsaWNrPVwiY2hhbmdlUXVhbGl0eShpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cIml0ZW0udmFsdWUgPT09IHF1YWxpdHk/J3RleHQtbWFpbic6J3RleHQtd2hpdGUnXCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWRlbz5cclxuXHJcblx0XHQ8IS0tIOmdnuWFqOWxjyDmjqfliLbmnaEgLS0+XHJcblx0XHQ8IS0tIOmhtumDqCjlt6bnrq3lpLQpLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwic2hvd1N0YXR1c0JhclN0YXR1cyAmJiAhZnVsbFNjcmVlblN0YXR1c1wiXHJcblx0XHRcdGNsYXNzPVwidmlkZW8tYmctdG9wIGJnLWRhcmsgcG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJcIiA6c3R5bGU9XCInaGVpZ2h0Oicrc3RhdHVzQmFySGVpZ2h0KydweCdcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiA0NHB4O1wiIGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlNjEyJ1wiIEBjbGljaz0nYmFjayc+PC9mLWljb24tYnRuPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOW6lemDqOaOp+WItuadoSAtLT5cclxuXHRcdDx2aWV3IHYtaWY9XCJzaG93U3RhdHVzQmFyU3RhdHVzICYmIWZ1bGxTY3JlZW5TdGF0dXNcIlxyXG5cdFx0XHRjbGFzcz1cInBvc2l0aW9uLWZpeGVkIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHZpZGVvLWJnLWJvdHRvbVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tc3RyZXRjaFwiIHN0eWxlPVwiNDRweFwiPlxyXG5cdFx0XHRcdDwhLS0g5pKt5pS+5oyJ6ZKuIC0tPlxyXG5cdFx0XHRcdDxmLWljb24tYnRuIHYtaWY9XCIhaXNwbGF5XCIgOmljb249XCInXFx1ZTYzYSdcIiA6c2l6ZT1cIjIyXCIgQGNsaWNrPSdwbGF5T3JQYXVzZSc+PC9mLWljb24tYnRuPlxyXG5cdFx0XHRcdDxmLWljb24tYnRuIHYtZWxzZSA6aWNvbj1cIidcXHVlNjA1J1wiIDpzaXplPVwiMjJcIiBAY2xpY2s9J3BsYXlPclBhdXNlJz48L2YtaWNvbi1idG4+XHJcblx0XHRcdFx0PCEtLSDov5vluqbmnaEgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTFcIj5cclxuXHRcdFx0XHRcdDxmLXNsaWRlciA6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpjdXJyZW50VGltZT1cImN1cnJlbnRUaW1lXCIgQGNoYW5nZT0nc2xpZGVyQ2hhbmdlJ1xyXG5cdFx0XHRcdFx0XHRAdXBkYXRlPVwic2xpZGVyVXBkYXRlXCI+PC9mLXNsaWRlcj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDml7bpl7QgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQtc20gdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlODAwJ1wiIDpzaXplPVwiMjJcIiBAY2xpY2s9XCJmdWxsT3JFeGl0U2NyZWVuXCI+PC9mLWljb24tYnRuPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRsZXQgdmlkZW9DVFggPSBudWxsO1xyXG5cdGxldCBzaG93VG9hc3RUaW1lciA9IG51bGw7XHJcblx0bGV0IHRpbWVyID0gbnVsbDtcclxuXHRpbXBvcnQgZkljb25CdG4gZnJvbSAnLi9jb21wb25lbnRzL2YtaWNvbi1idG4udnVlJztcclxuXHRpbXBvcnQgZlNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvZi1zbGlkZXIudnVlJztcclxuXHJcblx0Y29uc3QgZGVtb0xpc3QgPSBbe1xyXG5cdFx0XHRpbmRleDogMCxcclxuXHRcdFx0dGl0bGU6ICfkvJjljJbnqbrmlbDmja7pu5jorqTmmL7npLonLFxyXG5cdFx0XHRsaXN0OiBbe1xyXG5cdFx0XHRcdFx0bmFtZTogXCLmoIfmuIVcIixcclxuXHRcdFx0XHRcdHZhbHVlOiBcIlNEXCIsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly92LWNkbi56am9sLmNvbS5jbi8yODA0NDMubXA0XCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwi6auY5riFXCIsXHJcblx0XHRcdFx0XHR2YWx1ZTogXCJIRFwiLFxyXG5cdFx0XHRcdFx0dXJsOiBcImh0dHBzOi8vdi1jZG4uempvbC5jb20uY24vMjc2OTg1Lm1wNFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbmRleDogMSxcclxuXHRcdFx0dGl0bGU6ICfmtbfpqawnLFxyXG5cdFx0XHRsaXN0OiBbe1xyXG5cdFx0XHRcdFx0bmFtZTogXCLmoIfmuIVcIixcclxuXHRcdFx0XHRcdHZhbHVlOiBcIlNEXCIsXHJcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly92LWNkbi56am9sLmNvbS5jbi8yNzY5ODIubXA0XCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6IFwi6auY5riFXCIsXHJcblx0XHRcdFx0XHR2YWx1ZTogXCJIRFwiLFxyXG5cdFx0XHRcdFx0dXJsOiBcImh0dHBzOi8vdi1jZG4uempvbC5jb20uY24vMjc2OTg0Lm1wNFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0XVxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3ZpZGUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0djogdGhpc1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRmSWNvbkJ0bixcclxuXHRcdFx0ZlNsaWRlclxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3JjOiAnaHR0cHM6Ly92LWNkbi56am9sLmNvbS5jbi8yODA0NDMubXA0JyxcclxuXHRcdFx0XHRpc3BsYXk6IGZhbHNlLCAvL+aYr+WQpuaSreaUvlxyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCxcclxuXHRcdFx0XHRjdXJyZW50VGltZTogMCwgLy/lvZPliY3ml7bpl7TngrlcclxuXHRcdFx0XHRkdXJhdGlvbjogMCwgLy/op4bpopHmgLvml7bplb9cclxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IDAsIC8v5bGP5bmV6auYXHJcblx0XHRcdFx0d2luZG93V2lkdGg6IDAsIC8v5bGP5bmV5a69XHJcblxyXG5cdFx0XHRcdGZ1bGxTY3JlZW5TdGF0dXM6IGZhbHNlLCAvL+WFqOWxj+eKtuaAgSxmYWxzZSjlnZrlsY8pLHRydWXvvIjlhajlsY/vvIlcclxuXHJcblx0XHRcdFx0c2hvd1RvYXN0U3RhdHVzOiBmYWxzZSwgLy/ml7bpl7TmoYbmmL7npLrnirbmgIFcclxuXHJcblx0XHRcdFx0dG9hc3Q6IHtcclxuXHRcdFx0XHRcdHR5cGU6IFwibXNnXCIsXHJcblx0XHRcdFx0XHRtc2c6IFwi5o+Q56S6XCJcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRzaG93U3RhdHVzQmFyU3RhdHVzOiB0cnVlLCAvL+W6lemDqOaOp+WItuadoeeahOaYvuekuueKtuaAgVxyXG5cclxuXHRcdFx0XHRvbGRUb3VjaHM6IHt9LCAvL+aXp+eahOinpuaRuOi/lOWbnuWvueixoVxyXG5cdFx0XHRcdG9sZFZhbHVlOiB7fSxcclxuXHRcdFx0XHRkYkNvdW50OiAwLCAvL+eCueWHu+iSmeeJiOeahOasoeaVsFxyXG5cdFx0XHRcdHRvdWNoVHlwZTogbnVsbCxcclxuXHRcdFx0XHRwbGF0Zm9ybTogJycsIC8v5b2T5YmN5omA5Zyo5bmz5Y+wXHJcblxyXG5cdFx0XHRcdHNob3dEcmF3ZXI6IGZhbHNlLCAvL+W8ueeql+eahOaYvuekuumakOiXj+eKtuaAgVxyXG5cdFx0XHRcdGRyYXdlclR5cGU6IFwic3BlZWRcIiwgLy/lvLnnqpfnmoTnsbvlnovvvIjlgI3pgJ/jgIHmuIXmmbDluqbjgIHpgInpm4bvvIlcclxuXHRcdFx0XHRyYXRlOiBcIjEuMFwiLCAvL+W9k+WJjeaSreaUvumAn+W6plxyXG5cdFx0XHRcdHJhdGVMaXN0OiBbJzIuMCcsICcxLjUnLCAnMS4yNScsICcxLjAnLCAnMC44JywgJzAuNSddLCAvL+mAn+W6pumAieaLqVxyXG5cclxuXHRcdFx0XHR2aWRlb0luZGV4OiAwLCAvL+W9k+WJjeaSreaUvueahOinhumikVxyXG5cdFx0XHRcdHZpZGVvTGlzdDogW10sLy/lj6/pgInop4bpopHliJfooahcclxuXHRcdFx0XHRxdWFsaXR5OidIRCcsLy/nlLvotKhcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsb2NrU2NyZWVuU3RhdHVzOmZhbHNlLC8v6ZSB5bGP54q25oCBXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRsZXQgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcmVzLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0dGhpcy53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0IC8v5bGP5bmV6auY5bqmXHJcblx0XHRcdHRoaXMud2luZG93V2lkdGggPSByZXMud2luZG93V2lkdGggLy/lsY/luZXlrr3luqZcclxuXHRcdFx0dGhpcy5wbGF0Zm9ybSA9IHJlcy5wbGF0Zm9ybTtcclxuXHRcdFx0Ly8g5byV5YWl5Zu+5qCHXHJcblx0XHRcdGQuYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcblx0XHRcdFx0J2ZvbnRGYW1pbHknOiBcImljb25mb250XCIsXHJcblx0XHRcdFx0J3NyYyc6IFwidXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzE0MTkxNzZfbXpvOHJzanhpNGMudHRmJylcIlxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMudmlkZW9MaXN0ID0gZGVtb0xpc3Q7XHJcblxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHZpZGVvQ1RYID0gdGhpcy4kcmVmcy52aWRlbztcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHR2aWRlb0JveCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdWxsU2NyZWVuU3RhdHVzID8gYHdpZHRoOiR7dGhpcy53aW5kb3dIZWlnaHR9cHg7aGVpZ2h0OiR7dGhpcy53aW5kb3dXaWR0aH1weGAgOlxyXG5cdFx0XHRcdFx0YHdpZHRoOjc1MHJweDtoZWlnaHQ6MjI1cHg7YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb2RhbFN0eWxlKCkge1xyXG5cdFx0XHRcdGxldCB0b3AgPSB0aGlzLnN0YXR1c0JhckhlaWdodCArIDQ0XHJcblx0XHRcdFx0cmV0dXJuIGB0b3A6JHt0b3B9cHg7Ym90dG9tOjQ0cHg7YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+inhumikeeUu+i0qOaVsOe7hFxyXG5cdFx0XHRxdWFsaXR5TGlzdCgpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdP3RoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF0ubGlzdDpbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvL+mUgeWxj+aIluino+mZpOmUgeWxj1xyXG5cdFx0XHRsb2NrU2NyZWVuKCl7XHJcblx0XHRcdFx0dGhpcy5sb2NrU2NyZWVuU3RhdHVzID0gIXRoaXMubG9ja1NjcmVlblN0YXR1cztcclxuXHRcdFx0XHRpZih0aGlzLmxvY2tTY3JlZW5TdGF0dXMpe1xyXG5cdFx0XHRcdFx0dGhpcy5oaWRlU3RhdHVzQmFyKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+mAieaLqea4heaZsOW6plxyXG5cdFx0XHRjaGFuZ2VRdWFsaXR5KGl0ZW0pe1xyXG5cdFx0XHRcdHZpZGVvQ1RYLnN0b3AoKTtcclxuXHRcdFx0XHRpZighaXRlbS51cmwpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon6KeG6aKR6ZO+5o6l5LiN5a2Y5ZyoJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc3JjID0gaXRlbS51cmw7XHJcblx0XHRcdFx0dGhpcy5xdWFsaXR5ID0gaXRlbS52YWx1ZTtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOifmuIXmmbDluqY6JytpdGVtLm5hbWUsXHJcblx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0dmlkZW9DVFgucGxheSgpXHJcblx0XHRcdFx0fSwzMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6YCJ6ZuGXHJcblx0XHRcdGNoYW5nZVZpZGVvKGl0ZW0saW5kZXgpe1xyXG5cdFx0XHRcdHRoaXMudmlkZW9JbmRleCA9IGluZGV4O1xyXG5cdFx0XHRcdHZpZGVvQ1RYLnN0b3AoKTtcclxuXHRcdFx0XHRsZXQgbGlzdCA9IHRoaXMudmlkZW9MaXN0W2luZGV4XS5saXN0O1xyXG5cdFx0XHRcdGxldCBpID0gbGlzdC5maW5kSW5kZXgodj0+di52YWx1ZSA9PT0gdGhpcy5xdWFsaXR5KTtcclxuXHRcdFx0XHRpZihpID09PSAtMSl7Ly/msqHmib7liLDpq5jmuIVcclxuXHRcdFx0XHRcdGlmKGxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNyYyA9IGxpc3RbMF0udXJsXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOifop4bpopHpk77mjqXkuI3lrZjlnKgnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2V7Ly/mnInpq5jmuIVcclxuXHRcdFx0XHRcdHRoaXMuc3JjID0gbGlzdFtpXS51cmw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6J+WIh+aNouWIsDonK2l0ZW0udGl0bGUsXHJcblx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0dmlkZW9DVFguc2VlaygwKS8v6L+b5bqm5b2SMFxyXG5cdFx0XHRcdFx0dmlkZW9DVFgucGxheSgpXHJcblx0XHRcdFx0fSwzMDApXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5zaG93RHJhd2VyID0gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5L+u5pS55pKt5pS+6YCf5bqmXHJcblx0XHRcdGNoYW5nZVJhdGUoaXRlbSkge1xyXG5cdFx0XHRcdHRoaXMucmF0ZSA9IGl0ZW07XHJcblx0XHRcdFx0dmlkZW9DVFgucGxheWJhY2tSYXRlKHRoaXMucmF0ZSk7IC8vcGxheWJhY2tSYXRl5piv5a6Y5pa55L+u5pS56YCf5bqmQVBJXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+W9k+WJjemAn+W6puS/ruaUueS4uicgKyB0aGlzLnJhdGUsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMuc2hvd0RyYXdlciA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvcGVuRHJhd2VyKHR5cGUpIHtcclxuXHRcdFx0XHR0aGlzLmRyYXdlclR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0RyYXdlciA9IHRydWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6L+b5YWl5YWo5bGP44CB6YCA5Ye65YWo5bGPXHJcblx0XHRcdGZ1bGxPckV4aXRTY3JlZW4oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZnVsbFNjcmVlblN0YXR1cykge1xyXG5cdFx0XHRcdFx0dmlkZW9DVFguZXhpdEZ1bGxTY3JlZW4oKSAvL+mAgOWHuuWFqOWxj1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2aWRlb0NUWC5yZXF1ZXN0RnVsbFNjcmVlbigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+aYvuekuuaIlumakOiXj+aOp+WItuadoVxyXG5cdFx0XHRzaG93T3JIaWRlU3RhdHVzQmFyKCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhclN0YXR1cyA/IHRoaXMuaGlkZVN0YXR1c0JhcigpIDogdGhpcy5zaG93U3RhdHVzQmFyKClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/mmL7npLrmjqfliLbmnaFcclxuXHRcdFx0c2hvd1N0YXR1c0JhcigpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXJTdGF0dXMgPSB0cnVlO1xyXG5cdFx0XHRcdHRpbWVyID0gdGltZXIgPyBjbGVhclRpbWVvdXQodGltZXIpIDogbnVsbDtcclxuXHRcdFx0XHRsZXQgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaGlkZVN0YXR1c0JhcigpXHJcblx0XHRcdFx0XHR0aW1lciA9IG51bGw7XHJcblx0XHRcdFx0fSwgMzAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/pmpDol4/mjqfliLbmnaFcclxuXHRcdFx0aGlkZVN0YXR1c0JhcigpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXJTdGF0dXMgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFjaygpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5pKt5pS+5ZKM5pqC5YGcXHJcblx0XHRcdHBsYXlPclBhdXNlKCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdG1zZzogdGhpcy5pc3BsYXkgPyAn5pqC5YGcJyA6ICfmkq3mlL4nLFxyXG5cdFx0XHRcdFx0YXV0b0Nsb3NlOiB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZiAodGhpcy5pc3BsYXkpIHtcclxuXHRcdFx0XHRcdHZpZGVvQ1RYLnBhdXNlKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyKClcclxuXHRcdFx0XHRcdHZpZGVvQ1RYLnBsYXkoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/lhajlsY/lj5jljJbml7ZcclxuXHRcdFx0ZnVsbHNjcmVlbmNoYW5nZShlKSB7XHJcblx0XHRcdFx0dGhpcy5mdWxsU2NyZWVuU3RhdHVzID0gZS5kZXRhaWwuZnVsbFNjcmVlbiAvL+i/m+WFpeWFqOWxj+aXtu+8jOaKiuWFqOWxj+eKtuaAgeS/neWtmOS4i+adpVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+ebkeWQrOaXtumXtOi/m+W6plxyXG5cdFx0XHR0aW1ldXBkYXRlKGUpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuc2hvd1RvYXN0U3RhdHVzKSB7IC8v5pe26Ze05qGG5rKh5Ye65p2l5pe277yM5omN6YCa6L+H6L+Z6YeM6I635b6X5b2T5YmN5pe26Ze0XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gcGFyc2VJbnQoZS5kZXRhaWwuY3VycmVudFRpbWUpOyAvL+iOt+W+l+W9k+WJjeaXtumXtFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gcGFyc2VJbnQoZS5kZXRhaWwuZHVyYXRpb24pOyAvL+iOt+W+l+aAu+aXtumVv1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+i/m+W6puadoeWPmOWMllxyXG5cdFx0XHRzbGlkZXJDaGFuZ2UoZSkgeyAvL+aLluWKqOi/m+W6puadoee7k+adn+aXtlxyXG5cdFx0XHRcdHZpZGVvQ1RYLnNlZWsoZSkgLy/op4bpopHot7PovazliLDmn5DkuKrml7bpl7RcclxuXHRcdFx0XHR0aGlzLnNob3dUb2FzdFN0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHRcdHZpZGVvQ1RYLnBsYXkoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzbGlkZXJVcGRhdGUoZSkgeyAvL+aLluWKqOi/m+W6puadoei/h+eoi+S4rVxyXG5cdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKTtcclxuXHRcdFx0XHR0aGlzLnNob3dUb2FzdFN0YXR1cyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IGU7XHJcblx0XHRcdFx0dGhpcy5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dHlwZTogJ3Byb2dyZXNzJyxcclxuXHRcdFx0XHRcdGF1dG9DbG9zZTogZmFsc2VcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHNob3dUb2FzdChvcHRpb25zKSB7XHJcblx0XHRcdFx0dGhpcy50b2FzdC50eXBlID0gb3B0aW9ucy50eXBlIHx8ICdtc2cnXHJcblx0XHRcdFx0dGhpcy50b2FzdC5tc2cgPSBvcHRpb25zLm1zZyB8fCAn5o+Q56S6J1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0U3RhdHVzID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0aWYgKG9wdGlvbnMuYXV0b0Nsb3NlICE9PSBmYWxzZSkgeyAvL2F1dG9DbG9zZeS7o+ihqOaYr+WQpuiHquWKqOWFs+mXreaPkOekuuahhu+8iOaLluWKqOaXtuS4jeW6lOivpeiHquWKqOWFs+mXre+8iVxyXG5cdFx0XHRcdFx0aWYgKHNob3dUb2FzdFRpbWVyKSBjbGVhclRpbWVvdXQoc2hvd1RvYXN0VGltZXIpXHJcblx0XHRcdFx0XHRzaG93VG9hc3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdFN0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRzaG93VG9hc3RUaW1lciA9IG51bGxcclxuXHRcdFx0XHRcdH0sIDUwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5byA5aeL6Kem5pG46JKZ54mIXHJcblx0XHRcdHRvdWNoU3RhcnQoZSkge1xyXG5cdFx0XHRcdHRoaXMub2xkVG91Y2hzID0gZS5jaGFuZ2VkVG91Y2hlc1swXTsgLy/ml6flnZDmoIdcclxuXHRcdFx0XHR0aGlzLm9sZFZhbHVlID0ge1xyXG5cdFx0XHRcdFx0Y3VycmVudFRpbWU6IHRoaXMuY3VycmVudFRpbWUgLy/kv53lrZjml6fnmoTml7bpl7RcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5Zyo6JKZ54mI5LiK56e75YqoXHJcblx0XHRcdHRvdWNoTW92ZShlKSB7XHJcblx0XHRcdFx0aWYodGhpcy5sb2NrU2NyZWVuU3RhdHVzKSByZXR1cm4gLy/lpoLmnpzlpITkuo7plIHlsY/nirbvvIznm7TmjqXkuI3otbDkuIvpnaJcclxuXHRcdFx0XHRsZXQgbmV3VG91Y2hzID0gZS5jaGFuZ2VkVG91Y2hlc1swXTsgLy/mlrDlnZDmoIdcclxuXHRcdFx0XHRpZiAoIXRoaXMudG91Y2hUeXBlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9IE1hdGguYWJzKG5ld1RvdWNocy5wYWdlWCAtIHRoaXMub2xkVG91Y2hzLnBhZ2VYKSA+IDIwID8gJ2N1cnJlbnRUaW1lJyA6XHJcblx0XHRcdFx0XHRcdG51bGwgLy/mi5bliqjot53nprvlpKfkuo4yMO+8jOWwsei/m+WFpeaLluWKqOi/m+W6puadoeaooeW8j1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZnVsbFNjcmVlblN0YXR1cyAmJiB0aGlzLnBsYXRmb3JtID09PSAnaW9zJykgeyAvL+WkhOS6juWFqOWxj+eKtuaAgVxyXG5cdFx0XHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9IE1hdGguYWJzKG5ld1RvdWNocy5wYWdlWSAtIHRoaXMub2xkVG91Y2hzLnBhZ2VZKSA+IDIwID8gJ2N1cnJlbnRUaW1lJyA6XHJcblx0XHRcdFx0XHRcdFx0bnVsbCAvL+aLluWKqOi3neemu+Wkp+S6jjIw77yM5bCx6L+b5YWl5ouW5Yqo6L+b5bqm5p2h5qih5byPXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy50b3VjaFR5cGUgPT09ICdjdXJyZW50VGltZScpIHtcclxuXHRcdFx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50b3VjaFR5cGUgPT09ICdjdXJyZW50VGltZScpIHsgLy/mi5bmi73ov4fnqIvkuK1cclxuXHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3Byb2dyZXNzJyxcclxuXHRcdFx0XHRcdFx0YXV0b0Nsb3NlOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdFx0XHRsZXQgbmV3Q3VycmVudFRpbWUgPSAobmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVgpIC8gMjUwICogdGhpcy5kdXJhdGlvbiAqIDIgKyB0aGlzLm9sZFZhbHVlXHJcblx0XHRcdFx0XHRcdC5jdXJyZW50VGltZSAqIDE7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5mdWxsU2NyZWVuU3RhdHVzICYmIHRoaXMucGxhdGZvcm0gPT09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHRcdG5ld0N1cnJlbnRUaW1lID0gKG5ld1RvdWNocy5wYWdlWSAtIHRoaXMub2xkVG91Y2hzLnBhZ2VZKSAvIDI1MCAqIHRoaXMuZHVyYXRpb24gKiAyICsgdGhpcy5vbGRWYWx1ZVxyXG5cdFx0XHRcdFx0XHRcdC5jdXJyZW50VGltZSAqIDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRuZXdDdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lID4gdGhpcy5kdXJhdGlvbiA/IHRoaXMuZHVyYXRpb24gOiBuZXdDdXJyZW50VGltZTtcclxuXHRcdFx0XHRcdG5ld0N1cnJlbnRUaW1lID0gbmV3Q3VycmVudFRpbWUgPCAwID8gMCA6IG5ld0N1cnJlbnRUaW1lO1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/nu5PmnZ/op6bmkbjokpnniYhcclxuXHRcdFx0dG91Y2hFbmQoZSkge1xyXG5cdFx0XHRcdGlmKHRoaXMubG9ja1NjcmVlblN0YXR1cykgcmV0dXJuIC8v5aaC5p6c5aSE5LqO6ZSB5bGP54q277yM55u05o6l5LiN6LWw5LiL6Z2iXHJcblx0XHRcdFx0aWYgKHRoaXMudG91Y2hUeXBlID09PSAnY3VycmVudFRpbWUnKSB7IC8v5aSE5LqO5ouW5Yqo5qih5byPXHJcblx0XHRcdFx0XHR2aWRlb0NUWC5zZWVrKHRoaXMuY3VycmVudFRpbWUpIC8v6KeG6aKR6Lez6L2s5Yiw5p+Q5Liq5pe26Ze0XHJcblx0XHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHJcblx0XHRcdFx0fSBlbHNlIHsgLy/lpITkuo7ngrnlh7vmqKHlvI9cclxuXHRcdFx0XHRcdGlmICh0aGlzLmRiQ291bnQgPT09IDEgfHwgdGhpcy5kYkNvdW50ID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGJDb3VudCsrXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYkNvdW50ID4gMCkge1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kYkNvdW50ID09PSAxKSB7IC8v5Y2V5Ye7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dPckhpZGVTdGF0dXNCYXIoKSAvL+makOiXj+i/m+W6puadoVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93RHJhd2VyID0gZmFsc2U7IC8v6ZqQ6JeP5oq95bGJ5by556qXXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmRiQ291bnQgPT09IDIpIHsgLy/lj4zlh7tcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheU9yUGF1c2UoKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRiQ291bnQgPSAwO1xyXG5cdFx0XHRcdFx0XHR9LCAyNTApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gbnVsbDsgLy/mi5bmi73lrozmr5XvvIzph43nva7nirbmgIFcclxuXHRcdFx0XHR0aGlzLnNob3dUb2FzdFN0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZmlsdGVyczoge1xyXG5cdFx0XHRmb3JtYXRUaW1lKHJlc3VsdCkge1xyXG5cdFx0XHRcdHZhciBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA6IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCk7XHJcblx0XHRcdFx0dmFyIG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAvXHJcblx0XHRcdFx0XHQ2MCAlIDYwKSk7XHJcblx0XHRcdFx0dmFyIHMgPSBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpIDwgMTAgPyAnMCcgKyBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpIDogTWF0aC5mbG9vcigocmVzdWx0ICUgNjApKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID0gcmVzdWx0ID4gMzYwMCA/IChoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzKSA6IG0gKyBcIjpcIiArIHM7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm1hdFF1YWxpdHkodmFsKSB7XHJcblx0XHRcdFx0bGV0IGFyciA9IHtcclxuXHRcdFx0XHRcdFNEOiBcIuagh+a4hVwiLFxyXG5cdFx0XHRcdFx0SEQ6IFwi6auY5riFXCIsXHJcblx0XHRcdFx0XHRGSEQ6IFwi6LaF5riFXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGFyclt2YWxdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQvKiDmuJDlj5joibIgKi9cclxuXHQudmlkZW8tYmctdG9wIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC41KSk7XHJcblx0fVxyXG5cclxuXHQudmlkZW8tYmctYm90dG9tIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC41KSk7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  inject: ['v'],\n  props: {\n    currentTime: {\n      type: Number,\n      default: 0 },\n\n    duration: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      width: 0, //进度条的总宽度\n      activeWith: 0, //当前播放进度的宽度\n      moveStatus: false, //拖拽状态\n      left: 0 };\n\n  },\n  computed: {\n    activeStyle: function activeStyle() {\n      return \"width:\".concat(this.activeWith, \"px\");\n    },\n    activeDotSty: function activeDotSty() {\n      return \"left:\".concat(this.activeWith, \"px\");\n    },\n    current: function current() {//通过进度条长度，反推出时间\n      return this.width == 0 ? 0 : this.activeWith / this.width * this.duration;\n    } },\n\n  watch: {\n    currentTime: function currentTime(newval, oldval) {\n      if (!this.moveStatus) {//没有处在拖拽状态，才监听时间\n        this.active();\n      }\n    } },\n\n  created: function created() {\n    if (!this.v.fullScreenStatus) {//坚屏状态\n      this.width = this.v.windowWidth - 44 - 44 - 80 - 15;\n      this.left = 44;\n    } else {//横屏状态\n      this.width = this.v.windowHeight - 60 - 15;\n      this.left = 30;\n    }\n    this.active();\n  },\n  methods: {\n    active: function active() {\n      this.activeWith = this.duration == 0 ? 0 : this.currentTime / this.duration * this.width;\n    },\n    touchstart: function touchstart(e) {\n      if (this.duration === 0) return;\n      this.moveStatus = true; //开启拖拽状态\n      //e.changedTouches[0].screenX (当前触摸点距离屏幕左边的长度)\n      this.activeWith = e.changedTouches[0].screenX - this.left;\n    },\n    touchmove: function touchmove(e) {\n      if (this.duration === 0) return;\n      var d = e.changedTouches[0].screenX - this.left;\n      if (d <= 0) {\n        this.activeWith = 0;\n      } else if (d >= this.width) {\n        this.activeWith = this.width;\n      } else {\n        this.activeWith = d;\n      }\n      this.$emit('update', this.current);\n    },\n    touchend: function touchend(e) {\n      if (this.duration === 0) return;\n      this.moveStatus = false; //结束拖拽状态\n      this.$emit('change', this.current);\n    },\n    touchcancel: function touchcancel(e) {//滑动手势被中断时（例如提示电量不足）\n      this.touchend(e);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLXNsaWRlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBLGVBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQUxBLEVBRkE7OztBQVlBLE1BWkEsa0JBWUE7QUFDQTtBQUNBLGNBREEsRUFDQTtBQUNBLG1CQUZBLEVBRUE7QUFDQSx1QkFIQSxFQUdBO0FBQ0EsYUFKQTs7QUFNQSxHQW5CQTtBQW9CQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxnQkFKQSwwQkFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLFdBUEEscUJBT0E7QUFDQTtBQUNBLEtBVEEsRUFwQkE7O0FBK0JBO0FBQ0EsZUFEQSx1QkFDQSxNQURBLEVBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQSxFQS9CQTs7QUFzQ0EsU0F0Q0EscUJBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQS9DQTtBQWdEQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxjQUpBLHNCQUlBLENBSkEsRUFJQTtBQUNBO0FBQ0EsNkJBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUEsYUFWQSxxQkFVQSxDQVZBLEVBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsWUF0QkEsb0JBc0JBLENBdEJBLEVBc0JBO0FBQ0E7QUFDQSw4QkFGQSxDQUVBO0FBQ0E7QUFDQSxLQTFCQTtBQTJCQSxlQTNCQSx1QkEyQkEsQ0EzQkEsRUEyQkE7QUFDQTtBQUNBLEtBN0JBLEVBaERBLEUiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCIgYWxpZ24tY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIGZsZXhcIiBzdHlsZT1cImhlaWdodDogNDRweDtcIlxyXG5cdEB0b3VjaHN0YXJ0ID0gJ3RvdWNoc3RhcnQnIEB0b3VjaG1vdmUgPSAndG91Y2htb3ZlJyBAdG91Y2hlbmQ9J3RvdWNoZW5kJyBAdG91Y2hjYW5jZWwgPSAndG91Y2hjYW5jZWwnXHJcblx0PlxyXG5cdFx0PCEtLSDnur/mnaEgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSByb3VuZGVkXCIgc3R5bGU9XCJoZWlnaHQ6IDNweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmctbWFpblwiIHN0eWxlPVwiaGVpZ2h0OiAzcHg7XCIgOnN0eWxlPVwiYWN0aXZlU3R5bGVcIj48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOWchueCuSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgcm91bmRlZC1jaXJjbGUgYmctbWFpbi1ob3ZlclwiIHN0eWxlPVwid2lkdGg6IDE1cHg7aGVpZ2h0OiAxNXB4O1wiIDpzdHlsZT1cImFjdGl2ZURvdFN0eVwiPjwvdmlldz4gXHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRpbmplY3Q6Wyd2J10sXHJcblx0XHRwcm9wczp7XHJcblx0XHRcdGN1cnJlbnRUaW1lOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSwgXHJcblx0XHRcdGR1cmF0aW9uOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0d2lkdGg6IDAsLy/ov5vluqbmnaHnmoTmgLvlrr3luqZcclxuXHRcdFx0XHRhY3RpdmVXaXRoOjAsLy/lvZPliY3mkq3mlL7ov5vluqbnmoTlrr3luqZcclxuXHRcdFx0XHRtb3ZlU3RhdHVzOmZhbHNlLC8v5ouW5ou954q25oCBXHJcblx0XHRcdFx0bGVmdDowXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDp7XHJcblx0XHRcdGFjdGl2ZVN0eWxlKCl7XHJcblx0XHRcdFx0cmV0dXJuIGB3aWR0aDoke3RoaXMuYWN0aXZlV2l0aH1weGBcclxuXHRcdFx0fSxcclxuXHRcdFx0YWN0aXZlRG90U3R5KCl7XHJcblx0XHRcdFx0cmV0dXJuIGBsZWZ0OiR7dGhpcy5hY3RpdmVXaXRofXB4YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50KCl7Ly/pgJrov4fov5vluqbmnaHplb/luqbvvIzlj43mjqjlh7rml7bpl7RcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy53aWR0aD09MD8wOiAodGhpcy5hY3RpdmVXaXRoL3RoaXMud2lkdGgpICogdGhpcy5kdXJhdGlvblxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6e1xyXG5cdFx0XHRjdXJyZW50VGltZShuZXd2YWwsb2xkdmFsKXtcclxuXHRcdFx0XHRpZighdGhpcy5tb3ZlU3RhdHVzKXsgLy/msqHmnInlpITlnKjmi5bmi73nirbmgIHvvIzmiY3nm5HlkKzml7bpl7RcclxuXHRcdFx0XHRcdHRoaXMuYWN0aXZlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRpZighdGhpcy52LmZ1bGxTY3JlZW5TdGF0dXMpeyAvL+WdmuWxj+eKtuaAgVxyXG5cdFx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnYud2luZG93V2lkdGgtNDQtNDQtODAtMTU7XHJcblx0XHRcdFx0dGhpcy5sZWZ0ID0gNDQ7XHJcblx0XHRcdH1lbHNleyAvL+aoquWxj+eKtuaAgVxyXG5cdFx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnYud2luZG93SGVpZ2h0LTYwLTE1O1xyXG5cdFx0XHRcdHRoaXMubGVmdCA9IDMwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuYWN0aXZlKClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0YWN0aXZlKCl7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVXaXRoID0gdGhpcy5kdXJhdGlvbiA9PTAgPyAwOiAodGhpcy5jdXJyZW50VGltZS90aGlzLmR1cmF0aW9uKSAqIHRoaXMud2lkdGhcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hzdGFydChlKXtcclxuXHRcdFx0XHRpZih0aGlzLmR1cmF0aW9uID09PSAwKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLm1vdmVTdGF0dXMgPSB0cnVlOyAvL+W8gOWQr+aLluaLveeKtuaAgVxyXG5cdFx0XHRcdC8vZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YICjlvZPliY3op6bmkbjngrnot53nprvlsY/luZXlt6bovrnnmoTplb/luqYpXHJcblx0XHRcdFx0IHRoaXMuYWN0aXZlV2l0aD0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YLXRoaXMubGVmdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaG1vdmUoZSl7XHJcblx0XHRcdFx0aWYodGhpcy5kdXJhdGlvbiA9PT0gMCkgcmV0dXJuXHJcblx0XHRcdFx0bGV0IGQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblgtdGhpcy5sZWZ0XHJcblx0XHRcdFx0aWYoZDw9MCl7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGl2ZVdpdGggPSAwXHJcblx0XHRcdFx0fWVsc2UgaWYoZD49dGhpcy53aWR0aCl7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGl2ZVdpdGggPSB0aGlzLndpZHRoXHJcblx0XHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVXaXRoID0gZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGUnLHRoaXMuY3VycmVudClcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hlbmQoZSl7XHJcblx0XHRcdFx0aWYodGhpcy5kdXJhdGlvbiA9PT0gMCkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5tb3ZlU3RhdHVzID0gZmFsc2U7IC8v57uT5p2f5ouW5ou954q25oCBXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJyx0aGlzLmN1cnJlbnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoY2FuY2VsKGUpey8v5ruR5Yqo5omL5Yq/6KKr5Lit5pat5pe277yI5L6L5aaC5o+Q56S655S16YeP5LiN6Laz77yJXHJcblx0XHRcdFx0dGhpcy50b3VjaGVuZChlKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

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