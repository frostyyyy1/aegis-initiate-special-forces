//============================================================================
// Eli_CheckPointWindow.js
//============================================================================

/*:
@plugindesc v1.4 - Add cool windows for Check point system(autosave/load).
@author Hakuen Studio

@help

******************************************************************************
                            Join me on Patreon!
                    https://www.patreon.com/hakuenstudio
******************************************************************************
==============================================================================
Requirements / Dependencies
==============================================================================

    You need Eli’s_Book.js and Eli_CheckPoint.js to be somewhere above this 
plugin.
https://rakuenzero.itch.io/elis-book-rpg-maker-mv
https://rakuenzero.itch.io/eli-checkpoint-rpg-maker-mv

==============================================================================
Introduction
==============================================================================

    Adds an autoSave and autoLoad confirmation window for the checkpoint
system!

==============================================================================
Features
==============================================================================

    • Game save / load confirmation window
    • Various window settings: Color, transparency, predefined and/or custom 
positions.
    • Possibility of using escape characters.
    • Slide animation of the window or fixed on the screen.
    • You can change the font size and font type and text for each window.

==============================================================================
How to use
==============================================================================

Parameters:

    • Autosave and Autoload text> Here you can write whatever appears in the
window. The size of the window will match the text you write here. Then, the
number of lines determines the height and the size of each sentence determines
the width. The plugin will automatically make these adjustments for you.

    • Positions> You can choose predefined positions for the window to appear.
If you want to use a custom position, choose the option "Top left", in which
the window will have the positions X: 0 Y: 0, allowing you to decide the
values ​​for the two coordinates in the Offset X and Offset Y parameters.

    • Horizontal/vertical animation> Here you choose the type of animation
that the window will do. If it will appear moving from left to right and top
to bottom on the screen, for example. It is important to consider when
choosing these animations the position chosen for the window in the Positions
parameter. You can also choose not to choose any animation at all.

    • X and Y offset> You can choose an extra value to be added for the two
coordinates from the defined position. If you want a custom position, choose
“Type a number” and enter the desired value. You will also find here the
automatic option "Auto left" and "Auto right". These options are necessary if
you want to use a horizontal or vertical animation. Choose one that matches
the chosen animation. Ex: If you choose Horizontal animation = Move left,
select Offset X = “Auto left”. These options inform the plugin to initially
position the window of the screen based on its width/height. Making the window
come out of the screen causing a cool animation effect (slide).

    • Target X and Y> Here you can determine to what point X or Y on the
screen, the window will move. You can choose a custom position in the “Type a
number” option as the parameter above. Or, choose Screen width/height so that
this position is automatic.

    • The other parameters are self-explanatory.

Plugin commands:

    • SaveText [line] [text] > Change the text show in the autosave window.
    • ResetSaveText > Reset the text for autosave window.
    • UpdateSaveWindow > It is necessary to validate the changes made to the 
autosave window.
    • LoadText [line] [text] > Change the text show in the autoload window.
    • ResetLoadText > Reset the text for autoload window.
    • UpdateLoadWindow > Change the text show in the autoload window.

Replace line with a number(starts with 1).
Replace text with the text you want.

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
Update Log
==============================================================================
• Version 1.4 - 01/04/2021
- Fixed an error when autoload after game over.
• Version 1.3 - 08/22/2020
- Code restructuring.
• Version 1.2 - 08/13/2020
- Fixed a bug that makes the windows initialize more than once.
- Bitwise changes.
• Version 1.1 - 07/30/2020
- Fixed a bug that was making autoload window appear when every save is 
loaded.
- Code clean up.
• Version 1.0 - 05/18/2020
- Plugin released!

@param fontFace
@text Font file
@type combo
@desc The font file used for this window.
@option GameFont
@default GameFont

@param fontSize
@text Font size
@type number
@desc The text's font size.
@default 28

@param saveText
@text Autosave text
@type text[]
@desc The text that will be shown in the window when you save the game. You can use escape characters.
@default

@param loadText
@text Autoload text
@type text[]
@desc The text that will be shown in the window when you load the game. You can use escape characters.
@default 

@param skin
@text Use window skin
@type boolean
@desc Choose to show or hide the windowskin.
@default Window

@param skinFile
@text Window file
@type file
@dir img/system/
@desc The file used for this window.
@default Window
@parent skin

@param backOpacity
@text Back opacity
@type number
@min 0
@max 255
@desc Default is 192.
@default 192
@parent skin

@param tone
@text Window Tone
@type text
@min -255
@max 255
@desc Default is 0, 0, 0
@default 0, 0, 0
@parent skin

@param background
@text Draw background
@type boolean
@desc Choose if you want to draw a dimmed background
@default false

@param dimColor1
@text Background color 1
@type text
@desc rgba(red, green, blue, alpha) | Default: rgba(0, 0, 0, 0.6)
@default rgba(0, 0, 0, 0.6)
@parent background

@param dimColor2
@text Background color 2
@type text
@desc rgba(red, green, blue, alpha) | Default: rgba(0, 0, 0, 0)
@default rgba(0, 0, 0, 0)
@parent background

@param movement

@param fadeInSpeed
@text Fade in speed
@type number
@desc How fast the window will fade in.
@default 30
@parent movement

@param fadeOutSpeed
@text Fade out speed
@type number
@desc How fast the window will fade Out.
@default 30
@parent movement

@param moveInSpeed
@text Move in speed
@type number
@desc How fast the window will move to the target position.
@default 30
@parent movement

@param moveOutSpeed
@text Move out speed
@type number
@desc How fast the window will return to it's original position.
@default 30
@parent movement

@param showCount
@text Show count
@type number
@desc How much time in frames the window will be visible on screen before move out and fade out.
@default 120
@parent movement

@param Starting position

@param preset
@text Predefined position
@type select
@desc Choose a value for the initial positions X and Y.
@option Custom
@value Custom
@option Top Left
@value 1
@option Top Center
@value 2
@option Top Right
@value 3
@option Center Left
@value 4
@option Center
@value 5
@option Center Right
@value 6
@option Bottom Left
@value 7
@option Bottom Center
@value 8
@option Bottom Right
@value 9
@default 4
@parent Starting position

@param customX
@text Custom X
@type number
@min -800
@desc
@default 0
@parent Starting position

@param customY
@text Custom Y
@type number
@min -800
@desc
@default 0
@parent Starting position

@param offsetX
@text Offset X
@type combo
@option OutScreen_Left
@option OutScreen_Right
@option Type a number
@desc An additional value for the X coordinate. It is useful when using a predefined position.
@default OutScreen_Left
@parent Starting position

@param offsetY
@text Offset Y
@type combo
@option OutScreen_Up
@option OutScreen_Down
@option Type a number
@desc An additional value for the Y coordinate. It is useful when using a predefined position.
@default Type a number
@parent Starting position

@param Final position

@param targetX
@text Target X position
@type combo
@option Type a number
@option EndOfScreen
@option None
@desc End of screen - Move to the bottom of the screen. 
None - It will not move from it's starting position.
@default Type a number
@parent Final position

@param targetY
@text Target Y position
@type combo
@option Type a number
@option EndOfScreen
@option None
@desc End of screen - Move to the bottom of the screen. 
None - It will not move from it's starting position.
@default Type a number
@parent Final position

*/


