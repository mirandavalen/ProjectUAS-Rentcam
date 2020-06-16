(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-add-book-add-module"],{

/***/ "./src/app/book-add/book-add-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/book-add/book-add-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BookAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAddPageRoutingModule", function() { return BookAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _book_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-add.page */ "./src/app/book-add/book-add.page.ts");




const routes = [
    {
        path: '',
        component: _book_add_page__WEBPACK_IMPORTED_MODULE_3__["BookAddPage"]
    }
];
let BookAddPageRoutingModule = class BookAddPageRoutingModule {
};
BookAddPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookAddPageRoutingModule);



/***/ }),

/***/ "./src/app/book-add/book-add.module.ts":
/*!*********************************************!*\
  !*** ./src/app/book-add/book-add.module.ts ***!
  \*********************************************/
/*! exports provided: BookAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAddPageModule", function() { return BookAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _book_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-add-routing.module */ "./src/app/book-add/book-add-routing.module.ts");
/* harmony import */ var _book_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-add.page */ "./src/app/book-add/book-add.page.ts");







let BookAddPageModule = class BookAddPageModule {
};
BookAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _book_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookAddPageRoutingModule"]
        ],
        declarations: [_book_add_page__WEBPACK_IMPORTED_MODULE_6__["BookAddPage"]]
    })
], BookAddPageModule);



/***/ })

}]);
//# sourceMappingURL=book-add-book-add-module-es2015.js.map