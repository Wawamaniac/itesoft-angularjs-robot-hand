'use strict';

angular.module('robot.manager', [
		'itesoft',
		'ngRoute',
		'ngSanitize',
		'pascalprecht.translate',
		'ui.bootstrap.dropdown',
		'localStorage.service',
		'ui.hand',
		'ui.sortable'
	])
	.config(['$translateProvider', '$translatePartialLoaderProvider', 'ITLocalStorageProvider', function($translateProvider, $translatePartialLoaderProvider, ITLocalStorageProvider)
	{
		// Declare languages mapping
		$translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'de'],
		{
			'en_US': 'en',
			'en_GB': 'en',
			'fr_FR': 'fr',
			'fr-CA': 'fr',
			'de-DE': 'de'
		}).determinePreferredLanguage();

		// Use partial loader
		$translateProvider.useLoader('$translatePartialLoader',
		{
			urlTemplate: 'assets/locale/{lang}/{part}-{lang}.json'
		});

		$translateProvider.useSanitizeValueStrategy();

		ITLocalStorageProvider.defaultKey = 'robot_api_config';
	}])
	.run(['$rootScope', '$route', function($rootScope, $route)
	{
		$rootScope.$on('$routeChangeSuccess', function()
		{
			$rootScope.pageTitle = $route.current.title;
		});
	}]);