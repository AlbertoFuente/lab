(function() {
    'use strict';

    if (!Date.prototype.getDeathHour) {
        Date.prototype.getDeathHour = function (created, minutes) {
            this.setTime(created.getTime() + minutes*60000);
            return this;
        };
    }

    function killParticle(particle) {
        particle.remove();
    }
}());
