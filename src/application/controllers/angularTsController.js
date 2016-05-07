/**
 * Author : Sandeep Vedam
 * Angular-TS controller
 */
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../factories/angularTsFactory.ts"/>
'use strict';
var Application;
(function (Application) {
    var Controller;
    (function (Controller) {
        var self; // Assigning controller to self - Scoping controller to self
        var AngularTsController = (function () {
            function AngularTsController(AngularTsFactory) {
                self = this;
                this.title = "";
                this.data = [];
                this.AngularTsFactory = AngularTsFactory;
                this.isDataRetrieved = false;
                this.isButtonVisible = true;
                this.loadTitle();
            }
            AngularTsController.prototype.loadTitle = function () {
                self.title = "Angular-TypeScript application";
            };
            AngularTsController.prototype.getData = function () {
                this.AngularTsFactory.getData(this.getData_callback);
            };
            AngularTsController.prototype.getData_callback = function (responseData) {
                if (responseData.length !== 0) {
                    self.data = responseData;
                    self.isDataRetrieved = true;
                    self.isButtonVisible = false;
                }
            };
            AngularTsController.prototype.closeData = function () {
                self.isButtonVisible = true;
                self.isDataRetrieved = false;
                self.data = [];
            };
            // INje
            AngularTsController.$inject = ['AngularTsFactory'];
            return AngularTsController;
        }());
        Controller.AngularTsController = AngularTsController;
    })(Controller = Application.Controller || (Application.Controller = {}));
})(Application || (Application = {}));
