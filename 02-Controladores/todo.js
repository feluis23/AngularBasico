var app = angular.module("MyApp",[]);

app.controller("controlador", function($scope){
  $scope.tareas = [ //declarando dos modelos
    {text:'Resolver bugs aptitus', done:false},
    {text:'Terminar mapas', done:true}];
 
  $scope.agregarTarea = function() {
    $scope.tareas.push({text:$scope.tareaText, done:false}); //añades un nuevo elemento
    $scope.tareaText = ''; //dejas en blanco el input
  };
 
  $scope.restante = function() {//metodo para saber cuantos estan activos y no tachados
    var count = 0;
    angular.forEach($scope.tareas, function(tarea) {
      count += tarea.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archivar = function() { //borrar aquellos tachados
    var oldTareas = $scope.tareas;
    $scope.tareas = [];
    angular.forEach(oldTareas, function(tarea) {
      if (!tarea.done) $scope.tareas.push(tarea);
    });
  };
});