/*:pt
@plugindesc v1.4 - Adiciona janelas de confirmação para o sistema de check point(autosave/load)
@author Hakuen Studio

@help

******************************************************************************
                          Junte-se a mim no Patreon!
                    https://www.patreon.com/hakuenstudio
******************************************************************************
==============================================================================
Requerimentos / Dependências
==============================================================================

    Você precisa que Eli’s_Book.js e Eli_CheckPoint.js estejam em algum lugar 
acima desse plugin.
     
==============================================================================
Introdução
==============================================================================

    Adiciona uma janela de confirmação para o sistema de checkpoint(load e 
save)!

==============================================================================
Funcionalidades
==============================================================================

    • Janela de confirmação de salvamento/carregamento de jogo
    • Várias configurações da janela: Cor, transparência, posições predefinidas 
e/ou personalizadas.
    • Possibilidade de uso dos escape characters.
    • Animação “slide” da janela ou fixa na tela.
    • Pode trocar o tamanho da fonte e tipo de fonte.

==============================================================================
Como usar
==============================================================================

Parâmetros:

    • Auto save e Auto load text > Aqui você pode escrever o que quer que
apareça na janela. O tamanho da janela vai corresponder ao texto que você
escrever aqui. Então, a quantidade de linhas determina a altura e o tamanho de
cada frase determina a largura. O plugin vai automaticamente fazer esses
ajustes para você. 

    • Posições > Você pode escolher posições predefinidas para a janela
aparecer. Caso queira usar uma posição personalizada, escolha a opção
“Superior esquerda”, na qual a janela terá as posições X:0 Y:0, possibilitando
você decidir os valores para as duas coordenadas nos parâmetros Offset X e
Offset Y.

    • Animação horizontal/vertical > Aqui você escolhe o tipo de animação que
a janela vai fazer. Se ela vai aparecer se movendo da esquerda para a direita
e de cima para baixo na tela, por exemplo. É importante considerar ao escolher
essas animações a posição escolhida para a janela no parâmetro Posições. Você
também pode optar por não escolher animação nenhuma.

    • Offset X e Y > Você pode escolher um valor extra a ser adicionado para
as duas coordenadas  a partir da posição definida. Caso deseje uma posição
personalizada, escolha “Type a number” e digite o valor desejado. Você também 
encontrará aqui a opção automática “Auto left” e “Auto right”. Essas opções
são necessárias caso deseje usar uma animação horizontal ou vertical. Escolha
uma que corresponda a animação escolhida. Ex: Se escolher Animação horizontal
= Mover para esquerda, selecione Offset X = “Auto left”. Essas opções informam
ao plugin para que o mesmo posicione inicialmente a janela para fora da tela
baseada em sua largura/altura. Fazendo com que a janela possa vir de fora da
tela causando um efeito de animação legal(slide).

    • Destino X e Y > Aqui você pode determinar até que ponto X ou Y da tela,
a janela irá se mover. Você pode escolher uma posição personalizada na opção
“Type a number” como o parâmetro acima. Ou, escolha Screen width/height para
que essa posição seja automática.
    • Os outros parâmetros são auto explicativos.

Comandos de plugin:

    • SaveText [linha] [texto] > Escolha a linha e escreva o texto que irá
mostrar nessa linha.
    • ResetSaveText > Apaga todo o texto de save.
    • UpdateSaveWindow > Atualiza a janela de autosave realizando as mudanças
necessárias conforme as novas informações inseridas.
    • LoadText [linha] [texto] > Escolha a linha e escreva o texto que irá
mostrar nessa linha.
    • ResetLoadText > Apaga todo o texto de load.
    • UpdateLoadWindow > Atualiza a janela de autoload realizando as mudanças
necessárias conforme as novas informações inseridas.

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
ATUALIZAÇÕES
==============================================================================
• Versão 1.4 - 04/01/2021
- Consertado um erro ao carregar o autosave depois do game over.
• Versão 1.3 - 22/08/2020
- Restruturação do código.
• Versão 1.2 - 13/08/2020
- Consertado um bug que fazia a janela inicializar mais de uma vez.
- Bitwise mudanças.
• Versão 1.1 - 30/07/2020
- Consertado um bug que fazia a janela de save aparecer quando carregava em 
qualquer slot.
- Code clean up.
• Versão 1.0 - 18/05/2020
- Plugin lançado!

@param fontFace
@text O arquivo de fonte
@type combo
@desc O arquivo da fonte usado para essa janela. Padrão é GameFont.
@option GameFont
@default GameFont

@param fontSize
@text Tamanho da fonte
@type number
@desc O tamanho da fonte. Padrão é 28.
@default 28

@param saveText
@text Auto save text
@type text[]
@desc O texto que será mostrado na janela de confirmação quando o jogo for salvo. Você pode usar os "escape characters".
@default 

@param loadText
@text Auto load text
@type text[]
@desc O texto que será mostrado na janela de confirmação quando o jogo for carregado. Você pode usar os "escape characters".
@default

@param skin
@text Usar Window skin
@type boolean
@desc Escolha se deseja mostrar a Window Skin ou não.
@default Window

@param skinFile
@text Arquivo da window
@type file
@dir img/system/
@desc O arquivo que será usado para essa janela.
@default Window
@parent skin

@param backOpacity
@text Transparência de fundo
@type number
@min 0
@max 255
@desc O padrão é 192.
@default 192
@parent skin

@param tone
@text A cor da janela
@type text
@min -255
@max 255
@desc (r, g, b)Defina a cor da janela igual na aba system. O padrão é 0, 0, 0. É permitido números de -255 a 255.
@default 0, 0, 0
@parent skin

@param background
@text Fundo dimmed
@type boolean
@desc Escolha se deseja usar um fundo dimmed.
@default false

@param dimColor1
@text Cor de fundo 1
@type text
@desc rgba(red, green, blue, alpha) | Padrão: rgba(0, 0, 0, 0.6)
@default rgba(0, 0, 0, 0.6)

@param dimColor2
@text Cor de fundo 2
@type text
@desc rgba(red, green, blue, alpha) | Padrão: rgba(0, 0, 0, 0)
@default rgba(0, 0, 0, 0)

@param movement

@param fadeInSpeed
@text Fade in speed
@type number
@desc How fast the window will fade in.
@default 30
@parent movement

@param fadeOutSpeed
@text Fade out speed
@type number
@desc How fast the window will fade Out.
@default 30
@parent movement

@param moveInSpeed
@text Move in speed
@type number
@desc How fast the window will move to the target position.
@default 30
@parent movement

@param moveOutSpeed
@text Move out speed
@type number
@desc How fast the window will return to it's original position.
@default 30
@parent movement

@param showCount
@text Tempo de duração
@type number
@desc Quanto tempo, em frames, a janela ficará visível.
@default 150

@param Starting position

@param preset
@text Posições predefinidas
@type select
@desc Escolha o valor inicial para a posição X e Y.
@option Custom
@value Custom
@option Superior esquerda
@value 1
@option Superior centro
@value 2
@option Superior direita
@value 3
@option Centro esquerda
@value 4
@option Centralizado
@value 5
@option Centro direita
@value 6
@option Inferior esquerda
@value 7
@option Centro inferior
@value 8
@option Inferior direita
@value 9
@default 4
@parent Starting position

@param customX
@text Custom X
@type number
@min -800
@desc Só funciona se a posição predefinida for "custom". Pode ser valores negativos.
@default 0
@parent Starting position

@param customY
@text Custom Y
@type number
@min -800
@desc Só funciona se a posição predefinida for "custom". Pode ser valores negativos.
@default 0
@parent Starting position

@param offsetX
@text Offset X
@type combo
@option OutScreen_Left
@option OutScreen_Right
@option Type a number
@desc Adicional para X. Left: Move a janela para esquerda, fora da tela. Right: Move a janela para direita, fora da tela.
@default OutScreen_Left
@parent Starting position

@param offsetY
@text Offset Y
@type combo
@option OutScreen_Up
@option OutScreen_Down
@option Type a number
@desc Adicional para Y. Down: Move a janela para baixo, fora da tela. Up: Move a janela para cima, fora da tela.
@default Type a number
@parent Starting position

@param Final position

@param targetX
@text Destino X
@type combo
@desc End of screen - A janela irá se mover e encaixar no final da tela. Ou digite uma coordenada.
@option Type a number
@option EndOfScreen
@option None
@default Type a number
@parent Final position

@param targetY
@text Destino Y
@type combo
@desc End of screen - A janela irá se mover e encaixar no final da tela. Ou digite uma coordenada.
@option Type a number
@option EndOfScreen
@option None
@default Type a number
@parent Final position

*/

