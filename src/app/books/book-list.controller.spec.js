/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';

describe('controllers', function(){
  beforeEach(module('bookshelf'));

  it('formats authors', inject(function($controller) {
    
    var authors1 = ['Test1'];
    var authors2 = ['Test1', 'Test2'];
    var authors3 = ['Test1', 'Test2', 'Test3'];
    
    var subject = $controller('BookListController');
    
    expect(subject.formatAuthors(authors1)).toBe('Test1');
    expect(subject.formatAuthors(authors2)).toBe('Test1, Test2');
    expect(subject.formatAuthors(authors3)).toBe('Test1, Test2, Test3');
  }));
});
