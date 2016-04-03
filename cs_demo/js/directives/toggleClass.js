(function() {
	'use strict';

	// used by views/restCalls.html to flip the cards
	angular
		.module('cs_demo')
		.directive('toggleClass', function() {
			return {
				restrict: 'A',
				link: function(scope, element, attrs) {
					element.bind('click', function() {
						element.toggleClass(attrs.toggleClass);
					});
				}
			};
		});

})();
