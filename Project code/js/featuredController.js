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
	function searchMovie(imdbID){
		if(imdbID="undefined")
		{
		alert("Please Enter imdbID , from search page");
		var url="http://www.omdbapi.com/?i=tt1935859&apikey=6c3a2d45";
			$http.get(url).then(function success(response){
		value.movies=response;
		console.log(response);

}, function error(err) {

})
		}
		else
		
		var url="http://www.omdbapi.com/?i=" + imdbID + "&apikey=6c3a2d45"
		$http.get(url).then(function success(response){
		value.movies=response;
		console.log(response);

}, function error(err) {

})
		
	
		
		
		
}
}
			
			
			
		  })();