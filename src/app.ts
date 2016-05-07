/**
 * Author : Sandeep Vedam
 * App Routings
 */
/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/angularjs/angular-route.d.ts"/>
'use strict';
var angularTsApp = angular.module('angularTsApp',['ngRoute','appInitializeModule']);
module app{
    export class Config{
        constructor($routeProvider:ng.route.IRouteProvider){
            $routeProvider
                .when('/sample',
                    {
                        'templateUrl'  : 'src/application/partials/samplePage.html',
                        'controller'   : 'AngularTsController',
                        'controllerAs' : 'AngularTsController'
                    })
                .otherwise({redirectTo: '/sample'});
        }
    }
    Config.$inject = ['$routeProvider'];
    angularTsApp.config(Config);
}