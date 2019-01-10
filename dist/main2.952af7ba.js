// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../js/main2.js":[function(require,module,exports) {
var bag = ["gold", "gold", "gold", "fish", "fish", "fish", "fish", "fish", "badgold", "badfish"]; // *Repeats are not nessesary for randomizer, but repeats are here for tile ratios

var pot = [];
var arena = [];
var foo = document.getElementById("pot");
var ulfGoldStoNum = document.getElementById("ulf-gold-stockpile-number");
var ulfFishStoNum = document.getElementById("ulf-fish-stockpile-number");
var sigridGoldStoNum = document.getElementById("sigrid-gold-stockpile-number");
var sigridFishStoNum = document.getElementById("sigrid-fish-stockpile-number");
var gameMessage = document.getElementById("message-board-content");
var ulfRunesPlayed = 0;
var sigridRunesPlayed = 0;
var ulfFinalScore = 0;
var sigridFinalScore = 0;
var userButton = {
  ulf: {
    draw: document.getElementById("ulf-button-draw").addEventListener("click", function () {
      drawCard("Ulf");
    }),
    bet: document.getElementById("ulf-button-bet").addEventListener("click", function () {
      console.log("Ulf bet clicked!");
    }),
    decline: document.getElementById("ulf-button-decline").addEventListener("click", function () {
      declineBet("ulf");
    }),
    rune: {
      r2: document.getElementById("ulf-rune2").addEventListener("click", function () {
        placeRune(2, "ulf");
      }),
      r5: document.getElementById("ulf-rune5").addEventListener("click", function () {
        placeRune(5, "ulf");
      }),
      r6: document.getElementById("ulf-rune6").addEventListener("click", function () {
        placeRune(6, "ulf");
      }),
      r9: document.getElementById("ulf-rune9").addEventListener("click", function () {
        placeRune(9, "ulf");
      })
    }
  },
  sigrid: {
    draw: document.getElementById("sigrid-button-draw").addEventListener("click", function () {
      drawCard("Sigrid");
    }),
    bet: document.getElementById("sigrid-button-bet").addEventListener("click", function () {
      console.log("Sigrid bet clicked!");
    }),
    decline: document.getElementById("sigrid-button-decline").addEventListener("click", function () {
      declineBet("sigrid");
    }),
    rune: {
      r3: document.getElementById("sigrid-rune3").addEventListener("click", function () {
        placeRune(3, "sigrid");
      }),
      r4: document.getElementById("sigrid-rune4").addEventListener("click", function () {
        placeRune(4, "sigrid");
      }),
      r7: document.getElementById("sigrid-rune7").addEventListener("click", function () {
        placeRune(7, "sigrid");
      }),
      // r7: "You correctly linked to r7!",
      r8: document.getElementById("sigrid-rune8").addEventListener("click", function () {
        placeRune(8, "sigrid");
      })
    }
  }
};
var vikingStockpile = {
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
    (function () {
      gameMessage.innerHTML = "The market is full and the Boatsmen can't unload any more. YOU must bid!";
      console.log("The market is full, you have to bet!"); // Add CSS modifiers in the future here!
    })();
  } else {
    pot.push(bag[Math.floor(Math.random() * bag.length)]);
    var lastInPot = pot.slice(-1).pop();
    gameMessage.innerHTML = "".concat(lastInPot, " is unloaded from the Longboat.");

    if (lastInPot === "gold") {
      (function () {
        var imgGold = document.createElement("img");
        imgGold.src = "/goldtoken.png";
        imgGold.id = "gold-token-picture";
        foo.appendChild(imgGold); // console.log("Gold Token Displayed!");
      })();
    } else if (lastInPot === "fish") {
      (function () {
        var imgFish = document.createElement("img");
        imgFish.src = "/fishtoken.png";
        imgFish.id = "fish-token-picture";
        foo.appendChild(imgFish); // console.log("Fish Token Displayed!");
      })();
    } else if (lastInPot === "badgold") {
      (function () {
        var imgBadGold = document.createElement("img");
        imgBadGold.src = "/badgoldtoken.png";
        imgBadGold.id = "badgold-token-picture";
        foo.appendChild(imgBadGold); // console.log("Badgold Token Displayed!");
      })();
    } else if (lastInPot === "badfish") {
      (function () {
        var imgBadfish = document.createElement("img");
        imgBadfish.src = "/badfishtoken.png";
        imgBadfish.id = "badfish-token-picture";
        foo.appendChild(imgBadfish); // console.log("Badfish Token Displayed!");
      })();
    } // console.log(`${viking} draws card ${lastInPot}.`);
    // console.log(`The pot is... ${pot}`);

  } //   console.log("drawCard complete!");

}

