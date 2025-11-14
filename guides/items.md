---
title: Item Creation
layout: libdoc_page.liquid
permalink: guides/item/index.html
date: false
tags:
  - how-to
  - items
  - mechanics
eleventyNavigation:
  key: Item Creation
  parent: Guides
  title: Item Creation
  order: 6
---

## Proceedure

An item in Tag & Tally is a collection of tags that can be used to ease or hinder game play.

Follow the following simple steps to create an item. 

1. Create a concept of what you want the item to be.
2. Design the item sentence around this concept.
3. Roll 1d10 to determine the level of the item.

## Item Sentences

There are various items in Tag & Tally, each having a slightly different sentence format.

{% sentence 'Item', '[Name] is a [descriptor] [item type] that [does something special].', 'loot' %}

{% sentence 'Armor', '[Name] is a [descriptor] [material] [armor type] that [does something special].', 'shield' %}

{% sentence 'Weapon', '[Name] is a [descriptor] [material] [weapon type] that does [damage type] damage and [something special].', 'sword' %}

{% sentence 'Trap', '[Name] is a [descriptor] [trap type] that [trigger condition] and [effect or consequence].', 'danger' %}

{% sentence 'Consumable', '[Name] is a [descriptor] [consumable type] that [effect on consumption] and [any special property or twist].', 'potion' %}

