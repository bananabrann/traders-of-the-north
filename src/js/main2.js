// const bag = [{"gold": 1}, {"fish": 1}, {"fish": 1}, {"fish": 1}, {"badgold": 1}, {"badfish": 1}, {"badfish": 1} ];
const bag = ["gold", "gold", "fish", "fish", "badgold", "badfish"];
// *Repeats are not nessesary for randomizer, but repeats are here for tile ratios
// Think about which one to use, for score calculation.

let pot =[];
// let pot2 = {
//     gold: 0,
//     fish: 0,
//     badfish: 0,
//     badgold: 0
// };

let arena =[];

// console.log(bag);

userButton = {
    // Don't use an integer for the rune object keys, it won't work.
    ulf: {
        draw: document.getElementById("ulf-button-draw").addEventListener("click", function() {drawCard("Ulf")} ),
        bet: document.getElementById("ulf-button-bet").addEventListener("click", function() { console.log("Ulf bet clicked!")}),
        decline: document.getElementById("ulf-button-decline").addEventListener("click", function() { console.log("Ulf decline clicked!")}),
        rune: {
            r2: document.getElementById("ulf-rune2").addEventListener("click", function() { placeRune(2, "ulf")}),
            r5: document.getElementById("ulf-rune5").addEventListener("click", function() { placeRune(5, "ulf")}),
            r6: document.getElementById("ulf-rune6").addEventListener("click", function() { placeRune(6, "ulf")}),
            r9: document.getElementById("ulf-rune9").addEventListener("click", function() { placeRune(9, "ulf")})
        }
    },
    sigrid: {
        draw: document.getElementById("sigrid-button-draw").addEventListener("click", function() { drawCard("Sigrid") }),
        bet: document.getElementById("sigrid-button-bet").addEventListener("click", function() { console.log("Sigrid bet clicked!")}),
        decline: document.getElementById("sigrid-button-decline").addEventListener("click", function() { console.log("Sigrid decline clicked!")}),
        rune: {
            r3: document.getElementById("sigrid-rune3").addEventListener("click", function() { placeRune(3, "sigrid")}),
            r4: document.getElementById("sigrid-rune4").addEventListener("click", function() { placeRune(4, "sigrid")}),
            r7: document.getElementById("sigrid-rune7").addEventListener("click", function() { placeRune(7, "sigrid")}),
            // r7: "You correctly linked to r7!",
            r8: document.getElementById("sigrid-rune8").addEventListener("click", function() { placeRune(8, "sigrid")}),
        }
    }
};

vikingStockpile = {
    ulf: {
        gold: 26,
        fish: 4,
        badgold: 0,
        badfish: 1
    },
    sigrid: {
        gold: 2,
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

    console.log(`${viking} draws card ${(pot.slice(-1).pop())}.`);
    console.log(`The pot is... ${pot}`);
    }
};

function placeRune(rune, viking) {
    if (arena.length < 1) {
        arena.push({
            rune: rune,
            viking: viking
        });

        console.log(`${rune} has been pushed into the arena...`);
    } else if (arena.length === 1) {
        arena.push({
            rune: rune,
            viking: viking
        });

        console.log(`${rune} has been pushed into the arena. We are ready to compare!`);
        (function () { 

            if (arena[0].rune > arena[1].rune ) {
                arena.splice(1, 1);

                console.log("0 > 1 option triggered");

                pot.forEach(tile => {
                    vikingStockpile[arena[0].viking].push({[tile]: tile})
                    console.log(tile)
                })
                
                // console.log(vikingStockpile.ulf)

                console.log(vikingStockpile[arena[0].viking])

            } else if (arena[1].rune > arena[0].rune) {
                console.log("1 > 0 option triggered");

                arena.splice(0, 1);

                console.log(vikingStockpile[arena[0].viking])


                // return vikingStockpile[arena[0].viking].push(pot)

            }
            // console.log(`The winner viking is ${winnerViking}`);
         })();

        

        // (function() {
        //     // Evaluate winner
        //     console.log(arena[0]);
        //     // if (arena[0] > arena[1]) {

        //     // }
        // });
        // console.log(`The winner is ${winner}"`);
    }
}













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

// function claimPot(viking, y) {
//     console.log(`${viking} claims the pot of ${pot}`);
// }

// calLBet() {

// }



// later, add passTurn and functionality preventing invalid turns to occur.