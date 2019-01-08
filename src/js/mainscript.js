// META-GAME RULES:

// Treasures from another successfull viking raid are being unloaded off the boats into Market. Two vikings, Sigrid and Ulf, fight for the spoils, each trying to take home more than their fair share. Players must draw tokens into a pot, making it ever bigger. Sound the Bell to ensure you have the final bet, or sound the bell early to tempt your opponent into betting his runes early! Beware though, the Market Master doesn't like wasting his time and will force you to bet should you sound the bell and the other viking declines. After all runes are used or the market comes to a close, the vikings go to the Longhouse to compare the stash!

// runes: The "money" tokens used in betting.
// gold: Worth one point if it is in the player's inventory
// fish: Whoever has the most fish at the end of the turn will receive 10 points
// skull: Loses two gold
// rottenfish: Loses two fish

// The main logic of the game will revolve around disabling and enabling buttons, which are linked to specific functions that execute the game's mechanics.

// *****************************************
// Each player will have an array for their Runeboard.
// *****************************************

let ulfRuneBoard = [2, 5, 6, 9];
let sigridRuneBoard = [3, 4, 7, 8];

// *****************************************
// Each player will have an object for their Stockpile that keeps track of what they won.
// *****************************************
vikingStockpile = {
    ulf: {
        gold: 0,
        fish: 0,
        skull: 0,
        rottenfish: 0
    },
    sigrid: {
        gold: 0,
        fish: 0,
        skull: 0,
        rottenfish: 0
    }
};

// A lot of the functions are doubled to make up for who's turn it is. Can I eliminate this by passing paramenters through every function like viking.[i][gold] and such so that one functino can handle both vikings?

// *****************************************
// Something will contain the pot. Pieces drawn are pushed here. Pieces, after a player has won a bet, are pulled from here and placed into the winner's Stockpile object for later calculation.
// Something that contains all the possible pieces of the game, called Bag.
// *****************************************

let pot = [];
let bag =[...];

// *****************************************
// Something needs to define the buttons, and what they do. These will link to HTML button elements that will be disabled and enabled based on various functions that control the game's mechanics.
// *****************************************

const ulfButtons = {
    draw: document.getElementByID(Ulf-Btn-Draw).onclick(function() {
        pot.push[bag.randompiece];
        passTurn();
    }),
    bell: document.getElementByID(Ulf-Btn-Bet).onclick (function() {
        soundBell();
    }),
    decline: document.getElementByID(Ulf-Btn-Decline-Bet).onclick(function() {
        mustBet = true;
        passTurn();
    })
};
const sigridButtons = {
    draw: document.getElementByID(Sigrid-Btn-Draw).onclick(function() {
        pot.push[bag.randompiece];
        passTurn();
    }),
    bell: document.getElementByID(Sigrid-Btn-Bet).onclick (function() {
        soundBell();
    }),
    decline: document.getElementByID(Sigrid-Btn-Decline-Bet).onclick(function() {
        mustBet = true;
        passTurn();
    })
};
// QUESTION: Is it possible to link an individual value within an array to a button? i.e. so I can have four buttons for the runes, and disable their clickableness accordingly.

// *****************************************
// Something needs to determine the turn, which is the main switcher for checking special values and disabling the other player's buttons for proper turn management.
// *****************************************
let ulfTurn = true;
let sigridTurn = false;

function passTurn() {
    if (ulfTurn === true) {
        ulfButtons.draw === enabled
        ulfButtons.bell === enabled
        ulfButtons.decline === disabled

        sigridButtons.draw === disabled
        sigridButtons.bell === disabled
        sigridButtons.decline === disabled

        ulfTurn = false;
        sigridTurn = true;

        limitMyStuff();
    };
    if (sigridTurn === true) {
        ulfButtons.draw === disabled
        ulfButtons.bell === disabled
        ulfButtons.decline === dsiabled

        sigridButtons.draw === enabled
        sigridButtons.bell === enabled
        sigridButtons.decline === disabled

        ulfTurn = true;
        sigridTurn = false;

        limitMyStuff();
    }
};

// *****************************************
// Something needs to check and limit the player's controls if certain turn modifiers are present.
// *****************************************
function limitMyStuff() {
    checkBetDecline();
    checkPot();
}

let mustBet = false;

function checkBetDecline() {
    if ((ulfTurn === true) && (mustBet === true)) {
        // Button modifiers here 
        mustBet = false;
    } else if ((sigridTurn === true) && (mustBet === true)) {
        // Button modifiers here
        mustBet = false;
    }
}
function checkPot() {
    if(pot.length > 6) {
        mustBet = true;
    }
}

// It might be cleaner but harder passing in a parameter through every function to count the turn and limit the doubling of the code for each function.

// *****************************************
// A function of sounding the bell needs to be defined.
// *****************************************

function soundBell() {
    if(ulfTurn === true) {
        // The other viking goes first when soundBell, but because of the order that ulfTurn is made, it will be opposite here.
        // disable/enable buttons
        // Onclick listen for user to click something on the Runeboard and store it into an array. let ulfsBet = onclick [i] .map?
        // u = ulf's bet
        // s = sigrid's bet
        checkBet(u, s)
    } else if (sigridTurn === true) {
        // disable buttons
        checkBet()
    }
};
function checkBet(i) {
    if (sigridRuneBoard[i] > ulfRuneBoard[i]) {
        // push the pot into the stockpile
    } else if (ulfRuneBoard[i] > sigridRuneBoard[i]) {
        // push the pot into the stockpile3
        // viking.push(pot[i])
    } else {
        mustBet = true;
        passTurn()
        // when the person who called the bet clicks, it will trigger passTurn. This part of the code will ensure the other viking actually bets.
    }
}

// QUESTION: Can all the doubling of code (having to check who's turn it is every single time) with passing in parameters that link into a the

// CONCERN: I imagine moving the pot's tiles into the object's elements and the checkbet function will be the most challenging part of this JavaScript. I think it's possible, but I feel like the code will be redundant in a lot of areas, and could be cleaned up nicely if using parameters? (See the top question)

// *****************************************
// End game calcutions check the if the game's victory conditions are met.
// *****************************************

// *****************************************
// BONUS: If one player runs out of runes, the other player can take two tokens per left over rune.

// BONUS: There is an additional token that triggers a bet sequence when drawn as if that player called a bet.