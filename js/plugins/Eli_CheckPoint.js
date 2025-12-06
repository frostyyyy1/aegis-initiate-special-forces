//============================================================================
// Eli_CheckPoint.js
//============================================================================

/*:
@plugindesc v1.4 - Check point system(autosave/load).
@author Hakuen Studio

@help
Made and tested with Rpg Maker Mv 1.6.2.
Always have a backup from your project!
******************************************************************************
                            Join me on Patreon!
                    https://www.patreon.com/hakuenstudio
******************************************************************************
==============================================================================
Requirements / Dependencies
==============================================================================

    You need Eli’s_Book.js to be somewhere above this plugin.

==============================================================================
Introduction
==============================================================================

	An autosave or checkpoint system is something that many games today
use. This plugin makes this type of system possible in Rpg Maker Mv with some
extra things.

==============================================================================
Features
==============================================================================

    • Autosave / autoload
    • Autoload option after game over
    • Run a common event after autoload
    • It is not possible to save manually in the auto slot

==============================================================================
How to use
==============================================================================

Plugin commands

    • AutoSave > autosave the game in the autoslot.
    • AutoLoad > autoload the autoslot.

    Script calls:
    • $checkPoint.save()
    • $checkPoint.load()

==============================================================================
Contact
==============================================================================

RM Web - https://forums.rpgmakerweb.com/index.php?members/eliaquim.123037/
Centro Rpg Maker - https://centrorpg.com/index.php?action=profile
Instagram - https://www.instagram.com/hakuenstudio
Twitter - https://twitter.com/hakuen_studio
Facebook - https://www.facebook.com/hakuenstudio

==============================================================================
Terms of use
==============================================================================

https://www.hakuenstudio.com/rpg-maker/terms-of-use

==============================================================================
Update log
==============================================================================
• Version 1.4 - 01/04/2021
- Fixed an error when autoload after game over.
• Version 1.3 – 08/22/2020
- Change in script calls, see help file.
- Code restructuring.
• Version 1.2 - 18/05/2020
- Add dependency with Eli's_Book.js
- Fixed a bug that prevents the autoload common event from play when loaded
the autoslot via Scene_Load(Continue from title screen).
- Code clean up!
• Version 1.1 - 10/01/2020
- Added autosave/load system!
- Added option to change the help text when the autosave/load slot is
selected.
- Modified plugin name.
- Added option to run a common event when loading the game through the slot
autosave.
• Version 1.0 - 01/09/2020
- Plugin released!

@param autoSlotName
@text AutoSave slot name
@type text
@desc Choose a name for the auto save slot
@default AutoSave

@param autoSaveHelp
@text Scene_Save - Help Text
@type text
@desc Choose a description for the autosave slot in Scene_Save.
@default You can't overwrite an autosave file.

@param autoLoadHelp
@text Scene_Load - Help Text
@type text
@desc Choose a description for the autosave slot in Scene_Load.
@default Continue from your autosave.

@param autoCommonEvent
@text Auto Load Common Event
@type common_event
@desc Choose a common event to play when the autosave file gets loaded.
@default 0

@param autoLoadInGameOver
@text AutoLoad in GameOver
@type boolean
@desc Choose if you want to load the game when the game is over.
@default true

*/

