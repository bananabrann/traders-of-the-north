// const bag = [{"gold": 1}, {"fish": 1}, {"fish": 1}, {"fish": 1}, {"badgold": 1}, {"badfish": 1}, {"badfish": 1} ];
const bag = ["gold", "gold", "fish", "fish", "badgold", "badfish"];
// *Repeats are not nessesary for randomizer, but repeats are here for tile ratios
// Think about which one to use, for score calculation.

let pot =[];
let arena =[];

console.log(bag);

userButton = {
    // Don't use an integer for the rune object keys, it won't work.
    ulf: {
        draw: document.getElementById("ulf-button-draw").addEventListener("click", function() {drawCard("Ulf")} ),
        bet: document.getElementById("ulf-button-bet").addEventListener("click", function() { console.log("Ulf bet clicked!")}),
        decline: document.getElementById("ulf-button-decline").addEventListener("click", function() { console.log("Ulf decline clicked!")}),
        rune: {
            r2: document.getElementById("ulf-rune2").addEventListener("click", function() { console.log("Ulf Rune 2 clicked!")}),
            r5: document.getElementById("ulf-rune5").addEventListener("click", function() { console.log("Ulf Rune 5 clicked!")}),
            r6: document.getElementById("ulf-rune6").addEventListener("click", function() { console.log("Ulf Rune 6 clicked!")}),
            r9: document.getElementById("ulf-rune9").addEventListener("click", function() { console.log("Ulf Rune 9 clicked!")})
        }
    },
    sigrid: {
        draw: document.getElementById("sigrid-button-draw").addEventListener("click", function() { drawCard("Sigrid") }),
        bet: document.getElementById("sigrid-button-bet").addEventListener("click", function() { console.log("Sigrid bet clicked!")}),
        decline: document.getElementById("sigrid-button-decline").addEventListener("click", function() { console.log("Sigrid decline clicked!")}),
        rune: {
            r3: document.getElementById("sigrid-rune3").addEventListener("click", function() { console.log("Sigrid Rune 3 clicked!")}),
            r4: document.getElementById("sigrid-rune4").addEventListener("click", function() { console.log("Sigrid Rune 4 clicked!")}),
            r7: document.getElementById("sigrid-rune7").addEventListener("click", function() { console.log("Sigrid Rune 7 clicked!")}),
            // r7: "You correctly linked to r7!",
            r8: document.getElementById("sigrid-rune8").addEventListener("click", function() { console.log("Sigrid Rune 8 clicked!")}),
        }
    }
};

vikingStockpile = {
    ulf: {
        gold: 0,
        fish: 0,
        badgold: 0,
        badfish: 0
    },
    sigrid: {
        gold: 0,
        fish: 0,
        badgold: 0,
        badfish: 0
    }
};


function drawCard(viking) {
    if (pot.length >= 8) {
        (function() {
            console.log("The market is full, you have to bet!");
            // Add CSS modifiers in the future here!
        }) ();
    } else {pot.push(bag[Math.floor(Math.random()*bag.length)]);
    // passTurn();

    console.log(`${viking} draws card ${(pot.slice(-1).pop())}.`);
    console.log(`The pot is... ${pot}`);
    }
};














// ******************************************
// ******************************************
// CODE SCRAPYARD
// ******************************************
// ******************************************


function checkBet() {
    if (arena.length >= 2) {
        console.log("checkBet works");
    }
}
checkBet();

function claimPot(viking, y) {
    console.log(`${viking} claims the pot of ${pot}`);
}

// calLBet() {

// }



// later, add passTurn and functionality preventing invalid turns to occur.