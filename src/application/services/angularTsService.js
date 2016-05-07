/**
 * Author : Sandeep Vedam
 * Angular-TS Service
 */
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';
var Application;
(function (Application) {
    var Services;
    (function (Services) {
        var url = "json/data.json";
        var AngularTsService = (function () {
            function AngularTsService($http) {
                this.$http = $http;
            }
            AngularTsService.prototype.getData = function () {
                return this.$http.get(url, {
                    query: {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                });
            };
            AngularTsService.$inject = ['$http'];
            return AngularTsService;
        }());
        Services.AngularTsService = AngularTsService;
    })(Services = Application.Services || (Application.Services = {}));
})(Application || (Application = {}));
