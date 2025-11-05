---
title: Crafting
layout: libdoc_page.liquid
permalink: mechanics/crafting/index.html
date: false
tags:
  - crafting
  - mechanics
eleventyNavigation:
  key: Crafting
  parent: Mechanics
  title: Crafting
  order: 10
---

## Crafting

There are four phases of crafting.

- **Harvesting** -- the act of gathering the necessary materials to craft an item.
- **Crafting** -- the act of manufacturing the item with the materials acquired. Crafting cannot typically be done out in the field and requires specialized equipment. The exception to the rule is crafting consumables.
- **Augmenting** -- the act of changing or enhancing an existing item with new materials acquired. Augmenting cannot typically be done out in the field and requires specialized equipment. Most items can be augmented, the exception to the rule is consumables.
- **Salvaging** -- the act of destroying a magical item in order to salvage its properties. Salvaging cannot typically be done out in the field and requires specialized equipment. Most items can be salvaged, the exception to the rule is consumables.

## Harvesting

To Harvest raw materials roll a harvest check against the DC of the creature or resource being harvested (Level \* 3) on the first item to be harvested. If the resource was not destroyed in a failed attempt, you may try again. For each subsequent try or item on the harvest list the harvesting task is hindered by two.

| d20          | Result       | Details                                                              |
| ------------ | ------------ | -------------------------------------------------------------------- |
| 1            | Fail, and    | You failed to harvest the item and destroyed the resource            |
| 2 to DC-6    | Fail, but    | You failed to harvest the item but the node is intact                |
| DC-5 to DC-1 | Success, but | Successfully harvested the item but the item level is lowered by one |
| DC to DC+4   | Success      | Successfully harvested the item of equal level to the source         |
| DC+5 +       | Success, and | Successfully harvested the item and the level is raised by one       |

### Essence

Essence can be harvest from any creature. The essence of a creature is some magical property in which that creature possessed or was capable of in life.

The essence can be extracted instead of a part if you wish to augment this ability onto an existing item without altering the physical form of the item.

### Creature Parts

> The party has just killed a dragon, and they want to harvest the breath sac, scales and the essence. The dragon was Level 5.
>
> They must roll against a DC of 15 for the breath sac.
> 1d20: [13] = 13 → failed breath sac harvest
>
> If they were to try again the task would be a level 7 which is a DC of 21 and impossible without any tags applied to ease the task.

| Type        | Example Parts                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Humanoid    | eye, blood, bone, egg, teeth, heart, liver, brain, skin                                                                                                                                     |
| Animal      | eye, flesh, hair, blood, antler, beak, bone, egg, fat, fin, horn, pincer, claws, teeth, talon, tusk, heart, liver, poison gland, feathers, scales, stinger, tentacle, pelt                  |
| Automation  | oil, plating, stone, gears, brain, instructions, lifespark                                                                                                                                  |
| Mechanical  | oil, plating, stone, gears, brain, instructions, lifespark                                                                                                                                  |
| Ghost       | ethereal ichor                                                                                                                                                                              |
| Undead      | eye, bone, congealed blood, marrow, teeth, rancid fat, ethereal ichor, undying flesh, undying heart                                                                                         |
| Draconic    | eye, flesh, blood, bone, egg, fat, claws, teeth, horn, liver, scales, heart, breath sac                                                                                                     |
| Ooze/Slime  | acid, mucus, vesicle, membrane                                                                                                                                                              |
| Insect      | antenna, eye, flesh, hair, blood, antler, beak, bone, egg, fat, fin, horn, pincer, claws, teeth, talon, tusk, heart, liver, poison gland, feathers, scales, stinger, tentacle, chitin, pelt |
| Plant       | sap, tuber, roots, wax, hyphae, leaves, seeds, poison gland, pollen, spores, bark, membrane                                                                                                 |
| Chimera     | antenna, eye, flesh, hair, blood, antler, beak, bone, egg, fat, fin, horn, pincer, claws, teeth, talon, tusk, heart, liver, poison gland, feathers, scales, stinger, tentacle, chitin, pelt |
| Golem       | blood, oil, flesh, plating, stone, bone, heart, liver, gears, brain, instructions, lifespark                                                                                                |
| Fiend       | eye, flesh, hair, blood, dust, beak, bone, horn, claws, teeth, heart, fat, liver, poison gland, scales, brain, skin, soul                                                                   |
| Elemental   | eye, primordial dust, bone, volatile mote, core                                                                                                                                             |
| Fey         | antenna, eye, flesh, hair, blood, antler, beak, bone, egg, horn, claws, teeth, talon, tusk, heart, fat , liver, poison gland, feathers, scales, tentacle, tongue, brain, skin, pelt, psyche |
| Shadow      | ethereal ichor, eye, primordial dust, bone, volatile mote, core                                                                                                                             |
| Alien       | antenna, eye, flesh, blood, bone, egg , fat, claws, teeth, tentacle, heart , mucus, liver, stinger, brain, chitin, hide, main eye                                                           |
| Celestial   | eye, flesh, hair, blood, dust, beak, bone, horn, claws, teeth, heart, fat, liver, feathers, poison gland, scales, brain, skin, soul                                                         |
| Giant       | flesh, hair, nail, blood, bone, fat, tooth, heart, liver, skin<br>                                                                                                                          |
| Monstrosity | antenna, eye, flesh, hair, blood, antler, beak, bone, egg, fat, fin, horn, pincer, claws, teeth, talon, tusk, heart, liver, poison gland, feathers, scales, stinger, tentacle, chitin, pelt |

