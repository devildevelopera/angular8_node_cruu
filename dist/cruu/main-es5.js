function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
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
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n<div class=\"spinner\" *ngIf=\"http.spin\">\n\t<svg class=\"waw-spinner\" width=\"65px\" height=\"65px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<circle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle>\n\t</svg>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/crewmail/crewmail.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/crewmail/crewmail.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsCrewmailCrewmailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"email\">\n\t<div class=\"d-flex justify-content-between align-items-center mb20\">\n\t\t<div class=\"email-title font-weight-bold\">Send Email</div>\n\t\t<button type=\"button\" class=\"email-close close outline-mutted\" (click)=\"modal.close()\">\n\t\t\t<span>&times;</span>\n\t\t</button>\n\t</div>\n\t<div class=\"email-msg\">\n\t\t<input class=\"email-msg__input form-control\" type=\"text\" [(ngModel)]=\"email.subject\" placeholder=\"Subject\">\n\t\t<textarea class=\"email-msg__textarea form-control\" [(ngModel)]=\"email.message\" placeholder=\"Message\"></textarea>\n\t</div>\n\t<div class=\"email-date\">\n\t\t<span>Date<span *ngIf=\"dates.length>1\">s</span></span>\n\t\t<div class=\"date-grid\">\n\t\t\t<div class=\"date-block my10\" *ngFor=\"let date of dates\">\n\t\t\t\t<label class=\"waw-checkbox\">\n\t\t\t\t\t<span>{{date}}</span>\n\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"_dates[date]\" name=\"date\" (ngModelChange)=\"select(date)\">\n\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t</label>\n\t\t\t\t<ng-container *ngFor=\"let job of js.byEvent[_id+date]\">\n\t\t\t\t\t<label class=\"waw-checkbox ml30\"  *ngIf=\"job.assigned\">\n\t\t\t\t\t\t<span>{{job.position}}: <span>{{us._users[job.assigned]?.firstName}} {{us._users[job.assigned]?.lastName}} ({{us._users[job.assigned]?.email}})</span></span>\n\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"_selected[job.assigned]\" name=\"date\">\n\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- <ng-container *ngFor=\"let job of js.byEvent[_id+date]\">\n\t\t\t\t\t<label *ngIf=\"job.assigned\">\n\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"_selected[job.assigned]\" name=\"date\">\n\t\t\t\t\t\t<span>{{job.position}}: </span>\n\t\t\t\t\t\t<span>{{us._users[job.assigned]?.email}}</span>\n\t\t\t\t\t</label>\n\t\t\t\t</ng-container> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<button class=\"email-btn btn btn-success\" (click)=\"submit()\">Send</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/job/job.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/job/job.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsJobJobComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"p20\" (ngSubmit)=\"submit()\">\n\t<button type=\"button\" class=\"close outline-mutted\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n\t<div class=\"d-flex flex-column job-block\">\n\t\t<div class=\"field-box\">\n\t\t\t<div class=\"grid-row-3\">\n\t\t\t\t<div>\n\t\t\t\t\t<span>Position</span>\n\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"job.position\" (ngModelChange)=\"positionChanged()\"  name=\"position\">\n\t\t\t\t\t\t<option *ngFor=\"let position of ps._positions[os.org._id]\" [value]=\"position.value\">{{position.label}}\n\t\t\t\t\t\t</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field-box__timeCol\">\n\t\t\t\t\t<span>From</span>\n\t\t\t\t\t<time [value]=\"job.times.from\" (update)=\"job.times.from=$event;\"></time>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field-box__timeCol\">\n\t\t\t\t\t<span>To</span>\n\t\t\t\t\t<time [value]=\"job.times.to\" (update)=\"job.times.to=$event;\"></time>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"grid-row-3\">\n\t\t\t\t<div>\n\t\t\t\t\t<span>Rate</span>\n\t\t\t\t\t<input class=\"form-control\" type=\"number\" [(ngModel)]=\"job.rate\" (ngModelChange)=\"job.fixed=null;\" name=\"rate fill\" placeholder=\"Rate\">\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>Fixed</span>\n\t\t\t\t\t<input class=\"form-control\" type=\"number\" [(ngModel)]=\"job.fixed\" (ngModelChange)=\"job.rate=null;\" name=\"fixed fill\" placeholder=\"Fixed\">\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span>Extra</span>\n\t\t\t\t\t<input class=\"form-control\" type=\"number\" [(ngModel)]=\"job.extra\" name=\"extra\" placeholder=\"Extra\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"grid-row-3\">\n\t\t\t\t<div>\n\t\t\t\t\t<span>Note</span>\n\t\t\t\t\t<textarea class=\"form-control\" type=\"text\" [(ngModel)]=\"job.comment\" name=\"comment\" placeholder=\"Type your note\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-grow-2\" *ngIf=\"job.day\">\n\t\t\t\t\t<span>Assign Member</span>\n\t\t\t\t\t<div class=\"waw-select\">\n\t\t\t\t\t\t<div class=\"waw-select__header select-header__view\" (click)=\"options[job.day]=!options[job.day];\">\n\t\t\t\t\t\t\t<div class=\"word-nowrapBlock\"><span class=\"word-nowrapElem\">{{job.assigned&&(us._users[job.assigned]?.firstName+' '+us._users[job.assigned]?.lastName)||'Not Selected'}}</span></div>\n\t\t\t\t\t\t\t<span class=\"waw-select--item__right\" *ngIf=\"job.assigned && !allow_alert(job.assigned, job.day)\">Working on other event</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"waw-select__body\" [class._show]=\"options[job.day]\">\n\t\t\t\t\t\t\t<div class=\"waw-select--item\" (click)=\"job.assigned=null; job.force=true; options[job.day]=false;\">\n\t\t\t\t\t\t\t\t<span class=\"waw-select--item__left font-normal\">Not Selected</span>\n                            </div>\n                            <ng-container *ngIf=\"job.position&&us.org_pos[os.org._id+job.position]\">\n\t\t\t\t\t\t\t<div class=\"waw-select--item\" *ngFor=\"let user of (job.position&&us.org_pos[os.org._id+job.position]||us.users_current)\" (click)=\"allow(user._id, job.day)&&job.assigned=user._id; allow(user._id, job.day)&&job.force=true; allow(user._id, job.day)&&options[job.day]=false;\" [class._disabled]=\"!allow(user._id, job.day)\">\n\t\t\t\t\t\t\t\t<div class=\"waw-select--item__left font-normal\">\n\t\t\t\t\t\t\t\t\t<div>{{user.firstName}} {{user.lastName}}</div>\n\t\t\t\t\t\t\t\t\t<span class=\"word-break font-normal\" *ngIf=\"by_group[user._id]?.length\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"waw-select--item__left-group\" *ngFor=\"let group of by_group[user._id]\" [style.background]=\"colors[group]\"> {{group}}</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"waw-select--item__right\" *ngIf=\"!allow_alert(user._id, job.day)\">Working on other event</span>\n                            </div>\n                        </ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"my10\" *ngIf=\"us.user.isAdmin && job.day && job.assigned\">\n\t\t\t\t<div>\n\t\t\t\t\t<label class=\"waw-checkbox\">\n\t\t\t\t\t\t<span>Require Hotel</span>\n\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"job.need_hotel\" name=\"date\">\n\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-grow-2\" *ngIf=\"job.need_hotel\">\n\t\t\t\t\t<span>Hotel Name</span>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"job.hotel\" name=\"extra\" placeholder=\"Name\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"mt10\" *ngIf=\"dates.length\">\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"grid-row-3\" *ngFor=\"let date of dates\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Date</span>\n\t\t\t\t\t\t\t<div class=\"date-block my10\">\n\t\t\t\t\t\t\t\t<label class=\"waw-checkbox\">\n\t\t\t\t\t\t\t\t\t<span>{{date}}</span>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"_dates[date]\" name=\"date\">\n\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t<label class=\"waw-checkbox\">\n\t\t\t\t\t\t\t\t\t<span>Require Hotel</span>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"need_hotel[date]\" name=\"date\">\n\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- second -->\n\t\t\t\t\t\t<div class=\"grid-grow-2\">\n\t\t\t\t\t\t\t<span>Assign Member</span>\n\n\t\t\t\t\t\t\t<div class=\"my10\">\n\t\t\t\t\t\t\t\t<div class=\"waw-select\">\n\t\t\t\t\t\t\t\t\t<div class=\"waw-select__header\" (click)=\"options[date]=!options[date];\">\n\t\t\t\t\t\t\t\t\t\t<div>{{assigned[date]&&(us._users[assigned[date]]?.firstName+' '+us._users[assigned[date]]?.lastName)||'Not Selected'}}</div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"waw-select--item__right\" *ngIf=\"assigned[date] && !allow_alert(assigned[date], date)\">Working on other event</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"waw-select__body\" [class._show]=\"options[date]\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"waw-select--item\" (click)=\"assigned[date]=null; job.force=true; options[date]=false;\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"waw-select--item__left font-normal\">Not Selected</span>\n                                        </div>\n                                        <ng-container *ngIf=\"job.position&&us.org_pos[os.org._id+job.position]\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"waw-select--item\" *ngFor=\"let user of (job.position&&us.org_pos[os.org._id+job.position]||us.users_current)\" (click)=\"allow(user._id, date)&&assigned[date]=user._id; allow(user._id, date)&&job.force=true; allow(user._id, date)&&options[date]=false;\" [class.disabled]=\"!allow(user._id, date)\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"waw-select--item__left font-normal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div>{{user.firstName}} {{user.lastName}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"word-break font-normal\" *ngIf=\"by_group[user._id]?.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"waw-select--item__left-group\" *ngFor=\"let group of by_group[user._id]\" [style.background]=\"colors[group]\"> {{group}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"waw-select--item__right\" *ngIf=\"!allow_alert(user._id, date)\">Working on other event</span>\n                                        </div>\n                                    </ng-container>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"grid-grow-2\" *ngIf=\"need_hotel[date]\">\n\t\t\t\t\t\t\t\t\t<span>Hotel Name</span>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"hotel[date]\" name=\"extra\" placeholder=\"Name\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"job-btn d-flex justify-content-between mt10\">\n\t\t\t<button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!hasDate()\">{{job._id&&'Save'||'Create'}}</button>\n\n\t\t\t<span *ngIf=\"job._id\">{{job.day}}</span>\n\t\t</div>\n\t</div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/jobl/jobl.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/jobl/jobl.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsJoblJoblComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <form class=\"p20\" (ngSubmit)=\"submit()\">\n\t<button type=\"button\" class=\"close outline-mutted\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n\t<div class=\"d-flex flex-column job-block\">\n\t\t<div class=\"field-box\">\n\t\t\t<div class=\"grid-row-1\">\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Position:</span>\n\t\t\t\t\t{{job.position}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Time:</span>\n\t\t\t\t\t{{job.times.from?.time}} - {{job.times.to?.time}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"grid-row-1\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Rate:</span>\n\t\t\t\t\t{{job.rate}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Fixed:</span>\n\t\t\t\t\t{{job.fixed}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Extra:</span>\n\t\t\t\t\t{{job.extra}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"grid-row-1\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t<div class=\"grid-row-2\" *ngIf=\"job.assigned\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Assigned Member:</span>\n\t\t\t\t\t<span>{{us._users[job.assigned]?.firstName}} {{us._users[job.assigned]?.lastName}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-row-2\" *ngIf=\"job.assigned\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Status:</span>\n\t\t\t\t\t<span *ngIf=\"!job.accepted && !job.declined && !job.assigned\">Unassigned</span>\n\t\t\t\t\t<span *ngIf=\"!job.accepted && !job.declined && job.assigned\">Requested</span>\n\t\t\t\t\t<span *ngIf=\"job.accepted\">Accepted</span>\n\t\t\t\t\t<span *ngIf=\"job.declined\">Denied</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"grid-row-1\" *ngIf=\"job.assigned && us.user.isAdmin\">\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">\n\t\t\t\t\t\t<span>Career Rating:</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span>{{(rs.rated[job.event+job.assigned+job.day]&&rs.rated[job.event+job.assigned+job.day].toFixed(1)||'N/A')}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-row-2 align-items-center\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Event Rating:</span>\n\t\t\t\t\t<span class=\"row pl15\">\n\t\t\t\t\t\t<div class=\"star-ratings\">\n\t\t\t\t\t\t\t<div class=\"fill-ratings\" [ngStyle]=\"color(job)\">\n\t\t\t\t\t\t\t\t<span><a (click)=\"rate(1, job);\">★</a><a (click)=\"rate(2, job);\">★</a><a (click)=\"rate(3, job);\">★</a><a (click)=\"rate(4, job);\">★</a><a (click)=\"rate(5, job);\">★</a></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"empty-ratings\">\n\t\t\t\t\t\t\t\t<span><a (click)=\"rate(1, job);\">★</a><a (click)=\"rate(2, job);\">★</a><a (click)=\"rate(3, job);\">★</a><a (click)=\"rate(4, job);\">★</a><a (click)=\"rate(5, job);\">★</a></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"grid-row-1\">\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Note:</span>\n\t\t\t\t\t{{job.comment}}\n\t\t\t\t</div>\n\t\t\t\t<ng-container *ngIf=\"us.user.isAdmin && (job.comments|each).length\">\n\t\t\t\t\t<div class=\"grid-row-2\" *ngFor=\"let userId of job.comments|each\">\n\t\t\t\t\t\t<span class=\"jobv-table__text\">\n\t\t\t\t\t\t\t<!-- <span>{{us._users[userId]?.firstName}} {{us._users[userId]?.lastName}}:</span> -->\n\t\t\t\t\t\t\t<span>Crew Comment:</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span>{{job.comments[userId]}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"job-btn d-flex justify-content-between mt10\">\n\t\t\t<button class=\"btn btn-success\" type=\"submit\"\n\t\t\t[disabled]=\"!hasDate()||(!job.fixed&&!job.rate)\">{{job._id&&'Save'||'Create'}}</button>\n\t\t</div> -->\n\t</div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/jobv/jobv.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/jobv/jobv.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsJobvJobvComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <form class=\"p20\" (ngSubmit)=\"submit()\">\n\t<button type=\"button\" class=\"close outline-mutted\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.close()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n\t<div class=\"d-flex flex-column job-block\">\n\t\t<div class=\"field-box\">\n\t\t\t<div class=\"grid-row-1\">\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Position:</span>\n\t\t\t\t\t{{job.position}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Time:</span>\n\t\t\t\t\t{{job.times.from?.time}} - {{job.times.to?.time}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"grid-row-1\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Rate:</span>\n\t\t\t\t\t{{job.rate}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Fixed:</span>\n\t\t\t\t\t{{job.fixed}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Extra:</span>\n\t\t\t\t\t{{job.extra}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"grid-row-1\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t<div class=\"grid-row-2\" *ngIf=\"job.assigned\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Assigned Member:</span>\n\t\t\t\t\t<span>{{us._users[job.assigned]?.firstName}} {{us._users[job.assigned]?.lastName}}</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"grid-row-2\" *ngIf=\"job.assigned && job.need_hotel\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Hotel Required:</span>\n\t\t\t\t\t<span>{{job.hotel}}</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"grid-row-2\" *ngIf=\"job.assigned\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Status:</span>\n\t\t\t\t\t<span *ngIf=\"!job.accepted && !job.declined && !job.assigned\">Unassigned</span>\n\t\t\t\t\t<span *ngIf=\"!job.accepted && !job.declined && job.assigned\">Requested</span>\n\t\t\t\t\t<span *ngIf=\"job.accepted\">Accepted</span>\n\t\t\t\t\t<span *ngIf=\"job.declined\">Denied</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"grid-row-1\" *ngIf=\"job.assigned && us.user.isAdmin\">\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">\n\t\t\t\t\t\t<span>Career Rating:</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span>{{(rs.rated[job.event+job.assigned+job.day]&&rs.rated[job.event+job.assigned+job.day].toFixed(1)||'N/A')}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"grid-row-2 align-items-center\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Event Rating:</span>\n\t\t\t\t\t<span class=\"row pl15\">\n\t\t\t\t\t\t<div class=\"star-ratings\">\n\t\t\t\t\t\t\t<div class=\"fill-ratings\" [ngStyle]=\"color(job)\">\n\t\t\t\t\t\t\t\t<span><a (click)=\"rate(1, job);\">★</a><a (click)=\"rate(2, job);\">★</a><a (click)=\"rate(3, job);\">★</a><a (click)=\"rate(4, job);\">★</a><a (click)=\"rate(5, job);\">★</a></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"empty-ratings\">\n\t\t\t\t\t\t\t\t<span><a (click)=\"rate(1, job);\">★</a><a (click)=\"rate(2, job);\">★</a><a (click)=\"rate(3, job);\">★</a><a (click)=\"rate(4, job);\">★</a><a (click)=\"rate(5, job);\">★</a></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"grid-row-1\">\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Note:</span>\n\t\t\t\t\t<span class=\"w-break\">{{job.comment}}</span>\n\t\t\t\t</div>\n\t\t\t\t<ng-container *ngIf=\"us.user.isAdmin && (job.comments|each).length\">\n\t\t\t\t\t<div class=\"grid-row-2\" *ngFor=\"let userId of job.comments|each\">\n\t\t\t\t\t\t<span class=\"jobv-table__text\">\n\t\t\t\t\t\t\t<!-- <span>{{us._users[userId]?.firstName}} {{us._users[userId]?.lastName}}:</span> -->\n\t\t\t\t\t\t\t<span>Crew Comment:</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span>{{job.comments[userId]}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<div class=\"grid-row-1\">\n\t\t\t\t<div class=\"grid-row-2\">\n\t\t\t\t\t<span class=\"jobv-table__text\">Confirm:</span>\n\t\t\t\t\t<i *ngIf=\"job.confirm\" class=\"fa fa-check-circle\"></i>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"job-btn d-flex justify-content-between mt10\">\n\t\t\t<button class=\"btn btn-success\" type=\"submit\"\n\t\t\t[disabled]=\"!hasDate()||(!job.fixed&&!job.rate)\">{{job._id&&'Save'||'Create'}}</button>\n\t\t</div> -->\n\t</div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/labelc/labelc.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/labelc/labelc.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsLabelcLabelcComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"create()\" class=\"m-5\">\n\t<h4>New Label</h4>\n\t<div class=\"label-field\">\n\t\t<input class=\"form-control w100px my10\" type=\"text\" placeholder=\"Label Name\" [(ngModel)]=\"name\" name=\"name\">\n\t\t<input type=\"color\" name=\"color\" placeholder=\"Color\" class=\"form-control my10 label-field__color\" [(ngModel)]=\"color\">\n\t</div>\n\t<div class=\"d-flex justify-content-between mt15\">\n\t\t<button class=\"btn btn-danger\" type=\"button\" (click)=\"modal.close();\">Cancel</button>\n\t\t<button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!name || !color\">Create</button>\n\t</div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/message/message.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/message/message.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsMessageMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"submit()\" class=\"m-5\">\n\t<div class=\"c-text font-weight-bold\">{{title}}</div>\n\t<textarea class=\"form-control mt15 message-textarea\" [(ngModel)]=\"message\" name=\"message\" [placeholder]=\"placeholder\"></textarea>\n\t<div class=\"d-flex justify-content-between mt15\">\n\t\t<button class=\"btn btn-danger\" type=\"button\" (click)=\"cancel.emit(); modal.close();\">Cancel</button>\n\t\t<button class=\"btn btn-success\" type=\"submit\">Submit</button>\n\t</div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/orgmail/orgmail.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/orgmail/orgmail.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsOrgmailOrgmailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"email\" (ngSubmit)=\"submit()\">\n\t<div class=\"d-flex justify-content-between align-items-center mb20\">\n\t\t<div class=\"email-title font-weight-bold\">Send Email</div>\n\t\t<button type=\"button\" class=\"email-close close outline-mutted\"  (click)=\"modal.close()\">\n\t\t\t<span>&times;</span>\n\t\t</button>\n\t</div>\n\t<div class=\"email-msg\">\n\t\t<input class=\"email-msg__input form-control\" type=\"text\" [(ngModel)]=\"email.subject\" placeholder=\"Subject\" name=\"Subject\">\n\t\t<textarea class=\"email-msg__textarea form-control\" [(ngModel)]=\"email.message\" placeholder=\"Message\" name=\"Message\"></textarea>\n\t</div>\n\t<button class=\"email-btn btn btn-success\" type=\"submit\" [disabled]=\"!email.subject||!email.message\">Send</button>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/api/api.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/api/api.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminApiApiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<select [(ngModel)]=\"module\">\n\t<option *ngFor=\"let mod of modules\" [value]=\"mod.name\" [title]=\"mod.description\">{{mod.name}}</option>\n</select>\n<button (click)=\"create();\">Add</button>\n<table>\n\t<thead>\n\t\t<td>Url</td>\n\t\t<td>Description</td>\n\t\t<td>To Do / To Fix</td>\n\t\t<td *ngFor=\"let role of roles\">{{role.name}}</td>\n\t\t<td>Published</td>\n\t\t<td>Actions</td>\n\t</thead>\n\t<tr *ngFor=\"let route of (_routes[module]||[]); let i = index;\">\n\t\t<td>\n\t\t\t<input type=\"text\" [(ngModel)]=\"route.url\" (ngModelChange)=\"update(route)\">\n\t\t</td>\n\t\t<td>\n\t\t\t<textarea [(ngModel)]=\"route.description\" (ngModelChange)=\"update(route)\"></textarea>\n\t\t</td>\n\t\t<td>\n\t\t\t<textarea [(ngModel)]=\"route.tofix\" (ngModelChange)=\"update(route)\"></textarea>\n\t\t</td>\n\t\t<td *ngFor=\"let role of roles\">\n\t\t\t<input type=\"checkbox\" [(ngModel)]=\"route.role[role.name]\" (ngModelChange)=\"update(route)\">\n\t\t</td>\n\t\t<td>\n\t\t\t<input type=\"checkbox\" [(ngModel)]=\"route.active\" (ngModelChange)=\"update(route)\">\n\t\t</td>\n\t\t<td>\n\t\t\t<button (click)=\"create(route);\">Clone</button>\n\t\t\t<button (click)=\"_routes[module].splice(i, 1); delete(route);\">Delete</button>\n\t\t</td>\n\t</tr>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/events/events.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/events/events.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminEventsEventsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div style=\"display: inline-block;\">\n            <i class=\"fa fa-chevron-left\"></i>\n        </div>\n        <div class=\"col-md-1\" *ngFor=\"let day of daysOfWeek\" style=\"text-align:center;height:80px;width:100%;border: 1px solid grey;display: inline-block;\">\n            {{day}}\n        </div>\n        <div style=\"display: inline-block;\">\n            <i class=\"fa fa-chevron-right\"></i>\n        </div>\n        <div class=\"col-md-1\"></div>\n    </div>\n    <button class=\"btn-primary\" style=\"margin-left: auto; float:right;\" routerLink=\"/event-details\" [queryParams]=\"{isNew: 'true'}\">Add Event</button>\n    <div class=\"row\">\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"col-md-4\" *ngFor=\"let date of displayDates\">\n                <h5>{{date}}</h5>\n                <event-row [events]=\"displayEvents[date]\"></event-row>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/events/row/row.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/events/row/row.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminEventsRowRowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div routerLink=\"/event-details\" [queryParams]=\"{eventId: event._id}\" *ngFor=\"let event of events\" style=\"width:300px;background-color:blueviolet;border-radius:5px 5px;padding:5px;margin-top:5px;height:100%;line-height:40px;\">\n    <h5 style=\"display:inline-block;\">{{event.title}}</h5><h5 style=\"float:right;margin-top:5px;\">{{event.userCallTime ? event.userCallTime : event.time}}</h5>\n    <div>{{event.address}}, {{event.city}}</div> \n    <div>{{event.state}} {{event.zipCode}}</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/column-configuration-flyout/column-configuration-flyout.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/column-configuration-flyout/column-configuration-flyout.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardColumnConfigurationFlyoutColumnConfigurationFlyoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [formGroup]=\"columnForm\" style=\"color: white;padding:30px;\" *ngIf=\"expandFlyout\" class=\"flyout\" [ngStyle]=\"{'background-color': os.org.primaryColor != null ? os.org.primaryColor : '#222222' }\">\n    <div style=\"float:right;\" class=\"row\">\n        <i style=\"font-size:25px;margin-top:20px;\" (click)=\"toggle()\" class=\"fa fa-close close-icon\"></i>\n    </div>\n    <div style=\"justify-content: center;margin-top:19px;\" class=\"row\">\n        <h4>Column Configuration</h4>\n        <p>Select which columns to display and in what order to display them.</p>\n    </div>\n    <div style=\"margin-bottom:10px;\" *ngFor=\"let column of columnHeaders; let i = index\" class=\"row\">\n        <label>#{{i}}</label>\n        <select (change)=\"addColumnValue(i, columnOption)\" style=\"width:250px;margin-left:10px;\" [value]=\"column\" [formControlName]=\"i\">\n            <option *ngFor=\"let columnOption of columnOptions\">{{columnOption}}</option>\n        </select>\n        <button class=\"trash\" (click)=\"removeColumn(i)\"><i class=\"fa fa-trash\"></i></button>\n    </div>\n    <div class=\"row\">\n            <button class=\"btn-add\" *ngIf=\"columnHeaders.length <= 6\" (click)=\"addColumn()\"><i class=\"fa fa-plus\"></i></button>\n    </div>\n    \n    <div *ngIf=\"hasChanges\" class=\"row\" style=\"justify-content: center;\">\n        <button (click)=\"cancelChanges()\" class=\"cancel\" style=\"margin-right:10px;\">Cancel</button>\n        <button (click)=\"saveConfiguration()\" class=\"save\"><i class=\"fa fa-save\"></i> Save Changes</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-column-configuration-flyout (onCancel)=\"cancelConfig()\" [columnHeaders]=\"columnHeaders\" [expandFlyout]='expandFlyout'></app-column-configuration-flyout>\n<div style=\"padding-left:10px\">\n    <div class=\"row\" style=\"margin-bottom: 10px;\">\n        <h2>Timeline</h2>\n        <form style=\"margin-left:auto\" [formGroup]=\"filterForm\">\n            <div class=\"form-group form-inline\">\n                <input class=\"form-control ml-2\" type=\"text\" placeholder=\"Filter by keyword\" formControlName=\"filter\" />\n            </div>\n        </form>\n        <button *ngIf=\"us.user.isAdmin\" routerLink=\"/event-details\" [queryParams]=\"{isNew: 'true'}\" class=\"btn-primary ml-1\"><i class=\"fa fa-plus\"></i> Add Event</button>\n\n\n\n        <button *ngIf=\"us.user.isAdmin\" class=\"btn btn-info header-btn ml-2\" (click)=\"sendEmail()\" style=\"height: 38px;\"><i class=\"fa fa-envelope\"></i> Send Email</button>\n\n        <!-- <label class=\"header-link ml-1\">\n            <div class=\"btn btn-info\">Import</div>\n            <input type=\"file\" (change)=\"import($event.target.files)\" [hidden]=\"true\">\n        </label> -->\n\n        <!-- <label class=\"header-link ml-1\" (click)=\"donwload()\">\n            <div class=\"btn btn-info\">Download PDF</div>\n        </label> -->\n\n        <button *ngIf=\"us.user.isAdmin\" routerLink=\"/settings\" class=\"btn-primary ml-1\" style=\" background-color: goldenrod; border-color: goldenrod;\"><i class=\"fa fa-cog\"></i> Settings</button>\n    </div>\n    <table class=\"table table-striped\">\n        <thead style=\"color:#e6e6e6; line-height:40px;\" [ngStyle]=\"{'background-color': os.org.primaryColor != null ? os.org.primaryColor : '#222222' }\">\n            <th scope=\"col\" *ngFor=\"let header of columnHeaders\">{{header | titlecase}}</th>\n            <th scope=\"col\">Actions <!-- <button (click)=\"showConfigModal()\" style=\"float:right;color:white;\" class=\"btn-cog\"><i class=\"fa fa-cog\"></i></button> --></th>\n        </thead>\n        <tbody *ngIf=\"upcomingEvents && upcomingEvents.length\">\n            <tr *ngFor=\"let event of upcomingEvents\" routerLink=\"/event-details\" [queryParams]=\"{eventId: event._id}\">\n                <td *ngFor=\"let column of columnHeaders\">\n                    <!-- <ng-container *ngIf=\"event?.dynamicColumns\">\n                        {{event.dynamicColumns[column]}}\n                    </ng-container> -->\n                    <ng-container *ngIf=\"event[column] && column!='venue'\">{{event[column]}}</ng-container>\n                    <ng-container *ngIf=\"column=='venue'\">{{event.location.venueName}}</ng-container>\n                    <!-- <ng-container *ngIf=\"event?.dynamicColumns\">\n                        <ngb-highlight [result]=\"event?.dynamicColumns[column]\" [term]=\"filterForm.controls.filter.value\"></ngb-highlight>\n                    </ng-container> -->\n                </td>\n                <td (click)=\"handleActions($event)\">\n                    <i *ngIf=\"event.createdBy == us.user._id\" class=\"fa fa-trash\" (click)=\"deleteEvent(event)\"></i>\n                    <i *ngIf=\"event.createdBy != us.user._id && !event.isAvailable\" (click)=\"removeUser(event, event.date)\" style=\"padding-left:10px;\"\n                        class=\"fa fa-paper-plane\">\n                    </i>\n                </td>\n            </tr>\n            <div style=\"padding:.75rem;\" *ngIf=\"upcomingEvents.length < 1\">\n                No Upcoming Events\n            </div>\n        </tbody>\n    </table>\n\n    <div class=\"row\" style=\"margin-bottom: 10px; margin-top:40px;\">\n        <h4>Past Events</h4>\n    </div>\n    <table class=\"table table-striped\">\n        <thead style=\"color:#e6e6e6;\" [ngStyle]=\"{'background-color': os.org.primaryColor != null ? os.org.primaryColor : '#222222' }\">\n            <th scope=\"col\" *ngFor=\"let header of columnHeaders\">{{header | titlecase}}</th>\n            <th scope=\"col\">Actions</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let event of pastEvents\" routerLink=\"/event-details\" [queryParams]=\"{eventId: event._id}\">\n                <td *ngFor=\"let column of columnHeaders\">\n                    <!-- <ng-container *ngIf=\"event?.dynamicColumns\">\n                        {{event.dynamicColumns[column]}}\n                    </ng-container> -->\n\n                    <ng-container *ngIf=\"event[column] && column!='venue'\">{{event[column]}}</ng-container>\n                    <ng-container *ngIf=\"column=='venue'\">{{event && event.location && event.location.venueName}}</ng-container>\n                    <!-- <ngb-highlight [result]=\"event.dynamicColumns[column]\" [term]=\"filterForm.controls.filter.value\"></ngb-highlight> -->\n                </td>\n                <td (click)=\"handleActions($event)\">\n                    <i *ngIf=\"event.createdBy == us.user._id\" class=\"fa fa-trash\" (click)=\"deleteEvent(event)\"></i>\n                    <i *ngIf=\"event.createdBy != us.user._id && !event.isAvailable\" (click)=\"removeUser(event, event.date)\" style=\"padding-left:10px;\"\n                        class=\"fa fa-paper-plane\">\n                    </i>\n                </td>\n                <div style=\"padding:.75rem;\" *ngIf=\"pastEvents.length < 1\">\n                    No Past Events\n                </div>\n            </tr>\n        </tbody>\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-config/crew-config-row/crew-config-row.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-config/crew-config-row/crew-config-row.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsCrewConfigCrewConfigRowCrewConfigRowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [formGroup]=\"crewForm\" class=\"row flex-nowrap\" [ngClass]=\"{'hasError': hasSchedulingError, 'isEven': isEven}\">\n    <div class=\"td\">\n        <select class=\"form-control\" formControlName=\"position\">\n            <option value=\"\">Select</option>\n            <option *ngFor=\"let position of positionList\" [value]=\"position.value\">{{position.label}}</option>\n        </select>\n    </div>\n    <div class=\"td\">\n        <time class=\"w100\" [value]=\"crew.callTime\" [update_on_init]=\"true\" (update)=\"update_time($event);\"></time>\n    </div>\n    <div class=\"td\">\n        <time class=\"w100\" [value]=\"crew.endTime\" [update_on_init]=\"true\" (update)=\"update_time_end($event);\"></time>\n    </div>\n    <div class=\"mb10 td\">\n        <select class=\"form-control\" formControlName=\"selectedCrewId\" [attr.disabled]=\"(us.org_pos[os.org._id+crewForm.controls.position.value]||[]).length ? null : ''\">\n            <option value=\"\">Select</option>\n            <option *ngFor=\"let crew of us.org_pos[os.org._id+crewForm.controls.position.value]||[]\" [value]=\"crew._id\">{{crew.firstName + ' ' + crew.lastName}}</option>\n        </select>\n    </div>\n    <div class=\"td\">\n        <input class=\"form-control\" style=\"width:100%;\" type=\"text\" placeholder=\"$Rate\" formControlName=\"rate\" (change)=\"crewForm.controls.fixed.setValue(null); this.crew.fixed=null; this.crew.rate=crewForm.controls.rate.value; us.refresh();\" />\n    </div>\n    <div class=\"td\">\n        <input class=\"form-control\" style=\"width:100%;\" type=\"text\" placeholder=\"$Fixed\" formControlName=\"fixed\" (change)=\"crewForm.controls.rate.setValue(null); this.crew.rate=null; this.crew.fixed=crewForm.controls.fixed.value; us.refresh();\" />\n    </div>\n    <div class=\"td\">\n        <input class=\"form-control\" style=\"width:100%;\" type=\"text\" placeholder=\"$Extra\" formControlName=\"extra\" (change)=\"this.crew.extra=crewForm.controls.extra.value; us.refresh();\" />\n    </div>\n    <div class=\"col td\">\n        {{crew.phoneNumber}}\n    </div>\n    <div class=\"td\">\n        <textarea class=\"form-control\" formControlName=\"comment\"></textarea>\n    </div>\n    <div class=\"crew-actionBtn d-flex justify-content-between align-items-center td\">\n        <button class=\"btn btn-warning btnAdd mr10\" (click)=\"create_job()\"><i class=\"fa fa-plus\"></i></button>\n        <div class=\"btn btn-danger cursor-pointer\"><i class=\"fa fa-trash\" (click)=\"handleClick()\"></i></div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-config/crew-config.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-config/crew-config.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsCrewConfigCrewConfigComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngb-tabset>\n\t<ngb-tab *ngFor=\"let date of datesList\" (tabChange)=\"onNewCrewChange(date)\" title={{date}}>\n\t\t<ng-template ngbTabContent>\n\n\t\t\t<table class=\"table crewEdit\">\n\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th class=\"crewEdit__pos\" scope=\"col\">Position</th>\n\t\t\t\t\t\t<th class=\"crewEdit__time\" scope=\"col\">Time</th>\n\t\t\t\t\t\t<th scope=\"col\">Name</th>\n\t\t\t\t\t\t<th class=\"crewEdit__rate\" scope=\"col\">Rate</th>\n\t\t\t\t\t\t<th class=\"crewEdit__fixed\" scope=\"col\">Fixed</th>\n\t\t\t\t\t\t<th class=\"crewEdit__extra\" scope=\"col\">Extra</th>\n\t\t\t\t\t\t<!-- <th class=\"crewEdit__phone\" scope=\"col\">Phone</th>\n                <th class=\"crewEdit__comm\" scope=\"col\">Comments</th> -->\n\t\t\t\t\t\t<th class=\"crewEdit__status\" scope=\"col\">Status</th>\n\t\t\t\t\t\t<th class=\"crewEdit__status\">\n\t\t\t\t\t\t\t<i  class=\"fa fa-check-circle\"></i>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class=\"crewEdit__action\" scope=\"col\">Actions</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody *ngIf=\"js.byEvent\">\n\t\t\t\t\t<tr *ngFor=\"let job of js.byEvent[eventData._id+date]\">\n\t\t\t\t\t\t<td class=\"crewEdit__pos\">{{positionConfigurationMap[job.position]}}</td>\n\t\t\t\t\t\t<td class=\"crewEdit__time\">{{job.times.from.time||'N/A'}} - {{job.times.to.time||'N/A'}}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t*ngIf=\"job.assigned\">{{us._users[job.assigned]?.firstName + ' ' + us._users[job.assigned].lastName}}</span>\n\t\t\t\t\t\t\t<span *ngIf=\"!job.assigned\">Unassigned</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"crewEdit__rate\">{{job?.rate&&'$'+job?.rate||''}}</td>\n\t\t\t\t\t\t<td class=\"crewEdit__fixed\">{{job?.fixed&&'$'+job?.fixed||''}}</td>\n\t\t\t\t\t\t<td class=\"crewEdit__extra\">{{job?.extra&&'$'+job?.extra||''}}</td>\n\n\t\t\t\t\t\t<!-- <td class=\"crewEdit__phone\">+380972586543</td>\n                    <td class=\"crewEdit__comm\">52</td> -->\n\t\t\t\t\t\t<td class=\"crewEdit__status\">\n\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"!job.accepted && !job.assigned\">\n\t\t\t\t\t\t\t\t<div class=\"c-green\">New</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"!job.accepted && job.assigned\">\n\t\t\t\t\t\t\t\t<div class=\"c-red\">Requested</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"job.accepted\">\n\t\t\t\t\t\t\t\t<div class=\"c-blue\">Accepted</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"crewEdit__status\">\n\t\t\t\t\t\t\t<i *ngIf=\"job.confirm\" class=\"fa fa-check-circle\"></i>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"crewEdit__action\">\n\t\t\t\t\t\t\t<!-- <i class=\"fa fa-plus\" *ngIf=\"!job.assigned && !job.active\" (click)=\"job.active=true; js.update(job);\"></i> -->\n\t\t\t\t\t\t\t<i class=\"fa fa-times\" *ngIf=\"!job.assigned && job.active\"\n\t\t\t\t\t\t\t\t(click)=\"job.active=false; js.update(job);\"></i>\n\t\t\t\t\t\t\t<i class=\"fa fa-eye\" (click)=\"view(job)\"></i>\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" (click)=\"edit(job)\"></i>\n\t\t\t\t\t\t\t<i class=\"fa fa-trash\" (click)=\"js.delete(job, us.refresh.bind(us))\"></i>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\n\t\t\t<div style=\"margin-left: 10px;margin-top:5px;\" *ngIf=\"!js.byEvent[eventData._id+date]?.length\">\n\t\t\t\tNo crew selected for this date.\n\t\t\t</div>\n\n\t\t\t<div class=\"cost-block\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t<div class=\"cost-block__title\">Cost: <span>${{eventData|crewCost:date:us.now}}</span></div>\n\t\t\t\t<div class=\"cost-block__result\"><i *ngIf=\"js.byEvent[eventData._id+date]?.length\"\n\t\t\t\t\t\t(click)=\"removeAll(js.byEvent[eventData._id+date])\" class=\"fa fa-trash\"></i></div>\n\t\t\t</div>\n\n\t\t\t<div [formGroup]=\"newCrewForm\" *ngIf=\"isAdding\" class=\"row newCrewForm\"\n\t\t\t\tstyle=\"border-top: 1px solid grey;width:100%;\"\n\t\t\t\t[ngStyle]=\"newUserError && {'border': '2px solid #cc0000', 'background-color':'#d16b6b'}\">\n\t\t\t\t<div class=\"td\">\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"selectedPosition\">\n\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t<option *ngFor=\"let position of positionList\" [value]=\"position.value\">{{position.label}}\n\t\t\t\t\t\t</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"td\">\n\t\t\t\t\t<time class=\"w100\" [value]=\"eventData.times[date]\" (update)=\"update_time($event);\"></time>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"td\">\n\t\t\t\t\t<time class=\"w100\" [value]=\"eventData.times['to'+date]\" [value]=\"crew.endTime\"\n\t\t\t\t\t\t(update)=\"update_time_end($event);\"></time>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"td\">\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"selectedCrewId\" (change)=\"selectCrew()\"\n\t\t\t\t\t\t[attr.disabled]=\"(us.org_pos[os.org._id+newCrewForm.controls.selectedPosition.value]||[]).length ? null : ''\">\n\t\t\t\t\t\t<option value=\"\">Select</option>\n\t\t\t\t\t\t<option\n\t\t\t\t\t\t\t*ngFor=\"let crew of us.org_pos[os.org._id+newCrewForm.controls.selectedPosition.value]||[]\"\n\t\t\t\t\t\t\t[value]=\"crew._id\">{{crew.firstName + ' ' + crew.lastName}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"td\">\n\t\t\t\t\t<input class=\"form-control\" style=\"width:100%;\" type=\"text\" placeholder=\"$Rate\"\n\t\t\t\t\t\tformControlName=\"crewRate\" (change)=\"newCrewForm.controls.crewFixed.setValue(null);\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"td\">\n\t\t\t\t\t<input class=\"form-control\" style=\"width:100%;\" type=\"text\" placeholder=\"$Fixed\"\n\t\t\t\t\t\tformControlName=\"crewFixed\" (change)=\"newCrewForm.controls.crewRate.setValue(null);\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"td\">\n\t\t\t\t\t<input class=\"form-control\" style=\"width:100%;\" type=\"text\" placeholder=\"$Fixed\"\n\t\t\t\t\t\tformControlName=\"crewExtra\" (change)=\"newCrewForm.controls.crewRate.setValue(null);\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"td\"></div>\n\t\t\t\t<div class=\"td\">\n\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"crewComment\"></textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"newUserError\" class=\"row\">\n\t\t\t\t<p class=\"error\">Some users found to have double bookings. Please resolve highlighted users before\n\t\t\t\t\tattempting to apply crew again.</p>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"row\" id=\"crew-btns\">\n                <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"createCrew()\">\n                    <i class=\"fa fa-plus\"></i> New Add Crew\n                </button>\n            </div> -->\n\t\t</ng-template>\n\t</ngb-tab>\n</ngb-tabset>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsCrewDrawerCrewCommentModalCrewCommentModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h2 class=\"modal-title\">Comment for {{us._users[job.assigned]?.firstName + ' ' + us._users[job.assigned].lastName}}</h2>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <textarea [(ngModel)]=\"comment\" style=\"width:100%; height: 150px\"></textarea>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal()\">Cancel</button>\n  <button type=\"submit\" class=\"btn btn-success\" (click)=\"saveComment()\">Save</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-drawer/crew-drawer.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-drawer/crew-drawer.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsCrewDrawerCrewDrawerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"table crewDraw\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th class=\"crewEdit__pos\" scope=\"col\">Position</th>\n      <th class=\"crewEdit__time\" scope=\"col\">Time</th>\n      <th class=\"crewEdit__name\" scope=\"col\">Name</th>\n      <!-- <th scope=\"col\">Phone</th> -->\n      <th class=\"crewEdit__rate\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Rate</th>\n      <th class=\"crewEdit__fixed\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Fixed</th>\n      <th class=\"crewEdit__extra\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Extra</th>\n\n      <th class=\"crewEdit__rated\" scope=\"col\" *ngIf=\"us.user.isAdmin\">\n        <span>Career Rating</span>\n      </th>\n      <th class=\"crewEdit__rating\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Event Rating</th>\n      <th class=\"crewEdit__status\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Status</th>\n      <th class=\"crewEdit__note\" scope=\"col\">Note</th>\n\t  <th class=\"crewEdit__status\" scope=\"col\"><i class=\"fa fa-check-circle\"></i></th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <!--  *ngFor=\"let crewMember of event; let last = last; let even = even;\" tyle=\"border-bottom: 1px solid grey;\" [style.border-bottom]=\"last ? 'none' : '1px solid grey'\" [ngStyle]=\"even && {'background-color': '#e6e6e6'}\" -->\n    <tr *ngFor=\"let job of js.byEvent[fullEvent._id+date]\">\n      <td class=\"crewEdit__pos\">{{positionConfigurationMap[job.position]}}</td>\n      <td class=\"crewEdit__time _mod\"><div>{{job.times.from.time||'N/A'}}</div>  <div>{{job.times.to.time||'N/A'}}</div></td>\n      <td class=\"crewEdit__name\">\n        <span *ngIf=\"job.assigned && us._users[job.assigned]\">{{us._users[job.assigned]?.firstName + ' ' + us._users[job.assigned]?.lastName}}</span>\n        <span *ngIf=\"!job.assigned\">Unassigned</span>\n      </td>\n\n      <td class=\"crewEdit__rate\" *ngIf=\"us.user.isAdmin\">{{job?.rate&&'$'+job?.rate||''}}</td>\n      <td class=\"crewEdit__fixed\" *ngIf=\"us.user.isAdmin\">{{job?.fixed&&'$'+job?.fixed||''}}</td>\n      <td class=\"crewEdit__extra\" *ngIf=\"us.user.isAdmin\">{{job?.extra&&'$'+job?.extra||''}}</td>\n\n\n      <td class=\"crewEdit__rated\" *ngIf=\"us.user.isAdmin\">\n        <span *ngIf=\"job.assigned\">{{(rs.rated[fullEvent._id+job.assigned+date]&&rs.rated[fullEvent._id+job.assigned+date].toFixed(1)||'N/A')}}</span>\n      </td>\n      <td class=\"crewEdit__rating\" *ngIf=\"us.user.isAdmin\">\n        <span class=\"row\" *ngIf=\"job.assigned\">\n          <div class=\"star-ratings\">\n            <div class=\"fill-ratings\" [ngStyle]=\"color(job)\">\n              <span><a (click)=\"rate(1, job);\">★</a><a (click)=\"rate(2, job);\">★</a><a (click)=\"rate(3, job);\">★</a><a\n                  (click)=\"rate(4, job);\">★</a><a (click)=\"rate(5, job);\">★</a></span>\n            </div>\n            <div class=\"empty-ratings\">\n              <span><a (click)=\"rate(1, job);\">★</a><a (click)=\"rate(2, job);\">★</a><a (click)=\"rate(3, job);\">★</a><a\n                  (click)=\"rate(4, job);\">★</a><a (click)=\"rate(5, job);\">★</a></span>\n            </div>\n          </div>\n        </span>\n      </td>\n     \n      <td class=\"crewEdit__status\" *ngIf=\"us.user.isAdmin\">\n        <div class=\"d-flex align-items-center\" *ngIf=\"!job.accepted && !job.assigned\" >\n            <div class=\"c-green\">New</div>\n        </div>\n        <div class=\"d-flex align-items-center\" *ngIf=\"!job.accepted && job.assigned\">\n            <div class=\"c-red\">Requested</div>\n        </div>\n        <div class=\"d-flex align-items-center\" *ngIf=\"job.accepted\">\n            <div class=\"c-blue\">Accepted</div>\n        </div>\n      </td>\n      \n      <td class=\"crewEdit__note\">\n        {{job.comment}}\n      </td>\n\t     <td class=\"crewEdit__status\">\n        <i class=\"fa fa-check-circle\" style=\"color: green\" *ngIf=\"job.confirm\"></i>\n      </td>\n      <td>\n        <button class=\"btn\" placement=\"top\" ngbTooltip=\"{{displayCommentTooltip(job._id)}}\" (click)=\"editComment(job)\" *ngIf=\"job.assigned && us.user.isAdmin\">\n          <i class=\"fa fa-comment\"></i>&nbsp;\n        </button>\n        <button (click)=\"view(job)\" class=\"btn\"><i class=\"fa fa-eye\"></i></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div style=\"margin-left:10px; margin-top:10px;\" class=\"row\" *ngIf=\"!js.byEvent[fullEvent._id+date]?.length\">\n  No crew selected for this date\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/event-details.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/event-details.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsEventDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-inventory-configuration-modal></app-inventory-configuration-modal>\n<div class=\"d-flex justify-content-center\" *ngIf=\"!event\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<ng-container *ngIf=\"event\">\n    <div [formGroup]=\"eventDetailsForm\">\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <h3 class=\"event-title\" id=\"TitleSection\">\n                    <span *ngIf=\"!editMode\" style=\"margin-right:15px;\">{{event?.title}}</span>\n\n                    <input [class._alert]=\"alert=='title'\" *ngIf=\"editMode\" type=\"text\" formControlName=\"title\" class=\"input-field title-input\" placeholder=\"Event Title\" (ngModelChange)=\"eventDetailsForm.controls.title.value&&alert=='title'&&alert=''\">\n                    <span *ngIf=\"alert=='title'\" class=\"title_alert\">Please title this event</span>\n                </h3>\n                <button *ngIf=\"!editMode && event?.createdBy == us.user._id\" class=\"btn btn-success\" (click)=\"toggleEdit()\" style=\"margin-right:15px\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                <button *ngIf=\"editMode\" class=\"btn-secondary header-btn\" (click)=\"toggleEdit()\">Cancel</button>\n                <button *ngIf=\"editMode\" style=\"margin-right:15px\" class=\"btn btn-danger\" (click)=\"onSubmit()\" [class._disabled]=\"!eventDetailsForm.valid || notDates()\">\n                    <i class=\"fa fa-save\"></i> Save Event\n                </button>\n                <button style=\"margin-right:15px\" *ngIf=\"!isClone && !editMode && event?.createdBy == us.user._id\" class=\"btn btn-warning \" (click)=\"cloneEvent()\">\n                    <i *ngIf=\"!isClone\" (click)=\"cloneEvent()\" class=\"fa fa-clone\"></i> Clone\n                </button>\n\n                <button *ngIf=\"us.user.isAdmin\" class=\"btn btn-info header-btn\" (click)=\"sendEmail()\"><i class=\"fa fa-envelope\"></i> Send Email</button>\n\n                <button *ngIf=\"us.user.isAdmin\" class=\"btn btn-dark header-btn ml-2\" (click)=\"generatePdf()\"> Generate Timesheets</button>\n\n                <!-- <button *ngIf=\"us.user.isAdmin\" class=\"btn btn-dark header-btn ml-2\" (click)=\"send_48h()\"> 48h</button> -->\n\n                <button *ngIf=\"!editMode && eventNeedsApprovals && event?.createdBy == us.user._id\" class=\"btn btn-info\" (click)=\"openDialog()\">Position Approvals</button>\n            </div>\n\n            <!-- <div>\n                <label class=\"header-link ml-2\" (click)=\"export();\">\n                    <div class=\"btn btn-info\">Export</div>\n                </label>\n            </div> -->\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h4 style=\"margin-left:14px;margin-top:20px;\">Details</h4>\n                <div class=\"row\"  style=\"margin-top:15px;padding-left:15px;\">\n                    <div *ngIf=\"editMode\" class=\"col-sm-2\" style=\"display:inline-block;font-size:20px;margin-left:10px;line-height:35px;\">Dates: </div>\n                    <div *ngIf=\"!editMode && eventDates?.length\" class=\"col-sm-4\" style=\"line-height:36px;\">\n                        <span>{{eventDates[0]}}</span>\n                        <span *ngIf=\"eventDates[0] != eventDates[eventDates.length-1]\"> - {{eventDates[eventDates.length-1]}}</span>\n                    </div>\n                    <div *ngIf=\"editMode\" class=\"col-sm-4\">\n                        <app-calendar-picker [startDate]=\"event.startDate\" [endDate]=\"event.endDate\" (datePicked)=\"selectDates($event)\"></app-calendar-picker>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 event-time\" [class._alert]=\"alert=='times'\" *ngIf=\"editMode\">\n            <h4 class=\"event-time__title\" style=\"margin-left:14px;margin-top:20px;\" id=\"TimeSection\">Event Time<span *ngIf=\"alert=='times'\" class=\"title_alert\">Please choose a time</span></h4>\n                    <div class=\"row\" style=\"margin-top:15px;\">\n                        <div style=\"line-height:36px;width: calc(19% + 473px);\">\n                            <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n                                <ngb-panel *ngFor=\"let date of eventDates; let i=index;\" [id]=\"'ngb-panel-'+i\">\n                                    <ng-template ngbPanelTitle>{{date}}</ng-template>\n                                    <ng-template ngbPanelContent>\n                                        <div class=\"ngb-picker-block\">\n                                            <div class=\"ngb-picker-center\">\n                                                <span class=\"mr-2\">From</span>\n                                                <time [value]=\"event.times[date]\" (update)=\"event.times[date]=$event; calc(date);\"></time>\n                                                <!-- <ngb-timepicker [(ngModel)]=\"event.times[date]\" (ngModelChange)=\"calc(date)\" [ngModelOptions]=\"{standalone: true}\" style=\"display:inline-block\" [meridian]=\"true\"></ngb-timepicker> -->\n                                            </div>\n\n                                           <div class=\"ngb-picker-center\">\n                                                <span class=\"ml-2 mr-2\">Duration</span>\n                                                <time [meridian]=\"false\" [value]=\"event.times['duration'+date]\" (update)=\"event.times['duration'+date]=$event; calc(date);\"></time>\n                                                <!-- <ngb-timepicker [(ngModel)]=\"event.times['duration'+date]\" (ngModelChange)=\"calc(date)\" [ngModelOptions]=\"{standalone: true}\" style=\"display:inline-block\"></ngb-timepicker> -->\n                                           </div>\n                                            <div class=\"ngb-picker-center\">\n                                                <span class=\"ml-2 mr-2\">To</span>\n                                                <span *ngIf=\"event?.times['to'+date]\">{{event?.times['to'+date]|time}}</span>\n                                                <span *ngIf=\"!event?.times['to'+date]\">N/A</span>\n                                                <!-- <span class=\"ml-2 mr-2\">To</span>\n                                                <ngb-timepicker [(ngModel)]=\"event.times['to'+date]\" (ngModelChange)=\"calc_duration(date)\" [ngModelOptions]=\"{standalone: true}\" style=\"display:inline-block\" [meridian]=\"true\"></ngb-timepicker> -->\n                                            </div>\n                                        </div>\n                                    </ng-template>\n                                </ngb-panel>\n                            </ngb-accordion>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-12\" >\n                    <div class=\"row venue-row\" style=\"margin-top:15px;padding-left:15px;\" id=\"VenueSection\">\n                        <div *ngIf=\"editMode\" class=\"col-sm-2\" style=\"display:inline-block;font-size:20px;line-height:35px;margin-left:10px;\">Venue: </div>\n                        <select  class=\"col-sm-4 event-venue _alert\" [class._alert]=\"alert=='venue'\"  *ngIf=\"editMode\"  formControlName=\"selectedLocation\" (change)=\"selectLocation()\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let location of locationDropdownOptions\" [value]=\"location.value\">{{location.label}}</option>\n                        </select>\n                        <span *ngIf=\"alert=='venue'\" class=\"title_alert\">Please choose a venue</span>\n                    </div>\n                    <div class=\"row\" style=\"margin-top:15px;padding-left:15px;\">\n                        <div *ngIf=\"selectedLocation !== null\">\n                            <div *ngIf=\"!editMode\">\n                                {{selectedLocation?.venueName}}\n                            </div>\n                            {{selectedLocation?.address}} {{selectedLocation?.address2}}\n                            <br /> {{selectedLocation?.city +', ' + selectedLocation?.state + ' ' + selectedLocation?.zipCode}}\n                        </div>\n                    </div>\n                </div>\n                <div style=\"margin-top:20px;padding-left:15px;\" class=\"row\">\n                    <label *ngIf=\"editMode\" class=\"col-sm-2\" style=\"display:inline-block;font-size:20px;margin-left:10px;line-height:35px;\">\n                        <span>Files: <span *ngIf=\"editMode\" style=\"font-size: 16px;\">(max 15MB)</span></span>\n                        <i class=\"fa fa-upload icon-preview\"></i>\n                        <input type=\"file\" [(ngModel)]=\"files\" (change)=\"upload($event.target.files);\" [hidden]=\"true\" accept=\"application/pdf\" [ngModelOptions]=\"{standalone: true}\">\n                    </label>\n                    <div *ngIf=\"editMode\" class=\"col-sm 8\">\n                        <ng-container *ngFor=\"let file of event.files; let i = index\">\n                            <a [href]=\"file\" download target=\"_blank\">\n                                <i class=\"fa fa-file mr-1 icon-preview\"></i>\n                                <span>{{file.split('/').pop()}}</span>\n                            </a>\n                            <i class=\"fa fa-trash icon-preview ml-1\" (click)=\"delete(file); event.files.splice(i, 1);\"></i>\n                        </ng-container>\n                    </div>\n                    <div *ngIf=\"!editMode\" class=\"col-sm 8\">\n                        <a *ngFor=\"let file of event.files\" [href]=\"file\" download target=\"_blank\">\n                            <i class=\"fa fa-file mr-1 icon-preview\"></i>\n                            <span>{{file.split('/').pop()}}</span>\n                        </a>\n                    </div>\n                </div>\n                <div style=\"margin-top:20px;padding-left:15px;\" class=\"row\">\n                    <div *ngIf=\"editMode\" class=\"col-sm-2\" style=\"display:inline-block;font-size:20px;margin-left:10px;line-height:35px;\">Description: </div>\n                    <div *ngIf=\"!editMode\" class=\"col-sm 8\">\n                        <p>{{event?.description}}</p>\n                    </div>\n                    <div *ngIf=\"editMode\" class=\"col-sm 8\">\n                        <textarea formControlName=\"description\" style=\"width: 80%; border-radius: 5px 5px; padding:10px; margin-left: 15px; height:100px;\">{{event?.description}}</textarea>\n                    </div>\n                </div>\n                <ng-container *ngFor=\"let category of cs.categories\">\n                    <div style=\"padding-left:15px;\" class=\"row\" *ngIf=\"(ls.labels|labelsByCategory:category.name:editMode:now).length\">\n                        <div class=\"col-sm-2\" style=\"display:inline-block;font-size:20px;margin-left:10px;line-height:35px;margin-top: 10px;\">{{category.name}}: </div>\n                        <button class=\"btn-icon\" (click)=\"addLabel(category)\" *ngIf=\"editMode\"><i class=\"fa fa-plus\"></i></button>\n                        <div class=\"col-sm-12\">\n                            <div *ngFor=\"let label of ls.labels|labelsByCategory:category.name:editMode:now\" [class.label_active]=\"!editMode || label._active\" [style.background-color]=\"label.color\" class=\"col-sm-3 label_box mt-2\" (click)=\"editMode && label._active=!label._active\">\n                                <span>{{label.name}}</span>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n            </div>\n            <div class=\"col-sm-12\">\n                <div class=\"crew-title\">\n                    <h4>Crew</h4>\n                    <i (click)=\"print()\" class=\"fa fa-print ml10\" style=\"color:#4169e1;\"></i> \n                    <button *ngIf=\"editMode\" class=\"btn btn-sm btn-success ml10\" (click)=\"createCrew()\">New Crew</button>\n                    <div class=\"cost-block ml10  _bg\" *ngIf=\"us.user.isAdmin\">\n                         <div *ngIf=\"editMode\" class=\"cost-block__result\">  \n                            Total Budget:\n                            <input class=\"form-control w100px\" type=\"number\" placeholder=\"Budget\" [(ngModel)]=\"event.budget.total\" [ngModelOptions]=\"{standalone: true}\">\n                        </div>\n                        <div *ngIf=\"!editMode\" class=\"cost-block__result\">Total Budget: <span class=\"ml10 font-weight-bold\">  ${{event.budget.total||0}}</span></div>\n\n                        <div class=\"cost-block__title p10\">Actual Cost: <span class=\"font-weight-bold\">${{event|crewCost:null:us.now}}</span></div>\n\n                        <div class=\"cost-block__title p10\" *ngIf=\"(event.budget.total||0)-(event|crewCost:null:us.now)>=0\">Remaining: <span class=\"font-weight-bold\">${{(event.budget.total||0)-(event|crewCost:null:us.now)}}</span></div>\n                        <div class=\"cost-block__title p10\" *ngIf=\"(event.budget.total||0)-(event|crewCost:null:us.now)<0\">Need: <span class=\"font-weight-bold\">${{((event.budget.total||0)-(event|crewCost:null:us.now))*(-1)}}</span></div>\n                    </div>\n                </div>\n                <div *ngIf=\"!editMode\">\n                    <div class=\"row\" style=\"margin-top:15px;\">\n                        <div class=\"col-sm-12\" style=\"line-height:36px;\">\n                            <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n                                <ngb-panel *ngFor=\"let date of eventDates; let i=index;\" [id]=\"'ngb-panel-'+i\">\n                                    <ng-template ngbPanelTitle>\n                                        <span>{{date}}</span>\n\t\t\t\t\t\t\t\t\t\t<span><i class=\"fa fa-clock\"></i></span>\n                                        <span *ngIf=\"event?.times[date]\" class=\"ml-3 text-muted font-weight-bold\">{{event?.times[date]|time}}</span>\n                                        <span class=\"ml-2 mr-2 minus\"></span>\n                                        <span class=\"text-muted font-weight-bold\" *ngIf=\"event?.times['to'+date]\">{{event?.times['to'+date]|time}}</span>\n                                    </ng-template>\n                                    <ng-template ngbPanelContent>\n                                        <crew-drawer [(fullEvent)]=event [(event)]=\"dateCrew[date]\" [(positionConfigurationMap)]=\"positionConfigurationMap\" [date]=\"date\"></crew-drawer>\n                                        <div class=\"cost-block\" *ngIf=\"us.user.isAdmin\">\n                                            <div class=\"cost-block__title\">Cost:</div>\n                                            <div class=\"cost-block__result\">${{event|crewCost:date:us.now}}</div>\n                                        </div>\n                                    </ng-template>\n                                </ngb-panel>\n                            </ngb-accordion>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"editMode && eventDates && eventDates.length\">\n                    <app-crew-config [eventData]=\"event\" [event]=\"dateCrew\" [times]=\"event.times\" [datesList]=\"eventDates\" *ngIf=\"event?.times\" [(positionConfigurationMap)]=\"positionConfigurationMap\"></app-crew-config>\n                </div>\n            </div>\n            <!-- Inventory Information\n                    TODO: Make inventory and events tabular-->\n            <!-- <div class=\"col-sm-12\">\n                <h4 style=\"margin-left:14px;margin-top:20px;\">Inventory</h4>\n                <div *ngIf=\"!editMode\">\n                    <div class=\"row\" style=\"margin-top:15px;\">\n                        <div class=\"col-sm 11\" style=\"line-height:36px;\">\n                            <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n                                <ngb-panel *ngFor=\"let date of eventDates; let i=index;\" [id]=\"'ngb-panel-'+i\">\n                                    <ng-template ngbPanelTitle>{{date}}</ng-template>\n                                    <ng-template ngbPanelContent>\n                                        <inventory-drawer [(event)]=\"dateInventory[date]\"></inventory-drawer>\n                                    </ng-template>\n                                </ngb-panel>\n                            </ngb-accordion>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"editMode\">\n                    <app-inventory-configuration [event]=\"dateInventory\"></app-inventory-configuration>\n                </div>\n            </div> -->\n        </div>\n\n        <div class=\"row\" style=\"margin-top:25px;\">\n            <h4 *ngIf=\"event?.vehicles\" style=\"margin-left:14px;margin-top:20px;\">Vehicles</h4>\n        </div>\n\n        <!-- <div class=\"row\" style=\"margin-top:25px;\">\n            <div class=\"col-sm-12\">\n                <h4 style=\"margin-left:14px;\">Change Log</h4>\n            </div>\n        </div>\n        <div style=\"border-bottom: 1px solid black;padding:5px\" class=\"row\">\n            <div class=\"col-sm-2\">\n                <h6>User</h6>\n            </div>\n            <div class=\"col-sm-1\">\n                <h6>Section</h6>\n            </div>\n            <div class=\"col-sm-1\">\n                <h6>Field</h6>\n            </div>\n            <div class=\"col-sm-2\">\n                <h6>Old Value</h6>\n            </div>\n            <div class=\"col-sm-2\">\n                <h6>New Value</h6>\n            </div>\n            <div class=\"col-sm-2\">\n                <h6>Modified</h6>\n            </div>\n            <div class=\"col-sm-1\">\n                <h6>Action</h6>\n            </div>\n            <div class=\"col-sm-1\">\n                <h6>For Date</h6>\n            </div>\n        </div>\n        <div *ngFor=\"let change of event?.auditChanges\" class=\"row\" style=\"padding:5px\">\n            <div class=\"col-sm-2\">\n                {{change?.user.name}}\n            </div>\n            <div class=\"col-sm-1\">\n                {{change?.section ? change?.section : 'N/A'}}\n            </div>\n            <div class=\"col-sm-1\">\n                {{change?.field ? change?.field : 'N/A'}}\n            </div>\n            <div class=\"col-sm-2\">\n                {{change?.oldValue ? change?.oldValue : 'N/A'}}\n            </div>\n            <div class=\"col-sm-2\">\n                {{change?.newValue ? change?.newValue : 'N/A'}}\n            </div>\n            <div class=\"col-sm-2\">\n                {{formatDate(change?.time)}}\n                {{formatTime(change?.time)}}\n            </div>\n            <div class=\"col-sm-1\">\n                {{change?.action ? change?.action : 'N/A'}}\n            </div>\n            <div class=\"col-sm-1\">\n                {{change?.forDate ? change?.forDate : 'N/A'}}\n            </div>\n        </div> -->\n\n        <div class=\"row\" *ngIf=\"editMode\" style=\"justify-content: center; margin-top:20px;\">\n            <div style=\"justify-content: center;\">\n                <button class=\"btn-secondary\" (click)=\"toggleEdit()\">Cancel</button>\n                <button class=\"btn-primary\" id=\"btnSubmit\" (click)=\"onSubmit()\" [class._disabled]=\"!eventDetailsForm.valid || notDates()\"><i class=\"fa fa-save\"></i> Save Event</button>\n            </div>\n        </div>\n    </div>\n\n\n\n\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsInventoryConfigurationModalInventoryConfigurationModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isShown\" class=\"modal-overlay\">\n    <div class=\"modal-dialog\">\n        <div>\n            <i (click)=\"toggleShow()\" class=\"fa fa-close close-icon\"></i>\n        </div>\n        <h3 (click)=\"toggleShow()\" style=\"padding-top:20px;\">Add Crew for {{subTitle}}</h3>\n        <div class=\"row\" style=\"text-align:left;width:100%;background-color:#fff;padding:10px;margin:0 auto;background-color:black;color:white;\">\n            <div class=\"col-md-3\">\n                Name\n            </div>\n            <div class=\"col-md-3\">\n                Position\n            </div>\n            <div class=\"col-md-3\">\n                Phone Number\n            </div>\n        </div>\n        <div class=\"row\" *ngFor=\"let inventoryItem of inventory; let last = last; let even = even;\" style=\"text-align:left;border-bottom: 1px solid grey;width:100%;padding:10px;margin:0 auto;background-color:white;\"\n            [style.border-bottom]=\"last ? 'none' : '1px solid grey'\" [ngStyle]=\"even && {'background-color': '#e6e6e6'}\">\n            <div class=\"col-md-3\">\n                {{inventoryItem.name}}\n            </div>\n            <div class=\"col-md-3\">\n                <select style=\"width:100%;\" value=\"inventoryItem.position\">\n                    <option *ngFor=\"let positon of positionList\">{{position}}</option>\n                </select>\n            </div>\n            <div class=\"col-md-3\">\n                {{inventoryItem.quantity}}\n            </div>\n            <div (click)=\"deleteUser(inventoryItem, date)\" class=\"col-md-2\">\n                <i class=\"fa fa-trash\"></i>\n            </div>\n        </div>\n        <div class=\"row\" style=\"text-align:left;width:100%;padding:10px;margin:0 auto;\"\n            [style.border-bottom]=\"last ? 'none' : '1px solid grey'\" [ngStyle]=\"even && {'background-color': '#e6e6e6'}\">\n            <div (click)=\"deleteUser(inventoryItem, date)\" class=\"col-md-3\">\n                <button class=\"btn-add\"><i class=\"fa fa-plus\"></i> Add Inventory</button>\n            </div>\n        </div>\n        <div class=\"row\" style=\"justify-content: center;\">\n            <div style=\"justify-content: center;\">\n                <button class=\"btn-secondary\">Cancel</button>\n                <button class=\"btn-primary\"> Add Changes</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component.html":
  /*!**************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component.html ***!
    \**************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsInventoryConfigurationInventoryConfigurationRowInventoryConfigurationRowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" [ngStyle]=\"isEven && {'background-color': '#e6e6e6'}\">\n    <div class=\"col-md-3\">\n        {{inventory.name}}\n    </div>\n    <div class=\"col-md-2\">\n        {{inventory.quantity}}\n    </div>\n    <div class=\"col-md-2\">\n        {{inventory.assets}}\n    </div>\n    <div class=\"col-md-2\">\n        ${{inventory.rate * inventory.quantity}} (${{inventory.rate}}x1)\n    </div>\n    <div class=\"col-md-2\">\n        <i class=\"fa fa-trash\" (click)=\"handleClick()\"></i>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-configuration/inventory-configuration.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-configuration/inventory-configuration.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsInventoryConfigurationInventoryConfigurationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngb-tabset>\n    <ngb-tab *ngFor=\"let date of dates\" title={{date}}>\n        <ng-template ngbTabContent>\n            <div class=\"row\" style=\"width:100%;background-color:#fff;padding:10px;\">\n                <div class=\"col-md-3\">\n                    Name\n                </div>\n                <div class=\"col-md-2\">\n                    Quantity\n                </div>\n                <div class=\"col-md-2\">\n                    Asset Numbers\n                </div>\n                <div class=\"col-md-2\">\n                    Rate\n                </div>\n                <div class=\"col-2\">\n                    Actions\n                </div>\n            </div>\n            <div *ngFor=\"let inventory of event[date]; let last = last; let even = even;\"  style=\"border-bottom: 1px solid grey;width:100%;padding:10px;\" [style.border-bottom]=\"last ? 'none' : '1px solid grey'\" [ngStyle]=\"even && {'background-color': '#e6e6e6'}\">\n                <app-inventory-configuration-row [date]=\"date\" [inventory]=\"inventory\"\n                  [isLast]=\"last\" [isEven]=\"even\"></app-inventory-configuration-row>\n            </div>\n            <div style=\"margin-left: 10px;margin-top:5px;\"*ngIf=\"event[date].length < 1\">\n                No Inventory selected for this date.\n            </div>\n            <div [formGroup]=\"newInventoryForm\" *ngIf=\"isAdding\" class=\"row\" style=\"padding:10px;border-top: 1px solid grey;width:100%;padding:10px;\">\n                <div class=\"col-md-3\">\n                    <select formControlName=\"selectedInventoryId\" (change)=\"selectInventory()\">\n                        <option value=\"\">Select</option>\n                        <option *ngFor=\"let inventory of inventoryList\" [value]=\"inventory.value\">{{inventory.label}}</option>\n                    </select>\n                </div>\n                <div class=\"col-md-2\">\n                    <input type=\"number\" formControlName=\"selectedQuantity\" min=\"1\" max=\"50\" (change)=\"modifyAssetQuantityLimit()\" required>\n                </div>\n                <div class=\"col-md-2\">\n                    <ng-multiselect-dropdown\n                        formControlName=\"selectedAssets\"\n                        [data]=\"inventoryAssetList\"\n                        [settings]=\"dropdownSettings\"\n                    >\n                    </ng-multiselect-dropdown>\n                </div>\n                <div class=\"col-md-2\">\n                    <input style=\"width:100%;\" type=\"text\" placeholder=\"$Rate\" formControlName=\"inventoryRate\"/>\n                </div>\n                <div (click)=\"saveInventoryToDate(date)\" class=\"col-md-2\">\n                    <i class=\"fa fa-save\"></i>\n                </div>\n            </div>\n            <div>\n                <button *ngIf=\"!isAdding\" class=\"add-inventory\" (click)=\"addInventory()\"><i class=\"fa fa-plus\"></i></button>\n                <button *ngIf=\"isAdding\" class=\"close\" (click)=\"close()\"><i class=\"fa fa-close\"></i></button>\n            </div>\n        </ng-template>\n    </ngb-tab>\n</ngb-tabset>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-drawer/inventory-drawer.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-drawer/inventory-drawer.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsInventoryDrawerInventoryDrawerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" style=\"border-bottom: 1px solid black;\">\n    <div class=\"col-sm-3\">\n        <h6>Name</h6>\n    </div>\n    <div class=\"col-sm-2\">\n        <h6>Quantity</h6>\n    </div>\n    <div class=\"col-sm-2\">\n        <h6>Asset Numbers</h6>\n    </div>\n    <div class=\"col-sm-2\">\n        <h6>Rate</h6>\n    </div>\n</div>\n<div class=\"row\"  *ngFor=\"let inventoryItem of event; let last = last; let even = even;\" style=\"border-bottom: 1px solid grey;\" [style.border-bottom]=\"last ? 'none' : '1px solid grey'\" [ngStyle]=\"even && {'background-color': '#e6e6e6'}\">\n    <div class=\"col-sm-3\">\n        {{inventoryItem.name}}\n    </div>\n    <div class=\"col-sm-2\">\n        {{inventoryItem.quantity}}\n    </div>\n    <div class=\"col-sm-2\">\n        {{inventoryItem.assets}}\n    </div>\n    <div class=\"col-sm-2\">\n        ${{inventoryItem?.rate * inventoryItem.quantity}} ({{inventoryItem?.rate}}x1)\n    </div>\n</div>\n<div style=\"margin-left:10px; margin-top:10px;\" class=\"row\" *ngIf=\"event?.length < 1\">\n    No inventory selected for this date\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/position-approval/position-approval.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/position-approval/position-approval.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsPositionApprovalPositionApprovalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Positions Awaiting Approval</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\" [formGroup]=\"newCrewForm\">\n      <ngb-tabset>\n          <ngb-tab *ngFor=\"let dateForm of dateFormControls.controls;\n          let i = index;\"\n          title={{availableDates[i]}} >\n              <ng-template ngbTabContent [formGroup]=\"dateForm\">\n                  <div class=\"row\" style=\"padding-bottom:10px; padding-top:10px;\">\n                      <div class=\"col-md-2\">\n                        Position\n                      </div>\n                      <div class=\"col-md-2\">\n                        Call Time\n                      </div>\n                      <div class=\"col-md-4  \">\n                        Current Crew Member\n                      </div>\n                      <div class=\"col-md-4\">\n                        Applicants\n                      </div>\n                  </div>\n                  <div *ngFor=\"\n                    let applicantForm of dateForm.controls.jobForms.controls;\n                    let even = even;\n                    let j = index;\"\n                    style=\"border-bottom: 1px solid grey; padding-bottom:5px; padding-top:5px;\"\n                    [ngStyle]=\"even && {'background-color': '#e6e6e6'}\"\n                    class=\"row\">\n\n                      <div class=\"col-md-2\">\n                        {{availableJobs[availableDates[i]][j].position}}\n                      </div>\n                      <div class=\"col-md-2\">\n                        {{availableJobs[availableDates[i]][j].callTime}}\n                      </div>\n                      <div class=\"col-md-4  \">\n                        {{availableJobs[availableDates[i]][j].firstName}}  {{availableJobs[availableDates[i]][j].lastName}}\n                      </div>\n                      <div class=\"col-md-4\" [formGroup]=\"applicantForm\">\n                        <select\n                          formControlName=\"selectedApplicantId\">\n                          <option value=\"\">Select</option>\n\n                          <option *ngFor=\"let applicant of availableJobs[availableDates[i]][j].newApplicants\"\n                            [value]=\"applicant\">\n                            {{newApplicants[applicant].firstName}} {{newApplicants[applicant].lastName}}\n                          </option>\n\n                        </select>\n                      </div>\n\n                  </div>\n              </ng-template>\n          </ngb-tab>\n      </ngb-tabset>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"closeModal()\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"saveEvent()\" [disabled]=\"newCrewForm.invalid\">Save</button>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/print-crew-view/print-crew-view.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/print-crew-view/print-crew-view.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventDetailsPrintCrewViewPrintCrewViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h5 class=\"row\">\n        {{title}}\n    </h5>\n    <div class=\"row padding flex-nowrap\">\n        <div class=\"column-date header\">\n            <h6>Position</h6>\n        </div>\n        <div class=\"column header\">\n            <h6>Name</h6>\n        </div>\n        <div class=\"column-phone header\">\n            <h6>Phone</h6>\n        </div>\n        <div class=\"column-date header\" *ngFor=\"let date of dates; let i = index;\">\n            <h6 *ngIf=\"i < 5\">{{date}}</h6>\n        </div>\n    </div>\n    <div *ngFor=\"let member of crew\" style=\"padding:5px;\" class=\"row padding flex-nowrap\">\n        <div class=\"column-date crew-row\">\n            {{member?.position}}\n        </div>\n        <div class=\"column crew-row\">\n            {{member?.name}}\n        </div>\n        <div class=\"column-phone crew-row\">\n            {{member?.phoneNumber}}\n        </div>\n        <div *ngFor=\"let date of dates; let i = index;\" class=\"column-date crew-row\">\n            <span *ngIf=\"i < 5\">{{member[date] ? member[date] : 'N/A'}}</span>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/login/login.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/login/login.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGuestLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-wrapper\">\n  <div class=\"login-container\">\n    <!-- <h1 class=\"logo\">Cruu</h1> -->\n    <div class=\"login-logo\"><img src=\"assets/login-logo.png\" alt=\"login logo\"></div>\n    \n    <h6  *ngIf=\"!forgotPasswordActive\" class=\"login__link\">Login</h6>\n    <h6  *ngIf=\"forgotPasswordActive\" class=\"login__link\">Forgot Password?</h6>\n    <form [formGroup]=\"loginForm\">\n      <div class=\"field-spacing\">\n        <input class=\"input-field\" type=\"text\" placeholder=\"Email\" formControlName=\"username\">\n      </div>\n      <div>\n        <input *ngIf=\"!forgotPasswordActive\" class=\"input-field\" placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n      </div>\n      <div class=\"field-spacing\" *ngIf=\"errorMessage\">\n          <div class=\"error\">{{errorMessage}}</div>\n      </div>\n      <div class=\"field-spacing\">\n        <input type=\"submit\" class=\"btn-primary\" (click)=\"handleSubmitForm()\">\n      </div>\n      <!-- <div>\n        <a *ngIf=\"!forgotPasswordActive\" class=\"login__link\" routerLink=\"/sign-up\">Sign Up</a>\n      </div> -->\n      <div>\n        <a href=\"\" class=\"login__link\" (click)=\"toggleForm()\">{{toggleFormLabel}}</a>\n      </div>\n    </form>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/reset-password/reset-password.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/reset-password/reset-password.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGuestResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reset-container container\">\n  <h1  style=\"color:white;\">Reset Password</h1>\n  <form [formGroup]=\"resetForm\">\n    <div class=\"text-danger mb-2\" *ngIf=\"resetForm.hasError('notSame')\">\n        Passwords do not match\n    </div>\n    <div *ngIf=\"!errorMessage\" class=\"row justify-content-md-center mb-2\">\n      <div class=\"col-md-auto\">\n        <input class=\"input-field\" placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n      </div>\n    </div>\n    <div *ngIf=\"!errorMessage\" class=\"row justify-content-md-center mb-2\">\n      <div class=\"col-md-auto\">\n        <input class=\"input-field\" placeholder=\"Confirm Password\" type=\"password\" formControlName=\"confirmPassword\">\n      </div>\n    </div>\n    <div *ngIf=\"errorMessage\" class=\"row justify-content-md-center mb-2\">\n      <div class=\"col-md-auto\">\n        <input class=\"input-field\" placeholder=\"Email\" formControlName=\"email\">\n      </div>\n    </div>\n\n    <div class=\"mb-2\" *ngIf=\"errorMessage\">\n        <div class=\"text-danger\">{{errorMessage}}</div>\n    </div>\n\n    <div>\n      <button type=\"button\" class=\"btn btn-outline-light mr-2\" routerLink=\"/login\">Cancel</button>\n      <button *ngIf=\"!errorMessage\" type=\"submit\" class=\"btn btn-primary\"\n        [disabled]=\"resetForm.hasError('notSame')\" (click)=\"resetPassword()\">\n        Reset\n      </button>\n      <button *ngIf=\"errorMessage\" type=\"button\" class=\"btn btn-primary\"\n        (click)=\"sendResetLink()\">Send Link</button>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/sign-up/sign-up.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/sign-up/sign-up.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGuestSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sign-wrapper\">\n\t<div class=\"sign-up-container\">\n\t\t<div class=\"sign-logo\"><img src=\"assets/login-logo.png\" alt=\"sign logo\"></div>\n\t\t<h6 class=\"sign__link\">Sign Up</h6>\n\t\t<form [formGroup]=\"signUpForm\">\n\t\t\t<ngx-loading [show]=\"loading\"></ngx-loading>\n\t\t\t<div class=\"main-container\">\n\t\t\t\t<div class=\"content-wrapper\">\n\t\t\t\t\t<!-- ...more content here -->\n\t\t\t\t\t<div class=\"overflow-container\">\n\t\t\t\t\t\t<!-- ...and more content here -->\n\t\t\t\t\t\t<div class=\"overflow-content\">\n\t\t\t\t\t\t\t<div class=\"sign-fields\">\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-between\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" type=\"text\" placeholder=\"Email\" formControlName=\"email\" [class._error]=\"errorMessage && !signUpForm.controls.email.value\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"Password\" type=\"password\" formControlName=\"password\" [class._error]=\"errorMessage && !signUpForm.controls.password.value\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-between\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"First Name\" type=\"text\" formControlName=\"firstName\" [class._error]=\"errorMessage && !signUpForm.controls.firstName.value\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"Last Name\" type=\"text\" formControlName=\"lastName\" [class._error]=\"errorMessage && !signUpForm.controls.lastName.value\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-between\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"Organization Name\" type=\"text\" formControlName=\"organizationName\" [class._error]=\"errorMessage && !signUpForm.controls.organizationName.value\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"Phone Number\" type=\"text\" formControlName=\"phoneNumber\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-between\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"Address 1\" type=\"text\" formControlName=\"address\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"Address 2\" type=\"text\" formControlName=\"address2\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-between\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"City\" type=\"text\" formControlName=\"city\"> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"State\" type=\"text\" formControlName=\"state\">  \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-between\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"Zip\" type=\"number\" formControlName=\"zip\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"Emergency Contact Name\" type=\"text\" formControlName=\"emergencyContactName\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-between\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-field\" placeholder=\"Emergency Contact Phone\" type=\"text\" formControlName=\"emergencyContact\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"sign-select\"  *ngIf=\"sendToken && organizationPositions.length\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown formControlName=\"selectedPositions\" [data]=\"organizationPositions\" [settings]=\"dropdownSettings\" [class._error]=\"errorMessage && !signUpForm.controls.selectedPositions.value\"></ng-multiselect-dropdown>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"field-spacing\" *ngIf=\"errorMessage\">\n\t\t\t\t\t\t\t\t\t<div class=\"error\">{{errorMessage}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"field-spacing\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn-primary\"  [disabled]=\"disableSignUp\" (click)=\"signUp()\">Sign Up</button>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<a class=\"sign__link\" routerLink=\"/login\">Login</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/job/list/list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/job/list/list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJobListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"padding-left:10px\">\n\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t<h2>Open Jobs</h2>\n\t\t<!-- <button *ngIf=\"us.user.isAdmin\" routerLink=\"/job/new\" class=\"btn-primary\" style=\"right: 17px;position: absolute;\">\n            <i class=\"fa fa-plus\"></i>\n            <span>Add Job</span>\n        </button> -->\n\t</div>\t\n\t<table class=\"table openJobs\">\n\t\t<thead class=\"thead-dark\">\n\t\t\t<tr style=\"padding:10px;color:#e6e6e6;\" [ngStyle]=\"{'background-color': os.org?.primaryColor != null ? os.org.primaryColor : '#222222' }\">\n\t\t\t\t<th class=\"openJobs__status\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Status</th>\n\t\t\t\t<th class=\"openJobs__title\" scope=\"col\">Title</th>\n\t\t\t\t<th class=\"openJobs__venue\" scope=\"col\">Venue</th>\n\t\t\t\t<th class=\"openJobs__pos\" scope=\"col\">Position</th>\n\t\t\t\t<th class=\"openJobs__rate\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Rate</th>\n\t\t\t\t<th class=\"openJobs__rate\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Fixed</th>\n\t\t\t\t<th class=\"openJobs__rate\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Extra</th>\n\t\t\t\t<th class=\"openJobs__date\" scope=\"col\">Date</th>\n\t\t\t\t<th class=\"openJobs__time\" scope=\"col\">Call Time</th>\n\t\t\t\t<th class=\"openJobs__applied\" scope=\"col\" *ngIf=\"us.user.isAdmin\">Applied</th>\n\t\t\t\t<th class=\"openJobs__actions\" scope=\"col\">Actions</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<ng-container *ngFor=\"let job of js.myjobs; let even = even; let i = index;\">\n\t\t\t\t<tr *ngIf=\"es._events[job.event]\" style=\"padding:10px;\" [ngStyle]=\"even && {'background-color': '#e6e6e6'}\">\n\t\t\t\t\t<td class=\"openJobs__status w100px\" *ngIf=\"us.user.isAdmin\">\n\n\t\t\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"!job.accepted && !job.declined && !job.assigned\">\n\t\t\t\t\t\t\t<div class=\"status _green\"></div>\n\t\t\t\t\t\t\t<div class=\"c-green\">Unassigned</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"!job.accepted && !job.declined && job.assigned\">\n\t\t\t\t\t\t\t<div class=\"status _red\"><i class=\"fa fa-times\"></i></div>\n\t\t\t\t\t\t\t<div class=\"c-red\">Requested</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"job.accepted\">\n\t\t\t\t\t\t\t<div class=\"status _blue\"><i class=\"fa fa-check\"></i></div>\n\t\t\t\t\t\t\t<div class=\"c-blue\">Accepted</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"job.declined\">\n\t\t\t\t\t\t\t<div class=\"status _blue\"><i class=\"fa fa-check\"></i></div>\n\t\t\t\t\t\t\t<div class=\"c-blue\">Denied</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__title\">\n\t\t\t\t\t\t{{es._events[job.event]?.title}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__venue\">\n\t\t\t\t\t\t{{es._events[job.event]?.location?.venueName}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__pos\">\n\t\t\t\t\t\t{{job.position}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__rate\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t\t\t{{job.rate}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__rate\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t\t\t{{job.fixed}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__rate\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t\t\t{{job.extra}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__date\" *ngIf=\"job.day\">\n\t\t\t\t\t\t{{job.day}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__date\" *ngIf=\"!job.day\">\n\t\t\t\t\t\t{{job.date?.year}}{{job.date&&'/'||''}}{{job.date?.month}}{{job.date&&'/'||''}}{{job.date?.day}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__time\">\n\t\t\t\t\t\t{{job.times.from|time}} - {{job.times.to|time}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__applied\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t\t\t<div *ngIf=\"!(job.apply|each:js.now).length\">No One Has Applied</div>\n\t\t\t\t\t\t<div class=\"applied-col\" *ngFor=\"let member of job.apply|each:js.now\">\n\t\t\t\t\t\t\t<span class=\"applied-col__text\">{{us._users[member]?.firstName}}\n\t\t\t\t\t\t\t\t{{us._users[member]?.lastName}}</span>\n\t\t\t\t\t\t\t<button class=\"applied-col__btn _approve\" *ngIf=\"job.assigned != member\"\n\t\t\t\t\t\t\t\t(click)=\"job.assigned = member; js.save(job);\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t\t\t\t<button class=\"applied-col__btn _remove\" *ngIf=\"job.assigned == member\"\n\t\t\t\t\t\t\t\t(click)=\"job.assigned = null; js.save(job);\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"openJobs__actions\">\n\t\t\t\t\t\t<div class=\"popup-more\">\n\t\t\t\t\t\t\t<i (click)=\"dropdown=i;\" class=\"fa fa-ellipsis-v\"></i>\n\t\t\t\t\t\t\t<div *ngIf=\"dropdown==i\" class=\"popup-body\" (mouseleave)=\"dropdown=null\">\n\t\t\t\t\t\t\t\t<!-- User: apply for job  -->\n\t\t\t\t\t\t\t\t<label for=\"applyJob\" class=\"checkbox actions-admin _hover\">\n\t\t\t\t\t\t\t\t\t<button *ngIf=\"!job.apply[us.user._id]\" class=\"popup-body__btn _input\">Apply\n\t\t\t\t\t\t\t\t\t\tJob</button>\n\t\t\t\t\t\t\t\t\t<button *ngIf=\"job.apply[us.user._id]\" class=\"popup-body__btn _input\">Decline\n\t\t\t\t\t\t\t\t\t\tApply</button>\n\t\t\t\t\t\t\t\t\t<input id=\"applyJob\" type=\"checkbox\" [(ngModel)]=\"job.apply[us.user._id]\"\n\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"js.apply({_id: job._id, apply: job.apply[us.user._id]});\">\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<!-- Admin: Active or Deactive job -->\n\t\t\t\t\t\t\t\t<!-- <label for=\"activeJob\" class=\"checkbox _hover\" *ngIf=\"us.user.isAdmin\">\n\t                            <button *ngIf=\"job.active\" class=\"popup-body__btn _input\">Active</button>\n\t                            <button *ngIf=\"!job.active\" class=\"popup-body__btn _input\">Deactive</button>\n\t                            <input id=\"activeJob\" type=\"checkbox\" [(ngModel)]=\"job.active\" (ngModelChange)=\"js.save(job);\">\n\t                        </label> -->\n\t\t\t\t\t\t\t\t<button class=\"popup-body__btn _hover\" (click)=\"view(job)\">Look all table</button>\n\t\t\t\t\t\t\t\t<button class=\"popup-body__btn _hover\" *ngIf=\"us.user.isAdmin\" (click)=\"edit(job);\">Edit</button>\n\t\t\t\t\t\t\t\t<!-- <button class=\"popup-body__btn _hover\" (click)=\"js.delete(job);\">Delete</button> -->\n\t\t\t\t\t\t\t\t<button class=\"popup-body__btn _hover\" *ngIf=\"us.user.isAdmin\" (click)=\"job.active=false; js.save(job);\">Delete</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-container>\n\t\t</tbody>\n\t</table>\n\n\t\n\t<!-- old code -->\n\t<!-- <div class=\"row\" style=\"padding:10px;color:#e6e6e6;\"\n\t\t[ngStyle]=\"{'background-color': os.org?.primaryColor != null ? os.org.primaryColor : '#222222' }\">\n\t\t<div class=\"w100px\">Status</div>\n\t\t<div class=\"col-sm-2\">Title</div>\n\t\t<div class=\"col-sm-1\">Venue</div>\n\t\t<div class=\"col-sm-1\">Position</div>\n\n\t\t<div class=\"col-sm-1\">Rate</div>\n\n\n\t\t<div class=\"col-sm-1\">Date</div>\n\t\t<div class=\"col-sm-2\">Call Time</div>\n\t\t<div class=\"col-sm-2\" *ngIf=\"us?.user?.isAdmin\">Applied</div>\n\t\t<div class=\"col-sm-1\">Actions</div>\n\t</div>\n\t<div style=\"padding:10px;\" *ngIf=\"!js.myjobs.length\">No Open Jobs</div>\n\t<ng-container>\n\t\t<div class=\"row align-items-center\" *ngFor=\"let job of js.myjobs; let even = even; let i = index;\"\n\t\t\tstyle=\"padding:10px;\" [ngStyle]=\"even && {'background-color': '#e6e6e6'}\">\n\t\t\t<div class=\"w100px\">\n\n\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"!job.accepted && !job.declined && !job.assigned\">\n\t\t\t\t\t<div class=\"status _green\"></div>\n\t\t\t\t\t<div class=\"c-green\">Unassigned</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"!job.accepted && !job.declined && job.assigned\">\n\t\t\t\t\t<div class=\"status _red\"><i class=\"fa fa-times\"></i></div>\n\t\t\t\t\t<div class=\"c-red\">Requested</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"job.accepted\">\n\t\t\t\t\t<div class=\"status _blue\"><i class=\"fa fa-check\"></i></div>\n\t\t\t\t\t<div class=\"c-blue\">Accepted</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"d-flex align-items-center\" *ngIf=\"job.declined\">\n\t\t\t\t\t<div class=\"status _blue\"><i class=\"fa fa-check\"></i></div>\n\t\t\t\t\t<div class=\"c-blue\">Denied</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-2\">{{es._events[job.event]?.title}}</div>\n\t\t\t<div class=\"col-sm-1\">{{es._events[job.event]?.location?.venueName}}</div>\n\n\t\t\t<div class=\"col-sm-1\">{{job.position}}</div>\n\n\t\t\t<div class=\"col-sm-1\">{{job.rate}}</div>\n\t\t\t<div class=\"col-sm-1\">{{job.fixed}}</div>\n\t\t\t\t<div class=\"col-sm-1\">{{job.extra}}</div>\n\n\t\t\t<div class=\"col-sm-1\" *ngIf=\"job.day\">{{job.day}}</div>\n\t\t\t<div class=\"col-sm-1\" *ngIf=\"!job.day\">\n\t\t\t\t{{job.date?.year}}{{job.date&&'/'||''}}{{job.date?.month}}{{job.date&&'/'||''}}{{job.date?.day}}</div>\n\n\n\n\t\t\t<div class=\"col-sm-2\">{{job.times.from|time}} - {{job.times.to|time}}</div>\n\t\t\t<div class=\"col-sm-2\" *ngIf=\"us.user.isAdmin\">\n\t\t\t\t<div *ngIf=\"!(job.apply|each:js.now).length\">No One Has Applied</div>\n\t\t\t\t<div class=\"applied-col\" *ngFor=\"let member of job.apply|each:js.now\">\n\t\t\t\t\t<span class=\"applied-col__text\">{{us._users[member]?.firstName}}\n\t\t\t\t\t\t{{us._users[member]?.lastName}}</span>\n\t\t\t\t\t<button class=\"applied-col__btn _approve\" *ngIf=\"job.assigned != member\"\n\t\t\t\t\t\t(click)=\"job.assigned = member; js.save(job);\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t\t<button class=\"applied-col__btn _remove\" *ngIf=\"job.assigned == member\"\n\t\t\t\t\t\t(click)=\"job.assigned = null; js.save(job);\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-1 d-flex justify-content-center\">\n\t\t\t\t<div class=\"popup-more\">\n\t\t\t\t\t<i (click)=\"dropdown=i;\" class=\"fa fa-ellipsis-v\"></i>\n\t\t\t\t\t<div *ngIf=\"dropdown==i\" class=\"popup-body\" (mouseleave)=\"dropdown=null\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<label for=\"applyJob\" class=\"checkbox actions-admin _hover\">\n\t\t\t\t\t\t\t<button *ngIf=\"!job.apply[us.user._id]\" class=\"popup-body__btn _input\">Apply Job</button>\n\t\t\t\t\t\t\t<button *ngIf=\"job.apply[us.user._id]\" class=\"popup-body__btn _input\">Decline Apply</button>\n\t\t\t\t\t\t\t<input id=\"applyJob\" type=\"checkbox\" [(ngModel)]=\"job.apply[us.user._id]\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"js.apply({_id: job._id, apply: job.apply[us.user._id]});\">\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button class=\"popup-body__btn _hover\" *ngIf=\"us.user.isAdmin\" (click)=\"edit(job);\">Edit</button>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button class=\"popup-body__btn _hover\" *ngIf=\"us.user.isAdmin\"\n\t\t\t\t\t\t\t(click)=\"job.active=false; js.save(job);\">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</ng-container> -->\n\t\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/job/profile/profile.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/job/profile/profile.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJobProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"submit()\">\n\t<div class=\"d-flex job-block\">\n\t\t<div class=\"field-box\">\n\t\t\t<span>Title</span>\n\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"job.title\" name=\"title\" placeholder=\"Title\">\n\t\t\t<span>Rate</span>\n\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"job.rate\" name=\"rate\" placeholder=\"Rate\">\n\t\t\t<span>Venue</span>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"job.venueName\" name=\"venueName\">\n\t\t\t\t<option *ngFor=\"let location of os.org.locations\" [value]=\"location.venueName\">{{location.venueName}}</option>\n\t\t\t</select>\n\t\t\t<span>Position</span>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"job.position\" name=\"position\">\n\t\t\t\t<option *ngFor=\"let location of ps._positions[os.org._id]\" [value]=\"location.value\">{{location.label}}</option>\n\t\t\t</select>\n\t\t\t<div class=\"d-flex field-box__timeblock\">\n\t\t\t\t<div class=\"field-box__timeCol\">\n\t\t\t\t\t<span>From</span>\n\t\t\t\t\t<time [value]=\"job.times.from\" (update)=\"job.times.from=$event;\"></time>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field-box__timeCol\">\n\t\t\t\t\t<span>To</span>\n\t\t\t\t\t<time [value]=\"job.times.to\" (update)=\"job.times.to=$event;\"></time>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<ngb-datepicker #dp ngModel name=\"Date Picker\" [displayMonths]=\"1\" [navigation]=\"'arrows'\" [startDate]=\"job.date\" [firstDayOfWeek]=\"7\" [dayTemplate]=\"t\" outsideDays=\"collapsed\" style=\"border:none; border-radius:0\"></ngb-datepicker>\n\t\t<ng-template #t let-date=\"date\" let-currentWeek=\"week\" let-focused=\"focused\" let-currentMonth=\"currentMonth\">\n\t\t    <span class=\"custom-day\" ngClass=\"{'calselected': hoveredDate == date}\" (click)=\"job.date=date;\" [class.focused]=\"focused\" (mouseenter)=\"hoveredDate = date\" (mouseleave)=\"hoveredDate = null\" [class.faded]=\"isInside(date)\" *ngIf=\"date\">{{date.day}}</span>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"job-btn\">\n\t\t<button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!job.title||!job.date||!job.times.from||!job.times.to||!job.position\">{{job._id&&'Save'||'Create'}}</button>\n\t</div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/org/settings/settings.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/org/settings/settings.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrgSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h3>Organization Settings</h3>\n\n    <div class=\"container-fluid\">\n        <ngx-loading [show]=\"loading\"></ngx-loading>\n\n\t\t<ul class=\"nav nav-tabs mb-4\">\n\t\t\t<li class=\"nav-item\" (click)=\"tab=1; hash.set('tab', 1);\">\n\t\t\t\t<a class=\"nav-link\" [class.active]=\"tab==1\">Members</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" (click)=\"tab=2; hash.set('tab', 2);\">\n\t\t\t\t<a class=\"nav-link\" [class.active]=\"tab==2\">Positions</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" (click)=\"tab=3; hash.set('tab', 3);\">\n\t\t\t\t<a class=\"nav-link\" [class.active]=\"tab==3\">Categories</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" (click)=\"tab=4; hash.set('tab', 4);\">\n\t\t\t\t<a class=\"nav-link\" [class.active]=\"tab==4\">Labels</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" (click)=\"tab=5; hash.set('tab', 5);\">\n\t\t\t\t<a class=\"nav-link\" [class.active]=\"tab==5\">Venues</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" (click)=\"tab=6; hash.set('tab', 6);\">\n\t\t\t\t<a class=\"nav-link\" [class.active]=\"tab==6\">Customize</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<ng-container *ngIf=\"tab==1\">\n\t        <div id=\"newMemberContainer\">\n\t            <div class=\"row\">\n\t                <h5 style=\"margin-top:5px;\" class=\"mr-2\">Members</h5>\n\n\t                <button *ngIf=\"!isAddingNewMember\" type=\"button\" class=\"btn btn-success\" (click)=\"toggleNewMemberVisibility()\">\n\t                    <i class=\"fa fa-plus\"></i> Add New Member\n\t                </button>\n\n\t                <button *ngIf=\"!show_new_group\" type=\"button\" class=\"btn btn-success ml-2\" (click)=\"show_new_group=true; group={};\">\n\t                    <i class=\"fa fa-plus\"></i> Edit Groups\n\t                </button>\n\t            </div>\n\n\t            <div class=\"row\" *ngIf=\"addingNewMemberErrorMessage\">\n\t                <div class=\"mr-2 text-danger\">{{addingNewMemberErrorMessage}}</div>\n\t            </div>\n\n\t            <div class=\"row mt-2\" [formGroup]=\"newMemberForm\">\n\t                <input *ngIf=\"isAddingNewMember\" type=\"email\" placeholder=\"  New Member's Email\" formControlName=\"email\" class=\"mr-2\">\n\n\t                <button *ngIf=\"isAddingNewMember\" class=\"btn btn-dark mr-2\" (click)=\"toggleNewMemberVisibility()\">Cancel</button>\n\n\t                <button *ngIf=\"isAddingNewMember\" type=\"button\" class=\"btn btn-success\"\n\t                    (click)=\"sendLinkToNewMember()\" [disabled]=\"newMemberForm.invalid\">\n\t                    <i class=\"fa fa-plus\"></i> Send Link\n\t                </button>\n\t            </div>\n\n\t\t\t\t<div *ngIf=\"show_new_group\">\n\t\t\t\t\t<div *ngFor=\"let group of gs.groups\" class=\"mt-2\">\n\t\t\t\t\t\t<span>{{group.name}}</span>\n\t\t\t\t\t\t<button class=\"btn btn-dark ml-2\" (click)=\"gs.delete(group); show_new_group=false;\">Delete</button>\n\t\t\t\t\t\t<button class=\"btn btn-success ml-2\" (click)=\"add_users(group); show_new_group=false;\">Add Users</button>\n\t\t\t\t\t</div>\n\t\t            <form class=\"row mt-2\" (ngSubmit)=\"create_list();\">\n\t\t                <input type=\"text\" placeholder=\"  New Group Name\" name=\"name\" [(ngModel)]=\"group.name\" class=\"mr-2\">\n\n\t\t                <button class=\"btn btn-dark mr-2\" (click)=\"show_new_group=false;\">Cancel</button>\n\n\t\t                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!group.name\">\n\t\t                    <i class=\"fa fa-plus\"></i> Create Group\n\t\t                </button>\n\t\t            </form>\n\t\t\t\t</div>\n\n\t\t\t\t<form class=\"row\" style=\"margin-top: 20px;\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"search\" name=\"search\">\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t            <div style=\"margin-top: 20px;\" class=\"row\">\n\t                <div class=\"col-md-6 col-sm-12 col-12\">\n\t                    <h3 class=\"col-sm-12 col-8\">Current Members</h3>\n\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">#</th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\"><input type=\"checkbox\" [(ngModel)]=\"select_current\" (change)=\"select(select_current, us.users_current)\"></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Name</th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Email</th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"deleteAll(us.users_current)\"><i class=\"fa fa-trash\"></i></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let user of us.users_current|search:search:'lastName firstName'; let i = index\">\n\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{i+1}}</th>\n\t\t\t\t\t\t\t\t\t<td><input type=\"checkbox\" [(ngModel)]=\"user._selected\"></td>\n\t\t\t\t\t\t\t\t\t<td class=\"link\" routerLink=\"/profile\" [queryParams]=\"{userId: user._id}\">{{user.lastName}}<span>, </span>{{user.firstName}}</td>\n\t\t\t\t\t\t\t\t\t<td (click)=\"user._selected=!user._selected\">{{user.email}}</td>\n\t\t\t\t\t\t\t\t\t<td><i (click)=\"delete(user)\" *ngIf=\"!user.isAdmin\" class=\"fa fa-trash\"></i></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t                </div>\n\t                <div class=\"col-md-6 col-sm-12 col-12\">\n\t                    <h3 class=\"col-sm-12\">Pending Members</h3>\n\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">#</th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\"><input type=\"checkbox\" [(ngModel)]=\"select_pending\" (change)=\"select(select_pending, us.users_pending)\"></th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Email</th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\"><i class=\"fa fa-trash\" (click)=\"deleteAll(us.users_pending)\" *ngIf=\"hasSelected(us.users_pending)\"></i></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let user of us.users_pending|search:search:'lastName firstName'; let i = index\">\n\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{i+1}}</th>\n\t\t\t\t\t\t\t\t\t<td><input type=\"checkbox\" [(ngModel)]=\"user._selected\"></td>\n\t\t\t\t\t\t\t\t\t<td (click)=\"user._selected=!user._selected\">{{user.email}}</td>\n\t\t\t\t\t\t\t\t\t<td><i (click)=\"delete(user)\" *ngIf=\"!user.isAdmin\" class=\"fa fa-trash\"></i></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t                </div>\n\t            </div>\n\n\t            <div class=\"row\">\n\t                <div class=\"col-md-6 col-sm-12 col-12\" *ngFor=\"let group of gs.groups\">\n\t                  <div class=\"row justify-content-between mb10\">\n\t                  \t  <h3 class=\"col-8\">{{group.name}}</h3>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<ng-multiselect-dropdown [(ngModel)]=\"group.labels\" (onSelect)=\"gs.update(group);\" [data]=\"ls.labels\" [settings]=\"dropdownSettings\" *ngIf=\"ls.labels?.length\"></ng-multiselect-dropdown>\n\t\t\t\t\t\t\t</div>\n\t                  </div>\n\n\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"check\" [(ngModel)]=\"lists_selected[group._id]\" (ngModelChange)=\"select_group(group)\">\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Name</th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Email</th>\n\t\t\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"delete_group(group);\"><i class=\"fa fa-trash\"></i></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let userId of group.users; let i = index\">\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"check\" [(ngModel)]=\"lists_selected[group._id+'_'+userId]\">\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"link\" routerLink=\"/profile\" [queryParams]=\"{userId: us.user._id}\">{{us._users[userId]?.lastName}}<span *ngIf=\"us._users[userId]?.lastName\">, </span>{{us._users[userId]?.firstName}}</td>\n\t\t\t\t\t\t\t\t\t<td (click)=\"lists_selected[group._id+'_'+userId]=!lists_selected[group._id+'_'+userId]\">{{us._users[userId]?.email}}</td>\n\t\t\t\t\t\t\t\t\t<td (click)=\"group.users.splice(i, 1); group._users[userId]=false; gs.update(group);\"><i class=\"fa fa-trash\"></i></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t                </div>\n\t            </div>\n\t        </div>\n\t\t</ng-container>\n\t\t<ng-container *ngIf=\"tab==2\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 col-sm-12 col-12 m-0\">\n\t\t\t\t\t<perfect-scrollbar class=\"positions\" style=\"max-height: calc(100vh - 250px);\" [config]=\"config\">\n\t\t\t\t\t\t<div class=\"row\" style=\"width:400px; margin-bottom:10px;\">\n\t\t\t\t\t\t\t<h5 style=\"margin-top:5px;\" class=\"mr-2\">Positions</h5>\n\t\t\t\t\t\t\t<button *ngIf=\"!isAdding\" class=\"btn btn-success\" (click)=\"toggleAddPosition()\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\"></i> Add Position</button>\n\t\t\t\t\t\t\t<button *ngIf=\"isAdding\" class=\"btn btn-warning\" (click)=\"toggleAddPosition()\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-undo\"></i> Undo</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isAdding\" [formGroup]=\"newPositionForm\" class=\"row input-group mb-3\">\n\t\t\t\t\t\t\t<input placeholder=\"Code\" style=\"max-width:100px;\" class=\"form-control\" formControlName=\"newPositionValue\">\n\t\t\t\t\t\t\t<input placeholder=\"Position Name\" style=\"max-width:200px;\" class=\"form-control mr-2\" formControlName=\"newPositionLabel\">\n\t\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"addPosition()\" style=\"width:40px\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-save\"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- positions -->\n\t\t\t\t\t\t<div [formGroup]=\"configForm\" *ngFor=\"let position of positions\" class=\"row field-spacing\">\n\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t<label style=\"width:100px;\" class=\"input-label\" (click)=\"position_selected=position.value;\">{{position.value}}:</label>\n\t\t\t\t\t\t\t\t<input style=\"max-width:200px;justify-content: right;clear:both;\" type=\"text\" [formControlName]=\"position.value\" class=\"form-control\" (ngModelChange)=\"update_config()\">\n\t\t\t\t\t\t\t\t<i style=\"padding:10px;color:red;\" class=\"fa fa-trash\" (click)=\"removePosition(position)\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</perfect-scrollbar>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-sm-12 col-12 m-0\" >\n\t\t\t\t\t<perfect-scrollbar class=\"positions_selected\" style=\"max-height: calc(100vh - 250px);\" [config]=\"config\">\n\t\t\t\t\t\t<ul class=\"nav nav-tabs mb-4\">\n\t\t\t\t\t\t\t<li class=\"nav-item\" *ngFor=\"let position of positions\" (click)=\"position_selected=position.value;position_selected_label=position.label;\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link\" [class.active]=\"position_selected==position.value\">{{position.value}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div *ngIf=\"position_selected\">\n                            <h3 class=\"col-sm-12\">{{position_selected}} : {{position_selected_label}}</h3>\n\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th scope=\"col\">Name</th>\n\t\t\t\t\t\t\t\t\t\t<th scope=\"col\">Email</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngFor=\"let user of us.org_pos[os.org._id+position_selected]; let i = index\">\n\t\t\t\t\t\t\t\t\t\t<td>{{user.lastName}}<span>, </span>{{user.firstName}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{user.email}}</td>\n                                    </tr> -->\n                                    <tr *ngFor=\"let user of postionBasedUsers[position_selected]\">\n                                        <td>{{user.lastName}}<span>, </span>{{user.firstName}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{user.email}}</td>\n                                    </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</perfect-scrollbar>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngIf=\"tab==3\">\n\t        <div class=\"row\" style=\"width:400px; margin-bottom:10px;\">\n\t            <h5 style=\"margin-top:5px;\" class=\"mr-2\">Categories</h5>\n\t            <button *ngIf=\"!show_new_category\" class=\"btn btn-success\" (click)=\"show_new_category=true;\">\n\t                <i class=\"fa fa-plus\"></i> Add</button>\n\t            <button *ngIf=\"show_new_category\" class=\"btn btn-warning\" (click)=\"show_new_category=false; new_category={};\">\n\t                <i class=\"fa fa-undo\"></i> Undo</button>\n\t        </div>\n\t        <form *ngIf=\"show_new_category\" class=\"row field-spacing col-xs-6 col-sm-5 col-md-4 col-lg-3 input-group mb-3\" (ngSubmit)=\"cs.create(new_category); new_category={};\">\n\t            <input type=\"text\" name=\"name\" placeholder=\"Name\" class=\"form-control\" [(ngModel)]=\"new_category.name\">\n\t            <button class=\"btn btn-success ml-2\" type=\"submit\" [disabled]=\"!new_category.name\"><i class=\"fa fa-save\"></i></button>\n\t        </form>\n\t        <div dragula=\"Categories\" [(dragulaModel)]=\"cs.categories\" (dragulaModelChange)=\"update_categories_order()\">\n\t\t        <div *ngFor=\"let category of cs.categories; let i = index;\" class=\"categ-row row field-spacing col-xs-6 col-sm-5 col-md-4 col-lg-3 input-group mb-3\">\n\t\t        \t<i class=\"fa fa-arrows-alt\"></i>\n\t\t            <input name=\"name{{i}}\" type=\"text\" placeholder=\"Name\" class=\"form-control\" [(ngModel)]=\"category.name\" (ngModelChange)=\"cs.update(category)\">\n\t\t            <button class=\"btn btn-danger ml-2\" (click)=\"cs.delete(category)\"><i class=\"fa fa-trash\"></i></button>\n\t\t        </div>\n\t        </div>\n\t\t</ng-container>\n\t\t<ng-container *ngIf=\"tab==4\">\n\t        <div class=\"row\" style=\"width:400px; margin-bottom:10px;\">\n\t            <h5 style=\"margin-top:5px;\" class=\"mr-2\">Labels</h5>\n\t            <button *ngIf=\"!show_new_label\" class=\"btn btn-success\" (click)=\"show_new_label=true;\">\n\t                <i class=\"fa fa-plus\"></i> Add</button>\n\t            <button *ngIf=\"show_new_label\" class=\"btn btn-warning\" (click)=\"show_new_label=false; new_label={};\">\n\t                <i class=\"fa fa-undo\"></i> Undo</button>\n\t        </div>\n\t        <form *ngIf=\"show_new_label\" class=\"row field-spacing col-xs-12 col-sm-10 col-md-8 col-lg-6 input-group mb-3\" (ngSubmit)=\"ls.create(new_label); new_label={}; show_new_label=false;\">\n\t            <input type=\"text\" name=\"name\" placeholder=\"Name\" class=\"form-control\" [(ngModel)]=\"new_label.name\">\n\t            <input type=\"color\" name=\"color\" placeholder=\"Color\" class=\"form-control\" [(ngModel)]=\"new_label.color\">\n\t            <select name=\"category\" class=\"form-control\" placeholder=\"Category\" [(ngModel)]=\"new_label.category\">\n\t              <option [value]=\"category.name\" *ngFor=\"let category of cs.categories\">{{category.name}}</option>\n\t            </select>\n\t            <button class=\"btn btn-success ml-2\" type=\"submit\" [disabled]=\"!new_label.name||!new_label.color||!new_label.category\"><i class=\"fa fa-save\"></i></button>\n\t        </form>\n\t        <div *ngFor=\"let label of ls.labels; let i = index;\" class=\"row field-spacing col-xs-12 col-sm-10 col-md-8 col-lg-6 input-group mb-3\">\n\t            <input name=\"name{{i}}\" type=\"text\" placeholder=\"Name\" class=\"form-control\" [(ngModel)]=\"label.name\" (ngModelChange)=\"ls.update(label)\">\n\t            <input name=\"color{{i}}\" type=\"color\" placeholder=\"Color\" class=\"form-control\" [(ngModel)]=\"label.color\" (ngModelChange)=\"ls.update(label)\">\n\t            <select name=\"category{{i}}\" class=\"form-control\" placeholder=\"Category\" [(ngModel)]=\"label.category\" (ngModelChange)=\"ls.update(label)\">\n\t              <option [value]=\"category.name\" *ngFor=\"let category of cs.categories\">{{category.name}}</option>\n\t            </select>\n\t            <button class=\"btn btn-danger ml-2\" (click)=\"ls.delete(label)\"><i class=\"fa fa-trash\"></i></button>\n\t        </div>\n\t\t</ng-container>\n\t\t<ng-container *ngIf=\"tab==5\">\n\t        <div id=\"venueContainer\" class=\"mb-3\">\n\t            <div class=\"row\">\n\t                <h5>Venues</h5>\n                    <button *ngIf=\"!isEditingLocation\" type=\"button\" class=\"btn btn-success\" (click)=\"createNewLocation()\">\n                        <i class=\"fa fa-plus\"></i> Add New Location\n                    </button>\n                    <button *ngIf=\"isEditingLocation\" class=\"btn btn-dark\" (click)=\"cancelEditingLocation()\">Cancel</button>\n                    <button type=\"button\" *ngIf=\"isEditingLocation\" class=\"btn btn-success\" (click)=\"create_location(); new_location={}; isEditingLocation=false;\" [disabled]=\"!new_location.venueName||!new_location.address||!new_location.city||!new_location.state||!new_location.zipCode\">\n                        <i class=\"fa fa-plus\"></i> Create Location\n                    </button>\n\t            </div>\n\t            <div *ngIf=\"isEditingLocation\">\n                \t<div class=\"row\">\n                        <div class=\"col-sm-1\">Venue Name: </div>\n                        <input type=\"text\" class=\"col-sm-4 input-field\" [(ngModel)]=\"new_location.venueName\">\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-1\">Address: </div>\n                        <input type=\"text\" class=\"col-sm-4 input-field\" [(ngModel)]=\"new_location.address\">\n                        <div class=\"col-sm-1\">Address 2: </div>\n                        <input type=\"text\" class=\"col-sm-4 input-field\" [(ngModel)]=\"new_location.address2\">\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-1\">City: </div>\n                        <input type=\"text\" class=\"col-sm-2 input-field\" [(ngModel)]=\"new_location.city\">\n                        <div class=\"col-sm-1\">State: </div>\n\t\t\t\t\t\t<select class=\"col-sm-1 form-control\" [(ngModel)]=\"new_location.state\">\n\t\t\t\t\t\t\t<option *ngFor=\"let state of os.states\" [value]=\"state.value\">{{state.name}}</option>\n\t\t\t\t\t\t</select>\n                        <div class=\"col-sm-1\">Zip: </div>\n                        <input type=\"text\" class=\"col-sm-4 input-field\" [(ngModel)]=\"new_location.zipCode\">\n                    </div>\n\t            </div>\n\t\t\t\t<ul class=\"nav nav-tabs mb-4 mt-2\">\n\t\t\t\t\t<li class=\"nav-item\" (click)=\"venue_tab=location.value; hash.set('venue_tab', location.value);\" *ngFor=\"let location of dropdownLocations\">\n\t\t\t\t\t\t<a class=\"nav-link\" [class.active]=\"venue_tab==location.value\">{{location.label}}</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t            <div *ngIf=\"venue_tab && _locations[venue_tab]\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-1\">Venue Name: </div>\n                        <input type=\"text\" class=\"col-sm-4 input-field\" [(ngModel)]=\"_locations[venue_tab].venueName\" (ngModelChange)=\"update_location(_locations[venue_tab])\">\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-1\">Address: </div>\n                        <input type=\"text\" class=\"col-sm-4 input-field\" [(ngModel)]=\"_locations[venue_tab].address\" (ngModelChange)=\"update_location(_locations[venue_tab])\">\n                        <div class=\"col-sm-1\">Address 2: </div>\n                        <input type=\"text\" class=\"col-sm-4 input-field\" [(ngModel)]=\"_locations[venue_tab].address2\" (ngModelChange)=\"update_location(_locations[venue_tab])\">\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-1\">City: </div>\n                        <input type=\"text\" class=\"col-sm-2 input-field\" [(ngModel)]=\"_locations[venue_tab].city\" (ngModelChange)=\"update_location(_locations[venue_tab])\">\n                        <div class=\"col-sm-1\">State: </div>\n\t\t\t\t\t\t<select class=\"col-sm-1 form-control\" [(ngModel)]=\"_locations[venue_tab].state\" (ngModelChange)=\"update_location(_locations[venue_tab])\">\n\t\t\t\t\t\t\t<option *ngFor=\"let state of os.states\" [value]=\"state.value\">{{state.name}}</option>\n\t\t\t\t\t\t</select>\n                        <div class=\"col-sm-1\">Zip: </div>\n                        <input type=\"text\" class=\"col-sm-4 input-field\" [(ngModel)]=\"_locations[venue_tab].zipCode\" (ngModelChange)=\"update_location(_locations[venue_tab])\">\n                    </div>\n\t            </div>\n\t        </div>\n\t\t</ng-container>\n\t\t<ng-container *ngIf=\"tab==6\">\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<h5>Custom Logo</h5>\n\t\t\t\t</div>\n\t\t\t\t<label class=\"row\">\n\t\t\t\t\t<img [src]=\"croppedImage || os.org.logo || '/api/file/public/org.png'\" alt=\"\" height=\"50\">\n\t\t\t\t\t<input type=\"file\" (change)=\"imageChangedEvent = $event;\" [hidden]=\"true\" accept=\"image/*\">\n\t\t\t\t</label>\n\n\t\t\t\t<div class=\"row\" *ngIf=\"imageChangedEvent\">\n\t\t\t\t\t<image-cropper [imageChangedEvent]=\"imageChangedEvent\"\n\t\t\t\t\t\t[maintainAspectRatio]=\"true\"\n\t\t\t\t\t\t[resizeToWidth]=\"50\"\n\t\t\t\t\t\t[aspectRatio]=\"1\"\n\t\t\t\t\t\tformat=\"png\"\n\t\t\t\t\t\t(imageCropped)=\"imageCropped($event)\"\n\t\t\t\t\t\t(imageLoaded)=\"(imageLoaded())\"\n\t\t\t\t\t></image-cropper>\n\t\t\t\t\t<div class=\"col-12 mt-2\">\n\t\t\t\t\t\t<button class=\"btn btn-success float-right ml-2\" (click)=\"upload();\">Save</button>\n\t\t\t\t\t\t<button class=\"btn btn-danger float-right\" (click)=\"imageChangedEvent = null;\">Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<h5>Custom Email</h5>\n\t\t\t\t</div>\n\t\t\t\t<label class=\"row\">\n\t\t\t\t\t<input type=\"text\" placeholder=\"Type the email\" name=\"email\" [(ngModel)]=\"os.org.email\" (ngModelChange)=\"os.save(os.org)\" class=\"mr-2\">\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</ng-container>\n        <div class=\"border-top mt15\"></div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile/edit-profile.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile/edit-profile.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileEditProfileEditProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n\t<div class=\"col-sm-1\"></div>\n\t<div class=\"col-sm-6\">\n\t\t<h4 style=\"margin-left:14px;\">Personal</h4>\n\t\t<div class=\"field-spacing col-sm-6\">\n\t\t\t<label class=\"input-label\" for=\"eventTitle\">First Name:</label>\n\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" aria-label=\"time\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"user.firstName\" (ngModelChange)=\"us.update(user)\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"field-spacing col-sm-6\">\n\t\t\t<label class=\"input-label\" for=\"eventTitle\">Last Name:</label>\n\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" aria-label=\"time\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"user.lastName\" (ngModelChange)=\"us.update(user)\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"field-spacing col-sm-6\">\n\t\t\t<label class=\"input-label\" for=\"eventTitle\">Email:</label>\n\t\t\t<div class=\"input-group mb-3\">{{user.email}}</div>\n\t\t</div>\n\n\n\t\t<div class=\"field-spacing col-sm-6\">\n\t\t\t<label class=\"input-label\" for=\"eventTitle\">Address:</label>\n\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" aria-label=\"time\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"user.address\" (ngModelChange)=\"us.update(user)\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"field-spacing col-sm-6\">\n\t\t\t<label class=\"input-label\" for=\"eventTitle\">Address 2:</label>\n\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" aria-label=\"time\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"user.address2\" (ngModelChange)=\"us.update(user)\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"field-spacing col-sm-6\">\n\t\t\t<label class=\"input-label\" for=\"eventTitle\">Phone Number:</label>\n\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" aria-label=\"time\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"user.phoneNumber\" (ngModelChange)=\"us.update(user)\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"field-spacing col-sm-6\">\n\t\t\t<label class=\"input-label\" for=\"eventTitle\">Emergency Contact Name:</label>\n\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" aria-label=\"time\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"user.emergencyContactName\" (ngModelChange)=\"us.update(user)\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"field-spacing col-sm-6\">\n\t\t\t<label class=\"input-label\" for=\"eventTitle\">Emergency Contact:</label>\n\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" aria-label=\"time\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"user.emergencyContact\" (ngModelChange)=\"us.update(user)\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"mt-2\">\n\t<div *ngFor=\"let org of user.organizations\">\n\t\t<h5 style=\"margin-left:14px;\">Organization {{os._orgs[org._id]?.name}}</h5>\n\t\t<div class=\"field-spacing col-sm-6\" *ngIf=\"ps._positions[os.org._id]\">\n\t\t\t<ng-multiselect-dropdown [(ngModel)]=\"org.positions\" (ngModelChange)=\"us.update(user)\" [data]=\"ps._positions[os.org._id]\" [settings]=\"dropdownSettings\"></ng-multiselect-dropdown>\n\t\t</div>\n\t</div>\n  <div *ngIf=\"user.isAdmin\">\n    <h5 style=\"margin-left:14px;\" class=\"mt-2\">Groups:</h5>\n    <label style=\"margin-left:14px;\"  *ngFor=\"let group of gs.groups\" class=\"waw-checkbox\">\n      <span>{{group.name}}</span>\n      <input type=\"checkbox\" name=\"check\" [(ngModel)]=\"group._users[user._id]\" (ngModelChange)=\"update_group(group)\">\n      <span class=\"checkmark\"></span>\n    </label>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n\t<h3>Profile</h3>\n\t<app-edit-profile *ngIf=\"( profileId == us.user._id || us.user.isAdmin ) && us._users[profileId]\" [user]=\"us._users[profileId]\"></app-edit-profile>\n\t<app-user-profile *ngIf=\"profileId != us.user._id && !us.user.isAdmin\" [profile]=\"profile\" [user]=\"user\"></app-user-profile>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/user-event-row/user-event-row.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/user-event-row/user-event-row.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileUserEventRowUserEventRowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div routerLink=\"/event-details\" [queryParams]=\"{eventId: event._id}\" class=\"row user-row\"\n    [ngStyle]=\"isEven && {'background-color': '#e6e6e6'}\" style=\"padding:10px;\">\n        <div class=\"col-md-3\">{{event?.title}}</div>\n        <div class=\"col-md-2\">{{event?.position}}</div>\n        <div class=\"col-md-2\">{{event?.date}}</div>\n        <div class=\"col-md-2\">{{event?.rating}}</div>\n        <div class=\"col-md-2\">{{event?.comment}}</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/user-profile/user-profile.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/user-profile/user-profile.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"col-md-12\">\n            <h5>Name: {{profile?.firstName + ' ' + profile?.lastName}}</h5>\n        </div>\n        <div class=\"col-md-12\">\n            <h5>Email: {{profile?.email}}</h5>\n        </div>\n        <div class=\"col-md-12\">\n            <h5>Address: <span *ngIf=\"profile?.address\">{{profile?.address}}</span></h5>\n        </div>\n        <div class=\"col-md-12\">\n            <h5>Address 2: <span *ngIf=\"profile?.address2\">{{profile?.address2}}</span></h5>\n        </div>\n        <div class=\"col-md-12\">\n            <h5>Phone Number: <span *ngIf=\"profile?.phoneNumber\">{{profile?.phoneNumber}}</span></h5>\n        </div>\n        <div class=\"col-md-12\">\n            <h5>Emergency Contact Name: <span *ngIf=\"profile?.emergencyContactName\">{{profile?.emergencyContactName}}</span></h5>\n        </div>\n        <div class=\"col-md-12\">\n            <h5>Emergency Contact: <span *ngIf=\"profile?.emergencyContact\">{{profile?.emergencyContact}}</span></h5>\n        </div>\n        <!-- <div class=\"col-md-12\" *ngFor=\"let org of profile?.organizations||[]\">\n            <h5>Organization {{os._orgs[org._id]?.name||'Unknown'}}</h5>\n            <h6 *ngFor=\"let pos of org.positions\">Position {{pos.value || pos}}</h6>\n        </div> -->\n    </div>\n</div>\n\n<ng-content></ng-content>\n\n<div class=\"mt-2\" *ngIf=\"us.user.isAdmin && js.assigned[profile?._id]?.length\">\n    <h5 style=\"margin-left:14px;\">Comments:</h5>\n    <label style=\"margin-left:14px;\" *ngFor=\"let job of js.assigned[profile?._id]\" class=\"waw-checkbox\">\n        <div class=\"grid-row-2\" *ngFor=\"let userId of job.comments|each\">\n            <span class=\"jobv-table__text\">\n                <span>{{us._users[userId]?.firstName}} {{us._users[userId]?.lastName}}:</span>\n            </span>\n            <span> {{job.comments[userId]}}</span>\n        </div>\n    </label>\n</div>\n\n<h3>Previous Jobs</h3>\n<div class=\"row\" style=\"color:white; padding:10px;\" [ngStyle]=\"{'background-color': os.org.primaryColor != null ? os.org.primaryColor : '#222222' }\">\n    <div class=\"col-md-3\">\n        <h5>Title</h5>\n    </div>\n    <div class=\"col-md-2\">\n        <h5>Position</h5>\n    </div>\n    <div class=\"col-md-2\">\n        <h5>Date</h5>\n    </div>\n    <div class=\"col-md-2\">\n        <h5>Rating</h5>\n    </div>\n    <div class=\"col-md-2\">\n        <h5>Comment</h5>\n    </div>\n</div>\n<app-user-event-row *ngFor=\"let event of pastEvents; let last = last; let even = even;\" [event]=\"event\" [isEven]=\"even\" [user]=\"user\"></app-user-event-row>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/calendar-picker/calendar-picker.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/calendar-picker/calendar-picker.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilsCalendarPickerCalendarPickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngb-datepicker #dp ngModel [displayMonths]=\"2\" [navigation]=\"'arrows'\" [startDate]=\"startDate\" [firstDayOfWeek]=\"7\" [dayTemplate]=\"t\" outsideDays=\"collapsed\" style=\"border:none; border-radius:0\">\n</ngb-datepicker>\n\n<ng-template #t let-date=\"date\" let-currentWeek=\"week\" let-focused=\"focused\" let-currentMonth=\"currentMonth\">\n    <span class=\"custom-day\" ngClass=\"{'calselected': hoveredDate == date}\" (click)=\"pickDate(date)\"\n        [class.focused]=\"focused\" [class.range]=\"isFrom(date) || isTo(date) || isInside(date)\"\n        [class.faded]=\"isInside(date)\" (mouseenter)=\"hoveredDate = date\" (mouseleave)=\"hoveredDate = null\">\n        {{date.day}}\n    </span>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/guest/guest.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/guest/guest.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilsGuestGuestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/time/time.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/time/time.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilsTimeTimeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<label class=\"select\">\n\t<input class=\"select-input\" type=\"text\" [textMask]=\"{mask: maskTime, guide: false}\"  matInput [placeholder]=\"placeholder\" name=\"time\" [(ngModel)]=\"time\" (ngModelChange)=\"afterWhile();\" [ngModelOptions]=\"{standalone: true}\" (focus)=\"show=true;\" (keyup.enter)=\"set(true); save(); show=false;\"  autocomplete=\"off\">\n\t<i *ngIf=\"show\" (click)=\"save(); show=false;\" class=\"fa fa-check\"></i>\n\t<div *ngIf=\"show\" class=\"d-flex select-body\">\n\t\t<div class=\"select__item\" *ngIf=\"meridian\">\n\t\t\t<perfect-scrollbar style=\"max-height: 112px;\" [config]=\"config\">\n\t\t\t\t<div class=\"select__item__counter\" *ngFor=\"let _hour of hours\" [class.active]=\"hour==_hour\" (click)=\"hour=_hour; set(true);\">{{_hour}}</div>\n\t\t\t</perfect-scrollbar>\n\t\t</div>\n    <div class=\"select__item\" *ngIf=\"!meridian\">\n\t\t\t<perfect-scrollbar style=\"max-height: 112px;\" [config]=\"config\">\n\t\t\t\t<div class=\"select__item__counter\" *ngFor=\"let _hour of hoursMeridian\" [class.active]=\"hour==_hour\" (click)=\"hour=_hour; set(true);\">{{_hour}}</div>\n\t\t\t</perfect-scrollbar>\n\t\t</div>\n\t\t<div class=\"select__item\">\n\t\t\t<perfect-scrollbar style=\"max-height: 112px;\" [config]=\"config\">\n\t\t\t\t<div class=\"select__item__counter\" *ngFor=\"let _minute of minutes\" [class.active]=\"minute==_minute\" (click)=\"minute=_minute; set(true);\">{{_minute}}</div>\n\t\t\t</perfect-scrollbar>\n\t\t</div>\n\t\t<div class=\"select__item\" *ngIf=\"meridian\">\n\t\t\t<perfect-scrollbar style=\"max-height: 112px;\" [config]=\"config\">\n\t\t\t\t<div class=\"select__item__counter\" *ngFor=\"let _kind of kinds\" [class.active]=\"kind==_kind\" (click)=\"kind=_kind; set(true);\">{{_kind}}</div>\n\t\t\t</perfect-scrollbar>\n\t\t</div>\n\t</div>\n</label>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/user/user.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/user/user.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilsUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"appContainer\">\n  <nav class=\"navbar navbar-expand-sm navbar-dark\"\n  [ngStyle]=\"{'background-color': os.org.primaryColor != null ? os.org.primaryColor : '#222222' }\">\n    <!-- Brand -->\n    <a class=\"navbar-brand logo\">\n      <img [src]=\"os.org && os.org.logo || '/api/file/public/org.png'\" alt=\"\">\n    </a>\n\n    <!-- Links -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" routerLink=\"/dashboard\">Cruu{{os.org && '-'+os.org.name}}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/jobs\">Open Jobs</a>\n      </li>\n      <!-- Dropdown -->\n      <!-- <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          Resources\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Forms</a>\n          <a class=\"dropdown-item\" href=\"#\">Support</a>\n        </div>\n      </li> -->\n    </ul>\n    <ul class=\"navbar-nav ml-auto\" (click)=\"toggle()\" *ngIf=\"!expandFlyout\">\n      <li>\n        <!-- <div class=\"notification-indicator\">3</div> -->\n        <i class=\"fa fa-user\" style=\"color:white;font-size:20px;\"></i>\n      </li>\n      <li>\n        <a class=\"nav-link\">{{us.user.firstName}}</a>\n      </li>\n    </ul>\n  </nav>\n  <ngb-alert style=\"padding:10px;padding-left:29px;\" *ngIf=\"alert\" [type]=\"alert.type\" (close)=\"closeAlert(alert)\">\n    <span>{{ alert.message }}</span>\n    <button *ngIf=\"alert.yes\" (click)=\"alert.yes(); closeAlert(alert);\" class=\"btn btn-primary float-right\" style=\"margin-right: 40px; width: 50px;\">Yes</button>\n    <button *ngIf=\"alert.no\" (click)=\"alert.no(); closeAlert(alert);\" class=\"btn btn-secondary float-right\" style=\"margin-right: 10px; width: 50px;\">No</button>\n  </ngb-alert>\n  <div style=\"padding:30px;background-color:#f8f8ff;\">\n    <router-outlet></router-outlet>\n    <div *ngIf=\"expandFlyout\" class=\"flyout\"\n      [ngStyle]=\"{'background-color': os.org.primaryColor != null ? os.org.primaryColor : '#222222' }\">\n      <div class=\"row\">\n        <i (click)=\"toggle()\" class=\"fa fa-close close-icon\"></i>\n      </div>\n      <div class=\"row\">\n        <i class=\"fa fa-user user\"></i>\n      </div>\n      <div class=\"row\" style=\"color:#ee352a;\">\n        <h2 style=\"margin: auto; margin-top:10px;margin-bottom:15px;\">{{us.user.firstName + ' ' + us.user.lastName}}</h2>\n      </div>\n      <div class=\"row\" style=\"margin: auto; margin-top:5px;color:#f8f8ff;\">\n        <div style=\"margin:auto;font-size:25px;\" routerLink=\"/profile\" [queryParams]=\"{userId: us.user._id}\" (click)=\"toggle()\">Profile</div>\n      </div>\n      <div *ngIf=\"us.user.isAdmin\" class=\"row\" style=\"margin: auto; margin-top:5px;color:#f8f8ff;\">\n        <div routerLink=\"/settings\" style=\"margin:auto;font-size:25px;\" (click)=\"toggle()\">Org Settings</div>\n      </div>\n      <div class=\"row\" style=\"margin: auto; margin-top:5px;color:#f8f8ff;\">\n        <div style=\"margin:auto;font-size:25px;\" (click)=\"signOut()\">Signout</div>\n      </div>\n\n\n\n      <!-- <div class=\"row mt-3\" style=\"color:#ee352a;\" *ngIf=\"us.user.isAdmin\">\n        <h2 style=\"margin: auto; margin-top:10px;margin-bottom:15px;\">Admin</h2>\n      </div>\n      <div class=\"row\" style=\"margin: auto; margin-top:5px;color:#f8f8ff;\" *ngIf=\"us.user.isAdmin\">\n        <div routerLink=\"/events\" style=\"margin:auto;font-size:25px;\" (click)=\"toggle()\">All Events</div>\n      </div>\n      <div class=\"row\" style=\"margin: auto; margin-top:5px;color:#f8f8ff;\" *ngIf=\"us.user.isAdmin\">\n        <div routerLink=\"/restapi\" style=\"margin:auto;font-size:25px;\" (click)=\"toggle()\">Public API</div>\n      </div> -->\n\n\n      <!-- \n      <div class=\"row\" style=\"margin: auto; margin-top:50px;color:#ee352a;\">\n        <div style=\"margin:auto;font-size:25px;\">Notifications\n          <div class=\"notification-indicator\" style=\"color:#f8f8ff;font-size:15px;\">3</div>\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin: auto; margin-top:20px;color:#f8f8ff;\">\n        <div style=\"margin:auto;font-size:20px;\">\n          <i class=\"fa fa-folder\"></i>\n          New Document Uploaded\n          <i class=\"fa fa-chevron-right\"></i>\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin: auto; margin-top:20px;color:#f8f8ff;\">\n        <div style=\"margin:auto;font-size:20px;\">\n          <i class=\"fa fa-exclamation-circle\" style=\"color:#ee352a;\"></i>\n          Update Required on Event\n          <i class=\"fa fa-chevron-right\"></i>\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin: auto; margin-top:20px;color:#f8f8ff;\">\n        <div style=\"margin:auto;font-size:20px;\">\n          <i class=\"fa fa-info-circle\"></i>\n          Event Information Changed\n          <i class=\"fa fa-chevron-right\"></i>\n        </div>\n      </div>\n      -->\n    </div>\n  </div>\n</div>\n\n<a class=\"ntf\" href=\"mailto:help@cruuing.on.spiceworks.com\">\n\t<div class=\"ntf-icon\"><i class=\"fa fa-envelope\"></i></div>\n\t<div class=\"ntf-body\"><div>Need help?</div> Email help@cruuing.on.spiceworks.com with any issues</div>\n</a>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/util-example/util-example.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/util-example/util-example.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilsUtilExampleUtilExampleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>util-example works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spinner {\n  z-index: 999999999999;\n  background: rgba(13, 13, 13, 0.82);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.waw-spinner {\n  -webkit-animation: rotator 1.4s linear infinite;\n          animation: rotator 1.4s linear infinite;\n}\n\n@-webkit-keyframes rotator {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n\n@keyframes rotator {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n\n.waw-spinner .path {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  -webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;\n          animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;\n}\n\n@-webkit-keyframes colors {\n  0% {\n    stroke: #4285F4;\n  }\n  25% {\n    stroke: #DE3E35;\n  }\n  50% {\n    stroke: #F7C223;\n  }\n  75% {\n    stroke: #1B9A59;\n  }\n  100% {\n    stroke: #4285F4;\n  }\n}\n\n@keyframes colors {\n  0% {\n    stroke: #4285F4;\n  }\n  25% {\n    stroke: #DE3E35;\n  }\n  50% {\n    stroke: #F7C223;\n  }\n  75% {\n    stroke: #1B9A59;\n  }\n  100% {\n    stroke: #4285F4;\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dashoffset: 187;\n  }\n  50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg);\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 187;\n  }\n  50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFHSSwrQ0FBQTtVQUFBLHVDQUFBO0FDRko7O0FESUk7RUFDSTtJQUNJLHVCQUFBO0VDRlY7RURLTTtJQUNJLHlCQUFBO0VDSFY7QUFDRjs7QURKSTtFQUNJO0lBQ0ksdUJBQUE7RUNGVjtFREtNO0lBQ0kseUJBQUE7RUNIVjtBQUNGOztBRE1JO0VBQ0kscUJBZks7RUFnQkwsb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1GQUFBO1VBQUEsMkVBQUE7QUNKUjs7QURPSTtFQUNJO0lBQ0ksZUFBQTtFQ0xWO0VEUU07SUFDSSxlQUFBO0VDTlY7RURTTTtJQUNJLGVBQUE7RUNQVjtFRFVNO0lBQ0ksZUFBQTtFQ1JWO0VEV007SUFDSSxlQUFBO0VDVFY7QUFDRjs7QURWSTtFQUNJO0lBQ0ksZUFBQTtFQ0xWO0VEUU07SUFDSSxlQUFBO0VDTlY7RURTTTtJQUNJLGVBQUE7RUNQVjtFRFVNO0lBQ0ksZUFBQTtFQ1JWO0VEV007SUFDSSxlQUFBO0VDVFY7QUFDRjs7QURZSTtFQUNJO0lBQ0ksc0JBN0NDO0VDbUNYO0VEYU07SUFDSSx3QkFBQTtJQUNBLHlCQUFBO0VDWFY7RURjTTtJQUNJLHNCQXREQztJQXVERCx5QkFBQTtFQ1pWO0FBQ0Y7O0FEREk7RUFDSTtJQUNJLHNCQTdDQztFQ21DWDtFRGFNO0lBQ0ksd0JBQUE7SUFDQSx5QkFBQTtFQ1hWO0VEY007SUFDSSxzQkF0REM7SUF1REQseUJBQUE7RUNaVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV0FXIHNwaW5uZXJcbi5zcGlubmVyIHtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMywgMTMsIDEzLCAwLjgyKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndhdy1zcGlubmVyIHtcbiAgICAkb2Zmc2V0OiAxODc7XG4gICAgJGR1cmF0aW9uOiAxLjRzO1xuICAgIGFuaW1hdGlvbjogcm90YXRvciAkZHVyYXRpb24gbGluZWFyIGluZmluaXRlO1xuXG4gICAgQGtleWZyYW1lcyByb3RhdG9yIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucGF0aCB7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6ICRvZmZzZXQ7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgIGFuaW1hdGlvbjogZGFzaCAkZHVyYXRpb24gZWFzZS1pbi1vdXQgaW5maW5pdGUsIGNvbG9ycyAoJGR1cmF0aW9uKjQpIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgY29sb3JzIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgc3Ryb2tlOiAjNDI4NUY0O1xuICAgICAgICB9XG5cbiAgICAgICAgMjUlIHtcbiAgICAgICAgICAgIHN0cm9rZTogI0RFM0UzNTtcbiAgICAgICAgfVxuXG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICBzdHJva2U6ICNGN0MyMjM7XG4gICAgICAgIH1cblxuICAgICAgICA3NSUge1xuICAgICAgICAgICAgc3Ryb2tlOiAjMUI5QTU5O1xuICAgICAgICB9XG5cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBzdHJva2U6ICM0Mjg1RjQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGRhc2gge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogJG9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogJG9mZnNldC80O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICRvZmZzZXQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5zcGlubmVyIHtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCAxMywgMTMsIDAuODIpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53YXctc3Bpbm5lciB7XG4gIGFuaW1hdGlvbjogcm90YXRvciAxLjRzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgcm90YXRvciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG59XG4ud2F3LXNwaW5uZXIgLnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxODc7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZGFzaCAxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlLCBjb2xvcnMgNS42cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgY29sb3JzIHtcbiAgMCUge1xuICAgIHN0cm9rZTogIzQyODVGNDtcbiAgfVxuICAyNSUge1xuICAgIHN0cm9rZTogI0RFM0UzNTtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZTogI0Y3QzIyMztcbiAgfVxuICA3NSUge1xuICAgIHN0cm9rZTogIzFCOUE1OTtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2U6ICM0Mjg1RjQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTg3O1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ2Ljc1O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE4NztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! pdfmake/build/pdfmake */
    "./node_modules/pdfmake/build/pdfmake.js");
    /* harmony import */


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! pdfmake/build/vfs_fonts */
    "./node_modules/pdfmake/build/vfs_fonts.js");
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);

    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;

    var AppComponent = function AppComponent(http) {
      _classCallCheck(this, AppComponent);

      this.http = http;
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var wacom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! wacom */
    "./node_modules/wacom/fesm2015/wacom.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_guest_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/guest/login/login.component */
    "./src/app/pages/guest/login/login.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_guest_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/guest/sign-up/sign-up.component */
    "./src/app/pages/guest/sign-up/sign-up.component.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _pages_job_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/job/profile/profile.component */
    "./src/app/pages/job/profile/profile.component.ts");
    /* harmony import */


    var _modals_job_job_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modals/job/job.component */
    "./src/app/modals/job/job.component.ts");
    /* harmony import */


    var _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/event-details/event-details.component */
    "./src/app/pages/event-details/event-details.component.ts");
    /* harmony import */


    var _pages_event_details_crew_drawer_crew_drawer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/event-details/crew-drawer/crew-drawer.component */
    "./src/app/pages/event-details/crew-drawer/crew-drawer.component.ts");
    /* harmony import */


    var _pages_org_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/org/settings/settings.component */
    "./src/app/pages/org/settings/settings.component.ts");
    /* harmony import */


    var _pages_event_details_crew_config_crew_config_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/event-details/crew-config/crew-config.component */
    "./src/app/pages/event-details/crew-config/crew-config.component.ts");
    /* harmony import */


    var _pages_event_details_crew_config_crew_config_row_crew_config_row_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/event-details/crew-config/crew-config-row/crew-config-row.component */
    "./src/app/pages/event-details/crew-config/crew-config-row/crew-config-row.component.ts");
    /* harmony import */


    var _pages_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/profile/edit-profile/edit-profile.component */
    "./src/app/pages/profile/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _pages_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/profile/user-profile/user-profile.component */
    "./src/app/pages/profile/user-profile/user-profile.component.ts");
    /* harmony import */


    var _pages_profile_user_event_row_user_event_row_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/profile/user-event-row/user-event-row.component */
    "./src/app/pages/profile/user-event-row/user-event-row.component.ts");
    /* harmony import */


    var _pages_event_details_inventory_drawer_inventory_drawer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/event-details/inventory-drawer/inventory-drawer.component */
    "./src/app/pages/event-details/inventory-drawer/inventory-drawer.component.ts");
    /* harmony import */


    var _pages_event_details_inventory_configuration_inventory_configuration_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/event-details/inventory-configuration/inventory-configuration.component */
    "./src/app/pages/event-details/inventory-configuration/inventory-configuration.component.ts");
    /* harmony import */


    var _pages_event_details_inventory_configuration_inventory_configuration_row_inventory_configuration_row_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component */
    "./src/app/pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component.ts");
    /* harmony import */


    var _pages_event_details_inventory_configuration_modal_inventory_configuration_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component */
    "./src/app/pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component.ts");
    /* harmony import */


    var _pages_event_details_print_crew_view_print_crew_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/event-details/print-crew-view/print-crew-view.component */
    "./src/app/pages/event-details/print-crew-view/print-crew-view.component.ts");
    /* harmony import */


    var _pages_event_details_position_approval_position_approval_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/event-details/position-approval/position-approval.component */
    "./src/app/pages/event-details/position-approval/position-approval.component.ts");
    /* harmony import */


    var _pages_guest_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/guest/reset-password/reset-password.component */
    "./src/app/pages/guest/reset-password/reset-password.component.ts");
    /* harmony import */


    var _utils_calendar_picker_calendar_picker_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./utils/calendar-picker/calendar-picker.component */
    "./src/app/utils/calendar-picker/calendar-picker.component.ts");
    /* harmony import */


    var _utils_util_example_util_example_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./utils/util-example/util-example.component */
    "./src/app/utils/util-example/util-example.component.ts");
    /* harmony import */


    var _utils_broadcaster__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./utils/broadcaster */
    "./src/app/utils/broadcaster.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/fesm2015/ngx-loading.js");
    /* harmony import */


    var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pipes/search.pipe */
    "./src/app/pipes/search.pipe.ts");
    /* harmony import */


    var _pipes_labels_by_category_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./pipes/labels-by-category.pipe */
    "./src/app/pipes/labels-by-category.pipe.ts");
    /* harmony import */


    var _utils_user_user_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./utils/user/user.component */
    "./src/app/utils/user/user.component.ts");
    /* harmony import */


    var _utils_guest_guest_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./utils/guest/guest.component */
    "./src/app/utils/guest/guest.component.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _pages_dashboard_column_configuration_flyout_column_configuration_flyout_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./pages/dashboard/column-configuration-flyout/column-configuration-flyout.component */
    "./src/app/pages/dashboard/column-configuration-flyout/column-configuration-flyout.component.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _pipes_time_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./pipes/time.pipe */
    "./src/app/pipes/time.pipe.ts");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! angular2-text-mask */
    "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_43__);
    /* harmony import */


    var _utils_time_time_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./utils/time/time.component */
    "./src/app/utils/time/time.component.ts");
    /* harmony import */


    var _pages_job_list_list_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./pages/job/list/list.component */
    "./src/app/pages/job/list/list.component.ts");
    /* harmony import */


    var _pipes_jobs_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./pipes/jobs.pipe */
    "./src/app/pipes/jobs.pipe.ts");
    /* harmony import */


    var _pipes_each_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./pipes/each.pipe */
    "./src/app/pipes/each.pipe.ts");
    /* harmony import */


    var _pipes_crew_cost_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./pipes/crew-cost.pipe */
    "./src/app/pipes/crew-cost.pipe.ts");
    /* harmony import */


    var _pages_event_details_crew_drawer_crew_comment_modal_crew_comment_modal_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component */
    "./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.ts");
    /* harmony import */


    var _pages_admin_events_events_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./pages/admin/events/events.component */
    "./src/app/pages/admin/events/events.component.ts");
    /* harmony import */


    var _pages_admin_api_api_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./pages/admin/api/api.component */
    "./src/app/pages/admin/api/api.component.ts");
    /* harmony import */


    var _pages_admin_events_row_row_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./pages/admin/events/row/row.component */
    "./src/app/pages/admin/events/row/row.component.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modals_jobv_jobv_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./modals/jobv/jobv.component */
    "./src/app/modals/jobv/jobv.component.ts");
    /* harmony import */


    var _modals_crewmail_crewmail_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./modals/crewmail/crewmail.component */
    "./src/app/modals/crewmail/crewmail.component.ts");
    /* harmony import */


    var ng2_dragula__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ng2-dragula */
    "./node_modules/ng2-dragula/dist/fesm2015/ng2-dragula.js");
    /* harmony import */


    var _modals_jobl_jobl_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./modals/jobl/jobl.component */
    "./src/app/modals/jobl/jobl.component.ts");
    /* harmony import */


    var _modals_message_message_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./modals/message/message.component */
    "./src/app/modals/message/message.component.ts");
    /* harmony import */


    var _modals_orgmail_orgmail_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./modals/orgmail/orgmail.component */
    "./src/app/modals/orgmail/orgmail.component.ts");
    /* harmony import */


    var _modals_labelc_labelc_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./modals/labelc/labelc.component */
    "./src/app/modals/labelc/labelc.component.ts");
    /* harmony import */


    var _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./pages/refresh/refresh.component */
    "./src/app/pages/refresh/refresh.component.ts");
    /* harmony import */


    var _pages_job_accept_accept_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./pages/job/accept/accept.component */
    "./src/app/pages/job/accept/accept.component.ts");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };
    var routes = [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'refresh',
      redirectTo: 'refresh'
    }, {
      path: '',
      canActivate: [_services__WEBPACK_IMPORTED_MODULE_53__["Guest"]],
      component: _utils_guest_guest_component__WEBPACK_IMPORTED_MODULE_38__["GuestComponent"],
      children: [{
        path: 'login',
        component: _pages_guest_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
      }, {
        path: 'sign-up',
        component: _pages_guest_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"]
      }, {
        path: 'reset-password',
        component: _pages_guest_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_30__["ResetPasswordComponent"]
      }, {
        path: 'refresh',
        component: _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_62__["RefreshComponent"]
      }]
    }, {
      path: '',
      canActivate: [_services__WEBPACK_IMPORTED_MODULE_53__["Authenticated"]],
      component: _utils_user_user_component__WEBPACK_IMPORTED_MODULE_37__["UserComponent"],
      children: [{
        path: 'dashboard',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
      }, {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"]
      }, {
        path: 'jobs',
        component: _pages_job_list_list_component__WEBPACK_IMPORTED_MODULE_45__["ListComponent"]
      }, {
        path: 'job/new',
        component: _pages_job_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"]
      }, {
        path: 'job/:_id',
        component: _pages_job_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"]
      }, {
        path: 'accept/:job_id/:assigned',
        component: _pages_job_accept_accept_component__WEBPACK_IMPORTED_MODULE_63__["AcceptComponent"]
      }, {
        path: 'event-details',
        component: _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_16__["EventDetailsComponent"]
      }, {
        path: 'settings',
        component: _pages_org_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"]
      }, {
        path: 'print',
        component: _pages_event_details_print_crew_view_print_crew_view_component__WEBPACK_IMPORTED_MODULE_28__["PrintCrewViewComponent"]
      }, {
        path: 'refresh',
        component: _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_62__["RefreshComponent"]
      }]
    }, {
      path: '',
      canActivate: [_services__WEBPACK_IMPORTED_MODULE_53__["Admins"]],
      component: _utils_user_user_component__WEBPACK_IMPORTED_MODULE_37__["UserComponent"],
      children: [{
        path: 'events',
        component: _pages_admin_events_events_component__WEBPACK_IMPORTED_MODULE_50__["EventsComponent"]
      }, {
        path: 'restapi',
        component: _pages_admin_api_api_component__WEBPACK_IMPORTED_MODULE_51__["ApiComponent"]
      }, {
        path: 'refresh',
        component: _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_62__["RefreshComponent"]
      }]
    }, {
      path: '**',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _pages_guest_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _pages_guest_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _pages_job_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], _pages_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_16__["EventDetailsComponent"], _pages_event_details_crew_drawer_crew_drawer_component__WEBPACK_IMPORTED_MODULE_17__["CrewDrawerComponent"], _pages_org_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"], _pages_event_details_crew_config_crew_config_component__WEBPACK_IMPORTED_MODULE_19__["CrewConfigComponent"], _utils_calendar_picker_calendar_picker_component__WEBPACK_IMPORTED_MODULE_31__["CalendarPickerComponent"], _pages_event_details_crew_config_crew_config_row_crew_config_row_component__WEBPACK_IMPORTED_MODULE_20__["CrewConfigRowComponent"], _pages_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_21__["EditProfileComponent"], _pages_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__["UserProfileComponent"], _pages_profile_user_event_row_user_event_row_component__WEBPACK_IMPORTED_MODULE_23__["UserEventRowComponent"], _pages_event_details_inventory_drawer_inventory_drawer_component__WEBPACK_IMPORTED_MODULE_24__["InventoryDrawerComponent"], _pages_event_details_inventory_configuration_inventory_configuration_component__WEBPACK_IMPORTED_MODULE_25__["InventoryConfigurationComponent"], _pages_event_details_inventory_configuration_inventory_configuration_row_inventory_configuration_row_component__WEBPACK_IMPORTED_MODULE_26__["InventoryConfigurationRowComponent"], _pages_event_details_inventory_configuration_modal_inventory_configuration_modal_component__WEBPACK_IMPORTED_MODULE_27__["InventoryConfigurationModalComponent"], _utils_util_example_util_example_component__WEBPACK_IMPORTED_MODULE_32__["UtilExampleComponent"], _pages_event_details_print_crew_view_print_crew_view_component__WEBPACK_IMPORTED_MODULE_28__["PrintCrewViewComponent"], _pages_event_details_position_approval_position_approval_component__WEBPACK_IMPORTED_MODULE_29__["PositionApprovalComponent"], _pages_guest_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_30__["ResetPasswordComponent"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_35__["SearchPipe"], _pipes_labels_by_category_pipe__WEBPACK_IMPORTED_MODULE_36__["LabelsByCategoryPipe"], _utils_user_user_component__WEBPACK_IMPORTED_MODULE_37__["UserComponent"], _utils_guest_guest_component__WEBPACK_IMPORTED_MODULE_38__["GuestComponent"], _pages_dashboard_column_configuration_flyout_column_configuration_flyout_component__WEBPACK_IMPORTED_MODULE_40__["ColumnConfigurationFlyoutComponent"], _pipes_time_pipe__WEBPACK_IMPORTED_MODULE_42__["TimePipe"], _utils_time_time_component__WEBPACK_IMPORTED_MODULE_44__["TimeComponent"], _pages_job_list_list_component__WEBPACK_IMPORTED_MODULE_45__["ListComponent"], _pipes_jobs_pipe__WEBPACK_IMPORTED_MODULE_46__["JobsPipe"], _pipes_each_pipe__WEBPACK_IMPORTED_MODULE_47__["EachPipe"], _pipes_crew_cost_pipe__WEBPACK_IMPORTED_MODULE_48__["CrewCostPipe"], _pages_event_details_crew_drawer_crew_comment_modal_crew_comment_modal_component__WEBPACK_IMPORTED_MODULE_49__["CrewCommentModalComponent"], _pages_admin_events_events_component__WEBPACK_IMPORTED_MODULE_50__["EventsComponent"], _pages_admin_api_api_component__WEBPACK_IMPORTED_MODULE_51__["ApiComponent"], _pages_admin_events_row_row_component__WEBPACK_IMPORTED_MODULE_52__["RowComponent"], _modals_job_job_component__WEBPACK_IMPORTED_MODULE_15__["JobComponent"], _modals_jobv_jobv_component__WEBPACK_IMPORTED_MODULE_55__["JobvComponent"], _modals_crewmail_crewmail_component__WEBPACK_IMPORTED_MODULE_56__["CrewmailComponent"], _modals_jobl_jobl_component__WEBPACK_IMPORTED_MODULE_58__["JoblComponent"], _modals_message_message_component__WEBPACK_IMPORTED_MODULE_59__["MessageComponent"], _modals_orgmail_orgmail_component__WEBPACK_IMPORTED_MODULE_60__["OrgmailComponent"], _modals_labelc_labelc_component__WEBPACK_IMPORTED_MODULE_61__["LabelcComponent"], _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_62__["RefreshComponent"], _pages_job_accept_accept_component__WEBPACK_IMPORTED_MODULE_63__["AcceptComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_54__["RouterModule"].forRoot(routes), ng2_dragula__WEBPACK_IMPORTED_MODULE_57__["DragulaModule"].forRoot(), wacom__WEBPACK_IMPORTED_MODULE_8__["WacomModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_43__["TextMaskModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_41__["PerfectScrollbarModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_39__["ImageCropperModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["NgxWebstorageModule"].forRoot(), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot(), ngx_loading__WEBPACK_IMPORTED_MODULE_34__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_34__["ngxLoadingAnimationTypes"].threeBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
      })],
      providers: [_services__WEBPACK_IMPORTED_MODULE_53__["Admins"], _services__WEBPACK_IMPORTED_MODULE_53__["Authenticated"], _services__WEBPACK_IMPORTED_MODULE_53__["Guest"], {
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_41__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, _utils_broadcaster__WEBPACK_IMPORTED_MODULE_33__["Broadcaster"]],
      entryComponents: [_pages_event_details_position_approval_position_approval_component__WEBPACK_IMPORTED_MODULE_29__["PositionApprovalComponent"], _pages_event_details_crew_drawer_crew_comment_modal_crew_comment_modal_component__WEBPACK_IMPORTED_MODULE_49__["CrewCommentModalComponent"], _modals_crewmail_crewmail_component__WEBPACK_IMPORTED_MODULE_56__["CrewmailComponent"], _modals_jobv_jobv_component__WEBPACK_IMPORTED_MODULE_55__["JobvComponent"], _modals_jobl_jobl_component__WEBPACK_IMPORTED_MODULE_58__["JoblComponent"], _modals_orgmail_orgmail_component__WEBPACK_IMPORTED_MODULE_60__["OrgmailComponent"], _modals_labelc_labelc_component__WEBPACK_IMPORTED_MODULE_61__["LabelcComponent"], _modals_message_message_component__WEBPACK_IMPORTED_MODULE_59__["MessageComponent"], _modals_job_job_component__WEBPACK_IMPORTED_MODULE_15__["JobComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/modals/crewmail/crewmail.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/modals/crewmail/crewmail.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsCrewmailCrewmailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".email-msg__input {\n  margin-bottom: 10px;\n}\n.email-msg__textarea {\n  margin-bottom: 10px;\n  resize: vertical;\n  min-height: 38px;\n  max-height: 250px;\n}\n.email-date {\n  margin: 20px 0;\n}\n.email {\n  padding: 20px;\n}\n.email-title {\n  color: #666;\n}\n.mb20 {\n  margin-bottom: 20px;\n}\n.waw-checkbox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: 25px;\n  padding-left: 35px;\n  margin-bottom: 0;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.waw-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.waw-checkbox:hover input ~ .checkmark {\n  border: 1.5px solid #30a4f7;\n}\n.waw-checkbox input:checked ~ .checkmark {\n  background-color: #30a4f7;\n  transition: 0.2s ease-in-out;\n}\n.waw-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n.waw-checkbox .checkmark {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  height: 22px;\n  width: 22px;\n  border-radius: 6px;\n  background-color: #fff;\n  border: 1px solid #f3f3f3;\n  transition: 0.2s ease-in-out;\n}\n.waw-checkbox .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 7px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.ml30 {\n  margin-left: 30px;\n}\n.my10 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9tb2RhbHMvY3Jld21haWwvY3Jld21haWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZGFscy9jcmV3bWFpbC9jcmV3bWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNDLG1CQUFBO0FDQUg7QURHRTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREg7QURJQTtFQUNDLGNBQUE7QUNERDtBREdBO0VBQ0UsYUFBQTtBQ0FGO0FET0E7RUFDQyxXQUFBO0FDSkQ7QURPQTtFQUNDLG1CQUFBO0FDSkQ7QURPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDSkY7QURPRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0xKO0FEUUU7RUFDRSwyQkFBQTtBQ05KO0FEU0U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDUEo7QURVRTtFQUNFLGNBQUE7QUNSSjtBRFdFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNUSjtBRFdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBR0Esd0JBQUE7QUNUTjtBRGFBO0VBQ0MsaUJBQUE7QUNWRDtBRFlBO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtBQ1REIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2NyZXdtYWlsL2NyZXdtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsLW1zZyB7XG4gICZfX2lucHV0IHtcblx0ICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgJl9fdGV4dGFyZWEge1xuXHQgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdCAgcmVzaXplOiB2ZXJ0aWNhbDtcblx0ICBtaW4taGVpZ2h0OiAzOHB4O1xuXHQgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICB9XG59XG4uZW1haWwtZGF0ZSB7XG5cdG1hcmdpbjogMjBweCAwO1xufVxuLmVtYWlsIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi8vIC5kYXRlLWdyaWQge1xuLy8gXHRkaXNwbGF5OiBncmlkO1xuLy8gXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuLy8gXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gfVxuLmVtYWlsLXRpdGxlIHtcblx0Y29sb3I6ICM2NjY7XG59XG5cbi5tYjIwe1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLy8gQ0hFQ0tCT1hcbi53YXctY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAvLyBoaWRkZW4gdG9nZ2xlIGlucHV0XG4gIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgJjpob3ZlciBpbnB1dH4uY2hlY2ttYXJrIHtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMzMGE0Zjc7XG4gIH1cblxuICBpbnB1dDpjaGVja2Vkfi5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGE0Zjc7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGxlZnQ6IDdweDtcbiAgICAgIHRvcDogM3B4O1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogMTFweDtcbiAgICAgIGJvcmRlcjogc29saWQgd2hpdGU7XG4gICAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgfVxufVxuLm1sMzAge1xuXHRtYXJnaW4tbGVmdDogMzBweDtcbn1cbi5teTEwIHtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn0iLCIuZW1haWwtbXNnX19pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZW1haWwtbXNnX190ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xufVxuXG4uZW1haWwtZGF0ZSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uZW1haWwge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZW1haWwtdGl0bGUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLm1iMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ud2F3LWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ud2F3LWNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG4ud2F3LWNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzMwYTRmNztcbn1cbi53YXctY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBhNGY3O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLndhdy1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndhdy1jaGVja2JveCAuY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLndhdy1jaGVja2JveCAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBsZWZ0OiA3cHg7XG4gIHRvcDogM3B4O1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5tbDMwIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5teTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/crewmail/crewmail.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modals/crewmail/crewmail.component.ts ***!
    \*******************************************************/

  /*! exports provided: CrewmailComponent */

  /***/
  function srcAppModalsCrewmailCrewmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrewmailComponent", function () {
      return CrewmailComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");

    var CrewmailComponent = /*#__PURE__*/function () {
      function CrewmailComponent(modal, js, https, storage, os, us, http) {
        _classCallCheck(this, CrewmailComponent);

        this.modal = modal;
        this.js = js;
        this.https = https;
        this.storage = storage;
        this.os = os;
        this.us = us;
        this.http = http;
        this.dates = [];
        this._dates = {};
        this._id = [];
        this._selected = {};
        this.email = {};
        this.init();
      }

      _createClass(CrewmailComponent, [{
        key: "init",
        value: function init() {
          for (var i = 0; i < this.dates.length; i++) {
            this._dates[this.dates[i]] = true;

            for (var j = 0; j < this.js.byEvent[this._id + this.dates[i]].length; j++) {
              var job = this.js.byEvent[this._id + this.dates[i]][j];
              if (!job.assigned) continue;
              this._selected[job.assigned] = true;
            }
          }

          this.email.dates = this.dates[0];

          if (this.dates.length > 1) {
            this.email.dates += ' - ' + this.dates[this.dates.length - 1];
          }
        }
      }, {
        key: "select",
        value: function select(date) {
          for (var i = 0; i < this.js.byEvent[this._id + date].length; i++) {
            var job = this.js.byEvent[this._id + date][i];
            if (!job.assigned) continue;
            this._selected[job.assigned] = this._dates[date];
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          this.https.spin = true;
          this.email.users = [];

          for (var each in this._selected) {
            this.email.users.push(this.us._users[each].email);
          }

          this.http.post(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/job/inform', this.email).subscribe(function (data) {
            _this.https.spin = false;

            if (data) {
              _this.storage.store('alert', {
                type: 'success',
                message: 'Emails has been sent'
              });
            }
          });
          this.modal.close();
        }
      }]);

      return CrewmailComponent;
    }();

    CrewmailComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["JobService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CrewmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crewmail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crewmail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/crewmail/crewmail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crewmail.component.scss */
      "./src/app/modals/crewmail/crewmail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services__WEBPACK_IMPORTED_MODULE_5__["JobService"], _services__WEBPACK_IMPORTED_MODULE_5__["HttpService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"], _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], CrewmailComponent);
    /*
    <div class="email-date">
        <span>Position</span>
        <ng-container *ngFor="let position of ps._positions[os.org._id]">
            <div *ngIf="us.org_pos[os.org._id+position.value]?.length">
                <!-- <label class="waw-checkbox">
                    <input type="checkbox" [(ngModel)]="_position[position.value]" name="date">
                    <span>{{position.label}}</span>
                    <span class="checkmark"></span>
                </label> -->
                <div>{{position.label}}</div>
                <label *ngFor="let user of us.org_pos[os.org._id+position.value]; let i = index">
                    <input type="checkbox" [(ngModel)]="_users[user._id]" name="date">
                    <span class="ml-2">{{user.lastName}} <span></span>{{user.firstName}}</span>
                </label>
            </div>
        </ng-container>
    </div>
        init(){
            if(!this.ps.done){
                return setTimeout(this.init.bind(this), 100);
            }
            // if(Array.isArray(this.ps._positions[this.os.org._id])){
            // 	for (let i = 0; i < this.ps._positions[this.os.org._id].length; i++){
            // 		this._position[this.ps._positions[this.os.org._id][i].value]=true;
            // 	}
            // }
            for (let j = 0; j < this.dates.length; j++){
                for (let i = 0; i < this.js.byEvent[this._id+this.dates[j]].length; i++){
                    let job = this.js.byEvent[this._id+this.dates[j]][i];
                    if(!job.assigned) continue;
                    this._users[job.assigned] = true;
                }
            }
        }
    
    
    
    
    let _users = {};
            for (let each in this._dates){
                if(this._dates[each]){
                    for (let i = 0; i < this._dates_users[each].length; i++){
                        if(this._dates_users[each][i].assigned){
                            _users[this._dates_users[each][i].assigned] = true;
                        }
                    }
                }
            }
            let _users_approved = {};
            for (let i = 0; i < this.ps._positions[this.os.org._id].length; i++){
                let value = this.ps._positions[this.os.org._id][i].value;
                let users = this.us.org_pos[this.os.org._id+value];
                if(!Array.isArray(users) || !users.length) continue;
                for (let j = 0; j < users.length; j++){
                    _users_approved[users[j]._id] = users[j];
                }
            }
    
            this.email.users = [];
            for (let each in _users){
                if(_users_approved[each]){
                    this.email.users.push(_users_approved[each].email);
                }
            }
    
    
    
    */

    /***/
  },

  /***/
  "./src/app/modals/index.ts":
  /*!*********************************!*\
    !*** ./src/app/modals/index.ts ***!
    \*********************************/

  /*! exports provided: JobComponent, JobvComponent, JoblComponent, CrewmailComponent, OrgmailComponent, MessageComponent, LabelcComponent */

  /***/
  function srcAppModalsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _job_job_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./job/job.component */
    "./src/app/modals/job/job.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JobComponent", function () {
      return _job_job_component__WEBPACK_IMPORTED_MODULE_1__["JobComponent"];
    });
    /* harmony import */


    var _jobv_jobv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jobv/jobv.component */
    "./src/app/modals/jobv/jobv.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JobvComponent", function () {
      return _jobv_jobv_component__WEBPACK_IMPORTED_MODULE_2__["JobvComponent"];
    });
    /* harmony import */


    var _jobl_jobl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jobl/jobl.component */
    "./src/app/modals/jobl/jobl.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JoblComponent", function () {
      return _jobl_jobl_component__WEBPACK_IMPORTED_MODULE_3__["JoblComponent"];
    });
    /* harmony import */


    var _crewmail_crewmail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./crewmail/crewmail.component */
    "./src/app/modals/crewmail/crewmail.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CrewmailComponent", function () {
      return _crewmail_crewmail_component__WEBPACK_IMPORTED_MODULE_4__["CrewmailComponent"];
    });
    /* harmony import */


    var _orgmail_orgmail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orgmail/orgmail.component */
    "./src/app/modals/orgmail/orgmail.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrgmailComponent", function () {
      return _orgmail_orgmail_component__WEBPACK_IMPORTED_MODULE_5__["OrgmailComponent"];
    });
    /* harmony import */


    var _message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./message/message.component */
    "./src/app/modals/message/message.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
      return _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"];
    });
    /* harmony import */


    var _labelc_labelc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./labelc/labelc.component */
    "./src/app/modals/labelc/labelc.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LabelcComponent", function () {
      return _labelc_labelc_component__WEBPACK_IMPORTED_MODULE_7__["LabelcComponent"];
    });
    /***/

  },

  /***/
  "./src/app/modals/job/job.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/modals/job/job.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsJobJobComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".waw-checkbox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: 25px;\n  padding-left: 35px;\n  margin-bottom: 0;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.waw-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.waw-checkbox:hover input ~ .checkmark {\n  border: 1.5px solid #30a4f7;\n}\n.waw-checkbox input:checked ~ .checkmark {\n  background-color: #30a4f7;\n  transition: 0.2s ease-in-out;\n}\n.waw-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n.waw-checkbox .checkmark {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  height: 22px;\n  width: 22px;\n  border-radius: 6px;\n  background-color: #fff;\n  border: 1px solid #f3f3f3;\n  transition: 0.2s ease-in-out;\n}\n.waw-checkbox .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 7px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.p20 {\n  padding: 20px;\n}\n.outline-mutted {\n  outline: none;\n}\n.grid-row-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 0 10px;\n}\n.grid-row-3 textarea {\n  resize: vertical;\n  min-height: 38px;\n  height: 38px;\n  max-height: 200px;\n}\n.my10 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.mt10 {\n  margin-top: 10px;\n}\n.waw-select {\n  position: relative;\n}\n.waw-select .arrow::before {\n  transform: rotate(-135deg);\n  top: 15px;\n}\n.waw-select__header {\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  height: calc(1.5em + .75rem + 2px);\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 35px;\n}\n.waw-select__header label {\n  display: -ms-flex;\n  display: flex;\n  width: 100%;\n}\n.waw-select__header::before {\n  content: \"\";\n  transition: 0.3s ease-in-out;\n  position: absolute;\n  display: block;\n  right: 15px;\n  top: 12px;\n  width: 6px;\n  height: 6px;\n  border: solid #495057;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.waw-select__body {\n  display: none;\n  width: 100%;\n  border: 1px solid #fbfbbf;\n  border-radius: 8px;\n  background-color: #fff;\n  max-height: 200px;\n  overflow: auto;\n  border-top-left-radius: 0;\n  z-index: 20;\n  border-top-right-radius: 0;\n  position: absolute;\n  border: 1px solid #c9c9c9;\n  border-radius: 0.25rem;\n  top: 50px;\n  box-shadow: 1px 1px 10px #7d7d7d;\n}\n.waw-select__body._show {\n  display: block;\n}\n.waw-select .selectSwitch {\n  display: none;\n}\n.waw-select .selectSwitch:checked ~ .waw-select__body {\n  display: block;\n}\n.waw-select .selectSwitch:checked ~ .waw-select__header {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.waw-select--item {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.waw-select--item._disabled {\n  color: #b3b3b3;\n}\n.waw-select--item._disabled:hover {\n  font-weight: normal;\n}\n.waw-select--item:hover {\n  font-weight: bold;\n}\n.grid-grow-2 {\n  grid-column-start: 2;\n  grid-column-end: 4;\n}\n.waw-select--item__left {\n  word-break: break-all;\n}\n.waw-select--item__right {\n  font-weight: normal;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 10px;\n  background: #e8f3ff;\n  padding: 0px 5px;\n  white-space: nowrap;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 0.25rem;\n  color: #7dd4c0;\n}\n.my5 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.date-block {\n  height: 100px;\n  justify-content: center;\n  display: flex;\n  border: 1px solid #cecece;\n  padding-left: 10px;\n  flex-direction: column;\n  border-radius: 0.25rem;\n  padding: 5px;\n}\n.select-header__view {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 30px;\n}\n.word-nowrapBlock {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.word-nowrapElem {\n  white-space: nowrap;\n}\n.word-break {\n  word-break: break-word;\n}\n.waw-select--item__left-group {\n  color: #fff;\n  text-shadow: 1px 1px 4px #000;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-right: 5px;\n  line-height: 16px;\n  padding: 0 5px;\n  box-shadow: 1px 1px 7px #b8b8b8;\n}\n.font-normal {\n  font-weight: normal;\n}\n.my10 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9tb2RhbHMvam9iL2pvYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2pvYi9qb2IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNEUjtBRElJO0VBQ0ksMkJBQUE7QUNGUjtBREtJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0hSO0FETUk7RUFDSSxjQUFBO0FDSlI7QURPSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDTFI7QURPUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUdBLHdCQUFBO0FDTFo7QURVQTtFQUNJLGFBQUE7QUNQSjtBRGNBO0VBQ0ksYUFBQTtBQ1hKO0FEMkJBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUN4Qko7QUQwQkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDeEJSO0FENkJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQzFCSjtBRDZCQTtFQUNJLGdCQUFBO0FDMUJKO0FEaUNBO0VBQ0ksa0JBQUE7QUM5Qko7QURpQ1E7RUFHSSwwQkFBQTtFQUNBLFNBQUE7QUMvQlo7QURtQ0k7RUFDSSxXQUFBO0VBRUEseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUVBLHdFQUFBO0VBQ0Esa0NBQUE7RUFFQSxrQkFBQTtFQUVBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ3RDUjtBRHdDUTtFQUVJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUN0Q1o7QUR5Q1E7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUdBLHdCQUFBO0FDdkNaO0FEMkNJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ3pDUjtBRDJDUTtFQUNJLGNBQUE7QUN6Q1o7QUQ4Q0k7RUFDSSxhQUFBO0FDNUNSO0FEK0NJO0VBQ0ksY0FBQTtBQzdDUjtBRGdESTtFQUVJLDRCQUFBO0VBQ0EsNkJBQUE7QUMvQ1I7QURrREk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNoRFI7QURrRFE7RUFDSSxjQUFBO0FDaERaO0FEa0RZO0VBQ0ksbUJBQUE7QUNoRGhCO0FEb0RRO0VBQ0ksaUJBQUE7QUNsRFo7QUR1REE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDcERKO0FEdURBO0VBQ0kscUJBQUE7QUNwREo7QUR1REE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNwREo7QUR1REE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNwREo7QUR1REE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDRyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNILHNCQUFBO0VBQ0csc0JBQUE7RUFDSCxZQUFBO0FDcEREO0FEeURBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUN0REo7QUR5REE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FDdERKO0FEeURBO0VBQ0ksbUJBQUE7QUN0REo7QUR5REE7RUFDSSxzQkFBQTtBQ3RESjtBRHlEQTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUN0REo7QUR5REE7RUFDSSxtQkFBQTtBQ3RESjtBRHdEQTtFQUVDLGdCQUFBO0VBQ0EsbUJBQUE7QUN0REQiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvam9iL2pvYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENIRUNLQk9YXG4ud2F3LWNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAvLyBoaWRkZW4gdG9nZ2xlIGlucHV0XG4gICAgaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIGlucHV0fi5jaGVja21hcmsge1xuICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMzMGE0Zjc7XG4gICAgfVxuXG4gICAgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYTRmNztcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICBpbnB1dDpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuY2hlY2ttYXJrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnAyMCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLy8gLmZpZWxkLWJveF9fdGltZUNvbCB7XG4vLyBcdHdpZHRoOiA1MCU7XG4vLyBcdCY6Zmlyc3QtY2hpbGQge21hcmdpbi1yaWdodDogMTBweDt9XG4vLyB9XG4ub3V0bGluZS1tdXR0ZWQge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi8vIC5yYXRlLXJvdyB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG5cbi8vICAgZGl2IHtcbi8vICAgICBmbGV4LWdyb3c6IDE7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG5cbi8vICAgICAmOm50aC1jaGlsZCgybikge1xuLy8gICAgICAgbWFyZ2luOiAwcHggMTBweDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLmdyaWQtcm93LTMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBncmlkLWdhcDogMCAxMHB4O1xuXG4gICAgdGV4dGFyZWEge1xuICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgICBtaW4taGVpZ2h0OiAzOHB4O1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIH1cbn1cblxuXG4ubXkxMCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubXQxMCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLy8gU0VMRUNUXG5cblxuXG4ud2F3LXNlbGVjdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmFycm93IHtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG5cbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzQ5NTA1NztcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYmZiYmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjN2Q3ZDdkO1xuXG4gICAgICAgICYuX3Nob3cge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5zZWxlY3RTd2l0Y2gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zZWxlY3RTd2l0Y2g6Y2hlY2tlZH4ud2F3LXNlbGVjdF9fYm9keSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5zZWxlY3RTd2l0Y2g6Y2hlY2tlZH4ud2F3LXNlbGVjdF9faGVhZGVyIHtcblxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAmLS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYuX2Rpc2FibGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZ3JpZC1ncm93LTIge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbn1cblxuLndhdy1zZWxlY3QtLWl0ZW1fX2xlZnQge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLndhdy1zZWxlY3QtLWl0ZW1fX3JpZ2h0IHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZThmM2ZmO1xuICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgY29sb3I6ICM3ZGQ0YzA7XG59XG5cbi5teTUge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5kYXRlLWJsb2NrIHtcblx0aGVpZ2h0OiAxMDBweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG5cdHBhZGRpbmc6IDVweDtcbn1cblxuXG5cbi5zZWxlY3QtaGVhZGVyX192aWV3IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4ud29yZC1ub3dyYXBCbG9jayB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndvcmQtbm93cmFwRWxlbSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLndvcmQtYnJlYWsge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi53YXctc2VsZWN0LS1pdGVtX19sZWZ0LWdyb3VwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICNiOGI4Yjg7XG59XG5cbi5mb250LW5vcm1hbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5teTEwIFxue1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufSIsIi53YXctY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi53YXctY2hlY2tib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cbi53YXctY2hlY2tib3g6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMzBhNGY3O1xufVxuLndhdy1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGE0Zjc7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ud2F3LWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2F3LWNoZWNrYm94IC5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ud2F3LWNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxlZnQ6IDdweDtcbiAgdG9wOiAzcHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTFweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnAyMCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5vdXRsaW5lLW11dHRlZCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ncmlkLXJvdy0zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDAgMTBweDtcbn1cbi5ncmlkLXJvdy0zIHRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLm15MTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubXQxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi53YXctc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndhdy1zZWxlY3QgLmFycm93OjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICB0b3A6IDE1cHg7XG59XG4ud2F3LXNlbGVjdF9faGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbn1cbi53YXctc2VsZWN0X19oZWFkZXIgbGFiZWwge1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi53YXctc2VsZWN0X19oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDEycHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXI6IHNvbGlkICM0OTUwNTc7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4ud2F3LXNlbGVjdF9fYm9keSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmJmYmJmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgei1pbmRleDogMjA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRvcDogNTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICM3ZDdkN2Q7XG59XG4ud2F3LXNlbGVjdF9fYm9keS5fc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndhdy1zZWxlY3QgLnNlbGVjdFN3aXRjaCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2F3LXNlbGVjdCAuc2VsZWN0U3dpdGNoOmNoZWNrZWQgfiAud2F3LXNlbGVjdF9fYm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndhdy1zZWxlY3QgLnNlbGVjdFN3aXRjaDpjaGVja2VkIH4gLndhdy1zZWxlY3RfX2hlYWRlciB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLndhdy1zZWxlY3QtLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud2F3LXNlbGVjdC0taXRlbS5fZGlzYWJsZWQge1xuICBjb2xvcjogI2IzYjNiMztcbn1cbi53YXctc2VsZWN0LS1pdGVtLl9kaXNhYmxlZDpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ud2F3LXNlbGVjdC0taXRlbTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ3JpZC1ncm93LTIge1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xufVxuXG4ud2F3LXNlbGVjdC0taXRlbV9fbGVmdCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLndhdy1zZWxlY3QtLWl0ZW1fX3JpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZThmM2ZmO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY29sb3I6ICM3ZGQ0YzA7XG59XG5cbi5teTUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmRhdGUtYmxvY2sge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5zZWxlY3QtaGVhZGVyX192aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4ud29yZC1ub3dyYXBCbG9jayB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud29yZC1ub3dyYXBFbGVtIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLndvcmQtYnJlYWsge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ud2F3LXNlbGVjdC0taXRlbV9fbGVmdC1ncm91cCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICNiOGI4Yjg7XG59XG5cbi5mb250LW5vcm1hbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5teTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/job/job.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/modals/job/job.component.ts ***!
    \*********************************************/

  /*! exports provided: JobComponent */

  /***/
  function srcAppModalsJobJobComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobComponent", function () {
      return JobComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var JobComponent = /*#__PURE__*/function () {
      function JobComponent(modal, gs, ls, es, js, ps, os, us) {
        var _this2 = this;

        _classCallCheck(this, JobComponent);

        this.modal = modal;
        this.gs = gs;
        this.ls = ls;
        this.es = es;
        this.js = js;
        this.ps = ps;
        this.os = os;
        this.us = us;
        this.options = {};
        this.groups = [];
        this.by_group = {};
        this.job = {
          times: {},
          date: {},
          position: ''
        };
        this.dates = [];
        this._dates = {};
        this.assigned = {};
        this.need_hotel = {};
        this.hotel = {};
        this.event_info = true;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.colors = {};
        console.log("this.us", this.us);

        if (!this.job.position && this.ps._positions[this.os.org._id] && this.ps._positions[this.os.org._id].length) {
          this.job.position = this.ps._positions[this.os.org._id][0].value;
        }

        setTimeout(function () {
          if (!_this2.job.assigned) _this2.job.assigned = '';
        }, 250);
      }

      _createClass(JobComponent, [{
        key: "hasDate",
        value: function hasDate() {
          if (this.job.day) return true;

          for (var i = 0; i < this.dates.length; i++) {
            if (this._dates[this.dates[i]]) return true;
          }

          return false;
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.job._id) {
            this.save.emit(this.job);
            this.modal.close();
            return this.js.update(this.job, this.us.refresh.bind(this.us));
          }

          for (var i = 0; i < this.dates.length; i++) {
            if (this._dates[this.dates[i]]) {
              this.job.day = this.dates[i];
              this.job.assigned = this.assigned[this.dates[i]] || null;
              this.job.need_hotel = this.need_hotel[this.dates[i]] || null;
              this.job.hotel = this.hotel[this.dates[i]] || null;
              this.job.__event_dates = this.dates[0];

              if (this.dates.length > 1) {
                this.job.__event_dates += ' - ' + this.dates[this.dates.length - 1];
              }

              this.js.create(this.job, this.us.refresh.bind(this.us));
            }
          }

          this.us.refresh();
          this.modal.close();
        }
      }, {
        key: "allow_alert",
        value: function allow_alert(userId, day) {
          if (this.js.assigned_by_day[day + userId] && this.js.assigned_by_day[day + userId].length > 1) return false;
          if (this.js.assigned_by_day[day + userId] && this.js.assigned_by_day[day + userId].length == 1 && (!this.js.assigned_by_day[day + userId + this.job._id] || !this.js.assigned_by_day[day + userId + this.job._id].length)) return false;
          return true;
        }
      }, {
        key: "allow",
        value: function allow(userId, day) {
          if (this.js.assigned_by_day[day + userId + this.job.event] && this.js.assigned_by_day[day + userId + this.job.event].length >= 1) return true;
          if (this.js.assigned_by_day[day + userId] && this.js.assigned_by_day[day + userId].length > 2) return false;
          if (this.js.assigned_by_day[day + userId] && this.js.assigned_by_day[day + userId].length == 1 && (!this.js.assigned_by_day[day + userId + this.job._id] || !this.js.assigned_by_day[day + userId + this.job._id].length)) return false;
          return true;
        }
      }, {
        key: "init",
        value: function init() {
          if (!this.es.done) {
            return setTimeout(this.init.bind(this), 100);
          }

          if (!this.ls.done) {
            return setTimeout(this.init.bind(this), 100);
          }

          var event = this.es._events[this.job.event];
          if (!event) return;
          var groups = [];

          if (event.labels) {
            var by_label = event.labels.split(', ');

            for (var i = 0; i < by_label.length; i++) {
              var labelId = this.ls.labels_by_name[by_label[i]][0]._id;

              if (!this.gs.groups_by_label[labelId] || !this.gs.groups_by_label[labelId].length) {
                continue;
              }

              for (var j = 0; j < this.gs.groups_by_label[labelId].length; j++) {
                this.colors[this.gs.groups_by_label[labelId][j].name] = this.ls.labels_by_name[by_label[i]][0].color;
                groups.push({
                  name: this.gs.groups_by_label[labelId][j].name,
                  users: this.gs.groups_by_label[labelId][j].users
                });
              }
            }
          }

          this.groups = groups;
          var by_group = {};

          for (var _i = 0; _i < groups.length; _i++) {
            for (var _j = 0; _j < groups[_i].users.length; _j++) {
              if (!by_group[groups[_i].users[_j]]) by_group[groups[_i].users[_j]] = [];

              if (!by_group[groups[_i].users[_j]].includes(groups[_i].name)) {
                by_group[groups[_i].users[_j]].push(groups[_i].name);
              }
            }
          }

          this.by_group = by_group;
        }
      }, {
        key: "positionChanged",
        value: function positionChanged() {
          if (!(this.job.position && this.us.org_pos[this.os.org._id + this.job.position])) {
            this.job.assigned = null;
          }

          for (var i = 0; i < this.dates.length; i++) {
            this.assigned[this.dates[i]] = null;
          }
        }
      }]);

      return JobComponent;
    }();

    JobComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["GroupService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["LabelService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["JobService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["PositionConfigurationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], JobComponent.prototype, "save", void 0);
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-job',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/job/job.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./job.component.scss */
      "./src/app/modals/job/job.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services__WEBPACK_IMPORTED_MODULE_3__["GroupService"], _services__WEBPACK_IMPORTED_MODULE_3__["LabelService"], _services__WEBPACK_IMPORTED_MODULE_3__["EventService"], _services__WEBPACK_IMPORTED_MODULE_3__["JobService"], _services__WEBPACK_IMPORTED_MODULE_3__["PositionConfigurationService"], _services__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], JobComponent);
    /***/
  },

  /***/
  "./src/app/modals/jobl/jobl.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/modals/jobl/jobl.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsJoblJoblComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".p20 {\n  padding: 20px;\n}\n\n.outline-mutted {\n  outline: none;\n}\n\n.grid-row-1 {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 0 10px;\n}\n\n.grid-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 0 10px;\n}\n\n.my10 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.pl15 {\n  padding-left: 15px;\n}\n\n.star-ratings {\n  unicode-bidi: bidi-override;\n  color: #000;\n  font-size: 30px;\n  width: 132px;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.star-ratings .fill-ratings {\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  display: block;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.star-ratings .fill-ratings span {\n  display: inline-block;\n}\n\n.star-ratings .empty-ratings {\n  padding: 0;\n  display: block;\n  z-index: 0;\n}\n\n.jobv-table__text {\n  color: #495057;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9tb2RhbHMvam9ibC9qb2JsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RhbHMvam9ibC9qb2JsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQ0FGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBREtBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDRjs7QURBRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ0VKOztBRERJO0VBQ0UscUJBQUE7QUNHTjs7QURBRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvam9ibC9qb2JsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucDIwIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuXG4ub3V0bGluZS1tdXR0ZWQge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5cbi5ncmlkLXJvdy0xIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtZ2FwOiAwIDEwcHg7XG59XG4uZ3JpZC1yb3ctMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDAgMTBweDtcbn1cblxuLm15MTB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubXQxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucGwxNSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnN0YXItcmF0aW5ncyB7XG4gIHVuaWNvZGUtYmlkaTogYmlkaS1vdmVycmlkZTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDEzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAuZmlsbC1yYXRpbmdzIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG4gIC5lbXB0eS1yYXRpbmdzIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cblxuLmpvYnYtdGFibGVfX3RleHQge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLnAyMCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5vdXRsaW5lLW11dHRlZCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ncmlkLXJvdy0xIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtZ2FwOiAwIDEwcHg7XG59XG5cbi5ncmlkLXJvdy0yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMCAxMHB4O1xufVxuXG4ubXkxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tdDEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBsMTUge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5zdGFyLXJhdGluZ3Mge1xuICB1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiAxMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGFyLXJhdGluZ3MgLmZpbGwtcmF0aW5ncyB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zdGFyLXJhdGluZ3MgLmZpbGwtcmF0aW5ncyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN0YXItcmF0aW5ncyAuZW1wdHktcmF0aW5ncyB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAwO1xufVxuXG4uam9idi10YWJsZV9fdGV4dCB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/jobl/jobl.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/modals/jobl/jobl.component.ts ***!
    \***********************************************/

  /*! exports provided: JoblComponent */

  /***/
  function srcAppModalsJoblJoblComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoblComponent", function () {
      return JoblComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var JoblComponent = /*#__PURE__*/function () {
      function JoblComponent(modal, js, rs, ps, os, us) {
        _classCallCheck(this, JoblComponent);

        this.modal = modal;
        this.js = js;
        this.rs = rs;
        this.ps = ps;
        this.os = os;
        this.us = us;
        this.job = {
          times: {},
          date: {},
          position: ''
        };
        this.dates = [];
        this._dates = {};
        this.event_info = true;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (!this.job.position && this.ps._positions[this.os.org._id] && this.ps._positions[this.os.org._id].length) {
          this.job.position = this.ps._positions[this.os.org._id][0].value;
        }
      }

      _createClass(JoblComponent, [{
        key: "hasDate",
        value: function hasDate() {
          if (this.job.day) return true;

          for (var i = 0; i < this.dates.length; i++) {
            if (this._dates[this.dates[i]]) return true;
          }

          return false;
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.job._id) {
            this.save.emit(this.job);
            this.modal.close();
            return this.js.update(this.job);
          }

          for (var i = 0; i < this.dates.length; i++) {
            if (this._dates[this.dates[i]]) {
              this.job.day = this.dates[i];
              this.js.create(this.job);
            }
          }

          this.modal.close();
        }
      }, {
        key: "color",
        value: function color(job) {
          var prefix = this.job.event + job.assigned + this.job.day;
          var rate = this.rs.rated[prefix];

          if (this.rs._rates[prefix]) {
            return {
              color: '#f39c12',
              width: this.rs._rates[prefix].rate / 5 * 100 + '%'
            };
          } else {
            return {
              color: '#7f8c8d',
              width: rate / 5 * 100 + '%'
            };
          }
        }
      }, {
        key: "rate",
        value: function rate(_rate, job) {
          this.rs.create({
            rate: _rate,
            user: this.us.user._id,
            code: job.assigned,
            event: this.job.event,
            day: this.job.day
          });
        }
      }]);

      return JoblComponent;
    }();

    JoblComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["JobService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["RateService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["PositionConfigurationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], JoblComponent.prototype, "save", void 0);
    JoblComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jobl',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jobl.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/jobl/jobl.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jobl.component.scss */
      "./src/app/modals/jobl/jobl.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services__WEBPACK_IMPORTED_MODULE_3__["JobService"], _services__WEBPACK_IMPORTED_MODULE_3__["RateService"], _services__WEBPACK_IMPORTED_MODULE_3__["PositionConfigurationService"], _services__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], JoblComponent);
    /***/
  },

  /***/
  "./src/app/modals/jobv/jobv.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/modals/jobv/jobv.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsJobvJobvComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".p20 {\n  padding: 20px;\n}\n\n.outline-mutted {\n  outline: none;\n}\n\n.grid-row-1 {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 0 10px;\n}\n\n.grid-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 0 10px;\n}\n\n.my10 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.pl15 {\n  padding-left: 15px;\n}\n\n.star-ratings {\n  unicode-bidi: bidi-override;\n  color: #000;\n  font-size: 30px;\n  width: 132px;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.star-ratings .fill-ratings {\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  display: block;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.star-ratings .fill-ratings span {\n  display: inline-block;\n}\n\n.star-ratings .empty-ratings {\n  padding: 0;\n  display: block;\n  z-index: 0;\n}\n\n.jobv-table__text {\n  color: #495057;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9tb2RhbHMvam9idi9qb2J2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RhbHMvam9idi9qb2J2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQ0FGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBREtBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDRjs7QURBRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ0VKOztBRERJO0VBQ0UscUJBQUE7QUNHTjs7QURBRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvam9idi9qb2J2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucDIwIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuXG4ub3V0bGluZS1tdXR0ZWQge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5cbi5ncmlkLXJvdy0xIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtZ2FwOiAwIDEwcHg7XG59XG4uZ3JpZC1yb3ctMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDAgMTBweDtcbn1cblxuLm15MTB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubXQxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucGwxNSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnN0YXItcmF0aW5ncyB7XG4gIHVuaWNvZGUtYmlkaTogYmlkaS1vdmVycmlkZTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDEzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAuZmlsbC1yYXRpbmdzIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG4gIC5lbXB0eS1yYXRpbmdzIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cblxuLmpvYnYtdGFibGVfX3RleHQge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLnAyMCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5vdXRsaW5lLW11dHRlZCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ncmlkLXJvdy0xIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtZ2FwOiAwIDEwcHg7XG59XG5cbi5ncmlkLXJvdy0yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMCAxMHB4O1xufVxuXG4ubXkxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tdDEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBsMTUge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5zdGFyLXJhdGluZ3Mge1xuICB1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiAxMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGFyLXJhdGluZ3MgLmZpbGwtcmF0aW5ncyB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zdGFyLXJhdGluZ3MgLmZpbGwtcmF0aW5ncyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN0YXItcmF0aW5ncyAuZW1wdHktcmF0aW5ncyB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAwO1xufVxuXG4uam9idi10YWJsZV9fdGV4dCB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/jobv/jobv.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/modals/jobv/jobv.component.ts ***!
    \***********************************************/

  /*! exports provided: JobvComponent */

  /***/
  function srcAppModalsJobvJobvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobvComponent", function () {
      return JobvComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var JobvComponent = /*#__PURE__*/function () {
      function JobvComponent(modal, js, rs, ps, os, us) {
        _classCallCheck(this, JobvComponent);

        this.modal = modal;
        this.js = js;
        this.rs = rs;
        this.ps = ps;
        this.os = os;
        this.us = us;
        this.job = {
          times: {},
          date: {},
          position: ''
        };
        this.dates = [];
        this._dates = {};
        this.event_info = true;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (!this.job.position && this.ps._positions[this.os.org._id] && this.ps._positions[this.os.org._id].length) {
          this.job.position = this.ps._positions[this.os.org._id][0].value;
        }
      }

      _createClass(JobvComponent, [{
        key: "hasDate",
        value: function hasDate() {
          if (this.job.day) return true;

          for (var i = 0; i < this.dates.length; i++) {
            if (this._dates[this.dates[i]]) return true;
          }

          return false;
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.job._id) {
            this.save.emit(this.job);
            this.modal.close();
            return this.js.update(this.job);
          }

          for (var i = 0; i < this.dates.length; i++) {
            if (this._dates[this.dates[i]]) {
              this.job.day = this.dates[i];
              this.js.create(this.job);
            }
          }

          this.modal.close();
        }
      }, {
        key: "color",
        value: function color(job) {
          var prefix = this.job.event + job.assigned + this.job.day;
          var rate = this.rs.rated[prefix];

          if (this.rs._rates[prefix]) {
            return {
              color: '#f39c12',
              width: this.rs._rates[prefix].rate / 5 * 100 + '%'
            };
          } else {
            return {
              color: '#7f8c8d',
              width: rate / 5 * 100 + '%'
            };
          }
        }
      }, {
        key: "rate",
        value: function rate(_rate2, job) {
          this.rs.create({
            rate: _rate2,
            user: this.us.user._id,
            code: job.assigned,
            event: this.job.event,
            day: this.job.day
          });
        }
      }]);

      return JobvComponent;
    }();

    JobvComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["JobService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["RateService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["PositionConfigurationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], JobvComponent.prototype, "save", void 0);
    JobvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jobv',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jobv.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/jobv/jobv.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jobv.component.scss */
      "./src/app/modals/jobv/jobv.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services__WEBPACK_IMPORTED_MODULE_3__["JobService"], _services__WEBPACK_IMPORTED_MODULE_3__["RateService"], _services__WEBPACK_IMPORTED_MODULE_3__["PositionConfigurationService"], _services__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], JobvComponent);
    /***/
  },

  /***/
  "./src/app/modals/labelc/labelc.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/modals/labelc/labelc.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsLabelcLabelcComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my10 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.label-field {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.label-field__color {\n  max-width: 40px;\n  width: 100%;\n  cursor: pointer;\n  margin-left: 10px;\n  padding: 5px;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9tb2RhbHMvbGFiZWxjL2xhYmVsYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2xhYmVsYy9sYWJlbGMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0VEOztBRERDO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUE7RUFDQyxnQkFBQTtBQ0dEIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2xhYmVsYy9sYWJlbGMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXkxMCB7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubGFiZWwtZmllbGQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdCZfX2NvbG9yIHtcblx0XHRtYXgtd2lkdGg6IDQwcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdHBhZGRpbmc6IDVweDtcblx0fVxufVxuLm10MTUge1xuXHRtYXJnaW4tdG9wOiAxNXB4O1xufSIsIi5teTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxhYmVsLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmxhYmVsLWZpZWxkX19jb2xvciB7XG4gIG1heC13aWR0aDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm10MTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/labelc/labelc.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/modals/labelc/labelc.component.ts ***!
    \***************************************************/

  /*! exports provided: LabelcComponent */

  /***/
  function srcAppModalsLabelcLabelcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelcComponent", function () {
      return LabelcComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var LabelcComponent = /*#__PURE__*/function () {
      function LabelcComponent(modal, ls) {
        _classCallCheck(this, LabelcComponent);

        this.modal = modal;
        this.ls = ls;
        this.name = '';
        this.color = '';
        this.refresh = '';
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(LabelcComponent, [{
        key: "create",
        value: function create() {
          this.ls.create({
            category: this.category.name,
            color: this.color,
            name: this.name
          }, this.refresh);
          this.modal.close();
        }
      }]);

      return LabelcComponent;
    }();

    LabelcComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["LabelService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], LabelcComponent.prototype, "add", void 0);
    LabelcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-labelc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./labelc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/labelc/labelc.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./labelc.component.scss */
      "./src/app/modals/labelc/labelc.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services__WEBPACK_IMPORTED_MODULE_3__["LabelService"]])], LabelcComponent);
    /***/
  },

  /***/
  "./src/app/modals/message/message.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/modals/message/message.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsMessageMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".c-text {\n  color: #666;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.message-textarea {\n  min-height: 60px;\n  max-height: 300px;\n  resize: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9tb2RhbHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RhbHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksV0FBQTtBQ0NMOztBREVDO0VBQ0ksZ0JBQUE7QUNDTDs7QURFQztFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NMIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuYy10ZXh0IHtcbiAgICAgY29sb3I6ICM2NjY7XG4gfVxuXG4gLm10MTUge1xuICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuIH1cblxuIC5tZXNzYWdlLXRleHRhcmVhIHtcbiAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgIHJlc2l6ZTogdmVydGljYWw7XG4gfSIsIi5jLXRleHQge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLm10MTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubWVzc2FnZS10ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICByZXNpemU6IHZlcnRpY2FsO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/message/message.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modals/message/message.component.ts ***!
    \*****************************************************/

  /*! exports provided: MessageComponent */

  /***/
  function srcAppModalsMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
      return MessageComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var MessageComponent = /*#__PURE__*/function () {
      function MessageComponent(modal) {
        _classCallCheck(this, MessageComponent);

        this.modal = modal;
        this.title = '';
        this.message = '';
        this.placeholder = '';
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MessageComponent, [{
        key: "submit",
        value: function submit() {
          this.save.emit(this.message);
          this.modal.close();
        }
      }]);

      return MessageComponent;
    }();

    MessageComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MessageComponent.prototype, "save", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MessageComponent.prototype, "cancel", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/message/message.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message.component.scss */
      "./src/app/modals/message/message.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])], MessageComponent);
    /***/
  },

  /***/
  "./src/app/modals/orgmail/orgmail.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/modals/orgmail/orgmail.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsOrgmailOrgmailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".email-msg__input {\n  margin-bottom: 10px;\n}\n.email-msg__textarea {\n  margin-bottom: 10px;\n  resize: vertical;\n  min-height: 38px;\n  max-height: 250px;\n}\n.email-date {\n  margin: 20px 0;\n}\n.email {\n  padding: 20px;\n}\n.date-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin-bottom: 10px;\n}\n.email-title {\n  color: #666;\n}\n.mb20 {\n  margin-bottom: 20px;\n}\n.waw-checkbox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: 25px;\n  padding-left: 35px;\n  margin-bottom: 0;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.waw-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.waw-checkbox:hover input ~ .checkmark {\n  border: 1.5px solid #30a4f7;\n}\n.waw-checkbox input:checked ~ .checkmark {\n  background-color: #30a4f7;\n  transition: 0.2s ease-in-out;\n}\n.waw-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n.waw-checkbox .checkmark {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  height: 22px;\n  width: 22px;\n  border-radius: 6px;\n  background-color: #fff;\n  border: 1px solid #f3f3f3;\n  transition: 0.2s ease-in-out;\n}\n.waw-checkbox .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 7px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9tb2RhbHMvb3JnbWFpbC9vcmdtYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RhbHMvb3JnbWFpbC9vcmdtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0MsbUJBQUE7QUNBSDtBREdFO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNESDtBRElBO0VBQ0MsY0FBQTtBQ0REO0FER0E7RUFDRSxhQUFBO0FDQUY7QURFQTtFQUNDLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDQ0Q7QURDQTtFQUNDLFdBQUE7QUNFRDtBRENBO0VBQ0MsbUJBQUE7QUNFRDtBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNFRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQ0o7QURFRTtFQUNFLDJCQUFBO0FDQUo7QURHRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtBQ0ZKO0FES0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ0hKO0FES0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL29yZ21haWwvb3JnbWFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbC1tc2cge1xuICAmX19pbnB1dCB7XG5cdCAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcblx0ICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHQgIHJlc2l6ZTogdmVydGljYWw7XG5cdCAgbWluLWhlaWdodDogMzhweDtcblx0ICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgfVxufVxuLmVtYWlsLWRhdGUge1xuXHRtYXJnaW46IDIwcHggMDtcbn1cbi5lbWFpbCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uZGF0ZS1ncmlkIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5lbWFpbC10aXRsZSB7XG5cdGNvbG9yOiAjNjY2O1xufVxuXG4ubWIyMHtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi8vIENIRUNLQk9YXG4ud2F3LWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLy8gaGlkZGVuIHRvZ2dsZSBpbnB1dFxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gICY6aG92ZXIgaW5wdXR+LmNoZWNrbWFyayB7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMzBhNGY3O1xuICB9XG5cbiAgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBhNGY3O1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICBpbnB1dDpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogM3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBsZWZ0OiA3cHg7XG4gICAgICB0b3A6IDNweDtcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gIH1cbn0iLCIuZW1haWwtbXNnX19pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZW1haWwtbXNnX190ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xufVxuXG4uZW1haWwtZGF0ZSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uZW1haWwge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGF0ZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmVtYWlsLXRpdGxlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5tYjIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLndhdy1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLndhdy1jaGVja2JveCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuLndhdy1jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMzMGE0Zjc7XG59XG4ud2F3LWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYTRmNztcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi53YXctY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53YXctY2hlY2tib3ggLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi53YXctY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgbGVmdDogN3B4O1xuICB0b3A6IDNweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/orgmail/orgmail.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modals/orgmail/orgmail.component.ts ***!
    \*****************************************************/

  /*! exports provided: OrgmailComponent */

  /***/
  function srcAppModalsOrgmailOrgmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrgmailComponent", function () {
      return OrgmailComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");

    var OrgmailComponent = /*#__PURE__*/function () {
      function OrgmailComponent(modal, https, storage, us, os, http) {
        _classCallCheck(this, OrgmailComponent);

        this.modal = modal;
        this.https = https;
        this.storage = storage;
        this.us = us;
        this.os = os;
        this.http = http;
        this.email = {};
      }

      _createClass(OrgmailComponent, [{
        key: "submit",
        value: function submit() {
          var _this3 = this;

          this.https.spin = true;
          this.email.to = [];

          for (var i = 0; i < this.us.users_current.length; i++) {
            this.email.to.push({
              name: this.us.users_current[i].firstName + ' ' + this.us.users_current[i].lastName,
              email: this.us.users_current[i].email
            });
          }

          this.email.OrgName = this.os.org.name;
          this.http.post(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/org/inform', this.email).subscribe(function (data) {
            _this3.https.spin = false;

            if (data) {
              _this3.storage.store('alert', {
                type: 'success',
                message: 'Emails has been sent'
              });
            }
          });
          this.modal.close();
        }
      }]);

      return OrgmailComponent;
    }();

    OrgmailComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    OrgmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orgmail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orgmail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/orgmail/orgmail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orgmail.component.scss */
      "./src/app/modals/orgmail/orgmail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services__WEBPACK_IMPORTED_MODULE_5__["HttpService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"], _services__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], OrgmailComponent);
    /***/
  },

  /***/
  "./src/app/pages/admin/api/api.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/admin/api/api.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminApiApiComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FwaS9hcGkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/admin/api/api.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/admin/api/api.component.ts ***!
    \**************************************************/

  /*! exports provided: ApiComponent */

  /***/
  function srcAppPagesAdminApiApiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiComponent", function () {
      return ApiComponent;
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


    var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var ApiComponent = /*#__PURE__*/function () {
      function ApiComponent(http, us) {
        var _this4 = this;

        _classCallCheck(this, ApiComponent);

        this.http = http;
        this.us = us;
        this.modules = [{
          name: 'User',
          description: ""
        }, {
          name: 'Event',
          description: ""
        }, {
          name: 'Category',
          description: ""
        }, {
          name: 'File',
          description: ""
        }, {
          name: 'Group',
          description: ""
        }, {
          name: 'Inventory',
          description: ""
        }, {
          name: 'Job',
          description: ""
        }, {
          name: 'Label',
          description: ""
        }, {
          name: 'Location',
          description: ""
        }, {
          name: 'Organization',
          description: ""
        }, {
          name: 'Position',
          description: ""
        }, {
          name: 'Rate',
          description: ""
        }];
        this.module = this.modules[0].name;
        this.roles = [{
          name: 'Guest',
          description: "User which don't have yet account or have to sign in."
        }, {
          name: 'Memeber',
          description: "User which have signed in, but don't have admin authority"
        }, {
          name: 'Admin',
          description: "User which have admin authority"
        }];
        this.url = _env__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationURI + '/api/restapi';
        this.routes = [{
          role: {}
        }, {
          role: {}
        }, {
          role: {}
        }];
        this._routes = {};
        this.http.get('/api/restapi/get').subscribe(function (routes) {
          for (var i = 0; i < routes.length; i++) {
            if (!_this4._routes[routes[i].model]) {
              _this4._routes[routes[i].model] = [];
            }

            if (!routes[i].role) routes[i].role = {};

            _this4._routes[routes[i].model].push(routes[i]);
          }
        });
      }

      _createClass(ApiComponent, [{
        key: "create",
        value: function create() {
          var _this5 = this;

          var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          route.model = this.module;
          this.http.post('/api/restapi/create', route).subscribe(function (created) {
            if (!created.role) created.role = {};

            if (!_this5._routes[_this5.module]) {
              _this5._routes[_this5.module] = [];
            }

            if (created) {
              _this5._routes[_this5.module].push(created);
            }
          });
        }
      }, {
        key: "update",
        value: function update(route) {
          var _this6 = this;

          this.us.afterWhile(route, function () {
            _this6.http.post('/api/restapi/update', route).subscribe(function (routes) {});
          });
        }
      }, {
        key: "delete",
        value: function _delete(route) {
          this.http.post('/api/restapi/delete', {
            _id: route._id
          }).subscribe(function (routes) {});
        }
      }]);

      return ApiComponent;
    }();

    ApiComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    ApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-api',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./api.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/api/api.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./api.component.scss */
      "./src/app/pages/admin/api/api.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], ApiComponent);
    /***/
  },

  /***/
  "./src/app/pages/admin/events/events.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/admin/events/events.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminEventsEventsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/admin/events/events.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/admin/events/events.component.ts ***!
    \********************************************************/

  /*! exports provided: EventsComponent */

  /***/
  function srcAppPagesAdminEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
      return EventsComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var EventsComponent = /*#__PURE__*/function () {
      function EventsComponent(http, us) {
        _classCallCheck(this, EventsComponent);

        this.http = http;
        this.us = us;
        this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.events = [];
        this.displayEvents = {};
        this.displayDates = [];
        this.user = {};
      }

      _createClass(EventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["environment"].applicationURI + '/api/getEvents/' + this.us.user._id).subscribe(function (res) {
            _this7.events = res;

            _this7.sortEvents();
          });
        }
      }, {
        key: "sortEvents",
        value: function sortEvents() {
          var _this8 = this;

          this.events.forEach(function (event) {
            if (!_this8.displayEvents[event.date]) {
              _this8.displayEvents[event.date] = [];

              _this8.displayDates.push(event.date);
            }

            _this8.displayEvents[event.date].push(event);
          });
        }
      }]);

      return EventsComponent;
    }();

    EventsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./events.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/events/events.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./events.component.scss */
      "./src/app/pages/admin/events/events.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], EventsComponent);
    /***/
  },

  /***/
  "./src/app/pages/admin/events/row/row.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/admin/events/row/row.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminEventsRowRowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2V2ZW50cy9yb3cvcm93LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/admin/events/row/row.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/admin/events/row/row.component.ts ***!
    \*********************************************************/

  /*! exports provided: RowComponent */

  /***/
  function srcAppPagesAdminEventsRowRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RowComponent", function () {
      return RowComponent;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var RowComponent = /*#__PURE__*/function () {
      function RowComponent(us) {
        _classCallCheck(this, RowComponent);

        this.us = us;
      }

      _createClass(RowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkForCallTime();
        }
      }, {
        key: "checkForCallTime",
        value: function checkForCallTime() {
          var _this9 = this;

          this.events.forEach(function (event) {
            var keys = Object.keys(event.crew);
            keys.forEach(function (key) {
              event.crew[key].forEach(function (crew) {
                if (crew._id === _this9.us.user._id) {
                  event.userCallTime = crew.callTime;
                }
              });
            });
          });
        }
      }]);

      return RowComponent;
    }();

    RowComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RowComponent.prototype, "events", void 0);
    RowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'event-row',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./row.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/events/row/row.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./row.component.scss */
      "./src/app/pages/admin/events/row/row.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], RowComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/column-configuration-flyout/column-configuration-flyout.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/pages/dashboard/column-configuration-flyout/column-configuration-flyout.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardColumnConfigurationFlyoutColumnConfigurationFlyoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flyout {\n  /*\n      background-color:#222222;\n   */\n  height: calc(100%);\n  width: 400px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n}\n\n.btn-add {\n  background-color: green;\n  border-color: green;\n  width: 50px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-left: 27px;\n  padding: 3px;\n  float: left;\n  color: white;\n}\n\n.trash {\n  background-color: #ee352a;\n  border: none;\n  color: white;\n  padding: 4px;\n  border-top-right-radius: 5px 5px;\n  border-bottom-right-radius: 5px 5px;\n}\n\n.cancel {\n  background: none;\n  border: none;\n  border-color: none;\n  color: whitesmoke;\n}\n\n.save {\n  padding: 3px;\n  color: white;\n  border-radius: 5px 5px;\n  background-color: green;\n  border-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY29sdW1uLWNvbmZpZ3VyYXRpb24tZmx5b3V0L2NvbHVtbi1jb25maWd1cmF0aW9uLWZseW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NvbHVtbi1jb25maWd1cmF0aW9uLWZseW91dC9jb2x1bW4tY29uZmlndXJhdGlvbi1mbHlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7SUFBQTtFQUdBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY29sdW1uLWNvbmZpZ3VyYXRpb24tZmx5b3V0L2NvbHVtbi1jb25maWd1cmF0aW9uLWZseW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbHlvdXQge1xuICAgIC8qXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzIyMjIyMjtcbiAgICAgKi9cbiAgICBoZWlnaHQ6Y2FsYygxMDAlKTtcbiAgICB3aWR0aDo0MDBweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICByaWdodDowO1xuICAgIHotaW5kZXg6MTA7XG59XG5cbi5idG4tYWRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6MjdweDtcbiAgICBwYWRkaW5nOjNweDtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4udHJhc2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTM1MmE7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzo0cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHggNXB4O1xufVxuXG4uY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5zYXZlIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbn0iLCIuZmx5b3V0IHtcbiAgLypcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzIyMjIyMjtcbiAgICovXG4gIGhlaWdodDogY2FsYygxMDAlKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYnRuLWFkZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMjdweDtcbiAgcGFkZGluZzogM3B4O1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHJhc2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzNTJhO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweCA1cHg7XG59XG5cbi5jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5zYXZlIHtcbiAgcGFkZGluZzogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/column-configuration-flyout/column-configuration-flyout.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/dashboard/column-configuration-flyout/column-configuration-flyout.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: ColumnConfigurationFlyoutComponent */

  /***/
  function srcAppPagesDashboardColumnConfigurationFlyoutColumnConfigurationFlyoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnConfigurationFlyoutComponent", function () {
      return ColumnConfigurationFlyoutComponent;
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


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var ColumnConfigurationFlyoutComponent = /*#__PURE__*/function () {
      function ColumnConfigurationFlyoutComponent(storage, os, us, formBuilder, http) {
        _classCallCheck(this, ColumnConfigurationFlyoutComponent);

        this.storage = storage;
        this.os = os;
        this.us = us;
        this.formBuilder = formBuilder;
        this.http = http;
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasChanges = false;
        this.originalColumns = [];
        this.addedIndexes = [];
        this.removedIndexes = [];
        this.columnOptions = ["title", "venue", "position", "date", "time"];
        this.defaultOptions = ["title", "venue", "position", "date", "time"];
      }

      _createClass(ColumnConfigurationFlyoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          if (this.us.user) {
            this.username = this.us.user.email;

            if (this.us.user.columnHeaderConfiguration) {
              this.columnHeaders = _toConsumableArray(this.us.user.columnHeaderConfiguration);
            } else {
              this.originalColumns = _toConsumableArray(this.columnHeaders);
            }
          }

          if (this.columnHeaders.length < 1) {
            this.columnHeaders = _toConsumableArray(this.defaultOptions);
          }

          this.columnForm = this.formBuilder.group({});
          this.columnHeaders.forEach(function (header, index) {
            _this10.columnForm.addControl(index, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](header));
          });
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.expandFlyout = false;
        }
      }, {
        key: "addColumn",
        value: function addColumn() {
          this.columnForm.addControl(this.columnHeaders.length, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
          this.columnHeaders.push('');
          this.addedIndexes.push(this.columnHeaders.length);
          this.hasChanges = true;
        }
      }, {
        key: "addColumnValue",
        value: function addColumnValue(index, option) {
          this.columnHeaders[index] = this.columnForm.controls[index].value;
          this.hasChanges = true;
        }
      }, {
        key: "removeColumn",
        value: function removeColumn(index) {
          this.columnHeaders.splice(index, 1);
          this.columnForm.removeControl(index);
          this.removedIndexes.push(index);
          this.columnHeaders = this.columnHeaders;
          this.hasChanges = true;
        }
      }, {
        key: "cancelChanges",
        value: function cancelChanges() {
          var _this11 = this;

          this.addedIndexes.forEach(function (index) {
            _this11.columnForm.removeControl(index);
          });
          this.removedIndexes.forEach(function (index) {
            _this11.columnForm.addControl(index, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this11.originalColumns[index]));
          });
          this.columnHeaders = _toConsumableArray(this.originalColumns);
          this.onCancel.emit(this.columnHeaders);
          this.addedIndexes = [];
          this.hasChanges = false;
        }
      }, {
        key: "saveConfiguration",
        value: function saveConfiguration() {
          var _this12 = this;

          this.http.put('api/updateDashboardConfiguration', {
            username: this.username,
            columnHeaders: this.columnHeaders
          }).subscribe(function (res) {
            _this12.us.user = res;

            _this12.storage.store('user', res.data);

            _this12.expandFlyout = false;
          });
        }
      }]);

      return ColumnConfigurationFlyoutComponent;
    }();

    ColumnConfigurationFlyoutComponent.ctorParameters = function () {
      return [{
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ColumnConfigurationFlyoutComponent.prototype, "onCancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ColumnConfigurationFlyoutComponent.prototype, "expandFlyout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ColumnConfigurationFlyoutComponent.prototype, "columnHeaders", void 0);
    ColumnConfigurationFlyoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-column-configuration-flyout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./column-configuration-flyout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/column-configuration-flyout/column-configuration-flyout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./column-configuration-flyout.component.scss */
      "./src/app/pages/dashboard/column-configuration-flyout/column-configuration-flyout.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], ColumnConfigurationFlyoutComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-primary, .btn-cog {\n  background-color: #ee352a;\n  border-color: #ee352a;\n  width: 100px;\n  border-radius: 5px 5px;\n  float: right;\n  height: 38px;\n}\n\n.btn-cog {\n  background-color: goldenrod;\n  width: 40px;\n  border-color: goldenrod;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcHJpbWFyeSwgLmJ0bi1jb2cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTM1MmE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWUzNTJhO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGhlaWdodDozOHB4O1xufVxuXG4uYnRuLWNvZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpnb2xkZW5yb2Q7XG4gICAgd2lkdGg6NDBweDtcbiAgICBib3JkZXItY29sb3I6IGdvbGRlbnJvZDtcbn0iLCIuYnRuLXByaW1hcnksIC5idG4tY29nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzUyYTtcbiAgYm9yZGVyLWNvbG9yOiAjZWUzNTJhO1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG4uYnRuLWNvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1jb2xvcjogZ29sZGVucm9kO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var moment_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment-range */
    "./node_modules/moment-range/dist/moment-range.js");
    /* harmony import */


    var moment_range__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var wacom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! wacom */
    "./node_modules/wacom/fesm2015/wacom.js");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @modals */
    "./src/app/modals/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_12__);

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(http, modalService, mongo, us, es, ls, storage, os, js, positionConfigurationService, formBuider) {
        _classCallCheck(this, DashboardComponent);

        this.http = http;
        this.modalService = modalService;
        this.mongo = mongo;
        this.us = us;
        this.es = es;
        this.ls = ls;
        this.storage = storage;
        this.os = os;
        this.js = js;
        this.positionConfigurationService = positionConfigurationService;
        this.formBuider = formBuider;
        this.events = [];
        this.pastEvents = [];
        this.upcomingEvents = [];
        this.positionConfigurationMap = {};
        this.allPastEvents = [];
        this.allUpcomingEvents = [];
        this.expandFlyout = false;
        this.columnHeaders = ["title", "venue", "position", "date", "time"];
        this.originalColumnHeaders = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.filterForm = this.formBuider.group({
            filter: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
          this.filterForm.controls.filter.valueChanges.subscribe(function (change) {
            _this13.upcomingEvents = _this13.search(change, 'allUpcomingEvents');
            _this13.pastEvents = _this13.search(change, 'allPastEvents');
          }); // this.http.get(environment.applicationURI + '/api/getEvents/' + this.us.user._id).subscribe((res: Array<any>) => {
          //   this.events = res;
          //   this.sortEvents();
          //   this.allUpcomingEvents = this.upcomingEvents;
          //   this.allPastEvents = this.pastEvents;
          // });

          this.mongo.on('event', function () {
            _this13.events = _this13.es.events || [];

            _this13.sortEvents();

            _this13.allUpcomingEvents = _this13.upcomingEvents;
            _this13.allPastEvents = _this13.pastEvents;
          });
          this.positionConfigurationService.getPositions(this.us.user.organizations[0]._id).subscribe(function (data) {
            if (data) {
              Object.keys(data).forEach(function (key) {
                _this13.positionConfigurationMap[key] = data[key].label;
              });
            }

            _this13.positionConfigurationMap['Creator'] = 'Creator';
          });
        }
      }, {
        key: "search",
        value: function search(text, index) {
          var _this14 = this;

          return this[index].filter(function (event) {
            var term = text.toLowerCase();
            return event.title.toLowerCase().includes(term) || event.location.address.toLowerCase().includes(term) || _this14.positionConfigurationMap[event.position].toLowerCase().includes(term) || event.date.toLowerCase().includes(term) || event.time.toLowerCase().includes(term) || event.labels.toLowerCase().includes(term);
          });
        }
      }, {
        key: "showConfigModal",
        value: function showConfigModal() {
          this.expandFlyout = !this.expandFlyout;
        }
      }, {
        key: "cancelConfig",
        value: function cancelConfig() {
          this.expandFlyout = false;
          this.columnHeaders = _toConsumableArray(this.originalColumnHeaders);
        }
      }, {
        key: "createDynmicColumnModel",
        value: function createDynmicColumnModel(event) {
          var _this15 = this;

          if (!event.dynamicColumns) {
            event.dynamicColumns = {};
          }

          this.columnHeaders.forEach(function (header) {
            if (event) {
              event.dynamicColumns[header] = '';
            }

            event.dynamicColumns[header] = _this15.getValueFromHeader(header, event);
          });
          return event;
        }
      }, {
        key: "getValueFromHeader",
        value: function getValueFromHeader(header, event) {
          var value;
          header = header.toLowerCase();

          switch (header) {
            case 'title':
              value = event.title;
              break;

            case 'venue':
              if (!Object(util__WEBPACK_IMPORTED_MODULE_12__["isNullOrUndefined"])(event.location)) value = event.location.address;
              break;

            case 'position':
              if (event && event.position) {
                if (this.positionConfigurationMap[event.position]) {
                  value = this.positionConfigurationMap[event.position];
                } else {
                  value = 'Creator';
                }
              }

              break;

            case 'date':
              value = event.date;
              break;

            case 'time':
              value = event.time;
              break;

            default:
              break;
          }

          return value;
        }
      }, {
        key: "sortEvents",
        value: function sortEvents() {
          var _this16 = this;

          this.mongo.on('job', function () {
            _this16.events.forEach(function (event) {
              event.dates.forEach(function (date) {
                if (!_this16.js.assigned_by_day[date + _this16.us.user._id + event._id] && !_this16.us.user.isAdmin) return;
                var userEvent = Object.assign({}, event);
                userEvent.date = date;
                userEvent.time = event && event.times && event.times[date] && event.times[date].time || 'N/A';
                userEvent.position = 'Creator';
                userEvent = _this16.createDynmicColumnModel(userEvent);

                if (new Date(userEvent.date).getTime() < Date.now()) {
                  _this16.pastEvents.push(userEvent);
                } else {
                  _this16.upcomingEvents.push(userEvent);
                }
              });
            });
          });

          function compare(a, b) {
            var eventDateTimeA = new Date(a.date).getTime();
            var eventDataTimeB = new Date(b.date).getTime();
            var comparison = 0;

            if (eventDateTimeA < eventDataTimeB) {
              comparison = 1;
            } else if (eventDateTimeA > eventDataTimeB) {
              comparison = -1;
            }

            return comparison;
          }

          this.pastEvents.sort(compare);
          this.upcomingEvents.sort(compare);
        } // Handle the click event to prevent prematurely opening an event

      }, {
        key: "handleActions",
        value: function handleActions(mouseEvent) {
          mouseEvent.stopPropagation();
        } // Remove the user from the event making it available for another user to take it

      }, {
        key: "removeUser",
        value: function removeUser(event, eventDate) {
          var _this17 = this;

          var newlyAvailablePosition = {
            date: eventDate,
            callTime: '',
            position: '',
            oldCrewId: '',
            organizationId: this.us.user.organizations[0]._id,
            isNew: true
          };
          event.crew[eventDate].forEach(function (crew) {
            if (crew._id === _this17.us.user._id) {
              crew.isAvailable = true;
              newlyAvailablePosition.callTime = crew.callTime;
              newlyAvailablePosition.position = crew.position;
              newlyAvailablePosition.oldCrewId = crew._id;
              event.hasAvailability = true;
            }
          });
          event.removedUser = this.us.user;
          event.availablePosition = newlyAvailablePosition;
          this.http.post(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/updateEvent', event).subscribe(function (res) {
            // TODO: Remove the button, because the slot is now available to be grabbed.
            _this17.storage.store('alert', {
              type: 'success',
              message: 'Your position is now available to others!'
            });
          });
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(event) {
          var _this18 = this;

          if (confirm('Are you sure you want to delete ' + event.title + '?')) {
            this.http["delete"](_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/deleteEvent/' + event._id).subscribe(function (res) {
              _this18.storage.store('alert', {
                type: 'success',
                message: 'Event has been successfully deleted!'
              });

              _this18.upcomingEvents = _this18.upcomingEvents.filter(function (element, index, arr) {
                return element._id !== event._id;
              });
              _this18.pastEvents = _this18.pastEvents.filter(function (element, index, arr) {
                return element._id !== event._id;
              });
            });
          }
        }
      }, {
        key: "create_event",
        value: function create_event(event) {
          var _this19 = this;

          this.es.create(event, function (newEvent) {
            _this19.events.push(newEvent);

            _this19.sortEvents();

            _this19.allUpcomingEvents = _this19.upcomingEvents;
            _this19.allPastEvents = _this19.pastEvents;

            _this19.http.post(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/updateUserEvents/' + newEvent._id, {
              listOfUsers: [_this19.us.user._id]
            }).subscribe(function (response) {});
          }, false);
        }
      }, {
        key: "import",
        value: function _import(files) {
          var _this20 = this;

          if (files && files.length > 0) {
            var file = files.item(0);
            var reader = new FileReader();
            reader.readAsText(file);

            reader.onload = function (e) {
              var csv = reader.result;
              csv = csv.match(/[^\r\n]+/g);

              for (var i = 0; i < csv.length; i++) {
                csv[i] = csv[i].split(',');
              }

              var fields = csv.shift();

              for (var _i2 = 0; _i2 < csv.length; _i2++) {
                var obj = {};

                for (var j = 0; j < fields.length; j++) {
                  obj[fields[j]] = csv[_i2][j];
                }

                csv[_i2] = obj;
              }

              if (csv.length) {
                for (var _i3 = 0; _i3 < csv.length; _i3++) {
                  var event = {
                    times: {},
                    crew: {}
                  },
                      create = false;
                  if (!csv[_i3] || typeof csv[_i3] != 'object') continue;

                  if (csv[_i3]['"Title"']) {
                    event.title = csv[_i3]['"Title"'].split('"').join('');
                  }

                  if (csv[_i3]['"Description"']) {
                    event.description = csv[_i3]['"Description"'].split('"').join('');
                  }

                  if (csv[_i3]['"Start Date"'] && csv[_i3]['"End Date"']) {
                    (function () {
                      event.startDate = csv[_i3]['"Start Date"'];
                      event.endDate = csv[_i3]['"End Date"'];
                      var range = moment_range__WEBPACK_IMPORTED_MODULE_8__["extendMoment"](moment__WEBPACK_IMPORTED_MODULE_7__).range(event.startDate, event.endDate);
                      var newDates = Array.from(range.by('days'));
                      var days = [];
                      newDates.forEach(function (date) {
                        var newDate = moment__WEBPACK_IMPORTED_MODULE_7__(date).format('MM/DD/YYYY').toString();
                        days.push(newDate);
                      });

                      if (csv[_i3]['"Times From"']) {
                        var times = csv[_i3]['"Times From"'];
                        times = times.split('"').join('').split(';');

                        for (var _i4 = 0; _i4 < days.length; _i4++) {
                          if (times[_i4]) {
                            event.times[days[_i4]] = times[_i4];
                          }
                        }
                      }

                      if (csv[_i3]['"Times To"']) {
                        var _times = csv[_i3]['"Times To"'];
                        _times = _times.split('"').join('').split(';');

                        for (var _i5 = 0; _i5 < days.length; _i5++) {
                          if (_times[_i5]) {
                            event.times['to' + days[_i5]] = _times[_i5];
                          }
                        }
                      }

                      if (csv[_i3]['"Crew"']) {
                        var crew = csv[_i3]['"Crew"'];
                        crew = crew.split('"').join('').split(';');

                        for (var _i6 = 0; _i6 < days.length; _i6++) {
                          if (crew[_i6]) {
                            crew[_i6] = crew[_i6].split('|');
                            event.crew[days[_i6]] = {
                              position: crew[_i6][0] || '',
                              rate: crew[_i6][1] || 0,
                              callTime: crew[_i6][2] && crew[_i6][2].toUpperCase() || '05:00PM'
                            };
                          }
                        }
                      }
                    })();
                  }

                  if (csv[_i3]['"Venue"'] && _this20.ls._locations[csv[_i3]['"Venue"'].split('"').join('')]) {
                    event.location = _this20.ls._locations[csv[_i3]['"Venue"'].split('"').join('')]._id;
                  }

                  if (csv[_i3]['"Labels"']) {
                    event.labels = csv[_i3]['"Labels"'].split('"').join('').split(';').join(', ');
                  }

                  if (Object.keys(event).length > 2) {
                    _this20.create_event(event);
                  }
                }
              }
            };
          }
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_10__["OrgmailComponent"], {
            size: 'lg'
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"]
      }, {
        type: wacom__WEBPACK_IMPORTED_MODULE_9__["MongoService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["EventService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["LocationService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["JobService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["PositionConfigurationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/pages/dashboard/dashboard.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], wacom__WEBPACK_IMPORTED_MODULE_9__["MongoService"], _services__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services__WEBPACK_IMPORTED_MODULE_5__["EventService"], _services__WEBPACK_IMPORTED_MODULE_5__["LocationService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_5__["JobService"], _services__WEBPACK_IMPORTED_MODULE_5__["PositionConfigurationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/crew-config/crew-config-row/crew-config-row.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/event-details/crew-config/crew-config-row/crew-config-row.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsCrewConfigCrewConfigRowCrewConfigRowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\n  margin: 0 !important;\n}\n\n.hasError {\n  border: \"2px solid #cc0000\";\n  background-color: \"#d16b6b\";\n}\n\n.isEven {\n  background-color: \"#e6e6e6\";\n}\n\n.mb10 {\n  margin-bottom: 10px;\n}\n\n.mb5 {\n  margin-bottom: 5px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.col-rate {\n  flex: 0 0 105px;\n  max-width: 105px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@media screen and (max-width: 758px) {\n  .col-rate {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n.w100 {\n  width: 100%;\n}\n\n.time-block {\n  display: flex;\n  margin-bottom: 5px;\n}\n\n@media screen and (max-width: 758px) {\n  .time-block {\n    margin-top: 10px;\n  }\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.crew-actionBtn .fa-plus {\n  color: white;\n}\n\n@media screen and (max-width: 1100px) {\n  .crew-actionBtn .btnAdd {\n    white-space: nowrap;\n  }\n}\n\n@media screen and (max-width: 1100px) {\n  .crew-actionBtn {\n    margin-top: 10px;\n  }\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n  min-width: 200px;\n  line-height: 36px;\n}\n\n@media screen and (max-width: 578px) {\n  #crew-btns {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2NyZXctY29uZmlnL2NyZXctY29uZmlnLXJvdy9jcmV3LWNvbmZpZy1yb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvY3Jldy1jb25maWcvY3Jldy1jb25maWctcm93L2NyZXctY29uZmlnLXJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBTkY7SUFPSSxjQUFBO0lBQ0EsZUFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBRTtFQUpGO0lBS0ksZ0JBQUE7RUNHRjtBQUNGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRENFO0VBQ0UsWUFBQTtBQ0VKOztBRENFO0VBQ0U7SUFDRSxtQkFBQTtFQ0NKO0FBQ0Y7O0FERUU7RUFYRjtJQVlJLGdCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFJQSxnQkFBQTtFQUVBLGlCQUFBO0FDSEY7O0FEUUk7RUFESjtJQUVRLHNCQUFBO0VDSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvY3Jldy1jb25maWcvY3Jldy1jb25maWctcm93L2NyZXctY29uZmlnLXJvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmhhc0Vycm9yIHtcbiAgYm9yZGVyOiAnMnB4IHNvbGlkICNjYzAwMDAnO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAnI2QxNmI2Yic7XG59XG5cbi5pc0V2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAnI2U2ZTZlNic7XG59XG5cbi5tYjEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1iNSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm10MTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29sLXJhdGUge1xuICBmbGV4OiAwIDAgMTA1cHg7XG4gIG1heC13aWR0aDogMTA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NThweCkge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGltZS1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NThweCkge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3Jldy1hY3Rpb25CdG4ge1xuICAuZmEtcGx1cyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgLmJ0bkFkZCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cblxuLm1yMTAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50ZCB7XG4gIHBhZGRpbmc6IC43NXJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG5cblxuXG4gIG1pbi13aWR0aDogMjAwcHg7XG5cbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG5cblxuI2NyZXctYnRucyB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc4cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59IiwiLnJvdyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uaGFzRXJyb3Ige1xuICBib3JkZXI6IFwiMnB4IHNvbGlkICNjYzAwMDBcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogXCIjZDE2YjZiXCI7XG59XG5cbi5pc0V2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiNlNmU2ZTZcIjtcbn1cblxuLm1iMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWI1IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubXQxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb2wtcmF0ZSB7XG4gIGZsZXg6IDAgMCAxMDVweDtcbiAgbWF4LXdpZHRoOiAxMDVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzU4cHgpIHtcbiAgLmNvbC1yYXRlIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLncxMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWUtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NThweCkge1xuICAudGltZS1ibG9jayB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jcmV3LWFjdGlvbkJ0biAuZmEtcGx1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuY3Jldy1hY3Rpb25CdG4gLmJ0bkFkZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5jcmV3LWFjdGlvbkJ0biB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG4ubXIxMCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRkIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzhweCkge1xuICAjY3Jldy1idG5zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/crew-config/crew-config-row/crew-config-row.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/event-details/crew-config/crew-config-row/crew-config-row.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: CrewConfigRowComponent */

  /***/
  function srcAppPagesEventDetailsCrewConfigCrewConfigRowCrewConfigRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrewConfigRowComponent", function () {
      return CrewConfigRowComponent;
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


    var _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../utils/broadcaster */
    "./src/app/utils/broadcaster.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var CrewConfigRowComponent = /*#__PURE__*/function () {
      function CrewConfigRowComponent(broadcaster, us, os, storage, router, formBuilder) {
        var _this21 = this;

        _classCallCheck(this, CrewConfigRowComponent);

        this.broadcaster = broadcaster;
        this.us = us;
        this.os = os;
        this.storage = storage;
        this.router = router;
        this.formBuilder = formBuilder;
        this.hasSchedulingError = false;
        this.fixedError = false;
        this.inited = false;
        setTimeout(function () {
          _this21.inited = true;
        }, 1000);
      }

      _createClass(CrewConfigRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.originalCrew = {
            callTime: this.crew.callTime,
            endTime: this.crew.endTime,
            position: this.crew.position,
            selectedCrewId: this.crew._id,
            fixed: this.crew.fixed,
            extra: this.crew.extra,
            comment: this.crew.comment,
            rate: this.crew.rate
          };
          this.crewForm = this.formBuilder.group({
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.crew.position, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            selectedCrewId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.crew._id),
            callTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.crew.callTime),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.crew.endTime),
            fixed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.crew.fixed),
            extra: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.crew.extra),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.crew.comment),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.crew.rate)
          });
          this.onChanges();
        }
      }, {
        key: "onChanges",
        value: function onChanges() {
          var _this22 = this;

          this.crewForm.valueChanges.subscribe(function (val) {
            if (!underscore__WEBPACK_IMPORTED_MODULE_4__["isEqual"](val, _this22.originalCrew)) {
              var change = _this22.getFieldChanged(val);

              if (change === 'name') {
                if (_this22.isCrewAlreadyAssigned(_this22.crewForm.controls.selectedCrewId.value)) {
                  _this22.hasSchedulingError = true;
                } else {
                  if (_this22.hasSchedulingError === true) {
                    _this22.fixedError = true;
                  }

                  _this22.hasSchedulingError = false;
                }
              }

              _this22.addToDate(change);
            } else {
              _this22.hasSchedulingError = false;
              _this22.fixedError = true;

              _this22.addToDate();
            }
          });
        }
      }, {
        key: "getFieldChanged",
        value: function getFieldChanged(val) {
          if (val.position !== this.originalCrew.position) return 'position';
          if (val.hour !== this.originalCrew.hour) return 'time';
          if (val.minute !== this.originalCrew.minute) return 'time';
          if (val.meridian !== this.originalCrew.meridian) return 'time';
          if (val.rate !== this.originalCrew.rate) return 'rate';
          if (val.fixed !== this.originalCrew.fixed) return 'fixed';
          if (val.extra !== this.originalCrew.extra) return 'extra';
          if (val.comment !== this.originalCrew.comment) return 'comment';
          if (val.selectedCrewId !== this.originalCrew._id) return 'name';
          return 'None';
        }
      }, {
        key: "addToDate",
        value: function addToDate(change) {
          var _this23 = this;

          this.us.afterWhile(this, function () {
            _this23.broadcaster.emit('editCrewOnDate', Object.assign({
              index: _this23.index,
              date: _this23.date,
              time: _this23.time_picked.time,
              timeEnd: _this23.time_picked_end.time,
              position: _this23.crewForm.controls.position.value,
              selectedCrewId: _this23.crewForm.controls.selectedCrewId.value
            }, _this23.crew._id && {
              oldCrewId: _this23.crew._id
            }, {
              rate: _this23.crewForm.controls.rate.value,
              fixed: _this23.crewForm.controls.fixed.value,
              extra: _this23.crewForm.controls.extra.value,
              comment: _this23.crewForm.controls.comment.value,
              field: change,
              oldTime: _this23.crew.callTime,
              oldEndTime: _this23.crew.endTime,
              oldRate: _this23.crew.rate,
              oldFixed: _this23.crew.fixed,
              oldComment: _this23.crew.comment,
              oldPosition: _this23.crew.position
            }, _this23.hasSchedulingError && {
              hasSchedulingError: _this23.hasSchedulingError
            }, _this23.fixedError && {
              fixedError: _this23.fixedError
            }));
          });
        }
      }, {
        key: "handleClick",
        value: function handleClick() {
          this.broadcaster.emit('removeCrewFromDate', {
            crewId: this.crew._id,
            date: this.date
          });
        }
      }, {
        key: "isCrewAlreadyAssigned",
        value: function isCrewAlreadyAssigned(newCrewId) {
          var existsOnDate = this.dateCrew.findIndex(function (x) {
            return x._id === newCrewId;
          });
          return existsOnDate >= 0;
        }
      }, {
        key: "update_time",
        value: function update_time(time_picked) {
          this.time_picked = time_picked;
          if (this.inited) this.addToDate();
        }
      }, {
        key: "update_time_end",
        value: function update_time_end(time_picked) {
          this.time_picked_end = time_picked;
          if (this.inited) this.addToDate();
        }
      }, {
        key: "create_job",
        value: function create_job() {
          var event = this.storage.retrieve('event');
          localStorage.setItem('new_job', JSON.stringify({
            position: this.crewForm.controls.position.value,
            rate: this.crewForm.controls.rate.value,
            fixed: this.crewForm.controls.fixed.value,
            comment: this.crewForm.controls.comment.value,
            venueName: event.location && event.location.venueName,
            times: {
              from: this.time_picked,
              to: this.time_picked_end
            },
            title: event.title,
            event: event._id,
            date: this.date,
            active: true
          }));
          this.router.navigate(['job/new']);
        }
      }]);

      return CrewConfigRowComponent;
    }();

    CrewConfigRowComponent.ctorParameters = function () {
      return [{
        type: _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_7__["OrganizationService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "crew", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "isLast", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "isEven", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "deleteCrew", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "positionList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "crewList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "allAvailableCrew", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigRowComponent.prototype, "dateCrew", void 0);
    CrewConfigRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crew-config-row',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crew-config-row.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-config/crew-config-row/crew-config-row.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crew-config-row.component.scss */
      "./src/app/pages/event-details/crew-config/crew-config-row/crew-config-row.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"], _services__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services__WEBPACK_IMPORTED_MODULE_7__["OrganizationService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], CrewConfigRowComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/crew-config/crew-config.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/event-details/crew-config/crew-config.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsCrewConfigCrewConfigComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-primary {\n  background-color: green;\n  border-color: greenyellow;\n  width: 100px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n}\n\n.add-crew {\n  padding: 3px;\n  border-radius: 5px 5px;\n  width: 40px;\n  background-color: green;\n  color: white;\n  margin-top: 15px;\n}\n\n.close,\n.save,\n.apply,\n.remove {\n  padding: 3px;\n  border-radius: 5px 5px;\n  width: 40px;\n  background-color: red;\n  color: white;\n  float: left;\n  margin-top: 15px;\n}\n\n.save {\n  background-color: green;\n  width: 120px;\n  border: none;\n  margin-left: 5px;\n}\n\n.apply {\n  background-color: goldenrod;\n  width: 150px;\n  border: none;\n  margin-left: 5px;\n}\n\n.remove {\n  width: 120px;\n  border: none;\n  background-color: darkred;\n  margin-left: 5px;\n}\n\n.row {\n  margin: 0 !important;\n}\n\n.error {\n  color: #cc0000;\n}\n\n#crew-btns {\n  padding-top: 5px;\n}\n\n#crew-btns .btn:disabled {\n  background-color: grey;\n  border-color: grey;\n}\n\n#crew-btns .btn {\n  margin-right: 5px;\n}\n\n.mb10 {\n  margin-bottom: 10px;\n}\n\n.mb5 {\n  margin-bottom: 5px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.col-rate {\n  flex: 0 0 105px;\n  max-width: 105px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@media screen and (max-width: 758px) {\n  .col-rate {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n.w100 {\n  width: 100%;\n}\n\n.cost-block {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  padding: 0.75rem;\n}\n\n.cost-block .fa-trash {\n  padding: 0 10px;\n}\n\n.cost-block__title {\n  color: #666;\n}\n\n.cost-block__result {\n  font-weight: bold;\n}\n\n.cost-block._bg {\n  background: rgba(0, 0, 0, 0.075);\n}\n\n.p10 {\n  padding: 10px;\n}\n\n#crew-btns {\n  padding: 10px;\n}\n\n@media screen and (max-width: 578px) {\n  #crew-btns {\n    padding: 0;\n    flex-direction: column;\n  }\n  #crew-btns button {\n    margin: 5px;\n  }\n}\n\n.newCrewForm {\n  flex-wrap: nowrap;\n}\n\n.newCrewForm .td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n  min-width: 200px;\n  line-height: 36px;\n}\n\n@media screen and (max-width: 1100px) {\n  .crewEdit .crewEdit__comm,\n.crewEdit .crewEdit__phone {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 700px) {\n  .crewEdit .crewEdit__rate,\n.crewEdit .crewEdit__fixed,\n.crewEdit .crewEdit__extra {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .crewEdit .crewEdit__time {\n    display: none;\n  }\n}\n\n.crewEdit .crewEdit__action {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.crewEdit .crewEdit__action i {\n  padding: 0 10px;\n  cursor: pointer;\n}\n\n.crewEdit .crewEdit__action i:hover {\n  color: #666;\n}\n\n@media screen and (max-width: 330px) {\n  .crewEdit .crewEdit__pos {\n    display: none;\n  }\n}\n\n.crewEdit .crewEdit__action .fa-eye {\n  display: none;\n}\n\n@media screen and (max-width: 1100px) {\n  .crewEdit .crewEdit__action .fa-eye {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2NyZXctY29uZmlnL2NyZXctY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2NyZXctY29uZmlnL2NyZXctY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7Ozs7RUFJRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FER0E7RUFDRSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURFRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLGlCQUFBO0FDREo7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FES0U7RUFORjtJQU9JLGNBQUE7SUFDQSxlQUFBO0VDRkY7QUFDRjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURNQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRElFO0VBQ0UsZUFBQTtBQ0ZKOztBREtFO0VBRUUsV0FBQTtBQ0pKOztBRE9FO0VBQ0UsaUJBQUE7QUNMSjs7QURRRTtFQUNFLGdDQUFBO0FDTko7O0FEV0E7RUFDRSxhQUFBO0FDUkY7O0FEMkNBO0VBQ0ksYUFBQTtBQ3hDSjs7QUR5Q0k7RUFGSjtJQUdRLFVBQUE7SUFDQSxzQkFBQTtFQ3RDTjtFRHVDTTtJQUNJLFdBQUE7RUNyQ1Y7QUFDRjs7QUQwQ0E7RUFDSSxpQkFBQTtBQ3ZDSjs7QUR3Q0M7RUFDRyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFJQSxnQkFBQTtFQUVBLGlCQUFBO0FDMUNKOztBRCtDRTtFQUNFOztJQUVFLGFBQUE7RUM1Q0o7QUFDRjs7QUQ4Q0U7RUFDRTs7O0lBR0UsYUFBQTtFQzVDSjtBQUNGOztBRDhDRTtFQUNFO0lBQ0UsYUFBQTtFQzVDSjtBQUNGOztBRDhDRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQzVDSjs7QUQ2Q0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQzNDTjs7QUQ0Q007RUFDRSxXQUFBO0FDMUNSOztBRDhDRTtFQUNFO0lBQ0UsYUFBQTtFQzVDSjtBQUNGOztBRCtDSTtFQUNFLGFBQUE7QUM3Q047O0FEOENNO0VBRkY7SUFHSSxxQkFBQTtFQzNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnQtZGV0YWlscy9jcmV3LWNvbmZpZy9jcmV3LWNvbmZpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItY29sb3I6IGdyZWVueWVsbG93O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5hZGQtY3JldyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jbG9zZSxcbi5zYXZlLFxuLmFwcGx5LFxuLnJlbW92ZSB7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnNhdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5hcHBseSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5yZW1vdmUge1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuXG4ucm93IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjY2MwMDAwO1xufVxuXG4jY3Jldy1idG5zIHtcbiAgcGFkZGluZy10b3A6IDVweDtcblxuICAuYnRuOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgfVxuXG4gIC5idG4ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG5cblxuLm1iMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWI1IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubXQxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb2wtcmF0ZSB7XG4gIGZsZXg6IDAgMCAxMDVweDtcbiAgbWF4LXdpZHRoOiAxMDVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1OHB4KSB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi53MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLmNvc3QtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IC43NXJlbTtcbiAgLmZhLXRyYXNoIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cblxuICAmX190aXRsZSB7XG5cbiAgICBjb2xvcjogIzY2NjtcbiAgfVxuXG4gICZfX3Jlc3VsdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAmLl9iZyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDc1KTtcbiAgfVxufVxuXG5cbi5wMTAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vLyAuY3Jld0VkaXQge1xuLy8gICBmbGV4LXdyYXA6IG5vd3JhcDtcbi8vICAgd2lkdGg6IG1pbi1jb250ZW50O1xuXG4vLyAgIC50aCB7XG4vLyAgICAgY29sb3I6ICM0OTUwNTc7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbi8vICAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4vLyAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbi8vICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbi8vICAgICBwYWRkaW5nOiAuNzVyZW07XG4vLyAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbi8vICAgICBtaW4td2lkdGg6IDIwMHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuLy8gICB9XG5cbi8vICAgLnRkIHtcbi8vICAgICBwYWRkaW5nOiAuNzVyZW07XG4vLyAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY3Jld0VkaXQtYnRuIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgbGVmdDogMDtcbi8vICAgcGFkZGluZzogMHB4IDE1cHg7XG4vLyB9XG5cbiNjcmV3LWJ0bnMge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc4cHgpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5uZXdDcmV3Rm9ybXtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAudGQge1xuICAgIHBhZGRpbmc6IC43NXJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuXG5cblxuICAgIG1pbi13aWR0aDogMjAwcHg7XG5cbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgfSBcbn1cblxuLmNyZXdFZGl0IHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgLmNyZXdFZGl0X19jb21tLFxuICAgIC5jcmV3RWRpdF9fcGhvbmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuY3Jld0VkaXRfX3JhdGUsXG4gICAgLmNyZXdFZGl0X19maXhlZCxcbiAgICAuY3Jld0VkaXRfX2V4dHJhIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNyZXdFZGl0X190aW1lIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5jcmV3RWRpdF9fYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgaSB7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMzMHB4KSB7XG4gICAgLmNyZXdFZGl0X19wb3Mge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLmNyZXdFZGl0X19hY3Rpb24ge1xuICAgIC5mYS1leWUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmFkZC1jcmV3IHtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNsb3NlLFxuLnNhdmUsXG4uYXBwbHksXG4ucmVtb3ZlIHtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc2F2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmFwcGx5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnJlbW92ZSB7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjY2MwMDAwO1xufVxuXG4jY3Jldy1idG5zIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbiNjcmV3LWJ0bnMgLmJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJvcmRlci1jb2xvcjogZ3JleTtcbn1cbiNjcmV3LWJ0bnMgLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubWIxMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYjUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tdDEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbC1yYXRlIHtcbiAgZmxleDogMCAwIDEwNXB4O1xuICBtYXgtd2lkdGg6IDEwNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NThweCkge1xuICAuY29sLXJhdGUge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29zdC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cbi5jb3N0LWJsb2NrIC5mYS10cmFzaCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5jb3N0LWJsb2NrX190aXRsZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmNvc3QtYmxvY2tfX3Jlc3VsdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvc3QtYmxvY2suX2JnIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5wMTAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jY3Jldy1idG5zIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OHB4KSB7XG4gICNjcmV3LWJ0bnMge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAjY3Jldy1idG5zIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbn1cblxuLm5ld0NyZXdGb3JtIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4ubmV3Q3Jld0Zvcm0gLnRkIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmNyZXdFZGl0IC5jcmV3RWRpdF9fY29tbSxcbi5jcmV3RWRpdCAuY3Jld0VkaXRfX3Bob25lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY3Jld0VkaXQgLmNyZXdFZGl0X19yYXRlLFxuLmNyZXdFZGl0IC5jcmV3RWRpdF9fZml4ZWQsXG4uY3Jld0VkaXQgLmNyZXdFZGl0X19leHRyYSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNyZXdFZGl0IC5jcmV3RWRpdF9fdGltZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmNyZXdFZGl0IC5jcmV3RWRpdF9fYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jcmV3RWRpdCAuY3Jld0VkaXRfX2FjdGlvbiBpIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3Jld0VkaXQgLmNyZXdFZGl0X19hY3Rpb24gaTpob3ZlciB7XG4gIGNvbG9yOiAjNjY2O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzMwcHgpIHtcbiAgLmNyZXdFZGl0IC5jcmV3RWRpdF9fcG9zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uY3Jld0VkaXQgLmNyZXdFZGl0X19hY3Rpb24gLmZhLWV5ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmNyZXdFZGl0IC5jcmV3RWRpdF9fYWN0aW9uIC5mYS1leWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/crew-config/crew-config.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/event-details/crew-config/crew-config.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CrewConfigComponent */

  /***/
  function srcAppPagesEventDetailsCrewConfigCrewConfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrewConfigComponent", function () {
      return CrewConfigComponent;
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


    var _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../utils/broadcaster */
    "./src/app/utils/broadcaster.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @modals */
    "./src/app/modals/index.ts");

    var CrewConfigComponent = /*#__PURE__*/function () {
      function CrewConfigComponent(broadcaster, js, modalService, us, os, http, formBuilder) {
        _classCallCheck(this, CrewConfigComponent);

        this.broadcaster = broadcaster;
        this.js = js;
        this.modalService = modalService;
        this.us = us;
        this.os = os;
        this.http = http;
        this.formBuilder = formBuilder;
        this.isAdding = false;
        this.dates = [];
        this.positionList = [];
        this.allAvailableCrew = [];
        this.crewList = [];
        this.selectedCrew = {};
        this.newUserError = false;
        this.appliedAll = false;
        this.time_picked = {};
        this.time_picked_end = {};
      }

      _createClass(CrewConfigComponent, [{
        key: "createCrew",
        value: function createCrew() {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_8__["JobComponent"], {
            size: 'lg'
          });

          if (this.datesList.length) {
            modalRef.componentInstance.dates = this.datesList;

            for (var i = 0; i < this.datesList.length; i++) {
              modalRef.componentInstance._dates[this.datesList[i]] = true;
            }

            modalRef.componentInstance.job.times.from = this.eventData.times[this.datesList[0]];
            modalRef.componentInstance.job.times.to = this.eventData.times['to' + this.datesList[0]];
          }

          modalRef.componentInstance.job.event = this.eventData._id;
          modalRef.componentInstance.job.org = this.eventData.organizationId;
        }
      }, {
        key: "edit",
        value: function edit(job) {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_8__["JobComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.job = JSON.parse(JSON.stringify(job));
          modalRef.componentInstance.init();
          modalRef.componentInstance.save.subscribe(function (saved) {
            for (var each in saved) {
              job[each] = saved[each];
            }

            for (var _each in job) {
              job[_each] = saved[_each];
            }
          });
        }
      }, {
        key: "view",
        value: function view(job) {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_8__["JobvComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.job = JSON.parse(JSON.stringify(job));
          modalRef.componentInstance.save.subscribe(function (saved) {
            for (var each in saved) {
              job[each] = saved[each];
            }

            for (var _each2 in job) {
              job[_each2] = saved[_each2];
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.newCrewForm = this.formBuilder.group({});
          var keys = Object.keys(this.event);
          this.dates = keys;
          this.broadcaster.listen('updateCrewDateTabs').subscribe(function (res) {
            _this24.event = res.data;
            var keys = Object.keys(_this24.event);
            _this24.dates = keys;
          });
          this.broadcaster.listen('removeCrewFromDate').subscribe(function (res) {
            _this24.removeCrewFromDate(res.data);
          });
          this.broadcaster.listen('editCrewOnDate').subscribe(function (res) {
            if (res.data.hasSchedulingError) {
              _this24.event[res.data.date][res.data.index].hasSchedulingError = true;
              _this24.newUserError = true;
            } else {
              if (res.data.fixedError) {
                _this24.event[res.data.date][res.data.index].hasSchedulingError = null;
                _this24.newUserError = false;
              }

              var newCrewIndex = _this24.allAvailableCrew.findIndex(function (user) {
                return user._id === res.data.selectedCrewId;
              });

              var oldCrewIndex = res.data.oldCrewId ? _this24.allAvailableCrew.findIndex(function (crew) {
                return crew._id === res.data.oldCrewId;
              }) : -1;
              var newCrew = {};
              var oldCrew = 'N/A';

              if (oldCrewIndex !== -1) {
                oldCrew = _this24.allAvailableCrew[oldCrewIndex].firstName + ' ' + _this24.allAvailableCrew[oldCrewIndex].lastName;
              }

              if (newCrewIndex !== -1) {
                newCrew = _this24.allAvailableCrew[newCrewIndex];
              }

              newCrew.callTime = res.data.time;
              newCrew.endTime = res.data.timeEnd;
              newCrew.position = res.data.position;
              newCrew.rate = res.data.rate;
              newCrew.fixed = res.data.fixed;
              newCrew.extra = res.data.extra;
              newCrew.comment = res.data.comment;
              _this24.event[res.data.date][res.data.index] = newCrew;
              var oldValue = '';
              var newValue = '';

              if (res.data.field === 'time') {
                oldValue = res.data.oldTime;
                newValue = res.data.time;
              }

              if (res.data.field === 'timeEnd') {
                oldValue = res.data.oldEndTime;
                newValue = res.data.timeEnd;
              }

              if (res.data.field === 'name') {
                oldValue = oldCrew;
                newValue = newCrew.firstName + ' ' + newCrew.lastName;
              }

              if (res.data.field === 'rate') {
                oldValue = res.data.oldRate;
                newValue = res.data.rate;
              }

              if (res.data.field === 'fixed') {
                oldValue = res.data.oldFixed;
                newValue = res.data.fixed;
              }

              if (res.data.field === 'extra') {
                oldValue = res.data.oldExtra;
                newValue = res.data.extra;
              }

              if (res.data.field === 'comment') {
                oldValue = res.data.oldComment;
                newValue = res.data.comment;
              }

              if (res.data.field === 'position') {
                oldValue = res.data.oldPosition;
                newValue = res.data.position;
              }

              var audit = {
                user: {
                  name: _this24.us.user.firstName + ' ' + _this24.us.user.lastName,
                  _id: _this24.us.user._id
                },
                oldValue: oldValue,
                newValue: newValue,
                action: 'edit',
                section: 'Crew',
                field: res.data.field,
                time: Date.now(),
                forDate: res.data.date
              };

              _this24.saveCrewToDate(null, audit);
            }
          });
          var organizationId = this.us.user.organizations[0]._id;
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/getConfig/' + organizationId).subscribe(function (res) {
            var configurations = res;

            if (configurations) {
              var configKeys = Object.keys(configurations);
              configKeys.forEach(function (key) {
                _this24.positionList.push(configurations[key]);
              });
            }
          });
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/getCrewUsers/' + organizationId).subscribe(function (res) {
            _this24.allAvailableCrew = res;
            _this24.crewList = [];

            _this24.allAvailableCrew.forEach(function (crew) {
              if (crew._id != _this24.us.user._id) {
                _this24.crewList.push({
                  value: crew._id,
                  label: crew.firstName + ' ' + crew.lastName
                });
              }
            });
          });
          this.onChanges();
        }
      }, {
        key: "onChanges",
        value: function onChanges() {
          var _this25 = this;

          this.newCrewForm.valueChanges.subscribe(function (data) {
            _this25.newUserError = false;
            _this25.appliedAll = false;
          });
        }
      }, {
        key: "selectCrew",
        value: function selectCrew() {
          var _this26 = this;

          if (this.newCrewForm.controls.selectedCrewId.value === '') {
            this.selectedCrew = {};
          } else {
            this.allAvailableCrew.forEach(function (crew) {
              if (crew._id === _this26.newCrewForm.controls.selectedCrewId.value) {
                _this26.selectedCrew = crew;
              }
            });
          }
        }
      }, {
        key: "saveCrewToDate",
        value: function saveCrewToDate(date, auditChange, skipUpdate) {
          if (this.isAdding) {
            var newCrewObject = this.selectedCrew;
            newCrewObject.position = this.newCrewForm.controls.selectedPosition.value;
            newCrewObject.rate = this.newCrewForm.controls.crewRate.value;
            newCrewObject.fixed = this.newCrewForm.controls.crewFixed.value;
            newCrewObject.extra = this.newCrewForm.controls.crewExtra.value;
            newCrewObject.comment = this.newCrewForm.controls.crewComment.value; //const callTime = this.newCrewForm.controls.hour.value + ':' + this.newCrewForm.controls.minute.value + this.newCrewForm.controls.meridian.value;
            //newCrewObject.callTime = callTime;

            if (!this.time_picked) return;
            newCrewObject.callTime = this.time_picked.time;
            if (!this.time_picked_end) return;
            newCrewObject.endTime = this.time_picked_end.time;

            if (this.isCrewAlreadyAssigned(this.event, date, newCrewObject._id)) {
              this.newUserError = true;
            } else {
              this.event[date].push(newCrewObject);
              auditChange = {
                user: {
                  name: this.us.user.firstName + ' ' + this.us.user.lastName,
                  _id: this.us.user._id
                },
                oldValue: '',
                newValue: newCrewObject.firstName ? newCrewObject.firstName + ' ' + newCrewObject.lastName : newCrewObject.position,
                action: 'add',
                section: 'Crew',
                field: 'all',
                time: Date.now(),
                forDate: date
              };
            }
          }

          if (!this.newUserError && !skipUpdate) {
            var data = Object.assign({
              crew: this.event
            }, auditChange && {
              auditChange: auditChange
            });
            this.broadcaster.emit('updateCrewObject', data);
            this.isAdding = false;
          }
        }
      }, {
        key: "isCrewAlreadyAssigned",
        value: function isCrewAlreadyAssigned(event, date, newCrewId) {
          if (newCrewId) {
            var existsOnDate = event[date].findIndex(function (x) {
              return x._id === newCrewId;
            });
            return existsOnDate >= 0;
          }

          return false;
        }
      }, {
        key: "applyDatesCrewToAll",
        value: function applyDatesCrewToAll(date) {
          var _this27 = this;

          this.appliedAll = true;
          this.saveCrewToDate(date, null, true);
          var crewToCopy = this.event[date];
          this.dates.forEach(function (dateIndex) {
            _this27.event[dateIndex] = crewToCopy;
          });
          var audit = {
            user: {
              name: this.us.user.firstName + ' ' + this.us.user.lastName,
              _id: this.us.user._id
            },
            oldValue: date,
            newValue: 'N/A',
            action: 'add',
            section: 'Crew',
            field: 'all',
            time: Date.now(),
            forDate: 'all'
          };

          if (!this.newUserError) {
            var data = {
              crew: this.event,
              auditChange: audit
            };
            this.broadcaster.emit('updateCrewObject', data);
            this.isAdding = false;
          }
        }
      }, {
        key: "removeAll",
        value: function removeAll(jobs) {
          for (var i = 0; i < jobs.length; i++) {
            this.js["delete"](jobs[i]);
          }
        }
      }, {
        key: "removeCrewFromDate",
        value: function removeCrewFromDate(crewObject) {
          var _this28 = this;

          var crewId = crewObject.crewId;
          var date = crewObject.date;
          var oldValue = '';
          this.event[date].forEach(function (crew, index) {
            if (crew._id === crewId) {
              if (crew.hasSchedulingError && _this28.newUserError) {
                crew.hasSchedulingError = false;
                _this28.newUserError = false;
              }

              if (_this28.event[date][index].firstName) {
                oldValue = _this28.event[date][index].firstName + ' ' + _this28.event[date][index].lastName;
              } else {
                oldValue = _this28.event[date][index].position;
              }

              _this28.event[date].splice(index, 1);
            }
          });
          var audit = {
            user: {
              name: this.us.user.firstName + ' ' + this.us.user.lastName,
              _id: this.us.user._id
            },
            oldValue: oldValue,
            newValue: '',
            action: 'remove',
            section: 'Crew',
            field: 'all',
            time: Date.now(),
            forDate: date
          };
          var data = {
            crew: this.event,
            auditChange: audit
          };
          this.broadcaster.emit('updateCrewObject', data);
        }
      }, {
        key: "addCrew",
        value: function addCrew() {
          this.newCrewForm.addControl('selectedCrewId', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.newCrewForm.addControl('selectedPosition', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.newCrewForm.addControl('crewRate', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.newCrewForm.addControl('crewFixed', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.newCrewForm.addControl('crewExtra', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.newCrewForm.addControl('crewComment', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.isAdding = true;
        }
      }, {
        key: "update_time",
        value: function update_time(time_picked) {
          this.time_picked = time_picked;
          this.saveCrewToDate();
        }
      }, {
        key: "update_time_end",
        value: function update_time_end(time_picked_end) {
          this.time_picked_end = time_picked_end;
          this.saveCrewToDate();
        }
      }, {
        key: "close",
        value: function close() {
          this.newCrewForm.reset();
          this.isAdding = false;
        }
      }, {
        key: "toggleCrewModal",
        value: function toggleCrewModal(date) {
          var object = {
            date: date,
            event: this.event[date]
          };
          this.broadcaster.emit('toggleCrewModal', object);
        }
      }]);

      return CrewConfigComponent;
    }();

    CrewConfigComponent.ctorParameters = function () {
      return [{
        type: _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["JobService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["OrganizationService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigComponent.prototype, "datesList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigComponent.prototype, "eventData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigComponent.prototype, "times", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewConfigComponent.prototype, "positionConfigurationMap", void 0);
    CrewConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crew-config',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crew-config.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-config/crew-config.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crew-config.component.scss */
      "./src/app/pages/event-details/crew-config/crew-config.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"], _services__WEBPACK_IMPORTED_MODULE_6__["JobService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _services__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services__WEBPACK_IMPORTED_MODULE_6__["OrganizationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], CrewConfigComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsCrewDrawerCrewCommentModalCrewCommentModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvY3Jldy1kcmF3ZXIvY3Jldy1jb21tZW50LW1vZGFsL2NyZXctY29tbWVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: CrewCommentModalComponent */

  /***/
  function srcAppPagesEventDetailsCrewDrawerCrewCommentModalCrewCommentModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrewCommentModalComponent", function () {
      return CrewCommentModalComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var CrewCommentModalComponent = /*#__PURE__*/function () {
      function CrewCommentModalComponent(activeModal, us, http) {
        _classCallCheck(this, CrewCommentModalComponent);

        this.activeModal = activeModal;
        this.us = us;
        this.http = http;
        this.saveCommentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CrewCommentModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initialize",
        value: function initialize(event, job) {
          if (!job.comments) {
            job.comments = {};
          }

          this.comment = job.comments[this.us.user._id] || '';
          this.event = event;
          this.job = job;
        }
      }, {
        key: "saveComment",
        value: function saveComment() {
          this.job.comments[this.us.user._id] = this.comment;
          this.http.post(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/job/comment', {
            _id: this.job._id,
            comment: this.comment
          }).subscribe(function (res) {});
          this.activeModal.close();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.activeModal.close();
        }
      }]);

      return CrewCommentModalComponent;
    }();

    CrewCommentModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CrewCommentModalComponent.prototype, "saveCommentEvent", void 0);
    CrewCommentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crew-comment-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crew-comment-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crew-comment-modal.component.scss */
      "./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], CrewCommentModalComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/crew-drawer/crew-drawer.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/event-details/crew-drawer/crew-drawer.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsCrewDrawerCrewDrawerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".star-ratings {\n  unicode-bidi: bidi-override;\n  color: #000;\n  font-size: 30px;\n  width: 132px;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.star-ratings .fill-ratings {\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  display: block;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.star-ratings .fill-ratings span {\n  display: inline-block;\n}\n.star-ratings .empty-ratings {\n  padding: 0;\n  display: block;\n  z-index: 0;\n}\n.col-rate {\n  flex: 0 0 105px;\n  max-width: 105px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media screen and (max-width: 758px) {\n  .col-rate {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.crewEdit__time._mod {\n  font-size: 14px;\n  line-height: 18px;\n}\n.crewEdit__note {\n  max-width: 200px;\n  width: 200px;\n}\n@media screen and (max-width: 1100px) {\n  .crewDraw .crewEdit__comm,\n.crewDraw .crewEdit__phone,\n.crewDraw .crewEdit__rated,\n.crewDraw .crewEdit__rating,\n.crewDraw .crewEdit__note {\n    display: none;\n  }\n}\n@media screen and (max-width: 700px) {\n  .crewDraw .crewEdit__rate,\n.crewDraw .crewEdit__fixed,\n.crewDraw .crewEdit__extra {\n    display: none;\n  }\n}\n@media screen and (max-width: 600px) {\n  .crewDraw .crewEdit__time {\n    display: none;\n  }\n}\n@media screen and (max-width: 330px) {\n  .crewDraw .crewEdit__pos {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2NyZXctZHJhd2VyL2NyZXctZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2NyZXctZHJhd2VyL2NyZXctZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0UscUJBQUE7QUNDTjtBREdFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDREo7QURLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGRjtBRElFO0VBTkY7SUFPSSxjQUFBO0lBQ0EsZUFBQTtFQ0RGO0FBQ0Y7QURXRTtFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQ1RKO0FEWUE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7QUNURDtBRGNFO0VBRUU7Ozs7O0lBS0UsYUFBQTtFQ1pKO0FBQ0Y7QURlRTtFQUVFOzs7SUFHRSxhQUFBO0VDZEo7QUFDRjtBRGlCRTtFQUNFO0lBQ0UsYUFBQTtFQ2ZKO0FBQ0Y7QURrQkU7RUFDRTtJQUNFLGFBQUE7RUNoQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvY3Jldy1kcmF3ZXIvY3Jldy1kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rhci1yYXRpbmdzIHtcbiAgdW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogMTMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLmZpbGwtcmF0aW5ncyB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmVtcHR5LXJhdGluZ3Mge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuXG4uY29sLXJhdGUge1xuICBmbGV4OiAwIDAgMTA1cHg7XG4gIG1heC13aWR0aDogMTA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NThweCkge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuXG5cbi5jcmV3RHJhdyAudGhlYWQtbGlnaHQgdGgge1xuXG4gIC8vIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5jcmV3RWRpdF9fdGltZSB7XG4gICYuX21vZCB7XG5cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbn1cbi5jcmV3RWRpdF9fbm90ZSB7XG5cdG1heC13aWR0aDogMjAwcHg7XG5cdHdpZHRoOiAyMDBweDtcbn1cblxuXG4uY3Jld0RyYXcge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcblxuICAgIC5jcmV3RWRpdF9fY29tbSxcbiAgICAuY3Jld0VkaXRfX3Bob25lLFxuICAgIC5jcmV3RWRpdF9fcmF0ZWQsXG4gICAgLmNyZXdFZGl0X19yYXRpbmcsXG4gICAgLmNyZXdFZGl0X19ub3RlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcblxuICAgIC5jcmV3RWRpdF9fcmF0ZSxcbiAgICAuY3Jld0VkaXRfX2ZpeGVkLFxuICAgIC5jcmV3RWRpdF9fZXh0cmEge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jcmV3RWRpdF9fdGltZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMzMHB4KSB7XG4gICAgLmNyZXdFZGl0X19wb3Mge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIi5zdGFyLXJhdGluZ3Mge1xuICB1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiAxMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGFyLXJhdGluZ3MgLmZpbGwtcmF0aW5ncyB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zdGFyLXJhdGluZ3MgLmZpbGwtcmF0aW5ncyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN0YXItcmF0aW5ncyAuZW1wdHktcmF0aW5ncyB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAwO1xufVxuXG4uY29sLXJhdGUge1xuICBmbGV4OiAwIDAgMTA1cHg7XG4gIG1heC13aWR0aDogMTA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1OHB4KSB7XG4gIC5jb2wtcmF0ZSB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jcmV3RWRpdF9fdGltZS5fbW9kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmNyZXdFZGl0X19ub3RlIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmNyZXdEcmF3IC5jcmV3RWRpdF9fY29tbSxcbi5jcmV3RHJhdyAuY3Jld0VkaXRfX3Bob25lLFxuLmNyZXdEcmF3IC5jcmV3RWRpdF9fcmF0ZWQsXG4uY3Jld0RyYXcgLmNyZXdFZGl0X19yYXRpbmcsXG4uY3Jld0RyYXcgLmNyZXdFZGl0X19ub3RlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY3Jld0RyYXcgLmNyZXdFZGl0X19yYXRlLFxuLmNyZXdEcmF3IC5jcmV3RWRpdF9fZml4ZWQsXG4uY3Jld0RyYXcgLmNyZXdFZGl0X19leHRyYSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNyZXdEcmF3IC5jcmV3RWRpdF9fdGltZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzMwcHgpIHtcbiAgLmNyZXdEcmF3IC5jcmV3RWRpdF9fcG9zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/crew-drawer/crew-drawer.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/event-details/crew-drawer/crew-drawer.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CrewDrawerComponent */

  /***/
  function srcAppPagesEventDetailsCrewDrawerCrewDrawerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrewDrawerComponent", function () {
      return CrewDrawerComponent;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _crew_comment_modal_crew_comment_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./crew-comment-modal/crew-comment-modal.component */
    "./src/app/pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component.ts");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modals */
    "./src/app/modals/index.ts");

    var CrewDrawerComponent = /*#__PURE__*/function () {
      function CrewDrawerComponent(us, js, rs, modalService) {
        _classCallCheck(this, CrewDrawerComponent);

        this.us = us;
        this.js = js;
        this.rs = rs;
        this.modalService = modalService;
      }

      _createClass(CrewDrawerComponent, [{
        key: "view",
        value: function view(job) {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_5__["JobvComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.job = JSON.parse(JSON.stringify(job));
          modalRef.componentInstance.save.subscribe(function (saved) {
            for (var each in saved) {
              job[each] = saved[each];
            }

            for (var _each3 in job) {
              job[_each3] = saved[_each3];
            }
          });
        }
      }, {
        key: "color",
        value: function color(crewMember) {
          var prefix = this.fullEvent._id + crewMember.assigned + this.date;
          var rate = this.rs.rated[prefix];

          if (this.rs._rates[prefix]) {
            return {
              color: '#f39c12',
              width: this.rs._rates[prefix].rate / 5 * 100 + '%'
            };
          } else {
            return {
              color: '#7f8c8d',
              width: rate / 5 * 100 + '%'
            };
          }
        }
      }, {
        key: "rate",
        value: function rate(_rate3, crewMember) {
          this.rs.create({
            rate: _rate3,
            user: this.us.user._id,
            code: crewMember.assigned,
            event: this.fullEvent._id,
            day: this.date
          });
        }
      }, {
        key: "displayCommentTooltip",
        value: function displayCommentTooltip(crewMemberId) {
          var comment = '';

          if (this.fullEvent.crewComments && this.fullEvent.crewComments[crewMemberId]) {
            comment = this.fullEvent.crewComments[crewMemberId];
          }

          return comment;
        }
      }, {
        key: "editComment",
        value: function editComment(crewMember) {
          var _this29 = this;

          var modalRef = this.modalService.open(_crew_comment_modal_crew_comment_modal_component__WEBPACK_IMPORTED_MODULE_4__["CrewCommentModalComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.initialize(this.fullEvent, crewMember);
          modalRef.componentInstance.saveCommentEvent.subscribe(function (comment) {
            if (!_this29.fullEvent.crewComments) {
              _this29.fullEvent.crewComments = {};
            }

            _this29.fullEvent.crewComments[crewMember._id] = comment;
            modalRef.close();
          });
        }
      }]);

      return CrewDrawerComponent;
    }();

    CrewDrawerComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["RateService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewDrawerComponent.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewDrawerComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewDrawerComponent.prototype, "fullEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewDrawerComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CrewDrawerComponent.prototype, "positionConfigurationMap", void 0);
    CrewDrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'crew-drawer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crew-drawer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/crew-drawer/crew-drawer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crew-drawer.component.scss */
      "./src/app/pages/event-details/crew-drawer/crew-drawer.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services__WEBPACK_IMPORTED_MODULE_2__["JobService"], _services__WEBPACK_IMPORTED_MODULE_2__["RateService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])], CrewDrawerComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/event-details.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/event-details/event-details.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsEventDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-field {\n  padding: 5px;\n  border-radius: 5px 5px;\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.23);\n}\n\n.title-input {\n  width: 300px !important;\n  margin-right: 10px;\n}\n\n.crew-title {\n  margin: 20px 14px;\n  display: flex;\n  align-items: center;\n}\n\n.crew-title .fa-print {\n  font-size: 20px;\n}\n\n.input-label {\n  display: block;\n}\n\n.btn-primary {\n  background-color: #ee352a;\n  border-color: #ee352a;\n  width: 120px;\n  height: 35px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  padding: 3px;\n}\n\n.btn-primary._disabled {\n  background-color: grey;\n  border-color: grey;\n}\n\n.btn-primary._disabled:focus, .btn-primary._disabled:active {\n  outline: none;\n  background-color: grey;\n  border-color: grey;\n  box-shadow: none !important;\n}\n\n.btn-primary:disabled {\n  background-color: #484848;\n  border: #484848;\n}\n\n.btn-secondary {\n  background: none;\n  border: none;\n  color: black;\n  height: 35px;\n  width: 100px;\n  border-radius: 5px 5px;\n  margin-right: 15px;\n  padding: 3px;\n}\n\n.btn-clone {\n  background-color: goldenrod;\n  border-color: goldenrod;\n  width: 120px;\n  height: 35px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  padding: 3px;\n  color: #fff;\n}\n\n.btn-edit {\n  background-color: green;\n  border-color: green;\n  width: 120px;\n  height: 35px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  padding: 3px;\n  color: #fff;\n}\n\n.header-btn {\n  float: none;\n}\n\n.label_box {\n  display: inline-block;\n  width: 100%;\n  margin-left: 15px;\n  padding: 10px;\n  border-radius: 5px 5px;\n  font-weight: bold;\n  opacity: 0.4;\n}\n\n.label_active {\n  opacity: 1;\n}\n\n.icon-preview {\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #4169e1;\n}\n\n.event-title {\n  position: relative;\n}\n\n.event-title .title_alert {\n  position: absolute;\n  right: 20px;\n  bottom: -20px;\n  font-size: 14px;\n  color: #f16767;\n}\n\n.event-title input._alert {\n  border-color: #f16767;\n  border-width: 2px;\n}\n\n.event-time._alert {\n  border: 2px solid #f16767;\n  padding-bottom: 10px;\n}\n\n.event-venue {\n  position: relative;\n}\n\n.event-venue._alert {\n  border: 2px solid #f16767;\n}\n\n.event-time__title {\n  position: relative;\n}\n\n.event-time__title .title_alert {\n  position: absolute;\n  right: 14px;\n  bottom: 8px;\n  font-size: 14px;\n  color: #f16767;\n}\n\n.venue-row {\n  position: relative;\n}\n\n.venue-row .title_alert {\n  position: absolute;\n  left: 40px;\n  bottom: -13px;\n  font-size: 14px;\n  color: #f16767;\n}\n\n.ngb-picker-block {\n  display: flex;\n  justify-content: space-between;\n}\n\n.ngb-picker-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.minus {\n  content: \"\";\n  width: 10px;\n  display: inline-block;\n  height: 2px;\n  margin: 4px;\n  background-color: #6c757d;\n}\n\n.header-link {\n  cursor: pointer;\n}\n\n.header-link a {\n  color: white;\n}\n\n.ml15 {\n  margin-left: 15px;\n}\n\n.w100px {\n  width: 100px;\n}\n\n.cost-block {\n  border-radius: 0.25rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.cost-block__title {\n  color: #666;\n}\n\n.cost-block__result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #666;\n  padding: 10px;\n}\n\n.cost-block__result input {\n  margin-left: 10px;\n}\n\n.cost-block._bg {\n  background: rgba(0, 0, 0, 0.075);\n}\n\n.p10 {\n  padding: 10px;\n}\n\n.p20 {\n  padding: 20px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.ml10 {\n  margin-left: 10px;\n}\n\n.btn-icon {\n  background: transparent;\n  border: none;\n}\n\n.btn-icon .fa-plus {\n  color: #28a745;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvZXZlbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREVRO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0RaOztBRE1BO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRE1BO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtBQ0hKOztBRE1BO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUNJLFVBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FES0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIUjs7QURPUTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNMWjs7QURZSTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNUUjs7QURjQTtFQUNJLGtCQUFBO0FDWEo7O0FEYUk7RUFDSSx5QkFBQTtBQ1hSOztBRGtCQTtFQUNJLGtCQUFBO0FDZko7O0FEaUJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDZlI7O0FEbUJBO0VBQ0ksa0JBQUE7QUNoQko7O0FEa0JJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDaEJSOztBRG9CQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ2pCSjs7QURxQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbEJKOztBRHFCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7QUNsQko7O0FEb0JJO0VBQ0ksWUFBQTtBQ2xCUjs7QURzQkE7RUFDSSxpQkFBQTtBQ25CSjs7QURzQkE7RUFDSSxZQUFBO0FDbkJKOztBRHNCQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNuQko7O0FEcUJJO0VBRUksV0FBQTtBQ3BCUjs7QUR3Qkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDdEJSOztBRHdCUTtFQUNJLGlCQUFBO0FDdEJaOztBRDBCSTtFQUNJLGdDQUFBO0FDeEJSOztBRDRCQTtFQUNJLGFBQUE7QUN6Qko7O0FENEJBO0VBQ0ksYUFBQTtBQ3pCSjs7QUQ0QkE7RUFDSSxnQkFBQTtBQ3pCSjs7QUQ0QkE7RUFDSSxpQkFBQTtBQ3pCSjs7QUQ0QkE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUN6Qko7O0FEMkJJO0VBQ0ksY0FBQTtBQ3pCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvZXZlbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1maWVsZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cblxuLnRpdGxlLWlucHV0IHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jcmV3LXRpdGxlIHtcbiAgICBtYXJnaW46IDIwcHggMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZmEtcHJpbnQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufVxuXG4uaW5wdXQtbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTM1MmE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWUzNTJhO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcblxuICAgICYuX2Rpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XG4gICAgYm9yZGVyOiAjNDg0ODQ4O1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG4uYnRuLWNsb25lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XG4gICAgYm9yZGVyLWNvbG9yOiBnb2xkZW5yb2Q7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWVkaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyLWJ0biB7XG4gICAgZmxvYXQ6IG5vbmU7XG59XG5cbi5sYWJlbF9ib3gge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG4ubGFiZWxfYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uaWNvbi1wcmV2aWV3IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM0MTY5ZTE7XG59XG5cbi5ldmVudC10aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnRpdGxlX2FsZXJ0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogI2YxNjc2NztcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICAgICYuX2FsZXJ0IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2YxNjc2NztcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZXZlbnQtdGltZSB7XG5cbiAgICAmLl9hbGVydCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMTY3Njc7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxufVxuXG4uZXZlbnQtdmVudWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYuX2FsZXJ0IHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YxNjc2NztcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuXG5cbn1cblxuLmV2ZW50LXRpbWVfX3RpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAudGl0bGVfYWxlcnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNHB4O1xuICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogI2YxNjc2NztcbiAgICB9XG59XG5cbi52ZW51ZS1yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC50aXRsZV9hbGVydCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgYm90dG9tOiAtMTNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogI2YxNjc2NztcbiAgICB9XG59XG5cbi5uZ2ItcGlja2VyLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG4ubmdiLXBpY2tlci1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWludXMge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMnB4O1xuICAgIG1hcmdpbjogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5oZWFkZXItbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbi5tbDE1IHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLncxMDBweCB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY29zdC1ibG9jayB7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmX190aXRsZSB7XG5cbiAgICAgICAgY29sb3I6ICM2NjY7XG5cbiAgICB9XG5cbiAgICAmX19yZXN1bHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLl9iZyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG4gICAgfVxufVxuXG4ucDEwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucDIwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubXQxMCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1sMTAge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYnRuLWljb24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIC5mYS1wbHVzIHtcbiAgICAgICAgY29sb3I6ICMyOGE3NDU7XG4gICAgfVxuXG59IiwiLmlucHV0LWZpZWxkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cblxuLnRpdGxlLWlucHV0IHtcbiAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNyZXctdGl0bGUge1xuICBtYXJnaW46IDIwcHggMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jcmV3LXRpdGxlIC5mYS1wcmludCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmlucHV0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTM1MmE7XG4gIGJvcmRlci1jb2xvcjogI2VlMzUyYTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4uYnRuLXByaW1hcnkuX2Rpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xufVxuLmJ0bi1wcmltYXJ5Ll9kaXNhYmxlZDpmb2N1cywgLmJ0bi1wcmltYXJ5Ll9kaXNhYmxlZDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItY29sb3I6IGdyZXk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDg0ODtcbiAgYm9yZGVyOiAjNDg0ODQ4O1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5idG4tY2xvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XG4gIGJvcmRlci1jb2xvcjogZ29sZGVucm9kO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXItYnRuIHtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5sYWJlbF9ib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmxhYmVsX2FjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pY29uLXByZXZpZXcge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzQxNjllMTtcbn1cblxuLmV2ZW50LXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV2ZW50LXRpdGxlIC50aXRsZV9hbGVydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogLTIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmMTY3Njc7XG59XG4uZXZlbnQtdGl0bGUgaW5wdXQuX2FsZXJ0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjE2NzY3O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuLmV2ZW50LXRpbWUuX2FsZXJ0IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YxNjc2NztcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5ldmVudC12ZW51ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ldmVudC12ZW51ZS5fYWxlcnQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjE2NzY3O1xufVxuXG4uZXZlbnQtdGltZV9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZXZlbnQtdGltZV9fdGl0bGUgLnRpdGxlX2FsZXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTRweDtcbiAgYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmMTY3Njc7XG59XG5cbi52ZW51ZS1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udmVudWUtcm93IC50aXRsZV9hbGVydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDBweDtcbiAgYm90dG9tOiAtMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2YxNjc2Nztcbn1cblxuLm5nYi1waWNrZXItYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uZ2ItcGlja2VyLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWludXMge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5oZWFkZXItbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXItbGluayBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4udzEwMHB4IHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY29zdC1ibG9jayB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb3N0LWJsb2NrX190aXRsZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmNvc3QtYmxvY2tfX3Jlc3VsdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzY2NjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb3N0LWJsb2NrX19yZXN1bHQgaW5wdXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jb3N0LWJsb2NrLl9iZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xufVxuXG4ucDEwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnAyMCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tdDEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1sMTAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmJ0bi1pY29uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5idG4taWNvbiAuZmEtcGx1cyB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/event-details.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/event-details/event-details.component.ts ***!
    \****************************************************************/

  /*! exports provided: EventDetailsComponent */

  /***/
  function srcAppPagesEventDetailsEventDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function () {
      return EventDetailsComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var moment_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment-range */
    "./node_modules/moment-range/dist/moment-range.js");
    /* harmony import */


    var moment_range__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _utils_broadcaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../utils/broadcaster */
    "./src/app/utils/broadcaster.ts");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _position_approval_position_approval_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./position-approval/position-approval.component */
    "./src/app/pages/event-details/position-approval/position-approval.component.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-csv/ngx-csv */
    "./node_modules/ngx-csv/ngx-csv.js");
    /* harmony import */


    var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @modals */
    "./src/app/modals/index.ts");
    /* harmony import */


    var wacom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! wacom */
    "./node_modules/wacom/fesm2015/wacom.js");

    var EventDetailsComponent = /*#__PURE__*/function () {
      function EventDetailsComponent(route, mongo, es, os, gs, ls, js, us, rs, cs, http, formBuilder, storage, router, parserFormatter, broadcaster, modalService, pcs) {
        _classCallCheck(this, EventDetailsComponent);

        this.route = route;
        this.mongo = mongo;
        this.es = es;
        this.os = os;
        this.gs = gs;
        this.ls = ls;
        this.js = js;
        this.us = us;
        this.rs = rs;
        this.cs = cs;
        this.http = http;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.router = router;
        this.parserFormatter = parserFormatter;
        this.broadcaster = broadcaster;
        this.modalService = modalService;
        this.pcs = pcs;
        this.eventDates = [];
        this.dateCrew = {};
        this.dateInventory = {};
        this.editMode = false;
        this.startDate = null;
        this.endDate = null;
        this.isClone = null;
        this.isNew = null;
        this.dateKeys = [];
        this.time = {
          hour: null,
          minute: null,
          meridian: null
        };
        this.selectedLocation = null;
        this.eventNeedsApprovals = false;
        this.positionConfigurationMap = {};
        this.now = new Date().getTime();
        this._locations = {};
        this.lock_calc = true;
        this.reload = true;
        this.today = this.formatDate(new Date());
        this.lock_cloneEvent = false;
      }

      _createClass(EventDetailsComponent, [{
        key: "sendEmail",
        value: function sendEmail() {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_14__["CrewmailComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance._id = this.event._id;

          if (this.eventDates.length) {
            modalRef.componentInstance.dates = this.eventDates;
          }

          modalRef.componentInstance.email.title = this.event.title;
          modalRef.componentInstance.init();
        }
      }, {
        key: "createCrew",
        value: function createCrew() {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_14__["JobComponent"], {
            size: 'lg'
          });

          if (this.eventDates.length) {
            modalRef.componentInstance.dates = this.eventDates;

            for (var i = 0; i < this.eventDates.length; i++) {
              modalRef.componentInstance._dates[this.eventDates[i]] = true;
            }

            modalRef.componentInstance.job.times.from = this.event.times[this.eventDates[0]];
            modalRef.componentInstance.job.times.to = this.event.times['to' + this.eventDates[0]];
          }

          modalRef.componentInstance.job.event = this.event._id;
          modalRef.componentInstance.job.org = this.event.organizationId;
          modalRef.componentInstance.init();
        }
      }, {
        key: "initialize",
        value: function initialize() {
          var _this30 = this;

          var range = moment_range__WEBPACK_IMPORTED_MODULE_7__["extendMoment"](moment__WEBPACK_IMPORTED_MODULE_6__).range(moment__WEBPACK_IMPORTED_MODULE_6__(this.event.startDate), moment__WEBPACK_IMPORTED_MODULE_6__(this.event.endDate));
          var newDates = Array.from(range.by('days'));
          this.dateKeys = [];
          newDates.forEach(function (date) {
            var newDate = moment__WEBPACK_IMPORTED_MODULE_6__(date).format('MM/DD/YYYY').toString();

            _this30.dateKeys.push(newDate);
          });
          this.eventDates = this.dateKeys;
          if (this.event && !this.event.budget) this.event.budget = {};

          if (this.eventDates && this.eventDates.length) {
            if (!this.event.times) this.event.times = {};

            for (var i = 0; i < this.eventDates.length; i++) {
              if (!this.event.times[this.eventDates[i]]) {
                this.event.times[this.eventDates[i]] = {
                  time: "05:00 pm",
                  kind: "pm",
                  minute: 0,
                  second: 0,
                  hour: 17
                };
              }
            }
          }
        }
      }, {
        key: "notDates",
        value: function notDates() {
          if (!this.event && !this.event.times) return true;
          if (!this.eventDates) return false;

          for (var i = 0; i < this.eventDates.length; i++) {
            if (!this.event.times[this.eventDates[i]]) {
              return true;
            }

            if (!this.event.times['duration' + this.eventDates[i]]) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.eventDetailsForm = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            selectedLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
          });
          this.route.queryParams.subscribe(function (params) {
            var eventId = params.eventId;
            _this31.isClone = params.isClone;
            _this31.isNew = params.isNew;

            if (params.editMode) {
              _this31.editMode = params.editMode;
            }

            if (!_this31.isNew) {
              _this31.mongo.on('event', function () {
                _this31.event = _this31.es._events[eventId];

                _this31.initialize();

                _this31.storage.store('event', _this31.event);

                if (_this31.event.crew) {
                  Object.keys(_this31.event.crew).forEach(function (date) {
                    _this31.event.crew[date].forEach(function (position) {
                      if (position.newApplicants && position.newApplicants.length > 0) {
                        _this31.eventNeedsApprovals = true;
                      }
                    });
                  });
                }

                _this31.selectedLocation = _this31.event.location;

                _this31.checkEventDates();

                _this31.buildForm();

                _this31.startDate = _this31.event.startDate;
                _this31.endDate = _this31.event.endDate;

                _this31.parseTime();

                if (_this31.isClone) {
                  _this31.onSubmit();
                }
              });
            } else {
              _this31.lock_calc = false;
              _this31.event = _this31.newEvent();

              _this31.initialize();

              _this31.storage.store('event', _this31.event);

              if (!_this31.event.times) _this31.event.times = {};
              _this31.selectedLocation = null;

              _this31.checkEventDates();

              _this31.buildForm();

              _this31.startDate = _this31.event.startDate;
              _this31.endDate = _this31.event.endDate;

              _this31.parseTime();
            }
          });
          var organizationId = this.us.user.organizations[0]._id;
          this.pcs.getPositions(organizationId).subscribe(function (data) {
            if (data) {
              Object.keys(data).forEach(function (key) {
                _this31.positionConfigurationMap[key] = data[key].label;
              });
            }
          });
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_10__["environment"].applicationURI + '/api/getOrganization/' + organizationId).subscribe(function (data) {
            _this31.organization = data;

            _this31.updateLocationsDropdown();
          });
          this.broadcaster.listen('updateCrewObject').subscribe(function (res) {
            _this31.dateCrew = res.data.crew;

            if (_this31.event.auditChanges) {
              _this31.event.auditChanges.push(res.data.auditChange);
            }
          });
          this.broadcaster.listen('updateInventoryObject').subscribe(function (res) {
            _this31.dateInventory = res.data;
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.now = new Date().getTime();
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var modalRef = this.modalService.open(_position_approval_position_approval_component__WEBPACK_IMPORTED_MODULE_11__["PositionApprovalComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.initialize(this.event);
        }
      }, {
        key: "updateLocationsDropdown",
        value: function updateLocationsDropdown() {
          var _this32 = this;

          if (this.organization && this.organization.locations) {
            this.locationDropdownOptions = [];
            this.organizationLocations = this.organization.locations;
            this.organizationLocations.forEach(function (location) {
              _this32._locations[location._id] = location;

              if (location) {
                var dropdownLocation = Object.assign({}, {
                  value: location._id,
                  label: location.venueName
                });

                _this32.locationDropdownOptions.push(dropdownLocation);
              }
            });
          }
        }
      }, {
        key: "selectLocation",
        value: function selectLocation() {
          if (this.eventDetailsForm.controls.selectedLocation.value && this.alert == 'venue') {
            this.alert = '';
          }

          var locationId = this.eventDetailsForm.controls.selectedLocation.value;

          if (locationId && locationId !== '') {
            this.event.location = locationId;
            this.selectedLocation = this.findLocationById(locationId);
          }
        }
      }, {
        key: "findLocationById",
        value: function findLocationById(locationId) {
          return this.organizationLocations.find(function (orgLocation) {
            return orgLocation._id === locationId;
          });
        }
      }, {
        key: "newEvent",
        value: function newEvent() {
          var _this33 = this;

          this.editMode = true;
          var today = new Date(Date.now());
          today = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
          var newEvent = {
            title: '',
            description: '',
            labels: '',
            startDate: today,
            endDate: today,
            time: '12:00pm',
            crew: _defineProperty({}, today, []),
            inventory: _defineProperty({}, today, []),
            createdBy: this.us.user._id,
            organizationId: this.us.user.organizations[0]._id,
            location: null
          };
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_10__["environment"].applicationURI + '/api/event/_id').subscribe(function (_id) {
            _this33.event.__new = true;
            _this33.event._id = _id;

            _this33.mongo.push('event', _this33.event);
          });
          return newEvent;
        }
      }, {
        key: "parseTime",
        value: function parseTime() {
          if (this.event.time) {
            var times = this.event.time.split(':', 2);
            this.time.hour = parseInt(times[0]);
            this.time.minute = times[1];
            this.time.minute = parseInt(this.time.minute.substring(0, this.time.minute.length - 2));
          }
        }
      }, {
        key: "formatTimeForSave",
        value: function formatTimeForSave() {
          if (this.time) {
            var meridian = 'am';
            var hour = this.time.hour;

            if (this.time.hour >= 12) {
              meridian = 'pm';

              if (hour != 12) {
                hour = this.time.hour - 12;
              }
            }

            if (this.time.minute.toString().length < 2) {
              this.time.minute = '0' + this.time.minute;
            }

            return {
              meridian: meridian,
              hour: hour,
              minute: this.time.minute
            };
          }
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          if (!this.ls.done) {
            return setTimeout(this.buildForm.bind(this), 100);
          }

          if (this.isClone) {
            delete this.event._id;
            this.event.title = this.event.title.concat(' Clone');
          }

          this.eventDetailsForm.controls.title.setValue(this.event.title);
          this.eventDetailsForm.controls.description.setValue(this.event.description);

          if (this.event.location) {
            this.eventDetailsForm.controls.selectedLocation.setValue(this.event.location._id);
          }

          this.eventDetailsForm.controls.time.setValue(this.event.time);
          var labels = this.event.labels.split(', ');

          for (var i = 0; i < this.ls.labels.length; i++) {
            this.ls.labels[i]._active = false;

            for (var j = 0; j < labels.length; j++) {
              if (labels[j] == this.ls.labels[i].name) {
                this.ls.labels[i]._active = true;
                break;
              }
            }
          }

          this.refresh();
        }
      }, {
        key: "checkEventDates",
        value: function checkEventDates() {
          var _this34 = this;

          var range = moment_range__WEBPACK_IMPORTED_MODULE_7__["extendMoment"](moment__WEBPACK_IMPORTED_MODULE_6__).range(this.event.startDate, this.event.endDate);
          var newDates = Array.from(range.by('days'));
          this.dateKeys = [];
          newDates.forEach(function (date) {
            var newDate = moment__WEBPACK_IMPORTED_MODULE_6__(date).format('MM/DD/YYYY').toString();

            _this34.dateKeys.push(newDate);
          });
          this.eventDates = this.dateKeys;
          /*
          if (this.event.crew) {
              let dates = Object.keys(this.event.crew);
              this.eventDates = dates;
              this.initialize();
              this.backup_eventDates = dates;
              dates.forEach((date) => {
                  this.dateCrew[date] = [];
                  this.event.crew[date].forEach((crewMember) => {
                      this.dateCrew[date].push(crewMember);
                  });
              });
          }
           if (this.event.inventory) {
              const dates = Object.keys(this.event.inventory);
              dates.forEach((date) => {
                  this.dateInventory[date] = [];
                  this.event.inventory[date].forEach((inventoryItem) => {
                      this.dateInventory[date].push(inventoryItem);
                  });
              });
          }
          */
        }
      }, {
        key: "toggleEdit",
        value: function toggleEdit() {
          var _this35 = this;

          if (this.event._id) {
            this.editMode = !this.editMode;
            this.eventDates = this.backup_eventDates;
            this.initialize();
            setTimeout(function () {
              _this35.lock_calc = false;
            }, 1000);
          } else {
            this.router.navigate(['dashboard']);
          }
        }
      }, {
        key: "print",
        value: function print() {
          var document = {
            title: this.event.title,
            dateCrew: this.dateCrew
          };
          this.storage.store('print-document', document);
          this.router.navigate(['print']);
        }
      }, {
        key: "hasChanged",
        value: function hasChanged(oldValue, newValue) {
          return !(oldValue === newValue);
        }
      }, {
        key: "auditChange",
        value: function auditChange(objectToSave, newValue, oldValue, field) {
          var audit = {
            user: {
              name: this.us.user.firstName + ' ' + this.us.user.lastName,
              _id: this.us.user._id
            },
            oldValue: oldValue,
            newValue: newValue,
            field: field,
            time: Date.now(),
            forDate: 'all',
            section: 'Details',
            action: 'edit'
          };
          objectToSave.auditChanges.push(audit);
          return objectToSave;
        }
      }, {
        key: "auditChanges",
        value: function auditChanges(objectToSave) {
          if (this.hasChanged(objectToSave.title, this.event.title)) {
            this.auditChange(objectToSave, objectToSave.title, this.event.title, 'title');
          }

          if (this.hasChanged(objectToSave.description, this.event.description)) {
            this.auditChange(objectToSave, objectToSave.description, this.event.description, 'description');
          }

          if (this.hasChanged(objectToSave.startDate, this.event.startDate)) {
            this.auditChange(objectToSave, objectToSave.startDate, this.event.startDate, 'startDate');
          }

          if (this.hasChanged(objectToSave.endDate, this.event.endDate)) {
            this.auditChange(objectToSave, objectToSave.endDate, this.event.endDate, 'endDate');
          }

          var eventLocation = this.event.location;

          if (this.hasChanged(objectToSave.location, eventLocation._id)) {
            var oldLocation = this.findLocationById(eventLocation._id);
            var newLocation = this.findLocationById(objectToSave.location);
            this.auditChange(objectToSave, newLocation.venueName, oldLocation.venueName, 'venue');
          }

          return objectToSave;
        }
      }, {
        key: "setupSaveObject",
        value: function setupSaveObject() {
          var objectToSave = Object.assign({}, this.event);
          objectToSave.title = this.eventDetailsForm.controls.title.value;
          objectToSave.description = this.eventDetailsForm.controls.description.value;
          objectToSave.startDate = this.startDate;
          objectToSave.endDate = this.endDate;
          objectToSave.budget = this.event.budget;
          var locationId = this.eventDetailsForm.controls.selectedLocation.value;

          if (locationId && locationId !== '') {
            objectToSave.location = locationId;
          }

          objectToSave.crew = this.dateCrew;
          objectToSave.inventory = this.dateInventory;
          return objectToSave;
        }
      }, {
        key: "calc",
        value: function calc(date) {
          var _this36 = this;

          if (this.lock_calc) return;

          if (!this.notDates() && this.alert == 'times') {
            this.alert = '';
          }

          if (this.event.times[date] && this.event.times['duration' + date]) {
            this.lock_calc = true;
            setTimeout(function () {
              _this36.lock_calc = false;
            }, 1000);
            this.event.times['to' + date] = {
              second: (this.event.times[date].second + this.event.times['duration' + date].second) % 60,
              minute: (this.event.times[date].minute + this.event.times['duration' + date].minute) % 60,
              hour: (this.event.times[date].hour + this.event.times['duration' + date].hour) % 24
            };
          }
        }
      }, {
        key: "calc_duration",
        value: function calc_duration(date) {
          var _this37 = this;

          if (this.lock_calc) return;

          if (!this.notDates() && this.alert == 'times') {
            this.alert = '';
          }

          if (this.event.times[date] && this.event.times['to' + date]) {
            var second = this.event.times['to' + date].second - this.event.times[date].second;
            var minute = this.event.times['to' + date].minute - this.event.times[date].minute;
            var hour = this.event.times['to' + date].hour - this.event.times[date].hour;

            if (second < 0) {
              second = 60 - second;
              minute--;
            }

            if (minute < 0) {
              minute = 60 - minute;
              hour--;
            }

            if (hour < 0) {
              return this.event.times['duration' + date] = {
                second: 0,
                minute: 0,
                hour: 0
              };
            }

            this.lock_calc = true;
            setTimeout(function () {
              _this37.lock_calc = false;
            }, 1000);
            this.event.times['duration' + date] = {
              second: second,
              minute: minute,
              hour: hour
            };
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this38 = this;

          this.alert = null;

          if (!this.eventDetailsForm.controls.title.value) {
            document.getElementById('TitleSection').scrollIntoView({
              behavior: 'smooth'
            });
            return this.alert = 'title';
          }

          if (!this.eventDetailsForm.controls.selectedLocation.value) {
            document.getElementById('VenueSection').scrollIntoView({
              behavior: 'smooth'
            });
            return this.alert = 'venue';
          }

          if (this.notDates()) {
            document.getElementById('TimeSection').scrollIntoView({
              behavior: 'smooth'
            });
            return this.alert = 'times';
          }

          this.backup_eventDates = this.eventDates;
          var newSave = false;

          if (this.isClone || this.isNew) {
            newSave = true;
          }

          var path = newSave ? 'saveEvent' : 'updateEvent';
          var objectToSave = this.setupSaveObject();
          if (!objectToSave.title) return this.alert = 'title';
          objectToSave.labels = '';

          for (var i = 0; i < this.ls.labels.length; i++) {
            if (this.ls.labels[i]._active) {
              if (objectToSave.labels) {
                objectToSave.labels += ', ' + this.ls.labels[i].name;
              } else {
                objectToSave.labels = this.ls.labels[i].name;
              }
            }
          }

          if (!newSave) {
            objectToSave = this.auditChanges(objectToSave);
          }

          var saveTime = this.formatTimeForSave();
          saveTime = saveTime.hour + ':' + saveTime.minute + saveTime.meridian;
          objectToSave.time = saveTime;

          if (this.backup_eventDates && this.js.byEvent[this.event._id] && this.js.byEvent[this.event._id].length) {
            for (var _i7 = 0; _i7 < this.js.byEvent[this.event._id].length; _i7++) {
              var startDate = new Date(objectToSave.startDate).getTime() - 86400000;
              var endDate = new Date(objectToSave.endDate).getTime() + 86400000;
              var day = new Date(this.js.byEvent[this.event._id][_i7].day).getTime();

              if (day < startDate || day > endDate) {
                this.js["delete"](this.js.byEvent[this.event._id][_i7], function () {}, 'Date removed');
              }
            }
          }

          this.http.post(_env__WEBPACK_IMPORTED_MODULE_10__["environment"].applicationURI + '/api/' + path, objectToSave).subscribe(function (res) {
            var eventId = res.data._id;

            if (!objectToSave._id) {
              _this38.mongo.push('event', res.data);
            } else {
              var event = res.data;
              event.startDate = new Date(event.startDate);
              event.endDate = new Date(event.endDate);
              event.dates = [];
              var from = event.startDate.getTime();
              var to = event.endDate.getTime();

              var push_day = function push_day(day_timed) {
                var pd = new Date(day_timed);
                event.dates.push((pd.getMonth() < 9 && '0' || '') + (pd.getMonth() + 1) + '/' + (pd.getDate() < 10 && '0' || '') + pd.getDate() + '/' + pd.getFullYear());
              };

              push_day(from);

              while (from < to) {
                from += 86400000;
                push_day(from);
              }

              for (var each in res.data) {
                if (each == 'createdBy') continue;
                _this38.es._events[eventId][each] = res.data[each];
              }
            }

            if (_this38.reload) {
              _this38.reload = false;
              setTimeout(function () {
                document.getElementById('btnSubmit').click();
              }, 0);
            }

            window.scrollTo(0, 0);

            _this38.storage.store('alert', {
              type: 'success',
              message: 'Successfully updated event!'
            });

            if (newSave) {
              _this38.editMode = false;

              if (_this38.isClone) {
                _this38.editMode = true;
              }

              _this38.router.navigate(['event-details'], {
                queryParams: {
                  eventId: eventId,
                  editMode: _this38.editMode
                }
              });
            } else {
              _this38.http.get(_env__WEBPACK_IMPORTED_MODULE_10__["environment"].applicationURI + '/api/getEventByID/' + eventId).subscribe(function (updatedEvent) {
                if (!updatedEvent.files) updatedEvent.files = [];
                if (!updatedEvent.times) updatedEvent.times = {};
                _this38.event = updatedEvent;

                _this38.initialize();

                _this38.storage.store('event', _this38.event);

                _this38.checkEventDates();

                _this38.buildForm();

                _this38.startDate = _this38.event.startDate;
                _this38.endDate = _this38.event.endDate;
              });

              _this38.editMode = !_this38.editMode;
            } // create a list of users linked to this event
            // the person who created will always be attached


            var listOfUsers = [];

            if (res.data.createdBy._id) {
              listOfUsers.push(res.data.createdBy._id);
            } else {
              listOfUsers.push(res.data.createdBy);
            }

            var userUpdateBody = {
              listOfUsers: [].concat(listOfUsers),
              dates: {}
            };
          });
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          date = new Date(date);
          return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        }
      }, {
        key: "formatTime",
        value: function formatTime(date) {
          date = new Date(date);
          var time = date.toLocaleTimeString('en-US');
          return time;
        }
      }, {
        key: "selectDates",
        value: function selectDates(dates) {
          var _this39 = this;

          this.startDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.parserFormatter.format(dates.from));
          this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.parserFormatter.format(dates.to));
          this.event.startDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.startDate).format('MM/DD/YYYY').toString();
          this.event.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.endDate).format('MM/DD/YYYY').toString();
          var range = moment_range__WEBPACK_IMPORTED_MODULE_7__["extendMoment"](moment__WEBPACK_IMPORTED_MODULE_6__).range(this.startDate, this.endDate);
          var newDates = Array.from(range.by('days'));
          this.dateKeys = [];
          newDates.forEach(function (date) {
            var newDate = moment__WEBPACK_IMPORTED_MODULE_6__(date).format('MM/DD/YYYY').toString();

            _this39.dateKeys.push(newDate);
          });
          this.eventDates = this.dateKeys; // this.initialize();

          this.buildDateCrews();
          this.buildDateInventory();

          if (this.eventDates && this.eventDates.length) {
            if (!this.event.times) this.event.times = {};

            for (var i = 0; i < this.eventDates.length; i++) {
              if (!this.event.times[this.eventDates[i]]) {
                this.event.times[this.eventDates[i]] = {
                  time: "05:00 pm",
                  kind: "pm",
                  minute: 0,
                  second: 0,
                  hour: 17
                };
              }
            }
          }
        }
      }, {
        key: "buildDateCrews",
        value: function buildDateCrews() {
          var _this40 = this;

          var newCrew = {};
          this.dateKeys.forEach(function (key) {
            if (_this40.dateCrew[key] && !newCrew[key]) {
              newCrew[key] = _this40.dateCrew[key];
            }

            if (!newCrew[key]) {
              newCrew[key] = [];
            }
          });
          this.dateCrew = newCrew;
          this.broadcaster.emit('updateCrewDateTabs', this.dateCrew);
        }
      }, {
        key: "buildDateInventory",
        value: function buildDateInventory() {
          var _this41 = this;

          var newInventory = {};
          this.dateKeys.forEach(function (key) {
            if (_this41.dateInventory[key] && !newInventory[key]) {
              newInventory[key] = _this41.dateInventory[key];
            }

            if (!newInventory[key]) {
              newInventory[key] = [];
            }
          });
          this.broadcaster.emit('updateInventoryDateTabs', this.dateInventory);
        }
      }, {
        key: "cloneEvent",
        value: function cloneEvent() {
          var _this42 = this;

          if (this.lock_cloneEvent) return;
          this.lock_cloneEvent = true;

          if (!this.js.byEvent[this.event._id]) {
            this.js.byEvent[this.event._id] = [];
          }

          var event = JSON.parse(JSON.stringify(this.event));
          event.title += ' Clone';
          this.es.create(event, function (created) {
            var counter = _this42.js.byEvent[event._id].length;

            if (!counter) {
              _this42.lock_cloneEvent = false;
              return _this42.router.navigate(['event-details'], {
                queryParams: {
                  eventId: created._id
                }
              });
            }

            for (var i = 0; i < _this42.js.byEvent[event._id].length; i++) {
              var new_job = JSON.parse(JSON.stringify(_this42.js.byEvent[event._id][i]));
              delete new_job.assigned;
              new_job.event = created._id;
              new_job.accepted = false;
              new_job.declined = false;
              new_job.__ignore_email = true;

              _this42.js.create(new_job, function (created_job) {
                if (--counter == 0) {
                  _this42.lock_cloneEvent = false;

                  _this42.router.navigate(['event-details'], {
                    queryParams: {
                      eventId: created._id,
                      editMode: true
                    }
                  });

                  _this42.storage.store('alert', {
                    type: 'success',
                    message: 'Your event has been cloned, you can edit it.'
                  });
                }
              });
            }
          }, false);
          /*
          this.router.navigate(['event-details'], {
              queryParams: {
                  eventId: this.event._id,
                  isClone: true
              }
          });
          */
        }
        /*
        * Import / Export Management
        */

      }, {
        key: "times",
        value: function times() {
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var times = '';

          for (var i = 0; i < this.eventDates.length; i++) {
            if (times) times += ';';
            var time = this.event.times[prefix + this.eventDates[i]];

            if (time && time.time) {
              times += time.time.replace(' ', '');
            } else if (time) {
              times += time.hour < 10 && '0' || '';
              times += time.hour % 12 + ':';
              times += time.minute < 10 && '0' || '';
              times += time.minute;
              times += time.hour >= 12 && 'pm' || 'am';
            }
          }

          return times;
        }
      }, {
        key: "crew",
        value: function crew() {
          var crew = '';

          for (var i = 0; i < this.eventDates.length; i++) {
            if (crew) crew += ';';

            if (this.dateCrew[this.eventDates[i]]) {
              var crews = this.dateCrew[this.eventDates[i]];

              for (var j = 0; j < crews.length; j++) {
                crew += crews[j].position + '|' + crews[j].rate;

                if (crews[j].callTime) {
                  crew += '|' + crews[j].callTime.replace(' ', '');
                }
              }
            }
          }

          return crew;
        }
      }, {
        key: "export",
        value: function _export() {
          var labels = '';

          for (var i = 0; i < this.ls.labels.length; i++) {
            if (labels) labels += ';';

            if (this.ls.labels[i]._active) {
              labels += this.ls.labels[i].name;
            }
          }

          var location_id = this.eventDetailsForm.controls.selectedLocation.value;
          var data = [{
            title: 'Title',
            description: 'Description',
            startDate: 'Start Date',
            endDate: 'End Date',
            timesFrom: 'Times From',
            timesTo: 'Times To',
            venue: 'Venue',
            labels: 'Labels',
            crew: 'Crew'
          }, {
            title: this.eventDetailsForm.controls.title.value,
            description: this.eventDetailsForm.controls.description.value,
            startDate: this.startDate,
            endDate: this.endDate,
            timesFrom: this.times(),
            timesTo: this.times('to'),
            venue: location_id && this._locations[location_id].venueName || '',
            labels: labels,
            crew: this.crew()
          }];
          new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_13__["ngxCsv"](data, 'Event');
        }
        /*
        * 48h Management
        */

      }, {
        key: "send_48h",
        value: function send_48h() {
          this.http.post(_env__WEBPACK_IMPORTED_MODULE_10__["environment"].applicationURI + '/api/event/48h', this.event).subscribe(function (data) {});
        }
        /*
        * PDF Management
        */

      }, {
        key: "generatePdf",
        value: function generatePdf() {
          if (this.os.org && this.os.org.logo) {
            this.createPdf(this.os.org.logo);
          } else {
            (function () {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var blob, logo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch(window.location.origin + "/api/file/public/org.png").then(function (r) {
                          return r.blob();
                        });

                      case 2:
                        blob = _context.sent;
                        _context.next = 5;
                        return new Promise(function (resolve) {
                          var reader = new FileReader();

                          reader.onload = function () {
                            return resolve(reader.result);
                          };

                          reader.readAsDataURL(blob);
                        });

                      case 5:
                        logo = _context.sent;
                        this.createPdf(logo);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            })();
          }
        }
      }, {
        key: "arr_to_test",
        value: function arr_to_test(arr) {
          var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
          var text = '';

          for (var i = 0; i < arr.length; i++) {
            if (text) text += ', ' + arr[i][field];else text += arr[i][field];
          }

          return text;
        }
      }, {
        key: "createPdf",
        value: function createPdf(logo) {
          // pageBreak: 'after'
          var content = [];

          for (var i = 0; i < this.eventDates.length; i++) {
            var right_side = [{
              text: 'Event Date: ' + this.eventDates[i]
            }];
            debugger;

            for (var l = 0; l < this.cs.categories.length; l++) {
              var labelsNames = "";

              for (var k = 0; k < this.ls.labels.length; k++) {
                if (this.ls.labels[k].category == this.cs.categories[l].name) {
                  var labels = this.event.labels.split(', ');

                  for (var j = 0; j < labels.length; j++) {
                    if (labels[j] == this.ls.labels[k].name) {
                      //label name
                      if (labelsNames == "") labelsNames += labels[j];else labelsNames += ", " + labels[j];
                      break;
                    }
                  }
                }
              }

              if (labelsNames != "") {
                right_side.push({
                  text: this.cs.categories[l].name + ': ' + labelsNames
                });
              }
            } // for (let j = 0; j < this.cs.categories.length; j++) {
            //     let labels = [];
            //     for (let k = 0; k < this.ls.labels.length; k++) {
            //         if (this.ls.labels[k].category == this.cs.categories[j].name) {
            //             labels.push(this.ls.labels[k]);
            //         }
            //     }
            //     if (labels.length) {
            //         right_side.push({
            //             text: this.cs.categories[j].name + ': ' + this.arr_to_test(labels)
            //         });
            //     }
            // }


            if (!this.js.byEvent[this.event._id + this.eventDates[i]]) {
              this.js.byEvent[this.event._id + this.eventDates[i]] = [];
            }

            var header = {
              alignment: 'justify',
              columns: [[{
                image: logo
              }, {
                text: this.os.org.name
              }], right_side]
            };

            if (this.js.byEvent[this.event._id + this.eventDates[i]].length) {
              content.push(header);
            } else if (i + 1 == this.eventDates.length) {
              content.push(header);
              continue;
            } else {
              header.pageBreak = 'after';
              content.push(header);
              continue;
            }

            if (this.eventDates.length) {
              content.push({
                text: 'Crew',
                style: 'header'
              });
            }

            var crewMembers = [['Position', 'Name', 'Call Time', 'In Time', 'Out Time', "Missed Meal (Y/N):", "Mileage (Y/N)", "Parking (Y/N)", "Initials", "Signature/Comments"]];

            for (var _j2 = 0; _j2 < this.js.byEvent[this.event._id + this.eventDates[i]].length; _j2++) {
              var job = this.js.byEvent[this.event._id + this.eventDates[i]][_j2];
              var crew = [];
              crew.push(job.position);

              if (job.assigned && this.us._users[job.assigned]) {
                crew.push(this.us._users[job.assigned].firstName + ' ' + this.us._users[job.assigned].lastName);
              } else {
                crew.push('Not Assigned');
              }

              crew.push(job.times.from.time || 'N/A');
              crew.push('');
              crew.push('');
              crew.push('');
              crew.push('');
              crew.push('');
              crew.push('');
              crew.push('');
              crewMembers.push(crew);
            }

            if (i + 1 == this.eventDates.length) {
              content.push({
                style: 'tableExample',
                table: {
                  body: crewMembers
                }
              });
            } else {
              content.push({
                style: 'tableExample',
                table: {
                  body: crewMembers
                },
                pageBreak: 'after'
              });
            }
          }

          pdfMake.createPdf({
            content: content,
            pageOrientation: 'landscape',
            styles: {
              header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
              },
              subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5]
              },
              tableExample: {
                margin: [0, 5, 0, 15]
              },
              tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
              }
            },
            defaultStyle: {// alignment: 'justify'
            }
          }).open();
        }
        /*
        * Labels Management
        */

      }, {
        key: "addLabel",
        value: function addLabel(category) {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_14__["LabelcComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.category = category;
          modalRef.componentInstance.refresh = this.refresh.bind(this);
        }
        /*
        * Files Management
        */

      }, {
        key: "add",
        value: function add(file) {
          var _this43 = this;

          if (file.type != 'application/pdf' || file.size > 15728640) return;
          var reader = new FileReader();

          reader.onload = function (e) {
            _this43.http.post(_env__WEBPACK_IMPORTED_MODULE_10__["environment"].applicationURI + '/api/file/create', {
              data: String.fromCharCode.apply(null, new Uint8Array(e.target.result)),
              name: file.name.split(' ').join('')
            }).subscribe(function (data) {
              if (data) {
                _this43.event.files.push(_env__WEBPACK_IMPORTED_MODULE_10__["environment"].applicationURI + data);
              }
            });
          };

          reader.readAsArrayBuffer(file);
        }
      }, {
        key: "delete",
        value: function _delete(files) {
          files = files.split('/');
          files.pop();
          this.http.post(_env__WEBPACK_IMPORTED_MODULE_10__["environment"].applicationURI + '/api/file/delete', {
            _id: files.pop()
          }).subscribe(function (data) {});
        }
      }, {
        key: "upload",
        value: function upload(files) {
          for (var i = 0; i < files.length; i++) {
            this.add(files[i]);
          }

          this.files = null;
        }
      }]);

      return EventDetailsComponent;
    }();

    EventDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: wacom__WEBPACK_IMPORTED_MODULE_15__["MongoService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_12__["EventService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_12__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_12__["GroupService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_12__["LabelService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_12__["JobService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_12__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_12__["RateService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_12__["CategoryService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateParserFormatter"]
      }, {
        type: _utils_broadcaster__WEBPACK_IMPORTED_MODULE_9__["Broadcaster"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_12__["PositionConfigurationService"]
      }];
    };

    EventDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/event-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-details.component.scss */
      "./src/app/pages/event-details/event-details.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], wacom__WEBPACK_IMPORTED_MODULE_15__["MongoService"], _services__WEBPACK_IMPORTED_MODULE_12__["EventService"], _services__WEBPACK_IMPORTED_MODULE_12__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_12__["GroupService"], _services__WEBPACK_IMPORTED_MODULE_12__["LabelService"], _services__WEBPACK_IMPORTED_MODULE_12__["JobService"], _services__WEBPACK_IMPORTED_MODULE_12__["UserService"], _services__WEBPACK_IMPORTED_MODULE_12__["RateService"], _services__WEBPACK_IMPORTED_MODULE_12__["CategoryService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateParserFormatter"], _utils_broadcaster__WEBPACK_IMPORTED_MODULE_9__["Broadcaster"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"], _services__WEBPACK_IMPORTED_MODULE_12__["PositionConfigurationService"]])], EventDetailsComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsInventoryConfigurationModalInventoryConfigurationModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-overlay {\n  background-color: rgba(104, 104, 104, 0.5);\n  content: \"\";\n  position: absolute;\n  top: 69px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  overflow-y: hidden;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  text-align: center;\n  background-color: grey;\n  height: 600px;\n  width: 100%;\n  border-radius: 10px 10px;\n  padding: 15px;\n  max-width: 800px !important;\n  z-index: 3;\n  margin-top: 20px;\n}\n\n.close-icon {\n  color: #f8f8ff;\n  font-size: 25px;\n  margin-left: auto;\n  float: right;\n  margin-right: 5px;\n  margin-top: 5px;\n  z-index: 3;\n  position: relative;\n}\n\n.btn-primary {\n  background-color: #ee352a;\n  border-color: #ee352a;\n  width: 120px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n}\n\n.btn-primary:disabled {\n  background-color: grey;\n  border-color: grey;\n  z-index: 3;\n  position: relative;\n}\n\n.btn-secondary {\n  background: none;\n  border: none;\n  color: black;\n  width: 100px;\n  border-radius: 5px 5px;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n  position: relative;\n  z-index: 3;\n}\n\n.btn-add {\n  background-color: green;\n  border-color: greenyellow;\n  width: 100px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n  float: left;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2ludmVudG9yeS1jb25maWd1cmF0aW9uLW1vZGFsL2ludmVudG9yeS1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2ludmVudG9yeS1jb25maWd1cmF0aW9uLW1vZGFsL2ludmVudG9yeS1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnQtZGV0YWlscy9pbnZlbnRvcnktY29uZmlndXJhdGlvbi1tb2RhbC9pbnZlbnRvcnktY29uZmlndXJhdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwxMDQsMTA0LCAuNSk7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjlweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICB6LWluZGV4OjI7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWF4LXdpZHRoOiA4MDBweCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6MztcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgICBjb2xvcjogI2Y4ZjhmZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB6LWluZGV4OjM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTM1MmE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWUzNTJhO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZzozcHg7XG59XG5cbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgei1pbmRleDozO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgIHBhZGRpbmc6M3B4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHotaW5kZXg6Mztcbn1cblxuLmJ0bi1hZGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlci1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nOjNweDtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIGNvbG9yOndoaXRlO1xufSIsIi5tb2RhbC1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDEwNCwgMTA0LCAwLjUpO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjlweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXgtd2lkdGg6IDgwMHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgY29sb3I6ICNmOGY4ZmY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzNTJhO1xuICBib3JkZXItY29sb3I6ICNlZTM1MmE7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbn1cblxuLmJ0bi1hZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyLWNvbG9yOiBncmVlbnllbGxvdztcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: InventoryConfigurationModalComponent */

  /***/
  function srcAppPagesEventDetailsInventoryConfigurationModalInventoryConfigurationModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryConfigurationModalComponent", function () {
      return InventoryConfigurationModalComponent;
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


    var _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../utils/broadcaster */
    "./src/app/utils/broadcaster.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");

    var InventoryConfigurationModalComponent = /*#__PURE__*/function () {
      function InventoryConfigurationModalComponent(broadcaster, http) {
        _classCallCheck(this, InventoryConfigurationModalComponent);

        this.broadcaster = broadcaster;
        this.http = http;
        this.isShown = false;
        this.positionList = [];
      }

      _createClass(InventoryConfigurationModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          this.broadcaster.listen('toggleInventoryModal').subscribe(function (res) {
            _this44.toggleShow();

            _this44.subTitle = res.data.date;
            _this44.inventory = res.data.event;
          });
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/getInventory').subscribe(function (res) {
            _this44.allAvailableInventory = res;
          });
        }
      }, {
        key: "toggleShow",
        value: function toggleShow() {
          this.isShown = !this.isShown;
        }
      }]);

      return InventoryConfigurationModalComponent;
    }();

    InventoryConfigurationModalComponent.ctorParameters = function () {
      return [{
        type: _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    InventoryConfigurationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-configuration-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inventory-configuration-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inventory-configuration-modal.component.scss */
      "./src/app/pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], InventoryConfigurationModalComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component.scss":
  /*!************************************************************************************************************************************!*\
    !*** ./src/app/pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component.scss ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsInventoryConfigurationInventoryConfigurationRowInventoryConfigurationRowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2ludmVudG9yeS1jb25maWd1cmF0aW9uL2ludmVudG9yeS1jb25maWd1cmF0aW9uLXJvdy9pbnZlbnRvcnktY29uZmlndXJhdGlvbi1yb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvaW52ZW50b3J5LWNvbmZpZ3VyYXRpb24vaW52ZW50b3J5LWNvbmZpZ3VyYXRpb24tcm93L2ludmVudG9yeS1jb25maWd1cmF0aW9uLXJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2ludmVudG9yeS1jb25maWd1cmF0aW9uL2ludmVudG9yeS1jb25maWd1cmF0aW9uLXJvdy9pbnZlbnRvcnktY29uZmlndXJhdGlvbi1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn0iLCIucm93IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component.ts":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: InventoryConfigurationRowComponent */

  /***/
  function srcAppPagesEventDetailsInventoryConfigurationInventoryConfigurationRowInventoryConfigurationRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryConfigurationRowComponent", function () {
      return InventoryConfigurationRowComponent;
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


    var _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../utils/broadcaster */
    "./src/app/utils/broadcaster.ts");

    var InventoryConfigurationRowComponent = /*#__PURE__*/function () {
      function InventoryConfigurationRowComponent(broadcaster) {
        _classCallCheck(this, InventoryConfigurationRowComponent);

        this.broadcaster = broadcaster;
      }

      _createClass(InventoryConfigurationRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleClick",
        value: function handleClick() {
          this.broadcaster.emit('removeInventoryFromDate', {
            inventoryId: this.inventory._id,
            date: this.date
          });
        }
      }]);

      return InventoryConfigurationRowComponent;
    }();

    InventoryConfigurationRowComponent.ctorParameters = function () {
      return [{
        type: _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InventoryConfigurationRowComponent.prototype, "inventory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InventoryConfigurationRowComponent.prototype, "isLast", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InventoryConfigurationRowComponent.prototype, "isEven", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InventoryConfigurationRowComponent.prototype, "deleteInventory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InventoryConfigurationRowComponent.prototype, "date", void 0);
    InventoryConfigurationRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-configuration-row',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inventory-configuration-row.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inventory-configuration-row.component.scss */
      "./src/app/pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"]])], InventoryConfigurationRowComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/inventory-configuration/inventory-configuration.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/event-details/inventory-configuration/inventory-configuration.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsInventoryConfigurationInventoryConfigurationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-primary {\n  background-color: green;\n  border-color: greenyellow;\n  width: 100px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n}\n\n.add-inventory {\n  padding: 3px;\n  border-radius: 5px 5px;\n  width: 40px;\n  background-color: green;\n  color: white;\n  margin-top: 15px;\n}\n\n.close {\n  padding: 3px;\n  border-radius: 5px 5px;\n  width: 40px;\n  background-color: red;\n  color: white;\n  float: left;\n  margin-top: 15px;\n}\n\n.row {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2ludmVudG9yeS1jb25maWd1cmF0aW9uL2ludmVudG9yeS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL2ludmVudG9yeS1jb25maWd1cmF0aW9uL2ludmVudG9yeS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxvQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnQtZGV0YWlscy9pbnZlbnRvcnktY29uZmlndXJhdGlvbi9pbnZlbnRvcnktY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbnllbGxvdztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6M3B4O1xufVxuLmFkZC1pbnZlbnRvcnkge1xuICAgIHBhZGRpbmc6M3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgd2lkdGg6NDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbi10b3A6MTVweDtcbn1cbi5jbG9zZSB7XG4gICAgcGFkZGluZzozcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgICB3aWR0aDo0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59IiwiLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmFkZC1pbnZlbnRvcnkge1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2xvc2Uge1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/inventory-configuration/inventory-configuration.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/event-details/inventory-configuration/inventory-configuration.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: InventoryConfigurationComponent */

  /***/
  function srcAppPagesEventDetailsInventoryConfigurationInventoryConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryConfigurationComponent", function () {
      return InventoryConfigurationComponent;
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


    var _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../utils/broadcaster */
    "./src/app/utils/broadcaster.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var InventoryConfigurationComponent = /*#__PURE__*/function () {
      function InventoryConfigurationComponent(broadcaster, us, http, formBuilder) {
        _classCallCheck(this, InventoryConfigurationComponent);

        this.broadcaster = broadcaster;
        this.us = us;
        this.http = http;
        this.formBuilder = formBuilder;
        this.isAdding = false;
        this.dates = [];
        this.positionList = [];
        this.allAvailableInventory = [];
        this.inventoryAssetList = [];
        this.inventoryList = [];
        this.selectedInventory = {
          name: ''
        };
        this.organization = {
          inventory: {}
        };
        this.dropdownSettings = {};
      }

      _createClass(InventoryConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this45 = this;

          this.newInventoryForm = this.formBuilder.group({});
          var keys = Object.keys(this.event);
          this.dates = keys;
          this.broadcaster.listen('updateInventoryDateTabs').subscribe(function (res) {
            _this45.event = res.data;
            var listenerKeys = Object.keys(_this45.event);
            _this45.dates = listenerKeys;
          });
          this.broadcaster.listen('removeInventoryFromDate').subscribe(function (res) {
            _this45.removeInventoryFromDate(res.data);
          });
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/getInventory').subscribe(function (res) {
            _this45.allAvailableInventory = res;
            _this45.inventoryList = [];

            _this45.allAvailableInventory.forEach(function (inventory) {
              _this45.inventoryList.push({
                value: inventory._id,
                label: inventory.name
              });
            });
          });
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/getOrganization/' + this.us.user.organizations[0]._id).subscribe(function (res) {
            _this45.organization = res;
          });
          this.dropdownSettings = {
            singleSelection: false,
            idField: 'value',
            textField: 'label',
            selectAllText: 'Select All',
            unSelectAllText: 'Unselect All',
            limitSelection: null
          };
        }
      }, {
        key: "selectInventory",
        value: function selectInventory() {
          var _this46 = this;

          this.allAvailableInventory.forEach(function (inventory) {
            if (inventory._id === _this46.newInventoryForm.controls.selectedInventoryId.value) {
              _this46.selectedInventory = inventory;
              _this46.inventoryAssetList = [];

              _this46.organization.inventory[_this46.selectedInventory.name].forEach(function (asset) {
                _this46.inventoryAssetList.push({
                  value: asset,
                  label: asset
                });
              });

              _this46.inventoryAssetList.push({
                value: 'Rental',
                label: 'Rental'
              });
            }
          });
        }
      }, {
        key: "modifyAssetQuantityLimit",
        value: function modifyAssetQuantityLimit() {
          var newQuantity = this.newInventoryForm.controls.selectedQuantity.value;
          this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
            limitSelection: newQuantity
          });
        }
      }, {
        key: "saveInventoryToDate",
        value: function saveInventoryToDate(date) {
          var newInventoryObject = this.selectedInventory;
          newInventoryObject.name = this.selectedInventory.name;
          newInventoryObject.quantity = this.newInventoryForm.controls.selectedQuantity.value;
          newInventoryObject.rate = this.newInventoryForm.controls.inventoryRate.value;
          newInventoryObject.assets = [];
          this.newInventoryForm.controls.selectedAssets.value.forEach(function (asset, index) {
            newInventoryObject.assets.push(asset.value);
          });
          console.log(newInventoryObject);
          this.event[date].push(newInventoryObject);
          this.newInventoryForm.reset();
          this.isAdding = false;
          this.broadcaster.emit('updateInventoryObject', this.event);
        }
      }, {
        key: "removeInventoryFromDate",
        value: function removeInventoryFromDate(inventoryObject) {
          var _this47 = this;

          var inventoryId = inventoryObject.inventoryId;
          var date = inventoryObject.date;
          this.event[date].forEach(function (inventory, index) {
            if (inventory._id === inventoryId) {
              _this47.event[date].splice(index, 1);
            }
          });
          this.broadcaster.emit('updateInventoryObject', this.event);
        }
      }, {
        key: "addInventory",
        value: function addInventory() {
          this.newInventoryForm.addControl('selectedInventoryId', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.newInventoryForm.addControl('selectedQuantity', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.newInventoryForm.addControl('selectedAssets', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.newInventoryForm.addControl('inventoryRate', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
          this.isAdding = true;
        }
      }, {
        key: "close",
        value: function close() {
          this.isAdding = false;
        }
      }, {
        key: "toggleInventoryModal",
        value: function toggleInventoryModal(date) {
          var object = {
            date: date,
            event: this.event[date]
          };
          this.broadcaster.emit('toggleInventoryModal', object);
        }
      }]);

      return InventoryConfigurationComponent;
    }();

    InventoryConfigurationComponent.ctorParameters = function () {
      return [{
        type: _utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InventoryConfigurationComponent.prototype, "event", void 0);
    InventoryConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-configuration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inventory-configuration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-configuration/inventory-configuration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inventory-configuration.component.scss */
      "./src/app/pages/event-details/inventory-configuration/inventory-configuration.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utils_broadcaster__WEBPACK_IMPORTED_MODULE_2__["Broadcaster"], _services__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], InventoryConfigurationComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/inventory-drawer/inventory-drawer.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/event-details/inventory-drawer/inventory-drawer.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsInventoryDrawerInventoryDrawerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvaW52ZW50b3J5LWRyYXdlci9pbnZlbnRvcnktZHJhd2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/inventory-drawer/inventory-drawer.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/event-details/inventory-drawer/inventory-drawer.component.ts ***!
    \************************************************************************************/

  /*! exports provided: InventoryDrawerComponent */

  /***/
  function srcAppPagesEventDetailsInventoryDrawerInventoryDrawerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryDrawerComponent", function () {
      return InventoryDrawerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InventoryDrawerComponent = /*#__PURE__*/function () {
      function InventoryDrawerComponent() {
        _classCallCheck(this, InventoryDrawerComponent);

        this.averageRating = 'N/A';
        this.ratings = [];
      }

      _createClass(InventoryDrawerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InventoryDrawerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InventoryDrawerComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InventoryDrawerComponent.prototype, "title", void 0);
    InventoryDrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'inventory-drawer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inventory-drawer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/inventory-drawer/inventory-drawer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inventory-drawer.component.scss */
      "./src/app/pages/event-details/inventory-drawer/inventory-drawer.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InventoryDrawerComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/position-approval/position-approval.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/event-details/position-approval/position-approval.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsPositionApprovalPositionApprovalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvcG9zaXRpb24tYXBwcm92YWwvcG9zaXRpb24tYXBwcm92YWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/position-approval/position-approval.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/event-details/position-approval/position-approval.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PositionApprovalComponent */

  /***/
  function srcAppPagesEventDetailsPositionApprovalPositionApprovalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionApprovalComponent", function () {
      return PositionApprovalComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");

    var PositionApprovalComponent = /*#__PURE__*/function () {
      function PositionApprovalComponent(activeModal, formBuilder, http) {
        _classCallCheck(this, PositionApprovalComponent);

        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.http = http;
        this.availableDates = [];
        this.dateForms = {};
        this.linkedJobForms = {};
        this.newApplicants = {};
        this.newCrewForm = this.formBuilder.group({
          dateForms: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
      }

      _createClass(PositionApprovalComponent, [{
        key: "closeModal",
        value: function closeModal() {
          this.activeModal.close();
        }
      }, {
        key: "initialize",
        value: function initialize(event) {
          var _this48 = this;

          this.event = event;
          console.log(this.event.crew);
          var datesWithAvailablePositions = [];
          var availableJobs = {};
          var applicantIds = [];
          Object.keys(this.event.crew).forEach(function (date) {
            _this48.event.crew[date].forEach(function (position) {
              // If there are applicants for a position show it in the dialog screen
              // it is possible for a position to be open but no one has applied to it
              if (position.newApplicants && position.newApplicants.length > 0) {
                if (!datesWithAvailablePositions.includes(date)) {
                  datesWithAvailablePositions.push(date);
                  availableJobs[date] = [];
                }

                availableJobs[date].push(position);
                position.newApplicants.forEach(function (applicant) {
                  // const isUnique = !this.newApplicants.includes(applicant);
                  var isUnique = !applicantIds.includes(applicant);

                  if (isUnique) {
                    applicantIds.push(applicant);
                  }
                });
              }
            });
          }); // Get new applicant user information

          this.http.post(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/getUsers', applicantIds).subscribe(function (response) {
            response.forEach(function (applicant) {
              _this48.newApplicants[applicant._id] = applicant;
            }); // With the way the data is structured build out the dates
            // then build out the jobs

            _this48.setDates(datesWithAvailablePositions);

            _this48.setJobs(availableJobs);
          });
          console.log(this.event.crew);
        }
      }, {
        key: "setDates",
        value: function setDates(availableDates) {
          var _this49 = this;

          var index = 0;
          availableDates.forEach(function (date) {
            _this49.dateFormControls.push(_this49.formBuilder.group({
              date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](date, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
              jobForms: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
            }));

            _this49.dateForms[date] = _this49.dateFormControls.controls[index];
            index++;
          });
          this.availableDates = availableDates;
        }
      }, {
        key: "generateJobKey",
        value: function generateJobKey(jobDate, oldCrewId) {
          return jobDate.concat(oldCrewId);
        }
      }, {
        key: "setJobs",
        value: function setJobs(availableJobs) {
          var _this50 = this;

          Object.keys(availableJobs).forEach(function (date) {
            var index = 0;
            availableJobs[date].forEach(function (job) {
              _this50.dateForms[date].controls.jobForms.push(_this50.formBuilder.group({
                selectedApplicantId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
              })); // Link the job form with the available jobs data
              // the key has to be unique


              var jobKey = _this50.generateJobKey(date, job._id);

              _this50.linkedJobForms[jobKey] = _this50.dateForms[date].controls.jobForms.controls[index];
              index++;
            });
          });
          this.availableJobs = availableJobs;
        }
      }, {
        key: "saveEvent",
        value: function saveEvent() {
          var _this51 = this;

          console.log('event.crew before approvals', this.event.crew);
          console.log(this.event);
          var updatedEvent = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.event);
          Object.keys(this.availableJobs).forEach(function (date) {
            _this51.availableJobs[date].forEach(function (job) {
              var originalCrewId = job._id;

              var jobKey = _this51.generateJobKey(date, originalCrewId);

              var approvedApplicantId = _this51.linkedJobForms[jobKey].controls.selectedApplicantId.value;
              var approvedApplicant = _this51.newApplicants[approvedApplicantId];

              _this51.event.crew[date].forEach(function (crewPosition, index) {
                if (crewPosition._id === originalCrewId) {
                  this[index]._id = approvedApplicantId;
                  this[index].email = approvedApplicant.email;
                  this[index].firstName = approvedApplicant.firstName;
                  this[index].lastName = approvedApplicant.lastName;
                  this[index].isAvailable = false;
                  this[index].newApplicants = [];
                }
              }, updatedEvent.crew[date]);
            });
          });
          updatedEvent.hasAvailability = false;
          console.log('event.crew after approvals', updatedEvent.crew);
          console.log(updatedEvent);
          this.http.post(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/updateEvent', updatedEvent).subscribe(function (res) {
            var eventId = res.data._id; // create a list of users linked to this event
            // the person who created will always be attached

            var listOfUsers = [];

            if (res.data.createdBy._id) {
              listOfUsers.push(res.data.createdBy._id);
            } else {
              listOfUsers.push(res.data.createdBy);
            }

            var userUpdateBody = {
              listOfUsers: [].concat(listOfUsers),
              dates: {}
            };
            Object.keys(res.data.crew).forEach(function (crewDate) {
              res.data.crew[crewDate].forEach(function (crew) {
                if (!userUpdateBody.listOfUsers.includes(crew._id)) {
                  userUpdateBody.listOfUsers.push(crew._id);
                }

                if (!userUpdateBody.dates[crew._id]) {
                  userUpdateBody.dates[crew._id] = [];
                }

                if (!userUpdateBody.dates[crew._id].includes(crewDate)) {
                  userUpdateBody.dates[crew._id].push(crewDate);
                }
              });
            });

            _this51.http.post(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/updateUserEvents/' + eventId, userUpdateBody).subscribe(function (response) {});
          });
        }
      }, {
        key: "crewFormControls",
        get: function get() {
          return this.newCrewForm.controls;
        }
      }, {
        key: "dateFormControls",
        get: function get() {
          return this.crewFormControls.dateForms;
        }
      }]);

      return PositionApprovalComponent;
    }();

    PositionApprovalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    PositionApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-position-approval',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./position-approval.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/position-approval/position-approval.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./position-approval.component.scss */
      "./src/app/pages/event-details/position-approval/position-approval.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], PositionApprovalComponent);
    /***/
  },

  /***/
  "./src/app/pages/event-details/print-crew-view/print-crew-view.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/event-details/print-crew-view/print-crew-view.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventDetailsPrintCrewViewPrintCrewViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".column {\n  width: 200px;\n}\n\n.column-date {\n  text-align: center;\n  width: 100px;\n}\n\n.column-phone {\n  text-align: center;\n  width: 150px;\n}\n\n.header {\n  border-bottom: 1px solid black;\n}\n\n.padding {\n  padding: 5px;\n}\n\n.crew-row {\n  padding: 5px;\n  border-bottom: 1px solid darkgrey;\n}\n\n@media print {\n  @page {\n    size: landscape;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ldmVudC1kZXRhaWxzL3ByaW50LWNyZXctdmlldy9wcmludC1jcmV3LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvcHJpbnQtY3Jldy12aWV3L3ByaW50LWNyZXctdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSw4QkFBQTtBQ0lKOztBRERBO0VBQ0ksWUFBQTtBQ0lKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGlDQUFBO0FDSUo7O0FEREE7RUFBYTtJQUFPLGVBQUE7RUNNbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbHMvcHJpbnQtY3Jldy12aWV3L3ByaW50LWNyZXctdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW4ge1xuICAgIHdpZHRoOjIwMHB4O1xufVxuLmNvbHVtbi1kYXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6MTAwcHg7XG59XG4uY29sdW1uLXBob25lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuLmhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgYmxhY2s7XG59XG5cbi5wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jcmV3LXJvdyB7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtncmV5O1xufVxuXG5AbWVkaWEgcHJpbnR7QHBhZ2Uge3NpemU6IGxhbmRzY2FwZX19IiwiLmNvbHVtbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmNvbHVtbi1kYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5jb2x1bW4tcGhvbmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jcmV3LXJvdyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtncmV5O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICBAcGFnZSB7XG4gICAgc2l6ZTogbGFuZHNjYXBlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/event-details/print-crew-view/print-crew-view.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/event-details/print-crew-view/print-crew-view.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PrintCrewViewComponent */

  /***/
  function srcAppPagesEventDetailsPrintCrewViewPrintCrewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintCrewViewComponent", function () {
      return PrintCrewViewComponent;
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


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");

    var PrintCrewViewComponent = /*#__PURE__*/function () {
      function PrintCrewViewComponent(storage) {
        _classCallCheck(this, PrintCrewViewComponent);

        this.storage = storage;
        this.dates = [];
        this.crew = [];
      }

      _createClass(PrintCrewViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupDates();
          var css = '@page { size: landscape; }',
              head = document.head || document.getElementsByTagName('head')[0],
              style = document.createElement('style');
          style.type = 'text/css';
          style.media = 'print';
          style.styleSheet;

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            style.appendChild(document.createTextNode(css));
          }

          head.appendChild(style);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          window.print();
          window.history.back();
          this.storage.clear('print-document');
        }
      }, {
        key: "doesCrewExist",
        value: function doesCrewExist(crew) {
          return this.crew.find(function (x) {
            return crew._id === x._id;
          });
        }
      }, {
        key: "setupDates",
        value: function setupDates() {
          var _this52 = this;

          var event = this.storage.retrieve('print-document');
          this.title = event.title;
          this.dates = Object.keys(event.dateCrew);
          this.dates.forEach(function (date) {
            event.dateCrew[date].forEach(function (crew) {
              if (!_this52.doesCrewExist(crew)) {
                var crewObject = _defineProperty({
                  name: crew.firstName + ' ' + crew.lastName,
                  position: crew.position,
                  phoneNumber: crew.phoneNumber,
                  _id: crew._id
                }, date, crew.callTime);

                _this52.crew.push(crewObject);
              } else {
                var index = _this52.crew.findIndex(function (x) {
                  return x._id === crew._id;
                });

                _this52.crew[index][date] = crew.callTime;
              }
            });
          });
        }
      }]);

      return PrintCrewViewComponent;
    }();

    PrintCrewViewComponent.ctorParameters = function () {
      return [{
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }];
    };

    PrintCrewViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-print-crew-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./print-crew-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event-details/print-crew-view/print-crew-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./print-crew-view.component.scss */
      "./src/app/pages/event-details/print-crew-view/print-crew-view.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])], PrintCrewViewComponent);
    /***/
  },

  /***/
  "./src/app/pages/guest/login/login.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/guest/login/login.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGuestLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-wrapper {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-container {\n  max-width: 400px;\n  width: 100%;\n  margin: 20px;\n  background-color: #d6edff;\n  padding: 30px;\n  text-align: center;\n  border-radius: 10px 10px;\n}\n\n.login-logo {\n  width: 200px;\n  margin: 0 auto;\n}\n\n.login-logo img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.login__link {\n  color: #5bc0de;\n}\n\n.field-spacing {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.input-field {\n  padding: 5px;\n  border-radius: 5px 5px;\n  border: 1px solid rgba(0, 0, 0, 0.075);\n  outline: none;\n}\n\n.logo {\n  color: #ee352a;\n}\n\n.login-wrapper .login-container .btn-primary {\n  background-color: #5BC0DE;\n  border: none;\n  border-color: #5BC0DE;\n  width: 100px;\n  padding: 5px;\n  border-radius: 5px 5px;\n  outline: none;\n}\n\n.login-wrapper .login-container .btn-primary:active {\n  border-color: #3fb9dd;\n  background-color: #3fb9dd;\n}\n\n.login-wrapper .login-container .btn-primary:focus {\n  box-shadow: none;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ndWVzdC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3Vlc3QvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRERJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7QUNHSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QURBQTtFQUVJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNFSjs7QURESTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0FDR1I7O0FERUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ndWVzdC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbi1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmVkZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4OyAgICBcbn1cblxuLmxvZ2luLWxvZ28ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cblxuLmxvZ2luX19saW5rIHtcbiAgICBjb2xvcjogIzViYzBkZTtcbn1cbi5maWVsZC1zcGFjaW5nIHtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjA3NSk7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxvZ28ge1xuICAgIGNvbG9yOiAjZWUzNTJhO1xufVxuXG4ubG9naW4td3JhcHBlciAubG9naW4tY29udGFpbmVyIC5idG4tcHJpbWFyeSB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDMERFO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICM1QkMwREU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgJjphY3RpdmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICMzZmI5ZGQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZmI5ZGQ7XG4gICAgfVxuICAgICY6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICBcblxufVxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufSIsIi5sb2dpbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlZGZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweDtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ubG9naW5fX2xpbmsge1xuICBjb2xvcjogIzViYzBkZTtcbn1cblxuLmZpZWxkLXNwYWNpbmcge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubG9nbyB7XG4gIGNvbG9yOiAjZWUzNTJhO1xufVxuXG4ubG9naW4td3JhcHBlciAubG9naW4tY29udGFpbmVyIC5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjNUJDMERFO1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1jb250YWluZXIgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzNmYjlkZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYjlkZDtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1jb250YWluZXIgLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/guest/login/login.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/guest/login/login.component.ts ***!
    \******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesGuestLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, http, storage, router) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.forgotPasswordActive = false;
        this.toggleFormLabel = 'Forgot Password?';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this53 = this;

          if (!this.loginForm.controls.username.value || !this.loginForm.controls.password.value) {
            this.errorMessage = 'All fields required';
          } else {
            this.http.post(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/user/login-local', {
              username: this.loginForm.controls.username.value,
              password: this.loginForm.controls.password.value
            }).subscribe(function (res) {
              _this53.storage.store('user', res);

              _this53.http.get(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/getOrganization/' + res.organizations[0]._id).subscribe(function (organizationResult) {
                _this53.storage.store('userOrganization', organizationResult);

                _this53.storage.store('org', organizationResult);

                var back_url = _this53.storage.retrieve('back_url');

                if (back_url && back_url.toLowerCase() != '/login') {
                  _this53.router.navigate([_this53.storage.retrieve('back_url')]);
                } else {
                  _this53.router.navigate(['dashboard']);
                }

                _this53.storage.clear('back_url');
              });
            }, function (err) {
              if (err) {
                _this53.errorMessage = 'Incorrect username/password';
              }
            });
          }
        }
      }, {
        key: "handleSubmitForm",
        value: function handleSubmitForm() {
          if (this.forgotPasswordActive) {
            this.forgotPassword();
          } else {
            this.login();
          }
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          var _this54 = this;

          var email = this.loginForm.controls.username.value;

          if (!email) {
            this.errorMessage = 'Email required';
          } else {
            var putData = {
              username: email
            };
            this.http.put(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/forgotPassword', putData).subscribe(function (res) {
              _this54.errorMessage = 'Check your email for the reset link.';
            });
          }
        }
      }, {
        key: "toggleForm",
        value: function toggleForm() {
          this.forgotPasswordActive = !this.forgotPasswordActive;

          if (this.forgotPasswordActive) {
            this.toggleFormLabel = 'Cancel';
          } else {
            this.toggleFormLabel = 'Forgot Password?';
          }

          return false;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/guest/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/guest/reset-password/reset-password.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/guest/reset-password/reset-password.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGuestResetPasswordResetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".reset-container {\n  width: 400px;\n  background-color: #222222;\n  margin: 0 auto;\n  padding: 30px;\n  text-align: center;\n  border-radius: 10px 10px;\n  margin-top: 200px;\n}\n\n.input-field {\n  padding: 5px;\n  border-radius: 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ndWVzdC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3Vlc3QvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ndWVzdC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldC1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xufSIsIi5yZXNldC1jb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweDtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/guest/reset-password/reset-password.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/guest/reset-password/reset-password.component.ts ***!
    \************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppPagesGuestResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(formBuilder, http, route, router) {
        _classCallCheck(this, ResetPasswordComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.route = route;
        this.router = router;
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this55 = this;

          this.resetForm = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          }, {
            validator: this.checkPasswords
          });
          this.route.queryParams.subscribe(function (params) {
            _this55.resetToken = params.token;

            _this55.http.get(_env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/validateToken/' + _this55.resetToken).subscribe(function (res) {
              if (res.isError) {
                _this55.errorMessage = res.message;
              }
            });
          });
        }
      }, {
        key: "checkPasswords",
        value: function checkPasswords(group) {
          var passwordValue = group.get('password').value;
          var confirmPasswordValue = group.get('confirmPassword').value;

          if (passwordValue !== confirmPasswordValue) {
            return {
              notSame: true
            };
          }

          return null;
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this56 = this;

          var putData = {
            resetToken: this.resetToken,
            password: this.resetForm.controls.password.value
          };
          this.http.put(_env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/resetPassword', putData).subscribe(function (res) {
            if (!res.isError) {
              _this56.router.navigate(['login']);
            }
          });
        }
      }, {
        key: "sendResetLink",
        value: function sendResetLink() {
          var _this57 = this;

          var email = this.resetForm.controls.email.value;

          if (!email) {
            this.errorMessage = 'Email required';
          } else {
            var putData = {
              username: email
            };
            this.http.put(_env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/forgotPassword', putData).subscribe(function (res) {
              _this57.errorMessage = 'Check your email for the reset link.';
            });
          }
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/reset-password/reset-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.scss */
      "./src/app/pages/guest/reset-password/reset-password.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/pages/guest/sign-up/sign-up.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/guest/sign-up/sign-up.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGuestSignUpSignUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sign-wrapper {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sign-up-container {\n  max-width: 550px;\n  width: 100%;\n  background-color: #d6edff;\n  padding: 30px;\n  text-align: center;\n  border-radius: 10px 10px;\n  margin: 20px;\n}\n\n.sign-logo {\n  width: 200px;\n  margin: 0 auto;\n}\n\n.sign-logo img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.sign-fields {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n  justify-content: center;\n}\n\n.sign-fields .row {\n  width: 100%;\n}\n\n@media screen and (max-width: 768px) {\n  .sign-fields {\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n  .sign-fields .row {\n    margin-right: 0px;\n    margin-left: 0;\n  }\n}\n\n.field-spacing {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.sign__link {\n  color: #5bc0de;\n}\n\n.input-field {\n  width: 100%;\n  padding: 5px;\n  border-radius: 5px 5px;\n  border: 1px solid rgba(0, 0, 0, 0.075);\n  outline: none;\n}\n\n.input-field::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.input-field::-moz-placeholder {\n  font-size: 14px;\n}\n\n.input-field::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.input-field::placeholder {\n  font-size: 14px;\n}\n\n.logo {\n  color: #ee352a;\n}\n\n.sign-wrapper .sign-up-container .btn-primary {\n  background-color: #5BC0DE;\n  border: none;\n  border-color: #5BC0DE;\n  width: 100px;\n  padding: 5px;\n  border-radius: 5px 5px;\n  outline: none;\n}\n\n.sign-wrapper .sign-up-container .btn-primary:active {\n  border-color: #3fb9dd;\n  background-color: #3fb9dd;\n}\n\n.sign-wrapper .sign-up-container .btn-primary:focus {\n  box-shadow: none;\n}\n\n.error {\n  color: red;\n}\n\n.mb10 {\n  margin-bottom: 10px;\n}\n\n.main-container {\n  max-height: 55vh;\n  display: flex;\n  flex-direction: column;\n}\n\n@media screen and (max-width: 350px) {\n  .main-container {\n    height: 45vh;\n  }\n}\n\n.fixed-container {\n  height: 100px;\n  padding: 20px;\n  background-color: #0B5AB0;\n  color: white;\n}\n\n.content-wrapper {\n  display: flex;\n  flex: 1;\n  min-height: 0px;\n}\n\n.overflow-container {\n  flex: 1;\n  overflow: auto;\n}\n\n.overflow-content {\n  color: black;\n  padding: 20px;\n}\n\n._error {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9ndWVzdC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2d1ZXN0L3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDR0o7O0FERkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNJUjs7QUREQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0lKOztBREhJO0VBQ0ksV0FBQTtBQ0tSOztBREhJO0VBUko7SUFTUSxzQkFBQTtJQUNBLGlCQUFBO0VDTU47RURMTTtJQUNJLGlCQUFBO0lBQ0EsY0FBQTtFQ09WO0FBQ0Y7O0FERkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0FDTUo7O0FETEk7RUFDSSxlQUFBO0FDT1I7O0FEUkk7RUFDSSxlQUFBO0FDT1I7O0FEUkk7RUFDSSxlQUFBO0FDT1I7O0FEUkk7RUFDSSxlQUFBO0FDT1I7O0FESEE7RUFDSSxjQUFBO0FDTUo7O0FESEE7RUFFSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDS0o7O0FESkk7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDTVI7O0FESkk7RUFDSSxnQkFBQTtBQ01SOztBREFBO0VBQ0ksVUFBQTtBQ0dKOztBREFBO0VBQ0ksbUJBQUE7QUNHSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDR0o7O0FERkk7RUFKSjtJQUkwQyxZQUFBO0VDTXhDO0FBQ0Y7O0FESkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ09GOztBRExBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FDUUY7O0FETkE7RUFDRSxPQUFBO0VBQ0EsY0FBQTtBQ1NGOztBRFBBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNVRjs7QURQQTtFQUNJLHFCQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ndWVzdC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaWduLXVwLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlZGZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG4uc2lnbi1sb2dvIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87IFxuICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG59XG4uc2lnbi1maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLnJvdyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDsgIFxuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmZpZWxkLXNwYWNpbmcge1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2lnbl9fbGluayB7XG4gICAgY29sb3I6ICM1YmMwZGU7XG59XG4uaW5wdXQtZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDc1KTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cblxuLmxvZ28ge1xuICAgIGNvbG9yOiAjZWUzNTJhO1xufVxuXG4uc2lnbi13cmFwcGVyIC5zaWduLXVwLWNvbnRhaW5lciAuYnRuLXByaW1hcnkge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCQzBERTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNUJDMERFO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgICY6YWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2ZiOWRkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZiOWRkO1xuICAgIH1cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgXG5cbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ubWIxMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA1NXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge2hlaWdodDogNDV2aDt9XG59XG5cbi5maXhlZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEI1QUIwO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMHB4OyBcbn1cbi5vdmVyZmxvdy1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5vdmVyZmxvdy1jb250ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uX2Vycm9ye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iLCIuc2lnbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWduLXVwLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlZGZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uc2lnbi1sb2dvIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zaWduLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lnbi1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZ24tZmllbGRzIC5yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWduLWZpZWxkcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuICAuc2lnbi1maWVsZHMgLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuLmZpZWxkLXNwYWNpbmcge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2lnbl9fbGluayB7XG4gIGNvbG9yOiAjNWJjMGRlO1xufVxuXG4uaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5pbnB1dC1maWVsZDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sb2dvIHtcbiAgY29sb3I6ICNlZTM1MmE7XG59XG5cbi5zaWduLXdyYXBwZXIgLnNpZ24tdXAtY29udGFpbmVyIC5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjNUJDMERFO1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zaWduLXdyYXBwZXIgLnNpZ24tdXAtY29udGFpbmVyIC5idG4tcHJpbWFyeTphY3RpdmUge1xuICBib3JkZXItY29sb3I6ICMzZmI5ZGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmI5ZGQ7XG59XG4uc2lnbi13cmFwcGVyIC5zaWduLXVwLWNvbnRhaW5lciAuYnRuLXByaW1hcnk6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWIxMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDU1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIGhlaWdodDogNDV2aDtcbiAgfVxufVxuXG4uZml4ZWQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBCNUFCMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMHB4O1xufVxuXG4ub3ZlcmZsb3ctY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5vdmVyZmxvdy1jb250ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uX2Vycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/guest/sign-up/sign-up.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/guest/sign-up/sign-up.component.ts ***!
    \**********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppPagesGuestSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(formBuilder, http, storage, route, router) {
        _classCallCheck(this, SignUpComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.organizationPositions = [];
        this.dropdownSettings = {};
        this.disableSignUp = false;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this58 = this;

          this.loading = true;
          this.dropdownSettings = {
            singleSelection: false,
            idField: 'value',
            textField: 'label',
            selectAllText: 'Select All',
            unSelectAllText: 'Unselect All'
          };
          this.signUpForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            emergencyContactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            emergencyContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            selectedPositions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            organizationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
          this.route.queryParams.subscribe(function (params) {
            _this58.sendToken = params.token;

            if (_this58.sendToken) {
              _this58.http.get(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/validateNewMemberToken/' + _this58.sendToken).subscribe(function (res) {
                if (res.isError) {
                  _this58.errorMessage = res.message;
                  _this58.disableSignUp = true;
                } else {
                  _this58.userId = res.data._id;

                  _this58.signUpForm.controls.email.setValue(res.data.email);

                  _this58.signUpForm.controls.email.disable();

                  _this58.signUpForm.controls.organizationName.setValue(res.data.organizations[0]._id.name);

                  _this58.signUpForm.controls.organizationName.disable();

                  _this58.http.get(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/getPositions/' + res.data.organizations[0]._id._id).subscribe(function (res) {
                    Object.keys(res).forEach(function (key) {
                      var position = res[key];

                      if (Object(position) === position) {
                        _this58.organizationPositions = _this58.organizationPositions.concat({
                          value: position.value,
                          label: position.label
                        });
                      }
                    });
                    _this58.organizationPositions = _this58.organizationPositions;
                  });
                }

                _this58.loading = false;
              });
            } else {
              _this58.loading = false;
            }
          });
        }
      }, {
        key: "signUp",
        value: function signUp() {
          var _this59 = this;

          this.loading = true;
          this.errorMessage = null;

          if (!this.signUpForm.controls.email.value || !this.signUpForm.controls.password.value || !this.signUpForm.controls.firstName.value || !this.signUpForm.controls.lastName.value || !this.signUpForm.controls.organizationName.value) {
            this.errorMessage = 'All fields required';
            return this.loading = false;
          }

          var saveUserObject = {
            email: this.signUpForm.controls.email.value || '',
            password: this.signUpForm.controls.password.value || '',
            firstName: this.signUpForm.controls.firstName.value || '',
            lastName: this.signUpForm.controls.lastName.value || '',
            organizationName: this.signUpForm.controls.organizationName.value || '',
            phoneNumber: this.signUpForm.controls.phoneNumber.value || '',
            address: this.signUpForm.controls.address.value || '',
            address2: this.signUpForm.controls.address2.value || '',
            city: this.signUpForm.controls.city.value || '',
            state: this.signUpForm.controls.state.value || '',
            zip: this.signUpForm.controls.zip.value || '',
            emergencyContactName: this.signUpForm.controls.emergencyContactName.value || '',
            emergencyContact: this.signUpForm.controls.emergencyContact.value || '',
            mode: 'Save'
          };

          if (this.sendToken) {
            saveUserObject.mode = null;
            saveUserObject._id = this.userId;
            saveUserObject.positions = [];

            if (!this.signUpForm.controls.selectedPositions.value) {
              this.signUpForm.controls.selectedPositions.value = [];
            }

            this.signUpForm.controls.selectedPositions.value.forEach(function (position, index) {
              saveUserObject.positions.push(position.value);
            });
          }

          this.http.post(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/user/signup-local', saveUserObject).subscribe(function (res) {
            _this59.storage.store('user', res);

            _this59.http.get(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/getOrganization/' + res.organizations[0]._id).subscribe(function (organizationResult) {
              _this59.storage.store('userOrganization', organizationResult);

              _this59.storage.store('org', organizationResult);

              var back_url = _this59.storage.retrieve('back_url');

              if (back_url && back_url.toLowerCase() != '/login') {
                _this59.router.navigate([_this59.storage.retrieve('back_url')]);
              } else {
                _this59.router.navigate(['dashboard']);
              }

              _this59.storage.clear('back_url');

              _this59.loading = false;
            });
          });
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/sign-up/sign-up.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.scss */
      "./src/app/pages/guest/sign-up/sign-up.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/pages/job/accept/accept.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/job/accept/accept.component.ts ***!
    \******************************************************/

  /*! exports provided: AcceptComponent */

  /***/
  function srcAppPagesJobAcceptAcceptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcceptComponent", function () {
      return AcceptComponent;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AcceptComponent = /*#__PURE__*/function () {
      function AcceptComponent(js, route, router) {
        _classCallCheck(this, AcceptComponent);

        this.js = js;
        this.route = route;
        this.router = router;
      }

      _createClass(AcceptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var job_id = this.route.snapshot.params.job_id;
          var assigned = this.route.snapshot.params.assigned;
          this.js.accept(job_id, assigned, function (res) {// console.log('res', res);
          });
          this.router.navigate(['/dashboard']);
        }
      }]);

      return AcceptComponent;
    }();

    AcceptComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AcceptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accept',
      template: "\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AcceptComponent);
    /***/
  },

  /***/
  "./src/app/pages/job/list/list.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/job/list/list.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJobListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-primary,\n.btn-cog {\n  background-color: #ee352a;\n  border-color: #ee352a;\n  width: 100px;\n  border-radius: 5px 5px;\n  float: right;\n  height: 38px;\n}\n\n.btn-cog {\n  background-color: goldenrod;\n  width: 40px;\n  border-color: goldenrod;\n}\n\n.job-list__icon {\n  display: flex;\n  align-items: center;\n}\n\n.job-list__icon i {\n  margin-right: 5px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.job-list__icon .fa-trash:hover {\n  color: #f92e71;\n}\n\n.job-list__icon .fa-pencil:hover {\n  color: #30a4f7;\n}\n\n.checkbox {\n  margin-bottom: 0;\n}\n\n.checkbox input {\n  position: absolute;\n  visibility: hidden;\n  left: 0;\n  top: 0px;\n}\n\n.applied-col {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 5px 0;\n}\n\n.applied-col .applied-col__text {\n  font-size: 12px;\n}\n\n.applied-col .applied-col__btn {\n  border: none;\n  border-radius: 15px;\n  font-size: 11px;\n  padding: 2px 10px;\n}\n\n.applied-col .applied-col__btn._approve {\n  color: #28a745;\n}\n\n.applied-col .applied-col__btn._remove {\n  color: #fd5151;\n}\n\n.actions-admin .fa-user-plus:hover {\n  color: #00871d;\n}\n\n.actions-admin .fa-user-times:hover {\n  color: #ff7696;\n}\n\n.status {\n  margin-right: 10px;\n  width: 15px;\n  display: block;\n}\n\n.status._red {\n  color: #fd5151;\n}\n\n.status._blue {\n  color: #30a4f7;\n}\n\n.status._green {\n  border-radius: 50%;\n  background-color: #28a745;\n  height: 15px;\n}\n\n.c-blue {\n  color: #30a4f7;\n}\n\n.c-green {\n  color: #28a745;\n}\n\n.c-red {\n  color: #fd5151;\n}\n\n.w100px {\n  width: 100px;\n}\n\n.popup-more {\n  position: relative;\n  cursor: pointer;\n}\n\n.popup-more .popup-body {\n  position: absolute;\n  left: -100px;\n  top: 25px;\n  background-color: #fff;\n  padding: 10px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: 100vh;\n  border-radius: 4px;\n  outline: 0;\n  min-height: 80px;\n  z-index: 10;\n  transition: 0.3s all ease-in-out;\n}\n\n.popup-more .popup-body__btn {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  max-width: 100%;\n  position: relative;\n  width: 100%;\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  align-items: center;\n  transition: 0.3s all ease-in-out;\n}\n\n.popup-more .popup-body__btn._input {\n  pointer-events: none;\n}\n\n.popup-more .popup-body ._hover:hover {\n  background: #f3f3f3;\n  width: 100%;\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n}\n\n.notActive {\n  border-radius: 50%;\n  background-color: #232323;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9qb2IvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9qb2IvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtBQ0RKOztBRElFO0VBQ0UsY0FBQTtBQ0ZKOztBRE1BO0VBQ0UsZ0JBQUE7QUNIRjs7QURLRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0hKOztBRE9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDSkY7O0FETUU7RUFDRSxlQUFBO0FDSko7O0FET0U7RUFFRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRSTtFQUNFLGNBQUE7QUNOTjs7QURTSTtFQUNFLGNBQUE7QUNQTjs7QURlRTtFQUNFLGNBQUE7QUNaSjs7QURlRTtFQUNFLGNBQUE7QUNiSjs7QURpQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFHQSxjQUFBO0FDaEJGOztBRGtCRTtFQUNFLGNBQUE7QUNoQko7O0FEbUJFO0VBQ0UsY0FBQTtBQ2pCSjs7QURxQkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ25CSjs7QURzQkE7RUFDRSxjQUFBO0FDbkJGOztBRHFCQTtFQUNDLGNBQUE7QUNsQkQ7O0FEb0JBO0VBQ0UsY0FBQTtBQ2pCRjs7QURtQkE7RUFDRSxZQUFBO0FDaEJGOztBRGtCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ2ZGOztBRGlCRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnSEFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDZko7O0FEZ0JJO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNkTjs7QURpQk07RUFBVSxvQkFBQTtBQ2RoQjs7QURpQkk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNmTjs7QURxQkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ2xCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnksXG4uYnRuLWNvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTM1MmE7XG4gIGJvcmRlci1jb2xvcjogI2VlMzUyYTtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMzhweDtcbn1cblxuLmJ0bi1jb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItY29sb3I6IGdvbGRlbnJvZDtcbn1cblxuXG4uam9iLWxpc3RfX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGkge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuZmEtdHJhc2g6aG92ZXIge1xuICAgIGNvbG9yOiAjZjkyZTcxO1xuICB9XG5cbiAgLmZhLXBlbmNpbDpob3ZlciB7XG4gICAgY29sb3I6ICMzMGE0Zjc7XG4gIH1cbn1cblxuLmNoZWNrYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbi5hcHBsaWVkLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiA1cHggMDtcblxuICAuYXBwbGllZC1jb2xfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5hcHBsaWVkLWNvbF9fYnRuIHtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcblxuICAgICYuX2FwcHJvdmUge1xuICAgICAgY29sb3I6ICMyOGE3NDU7XG4gICAgfVxuXG4gICAgJi5fcmVtb3ZlIHtcbiAgICAgIGNvbG9yOiAjZmQ1MTUxXG4gICAgfVxuXG5cbiAgfVxufVxuXG4uYWN0aW9ucy1hZG1pbiB7XG4gIC5mYS11c2VyLXBsdXM6aG92ZXIge1xuICAgIGNvbG9yOiAjMDA4NzFkO1xuICB9XG5cbiAgLmZhLXVzZXItdGltZXM6aG92ZXIge1xuICAgIGNvbG9yOiAjZmY3Njk2O1xuICB9XG59XG5cbi5zdGF0dXMge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxNXB4O1xuICBcbiAgXG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gICYuX3JlZCB7XG4gICAgY29sb3I6ICNmZDUxNTE7XG4gIH1cblxuICAmLl9ibHVle1xuICAgIGNvbG9yOiAjMzBhNGY3O1xuICB9XG5cblxuICAmLl9ncmVlbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICB9XG59XG4uYy1ibHVle1xuICBjb2xvcjogIzMwYTRmNztcbn1cbi5jLWdyZWVue1xuIGNvbG9yOiAjMjhhNzQ1O1xufVxuLmMtcmVke1xuICBjb2xvcjogI2ZkNTE1MTtcbn1cbi53MTAwcHgge1xuICB3aWR0aDogMTAwcHg7XG59XG4ucG9wdXAtbW9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC5wb3B1cC1ib2R5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTEwMHB4O1xuICAgIHRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBtaW4td2lkdGg6IDExMnB4O1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgJl9fYnRuIHtcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuODcpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgICAgIFxuICAgICAgXG4gICAgICAmLl9pbnB1dCB7cG9pbnRlci1ldmVudHM6IG5vbmU7fVxuICAgICAgXG4gICAgfVxuICAgIC5faG92ZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG59XG5cblxuLm5vdEFjdGl2ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG4gICAgaGVpZ2h0OiAxNXB4O1xufSIsIi5idG4tcHJpbWFyeSxcbi5idG4tY29nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzUyYTtcbiAgYm9yZGVyLWNvbG9yOiAjZWUzNTJhO1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG4uYnRuLWNvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1jb2xvcjogZ29sZGVucm9kO1xufVxuXG4uam9iLWxpc3RfX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmpvYi1saXN0X19pY29uIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uam9iLWxpc3RfX2ljb24gLmZhLXRyYXNoOmhvdmVyIHtcbiAgY29sb3I6ICNmOTJlNzE7XG59XG4uam9iLWxpc3RfX2ljb24gLmZhLXBlbmNpbDpob3ZlciB7XG4gIGNvbG9yOiAjMzBhNGY3O1xufVxuXG4uY2hlY2tib3gge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGxlZnQ6IDA7XG4gIHRvcDogMHB4O1xufVxuXG4uYXBwbGllZC1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uYXBwbGllZC1jb2wgLmFwcGxpZWQtY29sX190ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmFwcGxpZWQtY29sIC5hcHBsaWVkLWNvbF9fYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xufVxuLmFwcGxpZWQtY29sIC5hcHBsaWVkLWNvbF9fYnRuLl9hcHByb3ZlIHtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG4uYXBwbGllZC1jb2wgLmFwcGxpZWQtY29sX19idG4uX3JlbW92ZSB7XG4gIGNvbG9yOiAjZmQ1MTUxO1xufVxuXG4uYWN0aW9ucy1hZG1pbiAuZmEtdXNlci1wbHVzOmhvdmVyIHtcbiAgY29sb3I6ICMwMDg3MWQ7XG59XG4uYWN0aW9ucy1hZG1pbiAuZmEtdXNlci10aW1lczpob3ZlciB7XG4gIGNvbG9yOiAjZmY3Njk2O1xufVxuXG4uc3RhdHVzIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc3RhdHVzLl9yZWQge1xuICBjb2xvcjogI2ZkNTE1MTtcbn1cbi5zdGF0dXMuX2JsdWUge1xuICBjb2xvcjogIzMwYTRmNztcbn1cbi5zdGF0dXMuX2dyZWVuIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5jLWJsdWUge1xuICBjb2xvcjogIzMwYTRmNztcbn1cblxuLmMtZ3JlZW4ge1xuICBjb2xvcjogIzI4YTc0NTtcbn1cblxuLmMtcmVkIHtcbiAgY29sb3I6ICNmZDUxNTE7XG59XG5cbi53MTAwcHgge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5wb3B1cC1tb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9wdXAtbW9yZSAucG9wdXAtYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwMHB4O1xuICB0b3A6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1pbi13aWR0aDogMTEycHg7XG4gIG1heC13aWR0aDogMjgwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG91dGxpbmU6IDA7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbn1cbi5wb3B1cC1tb3JlIC5wb3B1cC1ib2R5X19idG4ge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xufVxuLnBvcHVwLW1vcmUgLnBvcHVwLWJvZHlfX2J0bi5faW5wdXQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5wb3B1cC1tb3JlIC5wb3B1cC1ib2R5IC5faG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbn1cblxuLm5vdEFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcbiAgaGVpZ2h0OiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/job/list/list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/job/list/list.component.ts ***!
    \**************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppPagesJobListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modals */
    "./src/app/modals/index.ts");

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(us, modalService, es, os, js) {
        _classCallCheck(this, ListComponent);

        this.us = us;
        this.modalService = modalService;
        this.es = es;
        this.os = os;
        this.js = js;
        this.dropdown = null;
      }

      _createClass(ListComponent, [{
        key: "edit",
        value: function edit(job) {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_4__["JobComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.job = JSON.parse(JSON.stringify(job));
          modalRef.componentInstance.init();
          modalRef.componentInstance.save.subscribe(function (crew) {
            console.log(crew);
          });
        }
      }, {
        key: "view",
        value: function view(job) {
          var modalRef = this.modalService.open(_modals__WEBPACK_IMPORTED_MODULE_4__["JoblComponent"], {
            size: 'lg'
          });
          modalRef.componentInstance.job = JSON.parse(JSON.stringify(job));
          modalRef.componentInstance.save.subscribe(function (saved) {
            for (var each in saved) {
              job[each] = saved[each];
            }

            for (var _each4 in job) {
              job[_each4] = saved[_each4];
            }
          });
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }];
    };

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/job/list/list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/pages/job/list/list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services__WEBPACK_IMPORTED_MODULE_2__["EventService"], _services__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_2__["JobService"]])], ListComponent);
    /***/
  },

  /***/
  "./src/app/pages/job/profile/profile.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/job/profile/profile.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJobProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".field-box {\n  width: 100%;\n  margin-right: 15px;\n}\n.field-box .form-control {\n  margin-bottom: 15px;\n}\n.field-box__timeCol {\n  flex: 50%;\n}\n.field-box__timeCol:first-child {\n  margin-right: 15px;\n}\n.btn {\n  cursor: pointer;\n}\n@media screen and (max-width: 500px) {\n  .job-block {\n    flex-direction: column;\n  }\n\n  .job-btn {\n    text-align: center;\n    margin-top: 15px;\n  }\n\n  .field-box__timeblock {\n    flex-direction: column;\n  }\n  .field-box__timeblock .field-box__timeCol {\n    flex: 100%;\n    margin-right: 0;\n  }\n}\n.faded {\n  background-color: rgba(181, 221, 255, 0.42);\n  color: #007bff;\n  font-weight: medium;\n}\n.custom-day {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9qb2IvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9qb2IvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FDQ0Q7QURBQztFQUNDLG1CQUFBO0FDRUY7QURDQTtFQUNDLFNBQUE7QUNFRDtBRERDO0VBQ0Msa0JBQUE7QUNHRjtBRENBO0VBQU0sZUFBQTtBQ0dOO0FEREE7RUFDQztJQUNDLHNCQUFBO0VDSUE7O0VERkQ7SUFDQyxrQkFBQTtJQUNBLGdCQUFBO0VDS0E7O0VESEQ7SUFDQyxzQkFBQTtFQ01BO0VETEE7SUFDQyxVQUFBO0lBQ0EsZUFBQTtFQ09EO0FBQ0Y7QURKQTtFQUNDLDJDQUFBO0VBQ0csY0FBQTtFQUNILG1CQUFBO0FDTUQ7QURKQTtFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNILGFBQUE7QUNPRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQtYm94IHtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1yaWdodDogMTVweDtcblx0LmZvcm0tY29udHJvbCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0fVxufVxuLmZpZWxkLWJveF9fdGltZUNvbCB7XG5cdGZsZXg6IDUwJTtcblx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHR9XG5cdFxufVxuLmJ0biB7Y3Vyc29yOiBwb2ludGVyO31cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcblx0LmpvYi1ibG9jayB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXHQuam9iLWJ0biB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdH1cblx0LmZpZWxkLWJveF9fdGltZWJsb2NrIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdC5maWVsZC1ib3hfX3RpbWVDb2wge1xuXHRcdFx0ZmxleDogMTAwJTtcblx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHR9XG5cdH1cbn1cbi5mYWRlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgxLCAyMjEsIDI1NSwgMC40Mik7XG4gICAgY29sb3I6ICMwMDdiZmY7XG5cdGZvbnQtd2VpZ2h0OiBtZWRpdW07XG59XG4uY3VzdG9tLWRheSB7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblx0b3V0bGluZTogbm9uZTtcbn1cbiIsIi5maWVsZC1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmZpZWxkLWJveCAuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZpZWxkLWJveF9fdGltZUNvbCB7XG4gIGZsZXg6IDUwJTtcbn1cbi5maWVsZC1ib3hfX3RpbWVDb2w6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5qb2ItYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuam9iLWJ0biB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cblxuICAuZmllbGQtYm94X190aW1lYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZpZWxkLWJveF9fdGltZWJsb2NrIC5maWVsZC1ib3hfX3RpbWVDb2wge1xuICAgIGZsZXg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG4uZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MSwgMjIxLCAyNTUsIDAuNDIpO1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/job/profile/profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/job/profile/profile.component.ts ***!
    \********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesJobProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(js, router, ps, os) {
        var _this60 = this;

        _classCallCheck(this, ProfileComponent);

        this.js = js;
        this.router = router;
        this.ps = ps;
        this.os = os;
        this.job = {
          times: {}
        };

        var _id = window.location.pathname.replace('/job/', '');

        if (_id.toLowerCase() != 'new') {
          this.js.on(function () {
            _this60.job = _this60.js._jobs[_id];
          });
        } else if (localStorage.getItem('new_job')) {
          this.job = JSON.parse(localStorage.getItem('new_job'));

          if (this.job.date) {
            this.job.date = new Date(this.job.date);
            this.job.date = {
              year: this.job.date.getFullYear(),
              month: this.job.date.getMonth() + 1,
              day: this.job.date.getDate()
            };
          } //localStorage.removeItem('new_job');

        }
      }

      _createClass(ProfileComponent, [{
        key: "submit",
        value: function submit() {
          var _this61 = this;

          console.log(this.job);

          if (this.job._id) {
            this.js.update(this.job, function (created) {
              _this61.router.navigate(['jobs']);
            });
          } else {
            this.js.create(this.job, function (created) {
              _this61.router.navigate(['jobs']);
            });
          }
        }
      }, {
        key: "isInside",
        value: function isInside(date) {
          return date.day == this.job.date.day && date.month == this.job.date.month && date.year == this.job.date.year;
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["PositionConfigurationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/job/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/pages/job/profile/profile.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_2__["PositionConfigurationService"], _services__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/org/settings/settings.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/org/settings/settings.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrgSettingsSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-field {\n  padding: 5px;\n  border-radius: 5px 5px;\n  width: 50px;\n}\n\n.input-label {\n  margin-right: 30px;\n  display: block;\n}\n\n.btn-primary {\n  background-color: #ee352a;\n  border-color: #ee352a;\n  width: 100px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n}\n\n.btn-primary:disabled {\n  background-color: grey;\n  border-color: grey;\n}\n\n.btn-secondary {\n  background: none;\n  border: none;\n  color: black;\n  width: 100px;\n  border-radius: 5px 5px;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n}\n\n.close, .save, .apply, .remove, .undo {\n  padding: 3px;\n  border-radius: 5px 5px;\n  width: 40px;\n  background-color: red;\n  color: white;\n}\n\n.save {\n  background-color: green;\n  width: 120px;\n  border: none;\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.undo {\n  background-color: goldenrod;\n  width: 120px;\n  border: none;\n  margin-left: 10px;\n  display: inline-block;\n}\n\nh5 {\n  display: inline-block;\n}\n\n#venueContainer .row {\n  margin-top: 10px;\n}\n\n#venueContainer .btn {\n  margin-left: 10px;\n}\n\n.nav-item {\n  cursor: pointer;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.positions {\n  border-right: 1px solid #dee2e6;\n}\n\n.positions .row {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n@media screen and (max-width: 770px) {\n  .positions {\n    max-height: 100% !important;\n  }\n}\n\n.positions_selected {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n@media screen and (max-width: 770px) {\n  .positions_selected {\n    max-height: 100% !important;\n  }\n}\n\n.link {\n  color: #17a2b8;\n  cursor: pointer;\n}\n\n.link:hover {\n  text-decoration: underline;\n}\n\n.categ-row {\n  align-items: center;\n}\n\n.categ-row .fa-arrows-alt {\n  margin-right: 10px;\n  transform: rotate(45deg);\n}\n\n.mb10 {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9vcmcvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FER0k7RUFDSSxnQkFBQTtBQ0FSOztBREVJO0VBQ0ksaUJBQUE7QUNBUjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FESUE7RUFDSSwrQkFBQTtBQ0RKOztBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNBUjs7QURFSTtFQU5KO0lBTTBDLDJCQUFBO0VDRXhDO0FBQ0Y7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FERkk7RUFISjtJQUcwQywyQkFBQTtFQ014QztBQUNGOztBRExBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNRSjs7QURQSTtFQUNJLDBCQUFBO0FDU1I7O0FETEE7RUFDQyxtQkFBQTtBQ1FEOztBRFBDO0VBQ0Msa0JBQUE7RUFDQSx3QkFBQTtBQ1NGOztBRE5BO0VBQ0MsbUJBQUE7QUNTRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1maWVsZCB7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgICB3aWR0aDo1MHB4O1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDozMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTM1MmE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWUzNTJhO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZzozcHg7XG59XG5cbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gICAgcGFkZGluZzozcHg7XG59XG5cbi5jbG9zZSwgLnNhdmUsIC5hcHBseSwgLnJlbW92ZSwgLnVuZG8ge1xuICAgIHBhZGRpbmc6M3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgd2lkdGg6NDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zYXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xuICAgIHdpZHRoOjEyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuLnVuZG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6Z29sZGVucm9kO1xuICAgIHdpZHRoOjEyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuaDUge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4jdmVudWVDb250YWluZXIge1xuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuXG4ubmF2LWl0ZW17XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5tdDE1IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnBvc2l0aW9ucyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAucm93IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHttYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7fVxuICAgIFxufVxuLnBvc2l0aW9uc19zZWxlY3RlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHttYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7fVxufVxuLmxpbmsge1xuICAgIGNvbG9yOiAjMTdhMmI4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuXG4uY2F0ZWctcm93IHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0LmZhLWFycm93cy1hbHQge1xuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdH1cbn1cbi5tYjEwIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn0iLCIuaW5wdXQtZmllbGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzNTJhO1xuICBib3JkZXItY29sb3I6ICNlZTM1MmE7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uY2xvc2UsIC5zYXZlLCAuYXBwbHksIC5yZW1vdmUsIC51bmRvIHtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zYXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udW5kbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmg1IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jdmVudWVDb250YWluZXIgLnJvdyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4jdmVudWVDb250YWluZXIgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubmF2LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tdDE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnBvc2l0aW9ucyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4ucG9zaXRpb25zIC5yb3cge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgLnBvc2l0aW9ucyB7XG4gICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5wb3NpdGlvbnNfc2VsZWN0ZWQge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xuICAucG9zaXRpb25zX3NlbGVjdGVkIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzE3YTJiODtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNhdGVnLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2F0ZWctcm93IC5mYS1hcnJvd3MtYWx0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5tYjEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/org/settings/settings.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/org/settings/settings.component.ts ***!
    \**********************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppPagesOrgSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-dragula */
    "./node_modules/ng2-dragula/dist/fesm2015/ng2-dragula.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js"); // import { OutgoingMessage } from 'http';


    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(http, dragulaService, https, os, hash, cs, ls, gs, us, formBuilder, storage, positionConfigurationService) {
        var _this62 = this;

        _classCallCheck(this, SettingsComponent);

        this.http = http;
        this.dragulaService = dragulaService;
        this.https = https;
        this.os = os;
        this.hash = hash;
        this.cs = cs;
        this.ls = ls;
        this.gs = gs;
        this.us = us;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.positionConfigurationService = positionConfigurationService;
        this.tab = 1;
        this.positions = [];
        this.isAdding = false;
        this.search = '';
        this.isEditingLocation = false;
        this.positionConfigId = null;
        this.isAddingNewMember = false;
        this.loading = false;
        this._locations = {};
        /*
        * Members Management
        */

        this.select_current = false;
        this.select_pending = false;
        /*
        * Labels Management
        */

        this.new_label = {};
        this.show_new_label = false;
        /*
        * Labels Management
        */

        this.new_category = {};
        this.show_new_category = false;
        /*
        * Groups Management
        */

        this.show_new_group = false;
        this.group = {
          name: ''
        };
        this.added = {};
        this.lists_selected = {};
        /*
        * Location Management
        */

        this._update_location = {};
        this.new_location = {};
        /*
        * Labels
        */

        this.dropdownSettings = {
          singleSelection: false,
          idField: '_id',
          textField: 'name',
          selectAllText: 'Select All',
          unSelectAllText: 'Unselect All'
        };
        /*
        * Files Management
        */

        this.imageChangedEvent = '';
        this.croppedImage = '';
        dragulaService.createGroup("Categories", {
          moves: function moves(el, container, handle) {
            return handle.className === 'fa fa-arrows-alt';
          }
        });
        this.hash.on('tab', function (tab) {
          if (tab) {
            _this62.tab = tab;
          }
        });
        this.hash.on('venue_tab', function (venue_tab) {
          if (venue_tab) {
            _this62.venue_tab = venue_tab;
          }
        });
      }

      _createClass(SettingsComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.dragulaService.destroy('Categories');
        }
      }, {
        key: "update_categories_order",
        value: function update_categories_order() {
          var new_order = false;

          for (var i = 0; i < this.cs.categories.length; i++) {
            if (this.cs.categories[i].order != i) {
              new_order = true;
              this.cs.categories[i].order = i;
              this.cs.update(this.cs.categories[i], false);
            }
          }

          if (new_order) {
            this.storage.store('alert', {
              type: 'success',
              message: 'Categories Order Successfully Updated'
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this63 = this;

          this.loading = true;
          this.configForm = this.formBuilder.group({});
          this.newPositionForm = this.formBuilder.group({
            newPositionLabel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            newPositionValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
          this.newMemberForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
          });
          this.locationForm = this.formBuilder.group({
            editedLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            venueName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
          var organizationId = this.us.user.organizations[0]._id;
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/getOrganization/' + organizationId).subscribe(function (data) {
            _this63.organization = data;

            _this63.updateLocationsDropdown();

            _this63.loading = false;
          });
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/getCrewUsers/' + organizationId).subscribe(function (data) {
            _this63.crew = data;
            _this63.postionBasedUsers = [];

            _this63.crew.forEach(function (user) {
              var orgs = user.organizations || [];
              orgs.forEach(function (org) {
                var positions = org._positions || [];

                if (org._id == organizationId) {
                  positions.forEach(function (pos) {
                    if (!_this63.postionBasedUsers[pos]) {
                      _this63.postionBasedUsers[pos] = [];
                    }

                    _this63.postionBasedUsers[pos].push(user);
                  });
                }
              });
            });

            _this63.loading = false;
          });
          this.positionConfigurationService.getPositions(organizationId).subscribe(function (data) {
            if (data) {
              _this63.positionConfigId = data._id;
              delete data._id;
              delete data.organizationId;

              _this63.setConfiguration(data);
            } else {
              _this63.wholeConfig = {};
            }

            _this63.loading = false;
          });
        }
      }, {
        key: "setConfiguration",
        value: function setConfiguration(positions) {
          var _this64 = this;

          this.wholeConfig = positions;

          if (this.wholeConfig) {
            var keys = Object.keys(positions);
            keys.forEach(function (key, index) {
              _this64.positions.push(_this64.wholeConfig[key]);

              _this64.configForm.addControl(key, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this64.wholeConfig[key].label));
            });
          }
        }
      }, {
        key: "updateLocationsDropdown",
        value: function updateLocationsDropdown() {
          var _this65 = this;

          if (this.organization && this.organization.locations) {
            this.dropdownLocations = [];
            this.organization.locations.forEach(function (location) {
              _this65._locations[location._id] = location;
              var dropdownLocation = Object.assign({}, {
                value: location._id,
                label: location.venueName
              });

              if (!_this65.venue_tab) {
                _this65.venue_tab = location._id;
              }

              _this65.dropdownLocations.push(dropdownLocation);

              _this65.dropdownLocations = _this65.dropdownLocations.concat([]);
            });
          }
        }
      }, {
        key: "update_config",
        value: function update_config() {
          var _this66 = this;

          clearTimeout(this._update);
          this._update = setTimeout(function () {
            _this66.saveConfig();
          }, 1000);
        }
      }, {
        key: "saveConfig",
        value: function saveConfig() {
          var _this67 = this;

          //this.loading = true;
          this.updateFields();
          this.wholeConfig._id = this.positionConfigId;
          this.wholeConfig.organizationId = this.organization._id;
          this.positionConfigurationService.updatePositions(this.wholeConfig).subscribe(function (res) {
            _this67.storage.store('alert', {
              type: 'success',
              message: 'Successfully saved position configuration!'
            });

            _this67.wholeConfig = res;
            _this67.positionConfigId = _this67.wholeConfig._id;
            delete _this67.wholeConfig._id;
            delete _this67.wholeConfig.organizationId; //this.loading = false;
          });
        }
      }, {
        key: "saveOrganization",
        value: function saveOrganization() {
          var _this68 = this;

          this.loading = true;
          this.http.post(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/updateOrganization/' + this.organization._id, this.organization).subscribe(function (res) {
            _this68.storage.store('alert', {
              type: 'success',
              message: 'Successfully saved locations!'
            });

            _this68.organization = res.data; // reset the newLocations so they don't send multiple

            _this68.organization.newLocations = [];
            _this68.organization.updatedLocation = null;

            _this68.updateLocationsDropdown();

            _this68.loading = false;
          }, function (err) {
            if (err) {
              _this68.storage.store('alert', {
                type: 'error',
                message: 'There was a problem saving changes to configuration, please try again.'
              });

              _this68.loading = false;
            }
          });
        }
      }, {
        key: "updateFields",
        value: function updateFields() {
          var _this69 = this;

          if (this.wholeConfig) {
            var keys = Object.keys(this.wholeConfig);
            keys.forEach(function (key) {
              _this69.wholeConfig[key].label = _this69.configForm.controls[key].value;
            });
          }
        }
      }, {
        key: "toggleAddPosition",
        value: function toggleAddPosition() {
          this.isAdding = !this.isAdding;
        }
      }, {
        key: "removePosition",
        value: function removePosition(position) {
          delete this.wholeConfig[position.value];
          var positionIndex = this.positions.findIndex(function (p) {
            return p.value === position.value;
          });
          this.positions.splice(positionIndex, 1);
          this.configForm.removeControl(position.value);
          this.saveConfig();
        }
      }, {
        key: "addPosition",
        value: function addPosition() {
          var newPosition = {
            value: this.newPositionForm.controls.newPositionValue.value,
            label: this.newPositionForm.controls.newPositionLabel.value
          };
          this.positions.push(newPosition);
          this.wholeConfig[newPosition.value] = newPosition;
          this.configForm.addControl(newPosition.value, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](newPosition.label));
          this.toggleAddPosition();
          this.saveConfig();
          this.newPositionForm.reset();
        }
      }, {
        key: "createNewLocation",
        value: function createNewLocation() {
          this.isEditingLocation = true;
          this.locationForm.reset();
        }
      }, {
        key: "editLocation",
        value: function editLocation() {
          this.isEditingLocation = true;
          var editedLocationValue = this.locationForm.controls.editedLocation.value;

          if (editedLocationValue && editedLocationValue !== '') {
            var locationId = this.locationForm.controls.editedLocation.value;
            var organizationLocations = this.organization.locations;
            var editingLocation = organizationLocations.find(function (orgLocation) {
              return orgLocation._id === locationId;
            });
            this.locationForm.controls.venueName.setValue(editingLocation.venueName);
            this.locationForm.controls.address.setValue(editingLocation.address);
            this.locationForm.controls.address2.setValue(editingLocation.address2);
            this.locationForm.controls.city.setValue(editingLocation.city);
            this.locationForm.controls.state.setValue(editingLocation.state);
            this.locationForm.controls.zipCode.setValue(editingLocation.zipCode);
          }
        }
      }, {
        key: "saveLocation",
        value: function saveLocation() {
          this.loading = true;
          this.isEditingLocation = false;
          var locationObject = {
            venueName: this.locationForm.controls.venueName.value,
            address: this.locationForm.controls.address.value,
            address2: this.locationForm.controls.address2.value,
            city: this.locationForm.controls.city.value,
            state: this.locationForm.controls.state.value,
            zipCode: this.locationForm.controls.zipCode.value
          };
          var locationId = this.locationForm.controls.editedLocation.value;

          if (locationId) {
            locationObject['_id'] = locationId;
            this.organization.updatedLocation = locationObject;
          } else {
            if (!this.organization.newLocations) {
              this.organization.newLocations = [];
            }

            this.organization.newLocations.push(locationObject);
          }

          this.saveOrganization();
          this.loading = false;
        }
      }, {
        key: "cancelEditingLocation",
        value: function cancelEditingLocation() {
          this.isEditingLocation = false;
          this.locationForm && this.locationForm.reset();
        }
      }, {
        key: "sendLinkToNewMember",
        value: function sendLinkToNewMember() {
          var _this70 = this;

          this.loading = true;
          var newMemberEmail = this.newMemberForm.controls.email.value;
          var putData = {
            email: newMemberEmail,
            name: this.organization.name,
            organizationId: this.organization._id
          };
          debugger;
          this.http.put(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/sendNewMemberLink', putData).subscribe(function (res) {
            _this70.newMemberForm.controls.email.setValue('');

            if (!res.isError) {
              _this70.us.users.push(res.user);

              _this70.us.users_pending.push(res.user);
            }

            var alertType = 'success';

            if (res.isError) {
              alertType = 'danger';
            }

            _this70.storage.store('alert', {
              type: alertType,
              message: res.message
            });

            _this70.loading = false;
          });
        }
      }, {
        key: "toggleNewMemberVisibility",
        value: function toggleNewMemberVisibility() {
          this.isAddingNewMember = !this.isAddingNewMember;
          this.newMemberForm.reset();
        }
      }, {
        key: "select",
        value: function select(state, users) {
          for (var i = 0; i < users.length; i++) {
            users[i]._selected = state;
          }
        }
      }, {
        key: "delete",
        value: function _delete(user) {
          var _this71 = this;

          this.storage.store('alert', {
            type: 'danger',
            message: 'Are you sure that you want to delete user ' + user.email,
            yes: function yes() {
              _this71.us["delete"](user);
            },
            no: function no() {}
          });
        }
      }, {
        key: "hasSelected",
        value: function hasSelected(users) {
          if (!users) return false;

          for (var i = 0; i < users.length; i++) {
            if (users[i]._selected) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "deleteAll",
        value: function deleteAll(users) {
          var _this72 = this;

          var message = '';

          for (var i = 0; i < users.length; i++) {
            if (users[i]._selected) {
              if (message) {
                message += ', ' + users[i].email;
              } else {
                message = 'Are you sure that you want to delete users ' + users[i].email;
              }
            }
          }

          this.storage.store('alert', {
            type: 'danger',
            message: message,
            yes: function yes() {
              for (var _i8 = users.length - 1; _i8 >= 0; _i8--) {
                if (users[_i8]._selected) {
                  _this72.us["delete"](users[_i8]);
                }
              }
            },
            no: function no() {}
          });
        }
      }, {
        key: "select_group",
        value: function select_group(group) {
          for (var i = 0; i < group.users.length; i++) {
            this.lists_selected[group._id + '_' + group.users[i]] = this.lists_selected[group._id];
          }
        }
      }, {
        key: "delete_group",
        value: function delete_group(group) {
          for (var i = group.users.length - 1; i >= 0; i--) {
            if (this.lists_selected[group._id + '_' + group.users[i]]) {
              group.users.splice(i, 1);
            }
          }

          this.gs.update(group);
        }
      }, {
        key: "add_users",
        value: function add_users(group) {
          this.added = {};

          for (var i = 0; i < group.users.length; i++) {
            this.added[group.users[i]] = true;
            ;
          }

          for (var _i9 = 0; _i9 < this.us.users.length; _i9++) {
            if (this.us.users[_i9]._selected && !this.added[this.us.users[_i9]._id]) {
              this.added[this.us.users[_i9]._id] = true;
              group.users.push(this.us.users[_i9]._id);
            }
          }

          for (var each in this.lists_selected) {
            if (!this.lists_selected[each]) continue;
            var userId = each.split('_');

            if (userId.length > 1) {
              this.added[userId[1]] = true;
              group.users.push(userId[1]);
            }
          }

          this.gs.update(group);
        }
      }, {
        key: "create_list",
        value: function create_list() {
          var _this73 = this;

          this.gs.create(this.group, function (group) {
            _this73.add_users(group);
          });
          this.show_new_group = false;
        }
      }, {
        key: "create_location",
        value: function create_location() {
          var _this74 = this;

          this.http.post(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/location/create', this.new_location).subscribe(function (created) {
            _this74.os.org.locations.push(created);

            _this74.os.update(_this74.os.org);

            _this74._locations[created._id] = created;

            _this74.dropdownLocations.push({
              value: created._id,
              label: created.venueName
            });
          });
        }
      }, {
        key: "update_location",
        value: function update_location(location) {
          var _this75 = this;

          clearTimeout(this._update_location[location._id]);
          this._update_location[location._id] = setTimeout(function () {
            _this75.http.post(_env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/location/update', location).subscribe(function () {});
          }, 2000);
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {// show cropper
        }
      }, {
        key: "upload",
        value: function upload() {
          this.os.org.logo = this.croppedImage;
          this.os.update(this.os.org);
          /*
          this.http.post(environment.applicationURI + '/api/uploadData', {
            dataUrl: this.croppedImage,
            name: this.os.org.name+'_org.png',
            folder: this.os.org._id
          }).subscribe((data) => {
            console.log(data);
            if(typeof data == 'string'){
              this.os.org.logo = data+'?'+Date.now();
              this.os.update(this.os.org);
            }
          });
          */

          this.imageChangedEvent = null;
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["HashService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["LabelService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["GroupService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["PositionConfigurationService"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/org/settings/settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.scss */
      "./src/app/pages/org/settings/settings.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"], _services__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_4__["HashService"], _services__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], _services__WEBPACK_IMPORTED_MODULE_4__["LabelService"], _services__WEBPACK_IMPORTED_MODULE_4__["GroupService"], _services__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"], _services__WEBPACK_IMPORTED_MODULE_4__["PositionConfigurationService"]])], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/edit-profile/edit-profile.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/profile/edit-profile/edit-profile.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileEditProfileEditProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-field {\n  padding: 5px;\n  border-radius: 5px 5px;\n  width: 100%;\n}\n\n.input-label {\n  display: block;\n}\n\n.btn-primary {\n  background-color: #ee352a;\n  border-color: #ee352a;\n  width: 100px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n}\n\n.btn-primary:disabled {\n  background-color: grey;\n  border-color: grey;\n}\n\n.btn-secondary {\n  background: none;\n  border: none;\n  color: black;\n  width: 100px;\n  border-radius: 5px 5px;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n}\n\n.waw-checkbox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: 25px;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.waw-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.waw-checkbox:hover input ~ .checkmark {\n  border: 1.5px solid #30a4f7;\n}\n\n.waw-checkbox input:checked ~ .checkmark {\n  background-color: #30a4f7;\n  transition: 0.2s ease-in-out;\n}\n\n.waw-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.waw-checkbox .checkmark {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  height: 22px;\n  width: 22px;\n  border-radius: 6px;\n  background-color: #fff;\n  border: 1px solid #f3f3f3;\n  transition: 0.2s ease-in-out;\n}\n\n.waw-checkbox .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 7px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9wcm9maWxlL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0hKOztBRE1FO0VBQ0UsMkJBQUE7QUNKSjs7QURNRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUNKSjs7QURNRTtFQUNFLGNBQUE7QUNKSjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDSko7O0FES0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWZpZWxkIHtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzUyYTtcbiAgICBib3JkZXItY29sb3I6ICNlZTM1MmE7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nOjNweDtcbn1cblxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDoxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBwYWRkaW5nOjNweDtcbn1cblxuXG5cbi8vIENIRUNLQk9YXG4ud2F3LWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLy8gaGlkZGVuIHRvZ2dsZSBpbnB1dFxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgfVxuICBcbiAgJjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICAgIGJvcmRlcjogMS41cHggc29saWQgIzMwYTRmNztcbiAgfVxuICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYTRmNztcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBsZWZ0OiA3cHg7XG4gICAgICB0b3A6IDNweDtcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gIH1cbn0iLCIuaW5wdXQtZmllbGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzUyYTtcbiAgYm9yZGVyLWNvbG9yOiAjZWUzNTJhO1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJvcmRlci1jb2xvcjogZ3JleTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLndhdy1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLndhdy1jaGVja2JveCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuLndhdy1jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMzMGE0Zjc7XG59XG4ud2F3LWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYTRmNztcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi53YXctY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53YXctY2hlY2tib3ggLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi53YXctY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgbGVmdDogN3B4O1xuICB0b3A6IDNweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/profile/edit-profile/edit-profile.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/profile/edit-profile/edit-profile.component.ts ***!
    \**********************************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppPagesProfileEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var EditProfileComponent = /*#__PURE__*/function () {
      function EditProfileComponent(http, ps, gs, us, storage, os) {
        _classCallCheck(this, EditProfileComponent);

        this.http = http;
        this.ps = ps;
        this.gs = gs;
        this.us = us;
        this.storage = storage;
        this.os = os;
        this.dropdownSettings = {
          singleSelection: false,
          idField: 'value',
          textField: 'label',
          selectAllText: 'Select All',
          unSelectAllText: 'Unselect All'
        };
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ps.init();
        }
      }, {
        key: "update_position",
        value: function update_position(org, pos) {
          this.storage.store('user', this.us.user);

          for (var i = 0; i < this.us.users.length; i++) {
            if (this.us.users[i]._id == this.us.user._id) {
              for (var each in this.us.user) {
                this.us.users[i][each] = this.us.user[each];
              }

              break;
            }
          }

          this.http.post(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/updateUserPositions/' + this.us.user._id + '/' + org, pos).subscribe(function (res) {});
        }
      }, {
        key: "update_group",
        value: function update_group(group) {
          for (var i = group.users.length - 1; i >= 0; i--) {
            if (group.users[i] == this.us.user._id) {
              group.users.splice(i, 1);
            }
          }

          if (group._users[this.user._id]) {
            group.users.push(this.user._id);
          }

          this.gs.selected[group._id + this.user._id] = group._users[this.user._id];
          this.gs.update(group);
        }
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["PositionConfigurationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["GroupService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EditProfileComponent.prototype, "user", void 0);
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile/edit-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.component.scss */
      "./src/app/pages/profile/edit-profile/edit-profile.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services__WEBPACK_IMPORTED_MODULE_5__["PositionConfigurationService"], _services__WEBPACK_IMPORTED_MODULE_5__["GroupService"], _services__WEBPACK_IMPORTED_MODULE_5__["UserService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]])], EditProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/profile/profile.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-field {\n  padding: 5px;\n  border-radius: 5px 5px;\n  width: 100%;\n}\n\n.input-label {\n  display: block;\n}\n\n.btn-primary {\n  background-color: #ee352a;\n  border-color: #ee352a;\n  width: 100px;\n  border-radius: 5px 5px;\n  float: right;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n}\n\n.btn-primary:disabled {\n  background-color: grey;\n  border-color: grey;\n}\n\n.btn-secondary {\n  background: none;\n  border: none;\n  color: black;\n  width: 100px;\n  border-radius: 5px 5px;\n  margin-right: 15px;\n  margin-top: 15px;\n  padding: 3px;\n}\n\n.waw-checkbox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: 25px;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.waw-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.waw-checkbox:hover input ~ .checkmark {\n  border: 1.5px solid #30a4f7;\n}\n\n.waw-checkbox input:checked ~ .checkmark {\n  background-color: #30a4f7;\n  transition: 0.2s ease-in-out;\n}\n\n.waw-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.waw-checkbox .checkmark {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  height: 22px;\n  width: 22px;\n  border-radius: 6px;\n  background-color: #fff;\n  border: 1px solid #f3f3f3;\n  transition: 0.2s ease-in-out;\n}\n\n.waw-checkbox .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 7px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0ZKOztBREtFO0VBQ0UsMkJBQUE7QUNISjs7QURLRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUNISjs7QURLRTtFQUNFLGNBQUE7QUNISjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDSEo7O0FESUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWZpZWxkIHtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzUyYTtcbiAgICBib3JkZXItY29sb3I6ICNlZTM1MmE7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nOjNweDtcbn1cblxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDoxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBwYWRkaW5nOjNweDtcbn1cblxuXG4vLyBDSEVDS0JPWFxuLndhdy1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC8vIGhpZGRlbiB0b2dnbGUgaW5wdXRcbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgXG4gICY6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMzMGE0Zjc7XG4gIH1cbiAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGE0Zjc7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogM3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgbGVmdDogN3B4O1xuICAgICAgdG9wOiAzcHg7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICB9XG59IiwiLmlucHV0LWZpZWxkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlucHV0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTM1MmE7XG4gIGJvcmRlci1jb2xvcjogI2VlMzUyYTtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItY29sb3I6IGdyZXk7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi53YXctY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi53YXctY2hlY2tib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cbi53YXctY2hlY2tib3g6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMzBhNGY3O1xufVxuLndhdy1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGE0Zjc7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ud2F3LWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2F3LWNoZWNrYm94IC5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ud2F3LWNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxlZnQ6IDdweDtcbiAgdG9wOiAzcHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTFweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(us, storage, route, os, gs, http) {
        _classCallCheck(this, ProfileComponent);

        this.us = us;
        this.storage = storage;
        this.route = route;
        this.os = os;
        this.gs = gs;
        this.http = http;
        this.isUserProfile = false;
        this.organizationPositions = [];
        this.dropdownSettings = {};
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this76 = this;

          // TODO: Modify this set up to handle multiple organizations with their positions
          this.http.get(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/getPositions/' + this.os.org._id).subscribe(function (res) {
            if (res) {
              Object.keys(res).forEach(function (key) {
                var position = res[key];

                if (Object(position) === position) {
                  _this76.organizationPositions = _this76.organizationPositions.concat({
                    value: position.value,
                    label: position.label
                  });
                }
              });
            }

            _this76.organizationPositions = _this76.organizationPositions;
          });
          this.dropdownSettings = {
            singleSelection: false,
            idField: 'value',
            textField: 'label',
            selectAllText: 'Select All',
            unSelectAllText: 'Unselect All'
          };
          this.route.queryParams.subscribe(function (params) {
            _this76.profileId = params.userId;

            if (_this76.profileId === _this76.us.user._id) {
              _this76.isUserProfile = true;
              _this76.profile = _this76.us.user;
            } else {
              _this76.http.get(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/getUser/' + _this76.profileId).subscribe(function (res) {
                _this76.profile = res;
              });
            }
          });
        }
      }, {
        key: "update_position",
        value: function update_position(org, pos, user) {
          if (!user) return;

          if (user._id == this.us.user._id) {
            this.storage.store('user', user);
          }

          for (var i = 0; i < this.us.users.length; i++) {
            if (this.us.users[i]._id == user._id) {
              for (var each in this.us.user) {
                this.us.users[i][each] = this.us.user[each];
              }

              break;
            }
          }

          this.http.post(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/updateUserPositions/' + user._id + '/' + org, pos).subscribe(function (res) {});
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["GroupService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/pages/profile/profile.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["UserService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_5__["GroupService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/user-event-row/user-event-row.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/profile/user-event-row/user-event-row.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileUserEventRowUserEventRowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit {\n  float: right;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3VzZXItZXZlbnQtcm93L3VzZXItZXZlbnQtcm93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3VzZXItZXZlbnQtcm93L3VzZXItZXZlbnQtcm93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3VzZXItZXZlbnQtcm93L3VzZXItZXZlbnQtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZWRpdCB7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59IiwiLmVkaXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/user-event-row/user-event-row.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/profile/user-event-row/user-event-row.component.ts ***!
    \**************************************************************************/

  /*! exports provided: UserEventRowComponent */

  /***/
  function srcAppPagesProfileUserEventRowUserEventRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEventRowComponent", function () {
      return UserEventRowComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserEventRowComponent = /*#__PURE__*/function () {
      function UserEventRowComponent() {
        _classCallCheck(this, UserEventRowComponent);
      }

      _createClass(UserEventRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserEventRowComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UserEventRowComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UserEventRowComponent.prototype, "isEven", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UserEventRowComponent.prototype, "user", void 0);
    UserEventRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-event-row',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-event-row.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/user-event-row/user-event-row.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-event-row.component.scss */
      "./src/app/pages/profile/user-event-row/user-event-row.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UserEventRowComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/user-profile/user-profile.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/profile/user-profile/user-profile.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileUserProfileUserProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/profile/user-profile/user-profile.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/profile/user-profile/user-profile.component.ts ***!
    \**********************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppPagesProfileUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(os, us, js, http, positionConfigurationService, route) {
        _classCallCheck(this, UserProfileComponent);

        this.os = os;
        this.us = us;
        this.js = js;
        this.http = http;
        this.positionConfigurationService = positionConfigurationService;
        this.route = route;
        this.pastEvents = [];
        this.positionConfigurationMap = {};
        this.columnHeaders = ['title', 'venue', 'position', 'date', 'rating', 'comment'];
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this77 = this;

          this.positionConfigurationService.getPositions(this.os.org._id).subscribe(function (data) {
            if (data) {
              Object.keys(data).forEach(function (key) {
                _this77.positionConfigurationMap[key] = data[key].label;
              });
            }

            _this77.positionConfigurationMap['Creator'] = 'Creator';
          });
          this.route.queryParams.subscribe(function (params) {
            var profileId = params.userId;

            _this77.http.get(_env__WEBPACK_IMPORTED_MODULE_4__["environment"].applicationURI + '/api/getEvents/' + profileId).subscribe(function (res) {
              if (res) _this77.sortEvents(res);
            });
          });
        }
      }, {
        key: "sortEvents",
        value: function sortEvents(events) {
          var _this78 = this;

          events.forEach(function (event) {
            var eventComment = '';

            if (event.crewComments && event.crewComments[_this78.profile._id]) {
              eventComment = event.crewComments[_this78.profile._id];
            }

            Object.keys(event.crew).forEach(function (crewDate) {
              if (!_this78.isEventAccountedFor(event, crewDate) && event.createdBy === _this78.profile._id) {
                var userEvent = Object.assign({}, event);
                userEvent.date = crewDate;
                userEvent.time = event.time;
                userEvent.position = 'Creator';
                userEvent.comment = eventComment;
                userEvent = _this78.createDynmicColumnModel(userEvent); // Only get past events

                if (new Date(userEvent.date).getTime() < Date.now()) {
                  _this78.pastEvents.push(userEvent);
                }
              }

              if (event.crew[crewDate] && typeof event.crew[crewDate].forEach === 'function') {
                event.crew[crewDate].forEach(function (crew) {
                  if (!_this78.isEventAccountedFor(event, crewDate)) {
                    if (crew._id === _this78.profile._id || event.createdBy === _this78.profile._id) {
                      var _userEvent = Object.assign({}, event);

                      _userEvent.date = crewDate;
                      _userEvent.time = crew.callTime;
                      _userEvent.isAvailable = crew.isAvailable;
                      _userEvent.comment = eventComment;
                      var eventDate = new Date(crewDate);
                      eventDate.setHours(0, 0, 0, 0);

                      if (crew.callTime) {
                        var timePieces = crew.callTime.split(':');
                        var hours = parseInt(timePieces[0], 10);

                        if (timePieces[1].includes('PM')) {
                          hours += 12;
                        } else if (hours === 12) {
                          hours = 0;
                        }

                        var minutes = parseInt(timePieces[1].substring(0, 2), 10);
                        eventDate.setHours(hours, minutes, 0, 0);
                      }

                      var eventDateTime = eventDate.getTime();
                      _userEvent.position = _this78.positionConfigurationMap[crew.position]; // Only get past events

                      if (new Date(eventDateTime).getTime() < Date.now()) {
                        _this78.pastEvents.push(_userEvent);
                      }
                    }
                  }
                });
              }
            });
          });

          function compare(a, b) {
            var eventDateTimeA = new Date(a.date).getTime();
            var eventDataTimeB = new Date(b.date).getTime();
            var comparison = 0;

            if (eventDateTimeA < eventDataTimeB) {
              comparison = 1;
            } else if (eventDateTimeA > eventDataTimeB) {
              comparison = -1;
            }

            return comparison;
          }

          this.pastEvents.sort(compare);
        }
      }, {
        key: "createDynmicColumnModel",
        value: function createDynmicColumnModel(event) {
          var _this79 = this;

          if (!event.dynamicColumns) {
            event.dynamicColumns = {};
          }

          this.columnHeaders.forEach(function (header) {
            if (event) {
              event.dynamicColumns[header] = '';
            }

            event.dynamicColumns[header] = _this79.getValueFromHeader(header, event);
          });
          return event;
        }
      }, {
        key: "getValueFromHeader",
        value: function getValueFromHeader(header, event) {
          var value;
          header = header.toLowerCase();

          switch (header) {
            case 'title':
              value = event.title;
              break;

            case 'venue':
              value = event.location.address;
              break;

            case 'position':
              if (event && event.position) {
                if (this.positionConfigurationMap[event.position]) {
                  value = this.positionConfigurationMap[event.position];
                } else {
                  value = 'Creator';
                }
              }

              break;

            case 'date':
              value = event.date;
              break;

            case 'rating':
              value = event.time;
              break;

            case 'comment':
              value = event.comment;
              break;

            default:
              break;
          }

          return value;
        }
      }, {
        key: "isEventAccountedFor",
        value: function isEventAccountedFor(event, newDate) {
          var exists = this.pastEvents.findIndex(function (x) {
            return x._id === event._id && x.date === newDate;
          }) >= 0;

          if (exists) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["PositionConfigurationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UserProfileComponent.prototype, "profile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], UserProfileComponent.prototype, "user", void 0);
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/user-profile/user-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.scss */
      "./src/app/pages/profile/user-profile/user-profile.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"], _services__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services__WEBPACK_IMPORTED_MODULE_2__["JobService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services__WEBPACK_IMPORTED_MODULE_2__["PositionConfigurationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/refresh/refresh.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/refresh/refresh.component.ts ***!
    \****************************************************/

  /*! exports provided: RefreshComponent */

  /***/
  function srcAppPagesRefreshRefreshComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefreshComponent", function () {
      return RefreshComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RefreshComponent = /*#__PURE__*/function () {
      function RefreshComponent() {
        _classCallCheck(this, RefreshComponent);
      }

      _createClass(RefreshComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RefreshComponent;
    }();

    RefreshComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-refresh',
      template: "\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RefreshComponent);
    /***/
  },

  /***/
  "./src/app/pipes/crew-cost.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/crew-cost.pipe.ts ***!
    \*****************************************/

  /*! exports provided: CrewCostPipe */

  /***/
  function srcAppPipesCrewCostPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrewCostPipe", function () {
      return CrewCostPipe;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var CrewCostPipe = /*#__PURE__*/function () {
      function CrewCostPipe(time, js) {
        _classCallCheck(this, CrewCostPipe);

        this.time = time;
        this.js = js;
      }

      _createClass(CrewCostPipe, [{
        key: "transform",
        value: function transform(event, date, refresh) {
          var cost = 0;

          if (date) {
            event = this.js.byEvent[event._id + date];
          } else {
            event = this.js.byEvent[event._id];
          }

          if (!event || !event.length) {
            return 0;
          }

          for (var i = 0; i < event.length; i++) {
            if (event[i].rate) {
              cost += Number(event[i].rate * this.time.diff(event[i].times.from, event[i].times.to).total);
            } else if (event[i].fixed) {
              cost += Number(event[i].fixed);
            }

            if (event[i].extra) {
              cost += Number(event[i].extra);
            }
          }

          return Number(cost);
        }
      }]);

      return CrewCostPipe;
    }();

    CrewCostPipe.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["TimeService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }];
    };

    CrewCostPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'crewCost'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["TimeService"], _services__WEBPACK_IMPORTED_MODULE_2__["JobService"]])], CrewCostPipe);
    /***/
  },

  /***/
  "./src/app/pipes/each.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/pipes/each.pipe.ts ***!
    \************************************/

  /*! exports provided: EachPipe */

  /***/
  function srcAppPipesEachPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EachPipe", function () {
      return EachPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EachPipe = /*#__PURE__*/function () {
      function EachPipe() {
        _classCallCheck(this, EachPipe);
      }

      _createClass(EachPipe, [{
        key: "transform",
        value: function transform(obj, refresh) {
          if (!obj) return [];
          var arr = [];

          for (var each in obj) {
            if (obj[each]) arr.push(each);
          }

          return arr;
        }
      }]);

      return EachPipe;
    }();

    EachPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'each'
    })], EachPipe);
    /***/
  },

  /***/
  "./src/app/pipes/jobs.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/pipes/jobs.pipe.ts ***!
    \************************************/

  /*! exports provided: JobsPipe */

  /***/
  function srcAppPipesJobsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsPipe", function () {
      return JobsPipe;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var JobsPipe = /*#__PURE__*/function () {
      function JobsPipe(us) {
        _classCallCheck(this, JobsPipe);

        this.us = us;
      }

      _createClass(JobsPipe, [{
        key: "transform",
        value: function transform(jobs) {
          jobs = Array.isArray(jobs) && jobs.slice() || [];

          for (var i = jobs.length - 1; i >= 0; i--) {
            if (!jobs[i].active && jobs[i].assigned != this.us.user._id) jobs.splice(i, 1);
          }

          return jobs;
        }
      }]);

      return JobsPipe;
    }();

    JobsPipe.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    JobsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'jobs'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], JobsPipe);
    /***/
  },

  /***/
  "./src/app/pipes/labels-by-category.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/pipes/labels-by-category.pipe.ts ***!
    \**************************************************/

  /*! exports provided: LabelsByCategoryPipe */

  /***/
  function srcAppPipesLabelsByCategoryPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelsByCategoryPipe", function () {
      return LabelsByCategoryPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LabelsByCategoryPipe = /*#__PURE__*/function () {
      function LabelsByCategoryPipe() {
        _classCallCheck(this, LabelsByCategoryPipe);
      }

      _createClass(LabelsByCategoryPipe, [{
        key: "transform",
        value: function transform(labels, category, show_inactive, refresh) {
          labels = labels.slice();

          for (var i = labels.length - 1; i >= 0; i--) {
            if (labels[i].category != category) {
              labels.splice(i, 1);
            } else if (!show_inactive && !labels[i]._active) {
              labels.splice(i, 1);
            }
          }

          return labels;
        }
      }]);

      return LabelsByCategoryPipe;
    }();

    LabelsByCategoryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'labelsByCategory'
    })], LabelsByCategoryPipe);
    /***/
  },

  /***/
  "./src/app/pipes/search.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/search.pipe.ts ***!
    \**************************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppPipesSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /*
    *	Author: Honchar Denys
    *	Search for any content in any type of given documents
    *	Always returning an array, even if nothing is provided
    */


    var SearchPipe = /*#__PURE__*/function () {
      /*
      *	Author: Honchar Denys
      *	Search for any content in any type of given documents
      *	Always returning an array, even if nothing is provided
      */
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);

        this.c = 0;
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(given, s, f, l, i, reload) {
          // given stands for the provided array with docs
          // s stands for search
          // f stands for fields
          // l stands for limit
          // i stands for ignore filter
          // start stands for start the limit
          if (!s) {
            return given;
          }

          if (typeof f == 'number') {
            l = f;
            f = null;
          }

          if (i || !s) {
            if (l && Array.isArray(given)) return given.slice(0, l);else return given || [];
          }

          var _arr = [],
              _check = {};

          if (!Array.isArray(s) && typeof s == 'object') {
            var _s = [];

            for (var key in s) {
              if (s[key]) _s.push(key);
            }

            s = _s;
          }

          if (typeof s == 'string') {
            s = [s];
          }

          if (!f) f = ['name'];
          if (typeof f == 'string') f = f.split(' ');

          var sub_test = function sub_test(obj, _f, initObj, check) {
            if (!obj) return;

            if (_f.indexOf('.') > -1) {
              var sub = _f.split('.');

              var nsub = sub.shift();

              if (Array.isArray(obj[nsub])) {
                for (var _s2 = 0; _s2 < obj[nsub].length; _s2++) {
                  sub_test(obj[nsub][_s2], sub.join('.'), initObj, check);
                }

                return;
              } else {
                return sub_test(obj[nsub], sub.join('.'), initObj, check);
              }
            }

            for (var j = 0; j < s.length; j++) {
              var b = false;

              if ((typeof obj[_f] == 'string' || typeof obj[_f] == 'number') && typeof s[j] == 'string' && (obj[_f].toString().toLowerCase().indexOf(s[j].toLowerCase()) > -1 || s[j].toLowerCase().indexOf(obj[_f].toString().toLowerCase()) > -1)) {
                if (!_check[check]) _arr.push(initObj);
                _check[check] = true;
                b = true;
                break;
              }

              if (b) break;
            }
          };

          var test = function test(obj, check) {
            for (var _i10 = 0; _i10 < f.length; _i10++) {
              sub_test(obj, f[_i10], obj, check);
            }
          };

          if (Array.isArray(given)) {
            for (var _i11 = 0; _i11 < given.length; _i11++) {
              test(given[_i11], _i11);
            }
          } else if (typeof given == 'object') {
            for (var _key in given) {
              test(given[_key], _key);
            }
          }

          if (l) return _arr.splice(0, l);
          return _arr;
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'search'
    })], SearchPipe);
    /***/
  },

  /***/
  "./src/app/pipes/time.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/pipes/time.pipe.ts ***!
    \************************************/

  /*! exports provided: TimePipe */

  /***/
  function srcAppPipesTimePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimePipe", function () {
      return TimePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TimePipe = /*#__PURE__*/function () {
      function TimePipe() {
        _classCallCheck(this, TimePipe);
      }

      _createClass(TimePipe, [{
        key: "transform",
        value: function transform(time) {
          if (!time) return '';
          var time_str = (time.hour % 12 < 10 && '0' || '') + time.hour % 12 + ':';
          if (time_str == '00:') time_str = '12:';
          time_str += (time.minute < 10 && '0' || '') + time.minute;
          time_str += time.hour >= 12 && 'pm' || 'am';
          return time_str;
        }
      }]);

      return TimePipe;
    }();

    TimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'time'
    })], TimePipe);
    /***/
  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http, os, storage) {
        var _this80 = this;

        _classCallCheck(this, CategoryService);

        this.http = http;
        this.os = os;
        this.storage = storage;
        this.url = _env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/category';
        this.all_categories = [];
        this.categories = [];
        this.done = false;
        this._update = {};
        this.http.get(this.url + '/get').subscribe(function (data) {
          _this80.all_categories = data;

          for (var i = 0; i < _this80.all_categories.length; i++) {
            if (_this80.all_categories[i].org == _this80.os.org._id) {
              _this80.categories.push(_this80.all_categories[i]);
            }
          }

          _this80.categories.sort(function (a, b) {
            if (!a.order) return -1;
            if (!b.order) return 1;
            if (a.order < b.order) return -1;
            return 1;
          });

          _this80.done = true;
        });
      }

      _createClass(CategoryService, [{
        key: "create",
        value: function create(category) {
          var _this81 = this;

          category.org = this.os.org._id;
          this.http.post(this.url + '/create', category).subscribe(function (data) {
            if (!data) return;

            _this81.categories.push(data);

            _this81.storage.store('alert', {
              type: 'success',
              message: 'Category Successfully Created'
            });
          });
        }
      }, {
        key: "update",
        value: function update(category) {
          var _this82 = this;

          var show_alert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          clearTimeout(this._update[category._id]);
          this._update[category._id] = setTimeout(function () {
            _this82.http.post(_this82.url + '/update', category).subscribe(function (data) {
              if (show_alert) {
                _this82.storage.store('alert', {
                  type: 'success',
                  message: 'Category Successfully Updated'
                });
              }
            });
          }, 1000);
        }
      }, {
        key: "delete",
        value: function _delete(category) {
          var _this83 = this;

          this.http.post(this.url + '/delete', category).subscribe(function (data) {
            for (var i = 0; i < _this83.categories.length; i++) {
              if (_this83.categories[i]._id == category._id) {
                _this83.categories.splice(i, 1);

                break;
              }
            }

            _this83.storage.store('alert', {
              type: 'danger',
              message: 'Category Successfully Deleted'
            });
          });
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])], CategoryService);
    /***/
  },

  /***/
  "./src/app/services/event.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/event.service.ts ***!
    \*******************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppServicesEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var wacom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! wacom */
    "./node_modules/wacom/fesm2015/wacom.js");

    var EventService = /*#__PURE__*/function () {
      function EventService(http, mongo, os, storage) {
        var _this84 = this;

        _classCallCheck(this, EventService);

        this.http = http;
        this.mongo = mongo;
        this.os = os;
        this.storage = storage;
        this.url = _env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/event';
        this.all_events = [];
        this.events = [];
        this.done = false;
        this._events = {};
        this._update = {};
        this.events = this.mongo.get('event', {
          replace: {
            start: function start(val, cb, doc) {
              cb(new Date(doc.startDate));
            },
            end: function end(val, cb, doc) {
              cb(new Date(doc.endDate));
            },
            dates: function dates(val, cb, doc) {
              var dates = [];
              var from = doc.start.getTime();
              var to = doc.end.getTime();

              var push_day = function push_day(day_timed) {
                var pd = new Date(day_timed);
                dates.push((pd.getMonth() < 9 && '0' || '') + (pd.getMonth() + 1) + '/' + (pd.getDate() < 10 && '0' || '') + pd.getDate() + '/' + pd.getFullYear());
              };

              push_day(from);

              while (from < to) {
                from += 86400000;
                push_day(from);
              }

              cb(dates);
            },
            dates_view: function dates_view(val, cb, doc) {
              var dates_view = doc.dates[0];

              if (doc.dates.length > 1) {
                dates_view += ' - ' + doc.dates[doc.dates.length - 1];
              }

              cb(dates_view);
            },
            apply: this.mongo.beObj
          },
          groups: {
            by_event: {
              field: function field(doc) {
                return doc.organizationId;
              }
            }
          }
        }, function (data, obj) {
          _this84._events = obj;
          _this84.done = true;
        });
      }

      _createClass(EventService, [{
        key: "create",
        value: function create(event) {
          var _this85 = this;

          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (event) {};
          var alert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          event.organizationId = this.os.org._id;
          this.mongo.create('event', event, function (created) {
            if (created) {
              cb(created);

              if (alert) {
                _this85.storage.store('alert', {
                  type: 'success',
                  message: 'event Successfully Created'
                });
              }
            }
          });
        }
      }, {
        key: "update",
        value: function update(event) {
          var _this86 = this;

          clearTimeout(this._update[event._id]);
          this._update[event._id] = setTimeout(function () {
            _this86.http.post(_this86.url + '/update', event).subscribe(function (data) {
              _this86.storage.store('alert', {
                type: 'success',
                message: 'event Successfully Updated'
              });
            });
          }, 1000);
        }
      }, {
        key: "delete",
        value: function _delete(event) {
          var _this87 = this;

          this.http.post(this.url + '/delete', event).subscribe(function (data) {
            for (var i = 0; i < _this87.events.length; i++) {
              if (_this87.events[i]._id == event._id) {
                _this87.events.splice(i, 1);

                break;
              }
            }

            _this87.storage.store('alert', {
              type: 'danger',
              message: 'event Successfully Deleted'
            });
          });
        }
      }]);

      return EventService;
    }();

    EventService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: wacom__WEBPACK_IMPORTED_MODULE_6__["MongoService"]
      }, {
        type: _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], wacom__WEBPACK_IMPORTED_MODULE_6__["MongoService"], _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])], EventService);
    /***/
  },

  /***/
  "./src/app/services/group.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/group.service.ts ***!
    \*******************************************/

  /*! exports provided: GroupService */

  /***/
  function srcAppServicesGroupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupService", function () {
      return GroupService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var wacom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! wacom */
    "./node_modules/wacom/fesm2015/wacom.js");

    var GroupService = /*#__PURE__*/function () {
      function GroupService(http, us, mongo, os, storage) {
        var _this88 = this;

        _classCallCheck(this, GroupService);

        this.http = http;
        this.us = us;
        this.mongo = mongo;
        this.os = os;
        this.storage = storage;
        this.url = _env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/group';
        this.all_groups = [];
        this.groups = [];
        this.groups_by_label = {};
        this.done = false;
        this._update = {};
        this.selected = {};
        this.mongo.get('group', {
          replace: {
            label: this.mongo.beString
          },
          groups: {
            label: {
              field: function field(doc, cb) {
                if (doc.labels && doc.labels.length) {
                  for (var i = 0; i < doc.labels.length; i++) {
                    cb(doc.labels[i]._id);
                  }
                }
              }
            }
          }
        }, function (data, obj) {
          _this88.groups_by_label = obj.label;
          _this88.all_groups = data;

          for (var i = 0; i < _this88.all_groups.length; i++) {
            var group = _this88.all_groups[i];

            if (group.org == _this88.os.org._id) {
              _this88.groups.push(group);
            }

            group._users = {};

            for (var j = 0; j < group.users.length; j++) {
              group._users[group.users[j]] = true;
              _this88.selected[group._id + group.users[j]] = true;
            }
          }

          _this88.done = true;
        });
      }

      _createClass(GroupService, [{
        key: "create",
        value: function create(group) {
          var _this89 = this;

          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (resp) {};
          group.org = this.os.org._id;
          this.http.post(this.url + '/create', group).subscribe(function (created) {
            if (!created) return;
            cb(created);

            _this89.groups.push(created);

            _this89.storage.store('alert', {
              type: 'success',
              message: 'Group Successfully Created'
            });
          });
        }
      }, {
        key: "update",
        value: function update(group) {
          var _this90 = this;

          clearTimeout(this._update[group._id]);
          this._update[group._id] = setTimeout(function () {
            _this90.http.post(_this90.url + '/update', group).subscribe(function (data) {
              _this90.storage.store('alert', {
                type: 'success',
                message: 'Group Successfully Updated'
              });
            });
          }, 1000);
        }
      }, {
        key: "delete",
        value: function _delete(group) {
          var _this91 = this;

          this.http.post(this.url + '/delete', group).subscribe(function (data) {
            for (var i = 0; i < _this91.groups.length; i++) {
              if (_this91.groups[i]._id == group._id) {
                _this91.groups.splice(i, 1);

                break;
              }
            }

            _this91.storage.store('alert', {
              type: 'danger',
              message: 'Group Successfully Deleted'
            });
          });
        }
      }, {
        key: "select",
        value: function select(group) {
          for (var i = 0; i < this.us.users_current.length; i++) {
            this.selected[group._id + this.us.users_current[i]._id] = this.selected[group._id];
          }

          this.set_users(group);
        }
      }, {
        key: "set_users",
        value: function set_users(group) {
          group.users = [];

          for (var i = 0; i < this.us.users_current.length; i++) {
            if (this.selected[group._id + this.us.users_current[i]._id]) {
              group.users.push(this.us.users_current[i]._id);
            }
          }

          this.update(group);
        }
      }]);

      return GroupService;
    }();

    GroupService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: wacom__WEBPACK_IMPORTED_MODULE_7__["MongoService"]
      }, {
        type: _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], wacom__WEBPACK_IMPORTED_MODULE_7__["MongoService"], _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])], GroupService);
    /***/
  },

  /***/
  "./src/app/services/guard.ts":
  /*!***********************************!*\
    !*** ./src/app/services/guard.ts ***!
    \***********************************/

  /*! exports provided: Authenticated, Guest, Admins */

  /***/
  function srcAppServicesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Authenticated", function () {
      return Authenticated;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Guest", function () {
      return Guest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Admins", function () {
      return Admins;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Authenticated = /*#__PURE__*/function () {
      function Authenticated(storage, router) {
        _classCallCheck(this, Authenticated);

        this.storage = storage;
        this.router = router;
      }

      _createClass(Authenticated, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.storage.retrieve('user')) {
            return true;
          } else {
            this.storage.store('back_url', window.location.pathname);
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return Authenticated;
    }();

    Authenticated.ctorParameters = function () {
      return [{
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Authenticated = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], Authenticated);

    var Guest = /*#__PURE__*/function () {
      function Guest(storage, router) {
        _classCallCheck(this, Guest);

        this.storage = storage;
        this.router = router;
      }

      _createClass(Guest, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.storage.retrieve('user')) {
            this.router.navigate(['/dashboard']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return Guest;
    }();

    Guest.ctorParameters = function () {
      return [{
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Guest = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], Guest);

    var Admins = /*#__PURE__*/function () {
      function Admins(storage, router) {
        _classCallCheck(this, Admins);

        this.storage = storage;
        this.router = router;
      }

      _createClass(Admins, [{
        key: "canActivate",
        value: function canActivate() {
          var user = this.storage.retrieve('user');

          if (user) {
            if (user.isAdmin) return true;
            this.router.navigate(['/dashboard']);
            return false;
          } else {
            this.storage.store('back_url', window.location.pathname);
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return Admins;
    }();

    Admins.ctorParameters = function () {
      return [{
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Admins = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], Admins);
    /***/
  },

  /***/
  "./src/app/services/hash.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/hash.service.ts ***!
    \******************************************/

  /*! exports provided: HashService */

  /***/
  function srcAppServicesHashServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HashService", function () {
      return HashService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // find . -name "*.spec.ts" -type f -delete


    var HashService = /*#__PURE__*/function () {
      function HashService() {
        _classCallCheck(this, HashService);

        this.replaces = [{
          from: '%20',
          to: ' '
        }];
        this.hash = {};
        this.done = false;

        if (!window.location.hash) {
          this.done = true;
          return;
        }

        var hash = window.location.hash.replace('#!#', '').replace('#', '').split('&');

        for (var i = 0; i < hash.length; i++) {
          var holder = hash[i].split('=')[0];
          var value = hash[i].split('=')[1];

          for (var j = 0; j < this.replaces.length; j++) {
            holder = holder.split(this.replaces[j].from).join(this.replaces[j].to);
            value = value.split(this.replaces[j].from).join(this.replaces[j].to);
          }

          this.hash[holder] = value;
        }

        this.done = true;
      }

      _createClass(HashService, [{
        key: "on",
        value: function on(field) {
          var _this92 = this;

          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (resp) {};
          if (!this.done) return setTimeout(function () {
            _this92.on(field, cb);
          }, 100);
          cb(this.hash[field]);
        }
      }, {
        key: "save",
        value: function save() {
          var hash = '';

          for (var each in this.hash) {
            if (hash) hash += '&';
            hash += each + '=' + this.hash[each];
          }

          window.location.hash = hash;
        }
      }, {
        key: "set",
        value: function set(field, value) {
          this.hash[field] = value;
          this.save();
        }
      }, {
        key: "clear",
        value: function clear(field) {
          delete this.hash[field];
          this.save();
        }
      }]);

      return HashService;
    }();

    HashService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HashService);
    /***/
  },

  /***/
  "./src/app/services/http.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/http.service.ts ***!
    \******************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HttpService = function HttpService() {
      _classCallCheck(this, HttpService);

      this.spin = false;
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HttpService);
    /***/
  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: Authenticated, Guest, Admins, LabelService, EventService, CategoryService, UserService, HashService, RateService, GroupService, JobService, TimeService, OrganizationService, LocationService, PositionConfigurationService, HttpService */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./guard */
    "./src/app/services/guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Authenticated", function () {
      return _guard__WEBPACK_IMPORTED_MODULE_1__["Authenticated"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Guest", function () {
      return _guard__WEBPACK_IMPORTED_MODULE_1__["Guest"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Admins", function () {
      return _guard__WEBPACK_IMPORTED_MODULE_1__["Admins"];
    });
    /* harmony import */


    var _label_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./label.service */
    "./src/app/services/label.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LabelService", function () {
      return _label_service__WEBPACK_IMPORTED_MODULE_2__["LabelService"];
    });
    /* harmony import */


    var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./event.service */
    "./src/app/services/event.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"];
    });
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./category.service */
    "./src/app/services/category.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"];
    });
    /* harmony import */


    var _hash_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hash.service */
    "./src/app/services/hash.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HashService", function () {
      return _hash_service__WEBPACK_IMPORTED_MODULE_6__["HashService"];
    });
    /* harmony import */


    var _rate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./rate.service */
    "./src/app/services/rate.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RateService", function () {
      return _rate_service__WEBPACK_IMPORTED_MODULE_7__["RateService"];
    });
    /* harmony import */


    var _group_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./group.service */
    "./src/app/services/group.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GroupService", function () {
      return _group_service__WEBPACK_IMPORTED_MODULE_8__["GroupService"];
    });
    /* harmony import */


    var _job_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./job.service */
    "./src/app/services/job.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JobService", function () {
      return _job_service__WEBPACK_IMPORTED_MODULE_9__["JobService"];
    });
    /* harmony import */


    var _time_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./time.service */
    "./src/app/services/time.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TimeService", function () {
      return _time_service__WEBPACK_IMPORTED_MODULE_10__["TimeService"];
    });
    /* harmony import */


    var _organization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrganizationService", function () {
      return _organization_service__WEBPACK_IMPORTED_MODULE_11__["OrganizationService"];
    });
    /* harmony import */


    var _location_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./location.service */
    "./src/app/services/location.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return _location_service__WEBPACK_IMPORTED_MODULE_12__["LocationService"];
    });
    /* harmony import */


    var _position_configuration_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./position-configuration.service */
    "./src/app/services/position-configuration.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PositionConfigurationService", function () {
      return _position_configuration_service__WEBPACK_IMPORTED_MODULE_13__["PositionConfigurationService"];
    });
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/services/http.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return _http_service__WEBPACK_IMPORTED_MODULE_14__["HttpService"];
    });
    /***/

  },

  /***/
  "./src/app/services/job.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/job.service.ts ***!
    \*****************************************/

  /*! exports provided: JobService */

  /***/
  function srcAppServicesJobServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobService", function () {
      return JobService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var wacom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! wacom */
    "./node_modules/wacom/fesm2015/wacom.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _modals_message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../modals/message/message.component */
    "./src/app/modals/message/message.component.ts");
    /* harmony import */


    var _event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./event.service */
    "./src/app/services/event.service.ts");

    var JobService = /*#__PURE__*/function () {
      function JobService(http, es, modalService, mongo, us, os, storage) {
        var _this93 = this;

        _classCallCheck(this, JobService);

        this.http = http;
        this.es = es;
        this.modalService = modalService;
        this.mongo = mongo;
        this.us = us;
        this.os = os;
        this.storage = storage;
        this.url = _env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/job';
        this.all_jobs = [];
        this.myjobs = [];
        this.jobs = [];
        this._jobs = {};
        this.assigned = {};
        this.assigned_by_day = {};
        this.done = false;
        this.now = new Date().getTime();
        this.byEvent = {};
        this.mongo.get('job', {
          replace: {
            origin: function origin(val, cb, doc) {
              cb(doc.assigned);
            },
            apply: this.mongo.beObj,
            times: function times(val, cb) {
              if (!val.from.time) {
                val.from.time = (val.from.hour % 12 < 10 && '0' || '') + val.from.hour % 12 + ':';
                if (val.from.time == '00:') val.from.time = '12:';
                val.from.time += (val.from.minute < 10 && '0' || '') + val.from.minute;
                val.from.time += val.from.hour >= 12 && ' pm' || ' am';
              }

              if (!val.to) {
                val.to = val.from;
              }

              if (!val.to.time) {
                val.to.time = (val.to.hour % 12 < 10 && '0' || '') + val.to.hour % 12 + ':';
                if (val.to.time == '00:') val.to.time = '12:';
                val.to.time += (val.to.minute < 10 && '0' || '') + val.to.minute;
                val.to.time += val.to.hour >= 12 && ' pm' || ' am';
              }

              cb(val);
            }
          },
          query: {
            myjobs: function myjobs(doc) {
              console.log("jobs are >>> ", doc); //if(this.us.user._id == doc.assigned) return true;

              return !doc.accepted && (!doc.assigned || !doc.force);
            }
          },
          groups: {
            assigned_by_day: {
              field: function field(doc, cb) {
                cb(doc.day + doc.assigned);
                cb(doc.day + doc.assigned + doc.event);
                return doc.day + doc.assigned + doc._id;
              },
              allow: function allow(doc) {
                return doc.day && doc.assigned;
              }
            },
            assigned: {
              field: function field(doc) {
                return doc.assigned;
              },
              allow: function allow(doc) {
                return doc.assigned;
              }
            },
            byEvent: {
              field: function field(doc, cb) {
                cb(doc.event);
                return doc.event + doc.day;
              },
              allow: function allow(doc) {
                return !!doc.day;
              }
            }
          }
        }, function (arr, obj) {
          _this93.myjobs = obj.myjobs;
          _this93.assigned_by_day = obj.assigned_by_day;
          _this93.assigned = obj.assigned;
          _this93.byEvent = obj.byEvent;
          _this93.all_jobs = arr;

          _this93.init();
        });
        this.http.get(this.url + '/get').subscribe(function (data) {
          _this93.all_jobs = data;

          _this93.init();
        });
      }

      _createClass(JobService, [{
        key: "refresh",
        value: function refresh() {
          this.now = new Date().getTime();
        }
      }, {
        key: "on",
        value: function on() {
          var _this94 = this;

          var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
          if (this.done) return cb();
          setTimeout(function () {
            _this94.on(cb);
          }, 100);
        }
      }, {
        key: "init",
        value: function init() {
          if (!this.os.org) {
            return setTimeout(this.init.bind(this), 100);
          }

          for (var i = 0; i < this.all_jobs.length; i++) {
            if (!this.all_jobs[i].apply) this.all_jobs[i].apply = {};
            this._jobs[this.all_jobs[i]._id] = this.all_jobs[i];

            if (this.all_jobs[i].org == this.os.org._id) {
              // console.log("job pushed", this.all_jobs[i]);
              this.jobs.push(this.all_jobs[i]);
            }
          }

          this.done = true;
        }
      }, {
        key: "attach_date",
        value: function attach_date(job) {
          if (!job.event && this.es._events[job.event]) return;
          job.__event_dates = this.es._events[job.event].dates_view;
        }
      }, {
        key: "create",
        value: function create(job) {
          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
          this.mongo.create('job', job, cb);
        }
      }, {
        key: "save",
        value: function save(job) {
          var _this95 = this;

          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
          this.attach_date(job);

          if (job.origin && job.assigned != job.origin) {
            var modalRef = this.modalService.open(_modals_message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"], {
              size: 'lg'
            });

            if (job.assigned) {
              modalRef.componentInstance.title = "Tell why you are changing assigned.";
            } else {
              modalRef.componentInstance.title = "Tell why you are removing assigned.";
            }

            modalRef.componentInstance.placeholder = "Type the reason.";
            modalRef.componentInstance.save.subscribe(function (saved) {
              job.message = saved;
              job.origin = job.assigned;

              _this95.mongo.update('job', job, cb);
            });
            modalRef.componentInstance.cancel.subscribe(function (saved) {
              job.assigned = job.origin;

              _this95.mongo.update('job', job, cb);
            });
          } else {
            this.mongo.update('job', job, cb);
          }
        }
      }, {
        key: "update",
        value: function update(job) {
          var _this96 = this;

          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
          this.mongo.afterWhile(job, function () {
            _this96.save(job, cb);
          });
        }
      }, {
        key: "apply",
        value: function apply(_apply) {
          var _this97 = this;

          this.refresh();
          _apply.org = this.os.org._id;
          this.http.post(this.url + '/apply', _apply).subscribe(function (data) {
            if (_apply.apply) {
              _this97.storage.store('alert', {
                type: 'success',
                message: 'You have applied to the job'
              });
            } else {
              _this97.storage.store('alert', {
                type: 'error',
                message: 'You have canceled your application for the job'
              });
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(job) {
          var _this98 = this;

          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
          var force_message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          this.attach_date(job);

          if (force_message) {
            if (job.assigned) job.message = force_message;
            this.mongo["delete"]('job', job);
          } else if (job.assigned) {
            var modalRef = this.modalService.open(_modals_message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"], {
              size: 'lg'
            });
            modalRef.componentInstance.title = "Tell why you are removing this job.";
            modalRef.componentInstance.placeholder = "Message";
            modalRef.componentInstance.save.subscribe(function (saved) {
              _this98.mongo["delete"]('job', {
                _id: job._id,
                message: saved
              }, {
                fields: '_id message'
              }, function () {
                _this98.storage.store('alert', {
                  type: 'danger',
                  message: 'Job Successfully Deleted'
                });

                cb();
              });
            });
          } else {
            this.mongo["delete"]('job', job, function () {
              _this98.storage.store('alert', {
                type: 'danger',
                message: 'Job Successfully Deleted'
              });

              cb();
            });
          }
        }
      }, {
        key: "accept",
        value: function accept(job_id, assigned) {
          var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
          this.http.get(this.url + "/accept/".concat(job_id).concat(assigned ? '/' + assigned : '')).subscribe(function (data) {
            cb(data);
          });
        }
      }]);

      return JobService;
    }();

    JobService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _event_service__WEBPACK_IMPORTED_MODULE_10__["EventService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
      }, {
        type: wacom__WEBPACK_IMPORTED_MODULE_7__["MongoService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _event_service__WEBPACK_IMPORTED_MODULE_10__["EventService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"], wacom__WEBPACK_IMPORTED_MODULE_7__["MongoService"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])], JobService);
    /***/
  },

  /***/
  "./src/app/services/label.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/label.service.ts ***!
    \*******************************************/

  /*! exports provided: LabelService */

  /***/
  function srcAppServicesLabelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelService", function () {
      return LabelService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var wacom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! wacom */
    "./node_modules/wacom/fesm2015/wacom.js");

    var LabelService = /*#__PURE__*/function () {
      function LabelService(http, os, mongo, storage) {
        var _this99 = this;

        _classCallCheck(this, LabelService);

        this.http = http;
        this.os = os;
        this.mongo = mongo;
        this.storage = storage;
        this.url = _env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/label';
        this.all_labels = [];
        this.labels = [];
        this.labels_by_name = {};
        this.done = false;
        this._update = {};
        this.labels = this.mongo.get('label', {
          groups: {
            name: {
              field: function field(doc) {
                return doc.name;
              }
            }
          }
        }, function (data, obj) {
          _this99.labels_by_name = obj.name;
          _this99.all_labels = data;
          _this99.done = true;
        });
      }

      _createClass(LabelService, [{
        key: "create",
        value: function create(label) {
          var _this100 = this;

          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
          label.org = this.os.org._id;
          this.mongo.create('label', label, function () {
            cb();

            _this100.storage.store('alert', {
              type: 'success',
              message: 'Label Successfully Created'
            });
          });
        }
      }, {
        key: "update",
        value: function update(label) {
          var _this101 = this;

          clearTimeout(this._update[label._id]);
          this._update[label._id] = setTimeout(function () {
            _this101.http.post(_this101.url + '/update', label).subscribe(function (data) {
              _this101.storage.store('alert', {
                type: 'success',
                message: 'Label Successfully Updated'
              });
            });
          }, 1000);
        }
      }, {
        key: "delete",
        value: function _delete(label) {
          var _this102 = this;

          this.http.post(this.url + '/delete', label).subscribe(function (data) {
            for (var i = 0; i < _this102.labels.length; i++) {
              if (_this102.labels[i]._id == label._id) {
                _this102.labels.splice(i, 1);

                break;
              }
            }

            _this102.storage.store('alert', {
              type: 'danger',
              message: 'Label Successfully Deleted'
            });
          });
        }
      }]);

      return LabelService;
    }();

    LabelService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"]
      }, {
        type: wacom__WEBPACK_IMPORTED_MODULE_6__["MongoService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    LabelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"], wacom__WEBPACK_IMPORTED_MODULE_6__["MongoService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])], LabelService);
    /***/
  },

  /***/
  "./src/app/services/location.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/location.service.ts ***!
    \**********************************************/

  /*! exports provided: LocationService */

  /***/
  function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");

    var LocationService = /*#__PURE__*/function () {
      function LocationService(http, os, storage) {
        var _this103 = this;

        _classCallCheck(this, LocationService);

        this.http = http;
        this.os = os;
        this.storage = storage;
        this.url = _env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/location';
        this.locations = [];
        this._locations = {};
        this.done = false;
        this._update = {};
        this.http.get(this.url + '/get').subscribe(function (data) {
          _this103.locations = data;

          for (var i = 0; i < _this103.locations.length; i++) {
            _this103._locations[_this103.locations[i]._id] = _this103.locations[i];
            _this103._locations[_this103.locations[i].venueName] = _this103.locations[i];
          }

          _this103.done = true;
        });
      }

      _createClass(LocationService, [{
        key: "create",
        value: function create(location) {
          var _this104 = this;

          this.http.post(this.url + '/create', location).subscribe(function (data) {
            if (!data) return;

            _this104.locations.push(data);

            _this104._locations[data._id] = data;

            _this104.storage.store('alert', {
              type: 'success',
              message: 'location Successfully Created'
            });
          });
        }
      }, {
        key: "update",
        value: function update(location) {
          var _this105 = this;

          clearTimeout(this._update[location._id]);
          this._update[location._id] = setTimeout(function () {
            _this105.http.post(_this105.url + '/update', location).subscribe(function (data) {
              _this105.storage.store('alert', {
                type: 'success',
                message: 'location Successfully Updated'
              });
            });
          }, 1000);
        }
      }, {
        key: "delete",
        value: function _delete(location) {
          var _this106 = this;

          this.http.post(this.url + '/delete', location).subscribe(function (data) {
            for (var i = 0; i < _this106.locations.length; i++) {
              delete _this106._locations[location._id];

              if (_this106.locations[i]._id == location._id) {
                _this106.locations.splice(i, 1);

                break;
              }
            }

            _this106.storage.store('alert', {
              type: 'danger',
              message: 'location Successfully Deleted'
            });
          });
        }
      }]);

      return LocationService;
    }();

    LocationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])], LocationService);
    /***/
  },

  /***/
  "./src/app/services/organization.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/organization.service.ts ***!
    \**************************************************/

  /*! exports provided: OrganizationService */

  /***/
  function srcAppServicesOrganizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationService", function () {
      return OrganizationService;
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


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var wacom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! wacom */
    "./node_modules/wacom/fesm2015/wacom.js");

    var OrganizationService = /*#__PURE__*/function () {
      function OrganizationService(http, mongo, storage) {
        var _this107 = this;

        _classCallCheck(this, OrganizationService);

        this.http = http;
        this.mongo = mongo;
        this.storage = storage;
        this.url = _env__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationURI + '/api/org';
        this.org = {};
        this._orgs = {};
        this.orgs = [];
        this.states = [{
          name: 'Alabama',
          value: 'Alabama'
        }, {
          name: 'Alaska',
          value: 'Alaska'
        }, {
          name: 'Arizona',
          value: 'Arizona'
        }, {
          name: 'Arkansas',
          value: 'Arkansas'
        }, {
          name: 'California',
          value: 'California'
        }, {
          name: 'Colorado',
          value: 'Colorado'
        }, {
          name: 'Connecticut',
          value: 'Connecticut'
        }, {
          name: 'Delaware',
          value: 'Delaware'
        }, {
          name: 'Florida',
          value: 'Florida'
        }, {
          name: 'Georgia',
          value: 'Georgia'
        }, {
          name: 'Hawaii',
          value: 'Hawaii'
        }, {
          name: 'Idaho',
          value: 'Idaho'
        }, {
          name: 'Illinois',
          value: 'Illinois'
        }, {
          name: 'Indiana',
          value: 'Indiana'
        }, {
          name: 'Iowa',
          value: 'Iowa'
        }, {
          name: 'Kansas',
          value: 'Kansas'
        }, {
          name: 'Kentucky',
          value: 'Kentucky'
        }, {
          name: 'Louisiana',
          value: 'Louisiana'
        }, {
          name: 'Maine',
          value: 'Maine'
        }, {
          name: 'Maryland',
          value: 'Maryland'
        }, {
          name: 'Massachusetts',
          value: 'Massachusetts'
        }, {
          name: 'Michigan',
          value: 'Michigan'
        }, {
          name: 'Minnesota',
          value: 'Minnesota'
        }, {
          name: 'Mississippi',
          value: 'Mississippi'
        }, {
          name: 'Missouri',
          value: 'Missouri'
        }, {
          name: 'Montana',
          value: 'Montana'
        }, {
          name: 'Nebraska',
          value: 'Nebraska'
        }, {
          name: 'Nevada',
          value: 'Nevada'
        }, {
          name: 'New Hampshire',
          value: 'New Hampshire'
        }, {
          name: 'New Jersey',
          value: 'New Jersey'
        }, {
          name: 'New Mexico',
          value: 'New Mexico'
        }, {
          name: 'New York',
          value: 'New York'
        }, {
          name: 'North Carolina',
          value: 'North Carolina'
        }, {
          name: 'North Dakota',
          value: 'North Dakota'
        }, {
          name: 'Ohio',
          value: 'Ohio'
        }, {
          name: 'Oklahoma',
          value: 'Oklahoma'
        }, {
          name: 'Oregon',
          value: 'Oregon'
        }, {
          name: 'Pennsylvania',
          value: 'Pennsylvania'
        }, {
          name: 'Rhode Island',
          value: 'Rhode Island'
        }, {
          name: 'South Carolina',
          value: 'South Carolina'
        }, {
          name: 'South Dakota',
          value: 'South Dakota'
        }, {
          name: 'Tennessee',
          value: 'Tennessee'
        }, {
          name: 'Texas',
          value: 'Texas'
        }, {
          name: 'Utah',
          value: 'Utah'
        }, {
          name: 'Vermont',
          value: 'Vermont'
        }, {
          name: 'Virginia',
          value: 'Virginia'
        }, {
          name: 'Washington',
          value: 'Washington'
        }, {
          name: 'West Virginia',
          value: 'West Virginia'
        }, {
          name: 'Wisconsin',
          value: 'Wisconsin'
        }, {
          name: 'Wyoming',
          value: 'Wyoming'
        }];
        console.log("orgnization service called.");
        this.org = this.storage.retrieve('org');
        this.http.get(this.url + '/get').subscribe(function (resp) {
          _this107.orgs = resp;

          for (var i = 0; i < _this107.orgs.length; i++) {
            _this107._orgs[_this107.orgs[i]._id] = _this107.orgs[i];
          }

          _this107.org = resp[0] || {};

          _this107.storage.store('org', _this107.org);
        });
      }

      _createClass(OrganizationService, [{
        key: "update",
        value: function update(org) {
          if (org._id == this.org._id) {
            this.org = org;
            this.storage.store('org', this.org);
          }

          this.http.post(this.url + '/update', org).subscribe(function (data) {});
        }
      }, {
        key: "save",
        value: function save(org) {
          var _this108 = this;

          this.mongo.afterWhile(org, function () {
            if (org._id == _this108.org._id) {
              _this108.org = org;

              _this108.storage.store('org', _this108.org);
            }

            _this108.http.post(_this108.url + '/update', org).subscribe(function (data) {});
          });
        }
      }, {
        key: "getUserOrganization",
        value: function getUserOrganization() {
          return this.storage.observe('userOrganization').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError({
            primaryColor: null
          })));
        }
      }, {
        key: "handleError",
        value: function handleError(result) {
          return function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
          };
        }
      }]);

      return OrganizationService;
    }();

    OrganizationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: wacom__WEBPACK_IMPORTED_MODULE_7__["MongoService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }];
    };

    OrganizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], wacom__WEBPACK_IMPORTED_MODULE_7__["MongoService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])], OrganizationService);
    /***/
  },

  /***/
  "./src/app/services/position-configuration.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/position-configuration.service.ts ***!
    \************************************************************/

  /*! exports provided: PositionConfigurationService */

  /***/
  function srcAppServicesPositionConfigurationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionConfigurationService", function () {
      return PositionConfigurationService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");

    var PositionConfigurationService = /*#__PURE__*/function () {
      function PositionConfigurationService(http) {
        _classCallCheck(this, PositionConfigurationService);

        this.http = http;
        this.url = _env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/position';
        this._positions = {};
        this.done = false;
        this.init();
      }

      _createClass(PositionConfigurationService, [{
        key: "init",
        value: function init() {
          var _this109 = this;

          this.http.get(this.url + '/get').subscribe(function (resp) {
            for (var i = 0; i < resp.length; i++) {
              _this109._positions[resp[i].organizationId] = [];

              for (var each in resp[i]) {
                if (each == 'organizationId') continue;
                if (each == '_id') continue;

                _this109._positions[resp[i].organizationId].push(resp[i][each]);
              }
            }

            _this109.done = true;
            console.log("this.position>>", _this109._positions);
          });
        }
      }, {
        key: "getPositions",
        value: function getPositions(organizationId) {
          return this.http.get(_env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/getPositions/' + organizationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError()));
        }
      }, {
        key: "updatePositions",
        value: function updatePositions(positions) {
          return this.http.post(_env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/saveConfig', positions);
        }
      }, {
        key: "handleError",
        value: function handleError(result) {
          return function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }]);

      return PositionConfigurationService;
    }();

    PositionConfigurationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    PositionConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], PositionConfigurationService);
    /***/
  },

  /***/
  "./src/app/services/rate.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/rate.service.ts ***!
    \******************************************/

  /*! exports provided: RateService */

  /***/
  function srcAppServicesRateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateService", function () {
      return RateService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");

    var RateService = /*#__PURE__*/function () {
      function RateService(http) {
        var _this110 = this;

        _classCallCheck(this, RateService);

        this.http = http;
        this.url = _env__WEBPACK_IMPORTED_MODULE_3__["environment"].applicationURI + '/api/rate';
        this.rates = [];
        this._rates = {};
        this.rated = {};
        this.rated_total = {};
        this.rated_counter = {};
        this.http.get(this.url + '/get').subscribe(function (resp) {
          _this110.rates = resp;

          for (var i = 0; i < _this110.rates.length; i++) {
            _this110.calculate(_this110.rates[i]);
          }
        });
      }

      _createClass(RateService, [{
        key: "create",
        value: function create(rate) {
          var _this111 = this;

          if (this._rates[rate.code]) {
            this.rated_counter[rate.code]--;
            this.rated_total[rate.code] -= this._rates[rate.code].rate;
            var prefix = rate.event + rate.code + rate.day;

            if (this._rates[prefix]) {
              this.rated_counter[prefix]--;
              this.rated_total[prefix] -= this._rates[prefix].rate;
            }

            this.calculate(rate);
            return this.update(rate);
          }

          this._rates[rate.user + rate.event + rate.code + rate.day] = rate;
          this.http.post(this.url + '/create', rate).subscribe(function (created) {
            _this111.rates.push(created);

            _this111.calculate(created);
          });
        }
      }, {
        key: "update",
        value: function update(rate) {
          this.http.post(this.url + '/update', rate).subscribe(function (created) {});
        }
      }, {
        key: "calculate",
        value: function calculate(rate) {
          this._rates[rate.code] = rate;

          if (!this.rated_total[rate.code]) {
            this.rated_total[rate.code] = 0;
          }

          this.rated_total[rate.code] += rate.rate;

          if (!this.rated_counter[rate.code]) {
            this.rated_counter[rate.code] = 0;
          }

          this.rated_counter[rate.code]++;
          this.rated[rate.code] = this.rated_total[rate.code] / this.rated_counter[rate.code];
          var prefix = rate.event + rate.code + rate.day;
          this._rates[prefix] = rate;

          if (!this.rated_total[prefix]) {
            this.rated_total[prefix] = 0;
          }

          this.rated_total[prefix] += rate.rate;

          if (!this.rated_counter[prefix]) {
            this.rated_counter[prefix] = 0;
          }

          this.rated_counter[prefix]++;
          this.rated[prefix] = this.rated_total[prefix] / this.rated_counter[prefix];
        }
      }]);

      return RateService;
    }();

    RateService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], RateService);
    /***/
  },

  /***/
  "./src/app/services/time.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/time.service.ts ***!
    \******************************************/

  /*! exports provided: TimeService */

  /***/
  function srcAppServicesTimeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeService", function () {
      return TimeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TimeService = /*#__PURE__*/function () {
      function TimeService() {
        _classCallCheck(this, TimeService);
      }

      _createClass(TimeService, [{
        key: "to",
        value: function to(from) {
          var time = {
            second: 0
          };
          from = from.split(' ').join('').split(':');
          time.hour = Math.floor(from[0]);
          time.minute = Math.floor(from[1].slice(0, 2));
          time.kind = from[1].slice(2, 4).toLowerCase();

          if (time.kind == 'pm') {
            time.hour += 12;
          }

          return time;
        }
      }, {
        key: "diff",
        value: function diff(from, to) {
          var second = to.second - from.second;

          if (second < 0) {
            second = 60 - second;
            to.minute--;
          }

          var minute = to.minute - from.minute;

          if (second < 0) {
            minute = 60 - minute;
            to.hour--;
          }

          return {
            total: to.hour - from.hour + minute / 60 + second / 60,
            hour: to.hour - from.hour,
            minute: minute,
            second: second
          };
        }
      }]);

      return TimeService;
    }();

    TimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TimeService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var wacom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! wacom */
    "./node_modules/wacom/fesm2015/wacom.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, mongo, router, storage) {
        var _this112 = this;

        _classCallCheck(this, UserService);

        this.http = http;
        this.mongo = mongo;
        this.router = router;
        this.storage = storage;
        this.url = _env__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationURI + '/api/';
        this.now = new Date().getTime();
        this.done = false;
        this.user = {};
        this.users = [];
        this._users = {};
        this.users_pending = [];
        this.users_current = [];
        this.org_pos = {};
        this.user = this.storage.retrieve('user');
        this.http.get(this.url + 'user/me').subscribe(function (user) {
          if (!user._id) {
            _this112.logout();
          } else {
            _this112.user = user;

            _this112.storage.store('user', user);
          }
        }, function (err) {
          console.log(err);
        });
        this.mongo.get('user', {
          groups: {
            org_pos: {
              allow: function allow(doc) {
                return doc._activated;
              },
              sort: this.mongo.sortAscString('lastName'),
              field: function field(doc, cb) {
                for (var i = 0; i < doc.organizations.length; i++) {
                  for (var j = 0; j < doc.organizations[i]._positions.length; j++) {
                    cb(doc.organizations[i]._id + doc.organizations[i]._positions[j]);
                  }
                }
              }
            }
          },
          query: {
            users_current: {
              allow: function allow(doc) {
                return doc._activated;
              },
              sort: this.mongo.sortAscString('lastName')
            },
            users_pending: {
              allow: function allow(doc) {
                return !doc._activated;
              },
              sort: this.mongo.sortAscString('email')
            }
          }
        }, function (arr, obj) {
          _this112.users = arr;
          _this112._users = obj;
          _this112.users_current = obj.users_current;
          _this112.users_pending = obj.users_pending;
          _this112.org_pos = obj.org_pos;
          _this112.done = true;
        });
      }

      _createClass(UserService, [{
        key: "refresh",
        value: function refresh() {
          this.now = new Date().getTime();
        }
      }, {
        key: "delete",
        value: function _delete(user) {
          var _this113 = this;

          if (user.isAdmin) return;
          this.http.post(this.url + 'deleteUser', {
            id: user._id
          }).subscribe(function (data) {
            for (var i = 0; i < _this113.users.length; i++) {
              if (_this113.users[i]._id == user._id) {
                _this113.users.splice(i, 1);

                break;
              }
            }

            for (var _i12 = 0; _i12 < _this113.users_current.length; _i12++) {
              if (_this113.users_current[_i12]._id == user._id) {
                _this113.users_current.splice(_i12, 1);

                break;
              }
            }

            for (var _i13 = 0; _i13 < _this113.users_pending.length; _i13++) {
              if (_this113.users_pending[_i13]._id == user._id) {
                _this113.users_pending.splice(_i13, 1);

                break;
              }
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.storage.clear('user');
          this.storage.clear('organization');
          this.storage.clear('userOrganization');
          window.location.href = "/login";
        }
      }, {
        key: "update",
        value: function update(user) {
          var _this114 = this;

          this.mongo.afterWhile(user, function () {
            for (var i = 0; i < user.organizations.length; i++) {
              user.organizations[i]._positions = [];

              for (var j = 0; j < user.organizations[i].positions.length; j++) {
                user.organizations[i]._positions.push(user.organizations[i].positions[j].value);
              }
            }

            _this114.mongo.update('user', user);
          });
        }
      }, {
        key: "afterWhile",
        value: function afterWhile(doc, cb) {
          var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

          if (typeof cb == 'function' && typeof time == 'number') {
            clearTimeout(doc.__updateTimeout);
            doc.__updateTimeout = setTimeout(cb, time);
          }
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: wacom__WEBPACK_IMPORTED_MODULE_6__["MongoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], wacom__WEBPACK_IMPORTED_MODULE_6__["MongoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])], UserService);
    /***/
  },

  /***/
  "./src/app/utils/broadcaster.ts":
  /*!**************************************!*\
    !*** ./src/app/utils/broadcaster.ts ***!
    \**************************************/

  /*! exports provided: Broadcaster */

  /***/
  function srcAppUtilsBroadcasterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Broadcaster", function () {
      return Broadcaster;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Broadcaster = /*#__PURE__*/function () {
      function Broadcaster() {
        _classCallCheck(this, Broadcaster);

        this._eventBus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(Broadcaster, [{
        key: "emit",
        value: function emit(key, data) {
          this._eventBus.next({
            key: key,
            data: data
          });
        }
      }, {
        key: "listen",
        value: function listen(key) {
          return this._eventBus.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event.key === key;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            return event;
          }));
        }
      }]);

      return Broadcaster;
    }();
    /***/

  },

  /***/
  "./src/app/utils/calendar-picker/calendar-picker.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/utils/calendar-picker/calendar-picker.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilsCalendarPickerCalendarPickerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL2NhbGVuZGFyLXBpY2tlci9jYWxlbmRhci1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/utils/calendar-picker/calendar-picker.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/utils/calendar-picker/calendar-picker.component.ts ***!
    \********************************************************************/

  /*! exports provided: CalendarPickerComponent */

  /***/
  function srcAppUtilsCalendarPickerCalendarPickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarPickerComponent", function () {
      return CalendarPickerComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var equals = function equals(one, two) {
      return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
    };

    var before = function before(one, two) {
      return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day < two.day : one.month < two.month : one.year < two.year;
    };

    var after = function after(one, two) {
      return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day > two.day : one.month > two.month : one.year > two.year;
    };

    var CalendarPickerComponent = /*#__PURE__*/function () {
      function CalendarPickerComponent(calendar, dateFormatter) {
        var _this115 = this;

        _classCallCheck(this, CalendarPickerComponent);

        this.calendar = calendar;
        this.dateFormatter = dateFormatter;
        this.datePicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.isHovered = function (date) {
          return _this115.fromDate && !_this115.toDate && _this115.hoveredDate && after(date, _this115.fromDate) && before(date, _this115.hoveredDate);
        };

        this.isInside = function (date) {
          return after(date, _this115.fromDate) && before(date, _this115.toDate);
        };

        this.isFrom = function (date) {
          return equals(date, _this115.fromDate);
        };

        this.isTo = function (date) {
          return equals(date, _this115.toDate);
        };
      }

      _createClass(CalendarPickerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fromDate = this.calendar.getToday();
          this.toDate = null;

          if (this.startDate) {
            this.startDate = new Date(this.startDate);
            var startDateObject = {
              day: this.startDate.getDate(),
              month: this.startDate.getMonth() + 1,
              year: this.startDate.getFullYear()
            };
            this.fromDate = startDateObject;
            this.startDate = startDateObject;
          }

          if (this.endDate) {
            var endDate = new Date(this.endDate);
            var endDateObject = {
              day: endDate.getDate(),
              month: endDate.getMonth() + 1,
              year: endDate.getFullYear()
            };
            this.toDate = endDateObject;
          }
        }
      }, {
        key: "pickDate",
        value: function pickDate(date) {
          if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
          } else if (this.fromDate && this.fromDate === this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
          } else {
            this.toDate = date;
            this.fromDate = date;
          }

          var dates = {
            to: this.toDate,
            from: this.fromDate
          };
          this.datePicked.emit(dates);
        }
      }]);

      return CalendarPickerComponent;
    }();

    CalendarPickerComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarPickerComponent.prototype, "datePicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarPickerComponent.prototype, "startDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarPickerComponent.prototype, "endDate", void 0);
    CalendarPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calendar-picker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calendar-picker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/calendar-picker/calendar-picker.component.html"))["default"],
      styles: ["\n  .custom-day {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    display:inline-block;\n    height: 2rem;\n    width: 2rem;\n    color: #000;\n  }\n  .bg-light {\n    height: 2rem;\n  }\n  .ngb-dp-week .ngb-dp-day {\n    display:none;\n  }\n  .custom-day.focused {\n    background-color: #e6e6e6;\n  }\n  .custom-day.range, .custom-day:hover {\n    background-color: rgb(2, 117, 216);\n    color: white;\n  }\n  .custom-day.faded {\n    background-color: rgba(2, 117, 216, 0.5);\n  }\n  .ngb-dp-week:nth-child(2) {\n    justify-content: flex-end;\n  }\n", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calendar-picker.component.scss */
      "./src/app/utils/calendar-picker/calendar-picker.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]])], CalendarPickerComponent);
    /***/
  },

  /***/
  "./src/app/utils/guest/guest.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/utils/guest/guest.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilsGuestGuestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL2d1ZXN0L2d1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/utils/guest/guest.component.ts":
  /*!************************************************!*\
    !*** ./src/app/utils/guest/guest.component.ts ***!
    \************************************************/

  /*! exports provided: GuestComponent */

  /***/
  function srcAppUtilsGuestGuestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuestComponent", function () {
      return GuestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GuestComponent = /*#__PURE__*/function () {
      function GuestComponent() {
        _classCallCheck(this, GuestComponent);
      }

      _createClass(GuestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GuestComponent;
    }();

    GuestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-guest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./guest.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/guest/guest.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./guest.component.scss */
      "./src/app/utils/guest/guest.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GuestComponent);
    /***/
  },

  /***/
  "./src/app/utils/time/time.component.scss":
  /*!************************************************!*\
    !*** ./src/app/utils/time/time.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilsTimeTimeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".select__item {\n  overflow: auto;\n  flex: 33.3%;\n  border-right: 1px solid #e6e4e4;\n  text-transform: uppercase;\n}\n.select__item:last-child {\n  border-right: none;\n}\n.select-perfect-scroll {\n  flex: 33.3%;\n}\n.select {\n  width: 100%;\n  position: relative;\n}\n.select .fa-check {\n  position: absolute;\n  right: 13px;\n  top: 11.5px;\n  color: #696969;\n}\n.select-body {\n  border: 1px solid #f3f3f3;\n  margin-top: 10px;\n  justify-content: center;\n  border-radius: 5px;\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  z-index: 10;\n}\n.select-input {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  text-align: center;\n  text-transform: uppercase;\n}\n.select__item__counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #f3f3f3;\n}\n.select__item__counter:last-child {\n  border-bottom: 1px solid #f3f3f3;\n}\n.select__item__counter.active {\n  background-color: #e4f9fd;\n}\n.field-box .select {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC91dGlscy90aW1lL3RpbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3V0aWxzL3RpbWUvdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBQ0FEO0FEQ0M7RUFDQyxrQkFBQTtBQ0NGO0FER0E7RUFDQyxXQUFBO0FDQUQ7QURFQTtFQUNDLFdBQUE7RUFFQSxrQkFBQTtBQ0FEO0FEQ0M7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NEO0FEQ0E7RUFDQyxjQUFBO0VBQ0csV0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0VBQ0gsa0JBQUE7RUFDRyx5QkFBQTtBQ0VKO0FEQUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDR0Q7QURGQztFQUNDLGdDQUFBO0FDSUY7QURGQztFQUNDLHlCQUFBO0FDSUY7QURFQTtFQUNDLGVBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL3RpbWUvdGltZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RfX2l0ZW0gIHtcblx0XG5cdG92ZXJmbG93OiBhdXRvO1xuXHRmbGV4OiAzMy4zJTtcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U2ZTRlNDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0JjpsYXN0LWNoaWxkIHtcblx0XHRib3JkZXItcmlnaHQ6IG5vbmU7XG5cdH1cblx0XG59XG4uc2VsZWN0LXBlcmZlY3Qtc2Nyb2xsIHtcblx0ZmxleDogMzMuMyU7XG59XG4uc2VsZWN0IHtcblx0d2lkdGg6IDEwMCU7XG5cdFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdC5mYS1jaGVjayAge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMTNweDtcblx0XHR0b3A6IDExLjVweDtcblx0XHRjb2xvcjogIzY5Njk2OTtcblx0fVxufVxuLnNlbGVjdC1ib2R5IHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcblx0bWFyZ2luLXRvcDogMTBweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHR3aWR0aDogMTAwJTtcblx0ei1pbmRleDogMTA7XG59XG4uc2VsZWN0LWlucHV0IHtcblx0ZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNlbGVjdF9faXRlbV9fY291bnRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2YzZjNmMztcblx0JjpsYXN0LWNoaWxkIHtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcblx0fVxuXHQmLmFjdGl2ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjojZTRmOWZkO1xuXHRcdFxuXHR9XG59XG5cblxuLmZpZWxkLWJveCAuc2VsZWN0IHtcblx0bWF4LXdpZHRoOiAxMDAlO1xufSIsIi5zZWxlY3RfX2l0ZW0ge1xuICBvdmVyZmxvdzogYXV0bztcbiAgZmxleDogMzMuMyU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNmU0ZTQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc2VsZWN0X19pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5zZWxlY3QtcGVyZmVjdC1zY3JvbGwge1xuICBmbGV4OiAzMy4zJTtcbn1cblxuLnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0IC5mYS1jaGVjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEzcHg7XG4gIHRvcDogMTEuNXB4O1xuICBjb2xvcjogIzY5Njk2OTtcbn1cblxuLnNlbGVjdC1ib2R5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zZWxlY3QtaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2VsZWN0X19pdGVtX19jb3VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjNmM2YzO1xufVxuLnNlbGVjdF9faXRlbV9fY291bnRlcjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XG59XG4uc2VsZWN0X19pdGVtX19jb3VudGVyLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGY5ZmQ7XG59XG5cbi5maWVsZC1ib3ggLnNlbGVjdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/utils/time/time.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/utils/time/time.component.ts ***!
    \**********************************************/

  /*! exports provided: TimeComponent */

  /***/
  function srcAppUtilsTimeTimeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeComponent", function () {
      return TimeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TimeComponent = /*#__PURE__*/function () {
      function TimeComponent() {
        _classCallCheck(this, TimeComponent);

        this.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.hoursMeridian = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.show = false;
        this.meridian = true;
        this.time = '';
        this.maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/, ' ', /[ap]/, /[m]/];
        this.placeholder = 'hh:mm am';
        this.kinds = ['am', 'pm'];
      }

      _createClass(TimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this116 = this;

          if (!this.meridian) {
            this.maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/];
            this.placeholder = 'hh:mm';
          }

          if (this.value && typeof this.value == 'object') {
            this.hour = this.value.hour || 0;

            if (this.hour > 12 && this.meridian) {
              this.hour -= 12;
              this.kind = 'pm';
            } else {
              this.kind = 'am';
            }

            this.minute = this.value.minute || 0;
            this.set(true);
          } else if (this.value && typeof this.value == 'string') {
            this.value = this.value.toLowerCase().split(' ').join('').split(':');
            this.hour = Number(this.value[0]) || 0;
            this.minute = Number(this.value[1].slice(0, 2)) || 0;

            if (this.meridian) {
              this.kind = this.value[1].slice(2, 4);
            }

            this.set(true);
          }

          if (this.update_on_init) {
            setTimeout(function () {
              _this116.save();
            }, 100);
          }
        }
      }, {
        key: "afterWhile",
        value: function afterWhile() {
          var times = this.time.split(':');

          if (times.length) {
            this.hour = Math.floor(times[0]);
            if (this.hour > 12 && this.meridian) this.hour = 12;
          }

          if (times.length > 1 && times[1]) {
            times = times[1].split(' ');

            if (times[0].length > 1 && times.length > 1 && times[1]) {
              if (times[1] == 'a' || times[1] == 'am') {
                this.kind = 'am';
              } else {
                this.kind = 'pm';
              }
            } else {
              this.kind = null;
            }

            this.minute = Math.floor(times[0]);
          } else {
            this.minute = null;
            this.kind = null;
          }

          this.set();
          this._update = setTimeout(this.save.bind(this), 1000);
        }
      }, {
        key: "save",
        value: function save() {
          if (!this.hour) this.hour = 0;
          if (!this.minute) this.minute = 0;
          if (!this.kind) this.kind = 'am';
          var update = {
            minute: this.minute,
            time: this.time,
            hour: this.hour,
            kind: this.kind,
            second: 0
          };

          if (this.kind == 'pm') {
            update.hour += 12;
          }

          this.update.emit(update);
        }
      }, {
        key: "set",
        value: function set() {
          var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (force) {
            if (!this.hour) this.hour = 0;
            if (!this.minute) this.minute = 0;
            if (!this.kind) this.kind = 'am';
          }

          this.time = '';

          if (typeof this.hour == 'number' && (this.hour > 1 || force)) {
            this.time += (this.hour < 10 && '0' || '') + this.hour + ':';
          } else {
            return this.time += this.hour;
          }

          if (typeof this.minute == 'number' && (this.minute > 9 || this.kind || force)) {
            this.time += (this.minute < 10 && '0' || '') + this.minute;
          } else if (typeof this.minute == 'number') {
            return this.time += this.minute;
          }

          if (this.kind) this.time += ' ' + this.kind;
        }
      }]);

      return TimeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TimeComponent.prototype, "update", void 0);
    TimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'time',
      inputs: ['value', 'meridian', 'update_on_init'],
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./time.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/time/time.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./time.component.scss */
      "./src/app/utils/time/time.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TimeComponent);
    /***/
  },

  /***/
  "./src/app/utils/user/user.component.scss":
  /*!************************************************!*\
    !*** ./src/app/utils/user/user.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilsUserUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n}\n\n.appContainer {\n  width: 100%;\n  height: calculate(100%);\n}\n\n.navbar-dark {\n  /*background-color: #222222 !important;*/\n  padding: 20px !important;\n}\n\n.logo {\n  color: #ee352a !important;\n  width: 50px;\n}\n\n.logo img {\n  position: absolute;\n  top: 5px;\n}\n\n.dropdown-item {\n  background-color: #222222;\n  border: none;\n  color: rgba(255, 255, 255, 0.5);\n  padding: 6px;\n  padding-left: 8px;\n}\n\n.active {\n  /*\n      background-color: #222200;\n   */\n}\n\n.notification-indicator {\n  background-color: #ee352a;\n  color: #f8f8ff;\n  display: inline-block;\n  border-radius: 5px 5px;\n  line-height: 14px;\n  height: 24px;\n  width: 25px;\n  justify-content: center;\n  padding: 5px;\n  margin-right: 10px;\n  text-align: center;\n}\n\n.flyout {\n  /*\n      background-color:#222222;\n   */\n  padding-bottom: 20px;\n  width: 400px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n}\n\n.close-icon {\n  color: #f8f8ff;\n  font-size: 25px;\n  margin-left: auto;\n  float: right;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.user {\n  color: white;\n  font-size: 85px;\n  margin: auto;\n}\n\n.ntf {\n  cursor: pointer;\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  background: #e9e9e9;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease-in-out;\n  color: #17a2b8;\n  box-shadow: 1px 1px 10px #d9d9d9;\n}\n\n.ntf .ntf-icon {\n  margin-top: -1px;\n  font-size: 18px;\n}\n\n.ntf .ntf-body {\n  width: 350px;\n  text-align: center;\n  transform: scale(0);\n  transition: 0.3s ease-in-out;\n  position: absolute;\n  background-color: #fff;\n  right: 0px;\n  bottom: 50px;\n  padding: 20px;\n  border-radius: 15px;\n  box-shadow: 1px 1px 10px #f1ebeb;\n}\n\n.ntf:hover .ntf-body {\n  transform: scale(1);\n  transition: 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1NoYXJlRGF0YS9EZXZlbG9wbWVudC9Hb2QvR29kLUNydXUvc3JjL2FwcC91dGlscy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3V0aWxzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ1I7O0FER0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0k7O0lBQUE7QUNFSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0k7O0lBQUE7RUFHQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQUo7O0FERUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNBUjs7QURHSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0RSOztBRE9RO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5hcHBDb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsY3VsYXRlKDEwMCUpO1xufVxuXG4ubmF2YmFyLWRhcmsge1xuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50OyovXG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gICAgY29sb3I6ICNlZTM1MmEgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTBweDtcblxuICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLmFjdGl2ZSB7XG4gICAgLypcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIwMDtcbiAgICAgKi9cbn1cblxuLm5vdGlmaWNhdGlvbi1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTM1MmE7XG4gICAgY29sb3I6ICNmOGY4ZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmx5b3V0IHtcbiAgICAvKlxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMjIyMjI7XG4gICAgICovXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgICBjb2xvcjogI2Y4ZjhmZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udXNlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogODVweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5udGYge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMTdhMmI4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjZDlkOWQ5O1xuXG4gICAgLm50Zi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5udGYtYm9keSB7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggI2YxZWJlYjtcblxuXG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5udGYtYm9keSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgIH1cbiAgICB9XG59IiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFwcENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGN1bGF0ZSgxMDAlKTtcbn1cblxuLm5hdmJhci1kYXJrIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7Ki9cbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gIGNvbG9yOiAjZWUzNTJhICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmxvZ28gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHBhZGRpbmc6IDZweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5hY3RpdmUge1xuICAvKlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIwMDtcbiAgICovXG59XG5cbi5ub3RpZmljYXRpb24taW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlMzUyYTtcbiAgY29sb3I6ICNmOGY4ZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmx5b3V0IHtcbiAgLypcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzIyMjIyMjtcbiAgICovXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgY29sb3I6ICNmOGY4ZmY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udXNlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA4NXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5udGYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICMxN2EyYjg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjZDlkOWQ5O1xufVxuLm50ZiAubnRmLWljb24ge1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubnRmIC5udGYtYm9keSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICNmMWViZWI7XG59XG4ubnRmOmhvdmVyIC5udGYtYm9keSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/utils/user/user.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/utils/user/user.component.ts ***!
    \**********************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUtilsUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
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


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services */
    "./src/app/services/index.ts");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(storage, us, router, os) {
        _classCallCheck(this, UserComponent);

        this.storage = storage;
        this.us = us;
        this.router = router;
        this.os = os;
        this.title = 'cruu';
        this.loggedIn = false;
        this.expandFlyout = false;
        this.alert = null;
        this.userOrganization = {
          primaryColor: null
        };
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this117 = this;

          this.storage.observe('alert').subscribe(function (data) {
            _this117.alert = data;
            if (_this117.alert.yes || _this117.alert.no) return;
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(5000);
            var alertTimer = source.subscribe(function () {
              _this117.alert = null;
            });
          });
        }
      }, {
        key: "navigateToLoginScreen",
        value: function navigateToLoginScreen() {
          switch (window.location.pathname) {
            case '/reset-password':
            case '/sign-up':
              break;

            default:
              this.router.navigate(['login']);
          }
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.expandFlyout = !this.expandFlyout;
        }
      }, {
        key: "closeAlert",
        value: function closeAlert() {
          this.alert = null;
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.expandFlyout = false;
          this.us.logout();
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.scss */
      "./src/app/utils/user/user.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _services__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]])], UserComponent);
    /***/
  },

  /***/
  "./src/app/utils/util-example/util-example.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/utils/util-example/util-example.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilsUtilExampleUtilExampleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL3V0aWwtZXhhbXBsZS91dGlsLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/utils/util-example/util-example.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/utils/util-example/util-example.component.ts ***!
    \**************************************************************/

  /*! exports provided: UtilExampleComponent */

  /***/
  function srcAppUtilsUtilExampleUtilExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilExampleComponent", function () {
      return UtilExampleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UtilExampleComponent = /*#__PURE__*/function () {
      function UtilExampleComponent() {
        _classCallCheck(this, UtilExampleComponent);
      }

      _createClass(UtilExampleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UtilExampleComponent;
    }();

    UtilExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-util-example',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./util-example.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/util-example/util-example.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./util-example.component.scss */
      "./src/app/utils/util-example/util-example.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UtilExampleComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      //applicationURI: 'http://localhost:8080'
      applicationURI: ''
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/ShareData/Development/God/God-Cruu/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map