"use strict";

var Imported = Imported || {}; 
Imported.Eli_CheckPointWindow = true;

var Eli = Eli || {}; 
Eli.CheckPointWindow = Eli.CheckPointWindow || {}; 

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

if(!Imported.Eli_Book) {
    Eli.needBook();
}

Eli.CheckPointWindow.Parameters = PluginManager.parameters('Eli_CheckPointWindow');
Eli.CheckPointWindow.Param = eli.convertParameters(Eli.CheckPointWindow.Parameters) || {};
delete Eli.CheckPointWindow.Parameters;

Eli.needEliCheckPoint = function() {
    if(!Eli.alert){
        window.alert(`Eli_CheckPoint.js was not found. 
Please download the latest version for free.`);
        if(confirm) {
            window.open('https://rakuenzero.itch.io/eli-checkpoint-rpg-maker-mv');
        }
        Eli.alert = true;
    }
};

if(!Imported.Eli_CheckPoint) Eli.needEliCheckPoint();

/*==============================================================\\
                        PLUGIN CLASS                          
//==============================================================*/

class Eli_CheckPointWindow extends Eli_CheckPoint {

    constructor(){
        super();
        this.initialize();
    };

    initialize(){
        eli.reserveImages.push(Eli.CheckPointWindow.Param.skinFile);
        eli.addToDecrypterIgnoreList('system', Eli.CheckPointWindow.Param.skinFile);
    };

