'use strict';

/**
 * @ngdoc function
 * @name HotelReview.controller:HomeController
 * @description
 * # HomeController
 */
var placeDetail = [];
angular.module('HotelReview')
.controller('MapController', function($scope, $timeout, $ionicLoading) {
	  	$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0,
			template: "<img src='images/logo.png' width='100px'>"
		  });
		 // $ionicLoading.html("test");
		  $timeout(function () {
			initMap();
			$ionicLoading.hide();
		  }, 5000);
		  $scope.placeDetails = function(placeObj) {
			  placeDetail = placeObj;
			  var myEl = angular.element( document.querySelector( '#btmTab' ) );
			  myEl.addClass('show'); 
		   };
		})
	.controller('GalleryController', function($scope) {
		 var galleryContainer = angular.element( document.querySelector( '#gallery' ) );
		 galleryContainer.html("");
		// console.log(placeDetail.photos);
		 if(placeDetail.photos !== undefined)
		 {
			 for(var i=0; i<placeDetail.photos.length;i++)
			 {
				galleryContainer.append("<img src='"+placeDetail.photos[i].getUrl({'maxWidth': 350, 'maxHeight': 350})+"'>");
			 }
		 }
		 else
		 {
			 galleryContainer.html("<div class='unavailable-photos'>Photos are not available for this hotel.</div>");
		 }
		 
    })
	.controller('ReviewController', function($scope) {
		//console.log(placeDetail);
	 	var reviewContainer = angular.element( document.querySelector( '#hotelReview' ) );
		reviewContainer.html("");
		if(placeDetail.reviews !== undefined)
		{
			for(var i=0; i<placeDetail.reviews.length;i++)
			 {
				var userRating = "star-"+placeDetail.reviews[i].rating+".png";
				var profilePic = placeDetail.reviews[i].profile_photo_url;
				if(profilePic !== undefined)
				{
					profilePic = "http:"+placeDetail.reviews[i].profile_photo_url;
				}
				else
				{
					profilePic = "images/default-profile.png";
				}
				var authorName = placeDetail.reviews[i].author_name;
				var comments = placeDetail.reviews[i].text;
				reviewContainer.append("<div class='reviews'><div class='user-details'><img src='"+profilePic+"' alt='profile-pics' class='profile-pic'><p><img src='images/"+userRating+"' alt='rating-star' class='star'><span>"+authorName+"</span></p></div><div class='comments'>"+comments+"</div></div>");
			 }
		}
		else
		 {
			 reviewContainer.html("<div class='unavailable-photos'>Reviews not Available for this Hotel</div>");
		 }
    });
	
