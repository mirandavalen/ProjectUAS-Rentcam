function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-add-book-add-module"], {
  /***/
  "./src/app/book-add/book-add-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/book-add/book-add-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: BookAddPageRoutingModule */

  /***/
  function srcAppBookAddBookAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookAddPageRoutingModule", function () {
      return BookAddPageRoutingModule;
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


    var _book_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./book-add.page */
    "./src/app/book-add/book-add.page.ts");

    var routes = [{
      path: '',
      component: _book_add_page__WEBPACK_IMPORTED_MODULE_3__["BookAddPage"]
    }];

    var BookAddPageRoutingModule = function BookAddPageRoutingModule() {
      _classCallCheck(this, BookAddPageRoutingModule);
    };

    BookAddPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookAddPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/book-add/book-add.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/book-add/book-add.module.ts ***!
    \*********************************************/

  /*! exports provided: BookAddPageModule */

  /***/
  function srcAppBookAddBookAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookAddPageModule", function () {
      return BookAddPageModule;
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


    var _book_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./book-add-routing.module */
    "./src/app/book-add/book-add-routing.module.ts");
    /* harmony import */


    var _book_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./book-add.page */
    "./src/app/book-add/book-add.page.ts");

    var BookAddPageModule = function BookAddPageModule() {
      _classCallCheck(this, BookAddPageModule);
    };

    BookAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _book_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookAddPageRoutingModule"]],
      declarations: [_book_add_page__WEBPACK_IMPORTED_MODULE_6__["BookAddPage"]]
    })], BookAddPageModule);
    /***/
  }
}]);
//# sourceMappingURL=book-add-book-add-module-es5.js.map