    gameEli(){
        return $gameEli.checkPointWindow();
    };

    getSaveText(){
        return this.gameEli().saveText;
    };

    getLoadText() {
        return this.gameEli().loadText;
    };
    
    canSave() {
        return this.gameEli().canSave;
    };
    
    canLoad() {
        return this.gameEli().canLoad;
    };

    load() { //Overwrite
        if(DataManager.loadGame(1)) {
            SoundManager.playLoad();
            eli.scene().fadeOutAll();
            $gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
            $gamePlayer.requestMapReload();
            SceneManager.goto(Scene_Map);
            $gameSystem.onAfterLoad();
        }
    };
    
    save() { //Overwrite
        $gameSystem.onBeforeSave();
        if(DataManager.saveGame(1)) {
            StorageManager.cleanBackup(1);
        }
        eli.scene()._autoSaveWindow.open();
        $gameTemp._loaded = false;
    };
    
    checkAfterLoad() { //Overwrite
        if(DataManager.lastAccessedSavefileId() === 1) {
            this.loadCommonEvent();
            $gameTemp._loaded = true;
        }else{
            $gameTemp._loaded = false;
        }
    };

    executeCommand(command, args){ // Alias
        super.executeCommand(command, args);
        const allCommands = {
            SAVETEXT: 'setSaveText',
            RESETSAVETEXT: 'resetSaveText',
            UPDATESAVEWINDOW: 'updateSaveWindow',
            LOADTEXT: 'setLoadText',
            RESETLOADTEXT: 'resetLoadText',
            UPDATELOADWINDOW: 'updateLoadWindow'
        };
        const result = allCommands[command.toUpperCase()];
        if(result) this[result](args);
    };