## Crafting

Crafting takes some imagination from the player as there is no real set recipe system for crafting gear. The player decides what the item should do based on the creature (or creatures) the base item came from. If you are playing with a party, the party should agree that it is a viable idea.

To craft an item. You must roll a crafting check against the base items level plus one (DC = (Level + 1) \* 3). If you failed the check you may try again hindering the task by 2 for each new attempt.

| d20          | Result       | Details                                                                       |
| ------------ | ------------ | ----------------------------------------------------------------------------- |
| 1            | Fail, and    | You failed to craft the item and you lose the materials                       |
| 2 to DC-6    | Fail, but    | You failed to craft the item but you didn't lose any materials in the process |
| DC-5 to DC-1 | Success, but | Successfully crafted the item but it doesn't do exactly what you wanted       |
| DC to DC+4   | Success      | Successfully crafted the item and it does what you intended                   |
| DC+5 +       | Success, and | Successfully crafted the item better than expected                            |

On a successful crafting check create an item sentence. The newly crafted item is Level 1 and if purchased in a story has a starting Cost of 3.

{% sentence 'Armor', '[Name] is a [descriptor] [material] [armor type] that [does something special].', 'shield' %}

{% sentence 'Item', '[Name] is a [descriptor] [item type] that [does something special].', 'loot' %}

{% sentence 'Weapon', '[Name] is a [descriptor] [material] [weapon type] that does [damage type] damage and [something special].', 'sword' %}

{% sentence 'Trap', '[Name] is a [descriptor] [trap type] that [trigger condition] and [effect or consequence].', 'danger' %}

{% sentence 'Consumable', '[Name] is a [descriptor] [consumable type] that [effect on consumption] and [any special property or twist].', 'potion' %}

## Augmenting

Augmenting is much like crafting, except you are changing the properties of your already crafted item with new and/or different features.

Modify your item sentence.

To augment an item. You must roll a augment check against the items level plus two (DC = (Level + 2) \* 3). If you failed the check you may try again hindering the task by 2 for each new attempt.

| d20          | Result       | Details                                                                         |
| ------------ | ------------ | ------------------------------------------------------------------------------- |
| 1            | Fail, and    | You failed to augment the item and you lose the raw material.                   |
| 2 to DC-6    | Fail, but    | You failed to augment the item but you didn't lose any materials in the process |
| DC-5 to DC-1 | Success, but | Successfully augmented the item but it doesn't do exactly what you wanted       |
| DC to DC+4   | Success      | Successfully augmented the item and it does what you intended                   |
| DC+5 +       | Success, and | Successfully augmented the item better than expected                            |

On a successful augmenting check add an additional tag to the item. Augmenting an item increases its level by 1 and every 3rd level increases the base cost by 1.

An item can have up to 9 augmentations

## Salvaging

To salvage an item. You must roll salvaging check against the items level. If you failed the check you may try again hindering the task by 2 for each new attempt.

| d20          | Result       | Details                                                     |
| ------------ | ------------ | ----------------------------------------------------------- |
| 1            | Fail, and    | You failed to salvage the item and destroyed it             |
| 2 to DC-6    | Fail, but    | You failed to salvage the item but it was not damaged       |
| DC-5 to DC-1 | Success, but | Successfully salvaged the item but the property is dimished |
| DC to DC+4   | Success      | Successfully salvaged the item with the intended property   |
| DC+5 +       | Success, and | Successfully salvaged the item with two properties          |

On a successful salvaging decide what property was salvaged from the item. This property may be applied to an existing item with a Level 5 Augmenting task.
