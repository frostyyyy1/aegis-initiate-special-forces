//=============================================================================
// Maliki's Critical BGM/BGS Changer
// MalCritBGMBGSChanger.js
// version 1.0b
//=============================================================================
/*:  
 * @plugindesc ver1.0 - Allows you to set different music and music effects to play when the Party/troupe is in crit condition. 
 * @author Maliki79
 *
 * @param Party Critical BGM
 * @desc BGM to start playing when party is in critical state.
 *
 * @param Enemy Critical BGM
 * @desc BGM to start playing when enemy troupe is in critical state.
 *
 * @param Critical BGM volume
 * @desc Volume level of BGM.  (number must be between 0 and 100)
 * @default 100
 *
 * @param Critical BGM pitch
 * @desc Pitch level of BGM.  (number must be between 1 and 300)
 * @default 100
 *
 * @param Critical BGM pan
 * @desc Pan level of BGM.  (number must be between -100 and 100)
 * @default 0
 *
 * @param Party Critical BGS
 * @desc BGS to start playing when party is in critical state.
 *
 * @param Enemy Critical BGS
 * @desc BGS to start playing when enemy troupe is in critical state.
 *
 * @param Critical BGS volume
 * @desc Volume level of BGS.  (number must be between 0 and 100)
 * @default 60
 *
 * @param Critical BGS pitch
 * @desc Pitch level of BGS.  (number must be between 1 and 300)
 * @default 100
 *
 * @param Critical BGS pan
 * @desc Pan level of BGS.  (number must be between -100 and 100)
 * @default 0
 *
 * @param Critical percentage
 * @desc Percentage of total HP the party/troupe has when BGM/BGS starts/stops.
 * @default 25
 *
 *
 * @help In order to use this plugin, you must first decide which BGM and BGS you want 
 * to apply to players' parties or enemy troupes.
 * Pick the name of the BGM or BGS and put it's file name 
 * in the parameters section. 
 * (No need for " marks here.)
 * You can then adjust the volume, pitch and pan levels to your liking.
 * Finally, you can set the percentage of HP that will be considered 
 * critical for your game.
 * It defaults to 25%.  This means that once the party or troupe's total hp 
 * reaches 25% of it's total Max HP, the music/sounds will begin.
 * (If the hp goes above the critical point, the music/sounds will revert 
 * to what they were before.)
 *
 * Note that you must keep the PLugin's file name set as MalCritBGMBGSChanger.js
 *
 * Script Calls:
 * There are several Script calls that can be used with this plugin.
 * Note that these calls make TEMPORARY changes to the plugin and will reset to 
 * default upon loading up a new save.
 *
 * $gameSystem.changePartyCritBGM(name);
 * This call will change the BGM used when the party becomes critical.
 * (Use quote marks " around the name.)
 *
 * $gameSystem.changeEnemyCritBGM(name);
 * This call will change the BGM used when the enemy troupe becomes critical.
 * (Use quote marks " around the name.)
 * 
 * $gameSystem.changePartyCritBGS(name);
 * This call will change the BGS used when the party becomes critical.
 * (Use quote marks " around the name.)
 *
 * $gameSystem.changeEnemyCritBGS(name);
 * This call will change the BGS used when the enemy troupe becomes critical.
 * (Use quote marks " around the name.)
 * 
 * $gameSystem.changeCritBGMVol(number);
 * This call will change the volume of all BGM changes, party or enemy, when 
 * they become critical.
 * (Keep the number within the range given for the parameter section.)
 *
 * $gameSystem.changeCritBGMPitch(number);
 * This call will change the pitch of all BGM changes, party or enemy, when 
 * they become critical.
 * (Keep the number within the range given for the parameter section.)
 *
 * $gameSystem.changeCritBGMPan(number);
 * This call will change the pan level of all BGM changes, party or enemy, when 
 * they become critical.
 * (Keep the number within the range given for the parameter section.)
 *
 * $gameSystem.changeCritBGSVol(number);
 * This call will change the volume of all BGS changes, party or enemy, when 
 * they become critical.
 * (Keep the number within the range given for the parameter section.)
 *
 * $gameSystem.changeCritBGSPitch(number);
 * This call will change the pitch of all BGS changes, party or enemy, when 
 * they become critical.
 * (Keep the number within the range given for the parameter section.)
 *
 * $gameSystem.changeCritBGSPan(number);
 * This call will change the pan level of all BGS changes, party or enemy, 
 * when they become critical.
 * (Keep the number within the range given for the parameter section.)
 * *
 * $gameSystem.disableCritSounds();
 * This call will disable ALL crit BGM and BGS for both party and troupe.
 *
 * $gameSystem.enableCritSounds();
 * This call turns the BGM and BGS changes back on.
 *
 */
 
