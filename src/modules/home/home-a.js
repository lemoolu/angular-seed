import app from 'app.config';

app.controller('homea', function($scope, homeService) {
    $scope.name = homeService.name;
});
