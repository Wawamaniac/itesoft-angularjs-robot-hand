'use strict';

angular.module('localStorage.service', []);

angular.module('localStorage.service').provider('ITLocalStorage', function()
{
	console.log('ITLocalStorage');

	var self = this;
	self.defaultKey = 'IT_KEY';

	this.$get = function()
	{
		function _save(data)
		{
			if (data)
			{
				localStorage.setItem(self.defaultKey, data);
			}
		}

		function _load()
		{
			return localStorage.getItem(self.defaultKey);
		}

		return {
			save: _save,
			load: _load
		};
	};
});