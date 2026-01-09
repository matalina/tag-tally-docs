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

- **Harvesting** &mdash; the act of gathering the necessary materials to craft an item.
- **Crafting** &mdash; the act of manufacturing the item with the materials acquired. Crafting cannot typically be done out in the field and requires specialized equipment. The exception to the rule is crafting consumables.
- **Augmenting** &mdash; the act of changing or enhancing an existing item with new materials acquired. Augmenting cannot typically be done out in the field and requires specialized equipment. Most items can be augmented, the exception to the rule is consumables.
- **Salvaging** &mdash; the act of destroying a magical item in order to salvage its properties. Salvaging cannot typically be done out in the field and requires specialized equipment. Most items can be salvaged, the exception to the rule is consumables.

## Harvesting

{% sentence 'Resource', '[Name] is a [rarity] [descriptor] [plant] that [special].', 'scene' %}

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
> 1d20: \[13] = 13 → failed breath sac harvest
>
> If they were to try again the task would be a level 7 which is a DC of 21 and impossible without any tags applied to ease the task.

| Creature    | Essence                 | Common              | Uncommon        | Rare            | Legendary     |
| ----------- | ----------------------- | ------------------- | --------------- | --------------- | ------------- |
| Humanoid    | Mind                    | eye, bone           | blood           | heart           | brain         |
| Animal      | Life                    | flesh, blood        | horn            | heart           | gland         |
| Automation  | Space, Time             | gears, oil          | brain           | plating         | instructions  |
| Mechanical  | Time, Space             | gears, oil          | brain           | plating         | stone         |
| Ghost       | Death, Shadow           | ichor               | —               | —               | —             |
| Undead      | Death                   | bone, teeth         | congealed blood | undying flesh   | undying heart |
| Draconic    | Fire                    | scales, claw        | horn            | heart           | breath sac    |
| Ooze/Slime  | Water                   | mucus, membrane     | vesicle         | —               | acid          |
| Insect      | Earth, Sound            | chitin, eye         | pincer          | heart           | stinger       |
| Plant       | Life                    | leaves, roots       | seeds           | bark            | pollen        |
| Chimera     | Sound                   | flesh, claws        | hide            | horn            | Primale heart |
| Golem       | Earth                   | stone, plating      | gears           | heart           | lifespark     |
| Fiend       | Fire, Shadow            | flesh, claws        | horn            | heart           | soul          |
| Elemental   | Air, Earth, Water, Fire | eye, bone           | volatile mote   | primordial dust | core          |
| Fey         | Mind, Illusion          | hair, flesh         | horn            | heart           | psyche        |
| Shadow      | Shadow                  | ethereal ichor, eye | bone            | volatile mote   | core          |
| Alien       | Mind, Illusion          | flesh, eye          | tentacle        | heart           | main eye      |
| Celestial   | Light, Life             | flesh, eye          | horn            | heart           | soul          |
| Giant       | Earth                   | flesh, bone         | hide            | liver           | Titan heart   |
| Monstrosity | Fire, Space, Illusion   | flesh, claws        | horn            | heart           | Prime bone    |

#### Essence

**Air Essence** is a \[rare] \[whispering] \[creature part] that \[shimmers with invisible currents].

**Earth Essence** is a \[rare] \[dense] \[creature part] that \[feels immovably solid].

**Water Essence** is a \[rare] \[fluid] \[creature part] that \[ripples with shifting depth].

**Fire Essence** is a \[rare] \[burning] \[creature part] that \[glows with inner heat].

**Life Essence** is a \[rare] \[vital] \[creature part] that \[pulses with raw vitality].

**Death Essence** is a \[rare] \[cold] \[creature part] that \[saps warmth and vigor].

**Mind Essence** is a \[rare] \[intricate] \[creature part] that \[thrums with thought and awareness].

**Time Essence** is a \[rare] \[fluid] \[creature part] that \[shifts subtly out of sync].

**Space Essence** is a \[rare] \[distorting] \[creature part] that \[bends perception around it].

**Sound Essence** is a \[rare] \[vibrating] \[creature part] that \[echoes faintly in silence].

**Illusion Essence** is a \[rare] \[shimmering] \[creature part] that \[flickers between forms].

**Shadow Essence** is a \[rare] \[darkened] \[creature part] that \[absorbs nearby light].

**Light Essence** is a \[rare] \[luminous] \[creature part] that \[glows softly in darkness].

#### Organic

**Eye** is a \[common] \[keen] \[creature part] that \[captures light precisely].

