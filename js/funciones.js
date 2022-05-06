let ngApp = angular.module('juego', []);
ngApp.controller('ppt', function ($scope,$timeout) {
  $scope.items = [{"valor":1,"item":"fa-hand"},{"valor":2,"item":"fa-hand-fist"},{"valor":3,"item":"fa-hand-peace"}];
                  //papel, piedra, tijera
  $scope.reglas = [{"legana":2},{"legana":3},{"legana":1}];
  $scope.select_yo = "";
  $scope.select_pc = "";
  $scope.valYo = 0;
  $scope.valPc = 0;
  $scope.marcador = {"yo":0,"pc":0};
  $scope.labelResult = "";
  $scope.displayResult = false;
  $scope.selecionar = function (item) {
     $scope.valYo = item.valor;
     $scope.valPc = getRandomInt($scope.valPc);
     $scope.select_yo = $scope.items[$scope.valYo - 1].item;
     $scope.select_pc = $scope.items[$scope.valPc - 1].item;
     if($scope.valPc == $scope.valYo){
       $scope.labelResult = 'Empate';
     }else if($scope.valPc == $scope.reglas[$scope.valYo - 1].legana){
       $scope.labelResult = 'Ganaste';
       $scope.marcador.yo+=1;
     }else{
       $scope.labelResult = 'Perdiste';
       $scope.marcador.pc+=1;
     }
     $scope.displayResult = true;
     $timeout(function () {
      $scope.displayResult = false;
    }, 900);

  };
});

function getRandomInt(x) {
  let sw = 0;
  let valor = 0;
  do{
    sw++;
    valor = Math.floor(Math.random() * (4 - 1)) + 1;
  }while(sw < 3 || valor == x);
  return valor;
}
