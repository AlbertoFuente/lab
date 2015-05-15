(function() {
    'use strict';

    function calculateDeath(dead) {
        function stopInterval() {
            clearInterval(count);
        }
        var count = setInterval(function() {
            var limit = dead - 1;
                if (limit === 0) {
                    self.postMessage(limit);
                    stopInterval();
                }
                return (dead = limit);
        }, 1000);
    }

    self.addEventListener('message', function(e) {
        calculateDeath(e.data.ex);
    }, false);
}());
