define('components', function() {
    'use strict';

    return {
        elementalParticle: function(api) {
            this.size = 1;
            this.isAlive = true;
            this.strength = 1;
            this.existence = 60;
            this.spin = true;
            this.speed = 1;
            this.countDown = api.deadCowntDown(this);

            return this;
        }
    };
}());