    setSaveText(args){
        this.gameEli().saveText[+args[0] - 1] = args.slice(1).join(" ");
    };
    
    resetSaveText(){
        this.gameEli().saveText = ['Set up a new text.'];
    };

    setLoadText(args){
        this.gameEli().loadText[+args[0] - 1] = args.slice(1).join(" ");
    };
    
    resetLoadText(){
        this.gameEli().loadText = ['Set up a new text.'];
    };

    updateSaveWindow(){
        eli.scene().removeChild(eli.scene._autoSaveWindow);
        eli.scene()._autoSaveWindow = new Window_SavePoint(this.getSaveText())
        eli.scene().addChild(eli.scene()._autoSaveWindow);
    };
    
    updateLoadWindow(){
        eli.scene().removeChild(eli.scene()._autoLoadWindow);
        eli.scene()._autoLoadWindow = new Window_LoadPoint(this.getLoadText())
        eli.scene().addChild(eli.scene()._autoLoadWindow);
    };
    
};

var $checkPoint = new Eli_CheckPointWindow();

/*==============================================================\\
                        CHECK POINT WINDOW                          
//==============================================================*/

class Window_CheckPoint extends Window_Base {

    constructor(x, y, width, height) {
        super(x, y, width, height);
    };

    initialize(autoText) {
        this._autoText = autoText;
        this.initBasicProperties();
        super.initialize(this._originX, this._originY, this._windowWidth, this._windowHeight);
        this.initOtherProperties();
        this.contentsOpacity
    };

    initBasicProperties(){
        this.initWindowSize();
        this.initOffsets();
        this.initOrigin();
        this.initTarget();
    };

    initWindowSize(){
        this._windowWidth = this.windowWidth();
        this._windowHeight = this.windowHeight();
    };

    initOffsets(){
        this._offsetX = this.offsetX();
        this._offsetY = this.offsetY();
    };

    initOrigin(){
        const pos = this.originPos();
        this._originX = pos.x;
        this._originY = pos.y;
    };

    initTarget(){
        this._targetX = this.targetX();
        this._targetY = this.targetY();
    };

    initOtherProperties(){
        const skin = Eli.CheckPointWindow.Param.skinFile;
        this.windowskin = ImageManager.loadSystem(skin);
        this.opacity = 0;
        this.contentsOpacity = 0;
        this.backOpacity = Eli.CheckPointWindow.Param.backOpacity
        this._showCount = 0;
        this._moveInDuration = 0;
        this._moveOutDuration = 0;
        this._fadeOutDuration = 0;
        this._fadeInDuration = 0;
    };

    contentsWidth() {
        return this.width;
    };

    contentsHeight() {
        return this.height;
    };

