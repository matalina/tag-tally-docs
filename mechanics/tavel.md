---
title: Travel
layout: libdoc_page.liquid
permalink: mechanics/travel/index.html
date: false
tags:
  - travel
  - mechanics
eleventyNavigation:
  key: Travel
  parent: Mechanics
  title: Travel
  order: 11
---

## Travel

There are three types of travel that can be used in Tag & Tally.

- Wilderness
- Urban
- Dungeon

The number of Points is limited.

| Pace           | Slow | Normal | Fast |
| -------------- | ---- | ------ | ---- |
| Wilderness     | 4    | 5      | 6    |
| Urban          | --   | 4      | 5    |
| With Transport | +1   | +2     | +3   |
| Dungeon        | --   | 10     | --   |

- Slow Travel allows scouting, foraging and hunting during Wilderness Travel.
- Fast Travel adds the Exhaustion condition tag for the Next Day on every Scene.
- Transportation cannot be used inside a dungeon
- Wilderness travel is based on costs of the terrain you are entering before needing to rest either in a safe zone or in camp.
- Urban travel is the number of point that can be completed in a given day before needing to return home to rest.
- Dungeon travel is the number of rooms in a regular sized dungeon that can be encountered before needing to rest.

## Map Setup

Define the type of map you want to use. We will be using a 7x7 square tile map. But the method for set up is the same but the numbers will change.

### Urban

| Abbr | District Types        | Number of Tiles |
| ---- | --------------------- | --------------- |
| HC   | High Class            | 2               |
| F    | Financial             | 2               |
| MC   | Middle Class          | 4               |
| S    | Slums                 | 8               |
| P    | Park                  | 1               |
| MP   | Medical Park          | 2               |
| C    | Commercial            | 5               |
| D    | Downtown              | 1               |
| G    | Government            | 1               |
| U    | University            | 1               |
| E    | Entertainment         | 7               |
| T    | Tech                  | 4               |
| W    | Warehouse             | 4               |
| I    | Industrial            | 7               |
| SS   | Public Transportation | -               |
| H    | Home                  | -               |
| O    | Office/HQ/Work        | -               |

## Wilderness

| Card Type         | 5x6 Cards  | 7x7 Tiles |
| ----------------- | ---------- | --------- |
| Forest            | 6          | 11        |
| Plains            | 6          | 11        |
| Mountain          | 5          | 9         |
| Swamp             | 4          | 7         |
| Island            | 3          | 7         |
| Wild Cards        | 3 (random) | 3         |
| Dungeon           | 1 (random) | 1         |
| Portal            | -          | -         |
| Home              | -          | -         |
| Guild/Home/Castle | -          | -         |

## Wilderness & Urban

| Terrain Difficult | Movement Rules                                                                                                                                                               |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Easy              | Costs 1 point/card                                                                                                                                                           |
| Rough             | Costs 2 points/cards                                                                                                                                                         |
| Dangerous         | Costs 3 points/cards                                                                                                                                                         |
| Wild Card         | Variable; follows drawn terrain type or unique rule                                                                                                                          |
| Dungeon           | Stops movement for the day (if entered) Note: In a Carta Style game, you may opt to go back into the card you came from with no additional cost without starting the dungeon |

When traveling into a point/card/tile use the following procedure.

1. Draw Terrain for each of the empty adjacent points.
2. Roll 1d4+2 to determine the level of the scene. (Anything without a level will use this as their level).
3. Roll for weather.
4. Roll for a Point of Interest Type.
5. Resolve the situation created.
6. If you have more travel left in the day go to another point/card and start back at #1.
7. If you do not have more to travel, you must [[#Rest Procedure|rest]].
8. After resolving the Rest start over at #1.

## Dungeon

Setup a Dungeon:

- Generate a dungeon name and theme
- Generate Objective
- Roll a scene status
- Generate the number of rooms by rolling 1d6+4 (5-10).
  - The first room always has an entrance and 3 open exits and does not count against your number of rooms.
  - Hidden rooms do not count against the number of rooms.
  - The object room does not count against the number of rooms.
- After rolling the last room roll again to create the final room and your objective.

1. Choose 2 different colored d6. One to be the X axis , the second to be Y axis.
2. Roll the 2d6 and draw a room with those dimensions and an open exit on each side.
3. There is nothing in this starter room and does not count against the number of rooms to the dungeon
4. Pick an exit and roll 2d6, then draw the next room.
5. Roll number of exits for the room 1d4-1.
6. Roll for contents and resolve the encounter.
7. If there are rooms left in the total count go to #4
8. If there are no rooms left choose any remaining exit that is not opened and create a 5x5 room with a L5 Dungeon Boss.
9. After defeating the Boss you may open any remaining door and explore the contents of another singular room but do not add any exits to the room. You will find your objective in this final room.

| d20          | Result       | Details                                  |
| ------------ | ------------ | ---------------------------------------- |
| 1            | Fail, and    | You find find and trigger a trap.        |
| 2 to DC-6    | Fail, but    | You find a trap, but it is not triggered |
| DC-5 to DC-1 | Success, but | You find a secret but its trapped        |
| DC to DC+4   | Success      | You found a secret                       |
| DC+5 +       | Success, and | You found 2 secrets                      |

# Rest Procedure

A rest consists of a number of rounds equal to 1 plus the number of players. If you are out in the wilderness we highly advise that each character takes a watch as a downtime activity.

1. Each party member can choose to do 2 downtime activities and get a full nights rest barring any interruptions. (In the wilderness, one downtime activity should be a watch).
2. Determine how many times to roll for a random encounter using the following equation.
   \# of rounds - \# of players

   This should be at least 1, but if a player does not take a watch you may have more possibility of rolling an encounter.

3. Roll on the appropriate Rest encounter table to determine what happens.
4. If you are tracking resources, reduce your rations and water by one.

| 2d6   | Wilderness Rest            | Safe Zone                |
| ----- | -------------------------- | ------------------------ |
| 1-5   | Nothing                    | Roll Safe Zone Encounter |
| 6-10  | Roll Travel Type Encounter | Nothing                  |
| 11-12 | Roll on Discovery Table    | Roll on Discovery Table  |
