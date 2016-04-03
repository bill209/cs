(function() {
	'use strict';

	angular
		.module('cs_demo')
		.directive('myCustomer', function() {
			return {
		template: 'Name: {{mainCtrl.customer.name}} Address: {{mainCtrl.customer.address}}' 
			};
		});

})();
