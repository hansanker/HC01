/**
 * Load modules for application
 */

angular
    .module('angularstrapApp', [
		'ui.bootstrap',
        'ui.router',
		'nvd3ChartDirectives',
		'nvd3',
        'angularstrapServices',
        'angularstrapControllers',
		'firebase'
    ])
	.directive('ngEnter', function () {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(event.which === 13) {
					scope.$apply(function (){
						scope.$eval(attrs.ngEnter);
					});	 
					event.preventDefault();
				}
			});
		};
	});

// set of config options stored in constant

angular.module('angularstrapApp')
    .constant('CONFIG', {
    DebugMode: true,
    StepCounter: 0,
    APIHost: '',
	FirebaseConfig: {
		rootURL: "https://humanconnection.firebaseio.com",
		ref: new Firebase("https://humanconnection.firebaseio.com")
	}
    //  APIHost: 'http://localhost:12017'
    //  APIHost: 'http://RGSWEB01:9999'
    //  APIHost: 'http://RG-P-BLU1:9999'
    //  APIHost: 'http://dev01jmorg01/api'
});