**Bone** is a \[common] \[sturdy] \[creature part] that \[resists breaking under force].

**Flesh** is a \[common] \[supple] \[creature part] that \[stretches without tearing].

**Claw** is a \[common] \[hardened] \[creature part] that \[retains its sharpness].

**Horn** is a \[uncommon] \[dense] \[creature part] that \[can withstand heavy impact].

**Heart** is a \[rare] \[vital] \[creature part] that \[pulses with life energy].

**Brain** is a \[legendary] \[complex] \[creature part] that \[holds extraordinary instinct and memory].

**Hair** is a \[common] \[flexible] \[creature part] that \[shimmers in light].

**Teeth** is a \[common] \[hardened] \[creature part] that \[retains a sharp edge].

**Liver** is a \[uncommon] \[dense] \[creature part] that \[filters impurities efficiently].

**Hide** is a \[uncommon] \[tough] \[creature part] that \[resists cuts and abrasions].

**Pincer** is an \[uncommon] \[strong] \[creature part] that \[closes with great force].

**Stinger** is a \[rare] \[barbed] \[creature part] that \[retains venom after removal].

**Scales** is a \[rare] \[overlapping] \[creature part] that \[deflects impacts effectively].

#### Glands/Fluids

**Blood** is a \[common] \[vital] \[creature part] that \[pulses with life].

**Ichor** is a \[common] \[ethereal] \[creature part] that \[shimmers strangely].

**Acid** is an \[uncommon] \[corrosive] \[creature part] that \[bubbles subtly].

**Undying Heart** is a \[rare] \[resilient] \[creature part] that \[beats even in death].

**Congealed Blood** is an \[uncommon] \[thickened] \[creature part] that \[retains its form even when removed from the body].

**Undying Flesh** is a \[rare] \[resilient] \[creature part] that \[remains intact long after death].

**Gland** is a \[common] \[secretory] \[creature part] that \[produces subtle compounds].

**Mucus** is a \[common] \[slimy] \[creature par\*\*t] that \[sticks lightly to surfaces].

**Vesicle** is an \[uncommon] \[fragile] \[creature part] that \[swells under pressure].

**Breath Sac** is a \[rare] \[elastic] \[creature part] that \[expands and contracts smoothly].

#### Constructs

**Gears** is a \[common] \[precision] \[creature part] that \[moves smoothly under strain].

**Oil** is a \[common] \[viscous] \[creature part] that \[shines when light hits it].

**Plating** is an \[uncommon] \[reinforced] \[creature part] that \[resists wear and tear].

**Lifespark** is a \[rare] \[volatile] \[creature part] that \[flickers unpredictably].

**Instructions** is a \[legendary] \[coded] \[creature part] that \[contains intricate operational knowledge].

**Stone** is a \[rare] \[dense] \[creature part] that \[withstands heavy impact].

#### Magical

**Primal Heart** is a \[legendary] \[arcane] \[creature part] that \[thrums with raw magical energy].

**Volatile Mote** is an \[uncommon] \[flickering] \[creature part] that \[shifts unpredictably in energy].

**Primordial Dust** is an \[uncommon] \[ancient] \[creature part] that \[resonates with elemental forces].

**Core** is a \[rare] \[pulsing] \[creature part] that \[radiates concentrated essence].

**Ethereal Ichor** is a \[rare] \[luminous] \[creature part] that \[flows like liquid light].

**Psyche** is a \[legendary] \[complex] \[creature part] that \[contains consciousness beyond the physical].

**Main Eye** is a \[legendary] \[all-seeing] \[creature part] that \[perceives beyond normal sight].

**Primal Heart** is a \[legendary] \[arcane] \[creature part] that \[thrums with raw magical energy].

**Titan Heart** is a \[legendary] \[immense] \[creature part] that \[beats with unstoppable force].

**Prime Bone** is a \[legendary] \[dense] \[creature part] that \[stores the creature’s primal strength].

**Soul** is a \[legendary] \[ethereal] \[creature part] that \[lingers with undying presence]

#### Plants

**Leaves** is a \[common] \[veined] \[creature part] that \[rustles with a subtle life].

**Roots** is a \[common] \[fibrous] \[creature part] that \[clings firmly to surfaces].

**Bark** is an \[uncommon] \[toughened] \[creature part] that \[resists tearing and abrasion].

**Seeds** is a \[uncommon] \[resilient] \[creature part] that \[survives harsh conditions].

