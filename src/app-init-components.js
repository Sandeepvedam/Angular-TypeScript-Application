/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/angularjs/angular-route.d.ts"/>
/// <reference path="application/controllers/angularTsController.ts"/>
'use strict';
var appInitializeModule = angular.module('appInitializeModule', []);
// begin services
appInitializeModule.service("AngularTsService", Application.Services.AngularTsService);
// begin factories
appInitializeModule.factory("AngularTsFactory", Application.Factories.AngularTsFactory.Factory);
// begin controllers
appInitializeModule.controller("AngularTsController", Application.Controller.AngularTsController);
