import { doWhileStatement } from "babel-types";

// META-GAME RULES:

// Two human players pull tokens from a bag into a pot. Based on the token drawn, the token has a different point value, explained below. After all Runes are used, or 20 turns pass, the player with the most points wins!
// runes: The "money" tokens used in betting.
// gold: Worth one point if it is in the player's inventory
// fish: Whoever has the most fish at the end of the turn will receive 10 points
// skull: Loses two gold
// rottenfish: Loses two fish

// Each player will have an array for their Rune board.
let ulfRuneBoard = [2, 5, 6, 9];
let sigridRuneBoard = [3, 4, 7, 8];

// Each player will have an object for their Stockpile that keeps track of what they collected.
let ulfStockpile = {
    gold: 0,
    fish: 0,
    skull: 0,
    rottenfish: 0
};

let sigridStockpile = {
    gold: 0,
    fish: 0,
    skull: 0,
    rottenfish: 0
};

// Something will contain the pot. Pieces draw are pushed here. Pieces, after bet, are pulled from here into the Stockpile objects for later calculation.
let pot = [];

// Something that contains all the possible pieces of the game, called Bag.
let bag =[...];

// Something needs to define the buttons, and what they do.
const ulfButtons = {
    draw: document.getElementByID(Ulf-Btn-Draw).onclick(function() {
        pot.push(bag.randompiece);
        passTurn();
    }),
    odin: document.getElementByID(Ulf-Btn-Bet).onclick (function() {
        callOdin();
    }),
    decline: document.getElementByID(Ulf-Btn-Decline-Bet) function() {
        
        mustBet = true;
    }
}

// I plan on basically having all the buttons linking to something at all time, but the turn and sequence determines which are enabled.

// Something needs to determine the turn, and enable/disable buttons.
let t= 0;
passTurn() {
    if (t = 0) {
        ulfButtons.draw === enabled
        ulfButtons.odin === enabled
        ulfButtons.decline === disabled

        sigridButtons.draw === disabled
        sigridButtons.odin === disabled
        sigridButtons.decline === disabled

        checkOdinBetDecline();
        t++;
    };
    if (t = 1) {
        ulfButtons.draw === disabled
        ulfButtons.odin === disabled
        ulfButtons.decline === dsiabled

        sigridButtons.draw === enabled
        sigridButtons.odin === enabled
        sigridButtons.decline === disabled

        checkOdinBetDecline();
        t = 0;
    }
    checkOdinBetDecline();
};

// Something needs to check to see if the conditions for a declined bet are made true.
let mustBet = false;

if (mustBet === true) {
    // disable all buttons besides Rune
    mustBet = false;
};

// The player will have two options on their turn:
// Draw: Player draws one token and it is pushed into the pot, passing the turn.    drawbutton.onclick() {drawSequence(), passTurn()}
// Bet: Player selects a Rune, and the other player raises (places a higher Rune) or declines.    betbutton.onclick() {betSequence()}

callOdin() {
    if(other player === declinebutton.onclick) {
        original player places Rune down
    } else if (other player === Rune[i].onclick
};
// If a player draws, a piece is randomly selected from Bag and moved into Pot, and passes the turn.
// if(player onclick draw) {pot.push(bag.randopiece)}

// Function where if the pot becomes greater than 6, the next player's only choice is to bet.
// if(pot > 6) {drawButton == disabled} else {...}

// If a player bets, the OTHER player then has the option to select one of his/her runes to bet. If bet is accepted, the original player then can decline the bet or place a higher rune. If the other player declines the bet, the original player MUST the pot.

// Accepting the pot results in the player losing the selected rune, losing it for the remainder of the game.

// The received tokens are pushed into the player's stockpile, and a simple calculation of the token piece determines whether a gold piece is added/lost, or a fish token is added to his/her stockpile.

// Game ends if XX turns are taken, or if both players run out of runes.

// BONUS: If one player runs out of runes, the other player can take two tokens per left over rune.

// BONUS: There is an additional token that triggers a bet sequence when drawn as if that player called a bet.