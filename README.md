# YuGiOh! Javascript engine


## Disclaimer

This is not an official project. It is only moved by personal willing to build an engine for the game card.

## Motivation

Initially inspired by how the engine of the game Yu-Gi-Oh!: Nightmare Troubadour for Nintendo DS™ worked, I decided that I wanted to program my own engine for that fabulous game.
The game per itself is very interesting, plus all its mechanic which basically is a huge state machine with many events going on. For a programmer that is quite catching.

## General idea for the engine

The idea is to create an YuGiOh engine, event-oriented, where cards can be played through the different phases of the game. It is not intended to be a final workpiece with an graphical interface, but rather, define a common interface where other applications can communicate with.
For example, defining a CLI where the engine can work, it is easy after to create one graphical interface that translates visual-action-commands to commands and vice-versa.
That idea still needs to be worked out more. For now, keep in mind that the aim here is to develop a full functional game core, which is already enough complicated just by itself. 

## TDD

All the code is still very fresh ane may change a lot. To diminish problems the project is being driven by tests to secure future needs for refactoring.
[QUnit](http://qunitjs.com/) from the jQuery Foundation is being used. The respective files responsible for this are *tests.html* and *tests.js*. 

## Official references

The mechanical details about the engine are going to be solely based on the official rulebook for YuGiOh!.
At the moment that this text is being written, the most recent guide is the [version 9 Konami™ Rulebook](http://www.yugioh-card.com/uk/rulebook/Rulebook_v9_en.pdf).
All the domain knowledge must be taken from official sources to guide the engine development.

## Contributions

All external contributions are welcome here :)


![picture](http://i59.tinypic.com/2u6i3qt.png)