
//=============================================================================
//                      VE_MenuPicture.js - 1.00
//=============================================================================

/*:
 * @plugindesc Creates background image at menu scenes.
 * @author Ventiqu - 2016.
 * @help Set Pictures to picture folder and then go to plugin manager and
 set same name like picture file name is.
 *
 * @param Menu
 * @desc Change menu scene background image.
 * Default: World
 * @default World
 *
 * @param Item
 * @desc Change item scene background image.
 * Default: Fountain
 * @default Fountain
 *
 * @param Equip
 * @desc Change equip scene background image.
 * Default: Dragon
 * @default Dragon
 *
 * @param Status
 * @desc Change status scene background image.
 * Default: Island
 * @default Island
 *
 * @param Skill
 * @desc Change skill scene background image.
 * Default: Night
 * @default Night
 *
 * @param Save
 * @desc Change save scene background image.
 * Default: Mountains2
 * @default Mountains2
 *
 */

 (function() {
   var parametri        =     PluginManager.parameters('VE_MenuPicture');
   var menuPicture      =     String(parametri['Menu']);
   var itemPicture      =     String(parametri['Item']);
   var equipPicture     =     String(parametri['Equip']);
   var statusPicture    =     String(parametri['Status']);
   var skillPicture     =     String(parametri['Skill']);
   var savePicture      =     String(parametri['Save']);

   var Ventiqun_alias_Scene_Menu_createBackground = Scene_Menu.prototype.createBackground;
   Scene_Menu.prototype.createBackground = function() {
     Ventiqun_alias_Scene_Menu_createBackground.call(this);
     this._backgroundSprite = new TilingSprite();
     this._backgroundSprite.move(0, 0, Graphics.width, Graphics.height);
     this._backgroundSprite.bitmap = ImageManager.loadPicture(menuPicture);
     this.addChild(this._backgroundSprite);
   }

   var Ventiqun_alias_Scene_Item_createBackground = Scene_Item.prototype.createBackground;
   Scene_Item.prototype.createBackground = function() {
     Ventiqun_alias_Scene_Item_createBackground.call(this);
     this._backgroundSprite = new TilingSprite();
     this._backgroundSprite.move(0, 0, Graphics.width, Graphics.height);
     this._backgroundSprite.bitmap = ImageManager.loadPicture(itemPicture);
     this.addChild(this._backgroundSprite);
   }

   var Ventiqun_alias_Scene_Equip_createBackground = Scene_Equip.prototype.createBackground;
   Scene_Equip.prototype.createBackground = function() {
     Ventiqun_alias_Scene_Equip_createBackground.call(this);
     this._backgroundSprite = new TilingSprite();
     this._backgroundSprite.move(0, 0, Graphics.width, Graphics.height);
     this._backgroundSprite.bitmap = ImageManager.loadPicture(equipPicture);
     this.addChild(this._backgroundSprite);
   }

  var Ventiqun_alias_Scene_Status_createBackground = Scene_Status.prototype.createBackground;
   Scene_Status.prototype.createBackground = function() {
     Ventiqun_alias_Scene_Status_createBackground.call(this);
     this._backgroundSprite = new TilingSprite();
     this._backgroundSprite.move(0, 0, Graphics.width, Graphics.height);
     this._backgroundSprite.bitmap = ImageManager.loadPicture(statusPicture);
     this.addChild(this._backgroundSprite);
   }

   var Ventiqun_alias_Scene_Skill_createBackground = Scene_Skill.prototype.createBackground;
   Scene_Skill.prototype.createBackground = function() {
     Ventiqun_alias_Scene_Skill_createBackground.call(this);
     this._backgroundSprite = new TilingSprite();
     this._backgroundSprite.move(0, 0, Graphics.width, Graphics.height);
     this._backgroundSprite.bitmap = ImageManager.loadPicture(skillPicture);
     this.addChild(this._backgroundSprite);
   }

   var Ventiqun_alias_Scene_Skill_createBackground = Scene_Save.prototype.createBackground;
   Scene_Save.prototype.createBackground = function() {
     Ventiqun_alias_Scene_Skill_createBackground.call(this);
     this._backgroundSprite = new TilingSprite();
     this._backgroundSprite.move(0, 0, Graphics.width, Graphics.height);
     this._backgroundSprite.bitmap = ImageManager.loadPicture(savePicture);
     this.addChild(this._backgroundSprite);
   }

})();
