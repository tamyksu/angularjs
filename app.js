


 angular.module('myFirstApp', [])

.controller('ToDoListController', function ($scope){
    $scope.item1 ='';
$scope.arr =[
    {
    'content': ''
    }
];
$scope.addItem =function(){
    if( $scope.item1=="")
    {
        return;
    }
    $scope.arr.push({'content':$scope.item1});
    $scope.item1="";
}

$scope.deleteItem = function(id){
    $scope.arr.map((v,i)=>{
        if(i == id){
            $scope.arr.splice(id,1);
        }
    }
    )
}


});


 
