// console.log("Houston, we're live");

// bag = [...];
// pot =[];
// arena =[];

userButton = {
    ulf: {
        draw: document.getElementById("ulf-button-draw").addEventListener("click", function() { console.log("Ulf draw clicked") }),
        bet: document.getElementById("ulf-button-bet").addEventListener("click", function() { console.log("Ulf bet clicked")}),
        decline: document.getElementById("ulf-button-decline").addEventListener("click", function() { console.log("Ulf decline clicked")})
    },
    sigrid: {
        draw: document.getElementById("sigrid-button-draw").addEventListener("click", function() { console.log("Sigrid draw clicked")}),
        bet: document.getElementById("sigrid-button-bet").addEventListener("click", function() { console.log("Sigrid bet clicked")}),
        decline: document.getElementById("sigrid-button-decline").addEventListener("click", function() { console.log("Sigrid decline clicked")})
    }
};

// vikingStockpile = {
//     ulf: {
//         gold: 0,
//         fish: 0,
//         badgold: 0,
//         badfish: 0
//     },
//     sigrid: {
//         gold: 0,
//         fish: 0,
//         badgold: 0,
//         badfish: 0
//     }
// };


// drawCard() {
//     if (arena.length = 1) {

//     }
// }

// calLBet() {

// }



// later, add passTurn and functionality preventing invalid turns to occur.