/**
 * Created by kln on 19/10/2016.
 */
angular.module('robot.manager').controller('ApiConfigController', ['$scope', '$timeout', 'ApplicationService', function($scope, $timeout, ApplicationService)
{
	console.log('ApiConfigController');

	$scope.ApplicationService = ApplicationService;

	$scope.application = angular.fromJson($scope.ApplicationService.load());
	$scope.apiInput = $scope.application.API.URL;

	$scope.saveApiConfig = function()
	{
		var api = $scope.apiInput;

		if (api === null || api === undefined || api === '')
		{
			// input it-input attributes already manages case
		}
		else
		{
			$scope.application.API.URL = api;
			$scope.ApplicationService.save(angular.toJson($scope.application));
		}
	}
}]);