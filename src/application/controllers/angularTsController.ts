/**
 * Author : Sandeep Vedam
 * Angular-TS controller
 */

/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../factories/angularTsFactory.ts"/>
'use strict';
module Application.Controller{
    import factory = Application.Factories;      // Import factory
    var self : AngularTsController;                   // Assigning controller to self - Scoping controller to self
    export class AngularTsController{

        //Define data type to different properties that we used in application
        private title:string;
        private AngularTsFactory:factory.IAngularTs;
        private data : Array<Object>;
        private isDataRetrieved : boolean;
        private isButtonVisible : boolean;

        // INje
        static $inject = ['AngularTsFactory'];

        constructor(AngularTsFactory:factory.IAngularTs){
            self = this;
            this.title="";
            this.data = [];
            this.AngularTsFactory = AngularTsFactory;
            this.isDataRetrieved = false;
            this.isButtonVisible = true;
            this.loadTitle();
        }

        private loadTitle(){
            self.title="Angular-TypeScript application";
        }
        
        private getData(){
            this.AngularTsFactory.getData(this.getData_callback);
        }

        private getData_callback(responseData:Object){
            if(responseData.length !==0){
                self.data = responseData;
                self.isDataRetrieved = true;
                self.isButtonVisible = false;
            }
        }

        private closeData(){
            self.isButtonVisible = true;
            self.isDataRetrieved = false;
            self.data = [];
        }

    }
}
