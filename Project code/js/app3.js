// Created by kaji islam @12/July/2017
(function(){
		  angular
		  .module("MovieApplication")
		  .controller("MovieSearchController", MovieSearchController)
			
			
function MovieSearchController($http)
{
	
	//MVC module
	var value=this;
	value.searchMoviedetails2=searchMoviedetails2;
	//console.log("Hello MovieSearchController");
	//"http://www.omdbapi.com/?s=" + title+"&apikey=6c3a2d45";
	var a="tt1436480";
	function searchMoviedetails2(){
		var url="http://www.omdbapi.com/?i=" + a + "&apikey=6c3a2d45";
		$http.get(url).then(function success(result){
		value.movies=result.data.Search;
		console.log(result);

}, function error(err) {

})
		
}
}
			
			
			
		  })();