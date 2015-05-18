(function() {
    'use strict';

    self.importScripts('../bower_components/lodash/lodash.min.js');
    var movements = ['top', 'bottom', 'right', 'left'];

    function setMove() {
        var move = setInterval(function() {
            var moves = _.sample(movements);
            self.postMessage(moves);
        }, 1000);
    }

    self.addEventListener('message', function() {
        setMove();
    }, false);
}());
