(function() {
    'use strict';
    var self = this;

    self.addEventListener('message', function(obj) {
        window.setInterval(function() {
            console.log('worker: ' + obj.existence);
            var limit = obj.existence - 1;
                if (obj.isDead !== undefined) {
                    obj.isDead(limit);
                }
                if (obj.setExistence !== undefined) {
                    obj.setExistence(limit);
                }
        }, 1000);
    }, false);
}());
