/**
 * Author : Sandeep Vedam
 * Angular-TS Service
 */

/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';
module Application.Services{

    var url = "json/data.json";

    export interface IAngularTsService{
        getData();
    }

    export class AngularTsService implements IAngularTsService{
        $http:any;
        static $inject=['$http'];
        constructor($http:ng.IHttpService){
            this.$http = $http;
        }

        public getData(){
            return this.$http.get(url, {
                query: {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            });
        }
    }
}
