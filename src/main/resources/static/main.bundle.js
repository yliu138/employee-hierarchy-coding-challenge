webpackJsonp([2,4],{

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee(employeeId, name, subordinateList, managerList, ceo, validEmployee) {
        this.expanded = true;
        this.employeeId = employeeId;
        this.name = name;
        this.subordinateList = subordinateList || [];
        this.managerlist = managerList || [];
        this.ceo = ceo;
        this.validEmployee = validEmployee;
        this.level = 'abstract';
    }
    Employee.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    Employee.prototype.addSubordiate = function (id) {
        this.subordinateList.push(id);
    };
    Employee.prototype.addManager = function (id) {
        this.managerlist.push(id);
    };
    Employee.prototype.displayName = function () {
        return this.name;
    };
    Employee.prototype.getLevel = function () {
        return this.level;
    };
    return Employee;
}());

//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/Employee.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_NormalEmployee__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Ceo__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_InvalidEmployee__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeFactory; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeFactory = (function () {
    function EmployeeFactory() {
    }
    EmployeeFactory.prototype.createEmployee = function (e) {
        var result = null;
        if (!e.validEmployee) {
            result = new __WEBPACK_IMPORTED_MODULE_2__models_InvalidEmployee__["a" /* InvalidEmployee */](e.employeeId, e.name, e.subordinateList, e.managerlist, e.ceo, e.validEmployee);
        }
        else if (e.ceo) {
            result = new __WEBPACK_IMPORTED_MODULE_1__models_Ceo__["a" /* Ceo */](e.employeeId, e.name, e.subordinateList, e.managerlist, e.ceo, e.validEmployee);
        }
        else {
            result = new __WEBPACK_IMPORTED_MODULE_0__models_NormalEmployee__["a" /* NormalEmployee */](e.employeeId, e.name, e.subordinateList, e.managerlist, e.ceo, e.validEmployee);
        }
        return result;
    };
    return EmployeeFactory;
}());
EmployeeFactory = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EmployeeFactory);

//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/employeeFactory.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_constant__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpClient = (function () {
    function HttpClient(http) {
        this.http = http;
    }
    HttpClient.prototype.createHeader = function (headers, hasJson, token) {
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        if (hasJson) {
            headers.append('Content-Type', 'application/json');
        }
    };
    HttpClient.prototype.setUrl = function (url, urlOpt) {
        var myUrl;
        if (urlOpt) {
            myUrl = urlOpt;
        }
        else {
            myUrl = __WEBPACK_IMPORTED_MODULE_0__app_constant__["a" /* AppConstant */].api + "/" + url;
        }
        return myUrl;
    };
    HttpClient.prototype.get = function (url, token, urlOpt) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        var myUrl;
        myUrl = this.setUrl(url, urlOpt);
        this.createHeader(headers, false, token);
        return this.http.get(myUrl, {
            headers: headers
        })
            .map(function (response) { return response.json(); });
    };
    HttpClient.prototype.post = function (url, dataObj, token, urlOpt) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        var myUrl;
        myUrl = this.setUrl(url, urlOpt);
        this.createHeader(headers, true, token);
        return this.http.post(myUrl, dataObj, {
            headers: headers
        })
            .map(function (response) { return response.json(); });
    };
    HttpClient.prototype.delete = function (url, dataObj, token, urlOpt) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        var myUrl;
        myUrl = this.setUrl(url, urlOpt);
        this.createHeader(headers, true, token);
        return this.http.delete(myUrl, {
            headers: headers,
            body: dataObj
        })
            .map(function (response) { return response.json(); });
    };
    HttpClient.prototype.put = function (url, dataObj, token, urlOpt) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        var myUrl;
        myUrl = this.setUrl(url, urlOpt);
        this.createHeader(headers, true, token);
        return this.http.put(myUrl, dataObj, {
            headers: headers
        })
            .map(function (response) { return response.json(); });
    };
    return HttpClient;
}());
HttpClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HttpClient);

var _a;
//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/http.client.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceHandler; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceHandler = (function () {
    function ServiceHandler() {
    }
    ServiceHandler.prototype.handleError = function (err) {
        var pb;
        var returnMessage;
        try {
            pb = JSON.parse(err['_body']);
            if ('errorMessage' in pb) {
                console.log('Error message: ', pb.errorMessage);
            }
            returnMessage = {
                err: err,
                parsedBody: pb,
            };
        }
        catch (catchError) {
            console.log('Error message: ', err['_body']);
            returnMessage = {
                err: err,
                errorMessage: err['_body'],
            };
        }
        return returnMessage;
    };
    return ServiceHandler;
}());
ServiceHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ServiceHandler);

//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/service.handler.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(600);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/main.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstant; });
var AppConstant = (function () {
    function AppConstant() {
    }
    return AppConstant;
}());

