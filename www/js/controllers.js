angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HttpCtrlName', function($scope, $http) {
  $scope.getData = function(){
  $http.get("http://echo.jsontest.com/firstname/Mike/lastname/Teape/state/California", { params: { "key1": "value1", "key2": "value2" }})
            .success(function(data) {
                $scope.firstname = data.firstname;
                $scope.lastname = data.lastname;
            })
            .error(function(data) {
                alert("ERROR");
            }); 
  };
})

.controller('HttpCtrlIP', function($scope, $http) {
  $scope.getData = function(){
  $http.get("http://ip.jsontest.com", { params: { "key1": "value1" }})
            .success(function(data) {
                $scope.ip = data.ip;
            })
            .error(function(data) {
                alert("You Are From ISIS");
            }); 
  };
})

;
