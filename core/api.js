define(function () {
    'use strict';

    return {
        getDeathHour: function (created, minutes) {
            return Date.prototype.setTime(created.getTime() + minutes*60000);
        },
        killParticle: function (particle) {
            particle.remove();
        }
    };
});
