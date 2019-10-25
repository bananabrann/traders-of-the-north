> **This is a legacy build. This verison of the game is no longer supported and hosted.**

# Contents
* Traders of the North
* Getting Started
* Instructions
* What's Next?
* Contributing
* Tech Used & Build Theory
* Validator Info

# Traders of the North
A longboat full of treasures and loot from a recent successfull raid has docked! This has caught the attention of the settlement's top two traders: Ulf and Sigrid. The two vikings must use whatever strategy necessary and bet their way to the top to take home the best loot!

# Getting Started
~~To download and play, simlpy visit https://bananabrann.github.io/traders-of-the-north/~~

1. Execute `src/html/index.pug`. Example: `parcel src/html/index.pug`


# Instructions
### Turn-by-Turn
The object of the game is have the most amount of points by the time the final viking has played all their Runes. The total number of gold and fish a player has is displayed at the bottom. *This is not your score.*
1. On turn, players can either **draw** or **bet**.
1. On **draw**, a piece is taken at random and put into the Pot, and passes the turn. Be weary though, the Boatsmen will keep goods moving off the ship and force a trade should no one bet off the Pot!
1. On **bet**...
    1. Viking who called bet passes the turn to other viking.
    1. Other viking will either place a Rune as a bet, or PASS, declining the bet.
    1. If the other viking *birds*, the original viking can choose *not* to place a Rune and the other viking takes the pot, spending that Rune. This is effectively a bluff.
    1. If the other viking *declines* the bet, the original viking *must bet* and take the pot. **Basically, if a bet is called, someone has to bet. The person who calls the bet has the advantage of going last.**
1. Players continue cycle until all Runes are exhausted. See nuances sections for clarification of this specific version of Traders of the North.

### Pieces
Points are counted at the end of the documented
    1. Gold: 1 point
    2. Fish: The viking with the most fish at the end earns 6 points, all or nothing. Ties mean no fish.
    3. Bads: 2 points deducted from Pot. If Pot is in deficit, remainder will be taken from Stockpile. Stockpile cannot drop below 0.

### Nuances
1. Bet button does not do anything.
1. Once one viking has exhausted all of their Runes ...
    1. If remaining viking has two or more Runes, viking must press other viking's PASS button to accept Pot.
    1. If remaining viking has one last Rune, viking must press his own PASS button to accept the Pot.

# What's Next?
Short Term:
- Button disabler that enforces rules and actions.
- Add feature so that the remaining viking can finish off their Runes without having to press the other viking's PASS button.

Long Term:
- Develop game picture/banner for presentation in Readme and game.
- Additional game tile "Market Shutdown" that instantly triggers next player to bid.
- Additional win condition where after X amount of market shutdowns, game is closed for the round and points are calculated.
- Impletation of three rounds, or "market days", where Total Points are calculated, but stockpiles are refreshed.

# Contributing
I am very welcoming of any and all critiques of Traders of the North! Please simply send me a message on GitHub, https://github.com/bananabrann. I'd love to learn from you!
If you would like to provide critiques, or offer support in the game's development, please send me a message on GitHub, and/or make a pull request on the game's repo. https://github.com/bananabrann/traders-of-the-north

# Build Theory
The technologies used in Traders of the North, V1.0 is CSS, HTML, and JavaScript. Building it, I used Pug and SCSS files, compiled by Parcel. The game design and concept comes largely from the board game classic Ra, though some minor changes in rules and play were implemented to make the game simpler both in logic and the player. It should be noted that I neither have plans to ever commerialize Traders of the North neither make money in any way off it.

The majority of the game's operation and logic happens when a player, or "viking" as I might refer to it, places a Rune. The hardest challenges in this game were to make the code not redundant, by making the functions that handle the logic one function (as opposed to having two functions because of the two vikings). Another significant hurdle was collecting the pot, which is generated at random, into the *winning* viking's stockpile, an object. This one took a full day, but its challenge was recognized early and was one of the first functions tackled in development.

### Validators
The HTML validators gives several warnings, none that I feel I need to change, as I see similar errors in realworld appications.
I do not know what `Error: The character encoding was not declared. Proceeding using windows-1252.` is, and cannot find a reasonable solution for it. As it appears to not alter any code, I decided to leave it in.

CSS validator passes with no issues!

