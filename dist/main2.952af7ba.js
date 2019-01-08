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
// const bag = [{"gold": 1}, {"fish": 1}, {"fish": 1}, {"fish": 1}, {"badgold": 1}, {"badfish": 1}, {"badfish": 1} ];
var bag = ["gold", "gold", "fish", "fish", "fish", "badgold", "badfish"]; // *Repeats are not nessesary for randomizer, but repeats are here for tile ratios
// Think about which one to use, for score calculation.

var pot = [];
var arena = []; // console.log(bag);

userButton = {
  // Don't use an integer for the rune object keys, it won't work.
  ulf: {
    draw: document.getElementById("ulf-button-draw").addEventListener("click", function () {
      drawCard("Ulf");
    }),
    bet: document.getElementById("ulf-button-bet").addEventListener("click", function () {
      console.log("Ulf bet clicked!");
    }),
    decline: document.getElementById("ulf-button-decline").addEventListener("click", function () {
      console.log("Ulf decline clicked!");
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
      console.log("Sigrid decline clicked!");
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
    (function () {
      console.log("The market is full, you have to bet!"); // Add CSS modifiers in the future here!
    })();
  } else {
    pot.push(bag[Math.floor(Math.random() * bag.length)]);
    console.log("".concat(viking, " draws card ").concat(pot.slice(-1).pop(), "."));
    console.log("The pot is... ".concat(pot));
  }
}

;

function placeRune(rune, viking) {
  if (arena.length < 1) {
    arena.push({
      rune: rune,
      viking: viking
    });
    console.log("".concat(rune, " has been pushed into the arena..."));
  } else if (arena.length === 1) {
    arena.push({
      rune: rune,
      viking: viking
    });
    console.log("".concat(rune, " has been pushed into the arena. We are ready to compare!"));

    (function () {
      if (arena[0].rune > arena[1].rune) {
        // console.log("0 > 1 option triggered");
        arena.splice(1, 1);
        console.log(vikingStockpile[arena[0].viking]);

        for (var i = 0; i < pot.length; i++) {
          vikingStockpile[arena[0].viking][pot[i]] = 1 + vikingStockpile[arena[0].viking][pot[i]];
        }

        ;
        console.log(vikingStockpile[arena[0].viking]);
      } else if (arena[1].rune > arena[0].rune) {
        // console.log("1 > 0 option triggered");
        arena.splice(0, 1);
        console.log(vikingStockpile[arena[0].viking]);

        for (var _i = 0; _i < pot.length; _i++) {
          vikingStockpile[arena[0].viking][pot[_i]] = 1 + vikingStockpile[arena[0].viking][pot[_i]];
        }

        ;
        console.log(vikingStockpile[arena[0].viking]);
      }
    })();
  }
} // ******************************************
// ******************************************
// CODE SCRAPYARD
// ******************************************
// ******************************************


function checkBet() {
  if (arena.length >= 2) {
    console.log("checkBet works");
  }
}

checkBet(); // function claimPot(viking, y) {
//     console.log(`${viking} claims the pot of ${pot}`);
// }
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63983" + '/');

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