/*:pt
@plugindesc v1.4 - Sistema de check point(autosave/load)
@author Hakuen Studio

@help
Feito e testado no Rpg Maker 1.6.2
Sempre faça um backup do seu projeto!
******************************************************************************
                          Junte-se a mim no Patreon!
                    https://www.patreon.com/hakuenstudio
******************************************************************************
==============================================================================
Requerimentos / Dependências
==============================================================================

    Você precisa que Eli’s_Book.js esteja em algum lugar acima desse plugin.
     
==============================================================================
Introdução
==============================================================================

	Um sistema de autosave ou checkpoint é algo que muitos jogos hoje em
dia usam. Esse plugin torna possível esse tipo de sistema no Rpg Maker Mv
junto com algumas funcionalidades extras.

==============================================================================
Funcionalidades
==============================================================================

Sistema:
    • Autosave/autoload
    • Opção de autoload após o game over
    • Executar um evento comum após o autoload
    • Não é possível salvar manualmente no autoslot

==============================================================================
Como usar
==============================================================================

Comandos de plugin:

    • AutoSave > Executa o autosave.
    • AutoLoad > Executa o autoload.

	Script calls:
    • $checkPoint.save()
    • $checkPoint.load()

==============================================================================
Contato
==============================================================================

RM Web - https://forums.rpgmakerweb.com/index.php?members/eliaquim.123037/
Centro Rpg Maker - https://centrorpg.com/index.php?action=profile
Instagram - https://www.instagram.com/hakuenstudio
Twitter - https://twitter.com/hakuen_studio
Facebook - https://www.facebook.com/hakuenstudio

==============================================================================
Termos de uso
==============================================================================

https://www.hakuenstudio.com/rpg-maker/terms-of-use

==============================================================================
Atualizações
==============================================================================
• Versão 1.4 - 04/01/2021
- Consertado um erro ao carregar o autosave depois do game over.
• Versão 1.3 – 22/08/2020
- Mudança nas script calls, veja o arquivo de ajuda.
- Mudança na estrutura do código.
• Versão 1.2 – 18/05/2020
- Adicionado dependência com Eli's Book.js
- Consertado um bug quando o autoslot era carregado através da Scene_Load não
executava o evento comum de autoload.
- Limpeza no código!
• Versão 1.1 - 10/01/2020
- Adicionado sistema de autosave/load!
- Adicionado opção de mudar o texto de ajuda quando o autosave/load slot é
selecionado.
- Nome do plugin modificado.
- Adicionado opção de rodar um evento comum ao carregar o jogo pelo slot de
autosave.
• Versão 1.0 - 09/01/2020
- Plugin lançado!

@param autoSlotName
@text Nome do slot
@type text
@desc Escolha um nome para ao slot de autoSave/Load
@default AutoSave

@param autoSaveHelp
@text Scene_Save - Texto de ajuda
@type text
@desc Escolha um texto para ser exibido na janela de ajuda quando estiver no autoSlot.
@default Você não pode salvar em cima de um auto slot.

@param autoLoadHelp
@text Scene_Save - Texto de ajuda
@type text
@desc Escolha um texto para ser exibido na janela de ajuda quando estiver no autoSlot.
@default Continue seu jogo pelo auto slot.

@param autoCommonEvent
@text Load common event
@type common_event
@desc Escolha um evento comum para ser executado quando der autoload.
@default 0

@param autoLoadInGameOver
@text AutoLoad no GameOver
@type boolean
@desc Escolha se deseja carregar o jogo no auto slot após o game over.
@default true

*/

// Possibilidade de adicionar todos os tipos de animação como padrão?

"use strict";

var Imported = Imported || {}; 
Imported.Eli_CheckPoint = true;

var Eli = Eli || {}; 
Eli.CheckPoint = Eli.CheckPoint || {}; 

Eli.needBook = function() {
    if(!Eli.alert){
        window.alert(`Eli's_Book.js was not found. 
Please download the latest version for free.`);
        if(confirm) {
            window.open('https://hakuenstudio.itch.io/elis-book-rpg-maker-mv');
        }
        Eli.alert = true;
    }
};

if(!Imported.Eli_Book) Eli.needBook();

Eli.CheckPoint.Parameters = PluginManager.parameters('Eli_CheckPoint');
Eli.CheckPoint.Param = eli.convertParameters(Eli.CheckPoint.Parameters) || {};
delete Eli.CheckPoint.Parameters;

/*==============================================================\\
                        CHECK POINT CLASS                          
//==============================================================*/

class Eli_CheckPoint{

    load() {
        if(DataManager.loadGame(1)) {
            SoundManager.playLoad();
            SceneManager._scene.fadeOutAll();
            $gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
            $gamePlayer.requestMapReload();
            SceneManager.goto(Scene_Map);
            $gameSystem.onAfterLoad();
            this.loadCommonEvent();
        }
    };

    save() {
        $gameSystem.onBeforeSave();
        if(DataManager.saveGame(1)) {
            StorageManager.cleanBackup(1);
        }
    };

    checkAfterLoad(){
        if(DataManager.lastAccessedSavefileId() === 1) {
            this.loadCommonEvent();
        }
    };

    loadCommonEvent() {
        if(DataManager.lastAccessedSavefileId() === 1){
            $gameTemp.reserveCommonEvent(Eli.CheckPoint.Param.autoCommonEvent);
        }
    };

