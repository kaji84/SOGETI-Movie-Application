// Design By Kaji Islam@12/July/2017
(function() {
		  angular
		  .module("MovieApp")
		  .config(Config);
		  
	function Config($routeProvider)
	{
		$routeProvider
		.when("/search", {
			  templateUrl: "index.html"
			  })
		.when("/featured search", {
			  templateUrl: "featured.html"
			  })
		.when("/details/:imdbID", {
			   templateUrl: "moviedetails.html"
			  });
	}
		  
		  
		  })();