    standardFontFace(){
        return Eli.CheckPointWindow.Param.fontFace;
    };

    standardFontSize(){
        return Eli.CheckPointWindow.Param.fontSize;
    };

    updateTone(){
        // Don't need to set tone every frame. Will do it only when initialize
        // and open the window.
    };

    formatText(){
        const text = this._autoText;
        const result = text.join('\n');
        return result;
    };

    lineHeight(){
        return this.standardFontSize() + 8;
    };

    windowWidth(){
        const text = this._autoText;
        const fontSize = this.standardFontSize();
        const stPad = this.standardPadding();
        const txtPad = this.textPadding();
        let maxWidth = 0;
        for(let i = 0, l = text.length; i < l; i++){
            const currentWidth = eli.getTextWidth(text[i], fontSize, stPad, txtPad);
            maxWidth = currentWidth > maxWidth ? currentWidth : maxWidth;
        }
        return maxWidth + 8;
    };

    windowHeight(){
        const text = this._autoText;
        return this.fittingHeight(text.length);
    };

    offsetX(){
        const offsetX = Eli.CheckPointWindow.Param.offsetX;
        const options = {
            OutScreen_Left: this._windowWidth - (this._windowWidth*2),
            OutScreen_Right: Graphics.width + this._windowWidth
        }
        const options2 = +offsetX;
            return options[offsetX] || options2 || 0;
    };

    offsetY(){
        const offsetY = Eli.CheckPointWindow.Param.offsetY;
        const options = {
            OutScreen_Up: this._windowHeight - (this._windowHeight*2),
            OutScreen_Down: Graphics.height + this._windowHeight
        }
        const options2 = +offsetY;
            return options[offsetY] || options2 || 0;
    };

    originPos(){
        const preset = Eli.CheckPointWindow.Param.preset;
        const custom = {x: Eli.CheckPointWindow.Param.customX, y: Eli.CheckPointWindow.Param.customY};
        const w = this._windowWidth
        const h = this._windowHeight;
        const pos = eli.presetPos(w, h, custom.x, custom.y, preset);
        return {x: pos.x, y: pos.y};
    }

    targetX(){
        const targetX = Eli.CheckPointWindow.Param.targetX;
        const options = {
            EndOfScreen: Graphics.width - this._windowWidth,
            None: this._originX,
        }
        const options2 = +targetX;
            return options[targetX] || options2 || 0;
    };

    targetY(){
        const targetY = Eli.CheckPointWindow.Param.targetY;
        const options = {
            EndOfScreen: Graphics.height - this._windowHeight,
            None: this._originY,
        }
        const options2 = +targetY;
            return options[targetY] || options2 || 0;
    };

    open(){
        this.refresh();
        this._showCount = Eli.CheckPointWindow.Param.showCount;
        this._moveInDuration = Eli.CheckPointWindow.Param.moveInSpeed;
        this._fadeInDuration = Eli.CheckPointWindow.Param.fadeInSpeed;
        this._moveOutDuration = Eli.CheckPointWindow.Param.moveOutSpeed;
        this._fadeOutDuration = Eli.CheckPointWindow.Param.fadeOutSpeed;
    };

    resetFlag(){
        //to be overwrite by the other windows.
    };

    refresh(){
        this.contents.clear();
        const tone = Eli.CheckPointWindow.Param.tone.split(",");
        const text = this.formatText();
        this.setTone(+tone[0], +tone[1], +tone[2]);
        this.drawBackground(0, 0, this._windowWidth, this._windowHeight);
        this.drawTextEx(text, this.textPadding(), 0);
    };

    drawBackground(x, y, width, height) {
        if(!Eli.CheckPointWindow.Param.background) return;
        const color1 = this.dimColor1();
        const color2 = this.dimColor2();
        this.contents.gradientFillRect(x, y, width / 2, height, color2, color1);
        this.contents.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
    };

    dimColor1() {
        return Eli.CheckPointWindow.Param.dimColor1;
    };

    dimColor2() {
        return Eli.CheckPointWindow.Param.dimColor2;
    };

    resetPosition(){
        this.x = this._originX;
        this.y = this._originY;
    };

    update() {
        super.update();
        if(this.endAnimation()){
            this.resetFlag();
        }
        this.updateMoveIn();
        this.updateFadeIn();
        this.updateShowCount();
        this.updateMoveOut();
        this.updateFadeOut();
    };

