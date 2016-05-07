/**
 * Author : Sandeep Vedam
 * App Routings
 */
/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/angularjs/angular-route.d.ts"/>
'use strict';
var angularTsApp = angular.module('angularTsApp', ['ngRoute', 'appInitializeModule']);
var app;
(function (app) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider
                .when('/sample', {
                'templateUrl': 'src/application/partials/samplePage.html',
                'controller': 'AngularTsController',
                'controllerAs': 'AngularTsController'
            })
                .otherwise({ redirectTo: '/sample' });
        }
        return Config;
    }());
    app.Config = Config;
    Config.$inject = ['$routeProvider'];
    angularTsApp.config(Config);
})(app || (app = {}));
