define('api', function () {
    'use strict';

    return {
        killParticle: function (particle) {
            // destroy particle
            console.log('particle dead');
        },
        setExistence: function(newVal, particle) {
            particle.existence = newVal;
            particle.isAlive = false;
            this.killParticle(particle);
        },
        deadCowntDown: function(particle) {
            // web worker
            var worker = new Worker('core/workers.js'),
                that = this;
            worker.addEventListener('message', function(e) {
                if (e.data === 0) {
                    that.setExistence(e.data, particle);
                }
            });
            worker.postMessage({ 'ex': particle.existence });
        },
        upLevel: function(self) {
            self.size = self.size * 2;
            self.strength = self.strength * 2;
            self.existence = self.existence + 30;
            self.speed = self.speed * 2;
            return self;
        },
        moveTop: function() {
            // TODO: Think how to do this
        },
        moveBottom: function() {
            // TODO: Think how to do this
        },
        moveRight: function() {
            // TODO: Think how to do this
        },
        moveLeft: function() {
            // TODO: Think how to do this
        }
    };
});
