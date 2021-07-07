function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
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


    __webpack_exports__["default"] = "<app-header ></app-header>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n<div id=\"bg\">\n    <div class=\"module\">\n        <form class=\"form\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n            <div class=\"card-content\"> <strong>LOGIN</strong></div>\n            <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" ngModel #emailInput=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"textbox\" />\n            <mat-error *ngIf=\"emailInput.hasError('required')&& (emailInput.dirty || emailInput.touched)\">field must not be empty</mat-error>\n            <mat-error *ngIf=\"emailInput.errors && emailInput.errors.pattern\">email is invalid</mat-error>\n        <br>\n            <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" ngModel #pwInput=\"ngModel\" minlength=\"6\" required class=\"textbox\" />\n\n            <mat-error *ngIf=\"pwInput.errors && pwInput.errors.minlength\">should be at least 6 characters long.</mat-error>\n            <br>\n            <button [class.spinner]=\"isLoading\" [disabled]=\"f.invalid || isLoading\" type=\"submit\" mat-raised-button color=\"primary\" class=\"button\">LOGIN</button>\n            Not Yet register? Join us now <a [routerLink]=\"'/Auth/signup'\">Signup</a> \n        </form>\n        \n    </div>\n  \n</div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n<div id=\"bg\">\n    <div class=\"module\">\n       \n        <form class=\"form space\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"card-content\"> <strong>SIGNUP</strong>\n            </div>\n            <input type=\"email\" matInput placeholder=\"Email\" formControlName=\"userName\" [(ngModel)]=\"logininformation.userName\" name=\"userName\" class=\"spaceBetweenControllers textbox\" />\n\n            <mat-error *ngIf=\"ctrl.userName.errors && ctrl.userName?.errors?.pattern\">email is invalid</mat-error>\n\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"logininformation.password\" name=\"password\" class=\"textbox spaceBetweenControllers\" />\n\n            <mat-error *ngIf=\"ctrl.password.errors && (ctrl.password?.dirty || ctrl.password.touched)  && ctrl.password.errors.minlength\">should be at least 6 characters long.</mat-error>\n\n            <div class=\"row \">\n                <div class=\"col s12 m9 l10\">\n                    <input matInput placeholder=\"your birthdate\" [matDatepicker]=\"dp\" formControlName=\"birthdate\" [(ngModel)]=\"logininformation.birthDate\" name=\"birthdate\">\n                </div>\n                <div class=\"col s12 m3 l2\">\n                    <mat-datepicker-toggle class=\"spaceBetweenControllers\" matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n                    <mat-datepicker #dp class=\"spaceBetweenControllers\"></mat-datepicker>\n                </div>\n                <mat-checkbox formControlName=\"rememberMe\" [(ngModel)]=\"logininformation.rememberMe\" name=\"rememberMe\" ngModel>Agree to terms and conditions</mat-checkbox>\n            </div>\n\n            <button [class.spinner]=\"isLoading\" [disabled]=\"form.invalid || isLoading\" type=\"submit\" mat-raised-button color=\"primary\" class=\"button spaceBetweenControllers\">SIGN UP</button>\n\n        </form>\n    </div>\n</div></body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n    <div>\n        <span > TESTPRESS QUIZZ </span>\n    </div>\n        \n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\" fxHide.xs=\"true\">\n            <ul fxLayout fxLayoutGap=\"10px\" class=\"navigation-items header-font\">\n                <li *ngIf=\"!isAuth\">\n                    <a [routerLink]=\"'/Auth/signup'\">\n                        \n                        Signup\n                    </a>\n                </li>\n                <li *ngIf=\"!isAuth\">\n                    <a [routerLink]=\"'/Auth/login'\">\n                        \n                        Login\n                    </a>\n                </li>\n                <li *ngIf=\"isAuth\">\n                    <a class=\"logout\" (click)=\"onLogout()\">\n                        \n                        Logout\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOptionOptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\" required>\n    <mat-radio-button class=\"space-options\" *ngFor=\"let option of currentOptions\" (click)=\"onClick(option)\" [value]=\"option.id\">\n        {{option.text}}\n    </mat-radio-button>\n</mat-radio-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-stepper/quiz-stepper.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-stepper/quiz-stepper.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizStepperQuizStepperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"slack\" *ngIf=\"!pageLoaded\">\n    <span class=\"slack-dot slack-dot--a\">\n    \n        </span><span class=\"slack-dot slack-dot--b\">\n    \n        </span><span class=\"slack-dot slack-dot--c\">\n    \n        </span><span class=\"slack-dot slack-dot--d\"></span>\n</div>\n\n<div class=\"row\" *ngIf=\"pageLoaded\">\n    <div class=\"col s9 push-s3\">\n        <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n    \n            <mat-step *ngFor=\"let question of questions;let i=index\">\n                <form>\n                    <ng-template matStepLabel>Question{{i+1}}</ng-template>\n                    <p> {{question.text}}</p>\n                    <app-option [questionId]=\"question.id\" (optionValueChanged)=\"selectOption($event)\" ></app-option>\n\n                    <div> \n                        <button   mat-flat-button matStepperPrevious  color=\"primary\" *ngIf=\"i+1!=questions.length && i!=0\" (click)=\"prevStep(i-1)\">\n                            <mat-icon>navigate_before</mat-icon>\n                            Back\n                        </button>\n                        <button  mat-flat-button color=\"primary\" mat-button matStepperNext *ngIf=\"i+1!=questions.length\" (click)=\"nextStep(i+1)\">\n                                Next\n                                <mat-icon>navigate_next</mat-icon>\n                        </button>\n                        <button  mat-flat-button matStepperNext [color]=\"'success'\" *ngIf=\"i+1==questions.length\" (click)=\"showResult(i+1)\" [class.spinner]=\"fetchedResult\" [disabled]=\"fetchedResult\">\n                            <a [routerLink]=\"'/Auth/login'\"> Result</a>\n                                <mat-icon>done_all</mat-icon>\n                        </button>\n                    </div>\n                </form>\n            </mat-step>\n\n\n        </mat-vertical-stepper>\n    </div>\n\n    <div class=\"col s3 pull-s9\" >\n        \n<div>Time Ellapsed: {{ellapsedTime}}<br>\n     Total Time: 10 mins\n</div>\n        <app-progress></app-progress>\n\n    </div>\n   \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/not-found/not-found.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/not-found/not-found.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"board\">\n    <p id=\"error\">\n      error\n    </p>\n    <p id=\"code\">\n      404\n    </p>\n  </div>\n  \n<div class=\"container\">\n\n    <div class=\"error404page\">\n        <div class=\"newcharacter404\">\n            <div class=\"chair404\"></div>\n            <div class=\"leftshoe404\"></div>\n            <div class=\"rightshoe404\"></div>\n            <div class=\"legs404\"></div>\n            <div class=\"torso404\">\n                <div class=\"body404\"></div>\n                <div class=\"leftarm404\"></div>\n                <div class=\"rightarm404\"></div>\n                <div class=\"head404\">\n                    <div class=\"eyes404\"></div>\n                </div>\n            </div>\n            <div class=\"laptop404\"></div>\n        </div>\n    </div>\n</div> \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utility/progress/progress.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility/progress/progress.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilityProgressProgressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-card class=\"example-card\">\n    <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Summary</mat-card-title>\n\n    </mat-card-header>\n    <!-- TO DO... -->\n    <img mat-card-image src=\"../../../assets/img/56990-middle.png\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n        <p class=\"message\">\n            {{message}}\n        </p>\n\n        <span class=\"percentage\">{{percentage}}% Completed</span>\n        <mat-progress-bar mode=\"determinate\" [value]=\"percentage\" #progressbar></mat-progress-bar>\n    </mat-card-content>\n    <mat-card-actions>\n\n    </mat-card-actions>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<html>\n<div class=\"row center\">\n        <div class=\"slide-container\">\n            <div class=\"wrapper\">\n                <div class=\"clash-card barbarian\">\n                    <div class=\"clash-card__unit-description\">\n                        click start to start your quiz\n                    </div>\n                    \n                    <div class=\"clash-card__unit-name\">\n                        <a [routerLink]=\"'/quizStepper'\">\n                            start \n                        </a>\n                    </div>\n                    \n\n                    <div class=\"clash-card__unit-stats clash-card__unit-stats--archer clearfix\">\n                        <div class=\"one-third\">\n                            <div class=\"stat\">20<sup>S</sup></div>\n                            <div class=\"stat-value\">Time</div>\n                        </div>\n\n                        <div class=\"one-third\">\n                            <div class=\"stat\">10</div>\n                            <div class=\"stat-value\">Questions</div>\n                        </div>\n\n                        <div class=\"one-third no-border\">\n                            <div class=\"stat\">4</div>\n                            <div class=\"stat-value\">Options</div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n</html>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

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
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
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

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
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
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _quiz_stepper_quiz_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./quiz-stepper/quiz-stepper.component */
    "./src/app/quiz-stepper/quiz-stepper.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");

    var routes = [{
      path: '',
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'welcome',
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    }, {
      path: 'quizStepper',
      component: _quiz_stepper_quiz_stepper_component__WEBPACK_IMPORTED_MODULE_4__["QuizStepperComponent"]
    }, {
      path: 'Auth',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }, {
      path: '**',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./shared/shared/shared.module */
        "./src/app/shared/shared/shared.module.ts")).then(function (m) {
          return m.SharedModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {};

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".displayGrid{\n    display: grid\n}\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXlHcmlke1xuICAgIGRpc3BsYXk6IGdyaWRcbn1cbiAiXX0= */";
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        this.authService = authService;
        this.title = 'quiz';
      }

      var _proto = AppComponent.prototype;

      _proto.ngOnInit = function ngOnInit() {
        this.authService.initAuthListener();
      };

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _quiz_stepper_quiz_stepper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./quiz-stepper/quiz-stepper.component */
    "./src/app/quiz-stepper/quiz-stepper.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navigation/header/header.component */
    "./src/app/navigation/header/header.component.ts");
    /* harmony import */


    var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/shared/shared.module */
    "./src/app/shared/shared/shared.module.ts");
    /* harmony import */


    var _utility_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./utility/progress/progress.component */
    "./src/app/utility/progress/progress.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _option_option_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./option/option.component */
    "./src/app/option/option.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_ui_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/ui.service */
    "./src/app/services/ui.service.ts");

    var AppModule = function AppModule() {};

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], _quiz_stepper_quiz_stepper_component__WEBPACK_IMPORTED_MODULE_9__["QuizStepperComponent"], _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _utility_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__["ProgressComponent"], _option_option_component__WEBPACK_IMPORTED_MODULE_15__["OptionComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
        positionClass: 'toast-top-center',
        timeOut: 5000
      }), _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_18__["AuthModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_ui_service__WEBPACK_IMPORTED_MODULE_22__["UIService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");

    var routes = [{
      path: '',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];

    var AuthModule = function AuthModule() {};

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* mat-form-field {\n    width: 300px;\n} */\n\n.space{\n    margin-top: 20px !important;\n}\n\n.card-content h3 {\n    font-size: 30px;\n    margin-bottom: 0;\n    color: #303F9F;\n    font-family: 'Montserrat', sans-serif;\n    margin: revert;\n  }\n\n* { \n    margin: 0;\n    padding: 0;\n    \n}\n\nbody {\n    font-family: helvetica;\n    background-image: url('J4o.gif');\n}\n\na {\n    display: block;\n    color: blue;\n    text-decoration: none;\n    font-weight: bold;\n    text-align: right;\n}\n\n#bg {\n    position: relative;\n    top: 20px;\n    height: 600px;\n    width: 800px;\n    background-size: cover;\n    margin-left: auto;\n    margin-right: auto;  \n}\n\n.module {\n    position: relative;\n    top: 15%;\n    height: 70%;\n    width: 450px;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 5px;\n    background-color: slategray;\n   \n    color: white;\n    font-size: 100%;\n    font-weight: 500;\n}\n\n.module ul {\n    list-style-type: none;\n    margin: 0;\n}\n\n.tab {\n    float: left;\n    height: 60px;\n    width: 25%;\n    padding-top: 20px;\n    box-sizing: border-box;\n    background: #eeeeee;\n    text-align: center;\n    cursor: pointer;\n     \n}\n\n.tab:first-child {\n    border-radius: 5px 0px 0px 0px;\n}\n\n.tab:last-child {\n    border-radius: 0px 5px 0px 0px;\n}\n\n.tab:hover {\n    background-color: rgba(0, 0, 0, .1);\n}\n\n.activeTab {\n    background: #fff;\n}\n\n.activeTab .icon {\n    opacity: 1;\n}\n\n.icon {\n    height: 24px;\n    width: 24px;\n    opacity: .2;\n}\n\n.form {\n    float: left;\n    height: 86%;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 40px;\n    \n}\n\n.textbox {\n    height: 50px;\n    width: 100%;\n    border-radius: 3px;\n    border: rgba(0, 0, 0, .3) 2px solid;\n    box-sizing: border-box;\n    padding: 10px;\n    margin-bottom: 30px;\n}\n\n.textbox:focus {\n    outline: none;\n    border: rgba(24, 149, 215, 1) 2px solid;\n    color: rgba(24, 149, 215, 1);\n}\n\n.button {\n    height: 50px;\n    width: 100%;\n    border-radius: 3px;\n    border: rgba(0, 0, 0, .3) 0px solid;\n    box-sizing: border-box;\n    padding: 10px;\n    margin-bottom: 30px;\n    background: blue;\n    color: #FFF;\n    font-weight: bold;\n    font-size: 12pt;\n    cursor: pointer;\n}\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQ0FBcUM7SUFDckMsY0FBYztFQUNoQjs7QUFHRjtJQUNJLFNBQVM7SUFDVCxVQUFVOztBQUVkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdDQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMkJBQTJCOztJQUUzQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6ImFwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xufSAqL1xuXG4uc3BhY2V7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtY29udGVudCBoMyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6ICMzMDNGOUY7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IHJldmVydDtcbiAgfVxuXG5cbiogeyBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9KNG8uZ2lmKTtcbn1cblxuYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jYmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87ICBcbn1cblxuLm1vZHVsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcbiAgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1vZHVsZSB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRhYiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgIFxufVxuXG4udGFiOmZpcnN0LWNoaWxkIHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCAwcHg7XG59XG5cbi50YWI6bGFzdC1jaGlsZCB7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggNXB4IDBweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCAwcHggMHB4O1xufVxuXG4udGFiOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cblxuLmFjdGl2ZVRhYiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmFjdGl2ZVRhYiAuaWNvbiB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmljb24ge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBvcGFjaXR5OiAuMjtcbn1cblxuLmZvcm0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogODYlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBcbn1cblxuLnRleHRib3gge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiByZ2JhKDAsIDAsIDAsIC4zKSAycHggc29saWQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50ZXh0Ym94OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogcmdiYSgyNCwgMTQ5LCAyMTUsIDEpIDJweCBzb2xpZDtcbiAgICBjb2xvcjogcmdiYSgyNCwgMTQ5LCAyMTUsIDEpO1xufVxuXG4uYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogcmdiYSgwLCAwLCAwLCAuMykgMHB4IHNvbGlkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, uiService) {
        this.authService = authService;
        this.uiService = uiService;
        this.isLoading = false;
      }

      var _proto2 = LoginComponent.prototype;

      _proto2.ngOnInit = function ngOnInit() {
        var _this = this;

        this.loadingSubs = this.uiService.loadingStateChanged.subscribe(function (isLoaded) {
          _this.isLoading = isLoaded;
        });
      };

      _proto2.onSubmit = function onSubmit(form) {
        this.isLoading = true;
        this.authService.login({
          email: form.value.email,
          password: form.value.password
        });
      };

      _proto2.ngOnDestroy = function ngOnDestroy() {
        if (this.loadingSubs) {
          this.loadingSubs.unsubscribe();
        }
      };

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UIService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/auth/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "                                    /* ffinal */\n                                    .space{\n                                        margin-top: 20px !important;\n                                    }\n                                    .card-content h3 {\n                                        font-size: 25px;\n                                        margin-bottom: 0;\n                                        color: #303F9F;\n                                        font-family: 'Montserrat', sans-serif;\n                                        margin: revert;\n                                      }\n                                    .spaceBetweenControllers{\n                                            margin: 20px 0px !important;\n                                    }\n                                    mat-form-field {\n                                        width: 300px;\n                                    }\n                                    * {\n                                        margin: 0;\n                                        padding: 0;\n                                    }\n                                    body {\n                                        background-image: url('J4o.gif');\n                                        font-family: helvetica;\n                                    }\n                                    a {\n                                        display: block;\n                                        color: #ad5482;\n                                        text-decoration: none;\n                                        font-weight: bold;\n                                        margin-top: 40px;\n                                        text-align: center;\n                                    }\n                                    #bg {\n                                        position: relative;\n                                        top: 20px;\n                                        height: 600px;\n                                        width: 800px;\n                                        background-size: cover;\n                                        margin-left: auto;\n                                        margin-right: auto;\n        \n                                    }\n                                    .module {\n                                        position: relative;\n                                        top: 15%;\n                                        height: 70%;\n                                        width: 450px;\n                                        margin-left: auto;\n                                        margin-right: auto;\n                                        border-radius: 5px;\n                                        background-color: slategray;\n   \n                                        color: white;\n                                        font-size: 100%;\n                                        font-weight: 500;\n                                    }\n                                    .module ul {\n                                        list-style-type: none;\n                                        margin: 0;\n                                    }\n                                    .tab {\n                                        float: left;\n                                        height: 60px;\n                                        width: 25%;\n                                        padding-top: 20px;\n                                        box-sizing: border-box;\n                                        background: #eeeeee;\n                                        text-align: center;\n                                        cursor: pointer;\n                                        \n                                    }\n                                    .tab:first-child {\n                                        border-radius: 5px 0px 0px 0px;\n                                    }\n                                    .tab:last-child {\n                                        border-radius: 0px 5px 0px 0px;\n                                    }\n                                    .tab:hover {\n                                        background-color: rgba(0, 0, 0, .1);\n                                    }\n                                    .activeTab {\n                                        background: #fff;\n                                    }\n                                    .activeTab .icon {\n                                        opacity: 1;\n                                    }\n                                    .icon {\n                                        height: 24px;\n                                        width: 24px;\n                                        opacity: .2;\n                                    }\n                                    .form {\n                                        float: left;\n                                        height: 86%;\n                                        width: 100%;\n                                        box-sizing: border-box;\n                                        padding: 40px;\n                                    }\n                                    .textbox {\n                                        height: 50px;\n                                        width: 100%;\n                                        border-radius: 3px;\n                                        border: rgba(0, 0, 0, .3) 2px solid;\n                                        box-sizing: border-box;\n                                        padding: 10px;\n                                        margin-bottom: 30px;\n                                    }\n                                    .textbox:focus {\n                                        outline: none;\n                                        border: rgba(24, 149, 215, 1) 2px solid;\n                                        color: rgba(24, 149, 215, 1);\n                                    }\n                                    .button {\n                                        height: 50px;\n                                        width: 100%;\n                                        border-radius: 3px;\n                                        border: rgba(0, 0, 0, .3) 0px solid;\n                                        box-sizing: border-box;\n                                        padding: 10px;\n                                        margin-bottom: 30px;\n                                        background: blue;\n                                        color: #FFF;\n                                        font-weight: bold;\n                                        font-size: 12pt;\n                                        cursor: pointer;\n                                    }\n                                    .submit {\n                                        margin-top: 20px;\n                                    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib0NBQW9DLFdBQVc7b0NBQ1g7d0NBQ0ksMkJBQTJCO29DQUMvQjtvQ0FDQTt3Q0FDSSxlQUFlO3dDQUNmLGdCQUFnQjt3Q0FDaEIsY0FBYzt3Q0FDZCxxQ0FBcUM7d0NBQ3JDLGNBQWM7c0NBQ2hCO29DQUdGOzRDQUNRLDJCQUEyQjtvQ0FDbkM7b0NBRUE7d0NBQ0ksWUFBWTtvQ0FDaEI7b0NBRUE7d0NBQ0ksU0FBUzt3Q0FDVCxVQUFVO29DQUNkO29DQUVBO3dDQUNJLGdDQUFrRDt3Q0FDbEQsc0JBQXNCO29DQUMxQjtvQ0FFQTt3Q0FDSSxjQUFjO3dDQUNkLGNBQWM7d0NBQ2QscUJBQXFCO3dDQUNyQixpQkFBaUI7d0NBQ2pCLGdCQUFnQjt3Q0FDaEIsa0JBQWtCO29DQUN0QjtvQ0FFQTt3Q0FDSSxrQkFBa0I7d0NBQ2xCLFNBQVM7d0NBQ1QsYUFBYTt3Q0FDYixZQUFZO3dDQUNaLHNCQUFzQjt3Q0FDdEIsaUJBQWlCO3dDQUNqQixrQkFBa0I7O29DQUV0QjtvQ0FFQTt3Q0FDSSxrQkFBa0I7d0NBQ2xCLFFBQVE7d0NBQ1IsV0FBVzt3Q0FDWCxZQUFZO3dDQUNaLGlCQUFpQjt3Q0FDakIsa0JBQWtCO3dDQUNsQixrQkFBa0I7d0NBQ2xCLDJCQUEyQjs7d0NBRTNCLFlBQVk7d0NBQ1osZUFBZTt3Q0FDZixnQkFBZ0I7b0NBQ3BCO29DQUVBO3dDQUNJLHFCQUFxQjt3Q0FDckIsU0FBUztvQ0FDYjtvQ0FFQTt3Q0FDSSxXQUFXO3dDQUNYLFlBQVk7d0NBQ1osVUFBVTt3Q0FDVixpQkFBaUI7d0NBQ2pCLHNCQUFzQjt3Q0FDdEIsbUJBQW1CO3dDQUNuQixrQkFBa0I7d0NBQ2xCLGVBQWU7O29DQUVuQjtvQ0FFQTt3Q0FFSSw4QkFBOEI7b0NBQ2xDO29DQUVBO3dDQUVJLDhCQUE4QjtvQ0FDbEM7b0NBRUE7d0NBQ0ksbUNBQW1DO29DQUN2QztvQ0FFQTt3Q0FDSSxnQkFBZ0I7b0NBQ3BCO29DQUVBO3dDQUNJLFVBQVU7b0NBQ2Q7b0NBRUE7d0NBQ0ksWUFBWTt3Q0FDWixXQUFXO3dDQUNYLFdBQVc7b0NBQ2Y7b0NBRUE7d0NBQ0ksV0FBVzt3Q0FDWCxXQUFXO3dDQUNYLFdBQVc7d0NBQ1gsc0JBQXNCO3dDQUN0QixhQUFhO29DQUNqQjtvQ0FFQTt3Q0FDSSxZQUFZO3dDQUNaLFdBQVc7d0NBQ1gsa0JBQWtCO3dDQUNsQixtQ0FBbUM7d0NBQ25DLHNCQUFzQjt3Q0FDdEIsYUFBYTt3Q0FDYixtQkFBbUI7b0NBQ3ZCO29DQUVBO3dDQUNJLGFBQWE7d0NBQ2IsdUNBQXVDO3dDQUN2Qyw0QkFBNEI7b0NBQ2hDO29DQUVBO3dDQUNJLFlBQVk7d0NBQ1osV0FBVzt3Q0FDWCxrQkFBa0I7d0NBQ2xCLG1DQUFtQzt3Q0FDbkMsc0JBQXNCO3dDQUN0QixhQUFhO3dDQUNiLG1CQUFtQjt3Q0FDbkIsZ0JBQWdCO3dDQUNoQixXQUFXO3dDQUNYLGlCQUFpQjt3Q0FDakIsZUFBZTt3Q0FDZixlQUFlO29DQUNuQjtvQ0FJQTt3Q0FDSSxnQkFBZ0I7b0NBQ3BCIiwiZmlsZSI6ImFwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZmaW5hbCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwYWNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzAzRjlGO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiByZXZlcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BhY2VCZXR3ZWVuQ29udHJvbGxlcnN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL0o0by5naWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYWQ1NDgyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2JnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vZHVsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcbiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vZHVsZSB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRhYiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50YWI6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRhYjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCA1cHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50YWI6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZlVGFiIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZlVGFiIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NiU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dGJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHJnYmEoMCwgMCwgMCwgLjMpIDJweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRib3g6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiByZ2JhKDI0LCAxNDksIDIxNSwgMSkgMnB4IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI0LCAxNDksIDIxNSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiByZ2JhKDAsIDAsIDAsIC4zKSAwcHggc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3VibWl0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_loginInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/loginInfo */
    "./src/app/models/loginInfo.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(authService, uiService, formBuilder) {
        this.authService = authService;
        this.uiService = uiService;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.logininformation = new src_app_models_loginInfo__WEBPACK_IMPORTED_MODULE_5__["LoginInfo"]();
      }

      var _proto3 = SignupComponent.prototype;

      _proto3.ngOnInit = function ngOnInit() {
        var _this2 = this;

        this.loadingSubs = this.uiService.loadingStateChanged.subscribe(function (isLoaded) {
          _this2.isLoading = isLoaded;
        });
        this.logininformation = new src_app_models_loginInfo__WEBPACK_IMPORTED_MODULE_5__["LoginInfo"]();
        this.form = this.formBuilder.group({
          userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
          birthdate: [''],
          rememberMe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
      };

      _proto3.onSubmit = function onSubmit() {
        this.isLoading = true;
        this.authService.register({
          email: this.logininformation.userName,
          password: this.logininformation.password
        });
      };

      _proto3.ngOnDestroy = function ngOnDestroy() {
        if (this.loadingSubs) {
          this.loadingSubs.unsubscribe();
        }
      };

      _createClass(SignupComponent, [{
        key: "ctrl",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UIService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/auth/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
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


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");

    var MaterialModule = function MaterialModule() {};

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"]],
      exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/models/loginInfo.ts":
  /*!*************************************!*\
    !*** ./src/app/models/loginInfo.ts ***!
    \*************************************/

  /*! exports provided: LoginInfo */

  /***/
  function srcAppModelsLoginInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginInfo", function () {
      return LoginInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); //ffinal


    var LoginInfo = function LoginInfo() {
      this.userName = '';
      this.password = '';
    };
    /***/

  },

  /***/
  "./src/app/models/progress.ts":
  /*!************************************!*\
    !*** ./src/app/models/progress.ts ***!
    \************************************/

  /*! exports provided: Progress */

  /***/
  function srcAppModelsProgressTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Progress", function () {
      return Progress;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Progress = function Progress() {};
    /***/

  },

  /***/
  "./src/app/navigation/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/navigation/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-sidenav-container,\nmat-sidenav-content,\nmat-sidenav {\n    height: 100%;\n}\n\nmat-sidenav {\n    width: 250px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\na:hover,\na:active {\n    color: lightgray;\n}\n\n.navigation-items {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.nav-caption {\n    display: inline-block;\n    padding-left: 6px;\n}\n\n.logout {\n    cursor: pointer;\n    font-size: 15px;\n}\n\n.header-font {\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLFxubWF0LXNpZGVuYXYtY29udGVudCxcbm1hdC1zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm5hdmlnYXRpb24taXRlbXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5uYXYtY2FwdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4ubG9nb3V0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaGVhZGVyLWZvbnQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navigation/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/navigation/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppNavigationHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService) {
        this.authService = authService;
        this.isAuth = false;
      }

      var _proto4 = HeaderComponent.prototype;

      _proto4.ngOnInit = function ngOnInit() {
        var _this3 = this;

        this.authSubscription = this.authService.authChange.subscribe(function (authStatus) {
          _this3.isAuth = authStatus;
        });
      };

      _proto4.onLogout = function onLogout() {
        this.authService.logout();
      };

      _proto4.ngOnDestroy = function ngOnDestroy() {
        this.authSubscription.unsubscribe();
      };

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/navigation/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/option/option.component.css":
  /*!*********************************************!*\
    !*** ./src/app/option/option.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOptionOptionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".space-options {\n    margin: 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vcHRpb24vb3B0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiYXBwL29wdGlvbi9vcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZS1vcHRpb25zIHtcbiAgICBtYXJnaW46IDEwcHggMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/option/option.component.ts":
  /*!********************************************!*\
    !*** ./src/app/option/option.component.ts ***!
    \********************************************/

  /*! exports provided: OptionComponent */

  /***/
  function srcAppOptionOptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionComponent", function () {
      return OptionComponent;
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


    var _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/quiz.service */
    "./src/app/services/quiz.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var OptionComponent =
    /*#__PURE__*/
    function () {
      function OptionComponent(quizService, toastr) {
        this.quizService = quizService;
        this.toastr = toastr;
        this.activeState = 'Draft';
        this.optionValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      var _proto5 = OptionComponent.prototype;

      _proto5.ngOnInit = function ngOnInit() {
        this.fillCurrentOptions(this.questionId);
      };

      _proto5.fillCurrentOptions = function fillCurrentOptions(questionId) {
        var _this4 = this;

        this.optionSubscription = this.quizService.getOptions().subscribe(function (result) {
          _this4.allAptions = result;
          _this4.currentOptions = _this4.allAptions.filter(function (item) {
            return item.questionId == questionId;
          });
        }, function (error) {
          _this4.toastr.error("error in loading question's options");
        });
      };

      _proto5.onClick = function onClick(option) {
        this.optionValueChanged.emit(option);
      };

      _proto5.ngOnDestroy = function ngOnDestroy() {
        this.optionSubscription.unsubscribe();
      };

      return OptionComponent;
    }();

    OptionComponent.ctorParameters = function () {
      return [{
        type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OptionComponent.prototype, "questionId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], OptionComponent.prototype, "optionValueChanged", void 0);
    OptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-option',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./option.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/option/option.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./option.component.css */
      "./src/app/option/option.component.css")).default]
    })], OptionComponent);
    /***/
  },

  /***/
  "./src/app/quiz-stepper/quiz-stepper.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/quiz-stepper/quiz-stepper.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizStepperQuizStepperComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n    margin: 10px\n}\n.row{\n    align-items: center;\n}\n.iscorrect {\n    background: #9ACD32;\n    color: white;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9xdWl6LXN0ZXBwZXIvcXVpei1zdGVwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFHRTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2QiLCJmaWxlIjoiYXBwL3F1aXotc3RlcHBlci9xdWl6LXN0ZXBwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4XG59XG4ucm93e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiAgXG4gIC5pc2NvcnJlY3Qge1xuICAgIGJhY2tncm91bmQ6ICM5QUNEMzI7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/quiz-stepper/quiz-stepper.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/quiz-stepper/quiz-stepper.component.ts ***!
    \********************************************************/

  /*! exports provided: QuizStepperComponent */

  /***/
  function srcAppQuizStepperQuizStepperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizStepperComponent", function () {
      return QuizStepperComponent;
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


    var _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/quiz.service */
    "./src/app/services/quiz.service.ts");
    /* harmony import */


    var _services_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/progress.service */
    "./src/app/services/progress.service.ts");
    /* harmony import */


    var _models_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/progress */
    "./src/app/models/progress.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var QuizStepperComponent =
    /*#__PURE__*/
    function () {
      function QuizStepperComponent(quizService, progressService, toastr) {
        this.quizService = quizService;
        this.progressService = progressService;
        this.toastr = toastr;
        this.isLinear = false;
        this.fetchedResult = false;
        this.pageLoaded = false;
        this.selectedOptions = new Array();
        this.timer = null;
        this.ellapsedTime = '00:00';
      }

      var _proto6 = QuizStepperComponent.prototype;

      _proto6.ngOnInit = function ngOnInit() {
        this.getQuestions();
      };

      _proto6.getQuestions = function getQuestions() {
        var _this5 = this;

        this.quizSubscription = this.quizService.getQuestions().subscribe(function (result) {
          _this5.questions = result;
          _this5.pageLoaded = true;
          _this5.startTime = new Date();
          _this5.ellapsedTime = '00:00';
          _this5.timer = setInterval(function () {
            _this5.tick();
          }, 1000);
          _this5.duration = _this5.parseTime(_this5.durations);
        }, function (error) {
          _this5.pageLoaded = true;

          _this5.toastr.error("error in loading questions");
        } // ,()=>{
        //   this.pageLoaded = true;
        // }
        );
      };

      _proto6.tick = function tick() {
        var now = new Date();
        var diff = (now.getTime() - this.startTime.getTime()) / 1000;
        this.ellapsedTime = this.parseTime(diff);
      };

      _proto6.parseTime = function parseTime(totalSeconds) {
        var mins = Math.floor(totalSeconds / 60);
        var secs = Math.round(totalSeconds % 60);
        mins = (mins < 10 ? '0' : '') + mins;
        secs = (secs < 10 ? '0' : '') + secs;
        return mins + ":" + secs;
      };

      _proto6.showResult = function showResult(step) {
        var _this6 = this;

        this.nextStep(step);
        this.fetchedResult = true;
        var correct = 0;
        var totalQuestions = this.questions.length;
        setTimeout(function () {
          for (var index = 0; index < _this6.selectedOptions.length; index++) {
            if (_this6.selectedOptions[index].isCorrectAnswer == true) correct++;
          } //tostr result


          if (correct == totalQuestions) {
            _this6.toastr.success("congratulation!your score is: " + correct + "/" + totalQuestions + " \n        Time taken is " + _this6.ellapsedTime);
          } else {
            _this6.toastr.info("your score is: " + correct + "/" + totalQuestions + " \n         Time taken is " + _this6.ellapsedTime);
          }
        }, 2000);
      };

      _proto6.ngOnDestroy = function ngOnDestroy() {
        this.quizSubscription.unsubscribe();
      } /////////////////////////////Card Methods///////////////////////////////
      ;

      _proto6.nextStep = function nextStep(step) {
        this.sendProgressInfo(step);
      };

      _proto6.prevStep = function prevStep(step) {
        this.sendProgressInfo(step);
      };

      _proto6.sendProgressInfo = function sendProgressInfo(step) {
        var progress = new _models_progress__WEBPACK_IMPORTED_MODULE_4__["Progress"]();
        progress.stepNumber = step;
        progress.totalSteps = this.questions.length;
        this.progressService.isProgressing.next(progress);
      } ///////////////////////Option Event/////////////////////////////////////
      ;

      _proto6.selectOption = function selectOption(newOption) {
        var availableOption = this.checkAvailability(newOption);

        if (availableOption == undefined || availableOption.length == 0) {
          //if new option does not exist in list, add it to list
          this.selectedOptions.push(newOption);
        } else {
          //if exists and user change the answer, new answer will be overwrite on it
          var existedOption = this.selectedOptions.find(function (option) {
            return option.questionId == option.questionId;
          });
          var existedOptionIndex = this.selectedOptions.indexOf(existedOption);

          if (existedOptionIndex !== -1) {
            this.selectedOptions.splice(existedOptionIndex, 1);
            this.selectedOptions.push(newOption);
          }

          var index = this.selectedOptions.indexOf(newOption);
          this.selectedOptions[index] = newOption;
        }
      };

      _proto6.checkAvailability = function checkAvailability(item) {
        return this.selectedOptions.filter(function (option) {
          return option.questionId == item.questionId;
        });
      };

      return QuizStepperComponent;
    }();

    QuizStepperComponent.ctorParameters = function () {
      return [{
        type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]
      }, {
        type: _services_progress_service__WEBPACK_IMPORTED_MODULE_3__["ProgressService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    QuizStepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-stepper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quiz-stepper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-stepper/quiz-stepper.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quiz-stepper.component.css */
      "./src/app/quiz-stepper/quiz-stepper.component.css")).default]
    })], QuizStepperComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ui.service */
    "./src/app/services/ui.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router, fireAuth, uiService) {
        this.router = router;
        this.fireAuth = fireAuth;
        this.uiService = uiService;
        this.isAuthenticated = false;
        this.authChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      var _proto7 = AuthService.prototype;

      _proto7.register = function register(user) {
        var _this7 = this;

        this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function (result) {
          _this7.uiService.loadingStateChanged.next(false);
        }).catch(function (error) {
          _this7.uiService.loadingStateChanged.next(false);

          _this7.uiService.showSnackbar(error.message, null, 3000);
        });
      };

      _proto7.login = function login(user) {
        var _this8 = this;

        this.uiService.loadingStateChanged.next(true);
        this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(function (result) {
          _this8.uiService.loadingStateChanged.next(false);
        }).catch(function (error) {
          _this8.uiService.loadingStateChanged.next(false);

          _this8.uiService.showSnackbar(error.message, null, 3000);
        });
      };

      _proto7.logout = function logout() {
        this.fireAuth.auth.signOut();
      };

      _proto7.isAuth = function isAuth() {
        return this.isAuthenticated;
      };

      _proto7.initAuthListener = function initAuthListener() {
        var _this9 = this;

        this.fireAuth.authState.subscribe(function (user) {
          if (user) {
            _this9.isAuthenticated = true;

            _this9.authChange.next(true);

            _this9.router.navigate(['/welcome']);
          } else {
            _this9.authChange.next(false);

            _this9.router.navigate(['/']);

            _this9.isAuthenticated = false;
          }
        });
      };

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _ui_service__WEBPACK_IMPORTED_MODULE_5__["UIService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/progress.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/progress.service.ts ***!
    \**********************************************/

  /*! exports provided: ProgressService */

  /***/
  function srcAppServicesProgressServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressService", function () {
      return ProgressService;
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

    var ProgressService = function ProgressService() {
      this.isProgressing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    };

    ProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProgressService);
    /***/
  },

  /***/
  "./src/app/services/quiz.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/quiz.service.ts ***!
    \******************************************/

  /*! exports provided: QuizService */

  /***/
  function srcAppServicesQuizServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizService", function () {
      return QuizService;
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

    var QuizService =
    /*#__PURE__*/
    function () {
      function QuizService(http) {
        this.http = http;
      }

      var _proto8 = QuizService.prototype;

      _proto8.getQuestions = function getQuestions() {
        return this.http.get(" http://demo7538098.mockable.io/quizquestio");
      };

      _proto8.getOptions = function getOptions() {
        return this.http.get("http://demo3245670.mockable.io/quizoptio");
      };

      return QuizService;
    }();

    QuizService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuizService);
    /***/
  },

  /***/
  "./src/app/services/ui.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/ui.service.ts ***!
    \****************************************/

  /*! exports provided: UIService */

  /***/
  function srcAppServicesUiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIService", function () {
      return UIService;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UIService =
    /*#__PURE__*/
    function () {
      function UIService(snackbar) {
        this.snackbar = snackbar;
        this.loadingStateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      var _proto9 = UIService.prototype;

      _proto9.showSnackbar = function showSnackbar(message, action, duration) {
        this.snackbar.open(message, action, {
          duration: duration
        });
      };

      return UIService;
    }();

    UIService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    UIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], UIService);
    /***/
  },

  /***/
  "./src/app/shared/not-found/not-found.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/shared/not-found/not-found.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \na, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-weight: inherit;\n    font-style: inherit;\n    font-family: inherit;\n    vertical-align: baseline;\n  }\n  \n  body {\n    line-height: 1;\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n  \n  blockquote, q {\n    quotes: none;\n  }\n  \n  blockquote:after, blockquote:before, q:after, q:before {\n    content: '';\n    content: none;\n  }\n  \n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  \n  :focus {\n    outline: 0;\n  }\n  \n  html {\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n  \n  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  \n  audio, canvas, picture, progress, video {\n    display: inline-block;\n  }\n  \n  template {\n    display: none;\n  }\n  \n  input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration, input[type=search]::-webkit-search-results-button, input[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n  }\n  \n  input[type=search] {\n    -webkit-appearance: none;\n    box-sizing: content-box;\n  }\n  \n  textarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n  }\n  \n  ::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n  \n  body {\n    background-color: #333;\n    font-family: 'Quicksand', sans-serif;\n  }\n  \n  .hidden {\n    display: none;\n  }\n  \n  .u-isVisuallyHidden {\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    border: 0;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n  \n  .footer {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n  \n  .withanes {\n    display: block;\n    position: absolute;\n    right: 5px;\n    bottom: 5px;\n    width: 24px;\n    height: 32px;\n  }\n  \n  .withanes:after {\n    content: '';\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    width: 2px;\n    height: 2px;\n    box-shadow: 8px 2px #795f41, 10px 2px #795f41, 12px 2px #795f41, 14px 2px #795f41, 16px 2px #795f41, 18px 2px #795f41, 6px 4px #795f41, 8px 4px #795f41, 10px 4px #795f41, 12px 4px #795f41, 14px 4px #795f41, 16px 4px #795f41, 18px 4px #795f41, 20px 4px #795f41, 4px 6px #795f41, 6px 6px #795f41, 8px 6px #e9d8bc, 10px 6px #795f41, 12px 6px #795f41, 14px 6px #795f41, 16px 6px #795f41, 18px 6px #cbb490, 20px 6px #795f41, 22px 6px #795f41, 4px 8px #795f41, 6px 8px #e9d8bc, 8px 8px #e0c9a4, 10px 8px #e0c9a4, 12px 8px #e0c9a4, 14px 8px #e0c9a4, 16px 8px #e0c9a4, 18px 8px #cbb490, 20px 8px #cbb490, 22px 8px #795f41, 2px 10px #7e6f5d, 4px 10px #e9d8bc, 6px 10px #e0c9a4, 8px 10px #e0c9a4, 10px 10px #e0c9a4, 12px 10px #e0c9a4, 14px 10px #e0c9a4, 16px 10px #e0c9a4, 18px 10px #e0c9a4, 20px 10px #cbb490, 22px 10px #cbb490, 24px 10px #7e6f5d, 2px 12px #7e6f5d, 4px 12px #e9d8bc, 6px 12px #e0c9a4, 8px 12px #e0c9a4, 10px 12px #e0c9a4, 12px 12px #e0c9a4, 14px 12px #e0c9a4, 16px 12px #e0c9a4, 18px 12px #e0c9a4, 20px 12px #e0c9a4, 22px 12px #cbb490, 24px 12px #7e6f5d, 2px 14px #7e6f5d, 4px 14px #e9d8bc, 6px 14px #e0c9a4, 8px 14px #cbb490, 10px 14px #cbb490, 12px 14px #e0c9a4, 14px 14px #e0c9a4, 16px 14px #cbb490, 18px 14px #cbb490, 20px 14px #e0c9a4, 22px 14px #cbb490, 24px 14px #7e6f5d, 2px 16px #b6a281, 4px 16px #e9d8bc, 6px 16px #e0c9a4, 8px 16px #000000, 10px 16px #000000, 12px 16px #e9d8bc, 14px 16px #e0c9a4, 16px 16px #000000, 18px 16px #000000, 20px 16px #e0c9a4, 22px 16px #cbb490, 24px 16px #b6a281, 2px 18px #cbb490, 4px 18px #e9d8bc, 6px 18px #e0c9a4, 8px 18px #e0c9a4, 10px 18px #e0c9a4, 12px 18px #e9d8bc, 14px 18px #e0c9a4, 16px 18px #e0c9a4, 18px 18px #e0c9a4, 20px 18px #e0c9a4, 22px 18px #cbb490, 24px 18px #cbb490, 4px 20px #795f41, 6px 20px #e0c9a4, 8px 20px #e0c9a4, 10px 20px #e0c9a4, 12px 20px #e9d8bc, 14px 20px #e0c9a4, 16px 20px #e0c9a4, 18px 20px #e0c9a4, 20px 20px #e0c9a4, 22px 20px #795f41, 4px 22px #795f41, 6px 22px #e0c9a4, 8px 22px #e0c9a4, 10px 22px #e0c9a4, 12px 22px #cbb490, 14px 22px #cbb490, 16px 22px #e0c9a4, 18px 22px #e0c9a4, 20px 22px #cbb490, 22px 22px #795f41, 4px 24px #795f41, 6px 24px #795f41, 8px 24px #795f41, 10px 24px #795f41, 12px 24px #795f41, 14px 24px #795f41, 16px 24px #795f41, 18px 24px #795f41, 20px 24px #795f41, 22px 24px #795f41, 6px 26px #795f41, 8px 26px #795f41, 10px 26px #e0c9a4, 12px 26px #e0c9a4, 14px 26px #e0c9a4, 16px 26px #b6a281, 18px 26px #795f41, 20px 26px #795f41, 8px 28px #7e6f5d, 10px 28px #e0c9a4, 12px 28px #7e6f5d, 14px 28px #7e6f5d, 16px 28px #b6a281, 18px 28px #7e6f5d, 8px 30px #7e6f5d, 10px 30px #795f41, 12px 30px #7e6f5d, 14px 30px #7e6f5d, 16px 30px #795f41, 18px 30px #7e6f5d, 10px 32px #7e6f5d, 12px 32px #7e6f5d, 14px 32px #7e6f5d, 16px 32px #7e6f5d;\n  }\n  \n  .withanes-name {\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 4px;\n    right: 16px;\n    padding: 5px 7px;\n    /*     width: 0; */\n    text-align: center;\n    font-size: 12px;\n    font-weight: 700;\n    background-color: white;\n    opacity: 0;\n    transform: translateX(0);\n    color: black;\n    white-space: nowrap;\n    overflow: hidden;\n    transition: opacity 250ms ease-in-out, width 0 linear 250ms, transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  \n  .withanes-name:after {\n    width: 0;\n    height: 0;\n    content: '';\n    position: absolute;\n    z-index: 2;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-left: 8px solid white;\n    position: absolute;\n    top: calc(50% - 5px);\n    right: -6px;\n  }\n  \n  .withanes:hover .withanes-name {\n    /*     width: 120px; */\n    overflow: visible;\n    opacity: 1;\n    transform: translateX(-20px) rotate(0deg);\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.33);\n    transition: opacity 125ms ease-in-out 100ms, transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  \n  .withanes:hover:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: -20px;\n  }\n  \n  .withanes-name > .heart {\n    margin: 0 3px;\n    position: relative;\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    background-color: #D13E35;\n    transform: rotate(45deg);\n  }\n  \n  .withanes-name > .heart:before, .withanes-name > .heart:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    top: 0;\n    left: 0;\n    background-color: #D13E35;\n    border-radius: 50%;\n  }\n  \n  .withanes-name > .heart:before {\n    left: -3px;\n  }\n  \n  .withanes-name > .heart:after {\n    top: -3px;\n  }\n  \n  .grid {\n    display: block;\n    /* IE9 fallback for Flex */\n    display: flex;\n    /* Using Flex for equal height containers */\n    flex-wrap: wrap;\n    /* Children need to wrap */\n    margin-top: -20px;\n    margin-left: -20px;\n    align-items: stretch;\n    /* For equal height */\n    font-size: 0;\n    /* Horiontal gap fix for inline-block fallback */\n  }\n  \n  .grid + .grid {\n    margin-top: 0;\n    /* reset margin on stacked grids */\n  }\n  \n  .grid-col {\n    box-sizing: border-box;\n    /* Using box-sizing so padding doesn't affect width */\n    display: inline-block;\n    /* IE9 fallback */\n    width: 100%;\n    padding-top: 20px;\n    padding-left: 20px;\n    vertical-align: top;\n    font-size: 16px;\n    /* Resetting font-size for horizontal gap fix */\n  }\n  \n  .grid-col_1of12 {\n    width: 8.3333333333%;\n  }\n  \n  .grid-col_2of12 {\n    width: 16.6666666667%;\n  }\n  \n  .grid-col_3of12 {\n    width: 25%;\n  }\n  \n  .grid-col_4of12 {\n    width: 33.3333333333%;\n  }\n  \n  .grid-col_5of12 {\n    width: 41.6666666667%;\n  }\n  \n  .grid-col_6of12 {\n    width: 50%;\n  }\n  \n  .grid-col_7of12 {\n    width: 58.3333333333%;\n  }\n  \n  .grid-col_8of12 {\n    width: 66.6666666667%;\n  }\n  \n  .grid-col_9of12 {\n    width: 75%;\n  }\n  \n  .grid-col_10of12 {\n    width: 83.3333333333%;\n  }\n  \n  .grid-col_11of12 {\n    width: 91.6666666667%;\n  }\n  \n  .grid-col_12of12 {\n    width: 100%;\n  }\n  \n  @media (min-width: 768px) {\n    .grid-col_1of12SM {\n      width: 8.3333333333%;\n    }\n  \n    .grid-col_2of12SM {\n      width: 16.6666666667%;\n    }\n  \n    .grid-col_3of12SM {\n      width: 25%;\n    }\n  \n    .grid-col_4of12SM {\n      width: 33.3333333333%;\n    }\n  \n    .grid-col_5of12SM {\n      width: 41.6666666667%;\n    }\n  \n    .grid-col_6of12SM {\n      width: 50%;\n    }\n  \n    .grid-col_7of12SM {\n      width: 58.3333333333%;\n    }\n  \n    .grid-col_8of12SM {\n      width: 66.6666666667%;\n    }\n  \n    .grid-col_9of12SM {\n      width: 75%;\n    }\n  \n    .grid-col_10of12SM {\n      width: 83.3333333333%;\n    }\n  \n    .grid-col_11of12SM {\n      width: 91.6666666667%;\n    }\n  \n    .grid-col_12of12SM {\n      width: 100%;\n    }\n  }\n  \n  @media (min-width: 960px) {\n    .grid-col_1of12MD {\n      width: 8.3333333333%;\n    }\n  \n    .grid-col_2of12MD {\n      width: 16.6666666667%;\n    }\n  \n    .grid-col_3of12MD {\n      width: 25%;\n    }\n  \n    .grid-col_4of12MD {\n      width: 33.3333333333%;\n    }\n  \n    .grid-col_5of12MD {\n      width: 41.6666666667%;\n    }\n  \n    .grid-col_6of12MD {\n      width: 50%;\n    }\n  \n    .grid-col_7of12MD {\n      width: 58.3333333333%;\n    }\n  \n    .grid-col_8of12MD {\n      width: 66.6666666667%;\n    }\n  \n    .grid-col_9of12MD {\n      width: 75%;\n    }\n  \n    .grid-col_10of12MD {\n      width: 83.3333333333%;\n    }\n  \n    .grid-col_11of12MD {\n      width: 91.6666666667%;\n    }\n  \n    .grid-col_12of12MD {\n      width: 100%;\n    }\n  }\n  \n  .blocks {\n    margin: -30px 0 0 -30px;\n    /* offset blocks horizontal and vertical spacing - must match padding of blocks items */\n    font-size: 0;\n    /* remove inline block whitespace */\n  }\n  \n  .blocks > * {\n    box-sizing: border-box;\n    display: inline-block;\n    padding: 30px 0 0 30px;\n    /* space blocks horizontally and vertically - offset is handled by .blocks */\n    font-size: 16px;\n    /* return the font size */\n  }\n  \n  .blocks_2up > * {\n    width: 50%;\n  }\n  \n  .blocks_3up > * {\n    width: 33.33333%;\n  }\n  \n  .blocks_4up > * {\n    width: 25%;\n  }\n  \n  .u-srOnly {\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    border: 0;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n  \n  .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n  }\n  \n  body {\n    background-color: white;\n    overflow: hidden;\n  }\n  \n  .error404page {\n    \n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/15979/404-character-new.png) 0 0 no-repeat;\n    width: 200px;\n    height: 200px;\n  }\n  \n  .newcharacter404,\n  .torso404,\n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background-size: 750px;\n    position: absolute;\n    display: block;\n  }\n  \n  .newcharacter404 {\n   \n    left: 50%;\n    top: 20px;\n    margin-left: -200px;\n  }\n  \n  .torso404 {\n    position: absolute;\n    display: block;\n    top: 138px;\n    left: 0px;\n    width: 389px;\n    height: 252px;\n    animation: sway 20s ease infinite;\n    transform-origin: 50% 100%;\n  }\n  \n  .body404 {\n    position: absolute;\n    display: block;\n    top: 0px;\n    left: 0px;\n    width: 389px;\n    height: 253px;\n  }\n  \n  .head404 {\n    position: absolute;\n    top: -148px;\n    left: 106px;\n    width: 160px;\n    height: 194px;\n    background-position: 0px -265px;\n    transform-origin: 50% 85%;\n    animation: headTilt 20s ease infinite;\n  }\n  \n  .eyes404 {\n    position: absolute;\n    top: 92px;\n    left: 34px;\n    width: 73px;\n    height: 18px;\n    background-position: -162px -350px;\n    animation: blink404 10s steps(1) infinite, pan 10s ease-in-out infinite;\n  }\n  \n  .leftarm404 {\n    position: absolute;\n    top: 159px;\n    left: 0;\n    width: 165px;\n    height: 73px;\n    background-position: -265px -341px;\n    transform-origin: 9% 35%;\n    transform: rotateZ(0deg);\n    animation: typeLeft 0.4s linear infinite;\n  }\n  \n  .rightarm404 {\n    position: absolute;\n    top: 148px;\n    left: 231px;\n    width: 157px;\n    height: 91px;\n    background-position: -442px -323px;\n    transform-origin: 90% 25%;\n    animation: typeLeft 0.4s linear infinite;\n  }\n  \n  .chair404 {\n    position: absolute;\n    top: 430px;\n    left: 55px;\n    width: 260px;\n    height: 365px;\n    background-position: -12px -697px;\n  }\n  \n  .legs404 {\n    position: absolute;\n    top: 378px;\n    left: 4px;\n    width: 370px;\n    height: 247px;\n    background-position: -381px -443px;\n  }\n  \n  .leftshoe404 {\n    position: absolute;\n    top: 591px;\n    left: 54px;\n    width: 130px;\n    height: 92px;\n    background-position: -315px -749px;\n  }\n  \n  .rightshoe404 {\n    position: absolute;\n    top: 594px;\n    left: 187px;\n    width: 135px;\n    height: 81px;\n    background-position: -453px -749px;\n    transform-origin: 35% 12%;\n    animation: tapRight 1s linear infinite;\n  }\n  \n  .laptop404 {\n    position: absolute;\n    top: 186px;\n    left: 9px;\n    width: 365px;\n    height: 216px;\n    background-position: -2px -466px;\n    transform-origin: 50% 100%;\n    animation: tapWobble 0.4s linear infinite;\n  }\n  \n  @keyframes sway {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(4deg);\n    }\n    45% {\n      transform: rotateZ(4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    75% {\n      transform: rotateZ(-4deg);\n    }\n    90% {\n      transform: rotateZ(-4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes headTilt {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-4deg);\n    }\n    35% {\n      transform: rotateZ(-4deg);\n    }\n    38% {\n      transform: rotateZ(2deg);\n    }\n    42% {\n      transform: rotateZ(2deg);\n    }\n    45% {\n      transform: rotateZ(-4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    82% {\n      transform: rotateZ(0deg);\n    }\n    85% {\n      transform: rotateZ(4deg);\n    }\n    90% {\n      transform: rotateZ(4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes typeLeft {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(7deg);\n    }\n    75% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes typeRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-6deg);\n    }\n    75% {\n      transform: rotateZ(7deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes tapWobble {\n    0% {\n      transform: rotateZ(-0.2deg);\n    }\n    50% {\n      transform: rotateZ(0.2deg);\n    }\n    100% {\n      transform: rotateZ(-0.2deg);\n    }\n  }\n  \n  @keyframes tapRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    90% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes blink404 {\n    0% {\n      background-position: -162px -350px;\n    }\n    94% {\n      background-position: -162px -350px;\n    }\n    98% {\n      background-position: -162px -368px;\n    }\n    100% {\n      background-position: -162px -350px;\n    }\n  }\n  \n  @keyframes pan {\n    0% {\n      transform: translateX(-2px);\n    }\n    49% {\n      transform: translateX(-2px);\n    }\n    50% {\n      transform: translateX(2px);\n    }\n    99% {\n      transform: translateX(2px);\n    }\n    100% {\n      transform: translateX(-2px);\n    }\n  }\n  \n  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-weight: inherit;\n    font-style: inherit;\n    font-family: inherit;\n    vertical-align: baseline;\n  }\n  \n  body {\n    line-height: 1;\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n  \n  blockquote, q {\n    quotes: none;\n  }\n  \n  blockquote:after, blockquote:before, q:after, q:before {\n    content: '';\n    content: none;\n  }\n  \n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  \n  :focus {\n    outline: 0;\n  }\n  \n  html {\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n  \n  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  \n  audio, canvas, picture, progress, video {\n    display: inline-block;\n  }\n  \n  template {\n    display: none;\n  }\n  \n  input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration, input[type=search]::-webkit-search-results-button, input[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n  }\n  \n  input[type=search] {\n    -webkit-appearance: none;\n    box-sizing: content-box;\n  }\n  \n  textarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n  }\n  \n  ::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n  \n  body {\n    background-color: #333;\n    font-family: 'Quicksand', sans-serif;\n  }\n  \n  .hidden {\n    display: none;\n  }\n  \n  .u-isVisuallyHidden {\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    border: 0;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n  \n  .footer {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n  \n  .withanes {\n    display: block;\n    position: absolute;\n    right: 5px;\n    bottom: 5px;\n    width: 24px;\n    height: 32px;\n  }\n  \n  .withanes:after {\n    content: '';\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    width: 2px;\n    height: 2px;\n    box-shadow: 8px 2px #795f41, 10px 2px #795f41, 12px 2px #795f41, 14px 2px #795f41, 16px 2px #795f41, 18px 2px #795f41, 6px 4px #795f41, 8px 4px #795f41, 10px 4px #795f41, 12px 4px #795f41, 14px 4px #795f41, 16px 4px #795f41, 18px 4px #795f41, 20px 4px #795f41, 4px 6px #795f41, 6px 6px #795f41, 8px 6px #e9d8bc, 10px 6px #795f41, 12px 6px #795f41, 14px 6px #795f41, 16px 6px #795f41, 18px 6px #cbb490, 20px 6px #795f41, 22px 6px #795f41, 4px 8px #795f41, 6px 8px #e9d8bc, 8px 8px #e0c9a4, 10px 8px #e0c9a4, 12px 8px #e0c9a4, 14px 8px #e0c9a4, 16px 8px #e0c9a4, 18px 8px #cbb490, 20px 8px #cbb490, 22px 8px #795f41, 2px 10px #7e6f5d, 4px 10px #e9d8bc, 6px 10px #e0c9a4, 8px 10px #e0c9a4, 10px 10px #e0c9a4, 12px 10px #e0c9a4, 14px 10px #e0c9a4, 16px 10px #e0c9a4, 18px 10px #e0c9a4, 20px 10px #cbb490, 22px 10px #cbb490, 24px 10px #7e6f5d, 2px 12px #7e6f5d, 4px 12px #e9d8bc, 6px 12px #e0c9a4, 8px 12px #e0c9a4, 10px 12px #e0c9a4, 12px 12px #e0c9a4, 14px 12px #e0c9a4, 16px 12px #e0c9a4, 18px 12px #e0c9a4, 20px 12px #e0c9a4, 22px 12px #cbb490, 24px 12px #7e6f5d, 2px 14px #7e6f5d, 4px 14px #e9d8bc, 6px 14px #e0c9a4, 8px 14px #cbb490, 10px 14px #cbb490, 12px 14px #e0c9a4, 14px 14px #e0c9a4, 16px 14px #cbb490, 18px 14px #cbb490, 20px 14px #e0c9a4, 22px 14px #cbb490, 24px 14px #7e6f5d, 2px 16px #b6a281, 4px 16px #e9d8bc, 6px 16px #e0c9a4, 8px 16px #000000, 10px 16px #000000, 12px 16px #e9d8bc, 14px 16px #e0c9a4, 16px 16px #000000, 18px 16px #000000, 20px 16px #e0c9a4, 22px 16px #cbb490, 24px 16px #b6a281, 2px 18px #cbb490, 4px 18px #e9d8bc, 6px 18px #e0c9a4, 8px 18px #e0c9a4, 10px 18px #e0c9a4, 12px 18px #e9d8bc, 14px 18px #e0c9a4, 16px 18px #e0c9a4, 18px 18px #e0c9a4, 20px 18px #e0c9a4, 22px 18px #cbb490, 24px 18px #cbb490, 4px 20px #795f41, 6px 20px #e0c9a4, 8px 20px #e0c9a4, 10px 20px #e0c9a4, 12px 20px #e9d8bc, 14px 20px #e0c9a4, 16px 20px #e0c9a4, 18px 20px #e0c9a4, 20px 20px #e0c9a4, 22px 20px #795f41, 4px 22px #795f41, 6px 22px #e0c9a4, 8px 22px #e0c9a4, 10px 22px #e0c9a4, 12px 22px #cbb490, 14px 22px #cbb490, 16px 22px #e0c9a4, 18px 22px #e0c9a4, 20px 22px #cbb490, 22px 22px #795f41, 4px 24px #795f41, 6px 24px #795f41, 8px 24px #795f41, 10px 24px #795f41, 12px 24px #795f41, 14px 24px #795f41, 16px 24px #795f41, 18px 24px #795f41, 20px 24px #795f41, 22px 24px #795f41, 6px 26px #795f41, 8px 26px #795f41, 10px 26px #e0c9a4, 12px 26px #e0c9a4, 14px 26px #e0c9a4, 16px 26px #b6a281, 18px 26px #795f41, 20px 26px #795f41, 8px 28px #7e6f5d, 10px 28px #e0c9a4, 12px 28px #7e6f5d, 14px 28px #7e6f5d, 16px 28px #b6a281, 18px 28px #7e6f5d, 8px 30px #7e6f5d, 10px 30px #795f41, 12px 30px #7e6f5d, 14px 30px #7e6f5d, 16px 30px #795f41, 18px 30px #7e6f5d, 10px 32px #7e6f5d, 12px 32px #7e6f5d, 14px 32px #7e6f5d, 16px 32px #7e6f5d;\n  }\n  \n  .withanes-name {\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 4px;\n    right: 16px;\n    padding: 5px 7px;\n    /*     width: 0; */\n    text-align: center;\n    font-size: 12px;\n    font-weight: 700;\n    background-color: white;\n    opacity: 0;\n    transform: translateX(0);\n    color: black;\n    white-space: nowrap;\n    overflow: hidden;\n    transition: opacity 250ms ease-in-out, width 0 linear 250ms, transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  \n  .withanes-name:after {\n    width: 0;\n    height: 0;\n    content: '';\n    position: absolute;\n    z-index: 2;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-left: 8px solid white;\n    position: absolute;\n    top: calc(50% - 5px);\n    right: -6px;\n  }\n  \n  .withanes:hover .withanes-name {\n    /*     width: 120px; */\n    overflow: visible;\n    opacity: 1;\n    transform: translateX(-20px) rotate(0deg);\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.33);\n    transition: opacity 125ms ease-in-out 100ms, transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  }\n  \n  .withanes:hover:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: -20px;\n  }\n  \n  .withanes-name > .heart {\n    margin: 0 3px;\n    position: relative;\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    background-color: #D13E35;\n    transform: rotate(45deg);\n  }\n  \n  .withanes-name > .heart:before, .withanes-name > .heart:after {\n    content: '';\n    position: absolute;\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    top: 0;\n    left: 0;\n    background-color: #D13E35;\n    border-radius: 50%;\n  }\n  \n  .withanes-name > .heart:before {\n    left: -3px;\n  }\n  \n  .withanes-name > .heart:after {\n    top: -3px;\n  }\n  \n  .grid {\n    display: block;\n    /* IE9 fallback for Flex */\n    display: flex;\n    /* Using Flex for equal height containers */\n    flex-wrap: wrap;\n    /* Children need to wrap */\n    margin-top: -20px;\n    margin-left: -20px;\n    align-items: stretch;\n    /* For equal height */\n    font-size: 0;\n    /* Horiontal gap fix for inline-block fallback */\n  }\n  \n  .grid + .grid {\n    margin-top: 0;\n    /* reset margin on stacked grids */\n  }\n  \n  .grid-col {\n    box-sizing: border-box;\n    /* Using box-sizing so padding doesn't affect width */\n    display: inline-block;\n    /* IE9 fallback */\n    width: 100%;\n    padding-top: 20px;\n    padding-left: 20px;\n    vertical-align: top;\n    font-size: 16px;\n    /* Resetting font-size for horizontal gap fix */\n  }\n  \n  .grid-col_1of12 {\n    width: 8.3333333333%;\n  }\n  \n  .grid-col_2of12 {\n    width: 16.6666666667%;\n  }\n  \n  .grid-col_3of12 {\n    width: 25%;\n  }\n  \n  .grid-col_4of12 {\n    width: 33.3333333333%;\n  }\n  \n  .grid-col_5of12 {\n    width: 41.6666666667%;\n  }\n  \n  .grid-col_6of12 {\n    width: 50%;\n  }\n  \n  .grid-col_7of12 {\n    width: 58.3333333333%;\n  }\n  \n  .grid-col_8of12 {\n    width: 66.6666666667%;\n  }\n  \n  .grid-col_9of12 {\n    width: 75%;\n  }\n  \n  .grid-col_10of12 {\n    width: 83.3333333333%;\n  }\n  \n  .grid-col_11of12 {\n    width: 91.6666666667%;\n  }\n  \n  .grid-col_12of12 {\n    width: 100%;\n  }\n  \n  @media (min-width: 768px) {\n    .grid-col_1of12SM {\n      width: 8.3333333333%;\n    }\n  \n    .grid-col_2of12SM {\n      width: 16.6666666667%;\n    }\n  \n    .grid-col_3of12SM {\n      width: 25%;\n    }\n  \n    .grid-col_4of12SM {\n      width: 33.3333333333%;\n    }\n  \n    .grid-col_5of12SM {\n      width: 41.6666666667%;\n    }\n  \n    .grid-col_6of12SM {\n      width: 50%;\n    }\n  \n    .grid-col_7of12SM {\n      width: 58.3333333333%;\n    }\n  \n    .grid-col_8of12SM {\n      width: 66.6666666667%;\n    }\n  \n    .grid-col_9of12SM {\n      width: 75%;\n    }\n  \n    .grid-col_10of12SM {\n      width: 83.3333333333%;\n    }\n  \n    .grid-col_11of12SM {\n      width: 91.6666666667%;\n    }\n  \n    .grid-col_12of12SM {\n      width: 100%;\n    }\n  }\n  \n  @media (min-width: 960px) {\n    .grid-col_1of12MD {\n      width: 8.3333333333%;\n    }\n  \n    .grid-col_2of12MD {\n      width: 16.6666666667%;\n    }\n  \n    .grid-col_3of12MD {\n      width: 25%;\n    }\n  \n    .grid-col_4of12MD {\n      width: 33.3333333333%;\n    }\n  \n    .grid-col_5of12MD {\n      width: 41.6666666667%;\n    }\n  \n    .grid-col_6of12MD {\n      width: 50%;\n    }\n  \n    .grid-col_7of12MD {\n      width: 58.3333333333%;\n    }\n  \n    .grid-col_8of12MD {\n      width: 66.6666666667%;\n    }\n  \n    .grid-col_9of12MD {\n      width: 75%;\n    }\n  \n    .grid-col_10of12MD {\n      width: 83.3333333333%;\n    }\n  \n    .grid-col_11of12MD {\n      width: 91.6666666667%;\n    }\n  \n    .grid-col_12of12MD {\n      width: 100%;\n    }\n  }\n  \n  .blocks {\n    margin: -30px 0 0 -30px;\n    /* offset blocks horizontal and vertical spacing - must match padding of blocks items */\n    font-size: 0;\n    /* remove inline block whitespace */\n  }\n  \n  .blocks > * {\n    box-sizing: border-box;\n    display: inline-block;\n    padding: 30px 0 0 30px;\n    /* space blocks horizontally and vertically - offset is handled by .blocks */\n    font-size: 16px;\n    /* return the font size */\n  }\n  \n  .blocks_2up > * {\n    width: 50%;\n  }\n  \n  .blocks_3up > * {\n    width: 33.33333%;\n  }\n  \n  .blocks_4up > * {\n    width: 25%;\n  }\n  \n  .u-srOnly {\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    border: 0;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n  \n  .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n  }\n  \n  body {\n    background-color: white;\n    overflow: hidden;\n  }\n  \n  .error404page {\n   \n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/15979/404-character-new.png) 0 0 no-repeat;\n    width: 200px;\n    height: 200px;\n  }\n  \n  .newcharacter404,\n  .torso404,\n  .body404,\n  .head404,\n  .eyes404,\n  .leftarm404,\n  .rightarm404,\n  .chair404,\n  .leftshoe404,\n  .rightshoe404,\n  .legs404,\n  .laptop404 {\n    background-size: 750px;\n    position: absolute;\n    display: block;\n  }\n  \n  .newcharacter404 {\n   \n    left: 50%;\n    top: 20px;\n    margin-left: -200px;\n  }\n  \n  .torso404 {\n    position: absolute;\n    display: block;\n    top: 138px;\n    left: 0px;\n    width: 389px;\n    height: 252px;\n    animation: sway 20s ease infinite;\n    transform-origin: 50% 100%;\n  }\n  \n  .body404 {\n    position: absolute;\n    display: block;\n    top: 0px;\n    left: 0px;\n    width: 389px;\n    height: 253px;\n  }\n  \n  .head404 {\n    position: absolute;\n    top: -148px;\n    left: 106px;\n    width: 160px;\n    height: 194px;\n    background-position: 0px -265px;\n    transform-origin: 50% 85%;\n    animation: headTilt 20s ease infinite;\n  }\n  \n  .eyes404 {\n    position: absolute;\n    top: 92px;\n    left: 34px;\n    width: 73px;\n    height: 18px;\n    background-position: -162px -350px;\n    animation: blink404 10s steps(1) infinite, pan 10s ease-in-out infinite;\n  }\n  \n  .leftarm404 {\n    position: absolute;\n    top: 159px;\n    left: 0;\n    width: 165px;\n    height: 73px;\n    background-position: -265px -341px;\n    transform-origin: 9% 35%;\n    transform: rotateZ(0deg);\n    animation: typeLeft 0.4s linear infinite;\n  }\n  \n  .rightarm404 {\n    position: absolute;\n    top: 148px;\n    left: 231px;\n    width: 157px;\n    height: 91px;\n    background-position: -442px -323px;\n    transform-origin: 90% 25%;\n    animation: typeLeft 0.4s linear infinite;\n  }\n  \n  .chair404 {\n    position: absolute;\n    top: 430px;\n    left: 55px;\n    width: 260px;\n    height: 365px;\n    background-position: -12px -697px;\n  }\n  \n  .legs404 {\n    position: absolute;\n    top: 378px;\n    left: 4px;\n    width: 370px;\n    height: 247px;\n    background-position: -381px -443px;\n  }\n  \n  .leftshoe404 {\n    position: absolute;\n    top: 591px;\n    left: 54px;\n    width: 130px;\n    height: 92px;\n    background-position: -315px -749px;\n  }\n  \n  .rightshoe404 {\n    position: absolute;\n    top: 594px;\n    left: 187px;\n    width: 135px;\n    height: 81px;\n    background-position: -453px -749px;\n    transform-origin: 35% 12%;\n    animation: tapRight 1s linear infinite;\n  }\n  \n  .laptop404 {\n    position: absolute;\n    top: 186px;\n    left: 9px;\n    width: 365px;\n    height: 216px;\n    background-position: -2px -466px;\n    transform-origin: 50% 100%;\n    animation: tapWobble 0.4s linear infinite;\n  }\n  \n  @keyframes sway {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(4deg);\n    }\n    45% {\n      transform: rotateZ(4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    75% {\n      transform: rotateZ(-4deg);\n    }\n    90% {\n      transform: rotateZ(-4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes headTilt {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    20% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-4deg);\n    }\n    35% {\n      transform: rotateZ(-4deg);\n    }\n    38% {\n      transform: rotateZ(2deg);\n    }\n    42% {\n      transform: rotateZ(2deg);\n    }\n    45% {\n      transform: rotateZ(-4deg);\n    }\n    50% {\n      transform: rotateZ(0deg);\n    }\n    70% {\n      transform: rotateZ(0deg);\n    }\n    82% {\n      transform: rotateZ(0deg);\n    }\n    85% {\n      transform: rotateZ(4deg);\n    }\n    90% {\n      transform: rotateZ(4deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes typeLeft {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(7deg);\n    }\n    75% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes typeRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    25% {\n      transform: rotateZ(-6deg);\n    }\n    75% {\n      transform: rotateZ(7deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes tapWobble {\n    0% {\n      transform: rotateZ(-0.2deg);\n    }\n    50% {\n      transform: rotateZ(0.2deg);\n    }\n    100% {\n      transform: rotateZ(-0.2deg);\n    }\n  }\n  \n  @keyframes tapRight {\n    0% {\n      transform: rotateZ(0deg);\n    }\n    90% {\n      transform: rotateZ(-6deg);\n    }\n    100% {\n      transform: rotateZ(0deg);\n    }\n  }\n  \n  @keyframes blink404 {\n    0% {\n      background-position: -162px -350px;\n    }\n    94% {\n      background-position: -162px -350px;\n    }\n    98% {\n      background-position: -162px -368px;\n    }\n    100% {\n      background-position: -162px -350px;\n    }\n  }\n  \n  @keyframes pan {\n    0% {\n      transform: translateX(-2px);\n    }\n    49% {\n      transform: translateX(-2px);\n    }\n    50% {\n      transform: translateX(2px);\n    }\n    99% {\n      transform: translateX(2px);\n    }\n    100% {\n      transform: translateX(-2px);\n    }\n  }\n  \n  .board {\n      position: absolute;\n      top: 20%;\n      left: 50%;\n      height: 150px;\n      width: 500px;\n      margin: -75px 0 0 -250px;\n      padding: 20px;\n      font: 75px/75px Monoton, cursive;\n      text-align: center;\n      text-transform: uppercase;\n      text-shadow: 0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed;\n      color: red;\n    }\n  \n  #error {\n      color: #fff;\n      text-shadow: 0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUd4Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87RUFDVDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUNBO0lBQ0UsV0FBVztJQUNY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QUF5QjtJQUMzQjtJQUNBO01BQ0Usd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSx3QkFBd0I7SUFDMUI7RUFDRjs7RUFDQTtJQUNFO01BQ0UsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGOztFQUNBO0lBQ0U7TUFDRSx3QkFBd0I7SUFDMUI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0Usd0JBQXdCO0lBQzFCO0VBQ0Y7O0VBQ0E7SUFDRTtNQUNFLGtDQUFrQztJQUNwQztJQUNBO01BQ0Usa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSxrQ0FBa0M7SUFDcEM7SUFDQTtNQUNFLGtDQUFrQztJQUNwQztFQUNGOztFQUNBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGOztFQUNBO01BQ0ksa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsYUFBYTtNQUNiLFlBQVk7TUFDWix3QkFBd0I7TUFDeEIsYUFBYTtNQUNiLGdDQUFnQztNQUNoQyxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLDhEQUE4RDtNQUM5RCxVQUFVO0lBQ1o7O0VBRUE7TUFDRSxXQUFXO01BQ1gsZ0VBQWdFO0lBQ2xFIiwiZmlsZSI6ImFwcC9zaGFyZWQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYXBwbGV0LCBhcnRpY2xlLCBhc2lkZSwgYXVkaW8sIGIsIGJpZywgYmxvY2txdW90ZSwgYm9keSwgY2FudmFzLCBjYXB0aW9uLCBjZW50ZXIsIGNpdGUsIGNvZGUsIGRkLCBkZWwsIGRldGFpbHMsIGRmbiwgZGl2LCBkbCwgZHQsIGVtLCBlbWJlZCwgZmllbGRzZXQsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBmb3JtLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBoZWFkZXIsIGhncm91cCwgaHRtbCwgaSwgaWZyYW1lLCBpbWcsIGlucywga2JkLCBsYWJlbCwgbGVnZW5kLCBsaSwgbWFyaywgbWVudSwgbmF2LCBvYmplY3QsIG9sLCBvdXRwdXQsIHAsIHByZSwgcSwgcnVieSwgcywgc2FtcCwgc2VjdGlvbiwgc21hbGwsIHNwYW4sIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1bW1hcnksIHN1cCwgdGFibGUsIHRib2R5LCB0ZCwgdGZvb3QsIHRoLCB0aGVhZCwgdGltZSwgdHIsIHR0LCB1LCB1bCwgdmFyLCB2aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgXG4gIG9sLCB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBcbiAgYmxvY2txdW90ZSwgcSB7XG4gICAgcXVvdGVzOiBub25lO1xuICB9XG4gIFxuICBibG9ja3F1b3RlOmFmdGVyLCBibG9ja3F1b3RlOmJlZm9yZSwgcTphZnRlciwgcTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cbiAgXG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG4gIFxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgXG4gIGh0bWwge1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgfVxuICBcbiAgYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgYXVkaW8sIGNhbnZhcywgcGljdHVyZSwgcHJvZ3Jlc3MsIHZpZGVvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIHRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sIGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiwgaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbiwgaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB9XG4gIFxuICB0ZXh0YXJlYSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG4gIFxuICA6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLnUtaXNWaXN1YWxseUhpZGRlbiB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIFxuICAud2l0aGFuZXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxuICAud2l0aGFuZXM6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgbGVmdDogLTJweDtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJveC1zaGFkb3c6IDhweCAycHggIzc5NWY0MSwgMTBweCAycHggIzc5NWY0MSwgMTJweCAycHggIzc5NWY0MSwgMTRweCAycHggIzc5NWY0MSwgMTZweCAycHggIzc5NWY0MSwgMThweCAycHggIzc5NWY0MSwgNnB4IDRweCAjNzk1ZjQxLCA4cHggNHB4ICM3OTVmNDEsIDEwcHggNHB4ICM3OTVmNDEsIDEycHggNHB4ICM3OTVmNDEsIDE0cHggNHB4ICM3OTVmNDEsIDE2cHggNHB4ICM3OTVmNDEsIDE4cHggNHB4ICM3OTVmNDEsIDIwcHggNHB4ICM3OTVmNDEsIDRweCA2cHggIzc5NWY0MSwgNnB4IDZweCAjNzk1ZjQxLCA4cHggNnB4ICNlOWQ4YmMsIDEwcHggNnB4ICM3OTVmNDEsIDEycHggNnB4ICM3OTVmNDEsIDE0cHggNnB4ICM3OTVmNDEsIDE2cHggNnB4ICM3OTVmNDEsIDE4cHggNnB4ICNjYmI0OTAsIDIwcHggNnB4ICM3OTVmNDEsIDIycHggNnB4ICM3OTVmNDEsIDRweCA4cHggIzc5NWY0MSwgNnB4IDhweCAjZTlkOGJjLCA4cHggOHB4ICNlMGM5YTQsIDEwcHggOHB4ICNlMGM5YTQsIDEycHggOHB4ICNlMGM5YTQsIDE0cHggOHB4ICNlMGM5YTQsIDE2cHggOHB4ICNlMGM5YTQsIDE4cHggOHB4ICNjYmI0OTAsIDIwcHggOHB4ICNjYmI0OTAsIDIycHggOHB4ICM3OTVmNDEsIDJweCAxMHB4ICM3ZTZmNWQsIDRweCAxMHB4ICNlOWQ4YmMsIDZweCAxMHB4ICNlMGM5YTQsIDhweCAxMHB4ICNlMGM5YTQsIDEwcHggMTBweCAjZTBjOWE0LCAxMnB4IDEwcHggI2UwYzlhNCwgMTRweCAxMHB4ICNlMGM5YTQsIDE2cHggMTBweCAjZTBjOWE0LCAxOHB4IDEwcHggI2UwYzlhNCwgMjBweCAxMHB4ICNjYmI0OTAsIDIycHggMTBweCAjY2JiNDkwLCAyNHB4IDEwcHggIzdlNmY1ZCwgMnB4IDEycHggIzdlNmY1ZCwgNHB4IDEycHggI2U5ZDhiYywgNnB4IDEycHggI2UwYzlhNCwgOHB4IDEycHggI2UwYzlhNCwgMTBweCAxMnB4ICNlMGM5YTQsIDEycHggMTJweCAjZTBjOWE0LCAxNHB4IDEycHggI2UwYzlhNCwgMTZweCAxMnB4ICNlMGM5YTQsIDE4cHggMTJweCAjZTBjOWE0LCAyMHB4IDEycHggI2UwYzlhNCwgMjJweCAxMnB4ICNjYmI0OTAsIDI0cHggMTJweCAjN2U2ZjVkLCAycHggMTRweCAjN2U2ZjVkLCA0cHggMTRweCAjZTlkOGJjLCA2cHggMTRweCAjZTBjOWE0LCA4cHggMTRweCAjY2JiNDkwLCAxMHB4IDE0cHggI2NiYjQ5MCwgMTJweCAxNHB4ICNlMGM5YTQsIDE0cHggMTRweCAjZTBjOWE0LCAxNnB4IDE0cHggI2NiYjQ5MCwgMThweCAxNHB4ICNjYmI0OTAsIDIwcHggMTRweCAjZTBjOWE0LCAyMnB4IDE0cHggI2NiYjQ5MCwgMjRweCAxNHB4ICM3ZTZmNWQsIDJweCAxNnB4ICNiNmEyODEsIDRweCAxNnB4ICNlOWQ4YmMsIDZweCAxNnB4ICNlMGM5YTQsIDhweCAxNnB4ICMwMDAwMDAsIDEwcHggMTZweCAjMDAwMDAwLCAxMnB4IDE2cHggI2U5ZDhiYywgMTRweCAxNnB4ICNlMGM5YTQsIDE2cHggMTZweCAjMDAwMDAwLCAxOHB4IDE2cHggIzAwMDAwMCwgMjBweCAxNnB4ICNlMGM5YTQsIDIycHggMTZweCAjY2JiNDkwLCAyNHB4IDE2cHggI2I2YTI4MSwgMnB4IDE4cHggI2NiYjQ5MCwgNHB4IDE4cHggI2U5ZDhiYywgNnB4IDE4cHggI2UwYzlhNCwgOHB4IDE4cHggI2UwYzlhNCwgMTBweCAxOHB4ICNlMGM5YTQsIDEycHggMThweCAjZTlkOGJjLCAxNHB4IDE4cHggI2UwYzlhNCwgMTZweCAxOHB4ICNlMGM5YTQsIDE4cHggMThweCAjZTBjOWE0LCAyMHB4IDE4cHggI2UwYzlhNCwgMjJweCAxOHB4ICNjYmI0OTAsIDI0cHggMThweCAjY2JiNDkwLCA0cHggMjBweCAjNzk1ZjQxLCA2cHggMjBweCAjZTBjOWE0LCA4cHggMjBweCAjZTBjOWE0LCAxMHB4IDIwcHggI2UwYzlhNCwgMTJweCAyMHB4ICNlOWQ4YmMsIDE0cHggMjBweCAjZTBjOWE0LCAxNnB4IDIwcHggI2UwYzlhNCwgMThweCAyMHB4ICNlMGM5YTQsIDIwcHggMjBweCAjZTBjOWE0LCAyMnB4IDIwcHggIzc5NWY0MSwgNHB4IDIycHggIzc5NWY0MSwgNnB4IDIycHggI2UwYzlhNCwgOHB4IDIycHggI2UwYzlhNCwgMTBweCAyMnB4ICNlMGM5YTQsIDEycHggMjJweCAjY2JiNDkwLCAxNHB4IDIycHggI2NiYjQ5MCwgMTZweCAyMnB4ICNlMGM5YTQsIDE4cHggMjJweCAjZTBjOWE0LCAyMHB4IDIycHggI2NiYjQ5MCwgMjJweCAyMnB4ICM3OTVmNDEsIDRweCAyNHB4ICM3OTVmNDEsIDZweCAyNHB4ICM3OTVmNDEsIDhweCAyNHB4ICM3OTVmNDEsIDEwcHggMjRweCAjNzk1ZjQxLCAxMnB4IDI0cHggIzc5NWY0MSwgMTRweCAyNHB4ICM3OTVmNDEsIDE2cHggMjRweCAjNzk1ZjQxLCAxOHB4IDI0cHggIzc5NWY0MSwgMjBweCAyNHB4ICM3OTVmNDEsIDIycHggMjRweCAjNzk1ZjQxLCA2cHggMjZweCAjNzk1ZjQxLCA4cHggMjZweCAjNzk1ZjQxLCAxMHB4IDI2cHggI2UwYzlhNCwgMTJweCAyNnB4ICNlMGM5YTQsIDE0cHggMjZweCAjZTBjOWE0LCAxNnB4IDI2cHggI2I2YTI4MSwgMThweCAyNnB4ICM3OTVmNDEsIDIwcHggMjZweCAjNzk1ZjQxLCA4cHggMjhweCAjN2U2ZjVkLCAxMHB4IDI4cHggI2UwYzlhNCwgMTJweCAyOHB4ICM3ZTZmNWQsIDE0cHggMjhweCAjN2U2ZjVkLCAxNnB4IDI4cHggI2I2YTI4MSwgMThweCAyOHB4ICM3ZTZmNWQsIDhweCAzMHB4ICM3ZTZmNWQsIDEwcHggMzBweCAjNzk1ZjQxLCAxMnB4IDMwcHggIzdlNmY1ZCwgMTRweCAzMHB4ICM3ZTZmNWQsIDE2cHggMzBweCAjNzk1ZjQxLCAxOHB4IDMwcHggIzdlNmY1ZCwgMTBweCAzMnB4ICM3ZTZmNWQsIDEycHggMzJweCAjN2U2ZjVkLCAxNHB4IDMycHggIzdlNmY1ZCwgMTZweCAzMnB4ICM3ZTZmNWQ7XG4gIH1cbiAgXG4gIC53aXRoYW5lcy1uYW1lIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDRweDtcbiAgICByaWdodDogMTZweDtcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgIC8qICAgICB3aWR0aDogMDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW4tb3V0LCB3aWR0aCAwIGxpbmVhciAyNTBtcywgdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuICB9XG4gIC53aXRoYW5lcy1uYW1lOmFmdGVyIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gNXB4KTtcbiAgICByaWdodDogLTZweDtcbiAgfVxuICBcbiAgLndpdGhhbmVzOmhvdmVyIC53aXRoYW5lcy1uYW1lIHtcbiAgICAvKiAgICAgd2lkdGg6IDEyMHB4OyAqL1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEyNW1zIGVhc2UtaW4tb3V0IDEwMG1zLCB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG4gIH1cbiAgXG4gIC53aXRoYW5lczpob3ZlcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gIFxuICAud2l0aGFuZXMtbmFtZSA+IC5oZWFydCB7XG4gICAgbWFyZ2luOiAwIDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxM0UzNTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLndpdGhhbmVzLW5hbWUgPiAuaGVhcnQ6YmVmb3JlLCAud2l0aGFuZXMtbmFtZSA+IC5oZWFydDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMTNFMzU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC53aXRoYW5lcy1uYW1lID4gLmhlYXJ0OmJlZm9yZSB7XG4gICAgbGVmdDogLTNweDtcbiAgfVxuICAud2l0aGFuZXMtbmFtZSA+IC5oZWFydDphZnRlciB7XG4gICAgdG9wOiAtM3B4O1xuICB9XG4gIFxuICAuZ3JpZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLyogSUU5IGZhbGxiYWNrIGZvciBGbGV4ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBVc2luZyBGbGV4IGZvciBlcXVhbCBoZWlnaHQgY29udGFpbmVycyAqL1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAvKiBDaGlsZHJlbiBuZWVkIHRvIHdyYXAgKi9cbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgLyogRm9yIGVxdWFsIGhlaWdodCAqL1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICAvKiBIb3Jpb250YWwgZ2FwIGZpeCBmb3IgaW5saW5lLWJsb2NrIGZhbGxiYWNrICovXG4gIH1cbiAgXG4gIC5ncmlkICsgLmdyaWQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgLyogcmVzZXQgbWFyZ2luIG9uIHN0YWNrZWQgZ3JpZHMgKi9cbiAgfVxuICBcbiAgLmdyaWQtY29sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qIFVzaW5nIGJveC1zaXppbmcgc28gcGFkZGluZyBkb2Vzbid0IGFmZmVjdCB3aWR0aCAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAvKiBJRTkgZmFsbGJhY2sgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLyogUmVzZXR0aW5nIGZvbnQtc2l6ZSBmb3IgaG9yaXpvbnRhbCBnYXAgZml4ICovXG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8xb2YxMiB7XG4gICAgd2lkdGg6IDguMzMzMzMzMzMzMyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8yb2YxMiB7XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfM29mMTIge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF80b2YxMiB7XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfNW9mMTIge1xuICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzZvZjEyIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfN29mMTIge1xuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzhvZjEyIHtcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF85b2YxMiB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzEwb2YxMiB7XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfMTFvZjEyIHtcbiAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8xMm9mMTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuZ3JpZC1jb2xfMW9mMTJTTSB7XG4gICAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8yb2YxMlNNIHtcbiAgICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8zb2YxMlNNIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNG9mMTJTTSB7XG4gICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNW9mMTJTTSB7XG4gICAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNm9mMTJTTSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzdvZjEyU00ge1xuICAgICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzhvZjEyU00ge1xuICAgICAgd2lkdGg6IDY2LjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzlvZjEyU00ge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8xMG9mMTJTTSB7XG4gICAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfMTFvZjEyU00ge1xuICAgICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzEyb2YxMlNNIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICAuZ3JpZC1jb2xfMW9mMTJNRCB7XG4gICAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8yb2YxMk1EIHtcbiAgICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8zb2YxMk1EIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNG9mMTJNRCB7XG4gICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNW9mMTJNRCB7XG4gICAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNm9mMTJNRCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzdvZjEyTUQge1xuICAgICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzhvZjEyTUQge1xuICAgICAgd2lkdGg6IDY2LjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzlvZjEyTUQge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8xMG9mMTJNRCB7XG4gICAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfMTFvZjEyTUQge1xuICAgICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzEyb2YxMk1EIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICAuYmxvY2tzIHtcbiAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAvKiBvZmZzZXQgYmxvY2tzIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHNwYWNpbmcgLSBtdXN0IG1hdGNoIHBhZGRpbmcgb2YgYmxvY2tzIGl0ZW1zICovXG4gICAgZm9udC1zaXplOiAwO1xuICAgIC8qIHJlbW92ZSBpbmxpbmUgYmxvY2sgd2hpdGVzcGFjZSAqL1xuICB9XG4gIFxuICAuYmxvY2tzID4gKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMzBweCAwIDAgMzBweDtcbiAgICAvKiBzcGFjZSBibG9ja3MgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IC0gb2Zmc2V0IGlzIGhhbmRsZWQgYnkgLmJsb2NrcyAqL1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvKiByZXR1cm4gdGhlIGZvbnQgc2l6ZSAqL1xuICB9XG4gIFxuICAuYmxvY2tzXzJ1cCA+ICoge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5ibG9ja3NfM3VwID4gKiB7XG4gICAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgfVxuICBcbiAgLmJsb2Nrc180dXAgPiAqIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIFxuICAudS1zck9ubHkge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5lcnJvcjQwNHBhZ2Uge1xuICAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIC5ib2R5NDA0LFxuICAuaGVhZDQwNCxcbiAgLmV5ZXM0MDQsXG4gIC5sZWZ0YXJtNDA0LFxuICAucmlnaHRhcm00MDQsXG4gIC5jaGFpcjQwNCxcbiAgLmxlZnRzaG9lNDA0LFxuICAucmlnaHRzaG9lNDA0LFxuICAubGVnczQwNCxcbiAgLmxhcHRvcDQwNCB7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE1OTc5LzQwNC1jaGFyYWN0ZXItbmV3LnBuZykgMCAwIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICBcbiAgLm5ld2NoYXJhY3RlcjQwNCxcbiAgLnRvcnNvNDA0LFxuICAuYm9keTQwNCxcbiAgLmhlYWQ0MDQsXG4gIC5leWVzNDA0LFxuICAubGVmdGFybTQwNCxcbiAgLnJpZ2h0YXJtNDA0LFxuICAuY2hhaXI0MDQsXG4gIC5sZWZ0c2hvZTQwNCxcbiAgLnJpZ2h0c2hvZTQwNCxcbiAgLmxlZ3M0MDQsXG4gIC5sYXB0b3A0MDQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAubmV3Y2hhcmFjdGVyNDA0IHtcbiAgIFxuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbiAgfVxuICBcbiAgLnRvcnNvNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAxMzhweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDM4OXB4O1xuICAgIGhlaWdodDogMjUycHg7XG4gICAgYW5pbWF0aW9uOiBzd2F5IDIwcyBlYXNlIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB9XG4gIFxuICAuYm9keTQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMzg5cHg7XG4gICAgaGVpZ2h0OiAyNTNweDtcbiAgfVxuICBcbiAgLmhlYWQ0MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNDhweDtcbiAgICBsZWZ0OiAxMDZweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAxOTRweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTI2NXB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA4NSU7XG4gICAgYW5pbWF0aW9uOiBoZWFkVGlsdCAyMHMgZWFzZSBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmV5ZXM0MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDkycHg7XG4gICAgbGVmdDogMzRweDtcbiAgICB3aWR0aDogNzNweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MnB4IC0zNTBweDtcbiAgICBhbmltYXRpb246IGJsaW5rNDA0IDEwcyBzdGVwcygxKSBpbmZpbml0ZSwgcGFuIDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmxlZnRhcm00MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1OXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE2NXB4O1xuICAgIGhlaWdodDogNzNweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjY1cHggLTM0MXB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDklIDM1JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgYW5pbWF0aW9uOiB0eXBlTGVmdCAwLjRzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLnJpZ2h0YXJtNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNDhweDtcbiAgICBsZWZ0OiAyMzFweDtcbiAgICB3aWR0aDogMTU3cHg7XG4gICAgaGVpZ2h0OiA5MXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NDJweCAtMzIzcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogOTAlIDI1JTtcbiAgICBhbmltYXRpb246IHR5cGVMZWZ0IDAuNHMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAuY2hhaXI0MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQzMHB4O1xuICAgIGxlZnQ6IDU1cHg7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGhlaWdodDogMzY1cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEycHggLTY5N3B4O1xuICB9XG4gIFxuICAubGVnczQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzc4cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHdpZHRoOiAzNzBweDtcbiAgICBoZWlnaHQ6IDI0N3B4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zODFweCAtNDQzcHg7XG4gIH1cbiAgXG4gIC5sZWZ0c2hvZTQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTkxcHg7XG4gICAgbGVmdDogNTRweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiA5MnB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMTVweCAtNzQ5cHg7XG4gIH1cbiAgXG4gIC5yaWdodHNob2U0MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU5NHB4O1xuICAgIGxlZnQ6IDE4N3B4O1xuICAgIHdpZHRoOiAxMzVweDtcbiAgICBoZWlnaHQ6IDgxcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ1M3B4IC03NDlweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzNSUgMTIlO1xuICAgIGFuaW1hdGlvbjogdGFwUmlnaHQgMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAubGFwdG9wNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxODZweDtcbiAgICBsZWZ0OiA5cHg7XG4gICAgd2lkdGg6IDM2NXB4O1xuICAgIGhlaWdodDogMjE2cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTJweCAtNDY2cHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgYW5pbWF0aW9uOiB0YXBXb2JibGUgMC40cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3dheSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDRkZWcpO1xuICAgIH1cbiAgICA0NSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDRkZWcpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00ZGVnKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGhlYWRUaWx0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTRkZWcpO1xuICAgIH1cbiAgICAzNSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00ZGVnKTtcbiAgICB9XG4gICAgMzglIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigyZGVnKTtcbiAgICB9XG4gICAgNDIlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigyZGVnKTtcbiAgICB9XG4gICAgNDUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDgyJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDg1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNGRlZyk7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHR5cGVMZWZ0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooN2RlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTZkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB0eXBlUmlnaHQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNmRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooN2RlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHRhcFdvYmJsZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0wLjJkZWcpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDAuMmRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0wLjJkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHRhcFJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTZkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBibGluazQwNCB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MnB4IC0zNTBweDtcbiAgICB9XG4gICAgOTQlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjJweCAtMzUwcHg7XG4gICAgfVxuICAgIDk4JSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYycHggLTM2OHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjJweCAtMzUwcHg7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgcGFuIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG4gICAgfVxuICAgIDQ5JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcbiAgICB9XG4gICAgOTklIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgICB9XG4gIH1cbiAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYXBwbGV0LCBhcnRpY2xlLCBhc2lkZSwgYXVkaW8sIGIsIGJpZywgYmxvY2txdW90ZSwgYm9keSwgY2FudmFzLCBjYXB0aW9uLCBjZW50ZXIsIGNpdGUsIGNvZGUsIGRkLCBkZWwsIGRldGFpbHMsIGRmbiwgZGl2LCBkbCwgZHQsIGVtLCBlbWJlZCwgZmllbGRzZXQsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBmb3JtLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBoZWFkZXIsIGhncm91cCwgaHRtbCwgaSwgaWZyYW1lLCBpbWcsIGlucywga2JkLCBsYWJlbCwgbGVnZW5kLCBsaSwgbWFyaywgbWVudSwgbmF2LCBvYmplY3QsIG9sLCBvdXRwdXQsIHAsIHByZSwgcSwgcnVieSwgcywgc2FtcCwgc2VjdGlvbiwgc21hbGwsIHNwYW4sIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1bW1hcnksIHN1cCwgdGFibGUsIHRib2R5LCB0ZCwgdGZvb3QsIHRoLCB0aGVhZCwgdGltZSwgdHIsIHR0LCB1LCB1bCwgdmFyLCB2aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgXG4gIG9sLCB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBcbiAgYmxvY2txdW90ZSwgcSB7XG4gICAgcXVvdGVzOiBub25lO1xuICB9XG4gIFxuICBibG9ja3F1b3RlOmFmdGVyLCBibG9ja3F1b3RlOmJlZm9yZSwgcTphZnRlciwgcTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cbiAgXG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG4gIFxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgXG4gIGh0bWwge1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgfVxuICBcbiAgYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgYXVkaW8sIGNhbnZhcywgcGljdHVyZSwgcHJvZ3Jlc3MsIHZpZGVvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIHRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sIGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiwgaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbiwgaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB9XG4gIFxuICB0ZXh0YXJlYSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG4gIFxuICA6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLnUtaXNWaXN1YWxseUhpZGRlbiB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIFxuICAud2l0aGFuZXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxuICAud2l0aGFuZXM6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgbGVmdDogLTJweDtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJveC1zaGFkb3c6IDhweCAycHggIzc5NWY0MSwgMTBweCAycHggIzc5NWY0MSwgMTJweCAycHggIzc5NWY0MSwgMTRweCAycHggIzc5NWY0MSwgMTZweCAycHggIzc5NWY0MSwgMThweCAycHggIzc5NWY0MSwgNnB4IDRweCAjNzk1ZjQxLCA4cHggNHB4ICM3OTVmNDEsIDEwcHggNHB4ICM3OTVmNDEsIDEycHggNHB4ICM3OTVmNDEsIDE0cHggNHB4ICM3OTVmNDEsIDE2cHggNHB4ICM3OTVmNDEsIDE4cHggNHB4ICM3OTVmNDEsIDIwcHggNHB4ICM3OTVmNDEsIDRweCA2cHggIzc5NWY0MSwgNnB4IDZweCAjNzk1ZjQxLCA4cHggNnB4ICNlOWQ4YmMsIDEwcHggNnB4ICM3OTVmNDEsIDEycHggNnB4ICM3OTVmNDEsIDE0cHggNnB4ICM3OTVmNDEsIDE2cHggNnB4ICM3OTVmNDEsIDE4cHggNnB4ICNjYmI0OTAsIDIwcHggNnB4ICM3OTVmNDEsIDIycHggNnB4ICM3OTVmNDEsIDRweCA4cHggIzc5NWY0MSwgNnB4IDhweCAjZTlkOGJjLCA4cHggOHB4ICNlMGM5YTQsIDEwcHggOHB4ICNlMGM5YTQsIDEycHggOHB4ICNlMGM5YTQsIDE0cHggOHB4ICNlMGM5YTQsIDE2cHggOHB4ICNlMGM5YTQsIDE4cHggOHB4ICNjYmI0OTAsIDIwcHggOHB4ICNjYmI0OTAsIDIycHggOHB4ICM3OTVmNDEsIDJweCAxMHB4ICM3ZTZmNWQsIDRweCAxMHB4ICNlOWQ4YmMsIDZweCAxMHB4ICNlMGM5YTQsIDhweCAxMHB4ICNlMGM5YTQsIDEwcHggMTBweCAjZTBjOWE0LCAxMnB4IDEwcHggI2UwYzlhNCwgMTRweCAxMHB4ICNlMGM5YTQsIDE2cHggMTBweCAjZTBjOWE0LCAxOHB4IDEwcHggI2UwYzlhNCwgMjBweCAxMHB4ICNjYmI0OTAsIDIycHggMTBweCAjY2JiNDkwLCAyNHB4IDEwcHggIzdlNmY1ZCwgMnB4IDEycHggIzdlNmY1ZCwgNHB4IDEycHggI2U5ZDhiYywgNnB4IDEycHggI2UwYzlhNCwgOHB4IDEycHggI2UwYzlhNCwgMTBweCAxMnB4ICNlMGM5YTQsIDEycHggMTJweCAjZTBjOWE0LCAxNHB4IDEycHggI2UwYzlhNCwgMTZweCAxMnB4ICNlMGM5YTQsIDE4cHggMTJweCAjZTBjOWE0LCAyMHB4IDEycHggI2UwYzlhNCwgMjJweCAxMnB4ICNjYmI0OTAsIDI0cHggMTJweCAjN2U2ZjVkLCAycHggMTRweCAjN2U2ZjVkLCA0cHggMTRweCAjZTlkOGJjLCA2cHggMTRweCAjZTBjOWE0LCA4cHggMTRweCAjY2JiNDkwLCAxMHB4IDE0cHggI2NiYjQ5MCwgMTJweCAxNHB4ICNlMGM5YTQsIDE0cHggMTRweCAjZTBjOWE0LCAxNnB4IDE0cHggI2NiYjQ5MCwgMThweCAxNHB4ICNjYmI0OTAsIDIwcHggMTRweCAjZTBjOWE0LCAyMnB4IDE0cHggI2NiYjQ5MCwgMjRweCAxNHB4ICM3ZTZmNWQsIDJweCAxNnB4ICNiNmEyODEsIDRweCAxNnB4ICNlOWQ4YmMsIDZweCAxNnB4ICNlMGM5YTQsIDhweCAxNnB4ICMwMDAwMDAsIDEwcHggMTZweCAjMDAwMDAwLCAxMnB4IDE2cHggI2U5ZDhiYywgMTRweCAxNnB4ICNlMGM5YTQsIDE2cHggMTZweCAjMDAwMDAwLCAxOHB4IDE2cHggIzAwMDAwMCwgMjBweCAxNnB4ICNlMGM5YTQsIDIycHggMTZweCAjY2JiNDkwLCAyNHB4IDE2cHggI2I2YTI4MSwgMnB4IDE4cHggI2NiYjQ5MCwgNHB4IDE4cHggI2U5ZDhiYywgNnB4IDE4cHggI2UwYzlhNCwgOHB4IDE4cHggI2UwYzlhNCwgMTBweCAxOHB4ICNlMGM5YTQsIDEycHggMThweCAjZTlkOGJjLCAxNHB4IDE4cHggI2UwYzlhNCwgMTZweCAxOHB4ICNlMGM5YTQsIDE4cHggMThweCAjZTBjOWE0LCAyMHB4IDE4cHggI2UwYzlhNCwgMjJweCAxOHB4ICNjYmI0OTAsIDI0cHggMThweCAjY2JiNDkwLCA0cHggMjBweCAjNzk1ZjQxLCA2cHggMjBweCAjZTBjOWE0LCA4cHggMjBweCAjZTBjOWE0LCAxMHB4IDIwcHggI2UwYzlhNCwgMTJweCAyMHB4ICNlOWQ4YmMsIDE0cHggMjBweCAjZTBjOWE0LCAxNnB4IDIwcHggI2UwYzlhNCwgMThweCAyMHB4ICNlMGM5YTQsIDIwcHggMjBweCAjZTBjOWE0LCAyMnB4IDIwcHggIzc5NWY0MSwgNHB4IDIycHggIzc5NWY0MSwgNnB4IDIycHggI2UwYzlhNCwgOHB4IDIycHggI2UwYzlhNCwgMTBweCAyMnB4ICNlMGM5YTQsIDEycHggMjJweCAjY2JiNDkwLCAxNHB4IDIycHggI2NiYjQ5MCwgMTZweCAyMnB4ICNlMGM5YTQsIDE4cHggMjJweCAjZTBjOWE0LCAyMHB4IDIycHggI2NiYjQ5MCwgMjJweCAyMnB4ICM3OTVmNDEsIDRweCAyNHB4ICM3OTVmNDEsIDZweCAyNHB4ICM3OTVmNDEsIDhweCAyNHB4ICM3OTVmNDEsIDEwcHggMjRweCAjNzk1ZjQxLCAxMnB4IDI0cHggIzc5NWY0MSwgMTRweCAyNHB4ICM3OTVmNDEsIDE2cHggMjRweCAjNzk1ZjQxLCAxOHB4IDI0cHggIzc5NWY0MSwgMjBweCAyNHB4ICM3OTVmNDEsIDIycHggMjRweCAjNzk1ZjQxLCA2cHggMjZweCAjNzk1ZjQxLCA4cHggMjZweCAjNzk1ZjQxLCAxMHB4IDI2cHggI2UwYzlhNCwgMTJweCAyNnB4ICNlMGM5YTQsIDE0cHggMjZweCAjZTBjOWE0LCAxNnB4IDI2cHggI2I2YTI4MSwgMThweCAyNnB4ICM3OTVmNDEsIDIwcHggMjZweCAjNzk1ZjQxLCA4cHggMjhweCAjN2U2ZjVkLCAxMHB4IDI4cHggI2UwYzlhNCwgMTJweCAyOHB4ICM3ZTZmNWQsIDE0cHggMjhweCAjN2U2ZjVkLCAxNnB4IDI4cHggI2I2YTI4MSwgMThweCAyOHB4ICM3ZTZmNWQsIDhweCAzMHB4ICM3ZTZmNWQsIDEwcHggMzBweCAjNzk1ZjQxLCAxMnB4IDMwcHggIzdlNmY1ZCwgMTRweCAzMHB4ICM3ZTZmNWQsIDE2cHggMzBweCAjNzk1ZjQxLCAxOHB4IDMwcHggIzdlNmY1ZCwgMTBweCAzMnB4ICM3ZTZmNWQsIDEycHggMzJweCAjN2U2ZjVkLCAxNHB4IDMycHggIzdlNmY1ZCwgMTZweCAzMnB4ICM3ZTZmNWQ7XG4gIH1cbiAgXG4gIC53aXRoYW5lcy1uYW1lIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDRweDtcbiAgICByaWdodDogMTZweDtcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgIC8qICAgICB3aWR0aDogMDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW4tb3V0LCB3aWR0aCAwIGxpbmVhciAyNTBtcywgdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuICB9XG4gIC53aXRoYW5lcy1uYW1lOmFmdGVyIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gNXB4KTtcbiAgICByaWdodDogLTZweDtcbiAgfVxuICBcbiAgLndpdGhhbmVzOmhvdmVyIC53aXRoYW5lcy1uYW1lIHtcbiAgICAvKiAgICAgd2lkdGg6IDEyMHB4OyAqL1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEyNW1zIGVhc2UtaW4tb3V0IDEwMG1zLCB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG4gIH1cbiAgXG4gIC53aXRoYW5lczpob3ZlcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gIFxuICAud2l0aGFuZXMtbmFtZSA+IC5oZWFydCB7XG4gICAgbWFyZ2luOiAwIDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QxM0UzNTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLndpdGhhbmVzLW5hbWUgPiAuaGVhcnQ6YmVmb3JlLCAud2l0aGFuZXMtbmFtZSA+IC5oZWFydDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMTNFMzU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC53aXRoYW5lcy1uYW1lID4gLmhlYXJ0OmJlZm9yZSB7XG4gICAgbGVmdDogLTNweDtcbiAgfVxuICAud2l0aGFuZXMtbmFtZSA+IC5oZWFydDphZnRlciB7XG4gICAgdG9wOiAtM3B4O1xuICB9XG4gIFxuICAuZ3JpZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLyogSUU5IGZhbGxiYWNrIGZvciBGbGV4ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBVc2luZyBGbGV4IGZvciBlcXVhbCBoZWlnaHQgY29udGFpbmVycyAqL1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAvKiBDaGlsZHJlbiBuZWVkIHRvIHdyYXAgKi9cbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgLyogRm9yIGVxdWFsIGhlaWdodCAqL1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICAvKiBIb3Jpb250YWwgZ2FwIGZpeCBmb3IgaW5saW5lLWJsb2NrIGZhbGxiYWNrICovXG4gIH1cbiAgXG4gIC5ncmlkICsgLmdyaWQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgLyogcmVzZXQgbWFyZ2luIG9uIHN0YWNrZWQgZ3JpZHMgKi9cbiAgfVxuICBcbiAgLmdyaWQtY29sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qIFVzaW5nIGJveC1zaXppbmcgc28gcGFkZGluZyBkb2Vzbid0IGFmZmVjdCB3aWR0aCAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAvKiBJRTkgZmFsbGJhY2sgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLyogUmVzZXR0aW5nIGZvbnQtc2l6ZSBmb3IgaG9yaXpvbnRhbCBnYXAgZml4ICovXG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8xb2YxMiB7XG4gICAgd2lkdGg6IDguMzMzMzMzMzMzMyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8yb2YxMiB7XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfM29mMTIge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF80b2YxMiB7XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfNW9mMTIge1xuICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzZvZjEyIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfN29mMTIge1xuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzhvZjEyIHtcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF85b2YxMiB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICBcbiAgLmdyaWQtY29sXzEwb2YxMiB7XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xuICB9XG4gIFxuICAuZ3JpZC1jb2xfMTFvZjEyIHtcbiAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbF8xMm9mMTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuZ3JpZC1jb2xfMW9mMTJTTSB7XG4gICAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8yb2YxMlNNIHtcbiAgICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8zb2YxMlNNIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNG9mMTJTTSB7XG4gICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNW9mMTJTTSB7XG4gICAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNm9mMTJTTSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzdvZjEyU00ge1xuICAgICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzhvZjEyU00ge1xuICAgICAgd2lkdGg6IDY2LjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzlvZjEyU00ge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8xMG9mMTJTTSB7XG4gICAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfMTFvZjEyU00ge1xuICAgICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzEyb2YxMlNNIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICAuZ3JpZC1jb2xfMW9mMTJNRCB7XG4gICAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8yb2YxMk1EIHtcbiAgICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8zb2YxMk1EIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNG9mMTJNRCB7XG4gICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNW9mMTJNRCB7XG4gICAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfNm9mMTJNRCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzdvZjEyTUQge1xuICAgICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzhvZjEyTUQge1xuICAgICAgd2lkdGg6IDY2LjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzlvZjEyTUQge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIFxuICAgIC5ncmlkLWNvbF8xMG9mMTJNRCB7XG4gICAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG4gICAgfVxuICBcbiAgICAuZ3JpZC1jb2xfMTFvZjEyTUQge1xuICAgICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmdyaWQtY29sXzEyb2YxMk1EIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICAuYmxvY2tzIHtcbiAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAvKiBvZmZzZXQgYmxvY2tzIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHNwYWNpbmcgLSBtdXN0IG1hdGNoIHBhZGRpbmcgb2YgYmxvY2tzIGl0ZW1zICovXG4gICAgZm9udC1zaXplOiAwO1xuICAgIC8qIHJlbW92ZSBpbmxpbmUgYmxvY2sgd2hpdGVzcGFjZSAqL1xuICB9XG4gIFxuICAuYmxvY2tzID4gKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMzBweCAwIDAgMzBweDtcbiAgICAvKiBzcGFjZSBibG9ja3MgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IC0gb2Zmc2V0IGlzIGhhbmRsZWQgYnkgLmJsb2NrcyAqL1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvKiByZXR1cm4gdGhlIGZvbnQgc2l6ZSAqL1xuICB9XG4gIFxuICAuYmxvY2tzXzJ1cCA+ICoge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5ibG9ja3NfM3VwID4gKiB7XG4gICAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgfVxuICBcbiAgLmJsb2Nrc180dXAgPiAqIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIFxuICAudS1zck9ubHkge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5lcnJvcjQwNHBhZ2Uge1xuICAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLmJvZHk0MDQsXG4gIC5oZWFkNDA0LFxuICAuZXllczQwNCxcbiAgLmxlZnRhcm00MDQsXG4gIC5yaWdodGFybTQwNCxcbiAgLmNoYWlyNDA0LFxuICAubGVmdHNob2U0MDQsXG4gIC5yaWdodHNob2U0MDQsXG4gIC5sZWdzNDA0LFxuICAubGFwdG9wNDA0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTU5NzkvNDA0LWNoYXJhY3Rlci1uZXcucG5nKSAwIDAgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gIFxuICAubmV3Y2hhcmFjdGVyNDA0LFxuICAudG9yc280MDQsXG4gIC5ib2R5NDA0LFxuICAuaGVhZDQwNCxcbiAgLmV5ZXM0MDQsXG4gIC5sZWZ0YXJtNDA0LFxuICAucmlnaHRhcm00MDQsXG4gIC5jaGFpcjQwNCxcbiAgLmxlZnRzaG9lNDA0LFxuICAucmlnaHRzaG9lNDA0LFxuICAubGVnczQwNCxcbiAgLmxhcHRvcDQwNCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3NTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5uZXdjaGFyYWN0ZXI0MDQge1xuICAgXG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xuICB9XG4gIFxuICAudG9yc280MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDEzOHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMzg5cHg7XG4gICAgaGVpZ2h0OiAyNTJweDtcbiAgICBhbmltYXRpb246IHN3YXkgMjBzIGVhc2UgaW5maW5pdGU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIH1cbiAgXG4gIC5ib2R5NDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAzODlweDtcbiAgICBoZWlnaHQ6IDI1M3B4O1xuICB9XG4gIFxuICAuaGVhZDQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE0OHB4O1xuICAgIGxlZnQ6IDEwNnB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDE5NHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMjY1cHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDg1JTtcbiAgICBhbmltYXRpb246IGhlYWRUaWx0IDIwcyBlYXNlIGluZmluaXRlO1xuICB9XG4gIFxuICAuZXllczQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTJweDtcbiAgICBsZWZ0OiAzNHB4O1xuICAgIHdpZHRoOiA3M3B4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYycHggLTM1MHB4O1xuICAgIGFuaW1hdGlvbjogYmxpbms0MDQgMTBzIHN0ZXBzKDEpIGluZmluaXRlLCBwYW4gMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG4gIFxuICAubGVmdGFybTQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTU5cHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTY1cHg7XG4gICAgaGVpZ2h0OiA3M3B4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNjVweCAtMzQxcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogOSUgMzUlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICBhbmltYXRpb246IHR5cGVMZWZ0IDAuNHMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAucmlnaHRhcm00MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE0OHB4O1xuICAgIGxlZnQ6IDIzMXB4O1xuICAgIHdpZHRoOiAxNTdweDtcbiAgICBoZWlnaHQ6IDkxcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ0MnB4IC0zMjNweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA5MCUgMjUlO1xuICAgIGFuaW1hdGlvbjogdHlwZUxlZnQgMC40cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5jaGFpcjQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDMwcHg7XG4gICAgbGVmdDogNTVweDtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgaGVpZ2h0OiAzNjVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTJweCAtNjk3cHg7XG4gIH1cbiAgXG4gIC5sZWdzNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNzhweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgd2lkdGg6IDM3MHB4O1xuICAgIGhlaWdodDogMjQ3cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTM4MXB4IC00NDNweDtcbiAgfVxuICBcbiAgLmxlZnRzaG9lNDA0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1OTFweDtcbiAgICBsZWZ0OiA1NHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDkycHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMxNXB4IC03NDlweDtcbiAgfVxuICBcbiAgLnJpZ2h0c2hvZTQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTk0cHg7XG4gICAgbGVmdDogMTg3cHg7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogODFweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDUzcHggLTc0OXB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDM1JSAxMiU7XG4gICAgYW5pbWF0aW9uOiB0YXBSaWdodCAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5sYXB0b3A0MDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE4NnB4O1xuICAgIGxlZnQ6IDlweDtcbiAgICB3aWR0aDogMzY1cHg7XG4gICAgaGVpZ2h0OiAyMTZweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMnB4IC00NjZweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICBhbmltYXRpb246IHRhcFdvYmJsZSAwLjRzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzd2F5IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNGRlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTRkZWcpO1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgaGVhZFRpbHQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNGRlZyk7XG4gICAgfVxuICAgIDM1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTRkZWcpO1xuICAgIH1cbiAgICAzOCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDJkZWcpO1xuICAgIH1cbiAgICA0MiUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDJkZWcpO1xuICAgIH1cbiAgICA0NSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00ZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgODIlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgODUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0ZGVnKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdHlwZUxlZnQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig3ZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNmRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHR5cGVSaWdodCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC02ZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig3ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdGFwV29iYmxlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTAuMmRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMC4yZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTAuMmRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdGFwUmlnaHQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNmRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGJsaW5rNDA0IHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYycHggLTM1MHB4O1xuICAgIH1cbiAgICA5NCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MnB4IC0zNTBweDtcbiAgICB9XG4gICAgOTglIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjJweCAtMzY4cHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MnB4IC0zNTBweDtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBwYW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgICB9XG4gICAgNDklIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgIH1cbiAgICA5OSUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgIH1cbiAgfVxuICAuYm9hcmQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyMCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgbWFyZ2luOiAtNzVweCAwIDAgLTI1MHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGZvbnQ6IDc1cHgvNzVweCBNb25vdG9uLCBjdXJzaXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgODBweCByZWQsIDAgMCAzMHB4IEZpcmVCcmljaywgMCAwIDZweCBEYXJrUmVkO1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gICAgXG4gICAgI2Vycm9yIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA4MHB4ICNmZmZmZmYsIDAgMCAzMHB4ICMwMDgwMDAsIDAgMCA2cHggIzAwMDBmZjtcbiAgICB9XG4gICAgIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/not-found/not-found.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/not-found/not-found.component.ts ***!
    \*********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppSharedNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {}

      var _proto10 = NotFoundComponent.prototype;

      _proto10.ngOnInit = function ngOnInit() {};

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/not-found/not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/shared/not-found/not-found.component.css")).default]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared/shared.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/shared/shared.module.ts ***!
    \************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../not-found/not-found.component */
    "./src/app/shared/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SharedModule = function SharedModule() {};

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        pathMatch: 'full',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/utility/progress/progress.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/utility/progress/progress.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilityProgressProgressComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".percentage {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n}\n\n.message {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91dGlsaXR5L3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwL3V0aWxpdHkvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJjZW50YWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/utility/progress/progress.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/utility/progress/progress.component.ts ***!
    \********************************************************/

  /*! exports provided: ProgressComponent */

  /***/
  function srcAppUtilityProgressProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return ProgressComponent;
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


    var src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/progress.service */
    "./src/app/services/progress.service.ts");
    /* harmony import */


    var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/quiz.service */
    "./src/app/services/quiz.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ProgressComponent =
    /*#__PURE__*/
    function () {
      function ProgressComponent(progressService, quizService, toastr) {
        this.progressService = progressService;
        this.quizService = quizService;
        this.toastr = toastr;
        this.percentage = 0;
        this.message = 'please start the quiz.';
      }

      var _proto11 = ProgressComponent.prototype;

      _proto11.ngOnInit = function ngOnInit() {
        var _this10 = this;

        this.progressSubscription = this.progressService.isProgressing.subscribe(function (result) {
          _this10.progress = result;
          _this10.percentage = _this10.progress.stepNumber / _this10.progress.totalSteps * 100;
          _this10.message = _this10.progress.stepNumber != _this10.progress.totalSteps ? "you answer:" + _this10.progress.stepNumber + " of " + _this10.progress.totalSteps + " questions" : 'you finished the quiz.';
        });
      };

      _proto11.ngOnDestroy = function ngOnDestroy() {
        this.progressSubscription.unsubscribe();
      };

      return ProgressComponent;
    }();

    ProgressComponent.ctorParameters = function () {
      return [{
        type: src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_2__["ProgressService"]
      }, {
        type: src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utility/progress/progress.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progress.component.css */
      "./src/app/utility/progress/progress.component.css")).default]
    })], ProgressComponent);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.css":
  /*!***********************************************!*\
    !*** ./src/app/welcome/welcome.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .wrapper {\n    text-align: center;\n    padding: 100px;\n    display: flex;\n    justify-content: center;\n} */\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n   \n}\n\n.center {\n    margin: 40px auto;\n}\n\nbody {\n    \n    background-size: cover;\n    font: 14px/20px \"Lato\", Arial, sans-serif;\n    color: #9E9E9E;\n    background-image: url('new.gi.gif');\n   \n}\n\n.clash-card__unit-stats--archer {\n    background: #EE5487;\n}\n\n.clash-card__unit-stats--archer .one-third {\n    border-right: 1px solid #D04976;\n}\n\n.clash-card__unit-stats--wizard {\n    background: #4FACFF;\n}\n\n.clash-card__unit-stats--wizard .one-third {\n    border-right: 1px solid #309eff;\n}\n\n.slide-container {\n    margin: auto;\n    text-align: center;\n}\n\n.wrapper {\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n\n.wrapper:focus {\n    outline: 0;\n}\n\n.clash-card {\n    background: white;\n    width: 62%;\n    display: inline-block;\n    margin: auto;\n    border-radius: 19px;\n    position: relative;\n    text-align: center;\n    box-shadow: -1px 15px 30px -12px black;\n    z-index: 9999;\n}\n\n.clash-card__image {\n    position: relative;\n    margin-bottom: 35px;\n    border-top-left-radius: 14px;\n    border-top-right-radius: 14px;\n}\n\n.clash-card__image--barbarian img {\n    width: 400px;\n    position: absolute;\n    top: -85px;\n    left: 25px;\n}\n\n.clash-card__level {\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 700;\n    margin-bottom: 3px;\n}\n\n.clash-card__level--barbarian {\n    color: #4FACFF;\n}\n\n.clash-card__unit-name {\n    font-size: 26px;\n    color: black;\n    font-weight: 900;\n    margin-bottom: 5px;\n}\n\n.clash-card__unit-description {\n    padding: 20px;\n    margin-bottom: 10px;\n}\n\n.clash-card__unit-stats--barbarian {\n    background: #EC9B3B;\n}\n\n.clash-card__unit-stats--barbarian .one-third {\n    border-right: 1px solid #BD7C2F;\n}\n\n.clash-card__unit-stats {\n    color: white;\n    font-weight: 700;\n    border-bottom-left-radius: 14px;\n    border-bottom-right-radius: 14px;\n}\n\n.clash-card__unit-stats .one-third {\n    width: 33%;\n    float: left;\n    padding: 20px 15px;\n}\n\n.clash-card__unit-stats sup {\n    position: absolute;\n    bottom: 4px;\n    font-size: 45%;\n    margin-left: 2px;\n}\n\n.clash-card__unit-stats .stat {\n    position: relative;\n    font-size: 24px;\n    margin-bottom: 10px;\n}\n\n.clash-card__unit-stats .stat-value {\n    text-transform: uppercase;\n    font-weight: 400;\n    font-size: 12px;\n}\n\n.clash-card__unit-stats .no-border {\n    border-right: none;\n}\n\n.clearfix:after {\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0;\n}\n\n.slick-prev {\n    left: 100px;\n    z-index: 999;\n}\n\n.slick-next {\n    right: 100px;\n    z-index: 999;\n}\n\n.card-img {\n    height: 120px !important;\n    top: -75px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRzs7QUFFSDs7O0lBR0ksc0JBQXNCOztBQUUxQjs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLGNBQWM7SUFDZCxtQ0FBa0Q7O0FBRXREOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6ImFwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC53cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0gKi9cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIFxufVxuXG5cbi5jZW50ZXIge1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xufVxuXG5ib2R5IHtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZvbnQ6IDE0cHgvMjBweCBcIkxhdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICM5RTlFOUU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbmV3LmdpLmdpZik7XG4gICBcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWFyY2hlciB7XG4gICAgYmFja2dyb3VuZDogI0VFNTQ4Nztcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMtLWFyY2hlciAub25lLXRoaXJkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRDA0OTc2O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0td2l6YXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNEZBQ0ZGO1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0td2l6YXJkIC5vbmUtdGhpcmQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMDllZmY7XG59XG5cbi5zbGlkZS1jb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuLndyYXBwZXI6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5jbGFzaC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogNjIlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IC0xcHggMTVweCAzMHB4IC0xMnB4IGJsYWNrO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG5cbi5jbGFzaC1jYXJkX19pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTRweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTRweDtcbn1cblxuLmNsYXNoLWNhcmRfX2ltYWdlLS1iYXJiYXJpYW4gaW1nIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTg1cHg7XG4gICAgbGVmdDogMjVweDtcbn1cblxuLmNsYXNoLWNhcmRfX2xldmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmNsYXNoLWNhcmRfX2xldmVsLS1iYXJiYXJpYW4ge1xuICAgIGNvbG9yOiAjNEZBQ0ZGO1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tYmFyYmFyaWFuIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUM5QjNCO1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cy0tYmFyYmFyaWFuIC5vbmUtdGhpcmQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNCRDdDMkY7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNHB4O1xufVxuXG4uY2xhc2gtY2FyZF9fdW5pdC1zdGF0cyAub25lLXRoaXJkIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgc3VwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgZm9udC1zaXplOiA0NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLnN0YXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNsYXNoLWNhcmRfX3VuaXQtc3RhdHMgLnN0YXQtdmFsdWUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jbGFzaC1jYXJkX191bml0LXN0YXRzIC5uby1ib3JkZXIge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGhlaWdodDogMDtcbn1cblxuLnNsaWNrLXByZXYge1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLnNsaWNrLW5leHQge1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5jYXJkLWltZyB7XG4gICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuICAgIHRvcDogLTc1cHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      // isShowingOptions: boolean = false;
      // selected: string = '';
      function WelcomeComponent() {}

      var _proto12 = WelcomeComponent.prototype;

      _proto12.ngOnInit = function ngOnInit() {};

      _proto12.showOptions = function showOptions() {// this.isShowingOptions = true;
      };

      return WelcomeComponent;
    }();

    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.component.css */
      "./src/app/welcome/welcome.component.css")).default]
    })], WelcomeComponent);
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
      firebase: {
        apiKey: "AIzaSyAH6iuMb39IwCvrNZsp001C-zW8zRcu34k",
        authDomain: "quizz-f7ad8.firebaseapp.com",
        databaseURL: "https://quizz-f7ad8-default-rtdb.firebaseio.com",
        projectId: "quizz-f7ad8",
        storageBucket: "quizz-f7ad8.appspot.com",
        messagingSenderId: "355663557268",
        appId: "1:355663557268:web:ee04cf540e4accae383a81",
        measurementId: "G-PNSN8QBGBE"
      }
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


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
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
    /*! D:\quiz\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map