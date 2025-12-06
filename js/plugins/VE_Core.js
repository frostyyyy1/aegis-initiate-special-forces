
//=============================================================================
//                      VE_Core.js - 1.01
//=============================================================================

/*:
 * @plugindesc This will offer some parameters you can change in game.
 Change things how you like!
 * @author Ventiqu - 2016
 * @help If you have VE_FinalFantasyMenu v.1.00, you have to change font through that.
 *
 * ----------
 * Changelog
 * ----------
 * 25.6.2016 - Fixed choice window for not showing text there.
 *
 * @param Text Font
 * @desc Change text font here.
 * Default: GameFont
 * @default GameFont
 *
 * @param System Color
 * @desc Change system color (HP, STR, AGI text's color)
 * Default: 16
 * @default 16
 *
 * @param Normal Color
 * @desc Change text's color (All that's white)
 * Default: 0
 * @default 0
 *
 * @param Crisis Color
 * @desc Change crisis text color (when actor has very low health).
 * Default: 17
 * @default 17
 *
 * @param Death Color
 * @desc Change death text color (when actor is dead).
 * Default: 18
 * @default 18
 *
 * @param Blur Effects Color
 * @desc Change blur effect's color. (Ex. black, red, blue, white..)
 * Default: black
 * @default black
 *
 * @param Max Save Files
 * @desc Decide how many save files can player save.
 * Default: 20
 * @default 20
 *
 * @param ----------------
 * @desc -
 * @default ------------------------------------------------
 *
 * @param All Gauges Height
 * @desc Change gauge's height, making them more thick.
 * Default: 6
 * @default 6
 *
 * @param Gauge Back Color
 * @desc Change gauge back color
 * Default: 19
 * @default 19
 *
 * @param HP Gauge Color 1
 * @desc Change HP gauge color (left side)
 * Default: 20
 * @default 20
 *
 * @param HP Gauge Color 2
 * @desc Change HP gauge color (right side)
 * Default: 21
 * @default 21
 *
 * @param MP Gauge Color 1
 * @desc Change MP gauge color (left side)
 * Default: 22
 * @default 22
 *
 * @param MP Gauge Color 2
 * @desc Change MP gauge color (right side)
 * Default: 23
 * @default 23
 *
 * @param TP Gauge Color 1
 * @desc Change TP gauge color (left side)
 * Default: 28
 * @default 28
 *
 * @param TP Gauge Color 2
 * @desc Change TP gauge color (right side)
 * Default: 29
 * @default 29
 *
 * @param ----------------
 * @desc -
 * @default ------------------------------------------------
 *
 * @param Set Max Items
 * @desc Change how many numbers per item can player have.
 * Default: 99 (Ex. Players can have 99 potions.)
 * @default 99
 *
 * @param Set Max Gold
 * @desc Change how many gold player can have overall.
 * Default: 99999999
 * @default 99999999
 *
 */

(function() {

  var parametri       =     PluginManager.parameters('VE_Core');
  var changeTextFont  =     String(parametri['Text Font']);
  var systeemColor    =     String(parametri['System Color']);
  var normaalColor    =     String(parametri['Normal Color']);
  var crisiisColor    =     String(parametri['Crisis Color']);
  var deathhColor     =     String(parametri['Death Color']);
  var bitmapBlurColor =     String(parametri['Blur Effects Color']);
  var maaxSaveFiles   =     Number(parametri['Max Save Files']        || Number);
  var gaugesHeight    =     Number(parametri['All Gauges Height']     || Number);
  var hpgaugeColor1   =     Number(parametri['HP Gauge Color 1']      || Number);
  var hpgaugeColor2   =     Number(parametri['HP Gauge Color 2']      || Number);
  var mpgaugeColor1   =     Number(parametri['MP Gauge Color 1']      || Number);
  var mpgaugeColor2   =     Number(parametri['MP Gauge Color 2']      || Number);
  var tpgaugeColor1   =     Number(parametri['TP Gauge Color 1']      || Number);
  var tpgaugeColor2   =     Number(parametri['TP Gauge Color 2']      || Number);
  var cauugeBackColor =     Number(parametri['Gauge Back Color']      || Number);
  var setMaxItems     =     Number(parametri['Set Max Items']         || Number);
  var setMaxGold      =     Number(parametri['Set Max Gold']          || Number);


/////////////////////////////////
//Initialize Choicelist
////////////////////////////////
var VE_Window_ChoiceList = Window_ChoiceList;
  function Window_ChoiceList() {
    VE_Window_ChoiceList.call(this);
    this.initialize.apply(this, arguments);
  }

/////////////////////////////////
//Font Section
////////////////////////////////
Window_Base.prototype.standardFontFace = function() {
    return changeTextFont;
};

Window_Message.prototype.standardFontFace = function() {
    return changeTextFont;
};

Window_ChoiceList.prototype.standardFontFace = function() {
    return changeTextFont;
};

Window_ChoiceList.prototype.standardFontSize = function() {
    return changeTextFont;
};

/////////////////////////////////
//Window_Base edit
////////////////////////////////

Window_Base.prototype.hpGaugeColor1 = function() { //Left side
    return this.textColor(hpgaugeColor1);
};

Window_Base.prototype.hpGaugeColor2 = function() { //Right side
    return this.textColor(hpgaugeColor2);
};

Window_Base.prototype.mpGaugeColor1 = function() {
    return this.textColor(mpgaugeColor1);
};

Window_Base.prototype.mpGaugeColor2 = function() {
    return this.textColor(mpgaugeColor2);
};

Window_Base.prototype.gaugeBackColor = function() {
    return this.textColor(cauugeBackColor);
};

Window_Base.prototype.drawGauge2 = function(x, y, width, rate, color1, color2) {
    var fillW = Math.floor(width * rate);
    var gaugeY = y + this.lineHeight() - 20;
    this.contents.fillRect(x, gaugeY, width, gaugesHeight, this.gaugeBackColor());
    this.contents.gradientFillRect(x, gaugeY, fillW, gaugesHeight, color1, color2);
};

Window_Base.prototype.tpGaugeColor1 = function() {
    return this.textColor(tpgaugeColor1);
};

Window_Base.prototype.tpGaugeColor2 = function() {
    return this.textColor(tpgaugeColor2);
};

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x + 84, y, 36, 'left');
};