;

function placeRune(rune, viking) {
  console.log(document.getElementById(viking + "-rune" + rune));

  if (arena.length < 1) {
    document.getElementById(viking + "-rune" + rune).style.transform = "translateY(-30px)";
    arena.push({
      rune: rune,
      viking: viking
    });
    gameMessage.innerHTML = "".concat(arena[0].viking, " has placed a ").concat(arena[0].rune, " Rune");
    console.log("".concat(rune, " has been pushed into the arena...")); // console.log("placeRune(rune,viking) complete!");
  } else if (arena.length === 1) {
    arena.push({
      rune: rune,
      viking: viking
    });
    collectPot();
    arena.splice(0, 1);
    pot.splice(0, 8); // console.log("placeRune(rune,viking) complete!");
    // Simple, temp victory condition for GA presentation:

    if (ulfRunesPlayed >= 4 && sigridRunesPlayed >= 4) {
      checkVictory();
    }
  } //   console.log(`Ulf's final score is ${ulfFinalScore}`);
  //   console.log(`Ulf's final score is ${sigridFinalScore}`);

}

;

function collectPot() {
  // Send the pot into the object of the winning viking:
  if (arena[0].rune > arena[1].rune) {
    //   console.log(`${arena[0].viking} won! His/her stockpile changes are...`);
    //   console.log(vikingStockpile[arena[0].viking]);
    gameMessage.innerHTML = "".concat(arena[1].viking, " placed a ").concat(arena[1].rune, " Rune. ").concat(arena[0].viking, " won! An empty market awaits the eager boatsmen.");
    arena.splice(1, 1);
    document.getElementById(arena[0].viking + "-" + "rune" + arena[0].rune).style.display = "none";

    if (arena[0].viking === "ulf") {
      ulfRunesPlayed++;
    }

    if (arena[0].viking === "sigrid") {
      sigridRunesPlayed++;
    }

    for (var i = 0; i < pot.length; i++) {
      vikingStockpile[arena[0].viking][pot[i]] = 1 + vikingStockpile[arena[0].viking][pot[i]];
    } //   console.log(vikingStockpile[arena[0].viking]);

  } else if (arena[1].rune > arena[0].rune) {
    //   console.log(`${arena[0].viking} won! His/her stockpile changes are...`);
    //   console.log(vikingStockpile[arena[0].viking]);
    document.getElementById(arena[0].viking + "-rune" + arena[0].rune).style.transform = "none";
    gameMessage.innerHTML = "".concat(arena[1].viking, " has placed a ").concat(arena[1].rune, " Rune. ").concat(arena[1].viking, " won! An empty market looks appetizing to the boatsmen.");
    console.log("The rune in question is..");
    console.log(arena[0].viking + "-rune" + arena[0].rune);
    arena.splice(0, 1);
    document.getElementById(arena[0].viking + "-" + "rune" + arena[0].rune).style.display = "none";

    if (arena[0].viking === "ulf") {
      ulfRunesPlayed++;
    }

    if (arena[0].viking === "sigrid") {
      sigridRunesPlayed++;
    }

    for (var _i = 0; _i < pot.length; _i++) {
      vikingStockpile[arena[0].viking][pot[_i]] = 1 + vikingStockpile[arena[0].viking][pot[_i]];
    }

    console.log(vikingStockpile[arena[0].viking]);
  }

  console.log("collectPot() complete!");
  clearPotImages();
  updateStockpile();
}

