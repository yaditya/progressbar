var app = angular.module('progressBar', []);

function ProgressBarController ($scope) {
    $scope.bars = [
        {
            id: 'graph1',
            label: 'Graph 1',
            percent: 10,
            className: ''
        },
        {
            id: 'graph2',
            label: 'Graph 2',
            percent: 25,
            className: ''
        },
        {
            id: 'graph3',
            label: 'Graph 3',
            percent: 50,
            className: ''
        }
    ];

    // set the default drop down value
    $scope.selectedBar = $scope.bars[0].id;

    $scope.calculate = function (val) {

        // get the current value of clicked button
        var percentage = val.target.value;

        // loop through all bars to find out currently selected bar id
        angular.forEach($scope.bars, function (bar) {
            if (bar.id === $scope.selectedBar) {
                // update the height
                bar.percent += parseInt(percentage);

                // change bground color to red to indicate the value is gt 100% or lt 0%
                if (bar.percent > 100 || bar.percent < 0) {
                    bar.className = 'over';
                } else {
                    bar.className = '';
                }

            }
        });



    }
}
