'use strict';

/**
 * @ngdoc function
 * @name HotelReview.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('HotelReview')
    .controller('MapController', function($scope, $ionicSideMenuDelegate) {
	  $scope.toggleRight = function() {
		  //alert($scope.toggleRight)
		$ionicSideMenuDelegate.toggleRight();
	  };
	  $scope.placeDetails = function(placeObj) {
          console.log(placeObj.reviews[0].text)
        };
    });
