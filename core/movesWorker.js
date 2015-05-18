(function() {
    'use strict';

    function setMove(dir) {
        var move = setInterval(function() {
            self.postMessage(dir);
        }, 1000);
    }

    self.addEventListener('message', function(e) {
        setMove(e.data.direction);
    }, false);
}());
