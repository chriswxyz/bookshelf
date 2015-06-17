'use strict';

angular.module('bookshelf', ['ngAnimate', 'ngTouch', 'ngResource', 'ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/books/book-list.html',
        controller: 'BookListController as bookList'
      });

    $urlRouterProvider.otherwise('/');
  })
;
