define(function () {
    'use strict';

    return {
        getDeathHour: function (created, minutes) {
            this.setTime(created.getTime() + minutes*60000);
            return this;
        },
        killParticle: function (particle) {
            particle.remove();
        }
    };
});
