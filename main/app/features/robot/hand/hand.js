'use strict';

angular.module('robot.manager').factory('Hand', [function()
{
	function Hand(hand)
	{
		if (hand)
		{
			this.thumb = hand.thumb;
			this.index = hand.index;
			this.major = hand.major;
			this.ringfinger = hand.ringfinger;
			this.auricular = hand.auricular;
		}
		else
		{
			this.thumb = 180;
			this.index = 180;
			this.major = 180;
			this.ringfinger = 180;
			this.auricular = 180;
		}
	}

	return function(hand)
	{
		return new Hand(hand);
	}
}]);