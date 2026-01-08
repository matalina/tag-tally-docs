---
title: Resolution
layout: libdoc_page.liquid
permalink: mechanics/resolution/index.html
date: false
tags:
  - resolution
  - mechanics
eleventyNavigation:
  key: Resolution
  parent: Mechanics
  title: Resolution
  order: 2
---
## Basic Resolution

Tags & Tally has a fail forward resolution mechanic.

Everything in the game has a level between 0 and 10. A conflict, interaction, or task that has the possibility of changing the story should roll against a target DC. The DC of anything in the game is three times its level.

> DC = 3 \* level

The player always rolls `1d20` against this DC and uses the table below to determine the outcome. The Level may be modified by tags, easing or hindering the level of the task to be used as the target DC.

| d20          | Result       | Details                              |
| ------------ | ------------ | ------------------------------------ |
| 1            | Fail, and    | Fail, and things are worse           |
| 2 to DC-6    | Fail, but    | Fail, but something else helps you   |
| DC-5 to DC-1 | Success, but | Success, but not exactly as expected |
| DC to DC+4   | Success      | Exactly as you expected              |
| DC+5 +       | Success, and | Success, and things are better       |

### Player vs Player Resolution

When a contested roll against two players characters happens both a d20 and add +1 (or the Tiered modifier) for any tag that eases the roll, add -1 (or the Tiered modifier) for any tag that hinders the roll. The player who initiates the conflict is Player A and the other is Player B, using Player A's Total - Player B's Total use the following Resolution table to determine the outcome of the conflict.

| (Player A total - Player B total) | Outcome for Player A    |
| --------------------------------- | ----------------------- |
| ≤ -5                              | Fail, and               |
| -4 to -1                          | Fail, but               |
| 0                                 | Success, but (tie case) |
| 1 to 4                            | Success                 |
| ≥ 5                               | Success, and            |

## Modifying the Difficulty

The situation and your character tags can modify the target difficulty. This is done by either easing the difficulty or hindering the difficulty.

**Easing:** Easing the difficulty means that you lower the level of the task being preformed.

**Hindering:** Hindering the difficulty means that you raise the level of the task being preformed.

Remember that the target number (DC) to hit is 3 times the level, so the target number is essentially lowered or raised by as many three times as many as the task is eased or hindered.

## Levels of Difficulty

| Level | DC  | Description  |
| ----- | --- | ------------ |
| 0     | 0   | Routine      |
| 1     | 3   | Simple       |
| 2     | 6   | Standard     |
| 3     | 9   | Demanding    |
| 4     | 12  | Difficult    |
| 5     | 15  | Challenging  |
| 6     | 18  | Intimidating |
| 7     | 21  | Formidable   |
| 8     | 24  | Heroic       |
| 9     | 27  | Immortal     |
| 10    | 30  | Impossible   |