var MalCriticalMusic = PluginManager.parameters('MalCritBGMBGSChanger');

MalCriticalMusic.PartyCritBGM = String(MalCriticalMusic['Party Critical BGM']) || '';
MalCriticalMusic.EnemyCritBGM = String(MalCriticalMusic['Enemy Critical BGM']) || '';
MalCriticalMusic.CritBGMVol   = Number(MalCriticalMusic['Critical BGM volume']);
MalCriticalMusic.CritBGMPitch = Number(MalCriticalMusic['Critical BGM pitch']);
MalCriticalMusic.CritBGMPan   = Number(MalCriticalMusic['Critical BGM pan']);
MalCriticalMusic.PartyCritBGS = String(MalCriticalMusic['Party Critical BGS']) || '';
MalCriticalMusic.EnemyCritBGS = String(MalCriticalMusic['Enemy Critical BGS']) || '';
MalCriticalMusic.CritBGSVol   = Number(MalCriticalMusic['Critical BGS volume']);
MalCriticalMusic.CritBGSPitch = Number(MalCriticalMusic['Critical BGS pitch']);
MalCriticalMusic.CritBGSPan   = Number(MalCriticalMusic['Critical BGS pan']);
MalCriticalMusic.CritPoint    = Number(MalCriticalMusic['Critical percentage']);

Game_System.prototype.enableCritSounds = function() {
MalCriticalMusic.PartyCritBGM = String(MalCriticalMusic['Party Critical BGM']) || '';
MalCriticalMusic.EnemyCritBGM = String(MalCriticalMusic['Enemy Critical BGM']) || '';
MalCriticalMusic.PartyCritBGS = String(MalCriticalMusic['Party Critical BGS']) || '';
MalCriticalMusic.EnemyCritBGS = String(MalCriticalMusic['Enemy Critical BGS']) || '';
}

Game_System.prototype.disableCritSounds = function() {
MalCriticalMusic.PartyCritBGM = null;
MalCriticalMusic.EnemyCritBGM = null;
MalCriticalMusic.PartyCritBGS = null;
MalCriticalMusic.EnemyCritBGS = null;
}

Game_System.prototype.changePartyCritBGM = function(name) {
MalCriticalMusic.PartyCritBGM = name;
}

Game_System.prototype.changeEnemyCritBGM = function(name) {
MalCriticalMusic.EnemyCritBGM = name;
}

Game_System.prototype.changePartyCritBGS = function(name) {
MalCriticalMusic.PartyCritBGS = name;
}

Game_System.prototype.changeEnemyCritBGS = function(name) {
MalCriticalMusic.EnemyCritBGS = name;
}

Game_System.prototype.changeCritBGMVol = function(num) {
MalCriticalMusic.CritBGMVol = Number(num) || MalCriticalMusic.CritBGMVol;
}

Game_System.prototype.changeCritBGMPitch = function(num) {
MalCriticalMusic.CritBGMPitch = Number(num) || MalCriticalMusic.CritBGMPitch;
}

Game_System.prototype.changeCritBGMPan = function(num) {
MalCriticalMusic.CritBGMPan = Number(num) || MalCriticalMusic.CritBGMPan;
}

Game_System.prototype.changeCritBGSVol = function(num) {
MalCriticalMusic.CritBGSVol = Number(num) || MalCriticalMusic.CritBGSVol;
}

Game_System.prototype.changeCritBGSPitch = function(num) {
MalCriticalMusic.CritBGSPitch = Number(num) || MalCriticalMusic.CritBGSPitch;
}

Game_System.prototype.changeCritBGSPan = function(num) {
MalCriticalMusic.CritBGSPan = Number(num) || MalCriticalMusic.CritBGSPan;
}

var MalCritBattleSetup = BattleManager.setup;
BattleManager.setup = function(troopId, canEscape, canLose) {
MalCritBattleSetup.call(this, troopId, canEscape, canLose);
this.oldBgs = null;
this.oldBgm = null;
this.oldBgmPos = null;
this.partycrit = false;
this.troupecrit = false;
}
 