;

function clearPotImages() {
  while (foo.firstChild) {
    foo.removeChild(foo.firstChild);
    console.log("removing...");
  }

  console.log("clearPotImages complete!");
}

;

function updateStockpile() {
  // Why does .textContent log the correct number, but does not allow updateStockpile() to overwrite it?
  // Keep these variables within the function, because of function run-path when drawCard is called
  var ulfTotalGold = vikingStockpile.ulf.gold - vikingStockpile.ulf.badgold * 2;
  var ulfTotalFish = vikingStockpile.ulf.fish - vikingStockpile.ulf.badfish * 2;
  var sigridTotalGold = vikingStockpile.sigrid.gold - vikingStockpile.sigrid.badgold * 2;
  var sigridTotalFish = vikingStockpile.sigrid.fish - vikingStockpile.sigrid.badfish * 2;

  if (ulfTotalGold <= 0) {
    ulfTotalGold = 0;
    vikingStockpile.ulf.gold = 0;
    vikingStockpile.ulf.badgold = 0;
  }

  if (ulfTotalFish <= 0) {
    ulfTotalFish = 0;
    vikingStockpile.ulf.fish = 0;
    vikingStockpile.ulf.badfish = 0;
  }

  if (sigridTotalGold <= 0) {
    sigridTotalGold = 0;
    vikingStockpile.sigrid.gold = 0;
    vikingStockpile.sigrid.badgold = 0;
  }

  if (sigridTotalFish <= 0) {
    sigridTotalFish = 0;
    vikingStockpile.sigrid.fish = 0;
    vikingStockpile.sigrid.badfish = 0;
  }

  (function () {
    // ulfGoldStoNum.innerHTML(ulfTotalGold);
    ulfGoldStoNum.innerHTML = ulfTotalGold;
    ulfFishStoNum.innerHTML = ulfTotalFish;
    sigridGoldStoNum.innerHTML = sigridTotalGold;
    sigridFishStoNum.innerHTML = sigridTotalFish;
  })(); // var p = document.createElement('p')
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

;

function checkVictory() {
  if (ulfFishStoNum.textContent > sigridFishStoNum.textContent) {
    ulfFinalScore += 6;
    console.log("Ulf has the most fish! Added 6 to total.");
  } else if (sigridFishStoNum.textContent > ulfFishStoNum.textContent) {
    sigridFinalScore += 6;
    console.log("Sigrid has the most fish! Adding 6 to total.");
  }

  for (var i = 0; i < ulfGoldStoNum.textContent; i++) {
    ulfFinalScore++;
    console.log("Gold added to Ulf's total.");
  }

  for (var _i2 = 0; _i2 < sigridGoldStoNum.textContent; _i2++) {
    sigridFinalScore++;
    console.log("Gold added to Sigrid total.");
  }

  var winningViking = "";

  if (ulfFinalScore > sigridFinalScore) {
    winningViking = "Ulf";
  } else if (sigridFinalScore > ulfFinalScore) {
    winningViking = "Sigrid";
  }

  gameMessage.innerHTML = "The Day Is Over! Ulf's Honor is ".concat(ulfFinalScore, ". Sigrid's Honor is ").concat(sigridFinalScore, ". The most talked about viking at the LongHouse tonight is ").concat(winningViking); // Make message board display viking has won message
}

;

function declineBet(viking) {
  placeRune(0, viking);
} // ******************************************
// ******************************************
// CODE SCRAPYARD
// ******************************************
// ******************************************
// calLBet() {
// }
// later, add passTurn and functionality preventing invalid turns to occur.
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51358" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/main2.js"], null)
//# sourceMappingURL=/main2.952af7ba.map