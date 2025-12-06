//=============================================================================
// formationLock.js
//=============================================================================

/*:
 * @plugindesc Lets you specify that the player may not move an actor around in the formation menu
 * @author Geri Khan
 *
 * @param No Parameters
 * @desc naaaaaaaah
 * @default 0
 *
 * @help
 *
 * This plugin lets you specify that an actor may not be moved in the formation
 * menu. Use the plugin commands below to set an actor's location to fixed,
 * or release it.
 *
 * -----------------------------------------------------------------------------
 *
 * Plugin Command:
 *
 * formationLock fix actornum
 * ex:    formationLock fix 3
 *        fixes the actor in place
 *
 * formationLock release actornum
 * ex:    formationLock release 3
 *        releases the actor
 */

 (function() {

   var formationLock_Game_Interpreter_pluginCommand =
           Game_Interpreter.prototype.pluginCommand;
   Game_Interpreter.prototype.pluginCommand = function(command, args) {
       formationLock_Game_Interpreter_pluginCommand.call(this, command, args);
       if (command.toLowerCase() === 'formationlock') {
           args[0] = args[0].toLowerCase();
           switch (args[0]) {
           case 'fix':
               $gameActors.actor(parseInt(args[1])).setFormationLock(false);
               break;
           case 'release':
               $gameActors.actor(parseInt(args[1])).setFormationLock(true);
               break;
           }
       }
   };

   var formationLock_game_actor_setup = Game_Actor.prototype.setup;
   Game_Actor.prototype.setup = function(actorId) {
     formationLock_game_actor_setup.call(this, actorId);
     this._formationLocked = true;
   };

   Game_Actor.prototype.setFormationLock = function(setting) {
     this._formationLocked = setting;
   };

   Game_Actor.prototype.isFormationChangeOk = function() {
     return this._formationLocked;
   };

  })();