var MalCritApply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
MalCritApply.call(this, target);
this.CritMusicCheck();
}

 Game_Action.prototype.CritMusicCheck = function() {
 var Sound1 = this.buildSound('M');
 var Sound2 = this.buildSound('S');
 var Sound3 = this.buildSound('E');
 var Sound4 = this.buildSound('T'); 
 
 if (this.ActorsCritical() && BattleManager.troupecrit == false) {
	if (AudioManager._currentBgm != null && Sound1 != null && BattleManager.partycrit == false) {
		BattleManager.oldBgm = AudioManager._currentBgm;
		BattleManager.oldBgmPos = AudioManager._bgmBuffer.seek();
	}
	if (Sound1 != null) AudioManager.playBgm(Sound1);
	if (Sound2 != null && BattleManager.partycrit == false) {
	BattleManager.oldBgs = AudioManager._currentBgs;
	AudioManager.playBgs(Sound2);
	}
	BattleManager.criticalBGMPLaying = true;
	BattleManager.partycrit = true;
 }
 if (!this.ActorsCritical() && BattleManager.partycrit == true && BattleManager.troupecrit == false) {
	if (BattleManager.oldBgm) AudioManager.playBgm(BattleManager.oldBgm, BattleManager.oldBgmPos);
	if(BattleManager.oldBgs){
		AudioManager.playBgs(BattleManager.oldBgs);
	} else {
		AudioManager.stopBgs();
	}
	BattleManager.criticalBGMPLaying = false;
	BattleManager.partycrit = false;
 }
 
 
 if (this.EnemyCritical() && BattleManager.partycrit == false) {
	if (AudioManager._currentBgm != null && Sound3 != null && BattleManager.troupecrit == false) {
		BattleManager.oldBgm = AudioManager._currentBgm;
		BattleManager.oldBgmPos = AudioManager._bgmBuffer.seek();
	}
	if (Sound3 != null) AudioManager.playBgm(Sound3);
	if (Sound4 != null && BattleManager.troupecrit == false) {
		BattleManager.oldBgs = AudioManager._currentBgs;
		AudioManager.playBgs(Sound4);
	}
	BattleManager.criticalBGMPLaying = true;
	BattleManager.troupecrit = true;
 }
 if (!this.EnemyCritical() && BattleManager.troupecrit == true && BattleManager.partycrit == false) {
	if (BattleManager.oldBgm) AudioManager.playBgm(BattleManager.oldBgm, BattleManager.oldBgmPos);
	if(BattleManager.oldBgs){
		AudioManager.playBgs(BattleManager.oldBgs);
	} else {
		AudioManager.stopBgs();
	}
	BattleManager.criticalBGMPLaying = false;
	BattleManager.troupecrit = false;
 }
 }
 
 Game_Action.prototype.buildSound = function(key) {
var key = key;
if (key == 'M'){
	if (MalCriticalMusic.PartyCritBGM){
		var sound = {
			name:   MalCriticalMusic.PartyCritBGM,
			volume: MalCriticalMusic.CritBGMVol,
			pitch:  MalCriticalMusic.CritBGMPitch,
			pan:    MalCriticalMusic.CritBGMPan
		};
	} else return null;
} 

if (key == 'S') {
	if (MalCriticalMusic.PartyCritBGS){
		var sound = {
			name:   MalCriticalMusic.PartyCritBGS,
			volume: MalCriticalMusic.CritBGSVol,
			pitch:  MalCriticalMusic.CritBGSPitch,
			pan:    MalCriticalMusic.CritBGSPan
    };
	} else return null;
}
	
if (key == 'E'){
	if (MalCriticalMusic.EnemyCritBGM){
	var sound = {
			name:   MalCriticalMusic.EnemyCritBGM,
			volume: MalCriticalMusic.CritBGMVol,
			pitch:  MalCriticalMusic.CritBGMPitch,
			pan:    MalCriticalMusic.CritBGMPan
	};
	}else return null;
} 

if (key == 'T') {
	if (MalCriticalMusic.EnemyCritBGS){
	var sound = {
			name:   MalCriticalMusic.EnemyCritBGS,
			volume: MalCriticalMusic.CritBGSVol,
			pitch:  MalCriticalMusic.CritBGSPitch,
			pan:    MalCriticalMusic.CritBGSPan
    };
	} else return null;
}
	
return sound;
}
 
 Game_Action.prototype.ActorsCritical = function() {
 var mhp = 0;
 var hp = 0;
 for (var i = 0; i < $gameParty.battleMembers().length; i++) {
	hp += $gameParty.battleMembers()[i].hp;
	mhp += $gameParty.battleMembers()[i].mhp;
 }
 return hp < mhp * (MalCriticalMusic.CritPoint / 100);
 }
 
  Game_Action.prototype.EnemyCritical = function() {
 var mhp = 0;
 var hp = 0;
 for (var i = 0; i < $gameTroop.members().length; i++) {
	hp += $gameTroop.members()[i].hp;
	mhp += $gameTroop.members()[i].mhp;
 }
 return hp < mhp * (MalCriticalMusic.CritPoint / 100);
 
 }