AppConstant.api = 'http://localhost:8080';
AppConstant.stage = '{stage}';
//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/app.constant.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_treeview_treeview_moule__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_service_handler__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_client__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_app_component__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_employeeFactory__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__pages_app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__components_treeview_treeview_moule__["a" /* TreeViewModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__services_http_client__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__services_service_handler__["a" /* ServiceHandler */],
            __WEBPACK_IMPORTED_MODULE_8__services_employeeFactory__["a" /* EmployeeFactory */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__pages_app_component__["a" /* AppComponent */]],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["_13" /* CUSTOM_ELEMENTS_SCHEMA */]
        ]
    })
], AppModule);

//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/app.module.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeViewComponent = (function () {
    function TreeViewComponent() {
    }
    TreeViewComponent.prototype.ngOnInit = function () { };
    return TreeViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(),
    __metadata("design:type", Object)
], TreeViewComponent.prototype, "directories", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(),
    __metadata("design:type", Object)
], TreeViewComponent.prototype, "map", void 0);
TreeViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* Component */])({
        selector: 'tree-view',
        template: __webpack_require__(656),
        styles: [__webpack_require__(653)]
    }),
    __metadata("design:paramtypes", [])
], TreeViewComponent);

//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/treeview.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__treeview_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreeViewModule = (function () {
    function TreeViewModule() {
    }
    return TreeViewModule;
}());
TreeViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_0__treeview_component__["a" /* TreeViewComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__treeview_component__["a" /* TreeViewComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* CommonModule */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], TreeViewModule);

//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/treeview.moule.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Employee__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ceo; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var Ceo = (function (_super) {
    __extends(Ceo, _super);
    function Ceo(employeeId, name, subordinateList, managerList, ceo, validEmployee) {
        var _this = _super.call(this, employeeId, name, subordinateList, managerList, ceo, validEmployee) || this;
        _this.level = 'ceo';
        return _this;
    }
    // Override
    Ceo.prototype.displayName = function () {
        return this.name + " (CEO)";
    };
    // Override
    Ceo.prototype.addManager = function (id) {
        // Should do nothing here as CEO is assuemd to not have any manager
    };
    return Ceo;
}(__WEBPACK_IMPORTED_MODULE_0__Employee__["a" /* Employee */]));

//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/Ceo.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Employee__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidEmployee; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var InvalidEmployee = (function (_super) {
    __extends(InvalidEmployee, _super);
    function InvalidEmployee(employeeId, name, subordinateList, managerList, ceo, validEmployee) {
        var _this = _super.call(this, employeeId, name, subordinateList, managerList, ceo, validEmployee) || this;
        _this.level = 'invalid';
        return _this;
    }
    // Override
    InvalidEmployee.prototype.displayName = function () {
        return this.name + " (Invalid)";
    };
    // Override
    InvalidEmployee.prototype.addManager = function (id) {
        // Should do nothing here as CEO is assuemd to not have any manager
    };
    // Override
    InvalidEmployee.prototype.addSubordiate = function (id) {
        // Should do nothing as invalid Employee will not have any subordinate
    };
    return InvalidEmployee;
}(__WEBPACK_IMPORTED_MODULE_0__Employee__["a" /* Employee */]));

//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/InvalidEmployee.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Employee__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalEmployee; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var NormalEmployee = (function (_super) {
    __extends(NormalEmployee, _super);
    function NormalEmployee(employeeId, name, subordinateList, managerList, ceo, validEmployee) {
        var _this = _super.call(this, employeeId, name, subordinateList, managerList, ceo, validEmployee) || this;
        _this.level = 'normal';
        if (_this.subordinateList.length > 0) {
            _this.level = 'normal-manager';
        }
        else {
            _this.level = 'normal-leaf';
        }
        return _this;
    }
    return NormalEmployee;
}(__WEBPACK_IMPORTED_MODULE_0__Employee__["a" /* Employee */]));

