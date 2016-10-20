'use strict';

angular.module('robot.manager').factory('Application', [function()
{
	console.log('Application');

	function Application()
	{
		this.API = {
			URL: ''
		};
		this.stepTime = 500;
		this.playlist = [];
		this.savedPlaylists = [];
	}

	return function()
	{
		return new Application();
	};
}]);