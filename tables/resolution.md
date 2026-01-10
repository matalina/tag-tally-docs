---
title: Resolution

permalink: tables/resolution/index.html
date: false
tags:
  - resolution
  - tables
eleventyNavigation:
  key: Resolution
  parent: Tables
  title: Resolution
---

## Cheat Sheet

| Level        | 1     | 2     | 3     | 4      | 5      | Result       |
| ------------ | ----- | ----- | ----- | ------ | ------ | ------------ |
| **DC**       | **3** | **6** | **9** | **12** | **15** | --           |
| 1            | 1     | 1     | 1     | 1      | 1      | Fail, and    |
| 2 to DC-6    | 2     | 2     | 2-3   | 2-6    | 2-9    | Fail, but    |
| DC-5 to DC-1 | -     | 3-5   | 4-8   | 7-11   | 10-14  | Success, but |
| DC to DC+4   | 3-7   | 6-10  | 9-13  | 12-16  | 15-19  | Success      |
| DC+5 +       | 8+    | 11+   | 14+   | 17+    | 20+    | Success, and |

| Level        | 6      | 7      | 8      | 9      | 10     | Result       |
| ------------ | ------ | ------ | ------ | ------ | ------ | ------------ |
| **DC**       | **18** | **21** | **24** | **27** | **30** | --           |
| 1            | 1      | 1      | 1      | 1      | 1      | Fail, and    |
| 2 to DC-6    | 2-12   | 2-15   | 2-18   | 2-21   | 2-24   | Fail, but    |
| DC-5 to DC-1 | 13-17  | 16-20  | 19-23  | 22-26  | 25-29  | Success, but |
| DC to DC+4   | 18-22  | 21-25  | 24-28  | 27-31  | 30-34  | Success      |
| DC+5 +       | 23+    | 26+    | 29+    | 32+    | 35+    | Success, and |

# Special Resolution Tables

## Oracle Table

The oracle table is a specialized Level 5 Check with a DC of 15. Ask a Yes or No question and use the following results to inform your game. This roll can be eased by 1 when more likely to happen or hindered by 1 if less likely to happen. This roll cannot be modified by any tags except more or less likely.

| Less  | 50/50 | More  | Result   | Details                          |
| ----- | ----- | ----- | -------- | -------------------------------- |
| 1     | 1     | 1     | No, and  | No, and things are worse         |
| 2-12  | 2-9   | 2-6   | No, but  | No, but there is a positive      |
| 13-17 | 10-14 | 7-16  | Yes, but | Yes, but not exactly as expected |
| 18-20 | 15-19 | 12-17 | Yes      | Yes                              |
| --    | 20    | 18+   | Yes, and | Yes, and things are better       |

## Spellcasting Table

