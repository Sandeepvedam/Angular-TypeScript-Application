/**
 * Author : Sandeep Vedam
 * Angular-TS Factory
 */
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../services/angularTsService.ts"/>
'use strict';
module Application.Factories{

    import service = Application.Services;
    var self : IAngularTs;

    export interface IAngularTs{
        getData(getData_callback: Function);
    }

    export class AngularTsFactory implements IAngularTs{

        AngularTsService : service.IAngularTsService;

        static $inject=['AngularTsService'];

       constructor(AngularTsService:service.IAngularTsService){
            this.AngularTsService = AngularTsService;
       }

        public getData(getData_callback: Function){
            var result = this.AngularTsService.getData();
            result.success(function (response) {
                getData_callback(response);
            })
        }

        static Factory(AngularTsService: service.IAngularTsService) {
            return new AngularTsFactory(AngularTsService);
        }
    }
}
