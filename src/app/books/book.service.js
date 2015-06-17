angular
	.module('bookshelf')
	.factory('BookService', BookService);
	
function BookService($firebaseArray){
	var ref = new Firebase("https://bookshelf-app.firebaseio.com/books");
	var booksRef = $firebaseArray(ref);
		
	return {
		books: booksRef	
	};
}