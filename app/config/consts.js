angular.module('primeiraApp').constant('consts', {
  appName: 'MEAN - Primeira Aplicação',
  version: '1.0',
  owner: 'Victor Evangelista',
  year: '2018',
  site: 'http://cod3r.com.br',
  apiUrl: 'https://my-wallet-backend.herokuapp.com/api',
  oapiUrl: 'https://my-wallet-backend.herokuapp.com/oapi',
  userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
  $rootScope.consts = consts
}])