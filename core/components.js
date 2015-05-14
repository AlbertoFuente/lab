define(function() {
    'use strict';

    var _init = function(api) {
        // web worker
        var worker = new Worker('core/workers.js');
        // Elemental Particle
        function ElementalParticle() {
            var self = this;
            this._className = 'elementalParticle';
            this._size = 1;
            this.isAlive = true;
            this.strength = 1;
            this.existence = 600;
            this.spin = true;
            this.speed = 1;
            this.bornDate = new Date();
            //this.deathDate = Date.prototype.getDeathHour(this.bornDate, this.existence);

            if (!ElementalParticle.prototype.isDead || !ElementalParticle.prototype.setExistence) {
                ElementalParticle.prototype.isDead = function (time) {
                    if (time === 0) {
                        self.isAlive = false;
                        //killParticle(self);
                    } else {
                        return;
                    }
                };
                ElementalParticle.prototype.setExistence = function (newVal) {
                    self.existence = newVal;
                };
            }

            this.countDown = function() {
                var obj = {
                    existence : self.existence,
                    isDead : ElementalParticle.prototype.isDead,
                    setExistence : ElementalParticle.prototype.setExistence
                };
                worker.postMessage(obj);
            };
        }

        function ParticleLevelOne() {
            ElementalParticle.call(this);

            this._className = 'particleLevelOne';
            this._size = 2;
            this.strength = 2;
            this.existence = 800;
            this.speed = 2;
        }
        ParticleLevelOne.prototype = new ElementalParticle();
        ParticleLevelOne.prototype.constructor = ParticleLevelOne;
    };

    return {
        init: _init
    };
}());
