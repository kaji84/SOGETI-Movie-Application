// Created by kaji islam @12/July/2017
(function(){
		  angular
		  .module("MovieApp", ["ngRoute"])
		  .controller("MovieSearchController", MovieSearchController)
			
			
function MovieSearchController($http)
{
	
	//MVC module
	var value=this;
	value.searchMovie=searchMovie;
	//console.log("Hello MovieSearchController");
	//"http://www.omdbapi.com/?s=" + title+"&apikey=6c3a2d45";
	function searchMovie(title){
		var url="http://www.omdbapi.com/?s=" + title + "&apikey=6c3a2d45";
		$http.get(url).then(function success(result){
		value.movies=result.data.Search;
		console.log(result);

}, function error(err) {

})
		
}
}
			
			
			
		  })();