(function() {
    'use strict';

    angular
        .module('cs_demo')
        .directive('showtab', function(dateFilter, $timeout){
            return {
                restrict: 'E',
                scope: {
                    format: '@'
                },
                link: function (scope, element, attrs) {
                    element.click(function(e) {
                        e.preventDefault();
                        $(element).tab('show');
                    });
                }
            };
        });

})();