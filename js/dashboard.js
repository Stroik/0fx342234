'use strict';

(function(){
    var myApp = angular.module('myApp',['firebase']);

    myApp.controller('dashboardController', ['$scope', '$firebaseArray',
        function($scope, $firebaseObject){
            $scope.menu = [
                {title: 'Inicio', link: 'app.inicio'},
                {title: 'Estadisticas', link: 'app.estadisticas'}
            ];
            var ref = firebase.database().ref('conver/data/grid/list/users');
            $scope.datos = $firebaseObject(ref);
        }
    ]);
})();
