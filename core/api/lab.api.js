(function() {
    'use strict';

    if (!Date.prototype.getDeathHour || !Date.prototype.countDown) {
        Date.prototype.getDeathHour = function (created, minutes) {
            this.setTime(created.getTime() + minutes*60000);
            return this;
        };

        Date.prototype.countDown = function (time, isDead, setExistence) {
            var limit = time - 1;
                if (isDead !== undefined) {
                    isDead(limit);
                }
                if (setExistence !== undefined) {
                    setExistence(limit);
                }
        };
    }

    function killParticle(particle) {
        particle.remove();
    }
}());
