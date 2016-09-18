(function() {
    'use strict';

    angular
        .module('LunchApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = '';

        $scope.checkIfTooMuch = function(lunchMenu) {
            if (lunchMenu == null || /\S+/.test(lunchMenu) == false) {
                showMessage('Please enter data first');
                return;
            }
            var itemsCount = lunchMenu.split(/\,/).length;
            showMessage(itemsCount <= 3 ? 'Enjoy!' : 'Too much!');
        };

        var showMessage = function (message) {
            $scope.message = message;
        };
    }
})();
