var app =angular.module('app', []);
app.service('involiceServer',function(){
      console.info('----------enter involiceServer ------')
      this.artist = 'wang'
      this.getArtist = function(){
        return this.artist
      }

      this.setArtist = function(value){
        this.artist = value
        return this.artist
      }
      console.info('this involice server is ', this)
});

app.factory('involiceFactor',function(){
 console.info('enter involice factor,' ,this)
 var date = new Date()
  var timestaps  = {
       timer :date.getTime(),
       year: date.getFullYear()
     }
  return timestaps
});

app.controller('involiceCtrl', ['$scope', 'involiceServer', 'involiceFactor', function ($scope, involiceServer, involiceFactor) {
  
  $scope.spice = 'very';

  $scope.chiliSpicy = function () {
    $scope.spice = 'chili';
  };

  $scope.jalapenoSpicy = function () {
    $scope.spice = 'jalapeno'
  }

  involiceServer.setArtist('hello world')
  console.info('enter involice controller ', this)
}]);

app.controller('authorCtrl', ['$scope', 'involiceServer', 'involiceFactor', function ($scope, involiceServer, involiceFactor) {
   $scope.author = 'wang'
   $scope.artist = involiceServer.getArtist()
}])