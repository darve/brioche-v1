(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('MainCtrl', ['$scope', '$rootScope', '$http', '$timeout', '$location', '$templateCache', '$compile', function($scope, $rootScope, $http, $timeout, $location, $templateCache, $compile) {

        // $rootScope.$on('$locationChangeSuccess', function(event){
        //     $timeout(function(){
        //         $rootScope.$apply(function(){
        //         });
        //     });
        // });

        // $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl){
        //     $timeout(function(){
        //         $rootScope.$apply(function(){
        //         });
        //     });
        // });

        // $http({
        //     method: 'GET',
        //     url: ''
        // }).then(function(response) {
        //     $timeout(function() {
        //         $scope.$apply(function() {
        //         });
        //     });
        // });

    }]);


    // app.controller('UserCtrl', ['$scope', 'User', function($scope, User) {
    //   $scope.users = User.query();

    //   $scope.addUser = function() {
    //     var user = new User({name: $scope.newUser.name});
    //     user.$save();
    //     $scope.users.push(user);
    //     $scope.newUser = "";
    //   }
    //   $scope.showStory = function(user) {
    //       User.get({userId: user._id}, function(user){
    //         $scope.showUser = user;
    //     });
    //   }
    //   $scope.hideStory = function() {
    //       $scope.showUser = null;
    //   }
    //   $scope.removeUser = function(user) {
    //       User.remove({userId: user._id}, function() {
    //         $scope.users = User.query();
    //         $scope.showUser = null;
    //     });
    //   }
    //   $scope.updateUser = function(user) {
    //       user.$save({userId: user._id});
    //       $scope.showUser = null;
    //   }
    // }]);

})(window,document,window.angular,'BriocheApp','controllers');