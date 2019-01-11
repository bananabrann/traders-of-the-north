#Instructions
###Turn-byTurn
A longboat full of treasures and loot from a recent successfull raid has docked! This has caught the attention of the settlment's top two traders: Ulf and Sigrid. The two vikings must use strategy and bet their way to take home the best loot!

1. On turn, players can either **draw** or **bet**.
1. On **draw**, a piece is taken a random and put into the Pot, and passes the turn. Be weary though, the Boatsmen will keep goods moving off the ship and force a trade should no one bet off the Pot!
1. On **bet**...
    1. Viking who called bet passes turn to other viking.
    1. Other viking will either place a Rune as a bet, or PASS, declining the bet.
    1. If other viking *places* Rune to bid, the original viking can choose *not* to place a Rune and the other viking takes the pot, spending that Rune.
    1. If other viking *declines* the bet, the original viking *must bet* and take the pot.
1. Players continue cycle until all Runes are exhausted. See nuances sections for clarification on end-game.

###Pieces
Points are counted at the end of the documented
    1. Gold: 1 point
    2. Fish: The viking with the most fish at the end earns 6 points, all or nothing. Ties mean no fish.
    3. Bads: 2 points deducted from Pot. If Pot is in deficit, remainder will be taken from Stockpile. Stockpile cannot drop below 0.

#Nuances
1. Bet button does not do anything.
1. Once one viking has exhausted all of their Runes ...
    1. If remaining viking has two or more Runes, viking must press other viking's PASS button to accept Pot.
    1. If remaining viking has one last Rune, viking must press his own PASS button to accept the Pot.

#Build Theory
The technologies used in Traders of the North, V1.0 is CSS, HTML, and JavaScript. Building it, I used Pug and SCSS files, compiled by Parcel. The game design and concept comes largely from the board game classic Ra, though some minor changes in rules and play were implemented to make the game simpler both in logic and the player. It should be noted that I neither have plans to ever commerialize Traders of the North neither make money in any way off it.

The majority of the game's operation and logic happens when a player, or "viking" as I might refer to it, places a Rune. The hardest challenges in this game were to make the code not redundant, by making the functions that handle the logic one function (as opposed to having two functions because of the two vikings). Another significant hurdle was collecting the pot, which is generated at random, into the -winning- viking's stockpile, an object. This one took a full day, but its challenge was recognized early and was one of the first functions tackled in development.

###Validators
The HTML validators gives several warnings, none that I feel I need to change, as I see similar errors in realworld appications.
I do not know what "Error: The character encoding was not declared. Proceeding using windows-1252." is, and cannot find a reasonable solution for it. As it appears to not alter any code, I decided to leave it in.

CSS validator passes with no issues!






~~~ THE FUTURE! ~~~
Short Term:
- Button disabler that enforces rules and actions.
- Add feature so that the remaining viking can finish off their Runes without having to press the other viking's PASS button.

Long Term:
- Additional game tile "Market Shutdown" that instantly triggers next player to bid.
- Additional win condition where after X amount of market shutdowns, game is closed for the round and points are calculated.
- Impletation of three rounds, where Total Points are calculated, but stockpiles are refreshed.