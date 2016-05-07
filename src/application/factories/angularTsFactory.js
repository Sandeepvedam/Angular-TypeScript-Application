/**
 * Author : Sandeep Vedam
 * Angular-TS Factory
 */
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../services/angularTsService.ts"/>
'use strict';
var Application;
(function (Application) {
    var Factories;
    (function (Factories) {
        var self;
        var AngularTsFactory = (function () {
            function AngularTsFactory(AngularTsService) {
                this.AngularTsService = AngularTsService;
            }
            AngularTsFactory.prototype.getData = function (getData_callback) {
                var result = this.AngularTsService.getData();
                result.success(function (response) {
                    getData_callback(response);
                });
            };
            AngularTsFactory.Factory = function (AngularTsService) {
                return new AngularTsFactory(AngularTsService);
            };
            AngularTsFactory.$inject = ['AngularTsService'];
            return AngularTsFactory;
        }());
        Factories.AngularTsFactory = AngularTsFactory;
    })(Factories = Application.Factories || (Application.Factories = {}));
})(Application || (Application = {}));
