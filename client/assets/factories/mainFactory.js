app.factory('mainFactory', ['$http', function($http){

	var MainFactory = function(){
		var _this = this; 
	}
	console.log(new MainFactory());
	return new MainFactory;
}]);