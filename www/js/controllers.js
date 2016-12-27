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

    $scope.AlbumInfo = data.items;
    console.log(data.items);
  }); 
})

.controller('TracksCtrl', function($scope,$stateParams,Spotify) {

  $scope.AlbumId = $stateParams.trackId;
  
  Spotify.getAlbumTracks( $scope.AlbumId).then(function (data) {
    $scope.TracksName = data.items;
  });
 
})



