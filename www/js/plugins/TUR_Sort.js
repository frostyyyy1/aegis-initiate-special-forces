//=============================================================================
// Item and Skill Sort
// TUR_Sort.js
//=============================================================================

window.Imported = window.Imported || {};
Imported.TUR_Sort = true;

window.TUR = window.TUR || {};
TUR.Sort = TUR.Sort || {};
TUR.Sort.version = 1.1;

/*:
 * @plugindesc Provide options for sorting the list of skills and items.
 * @author ATT_Turan
 * @url https://forums.rpgmakerweb.com/index.php?threads/turans-christmas-calendar-day-1.164137/
 * @version 1.1
 * @target MZ
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The default order that skills and items are displayed in battle is according
 * to their database ID. It is often inconvenient for the user to rearrange the
 * database, so this plugin provides some options for sorting those lists.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Skill and Item notetag
 * <priority:x>
 *
 * x should be any integer value. The list will be arranged in order of
 * ascending priority. Any entries that do not have the priority notetag will
 * be at the bottom of the list in the order determined by their plugin
 * parameter.
 *
 * ============================================================================
 * Notes
 * ============================================================================
 * 
 * Choosing to sort skills by level may result in unusual results for some
 * games. It can only reference the class the actor is currently in, so if a
 * class change system is used, skills may change their order depending on the
 * current class.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.1:
 * - Added sorting skills by combined MP+TP cost
 *
 * Version 1.0:
 * - Release version
 *
 * @param ItemSorting
 * @type select
 * @option default
 * @option alphabetical
 * @option cost
 * @desc The sort order used for items.
 * @default default
 *
 * @param SkillSorting
 * @type select
 * @option default
 * @option alphabetical
 * @option level
 * @option cost
 * @default default
 *
 */

TUR.SortParams = PluginManager.parameters('TUR_Sort');

Window_ItemList.prototype.makeItemList = function() {
    this._data = $gameParty.allItems().filter(function(item) {
        return this.includes(item);
    }, this);

    this._data.sort((a, b) =>
    {
        let priorityA=null, priorityB=null, aId, bId;
		
		if (Imported.YEP_ItemCore && DataManager.isIndependent(a))
		{
			aId = a.baseItemId;
			bId = b.baseItemId;
		}
		else
		{
			aId = a.id;
			bId = b.id;
		}

        if (a.etypeId == undefined)
            priorityA = $dataItems[aId].meta.priority;
        else if (a.etypeId == 0)
            priorityA = $dataWeapons[aId].meta.priority;
        else
            priorityA = $dataWeapons[aId].meta.priority;
        
        if (b.etypeId == undefined)
            priorityB = $dataItems[bId].meta.priority;
        else if (b.etypeId == 0)
            priorityB = $dataWeapons[bId].meta.priority;
        else
            priorityB = $dataWeapons[bId].meta.priority;
        
        if (priorityA && priorityB)
            return priorityA - priorityB;
        else if (priorityA)
            return -1;
        else if (priorityB)
            return 1;
		else
		{
			switch (TUR.SortParams.ItemSorting)
			{
				case "default":
					return 0;
				case "alphabetical":
					return a.name.localeCompare(b.name);
				case "cost":
					return a.price - b.price;
			}
		}
        return 0;
    });

    if (this.includes(null)) {
        this._data.push(null);
    }
};

Window_SkillList.prototype.makeItemList = function() 
{
    if (this._actor) 
    {
        this._data = this._actor.skills().filter(function(item) {return this.includes(item);}, this);
        this._data.sort((a, b) =>
        {
            if (a.meta.priority && b.meta.priority)
                return a.meta.priority - b.meta.priority;
            else if (a.meta.priority)
                return -1;
            else if (b.meta.priority)
                return 1;
			else
			{
				switch (TUR.SortParams.SkillSorting)
				{
					case "default":
						return 0;
					case "alphabetical":
						return a.name.localeCompare(b.name);
					case "level":
						let aLevel = this._actor.currentClass().learnings.indexOf(a.id);
						aLevel = aLevel == -1 ? this._actor.maxLevel() + a.id : aLevel;
						let bLevel = this._actor.currentClass().learnings.indexOf(b.id);
						bLevel = bLevel == -1 ? this._actor.maxLevel() + b.id : bLevel;
						return aLevel - bLevel;
					case "cost":
						return (a.mpCost + a.tpCost) - (b.mpCost + b.tpCost);
				}
			}
            return 0;
        });
    } 
    else 
        this._data = [];
};