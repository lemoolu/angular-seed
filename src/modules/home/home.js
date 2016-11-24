import app from 'app.config';

require('./home-a.js');

app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                template: require('./home.html')
            })
            .state('home.a', {
                url: '/a',
                views: {
                    '@': { template: require('./home-a.html') }
                }
            })
            .state('home.b', {
                url: '/b',
                views: {
                    '@': { template: require('./home-b.html') }
                }
            });
    })
    .service('homeService', function() {
        this.name = 'homeService';
    })
    .controller('homeCtrl', function($scope) {
        $scope.name = 'home';
    });
