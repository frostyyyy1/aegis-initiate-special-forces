Sprite_Battler.prototype.shouldMirror = function () {
        // store the this._battler member as a variable named battler
        var battler = this._battler;

        // if the battler variable member has not been stored yet, return false
        if (!battler)
            return false;

        // if an actor, get the actor from the database. if not get the enemy
        // from the database.
        var dataBattler = battler.isActor() ? battler.actor() : battler.enemy();

        // store the meta data into a variable.
        var meta = dataBattler.meta;

        // if the meta data doesn't have a notetag with the name mirror, return
        // fales
        if (!meta.mirror)
            return false;

        // if we've gotten to this point, meta does have a notetag with the
        // name mirror so we can return true
        return true;
    };

    // alias the Sprite_Actor.prototype.updateBitmap function
    alias_Sprite_Actor_updateBitmap = Sprite_Actor.prototype.updateBitmap;
    Sprite_Actor.prototype.updateBitmap = function () {
        // call the original function we are aliasing
        alias_Sprite_Actor_updateBitmap.call(this);
        // check if we didn't already mirror.
        // check if we should mirror.
        if (!this._mirroredX && this.shouldMirror() === true) {

            // mirror the sprite by multiplying the scale x by -1
            this._mainSprite.scale.x *= -1.0;
            // mark that we mirrored
            this._mirroredX = true;
        }
    };

    // alias the Sprite_Enemy.prototype.loadBitmap function
    alias_Sprite_Enemy_loadBitmap = Sprite_Enemy.prototype.loadBitmap;
    Sprite_Enemy.prototype.loadBitmap = function (name, hue) {
        // call the original function we are aliasing
        alias_Sprite_Enemy_loadBitmap.call(this, name, hue);
        // check if we already mirrored.
        // check if we should mirror.
        if (!this._mirroredX && this.shouldMirror() === true) {
            // mirror the sprite by multiplying the scale x by -1
            this.scale.x *= -1.0;
            // mark that we mirrored
            this._mirroredX = true;
        }
    };
