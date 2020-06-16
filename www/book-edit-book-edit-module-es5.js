function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-edit-book-edit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-edit/book-edit.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-edit/book-edit.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookEditBookEditPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>book-edit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/book-edit/book-edit-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/book-edit/book-edit-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: BookEditPageRoutingModule */

  /***/
  function srcAppBookEditBookEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookEditPageRoutingModule", function () {
      return BookEditPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _book_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./book-edit.page */
    "./src/app/book-edit/book-edit.page.ts");

    var routes = [{
      path: '',
      component: _book_edit_page__WEBPACK_IMPORTED_MODULE_3__["BookEditPage"]
    }];

    var BookEditPageRoutingModule = function BookEditPageRoutingModule() {
      _classCallCheck(this, BookEditPageRoutingModule);
    };

    BookEditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookEditPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/book-edit/book-edit.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/book-edit/book-edit.module.ts ***!
    \***********************************************/

  /*! exports provided: BookEditPageModule */

  /***/
  function srcAppBookEditBookEditModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookEditPageModule", function () {
      return BookEditPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _book_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./book-edit-routing.module */
    "./src/app/book-edit/book-edit-routing.module.ts");
    /* harmony import */


    var _book_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./book-edit.page */
    "./src/app/book-edit/book-edit.page.ts");

    var BookEditPageModule = function BookEditPageModule() {
      _classCallCheck(this, BookEditPageModule);
    };

    BookEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _book_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookEditPageRoutingModule"]],
      declarations: [_book_edit_page__WEBPACK_IMPORTED_MODULE_6__["BookEditPage"]]
    })], BookEditPageModule);
    /***/
  },

  /***/
  "./src/app/book-edit/book-edit.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/book-edit/book-edit.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookEditBookEditPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZWRpdC9ib29rLWVkaXQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/book-edit/book-edit.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/book-edit/book-edit.page.ts ***!
    \*********************************************/

  /*! exports provided: BookEditPage */

  /***/
  function srcAppBookEditBookEditPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookEditPage", function () {
      return BookEditPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookEditPage =
    /*#__PURE__*/
    function () {
      function BookEditPage() {
        _classCallCheck(this, BookEditPage);
      }

      _createClass(BookEditPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookEditPage;
    }();

    BookEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-edit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-edit/book-edit.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-edit.page.scss */
      "./src/app/book-edit/book-edit.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BookEditPage);
    /***/
  }
}]);
//# sourceMappingURL=book-edit-book-edit-module-es5.js.map