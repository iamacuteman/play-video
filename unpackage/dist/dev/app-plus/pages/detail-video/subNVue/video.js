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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=466e0921&mpType=page */ 5);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 23).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 23).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"400e32a0\",\n  false,\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQzJLO0FBQzNLLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NmUwOTIxJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHJvb3RcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjQwMGUzMmEwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2RldGFpbC12aWRlby9zdWJOVnVlL3ZpZGVvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

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
                    : _vm._e()
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm.showStatusBarStatus
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
      _vm.showStatusBarStatus
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
                  _c("f-icon-btn", { attrs: { icon: "\ue800", size: 22 } })
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
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\jx\\\\Desktop\\\\play-video\\\\pages\\\\detail-video\\\\subNVue\\\\video.nvue: Unexpected token (206:12)\\n\\n  204 | \\t\\t\\tif(!this.touchType){\\n  205 | \\t\\t\\t\\tthis.touchType = Math.abs(newTouchs.pageX-this.oldTouchs.pageX) > 20 ?'current':null\\n> 206 | \\t\\t\\t}else if(){\\n      | \\t\\t\\t         ^\\n  207 | \\t\\t\\t\\t\\n  208 | \\t\\t\\t}\\n  209 | \\t\\t},\\n    at Object._raise (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:746:17)\\n    at Object.raiseWithData (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:739:17)\\n    at Object.raise (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:733:17)\\n    at Object.unexpected (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8807:16)\\n    at Object.parseExprAtom (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10130:20)\\n    at Object.parseExprAtom (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4638:20)\\n    at Object.parseExprSubscripts (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9656:23)\\n    at Object.parseMaybeUnary (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9636:21)\\n    at Object.parseExprOps (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9506:23)\\n    at Object.parseMaybeConditional (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9479:23)\\n    at Object.parseMaybeAssign (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9434:21)\\n    at Object.parseExpression (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9386:23)\\n    at Object.parseHeaderExpression (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11425:22)\\n    at Object.parseIfStatement (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11507:22)\\n    at Object.parseStatementContent (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11201:21)\\n    at Object.parseStatement (D:\\\\root\\\\HBuilderX\\\\plugins\\\\uniapp-cli\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11156:17)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/jx/Desktop/play-video/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 24);
/* harmony import */ var _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_root_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_root_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
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