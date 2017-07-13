// Created by kaji islam @12/July/2017
(function(){
		  angular
		  .module("MovieApp", ["ngRoute"])
		  .controller("MovieSearchController", MovieSearchController)
			
			//Get imbdID from URL
			function getParameterByName(name, url) {
  			 	 if (!url) url = window.location.href;
   				 name = name.replace(/[\[\]]/g, "\\$&");
   				 var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
       				 results = regex.exec(url);
    					if (!results) return null;
    					if (!results[2]) return '';
   						return decodeURIComponent(results[2].replace(/\+/g, " "));
}
	     var imdbID = getParameterByName('imdbID');
		console.log(imdbID);		
function MovieSearchController($http)
{
	
	//MVC module
	var value=this;
	value.searchMovieDetails=searchMovieDetails;
	//console.log("Hello MovieSearchController");
	//"http://www.omdbapi.com/?s=" + title+"&apikey=6c3a2d45";
	function searchMovieDetails(title){
		var url="http://www.omdbapi.com/?i=" + imdbID + "&apikey=6c3a2d45";
		$http.get(url).then(function success(response){
		value.movies=response;
		console.log(response);

}, function error(err) {

})
		
}
}
			
			
			
		  })();