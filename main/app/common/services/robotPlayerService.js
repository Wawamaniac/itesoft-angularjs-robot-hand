'use strict';

angular.module('robot.manager').service('RobotPlayerService', ['$http', function($http)
{
	console.log('RobotPlayerService');

	function _play(baseUrl, step)
	{
		console.log('RobotPlayerService _play baseUrl : ' + baseUrl);
		console.log('RobotPlayerService _play step : ');
		console.log(step);

		$http(
		{
			method: 'GET',
			url: baseUrl,
			params: step.hand
		}).then(function successCallback(response)
		{
			console.log('RobotPlayerService _play successCallback : ' + response);
		}, function errorCallback(response)
		{
			console.log('RobotPlayerService _play errorCallback : ' + response);
		});
	}

	return {
		play: _play,
	};
}]);