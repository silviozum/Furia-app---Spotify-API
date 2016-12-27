angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Spotify) {

      $scope.search = {};
      
      $scope.SearchQuery = function(){  

        Spotify.search($scope.search.term , 'artist').then(function (data) {
          $scope.ItemsSearch = data.artists.items;
        });
      
      };

      
})

.controller('ChatsCtrl', function($scope, Chats,  $stateParams,Spotify) {

  $scope.ArtistId = $stateParams.id;
  
  Spotify.getArtistAlbums( $scope.ArtistId ).then(function (data) {
    console.log(data.items);
    $scope.AlbumInfo = data.items;
  }); 
})


