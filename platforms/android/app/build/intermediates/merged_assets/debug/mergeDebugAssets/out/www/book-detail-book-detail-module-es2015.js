(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-detail-book-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-detail/book-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-detail/book-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>book-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/book-detail/book-detail-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/book-detail/book-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BookDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailPageRoutingModule", function() { return BookDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _book_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-detail.page */ "./src/app/book-detail/book-detail.page.ts");




const routes = [
    {
        path: '',
        component: _book_detail_page__WEBPACK_IMPORTED_MODULE_3__["BookDetailPage"]
    }
];
let BookDetailPageRoutingModule = class BookDetailPageRoutingModule {
};
BookDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/book-detail/book-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/book-detail/book-detail.module.ts ***!
  \***************************************************/
/*! exports provided: BookDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailPageModule", function() { return BookDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _book_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-detail-routing.module */ "./src/app/book-detail/book-detail-routing.module.ts");
/* harmony import */ var _book_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-detail.page */ "./src/app/book-detail/book-detail.page.ts");







let BookDetailPageModule = class BookDetailPageModule {
};
BookDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _book_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookDetailPageRoutingModule"]
        ],
        declarations: [_book_detail_page__WEBPACK_IMPORTED_MODULE_6__["BookDetailPage"]]
    })
], BookDetailPageModule);



/***/ }),

/***/ "./src/app/book-detail/book-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/book-detail/book-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGV0YWlsL2Jvb2stZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/book-detail/book-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/book-detail/book-detail.page.ts ***!
  \*************************************************/
/*! exports provided: BookDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailPage", function() { return BookDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BookDetailPage = class BookDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
BookDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-detail/book-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-detail.page.scss */ "./src/app/book-detail/book-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BookDetailPage);



/***/ })

}]);
//# sourceMappingURL=book-detail-book-detail-module-es2015.js.map