let ngApp = angular.module('juego', []);
ngApp.controller('ppt', function ($scope,$timeout) {
  $scope.items = [{"valor":"papel","item":"fa-hand","pierde":"tijera"},{"valor":"piedra","item":"fa-hand-fist","pierde":"papel"},{"valor":"tijera","item":"fa-hand-peace","pierde":"piedra"}];
  $scope.select_yo = "";
  $scope.select_pc = "";
  $scope.marcador = {"yo":0,"pc":0};
  $scope.labelResult = "";
  $scope.displayResult = false;
  $scope.random = 0;
  let jugando = false;
  $scope.selecionar = function (item) {
    if(jugando) return;
     jugando = true;
     $scope.random = getRandomInt($scope.random);
     let valPc = $scope.items[$scope.random - 1];

     $scope.select_yo = item.item;
     $scope.select_pc = valPc.item;

     if(valPc.valor == item.valor){
       $scope.labelResult = 'Empate';
     }else if(valPc.valor == item.pierde){
       $scope.labelResult = 'Perdiste';
       $scope.marcador.pc+=1;
     }else{
       $scope.labelResult = 'Ganaste';
       $scope.marcador.yo+=1;
     }
     $scope.displayResult = true;
     $timeout(function () {
      $scope.displayResult = false;
      $scope.select_yo = "";
      $scope.select_pc = "";
      jugando = false;
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
