'use strict';

angular
	.module('bookshelf')
	.controller('BookListController', function(BookService){
		var vm = this;
		
		vm.books = BookService.books;
		vm.formatAuthors = formatAuthors;
		
		// == Implementation ==
		
		function formatAuthors(authorArray) {
			return authorArray.join(', ');
		}
	});
	