    executeCommand(command, args){
        const allCommands = {
            AUTOSAVE: 'save',
            AUTOLOAD: 'load',
        };
        const result = allCommands[command.toUpperCase()];
        if(result) this[result](args);
    };

};

var $checkPoint = new Eli_CheckPoint();

/*==============================================================\\
                            OBJECTS                          
//==============================================================*/

Eli.CheckPoint.Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
Game_System.prototype.onAfterLoad = function() {
    Eli.CheckPoint.Game_System_onAfterLoad.call(this);
    $checkPoint.checkAfterLoad();
};

Eli.CheckPoint.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    Eli.CheckPoint.Game_Interpreter_pluginCommand.call(this, command, args);
    $checkPoint.executeCommand(command, args);
};

/*==============================================================\\
                            SCENES                          
//==============================================================*/

Eli.CheckPoint.Scene_File_createListWindow = Scene_File.prototype.createListWindow;
Scene_File.prototype.createListWindow = function() {
    Eli.CheckPoint.Scene_File_createListWindow.call(this);
    this._listWindow.setHelpWindow(this._helpWindow);
};

Eli.CheckPoint.Scene_Gameover_gotoTitle = Scene_Gameover.prototype.gotoTitle;
Scene_Gameover.prototype.gotoTitle = function() {
    if(Eli.CheckPoint.Param.autoLoadInGameOver) {
        $checkPoint.load();
    }else{
        Eli.CheckPoint.Scene_Gameover_gotoTitle.call(this);
    }
};

/*==============================================================\\
                            WINDOWS                          
//==============================================================*/

Eli.CheckPoint.Window_SavefileList_drawFileId = Window_SavefileList.prototype.drawFileId;
Window_SavefileList.prototype.drawFileId = function(id, x, y) {
    if (id === 1){
        this.drawText(Eli.CheckPoint.Param.autoSlotName, x, y, 180);
    } else {
        Eli.CheckPoint.Window_SavefileList_drawFileId.call(this, (id), x, y)
    }
};

Eli.CheckPoint.Window_SavefileList_drawItem = Window_SavefileList.prototype.drawItem;
Window_SavefileList.prototype.drawItem = function(index) {
    Eli.CheckPoint.Window_SavefileList_drawItem.call(this, index);
    this.changeAutoSlotOpacity(index);
};

Eli.CheckPoint.Window_SavefileList_isCurrentItemEnabled = Window_SavefileList.prototype.isCurrentItemEnabled;
Window_SavefileList.prototype.isCurrentItemEnabled = function() {
    return this.itemIsAutoSlot() ? false : Eli.CheckPoint.Window_SavefileList_isCurrentItemEnabled.call(this); 
};

Eli.CheckPoint.Window_SavefileList_updateHelp = Window_SavefileList.prototype.updateHelp;
Window_SavefileList.prototype.updateHelp = function(){
    Eli.CheckPoint.Window_SavefileList_updateHelp.call(this);
    this.updateSaveHelp();
    this.updateLoadHelp();
};

Window_SavefileList.prototype.changeAutoSlotOpacity = function(index){
    if(DataManager.isThisGameFile(1) && eli.isScene(Scene_Save)){
        const id = index + 1;
        const valid = DataManager.isThisGameFile(id-1);
        const info = DataManager.loadSavefileInfo(id);
        const rect = this.itemRectForText(index);
        if (info) {
            this.changePaintOpacity(valid);
            this.drawContents(info, rect, valid);
            this.changePaintOpacity(true);
        }
    }
};

Window_SavefileList.prototype.itemIsAutoSlot = function(){
    return eli.isScene(Scene_Save) && !eli.scene()._listWindow._index;
};

Window_SavefileList.prototype.updateSaveHelp = function(){
    const help = eli.scene()._helpWindow;
    const index = eli.scene()._listWindow._index;
    if(eli.isScene(Scene_Save)){
        help.setText(!index ? Eli.CheckPoint.Param.autoSaveHelp : TextManager.saveMessage);
    }
};

Window_SavefileList.prototype.updateLoadHelp = function(){
    const help = eli.scene()._helpWindow;
    const index = eli.scene()._listWindow._index;
    if(eli.isScene(Scene_Load)){
        help.setText(!index ? Eli.CheckPoint.Param.autoLoadHelp : TextManager.saveMessage);
    }
};