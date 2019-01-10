const bag = ["gold", "gold", "fish", "fish", "fish", "badgold", "badfish", "badfish"];
// *Repeats are not nessesary for randomizer, but repeats are here for tile ratios

let pot = [];
let arena = [];

const foo = document.getElementById("pot");

const userButton = {
  ulf: {
    draw: document
      .getElementById("ulf-button-draw")
      .addEventListener("click", function() {
        drawCard("Ulf");
      }),
    bet: document
      .getElementById("ulf-button-bet")
      .addEventListener("click", function() {
        console.log("Ulf bet clicked!");
      }),
    decline: document
      .getElementById("ulf-button-decline")
      .addEventListener("click", function() {
        console.log("Ulf decline clicked!");
      }),
    rune: {
      r2: document
        .getElementById("ulf-rune2")
        .addEventListener("click", function() {
          placeRune(2, "ulf");
        }),
      r5: document
        .getElementById("ulf-rune5")
        .addEventListener("click", function() {
          placeRune(5, "ulf");
        }),
      r6: document
        .getElementById("ulf-rune6")
        .addEventListener("click", function() {
          placeRune(6, "ulf");
        }),
      r9: document
        .getElementById("ulf-rune9")
        .addEventListener("click", function() {
          placeRune(9, "ulf");
        })
    }
  },
  sigrid: {
    draw: document
      .getElementById("sigrid-button-draw")
      .addEventListener("click", function() {
        drawCard("Sigrid");
      }),
    bet: document
      .getElementById("sigrid-button-bet")
      .addEventListener("click", function() {
        console.log("Sigrid bet clicked!");
      }),
    decline: document
      .getElementById("sigrid-button-decline")
      .addEventListener("click", function() {
        console.log("Sigrid decline clicked!");
      }),
    rune: {
      r3: document
        .getElementById("sigrid-rune3")
        .addEventListener("click", function() {
          placeRune(3, "sigrid");
        }),
      r4: document
        .getElementById("sigrid-rune4")
        .addEventListener("click", function() {
          placeRune(4, "sigrid");
        }),
      r7: document
        .getElementById("sigrid-rune7")
        .addEventListener("click", function() {
          placeRune(7, "sigrid");
        }),
      // r7: "You correctly linked to r7!",
      r8: document
        .getElementById("sigrid-rune8")
        .addEventListener("click", function() {
          placeRune(8, "sigrid");
        })
    }
  }
};

let vikingStockpile = {
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
    })();
  } else {
    pot.push(bag[Math.floor(Math.random() * bag.length)]);

    let lastInPot = pot.slice(-1).pop();

    if (lastInPot === "gold") {
      (function() {
            let imgGold = document.createElement("img");
            imgGold.src = "/goldtoken.png";
            imgGold.id = "gold-token-picture";
            foo.appendChild(imgGold);
            // console.log("Gold Token Displayed!");
      })();

    } else if (lastInPot === "fish") {
        (function() {
            let imgFish = document.createElement("img");
            imgFish.src = "/fishtoken.png";
            imgFish.id = "fish-token-picture";
            foo.appendChild(imgFish);
            // console.log("Fish Token Displayed!");
        })();

    } else if (lastInPot === "badgold") {
        (function() {
            let imgBadGold = document.createElement("img");
            imgBadGold.src = "/badgoldtoken.png";
            imgBadGold.id = "badgold-token-picture";
            foo.appendChild(imgBadGold);
            // console.log("Badgold Token Displayed!");
        })();

    } else if (lastInPot === "badfish") {
        (function() {
            let imgBadfish = document.createElement("img");
            imgBadfish.src = "/badfishtoken.png";
            imgBadfish.id = "badfish-token-picture";
            foo.appendChild(imgBadfish);
            // console.log("Badfish Token Displayed!");
        })();
    };

    // console.log(`${viking} draws card ${lastInPot}.`);
    // console.log(`The pot is... ${pot}`);
  }
  console.log("drawCard complete!");
};

function placeRune(rune, viking) {
  if (arena.length < 1) {
    arena.push({
      rune: rune,
      viking: viking
    });

    console.log(`${rune} has been pushed into the arena...`);
    console.log("placeRune(rune,viking) complete!");

  } else if (arena.length === 1) {
    arena.push({
      rune: rune,
      viking: viking
    });
    
    collectPot();

    arena.splice(0, 1);
    // console.log(arena);
    // console.log("Arena cleared!");
    // Pot clear
    pot.splice(0, 8);
    // console.log(pot);
    // console.log("Pot cleared!");

    console.log("placeRune(rune,viking) complete!");
    
    }
};

