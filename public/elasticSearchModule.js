window.ethicalstore = angular.module('ethicalStore', ['elasticsearch'],
  ['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]
);