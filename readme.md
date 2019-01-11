++++++++++++++++++++++++++
HTML & CSS VALIDATOR
++++++++++++++++++++++++++
The HTML validators gives several warnings, none that I feel I need to change, as I see similar errors in realworld appications.
The HTML validator gives and ERROR on Norse fonttype not having an href. The font is linked locally and carried within the file, and apparently does not need an href.



++++++++++++++++++++++++++
INSTRUCTIONS
++++++++++++++++++++++++++
~~~ TURN-BY-TURN ~~~
A longboat full of treasures and loot from a recent successfull raid has docked! This has caught the attention of the settlment's top two traders: Ulf and Sigrid. The two vikings must use strategy and bet their way to take home the best loot!

- On turn, players can either DRAW or BET. 
- On DRAW, a piece is taken a random and put into the Pot, and passes the turn. Be weary though, the Boatsmen will keep goods moving off the ship and force a trade should no one bet off the Pot!
- On BET...
    1. Viking who called bet passes turn to other viking.
    2. Other viking will either place a Rune as a bet, or PASS, declining the bet.
    3. If other viking places Rune to bid, the original viking can choose not to place a Rune and the other viking takes the pot, spending that Rune.
    3. If other viking declines the bet, the other viking MUST BET and take the pot.
- Players continue cycle until all Runes are exhausted.

~~~ PIECES ~~~
Points are counted at the end of the documented
    1. Gold: 1 point
    2. Fish: The viking with the most fish at the end earns 6 points, all or nothing. Ties mean no fish.
    3. Bads: 2 points deducted from Pot. If Pot is in deficit, remainder will be taken from Stockpile. Stockpile cannot drop below 0.

~~~ NUANCES ~~~
1. Bet button does not do anything.
2. Once one viking has exhausted all of their Runes ...
    1. If remaining viking has two or more Runes, viking must press other viking's PASS button to accept Pot.
    2. If remaining viking has one last Rune, viking must press his own PASS button to accept the Pot.

~~~ THE FUTURE! ~~~
Short Term:
- Button disabler that enforces rules and actions.
- Add feature so that the remaining viking can finish off their Runes without having to press the other viking's PASS button.

Long Term:
- Additional game tile "Market Shutdown" that instantly triggers next player to bid.
- Additional win condition where after X amount of market shutdowns, game is closed for the round and points are calculated.
- Impletation of three rounds, where Total Points are calculated, but stockpiles are refreshed.