function collectPot() {
    if (arena[0].rune > arena[1].rune) {
      // console.log("0 > 1 option triggered");
      arena.splice(1, 1);
    //   console.log(`${arena[0].viking} won! His/her stockpile changes are...`);
    //   console.log(vikingStockpile[arena[0].viking]);
  
      for (let i = 0; i < pot.length; i++) {
        vikingStockpile[arena[0].viking][pot[i]] =
          1 + vikingStockpile[arena[0].viking][pot[i]];
      }
    //   console.log(vikingStockpile[arena[0].viking]);
  
    } else if (arena[1].rune > arena[0].rune) {
      // console.log("1 > 0 option triggered");
      arena.splice(0, 1);
      console.log(`${arena[0].viking} won! His/her stockpile changes are...`);
      console.log(vikingStockpile[arena[0].viking]);
      for (let i = 0; i < pot.length; i++) {
        vikingStockpile[arena[0].viking][pot[i]] =
          1 + vikingStockpile[arena[0].viking][pot[i]];
      }
      console.log(vikingStockpile[arena[0].viking]);
    }
    console.log("collectPot() complete!");

    clearPotImages();

    updateStockpile();
}

function clearPotImages() {
    while (foo.firstChild) {
        foo.removeChild(foo.firstChild);
        console.log("removing...");
    };
    console.log("clearPotImages complete!");
}


function updateStockpile() {
    // Why does .textContent log the correct number, but does not allow updateStockpile() to overwrite it?
    const ulfGoldStoNum = document.getElementById("ulf-gold-stockpile-number");
    const ulfFishStoNum = document.getElementById("ulf-fish-stockpile-number");
    const sigridGoldStoNum = document.getElementById("sigrid-gold-stockpile-number");
    const sigridFishStoNum = document.getElementById("sigrid-fish-stockpile-number");
    // Keep these variables within the function, because of function run-path when drawCard is called
    let ulfTotalGold = (vikingStockpile.ulf.gold - ((vikingStockpile.ulf.badgold) * 2));
    let ulfTotalFish = (vikingStockpile.ulf.fish - (vikingStockpile.ulf.badfish * 2));
    let sigridTotalGold = (vikingStockpile.sigrid.gold - (vikingStockpile.sigrid.badgold * 2));
    let sigridTotalFish = (vikingStockpile.sigrid.fish - (vikingStockpile.sigrid.badfish * 2));

    if (ulfTotalGold <= 0) {
        ulfTotalGold = 0;
        vikingStockpile.ulf.gold = 0;
        vikingStockpile.ulf.badgold = 0;
    }
    if (ulfTotalFish <= 0) {
        ulfTotalFish = 0;
        vikingStockpile.ulf.fish = 0;
        vikingStockpile.ulf.badfish = 0;
    };
    if (sigridTotalGold <= 0) {
        sigridTotalGold = 0;
        vikingStockpile.sigrid.gold = 0;
        vikingStockpile.sigrid.badgold = 0;
    };
    if (sigridTotalFish <= 0) {
        sigridTotalFish = 0;
        vikingStockpile.sigrid.fish = 0;
        vikingStockpile.sigrid.badfish = 0;
    }

    (function() {
    // ulfGoldStoNum.innerHTML(ulfTotalGold);
    ulfGoldStoNum.innerHTML = ulfTotalGold;
    ulfFishStoNum.innerHTML = ulfTotalFish;
    sigridGoldStoNum.innerHTML = sigridTotalGold;
    sigridFishStoNum.innerHTML = sigridTotalFish;

    })();




    // var p = document.createElement('p')

    // var counter=0;
    // var q1=prompt("what's your name?");
    
    // if (q1==='akash'){
    //   counter=counter+1;
    //   //Update content of p element you created
    //   p.innerHTML = 'yay right: ' + counter + '/ 5'
    // }









    // This is for dynamic pictures within the stockpile area at bottom

    // if (ulfTotalGold >= 0) {
    //     // console.log(">= 0 is triggered")
    //     let i = document.getElementById("gold-")
    //     for (let i = 0; i < ulfTotalGold; i++) {
    //         // add pictures accordingly
    //         let imgStoGold = document.createElement("img");
    //         imgStoGold.src = "/goldtoken.png";
    //         imgStoGold.id = "gold-stockpile-token-picture";
    //         ulfGoldStoArea.appendChild(imgStoGold);
    //         console.log("Added one to Ulf's stockpile!");
    //     }
    // } else if (ulfTotalGold < 0) {
    //     console.log("< 0 is triggered")
    //         for (let i = 0; i > ulfTotalGold; i--) {
    //             ulfGoldStoArea.removeChild(ulfGoldStoArea.firstChild);
    //             vikingStockpile.ulf.badgold = 0;
    //         }
    //     //     console.log("Took one from Ulf's stockpile!");

    // }
    console.log("updateStockpile() complete!");
}







// ******************************************
// ******************************************
// CODE SCRAPYARD
// ******************************************
// ******************************************

// calLBet() {

// }

// later, add passTurn and functionality preventing invalid turns to occur.