Window_Base.prototype.systemColor = function() {
    return this.textColor(systeemColor);
};

Window_Base.prototype.normalColor = function() {
    return this.textColor(normaalColor);
};

Window_Base.prototype.crisisColor = function() {
    return this.textColor(crisiisColor);
};

Window_Base.prototype.deathColor = function() {
    return this.textColor(deathhColor);
};

Window_Base.prototype.drawActorHp2 = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
    this.drawGauge2(x, y, width, actor.hpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.hpA, x, y, 44);
    this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
                           this.hpColor(actor), this.normalColor());
};

Window_Base.prototype.drawActorMp2 = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.mpGaugeColor1();
    var color2 = this.mpGaugeColor2();
    this.drawGauge2(x, y, width, actor.mpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.mpA, x, y, 44);
    this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width,
                           this.mpColor(actor), this.normalColor());
};

/////////////////////////////////
//drawActorHP and drawActorMP edit
////////////////////////////////

Window_Status.prototype.drawBasicInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    this.drawActorLevel(this._actor, x, y + lineHeight * 0);
    this.drawActorIcons(this._actor, x, y + lineHeight * 1);
    this.drawActorHp2(this._actor, x, y + lineHeight * 2);
    this.drawActorMp2(this._actor, x, y + lineHeight * 3);
};

Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y);
    this.drawActorHp2(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp2(actor, x2, y + lineHeight * 2, width2);
};

/////////////////////////////////
//Bitmap edit
////////////////////////////////

Bitmap.prototype.blur = function() {
    for (var i = 0; i < 2; i++) {
        var w = this.width;
        var h = this.height;
        var canvas = this._canvas;
        var context = this._context;
        var tempCanvas = document.createElement('canvas');
        var tempContext = tempCanvas.getContext('2d');
        tempCanvas.width = w + 2;
        tempCanvas.height = h + 2;
        tempContext.drawImage(canvas, 0, 0, w, h, 1, 1, w, h);
        tempContext.drawImage(canvas, 0, 0, w, 1, 1, 0, w, 1);
        tempContext.drawImage(canvas, 0, 0, 1, h, 0, 1, 1, h);
        tempContext.drawImage(canvas, 0, h - 1, w, 1, 1, h + 1, w, 1);
        tempContext.drawImage(canvas, w - 1, 0, 1, h, w + 1, 1, 1, h);
        context.save();
        context.fillStyle = bitmapBlurColor;
        context.fillRect(0, 0, w, h);
        context.globalCompositeOperation = 'lighter';
        context.globalAlpha = 1 / 9;
        for (var y = 0; y < 3; y++) {
            for (var x = 0; x < 3; x++) {
                context.drawImage(tempCanvas, x, y, w, h, 0, 0, w, h);
            }
        }
        context.restore();
    }
    this._setDirty();
};

/////////////////////////////////
//Datamanager edit
////////////////////////////////

DataManager.maxSavefiles = function() {
    return maaxSaveFiles;
};

/////////////////////////////////
//Game_Party edit
////////////////////////////////

Game_Party.prototype.maxItems = function(item) {
    return setMaxItems;
};

Game_Party.prototype.maxGold = function() {
    return setMaxGold;
};

})();
