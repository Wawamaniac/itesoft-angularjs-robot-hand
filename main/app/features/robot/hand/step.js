'use strict';

angular.module('robot.manager').factory('Step', [function()
{
	function Step(index, hand)
	{
		this.index = index;
		this.hand = hand;
	}

	return function(index, hand)
	{
		return new Step(index, hand);
	}
}]);