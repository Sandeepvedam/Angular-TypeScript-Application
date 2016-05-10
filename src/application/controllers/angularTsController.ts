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

        //Inject AngularTSFactory
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

        //It loads the title of application
        private loadTitle(){
            self.title="Angular-TypeScript application";
        }
        
        //This method get's the required data
        private getData(){
            this.AngularTsFactory.getData(this.getData_callback);
        }

        //This call back method contains the response
        private getData_callback(responseData:Array<Object>){
            if(responseData.length !==0){
                self.data = responseData;
                self.isDataRetrieved = true;
                self.isButtonVisible = false;
            }
        }

        // This method clears the json data
        private closeData(){
            self.isButtonVisible = true;
            self.isDataRetrieved = false;
            self.data = [];
        }

    }
}