    updateMoveIn() {
        if (this._moveInDuration > 0) {
            const d = this._moveInDuration;
            this.x = (this.x * (d - 1) + this._targetX) / d;
            this.y = (this.y * (d - 1) + this._targetY) / d;
            this._moveInDuration--;
        }
    };

    updateFadeIn() {
        if (this._fadeInDuration > 0) {
            const d = this._fadeInDuration;
            this.contentsOpacity = (this.contentsOpacity * (d - 1) + 255) / d;
            if(Eli.CheckPointWindow.Param.skin) this.opacity = (this.opacity * (d - 1) + 255) / d;
            this._fadeInDuration--;
        }
    };

    updateShowCount() {
        if(this.x === this._targetX && this.y === this._targetY && this._showCount > 0){
            this._showCount--
        };
    };

    updateMoveOut() {
        if (this._moveOutDuration > 0 && this._showCount <= 0) {
            const d = this._moveOutDuration;
            this.x = (this.x * (d - 1) + this._originX) / d;
            this.y = (this.y * (d - 1) + this._originY) / d;
            this._moveOutDuration--;
        }
    };

    updateFadeOut() {
        if (this._fadeOutDuration > 0 && this._showCount <= 0) {
            const d = this._fadeOutDuration;
            this.contentsOpacity = (this.contentsOpacity * (d - 1)) / d;
            if(Eli.CheckPointWindow.Param.skin) this.opacity = (this.opacity * (d - 1)) / d;
            this._fadeOutDuration--;
        }
    };

    endAnimation() {
        return this._showCount <= 0 && this._fadeInDuration <= 0 && this._fadeOutDuration <= 0 && this._moveInDuration <= 0 && this._moveOutDuration <= 0;
    };

};

/*==============================================================\\
                        SAVE POINT WINDOW                          
//==============================================================*/

class Window_SavePoint extends Window_CheckPoint {

    constructor(x, y, width, height) {
        super(x, y, width, height)
    };

    update() {
        this.visible = !$checkPoint.canLoad();
        if(!$checkPoint.canSave()) return;
        super.update();
    };

    open() {
        this._autoText = $checkPoint.getSaveText();   
        $checkPoint.gameEli().canSave = true;
        super.open();
    };

    resetFlag() {
        $checkPoint.gameEli().canSave = false;
    };

};

/*==============================================================\\
                        LOAD POINT WINDOW                          
//==============================================================*/

class Window_LoadPoint extends Window_CheckPoint{

    constructor(x, y, width, height) {
        super(x, y, width, height)
    };

    initialize(autoText) {
        super.initialize(autoText);
        if($gameTemp._loaded) this.open();
    };

    update() {
        if(!$checkPoint.canLoad()) return;
        super.update();
    };

    open() {
        this._autoText = $checkPoint.getLoadText();
        $checkPoint.gameEli().canLoad = true;
        super.open();
    };

    resetFlag() {
        $checkPoint.gameEli().canLoad = false;
    };

};

/*==============================================================\\
                        SAVE PARAMETERS                          
//==============================================================*/

Eli.CheckPointWindow.Game_Eli_initialize = Game_Eli.prototype.initialize;
Game_Eli.prototype.initialize = function(){
	Eli.CheckPointWindow.Game_Eli_initialize.call(this);
	this.contents.checkPointWindow = this.checkPointWindowParameters();
};

Game_Eli.prototype.checkPointWindowParameters = function(){
    const saveParams = {
        saveText: [...Eli.CheckPointWindow.Param.saveText],
        loadText: [...Eli.CheckPointWindow.Param.loadText],
        canSave: false,
        canLoad: false
    }
	return saveParams;
};

Game_Eli.prototype.checkPointWindow = function(){
	return this.contents.checkPointWindow;
};

/*==============================================================\\
                            SCENES                          
//==============================================================*/

Eli.CheckPointWindow.Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
Scene_Map.prototype.createDisplayObjects = function() {
    Eli.CheckPointWindow.Scene_Map_createDisplayObjects.call(this);
    this.createCheckPointWindows();
};

Scene_Map.prototype.createCheckPointWindows = function() {
    this._autoSaveWindow = new Window_SavePoint($checkPoint.getSaveText());
    this._autoLoadWindow = new Window_LoadPoint($checkPoint.getLoadText());
    this.addChild(this._autoSaveWindow);
    this.addChild(this._autoLoadWindow);
};