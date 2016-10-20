'use strict';

angular.module('robot.manager').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/api/config', {
                templateUrl: 'app/features/api/config/configView.html',
                controller: 'ApiConfigController',
                title: 'API Configuration'
            })
            .when('/robot/hand', {
                templateUrl: 'app/features/robot/hand/handView.html',
                controller: 'HandController',
                title: 'Hand Controller'
            })
            .otherwise({
                redirectTo: '/api/config'
            });
    }]);