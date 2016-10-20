/**
 * Created by kln on 19/10/2016.
 */
angular.module('robot.manager').controller('HandController', ['$scope', 'ApplicationService', 'RobotPlayerService', 'Hand', 'Step', function($scope, ApplicationService, RobotPlayerService, Hand, Step)
{
	console.log('HandController');

	$scope.ApplicationService = ApplicationService;
	$scope.RobotPlayerService = RobotPlayerService;

	$scope.application = angular.fromJson($scope.ApplicationService.load());
	$scope.hand = new Hand();

	$scope.addHandConfigToPlaylist = function()
	{
		console.log('addHandConfigToPlaylist');
		console.log($scope.hand);

		$scope.application.playlist.push(new Step($scope.application.playlist.length, new Hand($scope.hand)));
	}

	$scope.deleteStep = function(step)
	{
		var indexToDelete = -1;
		angular.forEach($scope.application.playlist, function(value, index)
		{
			if (angular.equals(value, step))
			{
				indexToDelete = index;
			}
		});

		if (indexToDelete != -1)
		{
			$scope.application.playlist.splice(indexToDelete, 1);

			angular.forEach($scope.application.playlist, function(value, index)
			{
				value.index = index;
			});
		}
	}

	$scope.savePlaylist = function(playlist)
	{
		var playlistName = prompt("Name for the playlist", "Hand(some)");
		if (playlistName != null)
		{
			var bAlreadyExists = false;
			angular.forEach($scope.application.savedPlaylists, function(value, index)
			{
				if (value.name === playlistName)
				{
					bAlreadyExists = true;
				}
			});

			if (bAlreadyExists)
			{
				alert('Playlist already exists, please choose another name.');
				$scope.savePlaylist();
			}
			else
			{
				$scope.application.savedPlaylists.push(
				{
					"name": playlistName,
					"playlist": playlist
				});
				$scope.application.playlist = [];
			}
		}
	}

	$scope.deletePlaylist = function(savedPlaylist)
	{
		var bDeletePlaylist = confirm("Are you really sure you want to delete the playlist " + savedPlaylist.name + " ?");
		if (bDeletePlaylist === true)
		{
			var indexToDelete = -1;
			angular.forEach($scope.application.savedPlaylists, function(value, index)
			{
				if (value.name === savedPlaylist.name)
				{
					indexToDelete = index;
				}
			});

			if (indexToDelete != -1)
			{
				$scope.application.savedPlaylists.splice(indexToDelete, 1);
			}
		}
	}

	$scope.selectPlaylist = function(savedPlaylist)
	{
		var bLoadPlaylist = confirm("Unsaved changes on current playlist will be lost. Do you want to load the playlist " + savedPlaylist.name + " ?");
		if (bLoadPlaylist === true)
		{
			$scope.application.playlist = savedPlaylist.playlist;
		}
	}

	$scope.openHand = function()
	{
		$scope.hand.thumb = 0;
		$scope.hand.index = 0;
		$scope.hand.major = 0;
		$scope.hand.ringfinger = 0;
		$scope.hand.auricular = 0;
	}

	$scope.closeHand = function()
	{
		$scope.hand.thumb = 180;
		$scope.hand.index = 180;
		$scope.hand.major = 180;
		$scope.hand.ringfinger = 180;
		$scope.hand.auricular = 180;
	}

	$scope.$watch('hand', function(newValue, oldValue)
	{
		$scope.RobotPlayerService.play($scope.application.API.URL,
		{
			'hand': $scope.hand
		});
	}, true);

	$scope.$watch('application', function(newValue, oldValue)
	{
		$scope.ApplicationService.save(angular.toJson($scope.application));
	}, true);

	$scope.playPlaylist = function()
	{
		angular.forEach($scope.application.playlist, function(value, index)
		{
			setTimeout(function()
			{
				$scope.RobotPlayerService.play($scope.application.API.URL, value);
			}, index * $scope.application.stepTime);
		});
	}
}]);