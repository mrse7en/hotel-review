'use strict';

/**
 * @ngdoc overview
 * @name HotelReview
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('HotelReview', ['ionic', 'ngCordova', 'ngResource', 'ngSanitize'])

    .run(function($ionicPlatform) {

        $ionicPlatform.ready(function() {
            // save to use plugins here
        });
    })

    .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
        // Application routing
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            })
            .state('app.home', {
                url: '/home',
                cache: false,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/home.html',
                        controller: 'HomeController'
                    }
                }
            })
			.state('app.map', {
                url: '/map',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/map.html',
                        controller: 'MapController',
                    }
                }
            })
			.state('app.gallery', {
			  url: "/gallery",
			  cache: false,
			  views: {
				'viewContent': {
				  templateUrl: "templates/views/gallery.html",
				  controller: 'GalleryController'
				}
			  }
			})
			.state('app.review', {
			  url: "/review",
			  cache: false,
			  views: {
				'viewContent': {
				  templateUrl: "templates/views/review.html",
				  controller: 'ReviewController'
				}
			  }
			});


        // redirects to default route for undefined routes
        $urlRouterProvider.otherwise('/app/home');
    });


