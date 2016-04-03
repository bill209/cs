(function() {
	'use strict';

	angular
		.module('cs_demo',['ngRoute'

			]);

	// routing
	angular
		.module('cs_demo')
		.config(['$routeProvider',
			function($routeProvider) {
				$routeProvider.
				when('/main', {
					templateUrl: 'views/main.html'
				}).

				when('/restCalls', {
					templateUrl: 'views/restCalls.html'
				}).

				when('/railQuote', {
					templateUrl: 'views/railQuote.html'
				}).

				when('/about', {
					templateUrl: 'views/about.html'
				}).

				otherwise({
					redirectTo: '/main'
				});
			}
		]);

})();
