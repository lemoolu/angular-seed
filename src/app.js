import app from 'app.config';

// 样式引入
require('./scss/bootstrap.scss');
require('./scss/app.scss');

// 模块引入
require('./modules/home/home');

app.run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    })
    .controller('appCtrl', function($scope) {
        console.log('start');
    });