**Pollen** is a \[rare] \[dusty] \[creature part] that \[carries latent vitality].

### Resources

{% sentence 'Resource', '[Name] is a [rarity] [descriptor] [resourceType] that [special].', 'question' %}

| d6  | Resource Type | Used in               |
| --- | ------------- | --------------------- |
| 1   | Ore           | Armor, Weapons, Items |
| 2   | Wood          | Weapons, Traps, Items |
| 3   | Fiber         | Armor, Traps, Items   |
| 4   | Liquid        | Consumables           |
| 5   | Plants        | Consumables, Traps    |
| 6   | Roll again    | -                     |

| d4  | Rarity    |
| --- | --------- |
| 1   | Common    |
| 2   | Uncommon  |
| 3   | Rare      |
| 4   | Legendary |

#### Ore

##### Armor/Weapon Grade Ore

**Copper** is a \[common] \[conductive] \[ore] that \[is easy to shape].

**Iron** is a \[uncommon] \[resilient] \[ore] that \[holds an edge well].

**Mythril** is a \[rare] \[lightweight] \[ore] that \[is exceptionally strong].

**Adamantine** is a \[legendary] \[balanced] \[ore] that \[is nearly indestructible].

##### Precious Ore

**Silver** is a \[common] \[radiant] \[ore] that \[reflects hostile magic].

**Gold** is a \[uncommon] \[malleable] \[ore] that \[amplifies enchantments].

**Platinum** is a \[rare] \[immutable] \[ore] that \[anchors powerful magic].

**Aetherium** is a \[legendary] \[transcendent] \[ore] that \[stabilizes magic].

#### Wood

**Oak** is a \[common] \[sturdy] \[wood] that \[resists splintering].

**Pine** is a \[common] \[flexible] \[wood] that \[is easy to work].

**Ironwood** is a \[uncommon] \[dense] \[wood] that \[is as strong as metal].

**Heartwood** is a \[rare] \[vital] \[wood] that \[retains living essence].

**Elderwood** is a \[legendary] \[ancient] \[wood] that \[remembers].

#### Fiber

**Cotton** is a \[common] \[soft] \[fiber] that \[is easy to spin].

**Flax** is a \[common] \[durable] \[fiber] that \[that is strong].

**Spidersilk** is a \[uncommon] \[tensile] \[fiber] that \[is stronger than leather].

**Twineleafe** is a \[rare] \[flexible] \[fiber] that \[bends without breaking].

**Moonthread** is a \[legendary] \[luminous] \[fiber] that \[retains ambient magic].

#### Liquid

**Water** is a \[common] \[clear] \[liquid] that \[forms the basis of life].

**Alcohol** is a \[common] \[volatile] \[liquid] that \[burns easily].

**Acid** is a \[uncommon] \[corrosive] \[liquid] that \[reacts violently].

**Essence** is a \[rare] \[mystical] \[liquid] that \[holds latent magic].

**Aether** is a \[legendary] \[luminous] \[liquid] that \[channels raw magic].

#### Plants

##### Medicinal Herbs

**Wildflowers** are a \[common] \[soothing] \[plant] that \[eases minor aches].

**Herbs** are a \[common] \[refreshing] \[plant] that \[revitalizes the senses].

**Rootstock** is a \[uncommon] \[calming] \[plant] that \[promotes mental clarity].

**Silverleaf** is a \[rare] \[restorative] \[plant] that \[accelerates healing].

**Lifebloom** is a \[legendary] \[vital] \[plant] that \[heals grievous wounds].

##### Poisonous Plants

**Berries** are a \[common] \[toxic] \[plant] that \[cause mild illness].

**Nightshade** is a \[common] \[venoumous] \[plant] that \[induces weakness].

**Hemlock** is a \[uncommon] \[potent] \[plant] that \[causes hallucinations].

**Deathbloom** is a \[rare] \[deadly] \[plant] that \[can kill swiftly].

**Soulvine** is a \[legendary] \[cursed] \[plant] that \[drains vitality].

##### Magical Properties

**Fungi** are a \[common] \[mystical] \[plant] that \[enhances minor spells].

**Wyrdroot** is a \[common] \[enchanted] \[plant] that \[amplifies spellcasting].

**Mistbark** is a \[uncommon] \[elemental] \[plant] that \[enhances the elements].

**Heartbloom** is a \[rare] \[arcane] \[plant] that \[stores ambient magic].

**Aetherstem** is a \[legendary] \[ethereal] \[plant] that \[channels latent currents].

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
