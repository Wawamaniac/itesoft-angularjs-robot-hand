'use strict';

angular.module('robot.manager').service('ApplicationService', ['ITLocalStorage', 'Application', function(ITLocalStorage, Application)
{
	console.log('ApplicationService');

	function _load()
	{
		var application = ITLocalStorage.load();
		return application ? application : new Application();
	}

	return {
		load: _load,
		save: ITLocalStorage.save
	};
}]);