| d20          | Result       | Details                                                                         |
| ------------ | ------------ | ------------------------------------------------------------------------------- |
| 1            | Fail, and    | Fail, and Roll on the [[004-Spellcasting#Mishaps\|Mishap]] table                |
| 2 to DC-6    | Fail, but    | The spell fails, but nothing backfires or goes wrong                            |
| DC-5 to DC-1 | Success, but | Success, but it backfires and hinders all rolls until the end of your next turn |
| DC to DC+4   | Success      | The spell goes off exactly as you expected                                      |
| DC+5 +       | Success, and | Successfully cast the spell and earn the tag of Mastery for that spell.         |

## Momentum (Combat) Table

| d20          | Result       | Player Attack | Player Defense                 |
| ------------ | ------------ | ------------- | ------------------------------ |
| 1            | Fail, and    | 0             | -2 momentum/+2 enemy succeses  |
| 2 to DC-6    | Fail, but    | 0             | -1 momentum/+1 enemy successes |
| DC-5 to DC-1 | Success, but | 0             | -1 momentum/+0 enemy successes |
| DC to DC+4   | Success      | +1 momentum   | 0                              |
| DC+5 +       | Success, and | +2 momentum   | 0                              |

## NPC Interactions Table

| d20          | Result       | Details                                                    |
| ------------ | ------------ | ---------------------------------------------------------- |
| 1            | Fail, and    | Fail, decrease the NPCs default disposition by one step    |
| 2 to DC-6    | Fail, but    | Fail, but their attitude changes towards you in your favor |
| DC-5 to DC-1 | Success, but | Success, but their attitude changes against your favor     |
| DC to DC+4   | Success      | Success                                                    |
| DC+5 +       | Success, and | Success, increase the NPCs default disposition by one step |

## Debt Collectors Table

| d20          | Result       | Details                                                                                                                                                   |
| ------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1            | Fail, and    | Collectors come knocking and they come looking for blood (Combat encounter)                                                                               |
| 2 to DC-6    | Fail, but    | Collectors come knocking but are understanding                                                                                                            |
| DC-5 to DC-1 | Success, but | Collectors offer an alternative payment method -- do this for me, and I'll let you off (Negotiations)                                                     |
| DC to DC+4   | Success      | --                                                                                                                                                        |
| DC+5 +       | Success, and | Collectors are feeling generous. Instead of hindered by two wealth check, hinder your check at the end of the session by 1 to see if you clear your debt. |

## Harvesting Table

| d20          | Result       | Details                                                              |
| ------------ | ------------ | -------------------------------------------------------------------- |
| 1            | Fail, and    | You failed to harvest the item and destroyed the resource            |
| 2 to DC-6    | Fail, but    | You failed to harvest the item but the node is intact                |
| DC-5 to DC-1 | Success, but | Successfully harvested the item but the item level is lowered by one |
| DC to DC+4   | Success      | Successfully harvested the item of equal level to the source         |
| DC+5 +       | Success, and | Successfully harvested the item and the level is raised by one       |

## Crafting Table

| d20          | Result       | Details                                                                       |
| ------------ | ------------ | ----------------------------------------------------------------------------- |
| 1            | Fail, and    | You failed to craft the item and you lose the materials                       |
| 2 to DC-6    | Fail, but    | You failed to craft the item but you didn't lose any materials in the process |
| DC-5 to DC-1 | Success, but | Successfully crafted the item but it doesn't do exactly what you wanted       |
| DC to DC+4   | Success      | Successfully crafted the item and it does what you intended                   |
| DC+5 +       | Success, and | Successfully crafted the item better than expected                            |

## Augmentation Table

| d20          | Result       | Details                                                                         |
| ------------ | ------------ | ------------------------------------------------------------------------------- |
| 1            | Fail, and    | You failed to augment the item and you lose the raw material.                   |
| 2 to DC-6    | Fail, but    | You failed to augment the item but you didn't lose any materials in the process |
| DC-5 to DC-1 | Success, but | Successfully augmented the item but it doesn't do exactly what you wanted       |
| DC to DC+4   | Success      | Successfully augmented the item and it does what you intended                   |
| DC+5 +       | Success, and | Successfully augmented the item better than expected                            |

## Salvaging Table

| d20          | Result       | Details                                                     |
| ------------ | ------------ | ----------------------------------------------------------- |
| 1            | Fail, and    | You failed to salvage the item and destroyed it             |
| 2 to DC-6    | Fail, but    | You failed to salvage the item but it was not damaged       |
| DC-5 to DC-1 | Success, but | Successfully salvaged the item but the property is dimished |
| DC to DC+4   | Success      | Successfully salvaged the item with the intended property   |
| DC+5 +       | Success, and | Successfully salvaged the item with two properties          |

## Navigation Table

This table is provided if you want to have navigation exploration situations in your game.

| d20          | Result       | Details                                                                             |
| ------------ | ------------ | ----------------------------------------------------------------------------------- |
| 1            | Fail, and    | You failed to navigate, and you are completely lost                                 |
| 2 to DC-6    | Fail, but    | You failed to navigate, but you've found a clue to point you in the right direction |
| DC-5 to DC-1 | Success, but | You successfully navigate, but you aren't sure you are going in the right direction |
| DC to DC+4   | Success      | You successfully navigate                                                           |
| DC+5 +       | Success, and | You successfully navigate and find proof you are heading in the right direction     |

## Secrets Table

| d20          | Result       | Details                                  |
| ------------ | ------------ | ---------------------------------------- |
| 1            | Fail, and    | You find find and trigger a trap.        |
| 2 to DC-6    | Fail, but    | You find a trap, but it is not triggered |
| DC-5 to DC-1 | Success, but | You find a secret but its trapped        |
| DC to DC+4   | Success      | You found a secret                       |
| DC+5 +       | Success, and | You found 2 secrets                      |
