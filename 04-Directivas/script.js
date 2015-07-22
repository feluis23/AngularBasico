angular.module('directivaSimple', [])
  .controller('Controlador', function($scope) {
    $scope.texto1 = {titulo: 'Directiva', subtitulo: 'AngularJS'};
    $scope.texto2 = {titulo: 'Otro Objeto', subtitulo: 'como parametro'};
  })
  .directive('miDirectiva', function() {
    return {
      restrict: 'AE',
      scope: {
        textoVariable: '=abc'
      },
      templateUrl: 'mi-encabezado.html'
    }
  })