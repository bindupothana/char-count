var app=angular.module('charApp',[]);
app.controller('charCtrl',function($scope){
	var count=0;
	$scope.charCount=function(name){
		$scope.sringLength=$scope.input.length
      for (var i=0; i<$scope.input.length(); i++){
      	console.log("hjihlk",$scope.input)
      	if (isValidWordCharacter($scope.input.charAt(i))){
                incrementCounter = true;
                count++;
            }
            }
        }
});