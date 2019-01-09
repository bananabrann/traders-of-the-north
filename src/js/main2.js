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

const vikingStockpile = {
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
            console.log("Gold Token Displayed!");
      })();

    } else if (lastInPot === "fish") {
        (function() {
            let imgFish = document.createElement("img");
            imgFish.src = "/fishtoken.png";
            imgFish.id = "fish-token-picture";
            foo.appendChild(imgFish);
            console.log("Fish Token Displayed!");
        })();

    } else if (lastInPot === "badgold") {
        (function() {
            let imgBadGold = document.createElement("img");
            imgBadGold.src = "/badgoldtoken.png";
            imgBadGold.id = "badgold-token-picture";
            foo.appendChild(imgBadGold);
            console.log("Badgold Token Displayed!");
        })();

    } else if (lastInPot === "badfish") {
        (function() {
            let imgBadfish = document.createElement("img");
            imgBadfish.src = "/badfishtoken.png";
            imgBadfish.id = "badfish-token-picture";
            foo.appendChild(imgBadfish);
            console.log("Badfish Token Displayed!");
        })();
    };

    console.log(`${viking} draws card ${lastInPot}.`);
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
    
    collectPot();

    arena.splice(0, 1);
    console.log(arena);
    console.log("Arena cleared!");
    // Pot clear
    pot.splice(0, 8);
    console.log(pot);
    console.log("Pot cleared!");

    clearPotImages();

    console.log("Rune comparrison complete and arena and pot successfully cleared.");
  }
};

function collectPot() {
    if (arena[0].rune > arena[1].rune) {
      // console.log("0 > 1 option triggered");
      arena.splice(1, 1);
      console.log(`${arena[0].viking} won! His/her stockpile changes are...`);
      console.log(vikingStockpile[arena[0].viking]);
  
      for (let i = 0; i < pot.length; i++) {
        vikingStockpile[arena[0].viking][pot[i]] =
          1 + vikingStockpile[arena[0].viking][pot[i]];
      }
      console.log(vikingStockpile[arena[0].viking]);
  
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
  }

function clearPotImages() {
    while (foo.firstChild) {
        foo.removeChild(foo.firstChild);
        console.log("removing...");
    };

}

// ******************************************
// ******************************************
// CODE SCRAPYARD
// ******************************************
// ******************************************

// calLBet() {

// }

// later, add passTurn and functionality preventing invalid turns to occur.