//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/NormalEmployee.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_employeeFactory__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_employeeService__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeMapGetCallback = (function () {
    function EmployeeMapGetCallback(cb) {
        this.cb = cb;
    }
    EmployeeMapGetCallback.prototype.onSuccess = function (response) {
        this.cb(response);
    };
    EmployeeMapGetCallback.prototype.onError = function (err) {
        console.log("Error: " + JSON.stringify(err, null, 2));
    };
    return EmployeeMapGetCallback;
}());
var AppComponent = (function () {
    function AppComponent(employeeService, employeefac) {
        var _this = this;
        this.employeeService = employeeService;
        this.employeefac = employeefac;
        this.handleMapGet = function (response) {
            _this.ceoId = response.ceoId;
            _this.directories = [_this.ceoId];
            _this.employeeMap = response.map;
            _this.ceo = _this.employeeMap[_this.ceoId];
            // Construct the employee types so that they could be used for the tree view
            var ids = Object.keys(_this.employeeMap);
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                _this.employeeMap[id] = _this.employeefac.createEmployee(_this.employeeMap[id]);
            }
        };
        this.title = 'Employee Hierarchy';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.employeeService.getEmployeeMap(new EmployeeMapGetCallback(this.handleMapGet));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_22" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(657),
        styles: [__webpack_require__(654)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_http_employeeService__["a" /* EmployeeService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_employeeService__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_employeeService__["a" /* EmployeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_employeeFactory__["a" /* EmployeeFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_employeeFactory__["a" /* EmployeeFactory */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/app.component.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_handler__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client__ = __webpack_require__(355);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = (function () {
    function EmployeeService(http, serviceHandler) {
        this.http = http;
        this.serviceHandler = serviceHandler;
    }
    EmployeeService.prototype.getAllEmployee = function (cb) {
        var _this = this;
        this.http.get('employee', null)
            .subscribe(function (res) {
            cb.onSuccess(res);
        }, function (err) {
            var errObj = _this.serviceHandler.handleError(err);
            cb.onError(errObj);
        });
    };
    EmployeeService.prototype.getEmployeeMap = function (cb) {
        var _this = this;
        this.http.get('employee/map', null)
            .subscribe(function (res) {
            cb.onSuccess(res);
        }, function (err) {
            var errObj = _this.serviceHandler.handleError(err);
            cb.onError(errObj);
        });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__service_handler__["a" /* ServiceHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_handler__["a" /* ServiceHandler */]) === "function" && _b || Object])
], EmployeeService);

var _a, _b;
//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/employeeService.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/leoliu/angular/employee-hierarchy-client/src/environment.js.map

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(160)();
// imports


// module
exports.push([module.i, ".treeview {\n  list-style-type: none; }\n  .treeview .toggle {\n    cursor: pointer;\n    top: 10px;\n    z-index: 1;\n    position: relative; }\n    .treeview .toggle .toggle-children {\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC);\n      height: 8px;\n      width: 9px;\n      background-size: contain;\n      display: inline-block;\n      position: relative;\n      top: 1px;\n      background-repeat: no-repeat;\n      background-position: center; }\n  .treeview .toggle-expanded .toggle-children {\n    transform: rotate(90deg); }\n  .treeview .toggle-collapsed .toggle-children {\n    transform: rotate(0); }\n  .treeview .node-wrapper, .treeview .tree-children {\n    cursor: pointer;\n    position: relative; }\n  .treeview .node-wrapper::before, .treeview .tree-children::after {\n    content: \"\";\n    position: absolute; }\n  .treeview .node-wrapper::before {\n    border-bottom: 1px dashed #A3A3A3;\n    border-left: 1px dashed #A3A3A3;\n    height: 10px;\n    top: -9px;\n    width: 10px;\n    left: -10px; }\n  .treeview .node-title {\n    top: -8px;\n    position: relative;\n    left: 15px; }\n    .treeview .node-title.ceo {\n      color: #B22FC7;\n      font-weight: 700;\n      font-size: 1.3em; }\n    .treeview .node-title.normal-manager {\n      color: #2196f3;\n      font-weight: 600;\n      font-size: 1.2em; }\n    .treeview .node-title.normal-leaf {\n      color: #ff9800;\n      font-size: 1.1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(160)();
// imports


// module
exports.push([module.i, ".app-component {\n  padding: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = "<ul class=\"treeview\">\n    <li *ngFor=\"let dirId of directories\">\n        <span *ngIf=\"map[dirId].subordinateList.length > 0\" [ngClass]=\"map[dirId].expanded ? 'toggle-expanded' : 'toggle-collapsed'\" (click)=\"map[dirId].toggle()\" class=\"toggle\" >\n            <span class=\"toggle-children\"></span>\n        </span>\n        \n        <div class=\"node-wrapper\">\n            <span class=\"node-title\" id=\"{{map[dirId].employeeId}}\" [ngClass]=\"map[dirId].getLevel()\">\n                {{ map[dirId].displayName() }} ({{map[dirId].subordinateList.length}})\n            </span>\n        </div>\n        \n        <div *ngIf=\"map[dirId].expanded\" class=\"tree-children\">\n            <tree-view [directories]=\"map[dirId].subordinateList\" [map]=\"map\"></tree-view>\n        </div>\n    </li>\n</ul>"

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-component\">\n  <h1>\n    {{title}}\n  </h1>\n  <tree-view [directories]=\"directories\" [map]=\"employeeMap\"></tree-view>\n</div>\n"

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(473);


/***/ })

},[942]);
//# sourceMappingURL=main.bundle.js.map