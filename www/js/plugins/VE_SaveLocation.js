
//=============================================================================
//                      VE_SaveLocation.js - 1.00
//=============================================================================

/*:
 * @plugindesc Instead of showing game title in Save Screen, this will change it to current map location.
 * @author Ventiqu - 2016.
 *
 * @param Change Location Text Color
 * @desc Change number to change location text color.
 * Default: 0
 * @default 0
 *
 */

 (function() {

   var parametri           =     PluginManager.parameters('VE_SaveLocation');
   var llocationTextColor  =     Number(parametri['Change Location Text Color'] || Number);

   var datamanager_makesavefileInfo = DataManager.makeSavefileInfo;
   DataManager.makeSavefileInfo = function() {
       datamanager_makesavefileInfo.call(this);
       var info = {};
       info.globalId   = this._globalId;
       info.title      = $dataSystem.gameTitle;
       info.characters = $gameParty.charactersForSavefile();
       info.faces      = $gameParty.facesForSavefile();
       info.playtime   = $gameSystem.playtimeText();
       info.timestamp  = Date.now();
       info.maplocation = $gameMap.displayName();
       return info;
   };

   Window_SavefileList.prototype.drawItem = function(index) {
       var id = index + 1;
       var valid = DataManager.isThisGameFile(id);
       var info = DataManager.loadSavefileInfo(id);
       var rect = this.itemRectForText(index);
       this.resetTextColor();
       if (this._mode === 'load') {
           this.changePaintOpacity(valid);
       }
       this.drawFileId(id, rect.x, rect.y);
       if (info) {
           this.changePaintOpacity(valid);
           this.drawContents(info, rect, valid);
           this.changePaintOpacity(true);
       }
   };

   Window_SavefileList.prototype.drawContents = function(info, rect, valid) {
       var bottom = rect.y + rect.height;
       if (rect.width >= 420) {
           this.drawLocation(info, rect.x + 192, rect.y, rect.width - 192);
           if (valid) {
               this.drawPartyCharacters(info, rect.x + 220, bottom - 4);
           }
       }
       var lineHeight = this.lineHeight();
       var y2 = bottom - lineHeight;
       if (y2 >= lineHeight) {
           this.drawPlaytime(info, rect.x, y2, rect.width);
       }
   };

   Window_Base.prototype.drawLocationTextColor = function() {
       return this.textColor(llocationTextColor);
   };

   Window_SavefileList.prototype.drawLocation = function(info, x, y, width) {
       if (info.maplocation) {
           this.changeTextColor(this.drawLocationTextColor());
           this.drawText(info.maplocation, x, y, width);
           this.changeTextColor(this.normalColor());
       }
   };

})();
