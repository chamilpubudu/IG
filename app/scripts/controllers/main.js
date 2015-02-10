'use strict';

/**
 * @ngdoc function
 * @name igApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the igApp
 */
angular.module('igApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
