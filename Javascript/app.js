var app = angular.module('routerApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/Home',
            templateUrl: 'Home.html'
        })

		.state('fruits', {
            url: '/Fruits',
            templateUrl: 'Partial-Fruits.html'
        })

		.state('vegetables', {
            url: '/Vegetables',
            templateUrl: 'Partial-Vegetables.html'
        })

		.state('whoweare', {
            url: '/Who-We-Are',
            templateUrl: 'Who_we_are.html'
        })

		.state('contact', {
            url: '/Contact-Us',
            templateUrl: 'Contact_us.html'
        })

	;


});
